function g(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function s(){return g().React}var c=((...e)=>s().useState(...e));var l=((...e)=>s().useMemo(...e));var p=((...e)=>s().useRef(...e));var h=Symbol.for("infinite-canvas.jsx.fragment");function R(e,t,a){let r=s(),i=e===h?r.Fragment:e,u=a===void 0?t:{...t??{},key:a};return r.createElement(i,u)}function n(e,t,a){return R(e,t,a)}var d=n;var w=12,k=20,y=`<!doctype html>
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
</html>`;function v({ctx:e,value:t}){let a=p(null),r=l(()=>Math.max(1,t.split(`
`).length),[t]),[i,u]=c(0),f={fontFamily:"monospace",fontSize:w,lineHeight:`${k}px`,boxSizing:"border-box"};return d("div",{"data-canvas-no-zoom":!0,style:{height:"100%",width:"100%",display:"flex",overflow:"hidden",borderRadius:16,background:e.theme.node.fill},onMouseDown:o=>o.stopPropagation(),children:[n("div",{ref:a,"aria-hidden":!0,style:{...f,flex:"0 0 auto",padding:"16px 8px 16px 12px",textAlign:"right",color:e.theme.node.placeholder,background:`${e.theme.toolbar.panel}66`,borderRight:`1px solid ${e.theme.node.stroke}`,overflow:"hidden",userSelect:"none",whiteSpace:"pre"},children:n("div",{style:{transform:`translateY(${-i}px)`},children:Array.from({length:r},(o,m)=>n("div",{children:m+1},m))})}),n("textarea",{autoFocus:!0,value:t,placeholder:"<div>Hello, {{input}}</div>",spellCheck:!1,wrap:"off",onChange:o=>e.updateMetadata({content:o.target.value}),onScroll:o=>u(o.currentTarget.scrollTop),onMouseDown:o=>o.stopPropagation(),onWheel:o=>o.stopPropagation(),style:{...f,flex:"1 1 auto",minWidth:0,height:"100%",resize:"none",background:"transparent",padding:"16px 16px 16px 12px",outline:"none",border:"none",color:e.theme.node.text,whiteSpace:"pre",overflow:"auto"}})]})}function b({ctx:e}){let t=e.node.metadata?.content||y,a=!!e.node.metadata?.editing,r=l(()=>e.getUpstream().map(u=>u.metadata?.content).filter(Boolean).join(`
`),[e]),i=t.replace(/\{\{\s*input\s*\}\}/g,r);return a?n(v,{ctx:e,value:t}):t?n("div",{"data-canvas-no-zoom":!0,style:{position:"relative",height:"100%",width:"100%"},children:n("iframe",{title:"html-preview",sandbox:"allow-scripts allow-forms",srcDoc:i,style:{height:"100%",width:"100%",border:0,borderRadius:16,background:"#fff",display:"block"}})}):d("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,color:e.theme.node.placeholder},children:[n("span",{style:{fontSize:26},children:"</>"}),n("span",{style:{fontSize:13},children:"\u9009\u4E2D\u8282\u70B9,\u70B9\u4E0A\u65B9\u5DE5\u5177\u6761\u7684 \u270E \u7F16\u8F91 HTML"})]})}var j={id:"html",name:"HTML \u8282\u70B9",version:"1.2.0",description:"\u6C99\u7BB1 iframe \u6E32\u67D3 HTML,\u652F\u6301 {{input}} \u6CE8\u5165\u4E0A\u6E38\u6587\u672C",nodes:[{type:"html:render",title:"HTML",icon:"\u{1F310}",description:"\u6C99\u7BB1\u6E32\u67D3 HTML",defaultSize:{width:420,height:320},defaultMetadata:{content:y},minimapColor:"#ec4899",hidePanel:!0,interactionToggle:!0,forceInteractive:e=>!!e.metadata?.editing,Content:b,toolbar:e=>{let t=!!e.node.metadata?.editing;return[{id:"html-toggle-edit",title:t?"\u9884\u89C8\u6E32\u67D3\u7ED3\u679C":"\u7F16\u8F91 HTML \u6E90\u7801",label:t?"\u9884\u89C8":"\u7F16\u8F91",icon:t?"\u{1F441}":"\u270E",active:t,onClick:()=>e.updateMetadata({editing:!t})}]}}]};export{j as default};
