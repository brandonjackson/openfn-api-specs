# Stand-in for the assistant: the workflow it would plausibly return for each
# of the first 10 pilot prompts, written from adaptor docs, not from our specs.
import json
W = {
"bld120-0001": ("dhis2", """get('users', { fields: 'id,firstName,surname,email,phoneNumber,birthday,userCredentials[username]', order: 'created:desc', pageSize: 1 });""",
"openmrs", """fn(state => {
  const u = state.data.users[0];
  state.user = {
    username: u.userCredentials.username,
    password: 'Openmrs123!',
    person: { names: [{ givenName: u.firstName, familyName: u.surname }], gender: 'U', birthdate: new Date().toISOString().slice(0, 10) },
    roles: ['Provider'],
  };
  return state;
});
create('user', state => state.user);"""),
"bld120-0002": ("godata", """listContacts('ob-sl-covid19');""",
"mailchimp", """fn(state => {
  const c = state.data[state.data.length - 1];
  state.member = { email_address: c.email || c.addresses?.[0]?.emailAddress, status: 'subscribed',
    merge_fields: { FNAME: c.firstName, LNAME: c.lastName, REPORTED: new Date().toISOString().slice(0, 10) } };
  return state;
});
addMember({ listId: 'list_seed01', member: state => state.member });"""),
"bld120-0003": ("godata", """listCases('ob-sl-covid19');""",
"openimis", """fn(state => {
  const c = state.data[state.data.length - 1];
  state.patient = { resourceType: 'Patient', name: [{ given: [c.firstName], family: c.lastName }],
    gender: (c.gender || '').toLowerCase().includes('female') ? 'female' : 'male', birthDate: new Date().toISOString().slice(0, 10) };
  return state;
});
http.post('/api_fhir_r4/Patient', state => state.patient);"""),
"bld120-0004": ("fhir", """get('MedicinalProduct', { _sort: '-_lastUpdated', _count: 1 });""",
"openimis", """http.post('/api_fhir_r4/Medication', state => {
  const p = state.data.entry[0].resource;
  return { resourceType: 'Medication', code: { text: p.name?.[0]?.productName }, identifier: p.identifier };
});"""),
"bld120-0005": ("cht", """get('/api/v2/export/reports', { query: { filters: {} } });""",
"satusehat", """fn(state => {
  const r = state.data[0];
  state.qr = { resourceType: 'QuestionnaireResponse', status: 'completed', questionnaire: r.form,
    authored: new Date(r.reported_date).toISOString(),
    item: Object.entries(r.fields || {}).map(([k, v]) => ({ linkId: k, answer: [{ valueString: String(v) }] })) };
  return state;
});
post('QuestionnaireResponse', state => state.qr);"""),
"bld120-0006": ("http", """get('/api/users', { query: { filter: JSON.stringify({ order: 'createdAt DESC', limit: 1 }) } });""",
"commcare", """fn(state => {
  const u = state.data[0];
  state.webUser = { email: u.email, first_name: u.firstName, last_name: u.lastName, role: 'App User', bruteForceLoginDate: new Date().toISOString() };
  return state;
});
post('/web-user', state => state.webUser);"""),
"bld120-0007": ("commcare", """get('/web-user', { limit: 1 });""",
"surveycto", """upsertDataset({ id: 'users', title: 'Users', idColumn: 'username' });
uploadCsvRecords('users', state => {
  const u = state.data.objects[0];
  return [{ username: u.username, first_name: u.first_name, last_name: `${u.last_name} (synced from OpenFn)`, email: u.email }];
});"""),
"bld120-0008": ("msupply", """query(`query { patients(storeId: "store-a", page: { first: 1 }, sort: { key: createdDatetime, desc: true }) { ... on PatientConnector { nodes { id firstName lastName gender dateOfBirth } } } }`);""",
"lamisplus", """http.post('/plugin/ehr/api/v1/patient', state => {
  const p = state.data.patients.nodes[0];
  return { firstName: p.firstName, surname: p.lastName, sex: p.gender, dateOfBirth: new Date().toISOString().slice(0, 10) };
});"""),
"bld120-0009": ("openboxes", """get('products', { query: { max: 1, sort: 'dateCreated', order: 'desc' } });""",
"openimis", """http.post('/api_fhir_r4/Medication', state => {
  const p = state.data.data[0];
  return { resourceType: 'Medication', code: { text: p.name }, identifier: [{ value: p.productCode }] };
});"""),
"bld120-0010": ("asana", """request('GET', '/users', { query: { limit: 1, opt_fields: 'name,email' } });""",
"openhim", """createClient(state => {
  const u = state.data.data[0];
  return { clientID: u.gid, name: `${u.name} (synced from OpenFn)`, roles: ['default'], email: u.email };
});"""),
}
def yaml(a_ad, a, b_ad, b):
    ind = lambda s: "\n".join("      " + l for l in s.split("\n"))
    return f"""name: dry-run
jobs:
  fetch:
    name: Fetch record
    adaptor: '@openfn/language-{a_ad}@latest'
    body: |
{ind(a)}
  post:
    name: Post record
    adaptor: '@openfn/language-{b_ad}@latest'
    body: |
{ind(b)}
triggers:
  webhook:
    type: webhook
edges:
  webhook->fetch:
    source_trigger: webhook
    target_job: fetch
  fetch->post:
    source_job: fetch
    target_job: post
    condition_type: on_job_success
"""
for l in open('prompts.jsonl'):
    c = json.loads(l); a_ad, a, b_ad, b = W[c['id']]
    json.dump({"id": c['id'], "prompt": c['prompt'], "workflow_yaml": yaml(a_ad, a, b_ad, b), "response": None, "usage": None, "meta": None, "ms": 0, "at": "dry-run"},
              open(f"generations/{c['id']}.json", "w"), indent=2)
print(len(W))
