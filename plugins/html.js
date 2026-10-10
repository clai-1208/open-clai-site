function T(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function u(){return T().React}var h=((...e)=>u().useState(...e));var w=((...e)=>u().useLayoutEffect(...e)),k=((...e)=>u().useMemo(...e));var v=((...e)=>u().useRef(...e));var x=[{id:"desktop",label:"\u7535\u8111",width:1280,height:800,chrome:"window"},{id:"tablet",label:"\u5E73\u677F",width:768,height:1024,chrome:"tablet"},{id:"phone",label:"\u624B\u673A",width:390,height:844,chrome:"phone"}],M={desktop:[{label:"1280\xD7800",width:1280,height:800},{label:"1440\xD7900",width:1440,height:900},{label:"1920\xD71080",width:1920,height:1080},{label:"1280\xD7720",width:1280,height:720}],tablet:[{label:"768\xD71024",width:768,height:1024},{label:"834\xD71194",width:834,height:1194},{label:"1024\xD7768",width:1024,height:768},{label:"1180\xD7820",width:1180,height:820}],phone:[{label:"390\xD7844",width:390,height:844},{label:"430\xD7932",width:430,height:932},{label:"375\xD7667",width:375,height:667},{label:"360\xD7800",width:360,height:800},{label:"844\xD7390",width:844,height:390}]},C={window:{top:36,bottom:8,side:8,radius:12,screenRadius:6},tablet:{top:14,bottom:16,side:12,radius:22,screenRadius:10},phone:{top:16,bottom:20,side:11,radius:28,screenRadius:18}};function P(e){return x.find(t=>t.id===e)||null}function m(e){return Number.isFinite(e)?Math.max(280,Math.min(2560,Math.round(e))):800}function f(e){let t=P(e?.viewport);if(!t)return null;let o=Number(e?.viewportWidth),n=Number(e?.viewportHeight);return{...t,width:Number.isFinite(o)&&o>0?m(o):t.width,height:Number.isFinite(n)&&n>0?m(n):t.height}}function g(e){let t=C[e.chrome],o=e.id==="phone"?480:560,n=e.width/Math.max(1,e.height),a,r;return e.width>=e.height?(a=o,r=Math.max(200,Math.round(o/n))):(r=o,a=Math.max(160,Math.round(o*n))),{width:a+t.side*2,height:r+t.top+t.bottom}}var H;function B(){return H||(H=import("https://esm.sh/html2canvas@1.4.1").then(e=>e.default)),H}function O(e){return e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")}function S(e){return new Promise(t=>window.setTimeout(t,e))}function W(e){return new Promise((t,o)=>{let n=new FileReader;n.onload=()=>t(String(n.result||"")),n.onerror=()=>o(new Error("\u65E0\u6CD5\u8BFB\u53D6\u56FE\u7247")),n.readAsDataURL(e)})}async function _(e){let t=[...e.images];await Promise.all(t.map(async o=>{try{if(!o.src||o.src.startsWith("data:"))return;let n=await fetch(o.src);if(!n.ok)return;o.src=await W(await n.blob())}catch{}}))}async function J(e){await _(e);let t=[...e.images].filter(o=>!o.complete);t.length&&await Promise.all(t.map(o=>new Promise(n=>{o.addEventListener("load",()=>n(),{once:!0}),o.addEventListener("error",()=>n(),{once:!0})}))),e.fonts?.ready&&await Promise.race([e.fonts.ready,S(1500)]),await S(32)}function X(e){return new Promise((t,o)=>{let n=window.setTimeout(()=>o(new Error("\u9884\u89C8\u8D85\u65F6")),8e3),a=()=>{let r=e.contentDocument;!r?.body||(r.location?.href||"")==="about:blank"&&r.body.childElementCount===0||(window.clearTimeout(n),t())};e.addEventListener("load",a)})}function y(e,t,o,n,a,r){let s=Math.min(r,n/2,a/2);e.beginPath(),e.moveTo(t+s,o),e.arcTo(t+n,o,t+n,o+a,s),e.arcTo(t+n,o+a,t,o+a,s),e.arcTo(t,o+a,t,o,s),e.arcTo(t,o,t+n,o,s),e.closePath()}function U(e,t){let o=C[t.chrome],n=e.width/Math.max(1,t.width),a=o.side*n,r=o.top*n,s=o.bottom*n,l=document.createElement("canvas");l.width=e.width+a*2,l.height=e.height+r+s;let i=l.getContext("2d");return i?(i.fillStyle=t.chrome==="window"?"#292524":"#1c1917",y(i,0,0,l.width,l.height,o.radius*n),i.fill(),t.chrome==="window"?(i.fillStyle="#44403c",i.fillRect(0,0,l.width,r),["#f87171","#fbbf24","#4ade80"].forEach((F,$)=>{i.beginPath(),i.fillStyle=F,i.arc(18*n+$*14*n,r/2,4*n,0,Math.PI*2),i.fill()})):t.chrome==="phone"&&(i.fillStyle="#111827",y(i,l.width/2-36*n,7*n,72*n,8*n,4*n),i.fill(),i.fillStyle="#44403c",y(i,l.width/2-44*n,l.height-10*n,88*n,4*n,2*n),i.fill()),i.save(),y(i,a,r,e.width,e.height,o.screenRadius*n),i.clip(),i.drawImage(e,a,r),i.restore(),l):e}async function z(e,t){let o=await B(),n=document.createElement("iframe");n.setAttribute("sandbox","allow-same-origin"),n.style.cssText=`position:fixed;left:0;top:0;width:${t.width}px;height:${t.height}px;opacity:0;pointer-events:none;border:0;z-index:-1;`;let a=X(n);n.srcdoc=O(e),document.body.appendChild(n);try{await a;let r=n.contentDocument;if(!r?.documentElement)throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u9884\u89C8");await J(r);let s=await o(r.documentElement,{scale:2,width:t.width,height:t.height,windowWidth:t.width,windowHeight:t.height,backgroundColor:"#ffffff",logging:!1,useCORS:!0,allowTaint:!1});return U(s,t).toDataURL("image/png")}finally{n.remove()}}function L(e,t){let o=`${(t||"ui").replace(/[\\/:*?"<>|]+/g,"_").slice(0,80)||"ui"}.html`,n=new Blob([e],{type:"text/html;charset=utf-8"}),a=URL.createObjectURL(n),r=document.createElement("a");r.href=a,r.download=o,r.rel="noopener",document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(a),1e3)}function N(e,t,o){let n=g(o);e.applyOps([{type:"add_node",nodeType:"image",title:`${e.node.title||"HTML"} \u9884\u89C8`,x:e.node.position.x+e.node.width+48,y:e.node.position.y,width:n.width,height:n.height,metadata:{content:t,status:"success"}}])}var I=`.cnv-html-stage {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: var(--html-fill, #292524);
}
.cnv-html-device {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #1c1917;
    overflow: hidden;
}
.cnv-html-device.is-phone::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 88px;
    height: 4px;
    margin-left: -44px;
    border-radius: 999px;
    background: #44403c;
    pointer-events: none;
}
.cnv-html-device.is-window {
    background: #292524;
    border-radius: 12px;
    padding: 0 8px 8px;
}
.cnv-html-device.is-tablet {
    border-radius: 22px;
    padding: 14px 12px 16px;
}
.cnv-html-device.is-phone {
    border-radius: 28px;
    padding: 16px 11px 20px;
}
.cnv-html-titlebar {
    flex: 0 0 36px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 6px;
    color: #a8a29e;
    font: 11px/1 system-ui, sans-serif;
}
.cnv-html-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.cnv-html-notch {
    position: absolute;
    top: 8px;
    left: 50%;
    z-index: 2;
    width: 72px;
    height: 8px;
    margin-left: -36px;
    border-radius: 999px;
    background: #111827;
    pointer-events: none;
}
.cnv-html-screen {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    background: #fff;
}
.cnv-html-device.is-window .cnv-html-screen {
    border-radius: 6px;
}
.cnv-html-device.is-tablet .cnv-html-screen {
    border-radius: 10px;
}
.cnv-html-device.is-phone .cnv-html-screen {
    border-radius: 18px;
}
.cnv-html-screen iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    background: #fff;
    transform-origin: 0 0;
}
.cnv-html-size {
    position: absolute;
    inset: 8px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px;
    overflow: auto;
    border-radius: 14px;
    background: color-mix(in srgb, var(--html-fill, #1c1917) 94%, transparent);
    color: var(--html-text, #e7e5e4);
    font: 12px/1.4 system-ui, sans-serif;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
}
.cnv-html-size h3 {
    margin: 0;
    font-size: 13px;
    font-weight: 650;
}
.cnv-html-size-presets,
.cnv-html-size-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
}
.cnv-html-size label {
    color: var(--html-muted, #a8a29e);
    min-width: 28px;
}
.cnv-html-size button,
.cnv-html-size input {
    border: 1px solid color-mix(in srgb, var(--html-text, #e7e5e4) 16%, transparent);
    background: color-mix(in srgb, var(--html-fill, #1c1917) 70%, #000);
    color: inherit;
    border-radius: 8px;
    font: inherit;
}
.cnv-html-size button {
    padding: 5px 8px;
    cursor: pointer;
}
.cnv-html-size button.active,
.cnv-html-size button:hover {
    background: color-mix(in srgb, var(--html-text, #e7e5e4) 12%, transparent);
}
.cnv-html-size input {
    width: 72px;
    padding: 5px 8px;
}
.cnv-html-size-done {
    margin-top: auto;
    align-self: flex-end;
}
`;var K=Symbol.for("infinite-canvas.jsx.fragment");function G(e,t,o){let n=u(),a=e===K?n.Fragment:e,r=o===void 0?t:{...t??{},key:o};return n.createElement(a,r)}function d(e,t,o){return G(e,t,o)}var c=d;var Z=12,Y=20,R=x[0],V=`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  html,body{margin:0;height:100%;font-family:-apple-system,sans-serif}
  body{display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f172a,#1e293b)}
  .card{width:86%;background:#fff;border-radius:18px;padding:22px 20px;box-shadow:0 18px 40px rgba(0,0,0,.28)}
  .kicker{font-size:11px;letter-spacing:.16em;color:#6366f1;font-weight:700}
  h1{margin:8px 0 10px;font-size:22px;color:#0f172a}
  p{margin:0;color:#475569;line-height:1.55;font-size:13px}
  .row{display:flex;gap:8px;margin-top:16px}
  .chip{background:#eef2ff;color:#4338ca;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:600}
</style>
</head>
<body>
  <div class="card">
    <div class="kicker">HTML \u8282\u70B9</div>
    <h1>\u6C99\u7BB1\u91CC\u7684\u5C0F\u9875\u9762</h1>
    <p>\u628A HTML \u8D34\u8FDB\u53BB\u5C31\u4F1A\u6E32\u67D3\u6210\u771F\u6B63\u7684\u9875\u9762\uFF0C\u9002\u5408\u6D77\u62A5\u3001\u7EC4\u4EF6\u8349\u7A3F\u3001\u6D3B\u52A8\u9875\u3002</p>
    <div class="row"><span class="chip">\u6D77\u62A5</span><span class="chip">\u7EC4\u4EF6\u8349\u7A3F</span><span class="chip">\u6D3B\u52A8\u9875</span></div>
  </div>
</body>
</html>`;function D(e){return String(e.node.metadata?.content||V)}function E(e){let t=e.getUpstream().map(o=>o.metadata?.content).filter(Boolean).join(`
`);return D(e).replace(/\{\{\s*input\s*\}\}/g,t)}function b(e,t,o,n){let a=P(t);if(!a)return;let r={...a,width:m(o??a.width),height:m(n??a.height)};e.updateMetadata({viewport:t,viewportWidth:r.width,viewportHeight:r.height}),e.updateNode(g(r))}async function q(e){if(e.node.metadata?.capturing)return;let t=f(e.node.metadata)||R;e.updateMetadata({capturing:!0});try{N(e,await z(E(e),t),t)}catch(o){window.alert(o instanceof Error?o.message:"\u51FA\u56FE\u5931\u8D25")}finally{e.updateMetadata({capturing:!1})}}function Q({ctx:e,value:t}){let o=v(null),n=k(()=>Math.max(1,t.split(`
`).length),[t]),[a,r]=h(0),s={fontFamily:"monospace",fontSize:Z,lineHeight:`${Y}px`,boxSizing:"border-box"};return c("div",{"data-canvas-no-zoom":!0,style:{height:"100%",width:"100%",display:"flex",overflow:"hidden",borderRadius:16,background:e.theme.node.fill},onMouseDown:l=>l.stopPropagation(),children:[d("div",{ref:o,"aria-hidden":!0,style:{...s,flex:"0 0 auto",padding:"16px 8px 16px 12px",textAlign:"right",color:e.theme.node.placeholder,background:`${e.theme.toolbar.panel}66`,borderRight:`1px solid ${e.theme.node.stroke}`,overflow:"hidden",userSelect:"none",whiteSpace:"pre"},children:d("div",{style:{transform:`translateY(${-a}px)`},children:Array.from({length:n},(l,i)=>d("div",{children:i+1},i))})}),d("textarea",{autoFocus:!0,value:t,placeholder:"<div>Hello, {{input}}</div>",spellCheck:!1,wrap:"off",onChange:l=>e.updateMetadata({content:l.target.value}),onScroll:l=>r(l.currentTarget.scrollTop),onMouseDown:l=>l.stopPropagation(),onWheel:l=>l.stopPropagation(),style:{...s,flex:"1 1 auto",minWidth:0,height:"100%",resize:"none",background:"transparent",padding:"16px 16px 16px 12px",outline:"none",border:"none",color:e.theme.node.text,whiteSpace:"pre",overflow:"auto"}})]})}function ee({ctx:e,viewport:t}){let[o,n]=h(String(t.width)),[a,r]=h(String(t.height)),s=M[t.id];w(()=>{n(String(t.width)),r(String(t.height))},[t.width,t.height]);let l=(i=Number(o),p=Number(a))=>{!Number.isFinite(i)||!Number.isFinite(p)||i<=0||p<=0||b(e,t.id,i,p)};return c("div",{className:"cnv-html-size","data-canvas-no-zoom":!0,onMouseDown:i=>i.stopPropagation(),onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation(),children:[d("h3",{children:"\u753B\u677F\u5C3A\u5BF8"}),d("div",{className:"cnv-html-size-presets",children:s.map(i=>{let p=i.width===t.width&&i.height===t.height;return d("button",{type:"button",className:p?"active":"",onClick:()=>b(e,t.id,i.width,i.height),children:i.label},i.label)})}),c("div",{className:"cnv-html-size-row",children:[d("label",{children:"W"}),d("input",{type:"number",min:280,max:2560,value:o,onChange:i=>n(i.target.value),onBlur:()=>l(),onKeyDown:i=>{i.key==="Enter"&&l()}}),d("span",{children:"\xD7"}),d("label",{children:"H"}),d("input",{type:"number",min:280,max:2560,value:a,onChange:i=>r(i.target.value),onBlur:()=>l(),onKeyDown:i=>{i.key==="Enter"&&l()}}),d("button",{type:"button",title:"\u4EA4\u6362\u5BBD\u9AD8",onClick:()=>b(e,t.id,t.height,t.width),children:"\u65CB\u8F6C"})]}),d("button",{type:"button",className:"cnv-html-size-done",onClick:()=>{l(),e.updateMetadata({sizing:!1})},children:"\u5B8C\u6210"})]})}function te({html:e,viewport:t}){let o=v(null),[n,a]=h({w:0,h:0});w(()=>{let s=o.current;if(!s)return;let l=()=>a({w:s.clientWidth,h:s.clientHeight});l();let i=new ResizeObserver(l);return i.observe(s),()=>i.disconnect()},[]);let r=n.w&&n.h?Math.min(n.w/t.width,n.h/t.height):1;return c("div",{className:`cnv-html-device is-${t.chrome}`,children:[t.chrome==="window"?c("div",{className:"cnv-html-titlebar",children:[d("span",{className:"cnv-html-dot",style:{background:"#f87171"}}),d("span",{className:"cnv-html-dot",style:{background:"#fbbf24"}}),d("span",{className:"cnv-html-dot",style:{background:"#4ade80"}}),c("span",{children:[t.label," \xB7 ",t.width,"\xD7",t.height]})]}):null,t.chrome==="phone"?d("div",{className:"cnv-html-notch"}):null,d("div",{ref:o,className:"cnv-html-screen",children:d("iframe",{title:"html-preview",sandbox:"allow-scripts allow-forms",srcDoc:e,style:{width:t.width,height:t.height,zoom:r,visibility:n.w?"visible":"hidden"}},`${t.id}-${t.width}x${t.height}`)})]})}function ne({ctx:e}){let t=!!e.node.metadata?.editing,o=!!e.node.metadata?.sizing,n=f(e.node.metadata),a=E(e);return t?d(Q,{ctx:e,value:D(e)}):n?c("div",{"data-canvas-no-zoom":!0,className:"cnv-html-stage",style:{"--html-fill":e.theme.node.fill,"--html-text":e.theme.node.text,"--html-muted":e.theme.node.muted},children:[d(te,{html:a,viewport:n}),o?d(ee,{ctx:e,viewport:n}):null]}):d("div",{"data-canvas-no-zoom":!0,style:{position:"relative",height:"100%",width:"100%"},children:d("iframe",{title:"html-preview",sandbox:"allow-scripts allow-forms",srcDoc:a,style:{height:"100%",width:"100%",border:0,borderRadius:16,background:"#fff",display:"block"}})})}function oe(e){let t=!!e.node.metadata?.editing,o=!!e.node.metadata?.capturing,n=!!e.node.metadata?.sizing,a=f(e.node.metadata),r=a?.id||"";return[{id:"html-toggle-edit",title:t?"\u9884\u89C8\u6E32\u67D3\u7ED3\u679C":"\u7F16\u8F91 HTML \u6E90\u7801",label:t?"\u9884\u89C8":"\u7F16\u8F91",icon:t?"\u{1F441}":"\u270E",active:t,onClick:()=>e.updateMetadata({editing:!t,sizing:!1})},...x.map(s=>({id:`html-viewport-${s.id}`,title:`${s.label}\u753B\u677F\uFF0C\u9ED8\u8BA4 ${s.width}\xD7${s.height}\uFF0C\u53EF\u518D\u6539\u5C3A\u5BF8`,label:s.label,icon:s.id==="desktop"?"\u{1F5A5}":s.id==="tablet"?"\u25A3":"\u{1F4F1}",active:r===s.id,onClick:()=>b(e,s.id)})),{id:"html-size",title:"\u753B\u677F CSS \u5C3A\u5BF8\uFF0C\u53EF\u9009\u624B\u673A/\u5E73\u677F/\u7535\u8111\u5E38\u7528\u5206\u8FA8\u7387\u6216\u81EA\u5B9A\u4E49",label:a?`${a.width}\xD7${a.height}`:"\u5C3A\u5BF8",icon:"\u26F6",active:n,onClick:()=>{a||b(e,"desktop"),e.updateMetadata({sizing:!n,editing:!1})}},{id:"html-export",title:"\u4E0B\u8F7D\u72EC\u7ACB HTML \u6E90\u6587\u4EF6",label:"\u5BFC\u51FA",icon:"\u2B07",onClick:()=>L(E(e),e.node.title)},{id:"html-capture",title:"\u6309\u5F53\u524D\u753B\u677F\u622A\u5C4F\u5230\u56FE\u7247\u8282\u70B9",label:o?"\u51FA\u56FE\u4E2D":"\u51FA\u56FE",icon:"\u{1F4F7}",active:o,onClick:()=>{q(e)}}]}var He={id:"html",name:"HTML \u8282\u70B9",version:"1.4.0",description:"\u6C99\u7BB1\u6E32\u67D3 HTML\uFF0C\u53EF\u6309\u7535\u8111/\u5E73\u677F/\u624B\u673A\u753B\u677F\u9884\u89C8\u3001\u5BFC\u51FA\u6E90\u6587\u4EF6\u3001\u622A\u5C4F\u51FA\u56FE",css:I,nodes:[{type:"html:render",title:"HTML",icon:"\u{1F310}",description:"\u6C99\u7BB1\u6E32\u67D3 HTML\uFF0C\u7535\u8111/\u5E73\u677F/\u624B\u673A\u753B\u677F\u53EF\u5BFC\u51FA\u6E90\u6587\u4EF6\u548C\u9884\u89C8\u56FE",defaultSize:g(R),defaultMetadata:{content:V,viewport:"desktop",viewportWidth:R.width,viewportHeight:R.height},minimapColor:"#ec4899",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,promptPrefix:"\u6309\u7528\u6237\u7684\u8981\u6C42\u4FEE\u6539\u8FD9\u4E2A HTML \u9875\u9762\u3002\u53EA\u8F93\u51FA\u5B8C\u6574 HTML \u6587\u6863\uFF0C\u4E0D\u8981\u4EE3\u7801\u56F4\u680F\u3002"},interactionToggle:!0,forceInteractive:e=>!!(e.metadata?.editing||e.metadata?.sizing),keepAspectRatio:e=>!!f(e.metadata)&&!e.metadata?.editing,Content:ne,toolbar:oe}]};export{He as default};
