import json,collections,itertools,statistics as st
cl=json.load(open('classified.json'));ent=json.load(open('entities2.json'))
flags={}
for a,v in ent.items():
    for x in v['ents']:flags[f"{a}#{x['name']}"]=(x['R']>0,x['W']>0,x['f'])
origin={a:v['origin'] for a,v in ent.items()}
E=[]
backfill=0
for id_,r in cl.items():
    if r['role']!='ENTITY':continue
    R,W,f=flags[id_]
    cr,cw=r['cr'],r['cw']
    if R and cr is None and cw is not None:cr=cw;backfill+=1
    if W and cw is None and cr is not None:cw=cr;backfill+=1
    if not R:cr=None
    if not W:cw=None
    if R and cr is None or W and cw is None: cr=cr or 3 if R else None; cw=cw or 3 if W else None  # fallback neutral
    r=dict(r,cr=cr,cw=cw,R=R,W=W,props=f['props'] if f else 0,origin=origin[r['adaptor']])
    E.append(r)
print('entities(ENTITY role):',len(E),'backfilled conf:',backfill)
roles=collections.Counter(r['role'] for r in cl.values());print('roles',dict(roles))
print('adaptors with >=1 ENTITY:',len({e['adaptor'] for e in E}),'of',len(ent))
byc=collections.defaultdict(list)
for e in E:byc[e['concept']].append(e)
HEAD=[]
tot_raw=tot_sys=0
rows=[]
for c,es in byc.items():
    S=[e for e in es if e['R']];T=[e for e in es if e['W']]
    raw=sum(1 for s in S for t in T if s['adaptor']!=t['adaptor'])
    SA={e['adaptor'] for e in S};TA={e['adaptor'] for e in T}
    sysn=len(SA)*len(TA)-len(SA&TA)
    # same-native
    nat=sum(1 for s in S for t in T if s['adaptor']!=t['adaptor'] and s['native']==t['native'])
    # pair conf min
    confs=[min(s['cr'],t['cw']) for s in S for t in T if s['adaptor']!=t['adaptor']]
    mc=round(st.mean(confs),2) if confs else None
    hi=sum(1 for x in confs if x>=4)
    rows.append((c,len(es),len(S),len(T),len(SA),len(TA),raw,sysn,nat,mc,hi))
rows.sort(key=lambda r:-r[6])
print('\nconcept | entities | srcEnt | tgtEnt | srcAdaptors | tgtAdaptors | rawPairs | adaptorPairs | sameNativePairs | meanPairConf | pairs>=4')
for r in rows:print(' | '.join(map(str,r)))
Ra=sum(r[6] for r in rows);Sa=sum(r[7] for r in rows);Na=sum(r[8] for r in rows)
print('TOTAL raw',Ra,'system-level',Sa,'sameNative',Na)
nogen=[r for r in rows if r[0] not in('GENERIC_REC','OTHER')]
print('excl GENERIC_REC/OTHER: raw',sum(r[6] for r in nogen),'system',sum(r[7] for r in nogen))
# per-entity confidence dist
print('\nconf_r dist',sorted(collections.Counter(e['cr'] for e in E if e['cr']).items()))
print('conf_w dist',sorted(collections.Counter(e['cw'] for e in E if e['cw']).items()))
# pair conf distribution (raw pairs, all concepts)
pc=collections.Counter()
for c,es in byc.items():
    for s in es:
        if not s['R']:continue
        for t in es:
            if t['W'] and s['adaptor']!=t['adaptor']:pc[min(s['cr'],t['cw'])]+=1
print('pair conf dist',sorted(pc.items()),'total',sum(pc.values()))
# issues
ic=collections.Counter(i for e in E for i in e['issues']);print('\nissues',ic.most_common())
# issues by origin
print('mean conf by origin:')
for o in set(origin.values()):
    v=[x for e in E if e['origin']==o for x in (e['cr'],e['cw']) if x];print(' ',o,len([e for e in E if e['origin']==o]),round(st.mean(v),2) if v else None)
# top adaptor-pairs system level
ap=collections.Counter()
for c,es in byc.items():
    SA={e['adaptor'] for e in es if e['R']};TA={e['adaptor'] for e in es if e['W']}
    for a in SA:
        for b in TA:
            if a!=b:ap[(a,b)]+=1
print('\ntotal distinct directed adaptor pairs with >=1 shared concept:',len(ap),'of',len(ent)*(len(ent)-1))
print('top adaptors by concept-cells:',collections.Counter(e['adaptor'] for e in E).most_common(12))
# per adaptor: n concepts, mean conf
pa=collections.defaultdict(list)
for e in E:
    for x in (e['cr'],e['cw']):
        if x:pa[e['adaptor']].append(x)
low=sorted(((round(st.mean(v),2),a,len(v)) for a,v in pa.items()))
print('lowest-confidence adaptors',low[:12]);print('highest',low[-8:])
json.dump(E,open('entities_final.json','w'))
