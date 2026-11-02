import fs from 'fs';
const root='/home/user/openfn-api-specs/specs/adaptors';
const adaptors=fs.readdirSync(root).filter(a=>fs.existsSync(`${root}/${a}/openapi.json`));
const M=['get','post','put','patch','delete'];
const out={};
for(const a of adaptors){
  const spec=JSON.parse(fs.readFileSync(`${root}/${a}/openapi.json`,'utf8'));
  const src=JSON.parse(fs.readFileSync(`${root}/${a}/source.json`,'utf8'));
  const schemas=spec.components?.schemas||{};
  const res=(r)=>{if(r&&r.$ref&&r.$ref.startsWith('#/components/schemas/')){const n=r.$ref.split('/').pop();return {n,s:schemas[n]}}return {n:null,s:r}};
  // unwrap to entity schema name(s)
  let curPath='';
  function ent(s,d=0){
    if(!s||d>6)return null;
    let {n,s:r}=res(s); if(!r)return n?{n}:null;
    if(!n&&r.title)n='~'+r.title;
    if(r.allOf?.length===1)return ent(r.allOf[0],d+1);
    if(r.type==='array')return ent(r.items,d+1);
    const props=r.properties||{};const keys=Object.keys(props);
    if(r.nodes||props.nodes){const c=ent(props.nodes,d+1);if(c)return c}
    if(props.data&&props.data.properties&&Object.keys(props.data.properties).length===1){const c=ent(Object.values(props.data.properties)[0],d+1);if(c)return c}
    for(const k of ['data','items','results','value','records','rows','entry','content','list','entries']){
      if(props[k]&&keys.length<=8&&(props[k].type==='array'||props[k].$ref)){const c=ent(props[k],d+1);if(c)return c}}
    {const arr=keys.filter(k=>props[k]?.type==='array'&&(props[k].items?.$ref||props[k].items?.properties));const meta=keys.filter(k=>!arr.includes(k)&&!/^(total_items|total|count|_links|links|next|previous|page|limit|offset|has_more|object|url|errors|meta|pagination|nextPageToken|cursor)$/i.test(k));if(arr.length===1&&meta.length<=1){const c=ent(props[arr[0]],d+1);if(c)return c}}
    const alt=r.oneOf||r.anyOf; if(alt&&alt.length<=4){const c=alt.find(x=>x.$ref&&/(Node|Connector|Connection)$/.test(x.$ref))||alt.find(x=>x.$ref&&!/(Error|NotFound|Rejected|Denied)/.test(x.$ref));if(c)return ent(c,d+1)}
    if(!n&&keys.length>=3)return {n:'~'+curPath,inline:r};
    return n?{n,inline:n.startsWith('~')?r:undefined}:null;
  }
  const E={};const INL={};
  const add=(n,kind,op,m,p)=>{const e=(E[n]??={name:n,R:0,W:0,ops:[],paths:new Set()});e[kind]++;if(e.ops.length<3)e.ops.push(`${m.toUpperCase()} ${p}`);e.paths.add(p)};
  for(const [p,item] of Object.entries(spec.paths||{})) for(const m of M){const op=item[m];if(!op)continue;curPath=p.split('/').filter(x=>x&&!x.startsWith('{')).slice(-1)[0]||'root';
    let r=null;const rk=Object.keys(op.responses||{});const okk=rk.filter(k=>/^2/.test(k)).sort()[0]||(rk.includes('default')?'default':null);r=okk?op.responses[okk]:null;
    if(r&&r.$ref){const rn=r.$ref.split('/').pop();r=spec.components?.responses?.[rn]||null}
    const rc=r?.content;const rs=rc?.['application/json']?.schema||rc?.[Object.keys(rc||{})[0]]?.schema;
    const re=ent(rs);if(re?.n){if(re.inline)INL[re.n]=re.inline;add(re.n,'R',op,m,p)}
    if(m!=='get'&&m!=='delete'){const b=op.requestBody?.content;const bs=b?.['application/json']?.schema||b?.[Object.keys(b||{})[0]]?.schema;const we=ent(bs);if(we?.n){if(we.inline)INL[we.n]=we.inline;add(we.n,'W',op,m,p)}}
  }
  const feats=(n)=>{const s=INL[n]||schemas[n];if(!s)return null;
    const flat=(x,d=0)=>{ if(!x)return {}; if(x.$ref)x=schemas[x.$ref.split('/').pop()]||{}; let pr={...(x.properties||{})}; for(const y of (x.allOf||[])){const yy=y.$ref?schemas[y.$ref.split('/').pop()]:y;Object.assign(pr,flat(yy,d+1))}return pr};
    const pr=flat(s);const k=Object.keys(pr);let desc=0,typed=0,enums=0,refs=0;
    for(const x of Object.values(pr)){if(x.description)desc++;if(x.type||x.$ref||x.allOf)typed++;if(x.enum||x.items?.enum)enums++;if(x.$ref||x.items?.$ref)refs++}
    return {props:k.length,desc:+(k.length?desc/k.length:0).toFixed(2),typed:+(k.length?typed/k.length:0).toFixed(2),enums,refs,req:(s.required||[]).length,free:!!(s.additionalProperties===true||(s.additionalProperties&&typeof s.additionalProperties==='object'&&!k.length))||(!k.length&&!s.allOf&&!s.oneOf&&!s.anyOf),sdesc:!!s.description,fields:k.slice(0,40)}};
  const ents=Object.values(E).map(e=>({name:e.name,R:e.R,W:e.W,ex:e.ops,f:feats(e.name)}));
  out[a]={title:spec.info?.title,origin:src.origin,fmt:src.upstreamFormat,comp:src.completeness,nSchemas:Object.keys(schemas).length,nPaths:Object.keys(spec.paths||{}).length,ents};
}
fs.writeFileSync('entities2.json',JSON.stringify(out));
let t=0,t3=0;const rows=[];for(const [a,v] of Object.entries(out)){const n3=v.ents.filter(e=>e.f&&e.f.props>=3).length;t+=v.ents.length;t3+=n3;rows.push([a,v.ents.length,n3])}
console.log('entities',t,'with>=3 props',t3);
console.log(rows.sort((x,y)=>y[1]-x[1]).slice(0,25).map(r=>r.join(':')).join(' '));
console.log('zero:',rows.filter(r=>r[1]==0).map(r=>r[0]).join(' '));
