# Hand-written generations that each break exactly one BLD-120 check, to prove
# the checker. Regenerate with: python3 make.py
import json
GT = {"concept": "PERSON", "peerType": "person", "confidence": 3,
      "source": {"adaptor": "fhir", "system": "a FHIR R4 server", "entity": "Patient", "native": "patient", "confidence": 4, "origin": "generated"},
      "modify": {"field": "birthDate", "instruction": "set its birthDate to today's date"},
      "target": {"adaptor": "openmrs", "system": "OpenMRS", "entity": "PatientCreate", "native": "patient", "confidence": 3, "origin": "converted"}}
PROMPT = "Get the latest patient from a FHIR R4 server, set its birthDate to today's date, and upload it as a patient to OpenMRS."

A_OK = "get('Patient', { _count: 1, _sort: '-_lastUpdated' });"
A_BAD_ENDPOINT = "get('Patients', { _count: 1 });"
B_OK = """fn(state => {
  const p = state.data.entry[0].resource;
  state.patient = {
    identifiers: [{ identifier: p.id, identifierType: '05a29f94-c0ed-11e2-94be-8c13d4e3a5b3', preferred: true }],
    person: { gender: p.gender === 'female' ? 'F' : 'M', birthdate: new Date().toISOString().slice(0, 10),
      names: [{ givenName: p.name[0].given[0], familyName: p.name[0].family }] },
  };
  return state;
});
create('patient', state => state.patient);"""
# Spec-valid: our OpenMRS spec types PatientCreate.person as a person UUID.
# Real OpenMRS also accepts a nested person object, so the realistic form of
# this job fails the body check on spec strictness, not code (see README).
B_OK = B_OK.replace("""person: { gender: p.gender === 'female' ? 'F' : 'M', birthdate: new Date().toISOString().slice(0, 10),
      names: [{ givenName: p.name[0].given[0], familyName: p.name[0].family }] },""", """person: p.gender === 'female' ? p.id : p.id,""")
B_BAD_FIELD = B_OK.replace("p.gender === 'female'", "p.sex === 'female'")
B_BAD_BODY = B_OK.replace("preferred: true", "preferred: 'yes'")
B_BAD_ENDPOINT = B_OK.replace("create('patient'", "create('patients'")

def yaml(a, b):
    ind = lambda s: "\n".join("      " + l for l in s.split("\n"))
    return f"""name: fhir-to-openmrs
jobs:
  get-patient:
    name: Get patient
    adaptor: '@openfn/language-fhir@latest'
    body: |
{ind(a)}
  create-patient:
    name: Create patient
    adaptor: '@openfn/language-openmrs@latest'
    body: |
{ind(b)}
triggers:
  webhook:
    type: webhook
    enabled: true
edges:
  webhook->get-patient:
    source_trigger: webhook
    target_job: get-patient
    condition_type: always
  get-patient->create-patient:
    source_job: get-patient
    target_job: create-patient
    condition_type: on_job_success
"""

CASES = {"fx-ok": (A_OK, B_OK), "fx-bad-source-endpoint": (A_BAD_ENDPOINT, B_OK), "fx-bad-source-field": (A_OK, B_BAD_FIELD),
         "fx-bad-target-body": (A_OK, B_BAD_BODY), "fx-bad-target-endpoint": (A_OK, B_BAD_ENDPOINT)}
with open("prompts.jsonl", "w") as f:
    for cid, (a, b) in CASES.items():
        f.write(json.dumps({"id": cid, "prompt": PROMPT, **GT}) + "\n")
        json.dump({"id": cid, "prompt": PROMPT, "workflow_yaml": yaml(a, b), "response": None, "usage": None, "meta": None, "ms": 0, "at": "fixture"},
                  open(f"generations/{cid}.json", "w"), indent=2)
