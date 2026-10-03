function we(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function j(){return we().React}var w=((...e)=>j().useState(...e)),R=((...e)=>j().useEffect(...e));var q=((...e)=>j().useMemo(...e));var B=((...e)=>j().useRef(...e));var re,ie,G,ae,H,se,X,le;function _(e){return e.default??e}function He(){return re?Promise.resolve(re):(ie||(ie=import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs").then(e=>{let n=_(e);return n.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs",re=n,n})),ie)}function ce(){return G?Promise.resolve(G):(ae||(ae=import("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/+esm").then(e=>(G=_(e),G))),ae)}function Ce(){return H?Promise.resolve(H):(se||(se=import("https://cdn.jsdelivr.net/npm/mammoth@1.9.1/+esm").then(e=>(H=_(e),H))),se)}function Xe(){return X?Promise.resolve(X):(le||(le=import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm").then(e=>(X=_(e),X))),le)}var ye=new Map,be=new Map,xe=new Map;function Pe(e,n){let t=ye.get(e);return t||(t=He().then(o=>o.getDocument({data:new Uint8Array(n)}).promise),ye.set(e,t)),t}function Se(e,n){let t=be.get(e);return t||(t=ce().then(o=>{let r=new Uint8Array(n.slice(0,2));if(r[0]===80&&r[1]===75)return o.read(n,{type:"array"});let c=new TextDecoder("utf-8").decode(n);return o.read(c,{type:"string"})}),be.set(e,t)),t}function ke(e,n){let t=xe.get(e);return t||(t=Xe().then(o=>o.loadAsync(n)),xe.set(e,t)),t}var Q="data:application/pdf;base64,JVBERi0xLjEKMSAwIG9iajw8L1R5cGUvQ2F0YWxvZy9QYWdlcyAyIDAgUj4+ZW5kb2JqCjIgMCBvYmo8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PmVuZG9iagozIDAgb2JqPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgNjEyIDc5Ml0vQ29udGVudHMgNCAwIFIvUmVzb3VyY2VzPDwvRm9udDw8L0YxIDUgMCBSPj4+Pj4+ZW5kb2JqCjQgMCBvYmo8PC9MZW5ndGggNjg+PnN0cmVhbQpCVCAvRjEgMjQgVGYgNzIgNzIwIFRkIChPcGVuIENMQUkpIFRqIC9GMSAxMiBUZiAwIC0yOCBUZCAoUERGIHByZXZpZXcgbm9kZSkgVGogRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhPj5lbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjY2IDAwMDAwIG4gCjAwMDAwMDAzODQgMDAwMDAgbiAKdHJhaWxlcjw8L1NpemUgNi9Sb290IDEgMCBSPj4Kc3RhcnR4cmVmCjQ1NAolJUVPRgo=",Y="data:text/csv;charset=utf-8,"+encodeURIComponent(`\u9879\u76EE,\u6570\u91CF,\u72B6\u6001
\u6D77\u62A5,3,\u8FDB\u884C\u4E2D
\u5206\u955C,12,\u5B8C\u6210
\u6210\u7247,1,\u5F85\u5BA1`),Me=new Map;function C(e,n=""){return String(e.metadata?.content||n).trim()}function de(e){if(!e)return"document";if(e.startsWith("data:")){let n=e.slice(5,e.indexOf(";")>0?e.indexOf(";"):40);return n.includes("pdf")?"preview.pdf":n.includes("csv")?"preview.csv":"document"}try{return(decodeURIComponent(new URL(e,"https://local.invalid").pathname).split("/").filter(Boolean).pop()||"document").split("?")[0]||"document"}catch{return"document"}}function U(e,n="page"){let t=Number(e.metadata?.[n]);return Number.isFinite(t)&&t>=1?Math.floor(t):1}function E(e){let n=Me.get(e);return n||(n=fetch(e).then(async t=>{if(!t.ok)throw new Error(`\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\uFF08${t.status}\uFF09`);return t.arrayBuffer()}),Me.set(e,n)),n}function Ae(e,n){let t=document.createElement("a");t.href=e,t.download=n,t.rel="noopener",t.target="_blank",document.body.appendChild(t),t.click(),t.remove()}function Re(e,n,t){e.applyOps([{type:"add_node",nodeType:"image",title:t,x:e.node.position.x+e.node.width+48,y:e.node.position.y,metadata:{content:n,status:"success"}}])}function D(e,n){let t=e.node.metadata||{};for(let[o,r]of Object.entries(n))if(t[o]!==r){e.updateMetadata(n);return}}function M(e,n){let t=Math.max(1,n);return Math.min(t,Math.max(1,e))}var _e=Symbol.for("infinite-canvas.jsx.fragment");function Qe(e,n,t){let o=j(),r=e===_e?o.Fragment:e,a=t===void 0?n:{...n??{},key:t};return o.createElement(r,a)}function l(e,n,t){return Qe(e,n,t)}var b=l;function Ee({ctx:e}){let n=C(e.node),t=B(null),[o,r]=w(null),[a,c]=w(!!n);return R(()=>{if(!n){c(!1),r(null);return}let s=!0;return c(!0),r(null),Promise.all([E(n),Ce()]).then(async([u,i])=>{let p=await i.convertToHtml({arrayBuffer:u},{convertImage:i.images.imgElement(async f=>{let m=await f.read("base64");return{src:`data:${f.contentType};base64,${m}`}})}),d=await i.extractRawText({arrayBuffer:u});s&&(t.current&&(t.current.innerHTML=p.value||"<p>\uFF08\u7A7A\u6587\u6863\uFF09</p>"),D(e,{docText:(d.value||"").slice(0,8e3)}),c(!1))}).catch(u=>{s&&(r(u instanceof Error?u.message:String(u)),c(!1))}),()=>{s=!1}},[n]),n?b("div",{"data-canvas-no-zoom":!0,onWheel:Ne,style:{height:"100%",position:"relative"},children:[l("div",{ref:t,className:"cnv-doc-word",onMouseDown:Ne,style:{color:e.theme.node.text,opacity:a||o?.2:1}}),o?l("div",{className:"cnv-doc-status",children:o}):null,!o&&a?l("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00\u6587\u6863\u2026"}):null]}):b("div",{className:"cnv-doc-empty",style:{color:e.theme.node.placeholder},children:[l("div",{className:"icon",children:"W"}),l("div",{className:"label",children:"\u52A9\u624B\u751F\u6210 Word \u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5 Office"})]})}function Ne(e){e.stopPropagation()}function De({ctx:e}){let n=C(e.node,Q),t=U(e.node),o=B(null),[r,a]=w(null),[c,s]=w(!0);return R(()=>{let u=!0;return s(!0),a(null),E(n).then(i=>Pe(n,i)).then(async i=>{if(!u)return;D(e,{pageCount:i.numPages,page:M(t,i.numPages)});let p=M(t,i.numPages),d=await i.getPage(p);if(!u)return;let f=o.current;if(!f)return;let m=f.parentElement?.getBoundingClientRect(),P=Math.max(120,m?.width||e.node.width),S=Math.max(160,m?.height||e.node.height),k=d.getViewport({scale:1}),A=Math.min(P/k.width,S/k.height)*Math.min(2,window.devicePixelRatio||1),N=d.getViewport({scale:A});f.width=Math.ceil(N.width),f.height=Math.ceil(N.height);let v=f.getContext("2d");if(!v)throw new Error("\u65E0\u6CD5\u7ED8\u5236 PDF");await d.render({canvasContext:v,viewport:N}).promise,u&&s(!1)}).catch(i=>{u&&(a(i instanceof Error?i.message:String(i)),s(!1))}),()=>{u=!1}},[n,t,e.node.width,e.node.height]),b("div",{className:"cnv-doc-pdf","data-canvas-no-zoom":!0,onWheel:Ye,children:[l("canvas",{ref:o,style:{opacity:c||r?.15:1}}),r?l("div",{className:"cnv-doc-status",children:r}):null,!r&&c?l("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00 PDF\u2026"}):null]})}function Ye(e){e.stopPropagation()}function Ie(e){let n=e?.querySelector("canvas");return!(n instanceof HTMLCanvasElement)||!n.width?"":n.toDataURL("image/jpeg",.88)}var ue=200,Ke=40;function Te({ctx:e}){let n=C(e.node,Y),t=String(e.node.metadata?.sheet||""),[o,r]=w(null),[a,c]=w(!0),[s,u]=w([]),[i,p]=w([]),[d,f]=w(0);R(()=>{let v=!0;return c(!0),r(null),Promise.all([E(n),ce()]).then(([x,L])=>v?Se(n,x).then(I=>{if(!v)return;let Z=I.SheetNames.length?I.SheetNames:["Sheet1"],V=Z.includes(t)?t:Z[0],ee=I.Sheets[V],J=L.utils.sheet_to_json(ee,{header:1,defval:""}),$=Math.min(Ke,J.reduce((g,T)=>Math.max(g,Array.isArray(T)?T.length:0),1)),F=J.slice(0,ue).map(g=>{let T=Array.isArray(g)?g:[];return Array.from({length:$},(te,O)=>et(T[O]))});u(Z),p(F.length?F:[Array.from({length:$},()=>"")]),f(J.length);let z=F.slice(0,30).map(g=>g.join("	")).join(`
`).slice(0,8e3);D(e,{sheet:V,sheetText:z,pageCount:Z.length}),c(!1)}):void 0).catch(x=>{v&&(r(x instanceof Error?x.message:String(x)),c(!1))}),()=>{v=!1}},[n,t]);let m=i[0]||[],P=i.slice(1),S=d>ue,k=e.theme.toolbar.panel,A=`${e.theme.toolbar.panel}cc`,N=q(()=>s.map(v=>l("button",{type:"button",onMouseDown:pe,onClick:()=>e.updateMetadata({sheet:v}),style:{background:v===(t||s[0])?e.theme.toolbar.activeBg:"transparent",color:e.theme.node.text},children:v},v)),[s,t,e]);return o?l("div",{className:"cnv-doc-status",children:o}):a?l("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00\u8868\u683C\u2026"}):b("div",{className:"cnv-doc-sheet","data-canvas-no-zoom":!0,onWheel:pe,style:{color:e.theme.node.text},children:[l("div",{className:"cnv-doc-sheet-scroll",onMouseDown:pe,children:b("table",{children:[l("thead",{children:b("tr",{children:[l("th",{className:"gutter",style:{background:k,color:e.theme.node.placeholder},children:"#"}),m.map((v,x)=>l("th",{style:{background:k},children:v||tt(x)},x))]})}),l("tbody",{children:P.map((v,x)=>b("tr",{children:[l("td",{className:"gutter",style:{background:A,color:e.theme.node.placeholder},children:x+2}),v.map((L,W)=>l("td",{children:L},W))]},x))})]})}),s.length>1?l("div",{className:"cnv-doc-sheet-tabs",children:N}):null,S?b("div",{className:"cnv-doc-sheet-note",style:{color:e.theme.node.placeholder},children:["\u663E\u793A\u524D ",ue," \u884C\uFF0C\u5171 ",d," \u884C"]}):null]})}function et(e){return e==null?"":String(e)}function tt(e){let n=e+1,t="";for(;n>0;){let o=(n-1)%26;t=String.fromCharCode(65+o)+t,n=Math.floor((n-1)/26)}return t}function pe(e){e.stopPropagation()}var je=new Map;function Ue({ctx:e}){let n=C(e.node),t=U(e.node),o=B(null),[r,a]=w(null),[c,s]=w(!!n),[u,i]=w(null);R(()=>{if(!n){s(!1),i(null);return}let f=!0;return s(!0),a(null),rt(n).then(m=>{f&&(i(m),D(e,{pageCount:m.slides.length,page:M(t,m.slides.length)}),s(!1))}).catch(m=>{f&&(a(m instanceof Error?m.message:String(m)),s(!1))}),()=>{f=!1}},[n]);let p=u?.slides[M(t,u.slides.length)-1],d=q(()=>p?{width:p.width,height:p.height}:{width:16,height:9},[p]);return n?b("div",{ref:o,className:"cnv-doc-slides","data-canvas-no-zoom":!0,onWheel:dt,children:[p?l(nt,{slide:p,frame:d}):null,r?l("div",{className:"cnv-doc-status",children:r}):null,!r&&c?l("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00\u5E7B\u706F\u7247\u2026"}):null]}):b("div",{className:"cnv-doc-empty",style:{color:e.theme.node.placeholder},children:[l("div",{className:"icon",children:"\u25B8"}),l("div",{className:"label",children:"\u52A9\u624B\u751F\u6210\u5E7B\u706F\u7247\u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5 PowerPoint"})]})}function nt({slide:e,frame:n}){return l("div",{className:"cnv-doc-slide",style:{width:"100%",aspectRatio:`${n.width} / ${n.height}`,maxHeight:"100%",background:e.background},children:e.boxes.map((t,o)=>l("div",{className:"cnv-doc-slide-box",style:{left:`${t.x*100}%`,top:`${t.y*100}%`,width:`${t.w*100}%`,height:`${t.h*100}%`,background:t.imageUrl?"transparent":t.fill,color:t.color||"#111",fontWeight:t.bold?700:400,textAlign:t.align||"left",fontSize:`${Math.max(1.6,(t.fontSize||.04)*100)}cqh`,padding:t.text?"1% 2%":0},children:t.imageUrl?l("img",{src:t.imageUrl,alt:""}):t.text},o))})}async function Ze(e){let n=e?.querySelector(".cnv-doc-slide");if(!n)return"";let t=n.getBoundingClientRect(),o=Math.max(320,Math.round(t.width*2)),r=Math.max(180,Math.round(t.height*2)),a=document.createElement("canvas");a.width=o,a.height=r;let c=a.getContext("2d");if(!c)return"";let s=n;c.fillStyle=getComputedStyle(s).backgroundColor||"#fff",c.fillRect(0,0,o,r);let u=[...s.querySelectorAll(".cnv-doc-slide-box")];for(let i of u){let p=i.offsetLeft/s.clientWidth*o,d=i.offsetTop/s.clientHeight*r,f=i.offsetWidth/s.clientWidth*o,m=i.offsetHeight/s.clientHeight*r,P=i.querySelector("img");if(P&&P.naturalWidth){c.drawImage(P,p,d,f,m);continue}let S=i.style.background;S&&S!=="transparent"&&(c.fillStyle=S,c.fillRect(p,d,f,m));let k=i.textContent?.trim();if(!k)continue;c.fillStyle=i.style.color||"#111";let A=Math.max(12,parseFloat(i.style.fontSize)/100*r);c.font=`${i.style.fontWeight||400} ${A}px sans-serif`,c.textAlign=i.style.textAlign||"left",ot(c,k,p+8,d+A+4,f-16,A*1.25)}return a.toDataURL("image/jpeg",.88)}function ot(e,n,t,o,r,a){let c=n.split(`
`),s=o;for(let u of c){let i="";for(let p of u){let d=i+p;e.measureText(d).width>r&&i?(e.fillText(i,t,s),i=p,s+=a):i=d}i&&(e.fillText(i,t,s),s+=a)}}function rt(e){let n=je.get(e);return n||(n=E(e).then(t=>ke(e,t)).then(it),je.set(e,n)),n}async function it(e){let n=await me(e,"ppt/presentation.xml"),t=await Fe(e,"ppt/_rels/presentation.xml.rels"),o=n.querySelector("sldSz")||h(n,"sldSz"),r=y(o?.getAttribute("cx"),12192e3),a=y(o?.getAttribute("cy"),6858e3),c=await st(e),s=[...n.querySelectorAll("sldId")].length?[...n.querySelectorAll("sldId")]:ze(n,"sldId"),u=[];for(let i of s){let p=i.getAttribute("r:id")||i.getAttribute("id")||"",d=t[p];if(!d)continue;let f=Le("ppt/presentation.xml",d);u.push(await at(e,f,r,a,c))}if(!u.length)throw new Error("\u8FD9\u4E2A\u5E7B\u706F\u7247\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u9884\u89C8\u7684\u9875\u9762");return{slides:u}}async function at(e,n,t,o,r){let a=await me(e,n),c=await Fe(e,ct(n)),s=a.querySelector("bgPr, solidFill")||h(a,"solidFill"),u=fe(s,r)||"#ffffff",i=[],p=a.querySelector("spTree")||h(a,"spTree")||a.documentElement;return await Je(e,p,c,t,o,r,i,0,0,1,1),{width:t,height:o,background:u,boxes:i}}async function Je(e,n,t,o,r,a,c,s,u,i,p){for(let d of[...n.children]){let f=d.localName;if(f==="grpSp"){let g=d.querySelector("xfrm")||h(d,"xfrm"),T=g?.querySelector("off")||(g?h(g,"off"):null),te=g?.querySelector("ext")||(g?h(g,"ext"):null),O=g?.querySelector("chOff")||(g?h(g,"chOff"):null),ge=g?.querySelector("chExt")||(g?h(g,"chExt"):null),$e=s+y(T?.getAttribute("x"))*i,Oe=u+y(T?.getAttribute("y"))*p,ne=y(te?.getAttribute("cx"),1)*i,oe=y(te?.getAttribute("cy"),1)*p,he=y(ge?.getAttribute("cx"),ne),ve=y(ge?.getAttribute("cy"),oe);await Je(e,d,t,o,r,a,c,$e-y(O?.getAttribute("x"))*(ne/he),Oe-y(O?.getAttribute("y"))*(oe/ve),ne/he,oe/ve);continue}if(f!=="sp"&&f!=="pic"&&f!=="cxnSp")continue;let m=d.querySelector("xfrm")||h(d,"xfrm"),P=m?.querySelector("off")||(m?h(m,"off"):null),S=m?.querySelector("ext")||(m?h(m,"ext"):null),k=(s+y(P?.getAttribute("x"))*i)/o,A=(u+y(P?.getAttribute("y"))*p)/r,N=y(S?.getAttribute("cx"))*i/o,v=y(S?.getAttribute("cy"))*p/r;if(N<=0||v<=0)continue;let x=fe(d.querySelector("spPr")||h(d,"spPr"),a),L=[...d.querySelectorAll("t"),...ze(d,"t")].map(g=>g.textContent||""),W=[...new Set(L)].filter(Boolean),I=d.querySelector("rPr")||h(d,"rPr"),Z=y(I?.getAttribute("sz"),1800),V=I?.getAttribute("b")==="1",ee=fe(I,a)||"#111827",J=(d.querySelector("pPr")||h(d,"pPr"))?.getAttribute("algn")||"l",$=J==="ctr"?"center":J==="r"?"right":"left",F="",z=d.querySelector("blip")?.getAttribute("r:embed")||h(d,"blip")?.getAttribute("r:embed")||"";if(z&&t[z]){let g=Le("ppt/slides/slide1.xml",t[z]);F=await lt(e,g)}c.push({x:k,y:A,w:N,h:v,fill:x,color:ee,fontSize:Z*127/r,bold:V,align:$,text:W.join(`
`),imageUrl:F})}}async function st(e){let n=Object.keys(e.files).filter(a=>/ppt\/theme\/theme\d+\.xml$/i.test(a)),t={};if(!n.length)return t;let o=await me(e,n[0]),r=o.querySelector("clrScheme")||h(o,"clrScheme");if(!r)return t;for(let a of[...r.children]){let c=a.querySelector("srgbClr")||h(a,"srgbClr"),s=a.querySelector("sysClr")||h(a,"sysClr"),u=c?.getAttribute("val")||s?.getAttribute("lastClr")||"";u&&(t[a.localName]=`#${u.replace(/^#/,"")}`)}return t}function fe(e,n){if(!e)return;let t=e.querySelector("srgbClr")||h(e,"srgbClr");if(t?.getAttribute("val"))return`#${t.getAttribute("val").replace(/^#/,"")}`;let r=(e.querySelector("schemeClr")||h(e,"schemeClr"))?.getAttribute("val")||"";if(r&&n[r])return n[r]}async function me(e,n){let t=e.file(n);if(!t)throw new Error(`\u7F3A\u5C11 ${n}`);let o=String(await t.async("string"));return new DOMParser().parseFromString(o,"application/xml")}async function Fe(e,n){let t=e.file(n),o={};if(!t)return o;let r=new DOMParser().parseFromString(String(await t.async("string")),"application/xml");for(let a of[...r.getElementsByTagName("Relationship")]){let c=a.getAttribute("Id")||"",s=a.getAttribute("Target")||"";c&&s&&(o[c]=s)}return o}var Be=new Map;async function lt(e,n){let t=Be.get(n);if(t)return t;let o=e.file(n);if(!o)return"";let r=await o.async("blob"),a=URL.createObjectURL(r);return Be.set(n,a),a}function ct(e){let n=e.split("/"),t=n.pop()||"";return`${n.join("/")}/_rels/${t}.rels`}function Le(e,n){let t=e.split("/").slice(0,-1);for(let o of n.replace(/\\/g,"/").split("/"))!o||o==="."||(o===".."?t.pop():t.push(o));return t.join("/")}function h(e,n){return[...e.querySelectorAll("*")].find(t=>t.localName===n)||null}function ze(e,n){return[...e.querySelectorAll("*")].filter(t=>t.localName===n)}function y(e,n=0){let t=Number(e);return Number.isFinite(t)?t:n}function dt(e){e.stopPropagation()}var qe=`.cnv-doc {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 16px;
}
.cnv-doc-body {
    flex: 1 1 auto;
    min-height: 0;
    position: relative;
    overflow: hidden;
}
.cnv-doc-empty {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
}
.cnv-doc-empty .icon {
    font-size: 28px;
    line-height: 1;
}
.cnv-doc-empty .label {
    font-size: 13px;
    line-height: 1.45;
    max-width: 240px;
}
.cnv-doc-status {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    padding: 16px;
    text-align: center;
}
.cnv-doc-pdf {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #52525b;
}
.cnv-doc-pdf canvas {
    max-width: 100%;
    max-height: 100%;
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
}
.cnv-doc-sheet {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
}
.cnv-doc-sheet-scroll {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
}
.cnv-doc-sheet table {
    border-collapse: collapse;
    font-size: 12px;
    line-height: 1.35;
    min-width: 100%;
}
.cnv-doc-sheet th,
.cnv-doc-sheet td {
    border: 1px solid rgba(120, 120, 120, 0.22);
    padding: 4px 8px;
    white-space: nowrap;
    max-width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.cnv-doc-sheet th {
    position: sticky;
    top: 0;
    z-index: 2;
    font-weight: 600;
    text-align: left;
}
.cnv-doc-sheet .gutter {
    position: sticky;
    left: 0;
    z-index: 1;
    text-align: right;
    font-variant-numeric: tabular-nums;
    min-width: 36px;
}
.cnv-doc-sheet th.gutter {
    z-index: 3;
}
.cnv-doc-sheet-tabs {
    flex: 0 0 auto;
    display: flex;
    gap: 4px;
    overflow-x: auto;
    padding: 6px 8px;
    border-top: 1px solid rgba(120, 120, 120, 0.22);
}
.cnv-doc-sheet-tabs button {
    flex: 0 0 auto;
    border: 0;
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 12px;
    cursor: pointer;
}
.cnv-doc-sheet-note {
    flex: 0 0 auto;
    font-size: 11px;
    padding: 4px 10px 8px;
}
.cnv-doc-word {
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 20px 22px 28px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.65;
}
.cnv-doc-word h1,
.cnv-doc-word h2,
.cnv-doc-word h3 {
    line-height: 1.3;
    margin: 0.8em 0 0.35em;
}
.cnv-doc-word p {
    margin: 0.45em 0;
}
.cnv-doc-word img {
    max-width: 100%;
    height: auto;
}
.cnv-doc-word table {
    border-collapse: collapse;
    width: 100%;
    margin: 0.6em 0;
    font-size: 13px;
}
.cnv-doc-word td,
.cnv-doc-word th {
    border: 1px solid rgba(120, 120, 120, 0.28);
    padding: 4px 8px;
}
.cnv-doc-slides {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0f172a;
}
.cnv-doc-slide {
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
    container-type: size;
}
.cnv-doc-slide-box {
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.25;
}
.cnv-doc-slide-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}
`;function pt({ctx:e}){return l("div",{className:"cnv-doc","data-doc-node":e.node.id,children:l(De,{ctx:e})})}function ft({ctx:e}){return l("div",{className:"cnv-doc","data-doc-node":e.node.id,children:l(Te,{ctx:e})})}function mt({ctx:e}){return l("div",{className:"cnv-doc","data-doc-node":e.node.id,children:l(Ee,{ctx:e})})}function gt({ctx:e}){return l("div",{className:"cnv-doc","data-doc-node":e.node.id,children:l(Ue,{ctx:e})})}function K(e,n){let t=C(e.node);return{id:"doc-download",title:"\u4E0B\u8F7D\u539F\u6587\u4EF6",label:"\u4E0B\u8F7D",icon:"\u2193",onClick:()=>{t&&Ae(t,de(t)||n)}}}function We(e,n){let t=Math.max(1,Number(e.node.metadata?.pageCount)||1),o=M(U(e.node),t);return[{id:"doc-prev",title:`\u4E0A\u4E00${n}`,label:"\u2039",icon:"\u2039",onClick:()=>e.updateMetadata({page:M(o-1,t)})},{id:"doc-pos",title:`${o} / ${t}`,label:`${o}/${t}`,icon:" ",onClick:()=>{}},{id:"doc-next",title:`\u4E0B\u4E00${n}`,label:"\u203A",icon:"\u203A",onClick:()=>e.updateMetadata({page:M(o+1,t)})}]}function Ve(e,n){return{id:"doc-to-image",title:"\u628A\u5F53\u524D\u9875\u653E\u5230\u56FE\u7247\u8282\u70B9",label:"\u51FA\u56FE",icon:"\u29C9",onClick:()=>{let t=document.querySelector(`[data-doc-node="${e.node.id}"]`);(n==="pdf"?Promise.resolve(Ie(t)):Ze(t)).then(r=>{if(!r)return;let a=U(e.node);Re(e,r,`${e.node.title||de(C(e.node))} ${a}`)})}}}var sn={id:"documents",name:"\u6587\u6863\u9884\u89C8",version:"1.0.0",description:"\u5728\u753B\u5E03\u4E0A\u9884\u89C8 PDF\u3001\u8868\u683C\u3001Word \u548C\u5E7B\u706F\u7247\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5\u529E\u516C\u8F6F\u4EF6",css:qe,nodes:[{type:"pdf:preview",title:"PDF",icon:"\u{1F4C4}",description:"\u5728\u753B\u5E03\u4E0A\u7FFB\u9875\u9884\u89C8 PDF",defaultSize:{width:420,height:560},defaultMetadata:{content:Q,page:1},minimapColor:"#ef4444",hidePanel:!0,interactionToggle:!0,Content:pt,toolbar:e=>[...We(e,"\u9875"),K(e,"preview.pdf"),Ve(e,"pdf")]},{type:"sheet:preview",title:"\u8868\u683C",icon:"\u25A6",description:"\u5728\u753B\u5E03\u4E0A\u9884\u89C8 Excel / CSV",defaultSize:{width:560,height:380},defaultMetadata:{content:Y},minimapColor:"#22c55e",hidePanel:!0,interactionToggle:!0,resource:e=>({kind:"text",text:String(e.metadata?.sheetText||"")}),Content:ft,toolbar:e=>[K(e,"preview.csv")]},{type:"docx:preview",title:"Word",icon:"W",description:"\u5728\u753B\u5E03\u4E0A\u9884\u89C8 Word \u6587\u6863",defaultSize:{width:420,height:520},defaultMetadata:{content:""},minimapColor:"#3b82f6",hidePanel:!0,interactionToggle:!0,resource:e=>({kind:"text",text:String(e.metadata?.docText||"")}),Content:mt,toolbar:e=>[K(e,"preview.docx")]},{type:"slides:preview",title:"\u5E7B\u706F\u7247",icon:"\u25A3",description:"\u5728\u753B\u5E03\u4E0A\u7FFB\u9875\u9884\u89C8 PPT",defaultSize:{width:520,height:320},defaultMetadata:{content:"",page:1},minimapColor:"#f97316",hidePanel:!0,interactionToggle:!0,Content:gt,toolbar:e=>[...We(e,"\u5F20"),K(e,"preview.pptx"),Ve(e,"slides")]}]};export{sn as default};
