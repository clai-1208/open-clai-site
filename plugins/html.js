function E(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function c(){return E().React}var u=((...e)=>c().useState(...e));var m=((...e)=>c().useLayoutEffect(...e)),R=((...e)=>c().useMemo(...e));var v=((...e)=>c().useRef(...e));var y=[{id:"desktop",label:"\u7535\u8111",width:1280,height:800},{id:"tablet",label:"\u5E73\u677F",width:768,height:1024},{id:"phone",label:"\u624B\u673A",width:390,height:844}],H={desktop:[{label:"1280\xD7800",width:1280,height:800},{label:"1440\xD7900",width:1440,height:900},{label:"1920\xD71080",width:1920,height:1080},{label:"1280\xD7720",width:1280,height:720}],tablet:[{label:"768\xD71024",width:768,height:1024},{label:"834\xD71194",width:834,height:1194},{label:"1024\xD7768",width:1024,height:768},{label:"1180\xD7820",width:1180,height:820}],phone:[{label:"390\xD7844",width:390,height:844},{label:"430\xD7932",width:430,height:932},{label:"375\xD7667",width:375,height:667},{label:"360\xD7800",width:360,height:800},{label:"844\xD7390",width:844,height:390}]};function C(e){return y.find(t=>t.id===e)||null}function f(e){return Number.isFinite(e)?Math.max(280,Math.min(2560,Math.round(e))):800}function g(e){let t=C(e?.viewport);if(!t)return null;let o=Number(e?.viewportWidth),n=Number(e?.viewportHeight);return{...t,width:Number.isFinite(o)&&o>0?f(o):t.width,height:Number.isFinite(n)&&n>0?f(n):t.height}}function p(e){let t=e.id==="phone"?480:560,o=e.width/Math.max(1,e.height);return e.width>=e.height?{width:t,height:Math.max(200,Math.round(t/o))}:{width:Math.max(160,Math.round(t*o)),height:t}}var x;function D(){return x||(x=import(new URL("/plugins/vendor/html2canvas.js",window.location.href).href).then(e=>e.default).catch(e=>{throw x=void 0,e})),x}function F(e){return e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")}function S(e){return new Promise(t=>window.setTimeout(t,e))}function $(e){return new Promise((t,o)=>{let n=new FileReader;n.onload=()=>t(String(n.result||"")),n.onerror=()=>o(new Error("\u65E0\u6CD5\u8BFB\u53D6\u56FE\u7247")),n.readAsDataURL(e)})}async function A(e){let t=[...e.images];await Promise.all(t.map(async o=>{try{if(!o.src||o.src.startsWith("data:"))return;let n=await fetch(o.src);if(!n.ok)return;o.src=await $(await n.blob())}catch{}}))}async function B(e){await A(e);let t=[...e.images].filter(o=>!o.complete);t.length&&await Promise.all(t.map(o=>new Promise(n=>{o.addEventListener("load",()=>n(),{once:!0}),o.addEventListener("error",()=>n(),{once:!0})}))),e.fonts?.ready&&await Promise.race([e.fonts.ready,S(1500)]),await S(32)}function W(e){return new Promise((t,o)=>{let n=window.setTimeout(()=>o(new Error("\u9884\u89C8\u8D85\u65F6")),8e3),r=()=>{let i=e.contentDocument;!i?.body||(i.location?.href||"")==="about:blank"&&i.body.childElementCount===0||(window.clearTimeout(n),t())};e.addEventListener("load",r)})}async function T(e,t){let o=await D(),n=document.createElement("iframe");n.setAttribute("sandbox","allow-same-origin"),n.style.cssText=`position:fixed;left:0;top:0;width:${t.width}px;height:${t.height}px;opacity:0;pointer-events:none;border:0;z-index:-1;`;let r=W(n);n.srcdoc=F(e),document.body.appendChild(n);try{await r;let i=n.contentDocument;if(!i?.documentElement)throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u9884\u89C8");return await B(i),(await o(i.documentElement,{scale:2,width:t.width,height:t.height,windowWidth:t.width,windowHeight:t.height,backgroundColor:"#ffffff",logging:!1,useCORS:!0,allowTaint:!1})).toDataURL("image/png")}finally{n.remove()}}function M(e,t){let o=`${(t||"ui").replace(/[\\/:*?"<>|]+/g,"_").slice(0,80)||"ui"}.html`,n=new Blob([e],{type:"text/html;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=o,i.rel="noopener",document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e3)}function z(e,t,o){let n=p(o);e.applyOps([{type:"add_node",nodeType:"image",title:`${e.node.title||"HTML"} \u9884\u89C8`,x:e.node.position.x+e.node.width+48,y:e.node.position.y,width:n.width,height:n.height,metadata:{content:t,status:"success"}}])}var L=`.cnv-html-stage {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    background: var(--html-fill, #292524);
    border-radius: 16px;
}
.cnv-html-screen {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    border-radius: 16px;
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
`;var _=Symbol.for("infinite-canvas.jsx.fragment");function J(e,t,o){let n=c(),r=e===_?n.Fragment:e,i=o===void 0?t:{...t??{},key:o};return n.createElement(r,i)}function l(e,t,o){return J(e,t,o)}var w=l;var X=12,U=20,k=y[0],N=`<!doctype html>
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
</html>`;function I(e){return String(e.node.metadata?.content||N)}function P(e){let t=e.getUpstream().map(o=>o.metadata?.content).filter(Boolean).join(`
`);return I(e).replace(/\{\{\s*input\s*\}\}/g,t)}function b(e,t,o,n){let r=C(t);if(!r)return;let i={...r,width:f(o??r.width),height:f(n??r.height)};e.updateMetadata({viewport:t,viewportWidth:i.width,viewportHeight:i.height}),e.updateNode(p(i))}async function j(e){if(e.node.metadata?.capturing)return;let t=g(e.node.metadata)||k;e.updateMetadata({capturing:!0});try{z(e,await T(P(e),t),t)}catch(o){window.alert(o instanceof Error?o.message:"\u51FA\u56FE\u5931\u8D25")}finally{e.updateMetadata({capturing:!1})}}function K({ctx:e,value:t}){let o=v(null),n=R(()=>Math.max(1,t.split(`
`).length),[t]),[r,i]=u(0),s={fontFamily:"monospace",fontSize:X,lineHeight:`${U}px`,boxSizing:"border-box"};return w("div",{"data-canvas-no-zoom":!0,style:{height:"100%",width:"100%",display:"flex",overflow:"hidden",borderRadius:16,background:e.theme.node.fill},onMouseDown:d=>d.stopPropagation(),children:[l("div",{ref:o,"aria-hidden":!0,style:{...s,flex:"0 0 auto",padding:"16px 8px 16px 12px",textAlign:"right",color:e.theme.node.placeholder,background:`${e.theme.toolbar.panel}66`,borderRight:`1px solid ${e.theme.node.stroke}`,overflow:"hidden",userSelect:"none",whiteSpace:"pre"},children:l("div",{style:{transform:`translateY(${-r}px)`},children:Array.from({length:n},(d,a)=>l("div",{children:a+1},a))})}),l("textarea",{autoFocus:!0,value:t,placeholder:"<div>Hello, {{input}}</div>",spellCheck:!1,wrap:"off",onChange:d=>e.updateMetadata({content:d.target.value}),onScroll:d=>i(d.currentTarget.scrollTop),onMouseDown:d=>d.stopPropagation(),onWheel:d=>d.stopPropagation(),style:{...s,flex:"1 1 auto",minWidth:0,height:"100%",resize:"none",background:"transparent",padding:"16px 16px 16px 12px",outline:"none",border:"none",color:e.theme.node.text,whiteSpace:"pre",overflow:"auto"}})]})}function G({ctx:e,viewport:t}){let[o,n]=u(String(t.width)),[r,i]=u(String(t.height)),s=H[t.id];m(()=>{n(String(t.width)),i(String(t.height))},[t.width,t.height]);let d=(a=Number(o),h=Number(r))=>{!Number.isFinite(a)||!Number.isFinite(h)||a<=0||h<=0||b(e,t.id,a,h)};return w("div",{className:"cnv-html-size","data-canvas-no-zoom":!0,onMouseDown:a=>a.stopPropagation(),onPointerDown:a=>a.stopPropagation(),onWheel:a=>a.stopPropagation(),children:[l("h3",{children:"\u753B\u677F\u5C3A\u5BF8"}),l("div",{className:"cnv-html-size-presets",children:s.map(a=>{let h=a.width===t.width&&a.height===t.height;return l("button",{type:"button",className:h?"active":"",onClick:()=>b(e,t.id,a.width,a.height),children:a.label},a.label)})}),w("div",{className:"cnv-html-size-row",children:[l("label",{children:"W"}),l("input",{type:"number",min:280,max:2560,value:o,onChange:a=>n(a.target.value),onBlur:()=>d(),onKeyDown:a=>{a.key==="Enter"&&d()}}),l("span",{children:"\xD7"}),l("label",{children:"H"}),l("input",{type:"number",min:280,max:2560,value:r,onChange:a=>i(a.target.value),onBlur:()=>d(),onKeyDown:a=>{a.key==="Enter"&&d()}}),l("button",{type:"button",title:"\u4EA4\u6362\u5BBD\u9AD8",onClick:()=>b(e,t.id,t.height,t.width),children:"\u65CB\u8F6C"})]}),l("button",{type:"button",className:"cnv-html-size-done",onClick:()=>{d(),e.updateMetadata({sizing:!1})},children:"\u5B8C\u6210"})]})}function Z({html:e,viewport:t}){let o=v(null),[n,r]=u({w:0,h:0});m(()=>{let s=o.current;if(!s)return;let d=()=>r({w:s.clientWidth,h:s.clientHeight});d();let a=new ResizeObserver(d);return a.observe(s),()=>a.disconnect()},[]);let i=n.w&&n.h?Math.min(n.w/t.width,n.h/t.height):1;return l("div",{ref:o,className:"cnv-html-screen",children:l("iframe",{title:"html-preview",sandbox:"allow-scripts allow-forms",srcDoc:e,style:{width:t.width,height:t.height,zoom:i,visibility:n.w?"visible":"hidden"}},`${t.id}-${t.width}x${t.height}`)})}function Y({ctx:e}){let t=!!e.node.metadata?.editing,o=!!e.node.metadata?.sizing,n=g(e.node.metadata),r=P(e);return m(()=>{if(!n||t)return;let i=p(n),s=e.node.width-i.width,d=e.node.height-i.height;s>=12&&s<=32&&d>=20&&d<=50&&e.updateNode(i)},[e.node.id]),t?l(K,{ctx:e,value:I(e)}):n?w("div",{"data-canvas-no-zoom":!0,className:"cnv-html-stage",style:{"--html-fill":e.theme.node.fill,"--html-text":e.theme.node.text,"--html-muted":e.theme.node.muted},children:[l(Z,{html:r,viewport:n}),o?l(G,{ctx:e,viewport:n}):null]}):l("div",{"data-canvas-no-zoom":!0,style:{position:"relative",height:"100%",width:"100%"},children:l("iframe",{title:"html-preview",sandbox:"allow-scripts allow-forms",srcDoc:r,style:{height:"100%",width:"100%",border:0,borderRadius:16,background:"#fff",display:"block"}})})}function q(e){let t=!!e.node.metadata?.editing,o=!!e.node.metadata?.capturing,n=!!e.node.metadata?.sizing,r=g(e.node.metadata),i=r?.id||"";return[{id:"html-toggle-edit",title:t?"\u9884\u89C8\u6E32\u67D3\u7ED3\u679C":"\u7F16\u8F91 HTML \u6E90\u7801",label:t?"\u9884\u89C8":"\u7F16\u8F91",icon:t?"\u{1F441}":"\u270E",active:t,onClick:()=>e.updateMetadata({editing:!t,sizing:!1})},...y.map(s=>({id:`html-viewport-${s.id}`,title:`${s.label}\u753B\u677F\uFF0C\u9ED8\u8BA4 ${s.width}\xD7${s.height}\uFF0C\u53EF\u518D\u6539\u5C3A\u5BF8`,label:s.label,icon:s.id==="desktop"?"\u{1F5A5}":s.id==="tablet"?"\u25A3":"\u{1F4F1}",active:i===s.id,onClick:()=>b(e,s.id)})),{id:"html-size",title:"\u753B\u677F CSS \u5C3A\u5BF8\uFF0C\u53EF\u9009\u624B\u673A/\u5E73\u677F/\u7535\u8111\u5E38\u7528\u5206\u8FA8\u7387\u6216\u81EA\u5B9A\u4E49",label:r?`${r.width}\xD7${r.height}`:"\u5C3A\u5BF8",icon:"\u26F6",active:n,onClick:()=>{r||b(e,"desktop"),e.updateMetadata({sizing:!n,editing:!1})}},{id:"html-export",title:"\u4E0B\u8F7D\u72EC\u7ACB HTML \u6E90\u6587\u4EF6",label:"\u5BFC\u51FA",icon:"\u2B07",onClick:()=>M(P(e),e.node.title)},{id:"html-capture",title:"\u6309\u5F53\u524D\u753B\u677F\u622A\u5C4F\u5230\u56FE\u7247\u8282\u70B9",label:o?"\u51FA\u56FE\u4E2D":"\u51FA\u56FE",icon:"\u{1F4F7}",active:o,onClick:()=>{j(e)}}]}var xe={id:"html",name:"HTML \u8282\u70B9",version:"1.5.0",description:"\u6C99\u7BB1\u6E32\u67D3 HTML\uFF0C\u53EF\u6309\u7535\u8111/\u5E73\u677F/\u624B\u673A\u6BD4\u4F8B\u9884\u89C8\u3001\u5BFC\u51FA\u6E90\u6587\u4EF6\u3001\u622A\u5C4F\u51FA\u56FE",css:L,nodes:[{type:"html:render",title:"HTML",icon:"\u{1F310}",description:"\u6C99\u7BB1\u6E32\u67D3 HTML\uFF0C\u53EF\u6309\u7535\u8111/\u5E73\u677F/\u624B\u673A\u6BD4\u4F8B\u9884\u89C8\u5E76\u5BFC\u51FA\u6E90\u6587\u4EF6\u548C\u9884\u89C8\u56FE",defaultSize:p(k),defaultMetadata:{content:N,viewport:"desktop",viewportWidth:k.width,viewportHeight:k.height},minimapColor:"#ec4899",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,promptPrefix:"\u6309\u7528\u6237\u7684\u8981\u6C42\u4FEE\u6539\u8FD9\u4E2A HTML \u9875\u9762\u3002\u53EA\u8F93\u51FA\u5B8C\u6574 HTML \u6587\u6863\uFF0C\u4E0D\u8981\u4EE3\u7801\u56F4\u680F\u3002"},interactionToggle:!0,forceInteractive:e=>!!(e.metadata?.editing||e.metadata?.sizing),keepAspectRatio:e=>!!g(e.metadata)&&!e.metadata?.editing,Content:Y,toolbar:q}]};export{xe as default};
