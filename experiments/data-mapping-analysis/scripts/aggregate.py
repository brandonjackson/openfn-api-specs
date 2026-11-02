import json,glob,re,collections,itertools,sys
CONC="PERSON STAFF_USER ORG LOCATION GROUP CASE ENCOUNTER OBSERVATION CONDITION IMMUNIZATION MEDICATION LAB_ORDER PRODUCT INVENTORY ORDER FINANCE_TX FINANCE_ACCT MESSAGE CAMPAIGN FILE FORM SUBMISSION CODELIST PROGRAM TASK NOTE CIVIL_EVENT CREDENTIAL CLAIM REPORT CALENDAR GENERIC_REC OTHER".split()
ISS="S-THIN S-OPAQUE S-UNDESCRIBED S-RWDIVERGE S-RECONSTRUCTED M-CODELIST M-IDENTITY M-RELATION M-SHAPE M-GRAIN M-FORMAT M-SENSITIVE M-LOSSY B-WRITERULES B-ASYNCBULK B-ONEWAY B-DYNAMIC".split()
ROLES={"ENTITY","COMPONENT","WRAPPER","OPERATIONAL"}
ids=json.load(open('all_ids.json'));idset=set(ids)
rows={};bad=[]
for f in sorted(glob.glob('out/chunk_*.tsv')):
    for i,l in enumerate(open(f),1):
        l=l.rstrip('\n')
        if not l.strip():continue
        p=l.split('|')
        # ids may not contain '|'; adaptors names fine
        if len(p)!=7:bad.append((f,i,'fields',l[:80]));continue
        id_,role,con,nat,cr,cw,iss=p
        if id_ not in idset:bad.append((f,i,'unknown id',id_));continue
        if role not in ROLES:bad.append((f,i,'role',role));continue
        if role=='ENTITY' and con not in CONC:bad.append((f,i,'concept',con));continue
        ic=[] if iss=='-' else iss.split(',')
        if any(x not in ISS for x in ic):bad.append((f,i,'issue',iss));continue
        for v in (cr,cw):
            if v!='-' and v not in '12345':bad.append((f,i,'conf',v))
        rows[id_]=dict(id=id_,adaptor=id_.split('#')[0],name=id_.split('#',1)[1],role=role,concept=con if role=='ENTITY' else '-',native=nat,cr=None if cr=='-' else int(cr),cw=None if cw=='-' else int(cw),issues=ic)
missing=[i for i in ids if i not in rows]
print('classified',len(rows),'of',len(ids),'bad',len(bad),'missing',len(missing))
for b in bad[:15]:print(b)
json.dump(rows,open('classified.json','w'))
