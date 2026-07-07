/**
 * Renders the status dashboard to a single self-contained HTML string.
 *
 * The design tokens, navbar, hero and footer are copied from the openfn-mocker
 * sandbox so the two sites read as one family. The adaptor data is inlined as
 * `window.__STATUS__` (no external fetch), and the client script below builds
 * the summary tiles + filterable/sortable table from it using DOM APIs, so note
 * text and every other field are escaped by the browser (no HTML injection).
 */
import type { StatusData } from './site.js';
import { OPENFN_LOGO_DATA_URI } from './openfn-logo.js';

/* --------------------------------------------------------------------------
 * Styles — mocker design tokens + dashboard-specific components.
 * ------------------------------------------------------------------------ */
const CSS = `
:root{
  --bg:#fff;--panel:#fff;--ink:#1c1e21;--muted:#606770;--border:#dadde1;
  --border-soft:#ebedf0;--wash:#f6f7f8;--accent:#2196f3;--accent-hover:#0d89ec;
  --accent-strong:#0a6bb7;--accent-soft:#ebf2fc;--code:#282a36;--code-ink:#e6edf3;
  --footer:#303846;--footer-ink:#dfe3ea;--footer-link:#b7c0cf;
  --radius:8px;--navbar-h:60px;--wrap:1180px;--shadow:0 1px 2px 0 rgba(0,0,0,.1);
  --mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  /* status */
  --ok:#0a7d33;--ok-soft:#e7f4ec;--ok-bd:#bfe3cc;
  --incomplete:#b45309;--incomplete-soft:#fbf0e2;--incomplete-bd:#f0d6b0;
  --stale:#475569;--stale-soft:#eef1f5;--stale-bd:#d3dae3;
  --atrisk:#c2410c;--atrisk-soft:#fbe9e0;--atrisk-bd:#f2c4ab;
  --wrong:#b91c1c;--wrong-soft:#fbe6e6;--wrong-bd:#f0bcbc;
  --missing:#be123c;--missing-soft:#fbe4ea;--missing-bd:#f2b8c8;
  --new:#0369a1;--new-soft:#e6f1f8;--new-bd:#b7d7ea;
  /* quality (origin) */
  --q1:#0a7d33;--q1-soft:#e7f4ec;--q1-bd:#bfe3cc;
  --q2:#0369a1;--q2-soft:#e6f1f8;--q2-bd:#b7d7ea;
  --q3:#6d28d9;--q3-soft:#efe9fb;--q3-bd:#d5c6f2;
  --q4:#b45309;--q4-soft:#fbf0e2;--q4-bd:#f0d6b0;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);
  font:16px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,Ubuntu,Cantarell,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji";}
code,pre,.mono{font-family:var(--mono);}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 24px;}

header.navbar{position:sticky;top:0;z-index:20;background:#fff;height:var(--navbar-h);border-bottom:1px solid var(--border);box-shadow:var(--shadow);}
.navbar-inner{max-width:var(--wrap);margin:0 auto;height:100%;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.brand{display:inline-flex;align-items:center;gap:9px;color:var(--ink);font-weight:700;font-size:19px;letter-spacing:-.01em;}
.brand:hover{text-decoration:none}
.brand-logo{width:30px;height:30px;display:block}
.brand-sep{color:var(--border);font-weight:400}
.brand-sub{color:var(--muted);font-weight:500;font-size:16px}
.navbar-links{display:flex;align-items:center;gap:22px;font-size:15px;font-weight:500}
.navbar-links a{color:var(--ink)}
.navbar-links a:hover{color:var(--accent);text-decoration:none}

.hero{background:#fff;border-bottom:1px solid var(--border);}
.hero .wrap{padding:34px 24px 30px}
.hero h1{margin:0 0 8px;font-size:34px;line-height:1.15;letter-spacing:-.02em;font-weight:800;}
.hero-lede{margin:0;color:var(--muted);font-size:17px;max-width:80ch;}
.hero-meta{margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.chip{display:inline-flex;align-items:center;gap:8px;background:var(--accent-soft);border:1px solid #cfe3fb;border-radius:var(--radius);padding:8px 13px;font-size:14px;}
.chip b{color:var(--accent-strong)}
.chip .chip-label{color:var(--accent-strong);font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:11px}

.layout{max-width:var(--wrap);margin:0 auto;padding:26px 24px 60px;}
section.panel{background:var(--panel);border:1px solid var(--border);border-radius:var(--radius);padding:22px 22px 20px;margin-bottom:22px;box-shadow:var(--shadow);}
section.panel > h2{margin:0 0 14px;font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);}

/* summary tiles */
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));gap:12px}
.tile{border:1px solid var(--border);border-radius:var(--radius);padding:13px 15px;background:#fff;text-align:left;font:inherit;cursor:pointer;transition:border-color .15s,box-shadow .15s,background .15s;}
.tile:hover{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.tile.active{border-color:var(--accent);background:var(--accent-soft)}
.tile .num{font-size:26px;font-weight:800;line-height:1;letter-spacing:-.02em}
.tile .lbl{margin-top:5px;font-size:12.5px;color:var(--muted);font-weight:600;display:flex;align-items:center;gap:6px}
.tile .dot{width:9px;height:9px;border-radius:50%;flex:none}
.dot.ok{background:var(--ok)}.dot.incomplete{background:var(--incomplete)}.dot.stale{background:var(--stale)}
.dot.at-risk{background:var(--atrisk)}.dot.wrong{background:var(--wrong)}.dot.missing{background:var(--missing)}.dot.new{background:var(--new)}
.tiles-note{margin:14px 0 0;color:var(--muted);font-size:13px}
.tiles-note b{color:var(--ink);font-weight:700}

/* quality legend */
.legend{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:4px}
.legend .li{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted)}
.legend .li b{color:var(--ink);font-weight:700}

/* controls */
.controls{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px}
.search{flex:1;min-width:220px;font:inherit;font-size:14px;color:var(--ink);background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:9px 12px;}
.search:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.sortsel{font:inherit;font-size:14px;font-weight:600;color:var(--ink);background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:9px 12px;}
.sortsel:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.filters{display:flex;gap:2px;border-bottom:1px solid var(--border);margin-bottom:2px;flex-wrap:wrap}
.filter{background:none;border:none;border-bottom:2px solid transparent;border-radius:0;color:var(--muted);padding:9px 14px;font:inherit;font-size:14px;font-weight:600;margin-bottom:-1px;cursor:pointer}
.filter:hover{color:var(--ink);background:var(--wash)}
.filter.active{color:var(--accent);border-bottom-color:var(--accent)}
.filter .cnt{color:var(--muted);font-weight:600;font-size:12px;margin-left:5px}
.filter.active .cnt{color:var(--accent)}

/* badges */
.badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.02em;border-radius:6px;padding:2px 8px;border:1px solid;white-space:nowrap;line-height:1.5}
.q1{color:var(--q1);background:var(--q1-soft);border-color:var(--q1-bd)}
.q2{color:var(--q2);background:var(--q2-soft);border-color:var(--q2-bd)}
.q3{color:var(--q3);background:var(--q3-soft);border-color:var(--q3-bd)}
.q4{color:var(--q4);background:var(--q4-soft);border-color:var(--q4-bd)}
.s-ok{color:var(--ok);background:var(--ok-soft);border-color:var(--ok-bd)}
.s-incomplete{color:var(--incomplete);background:var(--incomplete-soft);border-color:var(--incomplete-bd)}
.s-stale{color:var(--stale);background:var(--stale-soft);border-color:var(--stale-bd)}
.s-at-risk{color:var(--atrisk);background:var(--atrisk-soft);border-color:var(--atrisk-bd)}
.s-wrong{color:var(--wrong);background:var(--wrong-soft);border-color:var(--wrong-bd)}
.s-missing{color:var(--missing);background:var(--missing-soft);border-color:var(--missing-bd)}
.s-new{color:var(--new);background:var(--new-soft);border-color:var(--new-bd)}

/* table */
.tablewrap{border:1px solid var(--border);border-radius:var(--radius);overflow:auto;background:#fff}
table.tbl{width:100%;border-collapse:collapse;font-size:14px}
.tbl thead th{position:sticky;top:0;background:var(--wash);text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);font-weight:700;padding:10px 14px;border-bottom:1px solid var(--border);white-space:nowrap}
.tbl thead th.sortable{cursor:pointer;user-select:none}
.tbl thead th.sortable:hover{color:var(--ink)}
.tbl thead th .arr{color:var(--accent);margin-left:4px;font-size:10px}
.tbl thead th.num,.tbl td.num{text-align:right;font-variant-numeric:tabular-nums}
.tbl tbody tr.head{border-top:1px solid var(--border-soft);cursor:pointer}
.tbl tbody tr.head:first-child{border-top:none}
.tbl tbody tr.head:hover{background:var(--wash)}
.tbl td{padding:11px 14px;vertical-align:top}
.tbl .name{font-weight:700;color:var(--ink);display:flex;align-items:center;gap:8px}
.tbl .tri{color:var(--muted);font-size:10px;width:10px;flex:none;transition:transform .15s}
tr.open .tri{transform:rotate(90deg)}
.tbl .npm{margin:2px 0 0 18px;font-family:var(--mono);font-size:12px;color:var(--muted)}
.tbl .nonrest{margin-left:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);background:var(--wash);border:1px solid var(--border);border-radius:5px;padding:1px 6px}
.tbl .sub{margin-top:4px;font-size:12px;color:var(--muted)}
.tbl .updated{white-space:nowrap}
.tbl .updated.fresh{color:var(--ink)}
.tbl .updated.aging{color:var(--incomplete);font-weight:600}
.tbl .dim{color:var(--muted)}
.detail td{background:var(--wash);border-bottom:1px solid var(--border-soft);padding:2px 14px 16px 32px}
.detail .notes{margin:8px 0 0;color:var(--ink);font-size:13.5px;line-height:1.55;max-width:100ch}
.detail .prov{margin:12px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 14px;font-size:13px;align-items:baseline}
.detail .prov dt{color:var(--muted);font-weight:600;white-space:nowrap}
.detail .prov dd{margin:0;color:var(--ink);min-width:0;word-break:break-word}
.detail .prov dd a{word-break:break-all}
.detail .reason{color:var(--muted);font-style:italic}
.detail .links{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap}
.detail .links a{font-size:12.5px;font-weight:600;background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:5px 11px;color:var(--accent)}
.detail .links a:hover{background:var(--accent-soft);border-color:var(--accent);text-decoration:none}
.empty{color:var(--muted);padding:22px 14px;text-align:center}

footer.foot{background:var(--footer);color:var(--footer-ink);padding:32px 24px;margin-top:8px}
footer.foot .foot-note{margin:0 0 10px;font-size:13.5px;text-align:center}
footer.foot .foot-links{margin:0;font-size:13.5px;text-align:center}
footer.foot a{color:var(--footer-link)}
footer.foot a:hover{color:#fff}

@media(max-width:640px){
  .hero h1{font-size:27px}
  .navbar-links{gap:14px}
  .brand-sub,.brand-sep{display:none}
}
`;

/* --------------------------------------------------------------------------
 * Client script — builds the UI from window.__STATUS__ with DOM APIs.
 * No template literals / backticks inside, so it embeds verbatim and every
 * field is set via textContent (browser-escaped).
 * ------------------------------------------------------------------------ */
const CLIENT_JS = `
(function(){
  var DATA = window.__STATUS__;
  var STATUS_ORDER = ['wrong','at-risk','missing','new','incomplete','stale','ok'];
  var STATUS_LABEL = {ok:'OK',incomplete:'Incomplete',stale:'Stale','at-risk':'At risk',wrong:'Wrong',missing:'Missing','new':'New'};
  var STATUS_HELP = {
    ok:'Full coverage, completeness acknowledged, validates, checked recently.',
    incomplete:'Coverage or completeness not yet claimed as full (e.g. docs-only, best-effort).',
    stale:'Not re-verified against upstream within the staleness window.',
    'at-risk':'Upstream spec moved or its URL no longer resolves.',
    wrong:'Fails validation: bad OpenAPI, schema drift, dangling $ref, or malformed provenance.',
    missing:'Directory exists but no openapi.json / data-schemas.',
    'new':'In the adaptor list, no spec directory yet.'
  };
  var QUALITY_CLASS = {'found-openapi':'q1',converted:'q2',synthesized:'q3',generated:'q4'};

  function el(tag, props, children){
    var n = document.createElement(tag);
    if(props){ for(var k in props){
      if(k==='class') n.className = props[k];
      else if(k==='text') n.textContent = props[k];
      else if(k==='html') n.innerHTML = props[k];
      else if(props[k]!=null) n.setAttribute(k, props[k]);
    }}
    if(children){ for(var i=0;i<children.length;i++){ var c=children[i];
      if(c==null) continue;
      n.appendChild(typeof c==='string'?document.createTextNode(c):c);
    }}
    return n;
  }

  // days between an ISO date and now, using the viewer's clock.
  function ageDays(iso){
    if(!iso) return null;
    var t = Date.parse(iso);
    if(isNaN(t)) return null;
    return Math.floor((Date.now()-t)/86400000);
  }
  function relTime(iso){
    var d = ageDays(iso);
    if(d==null) return '—';
    if(d<=0) return 'today';
    if(d===1) return 'yesterday';
    if(d<30) return d+' days ago';
    if(d<60) return 'a month ago';
    if(d<365){ return Math.round(d/30)+' months ago'; }
    var y = Math.floor(d/365); return y+(y===1?' year ago':' years ago');
  }

  function badge(cls, label, title){
    return el('span',{'class':'badge '+cls, title:title||''},[label]);
  }

  // ---- summary tiles ---------------------------------------------------
  var activeStatus = 'all';
  var searchTerm = '';
  var sortKey = 'status';

  function tilesPanel(){
    var wrap = el('div',{'class':'tiles'});
    var t = DATA.totals;
    var allTile = el('button',{'class':'tile'+(activeStatus==='all'?' active':''),'data-status':'all'},[
      el('div',{'class':'num',text:String(t.adaptors)}),
      el('div',{'class':'lbl'},['All adaptors'])
    ]);
    wrap.appendChild(allTile);
    STATUS_ORDER.forEach(function(s){
      var n = t.byStatus[s]||0;
      if(!n) return;
      var tile = el('button',{'class':'tile'+(activeStatus===s?' active':''),'data-status':s, title:STATUS_HELP[s]},[
        el('div',{'class':'num',text:String(n)}),
        el('div',{'class':'lbl'},[el('span',{'class':'dot '+s}),STATUS_LABEL[s]])
      ]);
      wrap.appendChild(tile);
    });
    wrap.addEventListener('click',function(e){
      var b = e.target.closest('.tile'); if(!b) return;
      activeStatus = b.getAttribute('data-status');
      render();
    });
    return wrap;
  }

  function qualityLegend(){
    var byO = DATA.totals.byOrigin||{};
    var items = [
      ['found-openapi','q1','Vendor OpenAPI','vendor’s own spec, verbatim'],
      ['converted','q2','Converted','from another machine spec'],
      ['synthesized','q3','Synthesized','from the adaptor’s surface'],
      ['generated','q4','Documented','authored from vendor docs']
    ];
    var leg = el('div',{'class':'legend'});
    items.forEach(function(it){
      var n = byO[it[0]]||0;
      leg.appendChild(el('div',{'class':'li'},[
        badge(it[1], it[2]),
        el('span',{},[' '+n+' — '+it[3]])
      ]));
    });
    return leg;
  }

  // ---- table -----------------------------------------------------------
  var COLS = [
    {key:'adaptor', label:'Adaptor', sortable:true},
    {key:'quality', label:'Quality', sortable:true},
    {key:'status', label:'Status', sortable:true},
    {key:'operations', label:'Ops', sortable:true, num:true},
    {key:'dataObjects', label:'Objects', sortable:true, num:true},
    {key:'updated', label:'Updated', sortable:true}
  ];

  function statusRank(s){ var i=STATUS_ORDER.indexOf(s); return i<0?99:i; }
  function cmp(a,b){ return a<b?-1:(a>b?1:0); }
  function sorter(key){
    return function(a,b){
      if(key==='adaptor') return cmp(a.adaptor,b.adaptor);
      if(key==='quality') return cmp(a.qualityRank||9, b.qualityRank||9) || cmp(a.adaptor,b.adaptor);
      if(key==='status') return cmp(statusRank(a.status), statusRank(b.status)) || cmp(a.adaptor,b.adaptor);
      if(key==='operations') return cmp(b.operations||0, a.operations||0) || cmp(a.adaptor,b.adaptor);
      if(key==='dataObjects') return cmp(b.dataObjects||0, a.dataObjects||0) || cmp(a.adaptor,b.adaptor);
      if(key==='updated'){ var da=ageDays(a.lastCheckedAt||a.capturedAt), db=ageDays(b.lastCheckedAt||b.capturedAt);
        if(da==null) da=1e9; if(db==null) db=1e9; return cmp(da,db) || cmp(a.adaptor,b.adaptor); }
      return 0;
    };
  }

  function matches(r){
    if(activeStatus!=='all' && r.status!==activeStatus) return false;
    if(searchTerm){
      var hay = (r.adaptor+' '+r.npm+' '+(r.origin||'')+' '+(r.upstreamFormat||'')+' '+(r.notes||'')).toLowerCase();
      if(hay.indexOf(searchTerm)<0) return false;
    }
    return true;
  }

  function detailRow(r){
    var td = el('td',{colspan:String(COLS.length)});
    if(r.notes) td.appendChild(el('p',{'class':'notes',text:r.notes}));
    else td.appendChild(el('p',{'class':'notes dim',text:'No notes recorded for this adaptor.'}));

    var dl = el('dl',{'class':'prov'});
    function add(dt,dd){ if(dd==null||dd==='') return; dl.appendChild(el('dt',{text:dt})); dl.appendChild(el('dd',dd.nodeType?{}:{text:String(dd)}, dd.nodeType?[dd]:null)); }
    add('Status', el('span',{},[badge('s-'+r.status, STATUS_LABEL[r.status]||r.status), ' '+(r.reason||'')]));
    var qtext = (r.quality||'—');
    if(r.coverage||r.completeness){ qtext += ' · ' + [r.coverage?('coverage '+r.coverage):null, r.completeness||null, r.completenessReason?('('+r.completenessReason+')'):null].filter(Boolean).join(' · '); }
    add('Quality', qtext);
    add('Origin', (r.origin||'—') + (r.upstreamFormat?(' · '+r.upstreamFormat):''));
    add('Operations', (r.operations!=null?r.operations+' operations':null));
    add('Schemas / objects', (r.schemas!=null? (r.schemas+' schemas · '+(r.dataObjects||0)+' data objects · '+(r.resources||0)+' resources') : null));
    add('Captured', r.capturedAt);
    add('Last checked', r.lastCheckedAt || el('span',{'class':'dim'},['not recorded']));
    if(r.upstreamUrl) add('Upstream', el('a',{href:r.upstreamUrl,target:'_blank',rel:'noopener'},[r.upstreamUrl]));
    td.appendChild(dl);

    var links = el('div',{'class':'links'});
    var base = 'https://github.com/'+DATA.repo+'/blob/main/specs/adaptors/'+r.adaptor+'/';
    links.appendChild(el('a',{href:base+'openapi.json',target:'_blank',rel:'noopener'},['openapi.json']));
    links.appendChild(el('a',{href:base+'source.json',target:'_blank',rel:'noopener'},['source.json']));
    if(r.dataObjects) links.appendChild(el('a',{href:base+'data-schemas/',target:'_blank',rel:'noopener'},['data-schemas']));
    if(r.sourceUrl) links.appendChild(el('a',{href:r.sourceUrl,target:'_blank',rel:'noopener'},['reference ↗']));
    td.appendChild(links);

    var tr = el('tr',{'class':'detail'},[td]);
    tr.style.display='none';
    return tr;
  }

  function bodyRows(){
    var rows = DATA.rows.filter(matches).slice().sort(sorter(sortKey));
    var frag = document.createDocumentFragment();
    if(!rows.length){
      var tr = el('tr',{},[el('td',{colspan:String(COLS.length),'class':'empty'},['No adaptors match.'])]);
      frag.appendChild(tr); return frag;
    }
    rows.forEach(function(r){
      var nameCell = el('td',{},[
        el('div',{'class':'name'},[
          el('span',{'class':'tri',text:'\\u25B8'}),
          r.adaptor,
          (!r.rest? el('span',{'class':'nonrest', title:r.note||'non-REST adaptor'},['non-REST']) : null)
        ]),
        el('div',{'class':'npm',text:r.npm})
      ]);
      var qCell = el('td',{},[
        r.quality? badge(QUALITY_CLASS[r.origin]||'q4', r.quality, r.origin) : el('span',{'class':'dim'},['—']),
        (r.completeness==='best-effort'? el('div',{'class':'sub',text:'best-effort'}) :
          (r.coverage==='full'&&r.completeness==='complete'? el('div',{'class':'sub',text:'full · complete'}) : null))
      ]);
      var sCell = el('td',{},[ badge('s-'+r.status, STATUS_LABEL[r.status]||r.status, r.reason) ]);
      var opsCell = el('td',{'class':'num'},[ r.operations!=null? String(r.operations): el('span',{'class':'dim'},['—']) ]);
      var objCell = el('td',{'class':'num'},[ r.dataObjects!=null? String(r.dataObjects): el('span',{'class':'dim'},['—']) ]);

      var clock = r.lastCheckedAt||r.capturedAt;
      var d = ageDays(clock);
      var aging = d!=null && d>DATA.staleAfterDays;
      var title = (r.capturedAt?('captured '+r.capturedAt):'') + (r.lastCheckedAt?('  ·  last checked '+r.lastCheckedAt):'');
      var uCell = el('td',{},[ el('span',{'class':'updated '+(aging?'aging':'fresh'), title:title.trim()||'no date recorded'},[ relTime(clock) ]) ]);

      var head = el('tr',{'class':'head'},[nameCell,qCell,sCell,opsCell,objCell,uCell]);
      var detail = detailRow(r);
      head.addEventListener('click',function(){
        var open = detail.style.display!=='none';
        detail.style.display = open?'none':'table-row';
        head.classList.toggle('open', !open);
      });
      frag.appendChild(head);
      frag.appendChild(detail);
    });
    return frag;
  }

  function thead(){
    var tr = el('tr');
    COLS.forEach(function(c){
      var th = el('th',{'class':(c.sortable?'sortable ':'')+(c.num?'num':'')},[c.label]);
      if(sortKey===c.key) th.appendChild(el('span',{'class':'arr',text:'\\u25BE'}));
      if(c.sortable) th.addEventListener('click',function(){ sortKey=c.key; syncSortSel(); render(); });
      tr.appendChild(th);
    });
    return el('thead',{},[tr]);
  }

  // ---- filters + render ------------------------------------------------
  function filterBar(){
    var bar = el('div',{'class':'filters'});
    function mk(key,label){
      var n = key==='all'?DATA.totals.adaptors:(DATA.totals.byStatus[key]||0);
      var b = el('button',{'class':'filter'+(activeStatus===key?' active':''),'data-status':key},[label, el('span',{'class':'cnt',text:String(n)})]);
      return b;
    }
    bar.appendChild(mk('all','All'));
    STATUS_ORDER.forEach(function(s){ if(DATA.totals.byStatus[s]) bar.appendChild(mk(s,STATUS_LABEL[s])); });
    bar.addEventListener('click',function(e){ var b=e.target.closest('.filter'); if(!b) return; activeStatus=b.getAttribute('data-status'); render(); });
    return bar;
  }

  var sortSel;
  function syncSortSel(){ if(sortSel) sortSel.value=sortKey; }

  function render(){
    // summary
    var sum = document.getElementById('summary');
    sum.innerHTML='';
    sum.appendChild(tilesPanel());
    sum.appendChild(el('p',{'class':'tiles-note'},[
      el('b',{text:String(DATA.totals.operations.toLocaleString())}),' operations and ',
      el('b',{text:String(DATA.totals.dataObjects.toLocaleString())}),' data objects modelled across ',
      el('b',{text:String(DATA.totals.adaptors)}),' adaptors. Stale threshold: '+DATA.staleAfterDays+' days.'
    ]));
    sum.appendChild(qualityLegend());

    // table area
    var host = document.getElementById('tablehost');
    host.innerHTML='';
    host.appendChild(filterBar());
    var tbl = el('table',{'class':'tbl'});
    tbl.appendChild(thead());
    tbl.appendChild(el('tbody',{},[]));
    tbl.querySelector('tbody').appendChild(bodyRows());
    var tw = el('div',{'class':'tablewrap'},[tbl]);
    host.appendChild(tw);

    // update tile highlight sync happens on rebuild
    var tiles = sum.querySelectorAll('.tile');
    tiles.forEach(function(t){ t.classList.toggle('active', t.getAttribute('data-status')===activeStatus); });
  }

  // ---- boot ------------------------------------------------------------
  function boot(){
    document.getElementById('hero-count').textContent = DATA.totals.adaptors + ' adaptors';
    document.getElementById('hero-updated').textContent = relTime(DATA.generatedAt);
    document.getElementById('hero-updated').title = DATA.generatedAt;

    var okN = DATA.totals.byStatus.ok||0;
    document.getElementById('hero-ok').textContent = okN + ' OK';

    var search = document.getElementById('search');
    search.addEventListener('input',function(){ searchTerm=search.value.trim().toLowerCase(); render(); });
    sortSel = document.getElementById('sortsel');
    sortSel.value = sortKey;
    sortSel.addEventListener('change',function(){ sortKey=sortSel.value; render(); });

    render();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
`;

/**
 * Escape a JSON payload for safe inlining inside a <script> tag: neutralise a
 * literal `</script>` (via `<`) and the U+2028 / U+2029 separators that are
 * legal in JSON strings but terminate a statement in JS.
 */
function inlineJson(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/** Render the whole self-contained dashboard page. */
export function renderSite(data: StatusData): string {
  const repoUrl = `https://github.com/${data.repo}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>OpenFn API specs — adaptor status</title>
<meta name="description" content="Coverage, quality and freshness of the maintained OpenAPI specs for every OpenFn adaptor.">
<link rel="icon" href="${OPENFN_LOGO_DATA_URI}">
<style>${CSS}</style>
</head>
<body>
<header class="navbar"><div class="navbar-inner">
  <a class="brand" href="${repoUrl}" aria-label="OpenFn API specs — adaptor status">
    <img class="brand-logo" src="${OPENFN_LOGO_DATA_URI}" alt="OpenFn" width="30" height="30">
    <span class="brand-name">OpenFn</span><span class="brand-sep">/</span><span class="brand-sub">api-specs</span>
  </a>
  <nav class="navbar-links">
    <a href="https://docs.openfn.org/documentation" target="_blank" rel="noopener">Docs</a>
    <a href="https://docs.openfn.org/adaptors" target="_blank" rel="noopener">Adaptors</a>
    <a href="${repoUrl}" target="_blank" rel="noopener">GitHub</a>
  </nav>
</div></header>

<div class="hero"><div class="wrap">
  <h1>Adaptor spec status</h1>
  <p class="hero-lede">Coverage, quality and freshness of the maintained OpenAPI specs and data-object schemas for every OpenFn adaptor. Each row shows what quality of spec we hold, how recently it was checked, and the provenance notes behind it.</p>
  <div class="hero-meta">
    <span class="chip"><span class="chip-label">Tracking</span> <b id="hero-count">…</b></span>
    <span class="chip"><span class="chip-label">Healthy</span> <b id="hero-ok">…</b></span>
    <span class="chip"><span class="chip-label">Updated</span> <b id="hero-updated">…</b></span>
  </div>
</div></div>

<div class="layout">
  <section class="panel"><h2>Coverage summary</h2><div id="summary"></div></section>
  <section class="panel">
    <h2>Adaptors</h2>
    <div class="controls">
      <input id="search" class="search" type="search" placeholder="Filter by name, package, origin or notes…" autocomplete="off" spellcheck="false">
      <select id="sortsel" class="sortsel" aria-label="Sort by">
        <option value="status">Sort: status (urgent first)</option>
        <option value="adaptor">Sort: name (A–Z)</option>
        <option value="quality">Sort: quality</option>
        <option value="updated">Sort: recently updated</option>
        <option value="operations">Sort: operations</option>
        <option value="dataObjects">Sort: data objects</option>
      </select>
    </div>
    <div id="tablehost"></div>
  </section>
</div>

<footer class="foot"><div class="wrap">
  <p class="foot-note">Auto-generated from the committed specs on every push to <code>main</code> and on a weekly schedule. Buckets match <code>pnpm specs report</code>; the maintenance loop is documented in AGENTS.md.</p>
  <p class="foot-links">
    <a href="https://docs.openfn.org/documentation" target="_blank" rel="noopener">OpenFn docs</a> ·
    <a href="https://docs.openfn.org/adaptors" target="_blank" rel="noopener">Adaptors reference</a> ·
    <a href="${repoUrl}/blob/main/AGENTS.md" target="_blank" rel="noopener">Maintenance loop</a> ·
    <a href="${repoUrl}/blob/main/specs/adaptors/manifest.json" target="_blank" rel="noopener">manifest.json</a> ·
    <a href="${repoUrl}" target="_blank" rel="noopener">source</a>
  </p>
</div></footer>

<script>window.__STATUS__ = ${inlineJson(data)};</script>
<script>${CLIENT_JS}</script>
</body>
</html>
`;
}
