function ft(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function ce(){return ft().React}var M=((...e)=>ce().useState(...e)),L=((...e)=>ce().useEffect(...e));var xe=((...e)=>ce().useMemo(...e)),mt=((...e)=>ce().useCallback(...e)),F=((...e)=>ce().useRef(...e));var gt=(e,t,n)=>{let r=ft().createPortal;if(!r)throw new Error("[plugin-sdk] \u5BBF\u4E3B\u672A\u6CE8\u5165 createPortal");return r(e,t,n)};var te=Symbol.for("infinite-canvas.jsx.fragment");function Kn(e,t,n){let r=ce(),o=e===te?r.Fragment:e,i=n===void 0?t:{...t??{},key:n};return r.createElement(o,i)}function p(e,t,n){return Kn(e,t,n)}var P=p;var je=new Map;function Le(e,t="view"){je.get(e)?.(t)}function ue(e){let[t,n]=M(null);return L(()=>(je.set(e,n),()=>{je.get(e)===n&&je.delete(e)}),[e]),[t,n]}function de({title:e,mode:t,onClose:n,dark:r,actions:o,children:i,onKey:a}){return L(()=>{let s=document.body.style.overflow;document.body.style.overflow="hidden";let c=u=>{a?.(u)||u.key==="Escape"&&(u.preventDefault(),n())};return window.addEventListener("keydown",c),()=>{document.body.style.overflow=s,window.removeEventListener("keydown",c)}},[n,a]),gt(P("div",{className:`cnv-doc-fs${r||t==="play"?" is-dark":""}`,"data-canvas-no-zoom":!0,onMouseDown:ht,onPointerDown:ht,onWheel:ht,children:[t==="play"?null:P("div",{className:"cnv-doc-fs-bar",children:[p("div",{className:"cnv-doc-fs-title",children:e}),P("div",{className:"cnv-doc-fs-actions",children:[o,p("button",{type:"button",onClick:n,children:"\u5173\u95ED"})]})]}),p("div",{className:`cnv-doc-fs-body${t==="play"?" is-play":""}`,children:i}),t==="play"?p("div",{className:"cnv-doc-fs-playhint",children:"\u70B9\u51FB / \u7A7A\u683C / \u2192 \u4E0B\u4E00\u9879 \xB7 \u2190 \u4E0A\u4E00\u9879 \xB7 Esc \u9000\u51FA\u64AD\u653E"}):null]}),document.body)}function ht(e){e.stopPropagation()}var bt,wt,Ze,yt;var ze,vt,Oe,xt;function He(e){return e.default??e}function Yn(){return bt?Promise.resolve(bt):(wt||(wt=import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs").then(e=>{let t=He(e);return t.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs",bt=t,t})),wt)}function Ce(){return Ze?Promise.resolve(Ze):(yt||(yt=import("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/+esm").then(e=>(Ze=He(e),Ze))),yt)}function Ct(){return ze?Promise.resolve(ze):(vt||(vt=import("https://cdn.jsdelivr.net/npm/docx-preview@0.3.6/+esm").then(e=>(ze=He(e),ze))),vt)}async function _e(){let e=await ie();return new e}function ie(){return Oe?Promise.resolve(Oe):(xt||(xt=import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm").then(e=>(Oe=He(e),Oe))),xt)}var Ot=new Map,Je=new Map,Jt=new Map;function Ht(e,t){let n=Ot.get(e);return n||(n=Yn().then(r=>r.getDocument({data:new Uint8Array(t),cMapUrl:"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/cmaps/",cMapPacked:!0,standardFontDataUrl:"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/standard_fonts/",useSystemFonts:!0}).promise),Ot.set(e,n)),n}function _t(e,t){let n=Je.get(e);return n||(n=Ce().then(r=>{let o=new Uint8Array(t.slice(0,2));if(o[0]===80&&o[1]===75)return r.read(t,{type:"array",cellNF:!0,cellDates:!0,cellStyles:!0});let a=new TextDecoder("utf-8").decode(t);return r.read(a,{type:"string",cellNF:!0,cellDates:!0,cellStyles:!0})}),Je.set(e,n)),n}function St(e){Je.delete(e)}function kt(e,t){Je.set(e,Promise.resolve(t))}function me(e,t){let n=e instanceof Uint8Array?e:new Uint8Array(e),r="",o=32768;for(let i=0;i<n.length;i+=o)r+=String.fromCharCode(...n.subarray(i,i+o));return`data:${t};base64,${btoa(r)}`}function Se(e,t){let n=Jt.get(e);return n||(n=ie().then(r=>r.loadAsync(t)),Jt.set(e,n)),n}var Qn="application/vnd.openxmlformats-officedocument.wordprocessingml.document";async function Xt(e){let t=await _e();t.file("[Content_Types].xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`),t.file("_rels/.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`),t.file("word/document.xml",er(e));let n=await t.generateAsync({type:"uint8array"});return me(n,Qn)}function er(e){let t=new DOMParser().parseFromString(`<body>${e}</body>`,"text/html").body,n=Gt(t);return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>${n.length?n.join(""):Re([{text:t.textContent||""}])}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr></w:body>
</w:document>`}function Gt(e){let t=[];for(let n of[...e.childNodes]){if(n.nodeType===Node.TEXT_NODE){let o=n.textContent||"";o.trim()&&t.push(Re([{text:o}]));continue}if(!(n instanceof Element))continue;let r=n.tagName.toLowerCase();if(r==="table"){t.push(tr(n));continue}if(r==="ul"||r==="ol"){for(let o of[...n.children])t.push(Re([{text:`\u2022 ${o.textContent||""}`}]));continue}if(r==="br"){t.push(Re([{text:""}]));continue}if(["p","h1","h2","h3","li","div","blockquote"].includes(r)){t.push(Re(qt(n),r));continue}t.push(...Gt(n))}return t}function qt(e,t=!1,n=!1){let r=[];for(let o of[...e.childNodes]){if(o.nodeType===Node.TEXT_NODE){let a=o.textContent||"";a&&r.push({text:a,bold:t,italic:n});continue}if(!(o instanceof Element))continue;let i=o.tagName.toLowerCase();if(i==="br"){r.push({text:`
`,bold:t,italic:n});continue}r.push(...qt(o,t||i==="b"||i==="strong",n||i==="i"||i==="em"))}return r}function Re(e,t="p"){let n=t==="h1"?36:t==="h2"?28:t==="h3"?24:21;return`<w:p>${e.length?e.map(o=>Nt(o,n,t.startsWith("h"))).join(""):Nt({text:""},n)}</w:p>`}function Nt(e,t,n=!1){let r=e.bold||n?"<w:b/>":"",o=e.italic?"<w:i/>":"";return e.text.split(`
`).map((i,a)=>`<w:r><w:rPr>${r}${o}<w:sz w:val="${t*2}"/><w:szCs w:val="${t*2}"/></w:rPr>${a?"<w:br/>":""}<w:t xml:space="preserve">${nr(i)}</w:t></w:r>`).join("")}function tr(e){return`<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:tblBorders><w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/><w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/><w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/></w:tblBorders></w:tblPr>${[...e.querySelectorAll("tr")].map(n=>`<w:tr>${[...n.children].filter(o=>o.tagName==="TD"||o.tagName==="TH").map(o=>`<w:tc><w:p>${Nt({text:o.textContent||"",bold:o.tagName==="TH"},21)}</w:p></w:tc>`).join("")}</w:tr>`).join("")}</w:tbl>`}function nr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}async function Qt(e){let t=new Uint8Array(e.slice(0,2));if(t[0]!==80||t[1]!==75)return[];let r=await(await ie()).loadAsync(e),o=r.file("word/document.xml");if(!o)return[];let i=new DOMParser().parseFromString(String(await o.async("string")),"application/xml"),a=r.file("word/_rels/document.xml.rels"),s=new Map;if(a){let l=new DOMParser().parseFromString(String(await a.async("string")),"application/xml");for(let d of[...l.getElementsByTagName("Relationship")]){let m=d.getAttribute("Id")||"",g=d.getAttribute("Target")||"";m&&g&&s.set(m,g)}}let c=[...i.getElementsByTagName("*")].filter(l=>l.localName==="blip"),u=[];for(let l of[...i.getElementsByTagName("*")].filter(d=>d.localName==="pic")){let d=[...l.getElementsByTagName("*")].find(N=>N.localName==="videoFile");if(!d)continue;let m=Xe(d,"link")||Xe(d,"embed"),g=s.get(m)||"",w=Kt("word/document.xml",g),h=r.file(w);if(!h)continue;let b=await h.async("blob"),f=URL.createObjectURL(new Blob([await b.arrayBuffer()],{type:Yt(w)})),y=[...l.getElementsByTagName("*")].find(N=>N.localName==="blip");u.push({imageIndex:y?c.indexOf(y):-1,url:f})}if(u.length)return u;for(let l of[...i.getElementsByTagName("*")].filter(d=>d.localName==="videoFile")){let d=Xe(l,"link")||Xe(l,"embed"),m=Kt("word/document.xml",s.get(d)||""),g=r.file(m);if(!g)continue;let w=await g.async("blob");u.push({imageIndex:-1,url:URL.createObjectURL(new Blob([await w.arrayBuffer()],{type:Yt(m)}))})}return u}function Xe(e,t){return[...e.attributes].find(n=>n.localName===t)?.value||""}function Kt(e,t){if(!t)return"";if(t.startsWith("/"))return t.replace(/^\/+/,"");let n=e.split("/").slice(0,-1);for(let r of t.replace(/\\/g,"/").split("/"))!r||r==="."||(r===".."?n.pop():n.push(r));return n.join("/")}function Yt(e){let t=e.split(".").pop()?.toLowerCase()||"";return t==="webm"?"video/webm":t==="mov"?"video/quicktime":t==="ogg"?"video/ogg":"video/mp4"}function en(e,t){let n=[...e.querySelectorAll("img")];for(let r of t){let o=document.createElement("video");o.controls=!0,o.playsInline=!0,o.src=r.url,o.className="cnv-doc-video";let i=r.imageIndex>=0?n[r.imageIndex]:null;i?(o.poster=i.currentSrc||i.src,i.replaceWith(o)):(e.querySelector("article")||e).append(o)}}var Ge="data:application/pdf;base64,JVBERi0xLjEKMSAwIG9iajw8L1R5cGUvQ2F0YWxvZy9QYWdlcyAyIDAgUj4+ZW5kb2JqCjIgMCBvYmo8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PmVuZG9iagozIDAgb2JqPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgNjEyIDc5Ml0vQ29udGVudHMgNCAwIFIvUmVzb3VyY2VzPDwvRm9udDw8L0YxIDUgMCBSPj4+Pj4+ZW5kb2JqCjQgMCBvYmo8PC9MZW5ndGggNjg+PnN0cmVhbQpCVCAvRjEgMjQgVGYgNzIgNzIwIFRkIChPcGVuIENMQUkpIFRqIC9GMSAxMiBUZiAwIC0yOCBUZCAoUERGIHByZXZpZXcgbm9kZSkgVGogRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhPj5lbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjY2IDAwMDAwIG4gCjAwMDAwMDAzODQgMDAwMDAgbiAKdHJhaWxlcjw8L1NpemUgNi9Sb290IDEgMCBSPj4Kc3RhcnR4cmVmCjQ1NAolJUVPRgo=",qe="data:text/csv;charset=utf-8,"+encodeURIComponent(`\u9879\u76EE,\u6570\u91CF,\u72B6\u6001
\u6D77\u62A5,3,\u8FDB\u884C\u4E2D
\u5206\u955C,12,\u5B8C\u6210
\u6210\u7247,1,\u5F85\u5BA1`),tn=new Map;function Q(e,t=""){return String(e.metadata?.content||t).trim()}function rr(e){let t=String(e.metadata?.sourceUrl||"").trim();if(t&&!t.startsWith("data:"))return t;let n=String(e.metadata?.content||"").trim();return n&&!n.startsWith("data:")?n:""}function pe(e){if(String(e.metadata?.sourceUrl||"").trim())return{};let n=String(e.metadata?.content||"").trim();return n&&!n.startsWith("data:")?{sourceUrl:n}:{}}async function nn(e){let t=rr(e);if(!t)throw new Error("\u8FD9\u4E2A\u6587\u4EF6\u8FD8\u6CA1\u6709\u4FDD\u5B58\u5728\u7535\u8111\u4E0A");let n=or(t),r=(n?.origin||localStorage.getItem("canvas-agent-url")||"http://127.0.0.1:17371").replace(/\/$/,""),o=n?.token||localStorage.getItem("canvas-agent-token")||await ar(r);if(!o)throw new Error("\u8FD8\u6CA1\u6709\u8FDE\u4E0A\u672C\u673A\u52A9\u624B");let i=n?lr(await sr(r,o),n.path):ir(t);if(!i)throw new Error("\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\u5728\u7535\u8111\u4E0A\u7684\u4F4D\u7F6E");let a=await fetch(`${r}/agent/local-file/reveal?token=${encodeURIComponent(o)}`,{method:"POST",headers:{"content-type":"application/json","x-canvas-agent-token":o},body:JSON.stringify({path:i})});if(!a.ok){let s=await a.json().catch(()=>({}));throw new Error(s.error||"\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6\u5939")}}function or(e){try{let t=new URL(e);if(!t.pathname.endsWith("/agent/workspace-media"))return null;let n=t.searchParams.get("path")||"";return n?{origin:t.origin,path:n,token:t.searchParams.get("token")||""}:null}catch{return null}}function ir(e){if(!e.startsWith("file:"))return"";try{let t=decodeURIComponent(new URL(e).pathname);return/^\/[A-Za-z]:/.test(t)?t.slice(1):t}catch{return""}}async function ar(e){try{return(await(await fetch(`${e}/config`)).json()).token||""}catch{return""}}async function sr(e,t){let n=await fetch(`${e}/agent/codex/workspace?token=${encodeURIComponent(t)}`,{headers:{"x-canvas-agent-token":t}}),r=await n.json().catch(()=>({})),o=r.workspace?.workspacePath||"";if(!n.ok||!o)throw new Error(r.error||"\u8FD8\u6CA1\u6709\u8FDE\u4E0A\u672C\u673A\u52A9\u624B");return o}function lr(e,t){let n=t.replace(/\\/g,"/").replace(/^\/+/,"").split("/").filter(Boolean);return/^[A-Za-z]:/.test(e)?`${e.replace(/[\\/]+$/,"")}\\${n.join("\\")}`:`${e.replace(/\/+$/,"")}/${n.join("/")}`}function At(e){if(!e)return"document";if(e.startsWith("data:")){let t=e.slice(5,e.indexOf(";")>0?e.indexOf(";"):40);return t.includes("pdf")?"preview.pdf":t.includes("csv")?"preview.csv":"document"}try{return(decodeURIComponent(new URL(e,"https://local.invalid").pathname).split("/").filter(Boolean).pop()||"document").split("?")[0]||"document"}catch{return"document"}}function ge(e,t="page"){let n=Number(e.metadata?.[t]);return Number.isFinite(n)&&n>=1?Math.floor(n):1}function ne(e){let t=tn.get(e);return t||(t=fetch(e).then(async n=>{if(!n.ok)throw new Error(`\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\uFF08${n.status}\uFF09`);return n.arrayBuffer()}),tn.set(e,t)),t}function rn(e,t){let n=document.createElement("a");n.href=e,n.download=t,n.rel="noopener",n.target="_blank",document.body.appendChild(n),n.click(),n.remove()}function on(e,t,n){e.applyOps([{type:"add_node",nodeType:"image",title:n,x:e.node.position.x+e.node.width+48,y:e.node.position.y,metadata:{content:t,status:"success"}}])}function ae(e,t){let n=e.node.metadata||{};for(let[r,o]of Object.entries(t))if(n[r]!==o){e.updateMetadata(t);return}}function J(e,t){let n=Math.max(1,t);return Math.min(n,Math.max(1,e))}function cn({ctx:e}){let t=Q(e.node),n=!!e.node.metadata?.editing,r=String(e.node.metadata?.docHtml||""),o=cr(e.node.metadata?.wordPictures),[i,a]=ue(e.node.id),[s,c]=M(null),[u,l]=M(!!t),[d,m]=M(r);L(()=>{if(r){m(r),l(!1),c(null);return}if(!t){l(!1),c(null);return}let h=!0;return l(!0),c(null),ne(t).then(async b=>{let f=document.createElement("div");if(await(await Ct()).renderAsync(b,f,void 0,{className:"cnv-docx",inWrapper:!0,breakPages:!0,renderHeaders:!0,renderFooters:!0,useBase64URL:!0}),!h)return;let N=f.textContent||"";m(f.innerHTML||"<p>\uFF08\u7A7A\u6587\u6863\uFF09</p>"),ae(e,{docText:N.replace(/\s+/g," ").trim().slice(0,8e3)}),l(!1)}).catch(b=>{h&&(c(b instanceof Error?b.message:String(b)),l(!1))}),()=>{h=!1}},[t,r]);let g=(h,b)=>{m(h),Xt(h).then(f=>e.updateMetadata({docHtml:h,docText:b.slice(0,8e3),content:f,...pe(e.node)})).catch(()=>e.updateMetadata({docHtml:h,docText:b.slice(0,8e3)}))};if(!t&&!r&&!o.length)return P("div",{className:"cnv-doc-empty",style:{color:e.theme.node.placeholder},children:[p("div",{className:"icon",children:"W"}),p("div",{className:"label",children:"\u52A9\u624B\u751F\u6210 Word \u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002\u70B9\u7F16\u8F91\u5373\u53EF\u76F4\u63A5\u6539\u6587\u5B57\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5 Office"})]});let w=n?p(an,{html:d,color:e.theme.node.text,onSave:g}):p(sn,{url:t,savedHtml:r,pictures:o,loading:u,error:s});return P(te,{children:[w,i?p(de,{title:e.node.title||"Word",mode:i,onClose:()=>a(null),actions:p("button",{type:"button",onClick:()=>e.updateMetadata({editing:!n}),children:n?"\u9884\u89C8":"\u7F16\u8F91"}),children:p("div",{className:"cnv-doc-word-fs",style:{color:e.theme.node.text},children:n?p(an,{html:d,color:e.theme.node.text,onSave:g}):p(sn,{url:t,savedHtml:r,pictures:o,loading:u,error:s})})}):null]})}function an({html:e,color:t,onSave:n}){let r=F(null);return L(()=>{r.current&&(r.current.innerHTML=e||"<p></p>")},[]),p("div",{ref:r,className:"cnv-doc-word is-editing",contentEditable:!0,suppressContentEditableWarning:!0,"data-canvas-no-zoom":!0,onMouseDown:De,onPointerDown:De,onWheel:De,onBlur:o=>n(o.currentTarget.innerHTML,o.currentTarget.innerText),style:{color:t}})}function sn({url:e,savedHtml:t,pictures:n,loading:r,error:o}){let i=F(null);return L(()=>{let a=i.current;if(!a)return;if(t){a.innerHTML=t;return}if(!e)return;let s=!0;ne(e).then(async u=>{let l=await Ct();if(!s||!i.current)return;i.current.replaceChildren(),await l.renderAsync(u,i.current,void 0,{className:"cnv-docx",inWrapper:!0,breakPages:!0,renderHeaders:!0,renderFooters:!0,useBase64URL:!0});let d=await Qt(u).catch(()=>[]);!s||!i.current||(en(i.current,d),ln(i.current))}).catch(()=>{});let c=new ResizeObserver(()=>{i.current&&ln(i.current)});return c.observe(a),()=>{s=!1,c.disconnect()}},[e,t]),P("div",{"data-canvas-no-zoom":!0,onWheel:De,style:{flex:"1 1 auto",minHeight:0,height:"100%",position:"relative",overflow:"auto"},children:[p("div",{ref:i,className:"cnv-doc-word is-page",onMouseDown:De,style:{opacity:r||o?.2:1}}),n.length?p("div",{className:"cnv-doc-word-pictures",children:n.map(a=>p("img",{src:a,alt:""},a.slice(0,48)))}):null,o?p("div",{className:"cnv-doc-status",children:o}):null,!o&&r?p("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00\u6587\u6863\u2026"}):null]})}function ln(e){let t=[...e.querySelectorAll("section.docx")];if(!t.length)return;let n=Math.max(160,e.clientWidth-24);for(let r of t){let o=r.offsetWidth||Number.parseFloat(r.style.width)||n,i=Math.min(1,n/o);r.style.transform=`scale(${i})`,r.style.transformOrigin="top center",r.style.marginBottom=`${(i-1)*r.offsetHeight}px`}}function cr(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&!!t):[]}function De(e){e.stopPropagation()}function dn({ctx:e}){let t=Q(e.node,Ge),n=ge(e.node),r=F(null),o=F(null),i=F(null),[a,s]=ue(e.node.id),[c,u]=M(null),[l,d]=M(!0),[m,g]=M(1),w=Math.max(1,Number(e.node.metadata?.pageCount)||1);L(()=>{let f=!0;return d(!0),u(null),ne(t).then(y=>Ht(t,y)).then(async y=>{if(!f)return;let N=J(n,y.numPages),k=await y.getPage(N),E=((k.getTextContent?await k.getTextContent():{items:[]}).items||[]).map(A=>A.str||"").join(" ").replace(/\s+/g," ").trim().slice(0,8e3);ae(e,{pageCount:y.numPages,page:N,...E?{docText:E}:{}}),f&&(await new Promise(A=>requestAnimationFrame(()=>A(void 0))),await un(k,r.current,r.current?.parentElement,1,!0),a&&await un(k,o.current,o.current?.parentElement,m,!0),await ur(k,i.current,r.current),f&&d(!1))}).catch(y=>{f&&(u(y instanceof Error?y.message:String(y)),d(!1))}),()=>{f=!1}},[t,n,e.node.width,e.node.height,a,m]);let h=P("div",{className:"cnv-doc-fs-pager",children:[p("button",{type:"button",onClick:()=>e.updateMetadata({page:J(n-1,w)}),children:"\u4E0A\u4E00\u9875"}),P("span",{children:[J(n,w)," / ",w]}),p("button",{type:"button",onClick:()=>e.updateMetadata({page:J(n+1,w)}),children:"\u4E0B\u4E00\u9875"}),p("button",{type:"button",onClick:()=>g(f=>Math.max(.5,Number((f-.25).toFixed(2)))),children:"\u2212"}),p("button",{type:"button",onClick:()=>g(f=>Math.min(3,Number((f+.25).toFixed(2)))),children:"+"})]}),b=String(e.node.metadata?.revision||"").trim();return P(te,{children:[P("div",{className:"cnv-doc-pdf","data-canvas-no-zoom":!0,onWheel:dr,children:[P("div",{className:"cnv-doc-pdf-page",children:[p("canvas",{ref:r,style:{opacity:l||c?.15:1}}),p("div",{ref:i,className:"cnv-doc-pdf-text"})]}),b?p("div",{className:"cnv-doc-revision",children:b}):null,c?p("div",{className:"cnv-doc-status",children:c}):null,!c&&l?p("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00 PDF\u2026"}):null]}),a?p(de,{title:e.node.title||"PDF",mode:a,onClose:()=>s(null),dark:!0,actions:h,onKey:f=>["ArrowRight","PageDown"," "].includes(f.key)?(f.preventDefault(),e.updateMetadata({page:J(n+1,w)}),!0):["ArrowLeft","PageUp"].includes(f.key)?(f.preventDefault(),e.updateMetadata({page:J(n-1,w)}),!0):!1,children:p("div",{className:"cnv-doc-pdf is-fs",children:p("canvas",{ref:o})})}):null]})}async function un(e,t,n,r,o){if(!t)return;let i=e.getViewport({scale:1}),a=Math.max(160,n?.clientWidth||t.parentElement?.clientWidth||720),s=Math.max(160,n?.clientHeight||t.parentElement?.clientHeight||960),c=o?a/i.width:Math.min(a/i.width,s/i.height),u=Math.min(2,window.devicePixelRatio||1),l=Math.max(.4,c*r*u),d=e.getViewport({scale:l});t.width=Math.ceil(d.width),t.height=Math.ceil(d.height);let m=Math.min(a,d.width/u);t.style.width=`${m}px`,t.style.height=`${m*(i.height/i.width)}px`;let g=t.getContext("2d");if(!g)throw new Error("\u65E0\u6CD5\u7ED8\u5236 PDF");g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,t.width,t.height),await e.render({canvasContext:g,viewport:d}).promise}async function ur(e,t,n){if(!t||!n||!e.getTextContent)return;let r=await e.getTextContent(),o=e.getViewport({scale:1}),i=n.clientWidth/o.width,a=n.clientHeight/o.height;t.style.width=`${n.clientWidth}px`,t.style.height=`${n.clientHeight}px`,t.replaceChildren();for(let s of r.items||[]){let c=s.str||"";if(!c.trim())continue;let[u,,,l,d,m]=s.transform||[1,0,0,1,0,0],g=document.createElement("span");g.textContent=c,g.style.left=`${d*i}px`,g.style.top=`${(o.height-m-Math.abs(l))*a}px`,g.style.fontSize=`${Math.max(6,Math.abs(l)*a)}px`,g.style.width=`${Math.max(4,(s.width||Math.abs(u)*c.length)*i)}px`,t.append(g)}}function dr(e){e.stopPropagation()}function pn(e){let t=e?.querySelector("canvas");return!(t instanceof HTMLCanvasElement)||!t.width?"":t.toDataURL("image/jpeg",.88)}var Be=null,Ye=new Set;function Pt(e){for(let t=0;t<2;t+=1){Be=new Map;for(let n of e.SheetNames){let r=e.Sheets[n];if(r)for(let o of Object.keys(r))o.startsWith("!")||fn(e,n,o,0)}}Be=null,Ye.clear()}function Mt(e,t,n){let o=new Qe(n.replace(/^=/,""),e,t,0).rangeOrValue();return Array.isArray(o)?o.map(re):[re(o)]}function pr(e,t,n){if(e.f=n,!Array.isArray(t)){if(z(t)){e.t="e",e.v=t.error,e.w=t.error;return}if(typeof t=="number"&&Number.isFinite(t)){e.t="n",e.v=t,e.w=fr(t,e.z);return}if(typeof t=="boolean"){e.t="b",e.v=t,e.w=t?"TRUE":"FALSE";return}e.t="str",e.v=t==null?"":String(t),e.w=e.v}}function fr(e,t){let n=t||"",r=n.includes("%"),o=r?e*100:e,i=n.includes(",")||Math.abs(o)>=1e3,a=n.includes(".")?(n.split(".")[1]?.match(/0/g)||[]).length:void 0,s=o.toLocaleString("zh-CN",{minimumFractionDigits:a??0,maximumFractionDigits:a??2,useGrouping:i});return r?`${s}%`:s}var Qe=class{constructor(t,n,r,o){this.source=t;this.book=n;this.sheet=r;this.depth=o;this.i=0}comparison(){let t=this.additive();if(Array.isArray(t)||z(t))return t;this.skip();let n=this.operator(["<=",">=","<>","=","<",">"]);if(!n)return t;let r=this.additive();return z(r)?r:vr(re(t),re(Array.isArray(r)?r[0]:r),n)}rangeOrValue(){return this.comparison()}additive(){let t=this.multiplicative();for(;!Array.isArray(t)&&!z(t);){if(this.skip(),this.eat("+"))t=Ke(_(t)+_(this.multiplicative()));else if(this.eat("-"))t=Ke(_(t)-_(this.multiplicative()));else if(this.eat("&"))t=`${t??""}${xr(this.multiplicative())}`;else break;if(Array.isArray(t)||z(t))return t}return t}multiplicative(){let t=this.unary();for(;!Array.isArray(t)&&!z(t);){if(this.skip(),this.eat("*"))t=Ke(_(t)*_(this.unary()));else if(this.eat("/")){let n=_(this.unary());if(n===0)return{error:"#DIV/0!"};t=Ke(_(t)/n)}else break;if(z(t))return t}return t}unary(){if(this.skip(),this.eat("-")){let t=this.unary();return z(t)||Array.isArray(t)?t:-_(t)}return this.eat("+")?this.unary():this.primary()}primary(){if(this.skip(),this.eat("(")){let r=this.comparison();return this.eat(")"),r}if(this.peek()==='"')return this.string();if(this.isNumber())return this.number();let t=this.peekName();if(t&&this.source[this.i+t.length]==="(")return this.call(t);let n=this.reference();return n||(this.peek()===""?null:{error:"#NAME?"})}call(t){this.i+=t.length,this.eat("(");let n=[];if(this.skip(),!this.eat(")")){do n.push(this.comparison()),this.skip();while(this.eat(","));this.eat(")")}return mr(t.toUpperCase(),n)}reference(){let t=br(this.source,this.i,this.sheet);if(!t)return null;this.i=t.next;let n=gr(this.book,t.sheet,t.start,t.end||t.start,this.depth+1);return t.end?n:n[0]??null}string(){this.i+=1;let t="";for(;this.i<this.source.length;){let n=this.source[this.i];if(this.i+=1,n==='"'){if(this.source[this.i]==='"'){t+='"',this.i+=1;continue}break}t+=n}return t}number(){let t=this.source.slice(this.i).match(/^\d+(\.\d+)?%?/);if(!t)return 0;this.i+=t[0].length;let n=Number(t[0].replace("%",""));return t[0].endsWith("%")?n/100:n}isNumber(){return/\d/.test(this.peek())}peekName(){return this.source.slice(this.i).match(/^[A-Za-z][A-Za-z0-9.]*/)?.[0]||""}operator(t){this.skip();let n=t.find(r=>this.source.startsWith(r,this.i));return n?(this.i+=n.length,n):""}eat(t){return this.skip(),this.source.startsWith(t,this.i)?(this.i+=t.length,!0):!1}skip(){for(;this.source[this.i]===" ";)this.i+=1}peek(){return this.skip(),this.source[this.i]||""}};function mr(e,t){let n=t.flatMap(o=>Array.isArray(o)?o:[o]);if(e==="IFERROR"){let o=t[0];return z(o)||Array.isArray(o)&&o.some(z)?re(t[1]):o}if(n.some(z))return n.find(z);let r=n.map(re);if(e==="SUM")return r.reduce((o,i)=>o+(typeof i=="number"?i:0),0);if(e==="COUNTA")return r.filter(o=>o!=null&&o!=="").length;if(e==="COUNT")return r.filter(o=>typeof o=="number").length;if(e==="AVERAGE"){let o=r.filter(i=>typeof i=="number");return o.length?o.reduce((i,a)=>i+a,0)/o.length:{error:"#DIV/0!"}}if(e==="MIN")return Math.min(...r.map(_));if(e==="MAX")return Math.max(...r.map(_));if(e==="ABS")return Math.abs(_(r[0]));if(e==="ROUND"){let i=10**_(r[1]);return Math.round(_(r[0])*i)/i}return e==="IF"?r[0]?r[1]??null:r[2]??null:e==="AND"?r.every(Boolean):e==="OR"?r.some(Boolean):e==="CONCAT"||e==="CONCATENATE"?r.map(o=>o==null?"":String(o)).join(""):{error:"#NAME?"}}function gr(e,t,n,r,o){let i=[],a=Math.min(n.r,r.r),s=Math.max(n.r,r.r),c=Math.min(n.c,r.c),u=Math.max(n.c,r.c);for(let l=a;l<=s;l+=1)for(let d=c;d<=u;d+=1)i.push(fn(e,t,yr(d,l),o));return i}function fn(e,t,n,r){let o=`${t}!${n}`,i=Be?.get(o);if(i!==void 0&&r>0)return i;let s=e.Sheets[t]?.[n];if(!s||typeof s!="object")return null;let c=s.f||(typeof s.v=="string"&&s.v.startsWith("=")?s.v.slice(1):"");if(c&&r<24){if(Ye.has(o))return typeof s.v=="number"||typeof s.v=="string"?s.v:{error:"#CYCLE!"};Ye.add(o);let u=hr(c,e,t,r);Ye.delete(o);let l=s.v;if(z(u)&&l!=null&&l!==""&&!(typeof l=="string"&&(l.startsWith("=")||l.startsWith("#")))){let m=typeof l=="number"||typeof l=="boolean"?l:String(l);return Be?.set(o,m),m}pr(s,u,c);let d=Array.isArray(u)?null:u;return Be?.set(o,d),d}return z(s.v)?s.v:typeof s.v=="string"&&s.v.startsWith("#")?{error:s.v}:typeof s.v=="number"||typeof s.v=="boolean"?s.v:s.v==null||s.v===""?null:String(s.v)}function hr(e,t,n,r){try{return new Qe(e.replace(/^=/,""),t,n,r).comparison()}catch{return{error:"#VALUE!"}}}function br(e,t,n){let r=t;for(;e[r]===" ";)r+=1;let o=n;if(e[r]==="'"){let a=e.indexOf("'",r+1);if(a<0||e[a+1]!=="!")return null;o=e.slice(r+1,a),r=a+2}else{let a=ke(e,r);if(a){let l=a.next;if(e[l]===":"){let d=ke(e,l+1);if(d)return{sheet:o,start:a.addr,end:d.addr,next:d.next}}return{sheet:o,start:a.addr,end:null,next:l}}let s=e.indexOf("!",r);if(s<0)return null;let c=e.slice(r,s).trim();if(!c||/[+\-*/&(),<>=]/.test(c))return null;let u=ke(e,s+1);if(!u)return null;if(o=c,r=u.next,e[r]===":"){let l=ke(e,r+1);return l?{sheet:o,start:u.addr,end:l.addr,next:l.next}:null}return{sheet:o,start:u.addr,end:null,next:r}}let i=ke(e,r);if(!i)return null;if(r=i.next,e[r]===":"){let a=ke(e,r+1);return a?{sheet:o,start:i.addr,end:a.addr,next:a.next}:null}return{sheet:o,start:i.addr,end:null,next:r}}function ke(e,t){let n=e.slice(t).match(/^\$?([A-Za-z]{1,3})\$?(\d+)/);return n?{addr:{c:wr(n[1]),r:Number(n[2])-1},next:t+n[0].length}:null}function wr(e){let t=0;for(let n of e.toUpperCase())t=t*26+(n.charCodeAt(0)-64);return t-1}function yr(e,t){let n=e+1,r="";for(;n>0;){let o=(n-1)%26;r=String.fromCharCode(65+o)+r,n=Math.floor((n-1)/26)}return`${r}${t+1}`}function vr(e,t,n){if(typeof e=="number"&&typeof t=="number")return n==="="?e===t:n==="<>"?e!==t:n==="<"?e<t:n===">"?e>t:n==="<="?e<=t:e>=t;let r=String(e??""),o=String(t??"");return n==="="?r===o:n==="<>"?r!==o:n==="<"?r<o:n===">"?r>o:n==="<="?r<=o:r>=o}function _(e){let t=re(e);return typeof t=="number"?t:typeof t=="boolean"?t?1:0:typeof t=="string"&&t.trim()!==""&&Number.isFinite(Number(t))?Number(t):0}function Ke(e){return z(e)?e:Array.isArray(e)?re(e[0]):e}function re(e){return Array.isArray(e)?re(e[0]):z(e)?e.error:e??null}function xr(e){let t=re(e);return t==null?"":String(t)}function z(e){return!!(e&&typeof e=="object"&&"error"in e)}async function Et(e,t,n){if(!t)return;let r=new Uint8Array(t.slice(0,2));if(r[0]!==80||r[1]!==75)return;let o=await Se(e,t),i=await Tr(o);for(let[a,s]of i){let c=await Ne(o,hn(s));if(!c)continue;let u=he(c);for(let l of[...u.getElementsByTagName("Relationship")]){if(!(l.getAttribute("Type")||"").endsWith("/pivotTable"))continue;let m=l.getAttribute("Target")||"",g=bn(s,m);g&&Cr(n,a,he(await Ne(o,g)),await Sr(o,g))}}}function Cr(e,t,n,r){let o=[...n.getElementsByTagName("*")].find(f=>f.localName==="location"),i=o?.getAttribute("ref")||"",a=gn(i.split(":")[0]||"");if(!a||!r.fields.length)return;let s=mn(n,"rowFields").map(f=>r.fields[f]).filter(Boolean),c=[...n.getElementsByTagName("*")].filter(f=>f.localName==="dataField").map(f=>({name:f.getAttribute("name")||"\u503C",source:r.fields[Number(f.getAttribute("fld"))]||"",agg:Ar(f.getAttribute("subtotal"))})).filter(f=>f.source),u=mn(n,"colFields").filter(f=>f>=0);if(!s.length||!c.length||u.length)return;let l=e.Sheets[r.sourceSheet];if(!l)return;let d=kr(l,[...s,...c.map(f=>f.source)]);if(!d)return;let m=new Map;for(let f=d.headerRow+1;f<d.headerRow+500;f+=1){let y=s.map(E=>Tt(l,d.columns[E],f));if(y.every(E=>!E))break;let N=y.join(""),k=c.map(E=>Pr(Tt(l,d.columns[E.source],f))),x=m.get(N)||[];x.push(k),m.set(N,x)}if(!m.size)return;let g=e.Sheets[t]||(e.Sheets[t]={}),w=Math.max(1,Number(o?.getAttribute("firstDataRow"))||1),h=a.r+w-1;et(g,a.c,h,s.join(" / "),!1),c.forEach((f,y)=>et(g,a.c+1+y,h,f.name,!1));let b=a.r+w;for(let[f,y]of m)et(g,a.c,b,f.split("").join(" / "),!1),c.forEach((N,k)=>et(g,a.c+1+k,b,Nr(y.map(x=>x[k]),N.agg),!0)),b+=1;Mr(g,b,a.c+c.length)}async function Sr(e,t){let r=[...he(await Ne(e,hn(t))).getElementsByTagName("Relationship")].find(c=>(c.getAttribute("Type")||"").endsWith("/pivotCacheDefinition")),o=bn(t,r?.getAttribute("Target")||""),i=he(o?await Ne(e,o):""),a=[...i.getElementsByTagName("*")].find(c=>c.localName==="worksheetSource");return{fields:[...i.getElementsByTagName("*")].filter(c=>c.localName==="cacheField").map(c=>c.getAttribute("name")||""),sourceSheet:a?.getAttribute("sheet")||""}}function mn(e,t){let n=[...e.getElementsByTagName("*")].find(r=>r.localName===t);return n?[...n.children].filter(r=>r.localName==="field").map(r=>Number(r.getAttribute("x"))):[]}function kr(e,t){let n=new Set(t);for(let r=0;r<30;r+=1){let o={};for(let i=0;i<40;i+=1){let a=Tt(e,i,r);n.has(a)&&o[a]==null&&(o[a]=i)}if(t.every(i=>o[i]!=null))return{headerRow:r,columns:o}}return null}function Nr(e,t){let n=e.filter(o=>Number.isFinite(o));if(t==="count")return e.filter(o=>Number.isFinite(o)).length;if(!n.length)return 0;let r=n.reduce((o,i)=>o+i,0);return t==="average"?r/n.length:r}function Ar(e){return e==="count"?"count":e==="average"?"average":"sum"}function et(e,t,n,r,o){let i=o&&typeof r=="number"?{t:"n",v:r,w:r.toLocaleString("zh-CN",{maximumFractionDigits:2})}:{t:"str",v:String(r),w:String(r)};e[Rt(t,n)]=i}function Tt(e,t,n){let r=e[Rt(t,n)];return!r||typeof r!="object"?"":typeof r.v=="number"?String(r.v):String(r.w??r.v??"").trim()}function Pr(e){let t=Number(e.replace(/,/g,""));return Number.isFinite(t)?t:Number.NaN}function Mr(e,t,n){let r=String(e["!ref"]||"A1").split(":"),o=gn(r[1]||r[0])||{c:0,r:0},i=Math.max(o.c,n),a=Math.max(o.r,t);e["!ref"]=`A1:${Rt(i,a)}`}function gn(e){let t=e.replace(/\$/g,"").match(/^([A-Z]+)(\d+)$/i);if(!t)return null;let n=0;for(let r of t[1].toUpperCase())n=n*26+(r.charCodeAt(0)-64);return{c:n-1,r:Number(t[2])-1}}function Rt(e,t){let n=e+1,r="";for(;n>0;){let o=(n-1)%26;r=String.fromCharCode(65+o)+r,n=Math.floor((n-1)/26)}return`${r}${t+1}`}async function Tr(e){let t=he(await Ne(e,"xl/workbook.xml")),n=he(await Ne(e,"xl/_rels/workbook.xml.rels")),r=new Map;for(let i of[...n.getElementsByTagName("Relationship")])r.set(i.getAttribute("Id")||"",i.getAttribute("Target")||"");let o=[];for(let i of[...t.getElementsByTagName("*")].filter(a=>a.localName==="sheet")){let a=i.getAttribute("name")||"",s=[...i.attributes].find(u=>u.localName==="id")?.value||"",c=r.get(s)||"";!a||!c||o.push([a,c.startsWith("/")?c.slice(1):`xl/${c.replace(/^\/+/,"")}`])}return o}function hn(e){let t=e.split("/"),n=t.pop()||"";return`${t.join("/")}/_rels/${n}.rels`}function bn(e,t){if(!t)return"";if(t.startsWith("/"))return t.replace(/^\/+/,"");let n=e.split("/").slice(0,-1);for(let r of t.replace(/\\/g,"/").split("/"))!r||r==="."||(r===".."?n.pop():n.push(r));return n.join("/")}async function Ne(e,t){let n=e.file(t);return!n||!("async"in n)?"":String(await n.async("string"))}function he(e){return new DOMParser().parseFromString(e||"<root/>","application/xml")}async function Bt(e,t,n){let r={},o=new Uint8Array(t.slice(0,2));if(o[0]!==80||o[1]!==75)return r;let i=await Se(e,t),a={},s=await Br(i);for(let[c,u]of s){let l=await Er(i,n,c,u);(l.charts.length||l.images.length)&&(a[c]=l)}return a}async function Er(e,t,n,r){let o=await be(e,r);if(!o)return{charts:[],images:[]};let a=[...we(o).getElementsByTagName("*")].find(w=>w.localName==="drawing"),s=rt(a,"id");if(!s)return{charts:[],images:[]};let c=Dt(r,await Vr(e,xn(r),s)||"");if(!c)return{charts:[],images:[]};let u=await be(e,c);if(!u)return{charts:[],images:[]};let l=we(u),d=await Fr(e,xn(c)),m=[],g=[];for(let w of[...l.getElementsByTagName("*")].filter(h=>h.localName==="twoCellAnchor"||h.localName==="oneCellAnchor")){let h=Rr(w),b=[...w.getElementsByTagName("*")].find(x=>x.localName==="chart"),f=rt(b,"id");if(f&&d[f]){let x=Dt(c,d[f]),E=x?await be(e,x):"";E&&m.push({...Dr(we(E),t,n),...h});continue}let y=[...w.getElementsByTagName("*")].find(x=>x.localName==="blip"),N=rt(y,"embed");if(!N||!d[N])continue;let k=await $r(e,Dt(c,d[N]));k&&g.push({...h,url:k})}return{charts:m,images:g}}function Rr(e){let t=nt(e,"from"),n=nt(e,"to"),r=Ae(tt(t,"row")),o=Ae(tt(t,"col"));if(n)return{fromRow:r,fromCol:o,toRow:Ae(tt(n,"row"),r+6),toCol:Ae(tt(n,"col"),o+4)};let i=nt(e,"ext");return{fromRow:r,fromCol:o,toRow:r+Math.max(2,Math.round(Ae(i?.getAttribute("cy"))/18e4)),toCol:o+Math.max(2,Math.round(Ae(i?.getAttribute("cx"))/64e4))}}function Dr(e,t,n){let r=vn(e,"t")||"\u56FE\u8868",a=([...[...e.getElementsByTagName("*")].find(m=>m.localName==="barChart"||m.localName==="bar3DChart")?.getElementsByTagName("*")||[]].find(m=>m.localName==="barDir")?.getAttribute("val")||"bar")!=="col",s=[...e.getElementsByTagName("*")].filter(m=>m.localName==="ser").map(m=>{let g=vn(m,"v")||"\u7CFB\u5217",w=[...m.getElementsByTagName("*")].find(y=>y.localName==="val"),h=yn(w),b=wn(w),f=h?Ur(Mt(t,n,h)):b;return{name:g,values:f.length?f:b}}),c=[...e.getElementsByTagName("*")].find(m=>m.localName==="ser"),u=c?[...c.getElementsByTagName("*")].find(m=>m.localName==="cat"):null,l=yn(u),d=(l?Mt(t,n,l).map(m=>m==null?"":String(m)):wn(u).map(String)).filter(Boolean);return{title:r,horizontal:a,categories:d,series:s}}async function Br(e){let t=we(await be(e,"xl/workbook.xml")),n=we(await be(e,"xl/_rels/workbook.xml.rels")),r=new Map;for(let i of[...n.getElementsByTagName("Relationship")])r.set(i.getAttribute("Id")||"",i.getAttribute("Target")||"");let o=[];for(let i of[...t.getElementsByTagName("*")].filter(a=>a.localName==="sheet")){let a=i.getAttribute("name")||"",s=r.get(rt(i,"id"))||"";!a||!s||o.push([a,s.startsWith("/")?s.slice(1):`xl/${s.replace(/^\/+/,"")}`])}return o}async function Fr(e,t){let n=await be(e,t),r={};if(!n)return r;for(let o of[...we(n).getElementsByTagName("Relationship")]){let i=o.getAttribute("Id")||"",a=o.getAttribute("Target")||"";i&&a&&(r[i]=a)}return r}async function $r(e,t){if(!t)return"";let n=e.file(t);if(!n)return"";let r=await n.async("blob"),o=Ir(t);return URL.createObjectURL(o?new Blob([await r.arrayBuffer()],{type:o}):r)}function Ir(e){let t=e.split(".").pop()?.toLowerCase()||"";return t==="png"?"image/png":t==="jpg"||t==="jpeg"?"image/jpeg":t==="gif"?"image/gif":t==="webp"?"image/webp":t==="bmp"?"image/bmp":t==="svg"?"image/svg+xml":""}async function Vr(e,t,n){let r=await be(e,t);return r&&[...we(r).getElementsByTagName("Relationship")].find(i=>i.getAttribute("Id")===n)?.getAttribute("Target")||""}function wn(e){return e?[...e.getElementsByTagName("*")].filter(t=>t.localName==="pt").map(t=>{let n=[...t.getElementsByTagName("*")].find(o=>o.localName==="v")?.textContent||"",r=Number(n);return Number.isFinite(r)&&n.trim()!==""?r:n}):[]}function Ur(e){return e.map(t=>typeof t=="number"?t:Number(t)).filter(t=>Number.isFinite(t))}function yn(e){return(e?[...e.getElementsByTagName("*")].find(n=>n.localName==="f"):null)?.textContent?.trim()||""}function vn(e,t){return[...e.getElementsByTagName("*")].find(n=>n.localName===t)?.textContent?.trim()||""}function nt(e,t){return e?[...e.children].find(n=>n.localName===t)??null:null}function tt(e,t){return nt(e,t)?.textContent||""}function rt(e,t){return e&&[...e.attributes].find(n=>n.localName===t)?.value||""}function Ae(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function xn(e){let t=e.split("/"),n=t.pop()||"";return`${t.join("/")}/_rels/${n}.rels`}function Dt(e,t){if(!t)return"";if(t.startsWith("/"))return t.replace(/^\/+/,"");let n=e.split("/").slice(0,-1);for(let r of t.replace(/\\/g,"/").split("/"))!r||r==="."||(r===".."?n.pop():n.push(r));return n.join("/")}async function be(e,t){let n=e.file(t);return n?String(await n.async("string")):""}function we(e){return new DOMParser().parseFromString(e||"<root/>","application/xml")}var Ft="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";function Sn(e){let t=new Uint8Array(e.slice(0,2));return t[0]===80&&t[1]===75}async function kn(e,t,n,r){let i=await(await ie()).loadAsync(e),a=await Wr(i,t),s=String(await i.file(a)?.async("string"));if(!s)throw new Error("\u627E\u4E0D\u5230\u8981\u5199\u56DE\u7684\u5DE5\u4F5C\u8868");i.file(a,jr(s,n,r));let c=await i.generateAsync({type:"uint8array"});return c.buffer.slice(c.byteOffset,c.byteOffset+c.byteLength)}async function Wr(e,t){let n=String(await e.file("xl/workbook.xml")?.async("string")),r=String(await e.file("xl/_rels/workbook.xml.rels")?.async("string")),o=new DOMParser().parseFromString(n,"application/xml"),i=new DOMParser().parseFromString(r,"application/xml"),a=[...o.getElementsByTagName("*")].find(u=>u.localName==="sheet"&&u.getAttribute("name")===t),s=a&&[...a.attributes].find(u=>u.localName==="id")?.value||"",c=[...i.getElementsByTagName("Relationship")].find(u=>u.getAttribute("Id")===s)?.getAttribute("Target")||"";if(!c)throw new Error(`\u627E\u4E0D\u5230\u5DE5\u4F5C\u8868 ${t}`);return c.startsWith("/")?c.slice(1):`xl/${c.replace(/^\/+/,"")}`}function jr(e,t,n){let r=Lr(t,n),o=new RegExp(`<c\\b[^>]*\\sr="${t}"[^>]*(?:/>|>[\\s\\S]*?</c>)`);if(o.test(e))return e.replace(o,r);let i=t.match(/\d+$/)?.[0]||"1",a=new RegExp(`<row\\b[^>]*\\sr="${i}"[^>]*>`);if(a.test(e))return e.replace(a,c=>`${c}${r}`);let s=`<row r="${i}">${r}</row>`;return e.includes("</sheetData>")?e.replace("</sheetData>",`${s}</sheetData>`):e.includes("<sheetData/>")?e.replace("<sheetData/>",`<sheetData>${s}</sheetData>`):e.replace("</worksheet>",`<sheetData>${s}</sheetData></worksheet>`)}function Lr(e,t){return t.startsWith("=")?`<c r="${e}"><f>${Cn(t.slice(1))}</f></c>`:t!==""&&Number.isFinite(Number(t))?`<c r="${e}"><v>${Number(t)}</v></c>`:`<c r="${e}" t="inlineStr"><is><t>${Cn(t)}</t></is></c>`}function Cn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ot=12,it=8,Nn=104,An=26;function Rn({ctx:e}){let t=Q(e.node,qe),n=String(e.node.metadata?.sheet||""),[r,o]=ue(e.node.id),[i,a]=M(null),[s,c]=M(!0),[u,l]=M([]),[d,m]=M(ot),[g,w]=M(it),[h,b]=M({}),[f,y]=M([]),[N,k]=M([]),[x,E]=M([]),[A,$]=M(null),[G,q]=M(""),ye=F(null),se=F(""),R=F(0),Z=F(t),W=F(null),B=F(!1);L(()=>{if(Z.current=t,B.current){B.current=!1;return}let v=!0;return c(!0),a(null),Promise.all([ne(t),Ce()]).then(async([C])=>{let T=await _t(t,C);if(!v)return;W.current=C,Pt(T),await Et(t,C,T).catch(()=>{}),ye.current=T;let D=T.SheetNames.length?T.SheetNames:["Sheet1"],j=D.includes(n)?n:D[0];se.current=j,fe(T.Sheets[j]);let K=await Bt(t,C,T).catch(()=>({}));v&&(k(K[j]?.charts||[]),E(K[j]?.images||[]),l(D),ae(e,{sheet:j,pageCount:D.length}),c(!1))}).catch(C=>{v&&(a(C instanceof Error?C.message:String(C)),c(!1))}),()=>{v=!1}},[t,n]);let H=xe(()=>{let v=new Set;for(let C of f)for(let T=C.r;T<C.r+C.rowspan;T+=1)for(let D=C.c;D<C.c+C.colspan;D+=1)T===C.r&&D===C.c||v.add(Fe(T,D));return v},[f]),le=xe(()=>{let v=new Map;for(let C of f)v.set(Fe(C.r,C.c),C);return v},[f]),O=mt((v,C,T)=>{let D=ye.current,j=se.current;if(!D||!j)return;let K=D.Sheets[j]||(D.Sheets[j]={}),oe=Ce();Or(oe,v,C).then(async Y=>{let V=await oe,I=T;I?I.startsWith("=")?K[Y]={t:"str",f:I.slice(1),v:I,w:I}:I!==""&&Number.isFinite(Number(I))?K[Y]={t:"n",v:Number(I),w:I}:K[Y]={t:"s",v:I,w:I}:delete K[Y];let We=zr(K,V,Math.max(v+1,d),Math.max(C+1,g));K["!ref"]=V.utils.encode_range(We),Pt(D);let zt=Z.current,pt=W.current;Et(zt,pt,D).catch(()=>{}).then(()=>fe(D.Sheets[j])),pt&&Bt(zt,pt,D).then(Ee=>{k(Ee[j]?.charts||[]),E(Ee[j]?.images||[])}).catch(()=>{}),window.clearTimeout(R.current),R.current=window.setTimeout(()=>{B.current=!0,_r(e,D,Z.current,W.current,j,Y,I).then(Ee=>{Ee&&(W.current=Ee)})},400)})},[e,g,d]);function fe(v){if(!v){m(ot),w(it),b({}),y([]);return}Ce().then(C=>{let T=v["!ref"]?C.utils.decode_range(String(v["!ref"])):{s:{r:0,c:0},e:{r:ot-1,c:it-1}},D=e.node.metadata?.editing?8:2,j=Math.min(80,Math.max(ot,T.e.r+D)),K=Math.min(24,Math.max(it,T.e.c+D)),oe={};for(let V=T.s.r;V<=T.e.r;V+=1)for(let I=T.s.c;I<=T.e.c;I+=1){let We=v[C.utils.encode_cell({r:V,c:I})];We&&(oe[Fe(V,I)]=Zr(We))}let ve=(v["!merges"]||[]).map(V=>({r:V.s.r,c:V.s.c,rowspan:V.e.r-V.s.r+1,colspan:V.e.c-V.s.c+1})),Y=Object.keys(oe).slice(0,80).map(V=>oe[V].text).join(`
`).slice(0,8e3);m(j),w(K),b(oe),y(ve),ae(e,{sheetText:Y})})}let ee=!!e.node.metadata?.editing,Te=!!e.node.metadata?.interactive||ee,Ue={rows:d,cols:g,grid:h,covered:H,mergeAt:le,charts:N,images:[...x,...Xr(e.node.metadata?.sheetPictures)],active:A,draft:G,editing:ee,interactive:Te,theme:e.theme,onSelect:(v,C,T)=>{$({r:v,c:C}),q(T)},onDraft:q,onCommit:(v,C,T)=>{O(v,C,T)}};return i?p("div",{className:"cnv-doc-status",children:i}):s?p("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00\u8868\u683C\u2026"}):P(te,{children:[P("div",{className:"cnv-doc-sheet","data-canvas-no-zoom":!0,onWheel:Te?$e:void 0,style:{color:e.theme.node.text},children:[P("div",{className:"cnv-doc-formula",children:[p("span",{children:A?En(A.c,A.r):""}),p("input",{value:A?ee?G:Mn(h,A):"",readOnly:!ee,placeholder:ee?"\u8F93\u5165\u5185\u5BB9\u6216\u516C\u5F0F\uFF0C\u56DE\u8F66\u786E\u8BA4":"\u7528\u5DE5\u5177\u6761\u7684\u300C\u4EA4\u4E92\u300D\u9009\u4E2D\u5355\u5143\u683C\uFF0C\u7528\u300C\u7F16\u8F91\u300D\u4FEE\u6539",onMouseDown:$e,onChange:v=>ee&&q(v.target.value),onBlur:()=>ee&&A&&O(A.r,A.c,G),onKeyDown:v=>{if(!(!ee||!A)&&v.key==="Enter"){v.preventDefault(),O(A.r,A.c,G);let C={r:Math.min(d-1,A.r+1),c:A.c};$(C),q(Mn(h,C))}}})]}),p(Pn,{...Ue}),u.length>1?p("div",{className:"cnv-doc-sheet-tabs",children:u.map(v=>p("button",{type:"button",onMouseDown:$e,onClick:()=>e.updateMetadata({sheet:v}),style:{background:v===(n||u[0])?e.theme.toolbar.activeBg:"transparent",color:e.theme.node.text},children:v},v))}):null]}),r?p(de,{title:e.node.title||"\u8868\u683C",mode:r,onClose:()=>o(null),actions:p("span",{className:"cnv-doc-fs-note",children:"\u53EF\u76F4\u63A5\u6539\u5355\u5143\u683C\uFF0C\u4F1A\u5199\u56DE\u8FD9\u4E2A\u8282\u70B9"}),children:P("div",{className:"cnv-doc-sheet is-fs",style:{color:e.theme.node.text,height:"100%"},children:[P("div",{className:"cnv-doc-formula",children:[p("span",{children:A?En(A.c,A.r):""}),p("input",{value:A?G:"",onChange:v=>q(v.target.value),onBlur:()=>A&&O(A.r,A.c,G)})]}),p(Pn,{...Ue,editing:!0,interactive:!0})]})}):null]})}function Pn({rows:e,cols:t,grid:n,covered:r,mergeAt:o,charts:i,images:a,active:s,draft:c,editing:u,interactive:l,theme:d,onSelect:m,onDraft:g,onCommit:w}){return P("div",{className:"cnv-doc-sheet-scroll",style:{pointerEvents:l?"auto":"none"},onMouseDown:l?$e:void 0,onWheel:l?$e:void 0,children:[i.map((h,b)=>p(Jr,{chart:h},`${h.title}-${b}`)),a.map((h,b)=>p("img",{className:"cnv-doc-sheet-image",src:h.url,alt:"",style:Dn(h)},`${h.url}-${b}`)),P("table",{children:[p("thead",{children:P("tr",{children:[p("th",{className:"gutter",style:{background:d.toolbar.panel,color:d.node.placeholder}}),Array.from({length:t},(h,b)=>p("th",{style:{background:d.toolbar.panel},children:Bn(b)},b))]})}),p("tbody",{children:Array.from({length:e},(h,b)=>P("tr",{children:[p("td",{className:"gutter",style:{background:`${d.toolbar.panel}cc`,color:d.node.placeholder},children:b+1}),Array.from({length:t},(f,y)=>{let N=Fe(b,y);if(r.has(N))return null;let k=o.get(N),x=n[N],E=s?.r===b&&s?.c===y,A=E?c:x?.text||"";return p("td",{rowSpan:k?.rowspan,colSpan:k?.colspan,className:E?"is-active":void 0,style:{background:x?.fill||void 0,color:x?.color||void 0,fontWeight:x?.bold?700:void 0},onMouseDown:$=>{l&&($.stopPropagation(),m(b,y,x?.formula?`=${x.formula}`:x?.text||""))},children:E&&u?p("input",{autoFocus:!0,value:A,onChange:$=>g($.target.value),onBlur:()=>w(b,y,c),onKeyDown:$=>{$.key==="Enter"&&($.preventDefault(),w(b,y,c)),$.key==="Escape"&&($.preventDefault(),w(b,y,x?.text||""))}}):A},y)})]},b))})]})]})}function Mn(e,t){let n=e[Fe(t.r,t.c)];return n?.formula?`=${n.formula}`:n?.text||""}function Zr(e){let t=e.w!=null&&String(e.w)!==""?String(e.w):e.v!=null?String(e.v):e.f?`=${e.f}`:"",n=Tn(e.s?.fgColor?.rgb||e.s?.bgColor?.rgb),r=Tn(e.s?.font?.color?.rgb);return{text:t,formula:e.f,bold:!!e.s?.font?.bold,fill:n,color:r}}function Tn(e){if(!e)return;let t=e.replace(/^#/,"");if(t.length===6||t.length===8)return`#${t.slice(-6)}`}function zr(e,t,n,r){let o=e["!ref"]?t.utils.decode_range(String(e["!ref"])):{s:{r:0,c:0},e:{r:0,c:0}};return{s:{r:0,c:0},e:{r:Math.max(o.e.r,n-1),c:Math.max(o.e.c,r-1)}}}async function Or(e,t,n){return(await e).utils.encode_cell({r:t,c:n})}function Dn(e){return{left:42+e.fromCol*Nn,top:28+e.fromRow*An,width:Math.max(80,(e.toCol-e.fromCol)*Nn),height:Math.max(60,(e.toRow-e.fromRow)*An)}}function Jr({chart:e}){let t=Dn(e),r=e.series[0]?.values||[],o=Math.max(1,...r),i=e.categories.length?e.categories:r.map((a,s)=>String(s+1));return P("div",{className:"cnv-doc-chart",style:t,children:[p("div",{className:"cnv-doc-chart-title",children:e.title}),p("div",{className:"cnv-doc-chart-bars",children:i.map((a,s)=>P("div",{className:"cnv-doc-chart-row",children:[p("span",{children:a}),p("i",{style:{width:`${Math.max(2,(r[s]||0)/o*100)}%`}}),p("b",{children:Hr(r[s])})]},`${a}-${s}`))})]})}function Hr(e){return e==null||!Number.isFinite(e)?"":e.toLocaleString("zh-CN",{maximumFractionDigits:0})}async function _r(e,t,n,r,o,i,a){if(r&&Sn(r)){let l=await kn(r,o,i,a),d=me(l,Ft);return St(n),kt(d,t),e.updateMetadata({content:d,...pe(e.node)}),l}let c=(await Ce()).write(t,{bookType:"xlsx",type:"array"}),u=me(c,Ft);return St(n),kt(u,t),e.updateMetadata({content:u,...pe(e.node)}),null}function Fe(e,t){return`${e}:${t}`}function Bn(e){let t=e+1,n="";for(;t>0;){let r=(t-1)%26;n=String.fromCharCode(65+r)+n,t=Math.floor((t-1)/26)}return n}function En(e,t){return`${Bn(e)}${t+1}`}function Xr(e){return Array.isArray(e)?e.flatMap(t=>{if(!t||typeof t!="object")return[];let n=t;return n.url?[{fromRow:Number(n.fromRow)||0,fromCol:Number(n.fromCol)||0,toRow:Number(n.toRow)||6,toCol:Number(n.toCol)||4,url:n.url}]:[]}):[]}function $e(e){e.stopPropagation()}var Gr="application/vnd.openxmlformats-officedocument.presentationml.presentation";async function Fn(e,t,n,r){let i=await(await ie()).loadAsync(e),a=i.file(t),s=a&&"async"in a?String(await a.async("string")):"";if(!s)throw new Error("\u627E\u4E0D\u5230\u8981\u4FEE\u6539\u7684\u5E7B\u706F\u7247");let c=qr(s,n,r);i.file(t,c);let u=await i.generateAsync({type:"uint8array"});return u.buffer.slice(u.byteOffset,u.byteOffset+u.byteLength)}function $t(e){return me(e,Gr)}function qr(e,t,n){let r=e.search(new RegExp(`<(?:[\\w]+:)?cNvPr\\b[^>]*\\bid="${t}"[^>]*/?>`));if(r<0)return e;let o=Math.max(e.lastIndexOf("<p:sp>",r),e.lastIndexOf("<p:sp ",r)),i=e.indexOf("</p:sp>",r);if(o<0||i<0)return e;let a=i+7,s=e.slice(o,a),c=!1,u=It(n),l=s.replace(/<a:t(\b[^>]*)>([\s\S]*?)<\/a:t>/g,(d,m)=>c?`<a:t${m}></a:t>`:(c=!0,`<a:t${m}>${u}</a:t>`));return c?e.slice(0,o)+l+e.slice(a):e}function It(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var $n=12192e3,In=6858e3;async function Vn(){let e=await _e();return e.file("[Content_Types].xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slides/slide1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>
</Types>`),e.file("_rels/.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`),e.file("ppt/presentation.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldIdLst><p:sldId id="256" r:id="rId2"/></p:sldIdLst>
  <p:sldSz cx="${$n}" cy="${In}"/>
</p:presentation>`),e.file("ppt/_rels/presentation.xml.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide1.xml"/>
</Relationships>`),e.file("ppt/slides/slide1.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld><p:spTree>
    <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
    <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
  </p:spTree></p:cSld>
</p:sld>`),e.file("ppt/slides/_rels/slide1.xml.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>`),Wn(e)}async function Un(e,t,n){let o=await(await ie()).loadAsync(e),i=o.file(t),a=i&&"async"in i?String(await i.async("string")):"";if(!a.includes("</p:spTree>"))throw new Error("\u8FD9\u9875\u5E7B\u706F\u7247\u8FD8\u4E0D\u80FD\u63D2\u5165\u56FE\u7247\u6216\u89C6\u9891");let s=await eo(o),c=ro(t),u=o.file(c),l=u?String(await u.async("string")):"";l.includes("</Relationships>")||(l=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>`);let d=String(await o.file("[Content_Types].xml")?.async("string")||""),m=to(a)+1,g=no(l)+1,w=[];return n.forEach((h,b)=>{let f=oo(h.mime,h.name),y=io(h.mime,h.name,f),N=`ppt/media/insert-${Date.now()}-${b}.${y}`;o.file(N,h.bytes);let k=`rId${g++}`,x=f?"http://schemas.openxmlformats.org/officeDocument/2006/relationships/video":"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";l=l.replace("</Relationships>",`<Relationship Id="${k}" Type="${x}" Target="../media/${N.split("/").pop()}"/>
</Relationships>`),d=ao(d,y,h.mime||(f?"video/mp4":"image/png"));let E=Qr(s.width,s.height,b,n.length);w.push(f?Yr(m++,h.name,k,E):Kr(m++,h.name,k,E))}),o.file(c,l),o.file("[Content_Types].xml",d),o.file(t,a.replace("</p:spTree>",`${w.join("")}</p:spTree>`)),Wn(o)}function Kr(e,t,n,r){return`<p:pic><p:nvPicPr><p:cNvPr id="${e}" name="${It(t)}"/><p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr/></p:nvPicPr><p:blipFill><a:blip r:embed="${n}"/><a:stretch><a:fillRect/></a:stretch></p:blipFill><p:spPr><a:xfrm><a:off x="${r.x}" y="${r.y}"/><a:ext cx="${r.cx}" cy="${r.cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr></p:pic>`}function Yr(e,t,n,r){return`<p:pic><p:nvPicPr><p:cNvPr id="${e}" name="${It(t)}"/><p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr><a:videoFile r:link="${n}"/></p:nvPr></p:nvPicPr><p:spPr><a:xfrm><a:off x="${r.x}" y="${r.y}"/><a:ext cx="${r.cx}" cy="${r.cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="111111"/></a:solidFill></p:spPr></p:pic>`}function Qr(e,t,n,r){let o=Math.round(e*.04),i=Math.round(e*(r>1?.34:.46)),a=Math.round(t*.42),s=n%2,c=Math.floor(n/2);return{x:e-o-i-s*(i+o),y:t-o-a-c*(a+o),cx:i,cy:a}}async function eo(e){let n=String(await e.file("ppt/presentation.xml")?.async("string")||"").match(/<p:sldSz\b[^>]*\bcx="(\d+)"[^>]*\bcy="(\d+)"/);return{width:Number(n?.[1])||$n,height:Number(n?.[2])||In}}function to(e){let t=1;for(let n of e.matchAll(/\bid="(\d+)"/g))t=Math.max(t,Number(n[1])||0);return t}function no(e){let t=1;for(let n of e.matchAll(/\bId="rId(\d+)"/g))t=Math.max(t,Number(n[1])||0);return t}function ro(e){let t=e.split("/"),n=t.pop()||"";return`${t.join("/")}/_rels/${n}.rels`}function oo(e,t){return e.startsWith("video/")||/\.(mp4|webm|mov|m4v)$/i.test(t)}function io(e,t,n){let r=t.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","webp","mp4","webm","mov","m4v"].includes(r)?r==="jpeg"?"jpg":r:e.includes("png")?"png":e.includes("jpeg")?"jpg":e.includes("gif")?"gif":e.includes("webp")?"webp":e.includes("webm")?"webm":e.includes("quicktime")?"mov":n?"mp4":"png"}function ao(e,t,n){return new RegExp(`Extension="${t}"`,"i").test(e)?e:e.replace("</Types>",`<Default Extension="${t}" ContentType="${n}"/>
</Types>`)}async function Wn(e){let t=await e.generateAsync({type:"uint8array"});if(!(t instanceof Uint8Array))throw new Error("\u65E0\u6CD5\u4FDD\u5B58\u5E7B\u706F\u7247");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}var Wt=new Map;function On({ctx:e}){let t=Q(e.node),n=ge(e.node),r=F(null),[o,i]=ue(e.node.id),[a,s]=M(null),[c,u]=M(!!t),[l,d]=M(null),[m,g]=M(0),w=F(null),h=F(!1),b=!!e.node.metadata?.editing;L(()=>{if(h.current){h.current=!1;return}if(!t){u(!1),d(null);return}let R=!0;return u(!0),s(null),Promise.all([ne(t),co(t)]).then(([Z,W])=>{if(!R)return;w.current=Z,d(W);let B=W.slides.map((H,le)=>{let O=H.boxes.map(fe=>fe.text).filter(Boolean).join(`
`);return O?`\u7B2C${le+1}\u9875
${O}`:""}).filter(Boolean).join(`

`).slice(0,8e3);ae(e,{pageCount:W.slides.length,page:J(n,W.slides.length),...B?{slideText:B}:{}}),u(!1)}).catch(Z=>{R&&(s(Z instanceof Error?Z.message:String(Z)),u(!1))}),()=>{R=!1}},[t]);let f=String(e.node.metadata?.mediaInsertToken||""),y=F("");L(()=>{if(!f||y.current===f||t&&!w.current)return;let R=vo(e.node.metadata?.mediaInserts);if(!R.length)return;y.current=f;let Z=l?.slides[Math.max(0,n-1)]?.path||"ppt/slides/slide1.xml",W=e;(async()=>{let B=w.current||await Vn(),H=await Un(B,Z,R);w.current=H,W.updateMetadata({content:$t(H),mediaInsertToken:"",mediaInserts:[],status:"success",errorDetails:void 0,...pe(W.node)})})().catch(B=>{y.current="",W.updateMetadata({status:"error",errorDetails:B instanceof Error?B.message:"\u63D2\u4E0D\u8FDB\u8FD9\u9875\u5E7B\u706F\u7247",mediaInsertToken:"",mediaInserts:[]})})},[f,t,c,l,n,e]);let N=l?.slides.length||Math.max(1,Number(e.node.metadata?.pageCount)||1),k=J(n,N),x=l?.slides[k-1],E=xe(()=>x?{width:x.width,height:x.height}:{width:16,height:9},[x]),A=x?.steps||0;L(()=>{g(0)},[k,o]);let $=R=>e.updateMetadata({page:J(R,N)}),G=(R,Z)=>{if(!R||!x)return;d(B=>B&&{slides:B.slides.map((H,le)=>le===k-1?{...H,boxes:H.boxes.map(O=>O.shapeId===R?{...O,text:Z}:O)}:H)});let W=w.current;W&&Fn(W,x.path,R,Z).then(B=>{w.current=B,Wt.delete(t),h.current=!0,e.updateMetadata({content:$t(B),...pe(e.node)})})},q=()=>{if(o==="play"&&m<A){g(R=>R+1);return}$(k+1)},ye=()=>{if(o==="play"&&m>0){g(R=>R-1);return}$(k-1)};if(!t)return P("div",{className:"cnv-doc-empty",style:{color:e.theme.node.placeholder},children:[p("div",{className:"icon",children:"\u25B8"}),p("div",{className:"label",children:"\u52A9\u624B\u751F\u6210\u5E7B\u706F\u7247\u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5 PowerPoint"})]});let se=String(e.node.metadata?.revision||"").trim();return P(te,{children:[P("div",{ref:r,className:`cnv-doc-slides${se?" has-revision":""}`,"data-canvas-no-zoom":!0,onWheel:jt,children:[p("div",{className:"cnv-doc-slide-fit",children:x?p(jn,{slide:x,frame:E,editing:b,onText:G}):null}),se?p("div",{className:"cnv-doc-revision",children:se}):null,a?p("div",{className:"cnv-doc-status",children:a}):null,!a&&c?p("div",{className:"cnv-doc-status",children:"\u6B63\u5728\u6253\u5F00\u5E7B\u706F\u7247\u2026"}):null]}),o?p(de,{title:e.node.title||"\u5E7B\u706F\u7247",mode:o,dark:!0,onClose:()=>i(null),onKey:R=>["ArrowRight","PageDown"," ","Enter"].includes(R.key)?(R.preventDefault(),q(),!0):["ArrowLeft","PageUp"].includes(R.key)?(R.preventDefault(),ye(),!0):!1,actions:P(te,{children:[p("button",{type:"button",onClick:()=>$(k-1),children:"\u4E0A\u4E00\u5F20"}),P("span",{children:[k," / ",N]}),p("button",{type:"button",onClick:()=>$(k+1),children:"\u4E0B\u4E00\u5F20"}),p("button",{type:"button",onClick:()=>e.updateMetadata({editing:!b,interactive:!0}),children:b?"\u5B8C\u6210":"\u7F16\u8F91"}),p("button",{type:"button",onClick:()=>i("play"),children:"\u64AD\u653E"})]}),children:p("div",{className:"cnv-doc-slides is-fs",onClick:()=>o==="play"&&q(),children:x?p(jn,{slide:x,frame:E,reveal:o==="play"?m:void 0,editing:b&&o!=="play",onText:G}):null})}):null]})}function jn({slide:e,frame:t,reveal:n,editing:r,onText:o}){let i=F(null),[a,s]=M({width:0,height:0}),c=n!=null,u=t.width/Math.max(1,t.height);return L(()=>{let l=i.current?.parentElement;if(!l)return;let d=()=>{let g=l.clientWidth,w=l.clientHeight;if(g<8||w<8)return;let h=g,b=h/u;b>w&&(b=w,h=b*u),s({width:h,height:b})};d();let m=new ResizeObserver(d);return m.observe(l),()=>m.disconnect()},[u]),p("div",{ref:i,className:`cnv-doc-slide${c?" is-playing":""}`,style:{width:a.width||"100%",height:a.height||"auto",aspectRatio:`${t.width} / ${t.height}`,background:e.background},children:e.boxes.map((l,d)=>p("div",{className:`cnv-doc-slide-box${c&&(l.animStep||0)>(n||0)?" is-hidden":""}${r&&l.text&&l.shapeId?" is-editing":""}`,style:{left:`${l.x*100}%`,top:`${l.y*100}%`,width:`${l.w*100}%`,height:`${l.h*100}%`,background:l.imageUrl?"transparent":l.fill,color:l.color||"#111",fontWeight:l.bold?700:400,textAlign:l.align||"left",fontSize:`${Math.max(1.2,(l.fontSize||.04)*100)}cqh`,lineHeight:1.15,borderRadius:l.radius&&l.radius>=.5?"50%":l.radius?`${l.radius*Math.min(l.w*u,l.h)*100}cqh`:0,whiteSpace:l.nowrap?"pre":"pre-wrap",padding:0},children:l.videoUrl?p("video",{src:l.videoUrl,poster:l.imageUrl||void 0,controls:!0,playsInline:!0,autoPlay:c&&(l.animStep||0)<=(n||0)}):l.imageUrl?p("img",{src:l.imageUrl,alt:""}):r&&l.shapeId&&l.text?p(so,{text:l.text,onCommit:m=>o?.(l.shapeId,m)}):l.text},d))})}function so({text:e,onCommit:t}){let n=F(null);return L(()=>{let r=n.current;!r||document.activeElement===r||(r.textContent=e)},[e]),p("div",{ref:n,contentEditable:!0,suppressContentEditableWarning:!0,onMouseDown:jt,onPointerDown:jt,onBlur:r=>{let o=r.currentTarget.innerText.replace(/\n$/,"");o!==e&&t(o)}})}async function Jn(e){let t=e?.querySelector(".cnv-doc-slide");if(!t)return"";let n=t.getBoundingClientRect(),r=Math.max(320,Math.round(n.width*2)),o=Math.max(180,Math.round(n.height*2)),i=document.createElement("canvas");i.width=r,i.height=o;let a=i.getContext("2d");if(!a)return"";let s=t;a.fillStyle=getComputedStyle(s).backgroundColor||"#fff",a.fillRect(0,0,r,o);let c=[...s.querySelectorAll(".cnv-doc-slide-box")];for(let u of c){let l=u.offsetLeft/s.clientWidth*r,d=u.offsetTop/s.clientHeight*o,m=u.offsetWidth/s.clientWidth*r,g=u.offsetHeight/s.clientHeight*o,w=u.querySelector("img");if(w&&w.naturalWidth){a.drawImage(w,l,d,m,g);continue}let h=u.style.background;h&&h!=="transparent"&&(a.fillStyle=h,a.fillRect(l,d,m,g));let b=u.textContent?.trim();if(!b)continue;a.fillStyle=u.style.color||"#111";let f=Math.max(12,parseFloat(u.style.fontSize)/100*o);a.font=`${u.style.fontWeight||400} ${f}px sans-serif`,a.textAlign=u.style.textAlign||"left",lo(a,b,l+8,d+f+4,m-16,f*1.25)}return i.toDataURL("image/jpeg",.88)}function lo(e,t,n,r,o,i){let a=t.split(`
`),s=r;for(let c of a){let u="";for(let l of c){let d=u+l;e.measureText(d).width>o&&u?(e.fillText(u,n,s),u=l,s+=i):u=d}u&&(e.fillText(u,n,s),s+=i)}}function co(e){let t=Wt.get(e);return t||(t=ne(e).then(n=>Se(e,n)).then(uo),Wt.set(e,t)),t}async function uo(e){let t=await Ie(e,"ppt/presentation.xml").catch(()=>null),n=t?await st(e,"ppt/_rels/presentation.xml.rels"):{},r=t?t.querySelector("sldSz")||S(t,"sldSz"):null,o=U(r?.getAttribute("cx"),12192e3),i=U(r?.getAttribute("cy"),6858e3),a=await ho(e),s=[];if(t)for(let c of Me(t,"sldId")){let u=n[Pe(c)]?.target;if(!u)continue;let l=X("ppt/presentation.xml",u);s.push(await Ln(e,l,o,i,a))}if(!s.length){let c=Object.keys(e.files).filter(u=>/^ppt\/slides\/slide\d+\.xml$/i.test(u)).sort((u,l)=>u.localeCompare(l,void 0,{numeric:!0}));for(let u of c)s.push(await Ln(e,u,o,i,a))}if(!s.length)throw new Error("\u8FD9\u4E2A\u5E7B\u706F\u7247\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u9884\u89C8\u7684\u9875\u9762");return{slides:s}}async function Ln(e,t,n,r,o){let i=await Ie(e,t),a=await st(e,Ut(t)),s=Zn(a,"/slideLayout"),c=s?await Ie(e,X(t,s)):null,u=s?await st(e,Ut(X(t,s))):{},l=Zn(u,"/slideMaster"),d=l&&s?await Ie(e,X(X(t,s),l)):null,m=l&&s?await st(e,Ut(X(X(t,s),l))):{},g=c?await po(e,c,u,n,r,o):{},w=await Vt(e,i,a,t)||at(S(i,"bgPr")||S(i,"solidFill"),o)||c&&(await Vt(e,c,u,X(t,s))||at(S(c,"bgPr")||S(c,"solidFill"),o))||d&&(await Vt(e,d,m,l?X(X(t,s||""),l):t)||at(S(d,"bgPr")||S(d,"solidFill"),o))||o.dk1||"#ffffff",h=[];(w.startsWith("blob:")||w.startsWith("data:"))&&h.push({x:0,y:0,w:1,h:1,imageUrl:w});let b=S(i,"spTree")||i.documentElement;await Hn(e,b,a,n,r,o,h,g,t,0,0,1,1);let f=fo(i,h);return{width:n,height:r,background:w.startsWith("#")?w:"#0f172a",boxes:h,steps:f,path:t}}async function po(e,t,n,r,o,i){let a={};for(let s of Me(t,"sp").concat(Me(t,"pic"))){let c=S(s,"ph"),u=S(s,"xfrm");if(!c||!u)continue;let l=S(u,"off"),d=S(u,"ext"),m=c.getAttribute("type")||"body",g=c.getAttribute("idx")||"0",w=Pe(S(s,"blip"),"embed");a[`${m}:${g}`]={x:U(l?.getAttribute("x"))/r,y:U(l?.getAttribute("y"))/o,w:U(d?.getAttribute("cx"))/r,h:U(d?.getAttribute("cy"))/o,fill:at(S(s,"spPr"),i),imageUrl:w&&n[w]?await lt(e,X("ppt/slideLayouts/slideLayout1.xml",n[w].target)):void 0},a[m]=a[`${m}:${g}`]}return a}async function Hn(e,t,n,r,o,i,a,s,c,u,l,d,m){for(let g of[...t.children]){let w=g.localName;if(w==="grpSp"){let v=S(g,"xfrm"),C=v?S(v,"off"):null,T=v?S(v,"ext"):null,D=v?S(v,"chOff"):null,j=v?S(v,"chExt"):null,K=u+U(C?.getAttribute("x"))*d,oe=l+U(C?.getAttribute("y"))*m,ve=U(T?.getAttribute("cx"),1)*d,Y=U(T?.getAttribute("cy"),1)*m,V=U(j?.getAttribute("cx"),ve)||1,I=U(j?.getAttribute("cy"),Y)||1;await Hn(e,g,n,r,o,i,a,s,c,K-U(D?.getAttribute("x"))*(ve/V),oe-U(D?.getAttribute("y"))*(Y/I),ve/V,Y/I);continue}if(w!=="sp"&&w!=="pic"&&w!=="cxnSp")continue;let h=S(g,"ph"),b=h?s[`${h.getAttribute("type")||"body"}:${h.getAttribute("idx")||"0"}`]||s[h.getAttribute("type")||""]:void 0,f=S(g,"xfrm"),y=f?S(f,"off"):null,N=f?S(f,"ext"):null,k=f?(u+U(y?.getAttribute("x"))*d)/r:b?.x??0,x=f?(l+U(y?.getAttribute("y"))*m)/o:b?.y??0,E=f?U(N?.getAttribute("cx"))*d/r:b?.w??0,A=f?U(N?.getAttribute("cy"))*m/o:b?.h??0;if(E<=0||A<=0)continue;let $=wo(S(g,"spPr"),i)||b?.fill,G=mo(g),q=S(g,"rPr")||S(g,"defRPr")||S(g,"endParaRPr"),ye=U(q?.getAttribute("sz"),G.length>40?1400:2200),se=q?.getAttribute("b")==="1"||q?.getAttribute("b")==="true",R=Lt(q,i)||(go($)<140?"#f8fafc":"#111827"),Z=S(g,"pPr")?.getAttribute("algn")||"l",W=Z==="ctr"?"center":Z==="r"?"right":"left",B=Pe(S(g,"blip"),"embed"),H=B&&n[B]?await lt(e,X(c,n[B].target)):b?.imageUrl||"",le=S(g,"videoFile"),O=Pe(le,"link")||Pe(le,"embed"),fe=O&&n[O]?await lt(e,X(c,n[O].target)):"",ee=S(g,"cNvPr")?.getAttribute("id")||"",Te=S(g,"prstGeom")?.getAttribute("prst")||"",Ue=S(g,"bodyPr");!G&&!H&&!fe&&!$||a.push({x:k,y:x,w:E,h:A,shapeId:ee,radius:Te==="roundRect"?.1667:Te==="ellipse"?.5:0,nowrap:Ue?.getAttribute("wrap")==="none",fill:H?void 0:$,color:R,fontSize:Math.max(.018,ye*127/o),bold:se,align:W,text:G,imageUrl:H,videoUrl:fe})}}function fo(e,t){let n=[...e.getElementsByTagName("*")].find(a=>a.localName==="cTn"&&a.getAttribute("nodeType")==="mainSeq"),r=n?[...n.children].find(a=>a.localName==="childTnLst"):null;if(!r)return 0;let o=new Map,i=0;for(let a of[...r.children].filter(s=>s.localName==="par")){let s=[...a.getElementsByTagName("*")].filter(u=>u.localName==="spTgt").map(u=>u.getAttribute("spid")||""),c=[...new Set(s.filter(u=>u&&!o.has(u)))];if(c.length){i+=1;for(let u of c)o.set(u,i)}}for(let a of t)a.shapeId&&o.has(a.shapeId)&&(a.animStep=o.get(a.shapeId));return i}function mo(e){let t=Me(e,"p");return t.length?t.map(n=>Me(n,"t").map(r=>r.textContent||"").join("")).filter(Boolean).join(`
`):Me(e,"t").map(n=>n.textContent||"").join("")}function go(e){if(!e||!e.startsWith("#")||e.length<7)return 255;let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return .2126*t+.7152*n+.0722*r}async function ho(e){let t=Object.keys(e.files).filter(i=>/ppt\/theme\/theme\d+\.xml$/i.test(i)),n={};if(!t.length)return n;let r=await Ie(e,t[0]),o=r.querySelector("clrScheme")||S(r,"clrScheme");if(!o)return n;for(let i of[...o.children]){let a=i.querySelector("srgbClr")||S(i,"srgbClr"),s=i.querySelector("sysClr")||S(i,"sysClr"),c=a?.getAttribute("val")||s?.getAttribute("lastClr")||"";c&&(n[i.localName]=`#${c.replace(/^#/,"")}`)}return n}var bo={bg1:"lt1",tx1:"dk1",bg2:"lt2",tx2:"dk2"};function at(e,t){return Lt(e,t)}function wo(e,t){if(!e)return;let n=[...e.children].find(r=>r.localName==="solidFill"||r.localName==="noFill"||r.localName==="gradFill");if(!(!n||n.localName==="noFill"))return Lt(n,t)}function Lt(e,t){if(!e)return;let n=[...e.getElementsByTagName("*")].find(s=>s.localName==="solidFill")||e,r=[...n.getElementsByTagName("*")].find(s=>s.localName==="srgbClr");if(r?.getAttribute("val"))return`#${r.getAttribute("val").replace(/^#/,"")}`;let i=[...n.getElementsByTagName("*")].find(s=>s.localName==="schemeClr")?.getAttribute("val")||"",a=bo[i]||i;if(a&&t[a])return t[a];if(i&&t[i])return t[i]}async function Ie(e,t){let n=e.file(t);if(!n)throw new Error(`\u7F3A\u5C11 ${t}`);let r=String(await n.async("string"));return new DOMParser().parseFromString(r,"application/xml")}async function st(e,t){let n=e.file(t),r={};if(!n)return r;let o=new DOMParser().parseFromString(String(await n.async("string")),"application/xml");for(let i of[...o.getElementsByTagName("Relationship")]){let a=i.getAttribute("Id")||"",s=i.getAttribute("Target")||"",c=i.getAttribute("Type")||"";a&&s&&(r[a]={target:s,type:c})}return r}function Zn(e,t){return Object.values(e).find(n=>n.type.endsWith(t))?.target||""}function Pe(e,t="id"){return e&&(e.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships",t)||e.getAttribute(`r:${t}`)||[...e.attributes].find(r=>r.localName===t)?.value||e.getAttribute(t))||""}async function Vt(e,t,n,r){let o=S(t,"blip"),i=Pe(o,"embed");return!i||!n[i]?"":lt(e,X(r,n[i].target))}var zn=new Map;async function lt(e,t){let n=zn.get(t);if(n)return n;let r=e.file(t);if(!r)return"";let o=await r.async("blob"),i=yo(t),a=i?new Blob([await o.arrayBuffer()],{type:i}):o,s=URL.createObjectURL(a);return zn.set(t,s),s}function yo(e){let t=e.split(".").pop()?.toLowerCase()||"";return t==="png"?"image/png":t==="jpg"||t==="jpeg"?"image/jpeg":t==="gif"?"image/gif":t==="webp"?"image/webp":t==="mp4"||t==="m4v"?"video/mp4":t==="webm"?"video/webm":t==="mov"?"video/quicktime":""}function vo(e){return Array.isArray(e)?e.flatMap(t=>{if(!t||typeof t!="object")return[];let n=t,r=String(n.dataUrl||""),o=r.indexOf(",");if(o<0)return[];let i=atob(r.slice(o+1)),a=new Uint8Array(i.length);for(let s=0;s<i.length;s+=1)a[s]=i.charCodeAt(s);return[{name:String(n.name||"media"),mime:String(n.mime||""),bytes:a}]}):[]}function Ut(e){let t=e.split("/"),n=t.pop()||"";return`${t.join("/")}/_rels/${n}.rels`}function X(e,t){let n=e.split("/").slice(0,-1);for(let r of t.replace(/\\/g,"/").split("/"))!r||r==="."||(r===".."?n.pop():n.push(r));return n.join("/")}function S(e,t){return e&&[...e.querySelectorAll("*")].find(n=>n.localName===t)||null}function Me(e,t){return[...e.querySelectorAll("*")].filter(n=>n.localName===t)}function U(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function jt(e){e.stopPropagation()}var _n=`.cnv-doc {
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
.cnv-doc-revision {
    flex: 0 0 auto;
    max-height: 38%;
    overflow: auto;
    margin: 8px;
    padding: 10px 12px;
    border-radius: 10px;
    background: #fff;
    color: #1c1917;
    font-size: 13px;
    line-height: 1.5;
    white-space: pre-wrap;
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
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    overflow: auto;
    background: #52525b;
    position: relative;
}
.cnv-doc-pdf-page {
    position: relative;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.cnv-doc-pdf canvas {
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
}
.cnv-doc-pdf-text {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
}
.cnv-doc-pdf-text span {
    position: absolute;
    color: transparent;
    white-space: pre;
    transform-origin: 0 0;
}
.cnv-doc-pdf.is-fs {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 24px 0 48px;
    box-sizing: border-box;
}
.cnv-doc-pdf.is-fs canvas {
    max-width: min(100%, 1100px);
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
    position: relative;
}
.cnv-doc-sheet table {
    border-collapse: collapse;
    font-size: 12px;
    line-height: 1.35;
    min-width: 100%;
}
.cnv-doc-formula {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-bottom: 1px solid rgba(120, 120, 120, 0.22);
    font-size: 12px;
}
.cnv-doc-formula span {
    min-width: 48px;
    font-variant-numeric: tabular-nums;
    opacity: 0.7;
}
.cnv-doc-formula input {
    flex: 1 1 auto;
    border: 1px solid rgba(120, 120, 120, 0.28);
    border-radius: 6px;
    padding: 4px 8px;
    font: inherit;
    background: transparent;
    color: inherit;
    outline: none;
}
.cnv-doc-sheet th,
.cnv-doc-sheet td {
    border: 1px solid rgba(120, 120, 120, 0.22);
    padding: 3px 8px;
    white-space: nowrap;
    min-width: 88px;
    max-width: 320px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
}
.cnv-doc-sheet td.is-active {
    outline: 2px solid #3b82f6;
    outline-offset: -2px;
    overflow: visible;
}
.cnv-doc-sheet td input {
    width: 100%;
    min-width: 80px;
    border: 0;
    padding: 0;
    font: inherit;
    background: transparent;
    color: inherit;
    outline: none;
}
.cnv-doc-chart {
    position: absolute;
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box;
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.96);
    color: #18181b;
    border: 1px solid rgba(24, 24, 27, 0.12);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
    pointer-events: none;
    overflow: hidden;
}
.cnv-doc-chart-title {
    font-size: 13px;
    font-weight: 700;
}
.cnv-doc-chart-bars {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 4px;
    min-height: 0;
}
.cnv-doc-chart-row {
    display: grid;
    grid-template-columns: 52px 1fr 64px;
    align-items: center;
    gap: 6px;
    font-size: 11px;
}
.cnv-doc-chart-row i {
    display: block;
    height: 8px;
    border-radius: 99px;
    background: #3b82f6;
}
.cnv-doc-chart-row b {
    font-weight: 600;
    text-align: right;
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
.cnv-doc > .cnv-doc-word {
    flex: 1 1 auto;
    min-height: 0;
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
.cnv-doc-word-pictures {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px 20px;
}
.cnv-doc-word-pictures img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
}
.cnv-doc-word.is-page {
    height: auto;
    min-height: 0;
    padding: 16px 8px 28px;
    background: #d6d3d1;
    color: initial;
}
.cnv-doc-word.is-page .docx-wrapper {
    background: transparent;
    padding: 0;
    align-items: center;
}
.cnv-doc-word:not(.is-page) h1,
.cnv-doc-word:not(.is-page) h2,
.cnv-doc-word:not(.is-page) h3 {
    line-height: 1.3;
    margin: 0.8em 0 0.35em;
}
.cnv-doc-word:not(.is-page) p {
    margin: 0.45em 0;
}
.cnv-doc-word img {
    max-width: 100%;
    height: auto;
}
.cnv-doc-word.is-editing {
    outline: none;
    background: #fff;
}
.cnv-doc-word-fs {
    height: 100%;
    overflow: auto;
    background: #e7e5e4;
    padding: 28px 0 48px;
    box-sizing: border-box;
}
.cnv-doc-word-fs .cnv-doc-word {
    max-width: 816px;
    min-height: 100%;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
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
.cnv-doc-slides.has-revision {
    flex-direction: column;
    align-items: stretch;
}
.cnv-doc-slide-fit {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cnv-doc-slide {
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
    container-type: size;
    flex: 0 0 auto;
}
.cnv-doc-slide-box {
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.25;
}
.cnv-doc-slide.is-playing .cnv-doc-slide-box {
    transition: opacity 0.35s ease;
}
.cnv-doc-slide-box.is-hidden {
    opacity: 0;
    visibility: hidden;
}
.cnv-doc-slide-box.is-editing {
    outline: 1px dashed rgba(255, 255, 255, 0.55);
    cursor: text;
    overflow: auto;
}
.cnv-doc-slide-box.is-editing div {
    min-height: 100%;
    outline: none;
}
.cnv-doc-slide-box video,
.cnv-doc-video {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    background: #000;
}
.cnv-doc-slide-box video {
    height: 100%;
    object-fit: contain;
}
.cnv-doc-sheet-image {
    position: absolute;
    z-index: 3;
    object-fit: contain;
    pointer-events: none;
}
.cnv-doc-slide-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}
.cnv-doc-slides.is-fs {
    height: 100%;
    width: 100%;
    cursor: default;
}
.cnv-doc-slides.is-fs .cnv-doc-slide {
    max-width: 100%;
    max-height: 100%;
}
.cnv-doc-fs {
    position: fixed;
    inset: 0;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    background: #f4f4f5;
    color: #18181b;
}
.cnv-doc-fs.is-dark {
    background: #09090b;
    color: #fafafa;
}
.cnv-doc-fs-bar {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 16px;
    border-bottom: 1px solid rgba(120, 120, 120, 0.22);
}
.cnv-doc-fs-title {
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cnv-doc-fs-actions,
.cnv-doc-fs-pager {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
}
.cnv-doc-fs-actions button,
.cnv-doc-fs-pager button {
    border: 0;
    border-radius: 8px;
    padding: 6px 12px;
    font: inherit;
    cursor: pointer;
    background: rgba(120, 120, 120, 0.18);
    color: inherit;
}
.cnv-doc-fs-note {
    opacity: 0.7;
    font-size: 12px;
}
.cnv-doc-fs-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
}
.cnv-doc-fs-body.is-play {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    cursor: pointer;
}
.cnv-doc-fs-playhint {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16px;
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
}
`;function Co({ctx:e}){return p("div",{className:"cnv-doc","data-doc-node":e.node.id,children:p(dn,{ctx:e})})}function So({ctx:e}){return p("div",{className:"cnv-doc","data-doc-node":e.node.id,children:p(Rn,{ctx:e})})}function ko({ctx:e}){return p("div",{className:"cnv-doc","data-doc-node":e.node.id,children:p(cn,{ctx:e})})}function No({ctx:e}){return p("div",{className:"cnv-doc","data-doc-node":e.node.id,children:p(On,{ctx:e})})}function ct(e,t){let n=Q(e.node);return{id:"doc-download",title:"\u4E0B\u8F7D\u5F53\u524D\u6587\u4EF6",label:"\u4E0B\u8F7D",icon:"\u2193",onClick:()=>{n&&rn(n,At(n)||t)}}}function Xn(e,t){let n=Math.max(1,Number(e.node.metadata?.pageCount)||1),r=J(ge(e.node),n);return[{id:"doc-prev",title:`\u4E0A\u4E00${t}`,label:"\u2039",icon:"\u2039",onClick:()=>e.updateMetadata({page:J(r-1,n)})},{id:"doc-pos",title:`${r} / ${n}`,label:`${r}/${n}`,icon:" ",onClick:()=>{}},{id:"doc-next",title:`\u4E0B\u4E00${t}`,label:"\u203A",icon:"\u203A",onClick:()=>e.updateMetadata({page:J(r+1,n)})}]}function ut(e,t,n){return{id:"doc-upload",title:n,label:"\u4E0A\u4F20",icon:"\u2191",onClick:()=>{let r=document.createElement("input");r.type="file",r.accept=t,r.onchange=()=>{let o=r.files?.[0];o&&window.dispatchEvent(new CustomEvent("open-clai-office-file",{detail:{nodeId:e.node.id,file:o}}))},r.click()}}}function dt(e){return{id:"doc-open",title:String(e.node.metadata?.openHint||"")||"\u5728\u6587\u4EF6\u5939\u4E2D\u663E\u793A\u8FD9\u4E2A\u6587\u4EF6",label:"\u6253\u5F00",icon:"\u{1F4C2}",onClick:()=>{nn(e.node).then(()=>e.updateMetadata({openHint:"\u5DF2\u5728\u6587\u4EF6\u5939\u4E2D\u663E\u793A"})).catch(n=>e.updateMetadata({openHint:n instanceof Error?n.message:"\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6\u5939"}))}}}function Ve(e,t="view"){return{id:t==="play"?"doc-play":"doc-view",title:t==="play"?"\u5168\u5C4F\u64AD\u653E":"\u5168\u5C4F\u6D4F\u89C8",label:t==="play"?"\u64AD\u653E":"\u5168\u5C4F",icon:t==="play"?"\u25B6":"\u26F6",onClick:()=>Le(e.node.id,t)}}function Zt(e){let t=!!e.node.metadata?.editing;return{id:"doc-edit",title:t?"\u7ED3\u675F\u7F16\u8F91":"\u5728\u753B\u5E03\u4E0A\u7F16\u8F91",label:t?"\u9884\u89C8":"\u7F16\u8F91",icon:t?"\u{1F441}":"\u270E",active:t,onClick:()=>e.updateMetadata({editing:!t})}}function Gn(e,t){return{id:"doc-to-image",title:"\u628A\u5F53\u524D\u9875\u653E\u5230\u56FE\u7247\u8282\u70B9",label:"\u51FA\u56FE",icon:"\u29C9",onClick:()=>{let n=document.querySelector(`[data-doc-node="${e.node.id}"]`);(t==="pdf"?Promise.resolve(pn(n)):Jn(n)).then(o=>{if(!o)return;let i=ge(e.node);on(e,o,`${e.node.title||At(Q(e.node))} ${i}`)})}}}var zi={id:"documents",name:"\u6587\u6863\u9884\u89C8",version:"1.1.1",description:"\u5728\u753B\u5E03\u4E0A\u67E5\u770B\u3001\u7F16\u8F91 PDF\u3001\u8868\u683C\u3001Word \u548C\u5E7B\u706F\u7247\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5\u529E\u516C\u8F6F\u4EF6",css:_n,nodes:[{type:"pdf:preview",title:"PDF",icon:"\u{1F4C4}",description:"\u5728\u753B\u5E03\u4E0A\u9605\u8BFB PDF\uFF0C\u53EF\u5168\u5C4F\u7FFB\u9875",defaultSize:{width:420,height:560},defaultMetadata:{content:Ge,page:1},minimapColor:"#ef4444",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,writeBackKey:"revision",promptPrefix:"\u6309\u7528\u6237\u7684\u8981\u6C42\u6539\u5199\u8FD9\u4EFD PDF \u7684\u6587\u5B57\u3002\u53EA\u8F93\u51FA\u6539\u5199\u540E\u7684\u6B63\u6587\uFF0C\u4E0D\u8981\u4EE3\u7801\u56F4\u680F\u3002"},interactionToggle:!0,Content:Co,onDoubleClick:e=>(Le(e.node.id),!0),toolbar:e=>[ut(e,".pdf,application/pdf","\u6362\u6210\u4E00\u4E2A PDF"),...Xn(e,"\u9875"),Ve(e),dt(e),ct(e,"preview.pdf"),Gn(e,"pdf")]},{type:"sheet:preview",title:"\u8868\u683C",icon:"\u25A6",description:"\u5728\u753B\u5E03\u4E0A\u67E5\u770B\u5E76\u7F16\u8F91 Excel / CSV",defaultSize:{width:720,height:460},defaultMetadata:{content:qe},minimapColor:"#22c55e",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,writeBackAs:"csv",promptPrefix:"\u6309\u7528\u6237\u7684\u8981\u6C42\u4FEE\u6539\u8FD9\u5F20\u8868\u683C\u3002\u53EA\u8F93\u51FA CSV\uFF0C\u7B2C\u4E00\u884C\u662F\u8868\u5934\uFF0C\u4E0D\u8981\u4EE3\u7801\u56F4\u680F\u3002"},interactionToggle:!0,forceInteractive:e=>!!e.metadata?.editing,resource:e=>({kind:"text",text:String(e.metadata?.sheetText||"")}),Content:So,onDoubleClick:e=>(e.updateMetadata({editing:!0,interactive:!0}),!0),toolbar:e=>[ut(e,".xlsx,.xls,.csv,text/csv","\u6362\u6210\u4E00\u4E2A Excel \u6216 CSV"),Zt(e),Ve(e),dt(e),ct(e,"preview.xlsx")]},{type:"docx:preview",title:"Word",icon:"W",description:"\u5728\u753B\u5E03\u4E0A\u67E5\u770B\u5E76\u7F16\u8F91 Word \u6587\u6863",defaultSize:{width:480,height:560},defaultMetadata:{content:""},minimapColor:"#3b82f6",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,writeBackKey:"docHtml",promptPrefix:"\u6309\u7528\u6237\u7684\u8981\u6C42\u4FEE\u6539\u8FD9\u7BC7\u6587\u6863\u3002\u53EA\u8F93\u51FA HTML \u6B63\u6587\uFF0C\u53EF\u7528 p\u3001h1\u3001h2\u3001ul\u3001ol\u3001table\uFF0C\u4E0D\u8981\u4EE3\u7801\u56F4\u680F\u3002"},interactionToggle:!0,forceInteractive:e=>!!e.metadata?.editing,resource:e=>({kind:"text",text:String(e.metadata?.docText||"")}),Content:ko,onDoubleClick:e=>(Le(e.node.id),!0),toolbar:e=>[ut(e,".docx,.doc","\u6362\u6210\u4E00\u4E2A Word"),Zt(e),Ve(e),dt(e),ct(e,"preview.docx")]},{type:"slides:preview",title:"\u5E7B\u706F\u7247",icon:"\u25A3",description:"\u5728\u753B\u5E03\u4E0A\u9884\u89C8\u5E76\u5168\u5C4F\u64AD\u653E PPT",defaultSize:{width:640,height:380},defaultMetadata:{content:"",page:1},minimapColor:"#f97316",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,writeBackKey:"revision",promptPrefix:"\u6309\u7528\u6237\u7684\u8981\u6C42\u4FEE\u6539\u8FD9\u4EFD\u5E7B\u706F\u7247\u7684\u6587\u5B57\u3002\u6309\u9875\u8F93\u51FA\uFF0C\u6BCF\u9875\u4EE5\u300C\u7B2CN\u9875\u300D\u5F00\u5934\u3002\u4E0D\u8981\u4EE3\u7801\u56F4\u680F\u3002"},interactionToggle:!0,forceInteractive:e=>!!e.metadata?.editing,Content:No,onDoubleClick:e=>(e.updateMetadata({editing:!0,interactive:!0}),!0),toolbar:e=>[ut(e,".pptx,.ppt","\u6362\u6210\u4E00\u4E2A PPT"),Zt(e),...Xn(e,"\u5F20"),Ve(e),Ve(e,"play"),dt(e),ct(e,"preview.pptx"),Gn(e,"slides")]}]};export{zi as default};
