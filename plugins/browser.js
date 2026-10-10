function A(){let t=globalThis.InfiniteCanvasRuntime;if(!t)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return t}function m(){return A().React}var g=((...t)=>m().useState(...t)),h=((...t)=>m().useEffect(...t));var R=((...t)=>m().useCallback(...t)),w=((...t)=>m().useRef(...t));var L=`.cnv-br {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 16px;
    background: #0f172a;
    color: #e2e8f0;
}
.cnv-br-bar {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    background: #111827;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.cnv-br-bar button {
    flex: 0 0 auto;
    height: 28px;
    min-width: 28px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
}
.cnv-br-bar button:hover {
    background: rgba(255, 255, 255, 0.08);
}
.cnv-br-bar input {
    flex: 1 1 auto;
    min-width: 0;
    height: 28px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: #0b1220;
    color: inherit;
    padding: 0 10px;
    font-size: 12px;
    outline: none;
}
.cnv-br-view {
    flex: 1 1 auto;
    min-height: 0;
    position: relative;
    background: #020617;
}
.cnv-br-view img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
}
.cnv-br-empty {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    text-align: center;
    font-size: 13px;
    line-height: 1.45;
    color: #94a3b8;
}
.cnv-br-cursor {
    position: absolute;
    width: 14px;
    height: 14px;
    margin: -2px 0 0 -2px;
    border-radius: 2px 10px 10px 10px;
    background: #38bdf8;
    box-shadow: 0 0 0 1px #0f172a, 0 6px 16px rgba(14, 165, 233, 0.45);
    pointer-events: none;
    transform-origin: 0 0;
}
.cnv-br-ime {
    position: absolute;
    left: 12px;
    bottom: 12px;
    max-width: calc(100% - 24px);
    padding: 6px 10px;
    border-radius: 8px;
    background: #111827;
    border: 1px solid rgba(56, 189, 248, 0.45);
    font-size: 14px;
    line-height: 1.4;
    pointer-events: none;
    white-space: pre-wrap;
    word-break: break-all;
}
.cnv-br-hint {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    padding: 6px 8px;
    border-radius: 8px;
    background: rgba(15, 23, 42, 0.82);
    font-size: 11px;
    line-height: 1.4;
    color: #94a3b8;
    pointer-events: none;
    text-align: center;
}
.cnv-br-hidden {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 1px;
    height: 1px;
}
`;var j=Symbol.for("infinite-canvas.jsx.fragment");function H(t,n,o){let i=m(),c=t===j?i.Fragment:t,l=o===void 0?n:{...n??{},key:o};return i.createElement(c,l)}function d(t,n,o){return H(t,n,o)}var x=d;var v="http://127.0.0.1:17371";function O({ctx:t}){let n=String(t.node.metadata?.sessionId||""),o=String(t.node.metadata?.url||t.node.metadata?.content||""),i=t.isSelected,c=w(null),l=w(null),M=w(null),k=w(!1),N=w(0),[C,E]=g(o==="about:blank"?"":o),[y,p]=g(""),[T,$]=g(""),[P,J]=g({x:.5,y:.5,visible:!1}),[D,U]=g(!1);h(()=>{o&&o!=="about:blank"&&E(o)},[o]),h(()=>{let e=!1,u=r=>{let a=String(r.status||""),b=String(r.message||"");a==="installing"?p(b||"\u6B63\u5728\u51C6\u5907\u672C\u673A\u6D4F\u89C8\u5668\uFF0C\u56FD\u5185\u955C\u50CF\u4F18\u5148\uFF0C\u5927\u7EA6 500MB\uFF0C\u53EA\u9700\u4E00\u6B21\u2026"):a==="error"?p(b||"\u6D4F\u89C8\u5668\u8FD8\u6CA1\u51C6\u5907\u597D\u3002\u5B89\u88C5 Chrome \u540E\u91CD\u65B0\u6253\u5F00\u8FD9\u4E2A\u8282\u70B9\u5373\u53EF\u3002"):a==="ready"&&!n?p(b||"\u6B63\u5728\u6253\u5F00\u672C\u673A\u6D4F\u89C8\u5668\u2026"):!n&&b&&p(b)},s=window.setInterval(()=>{fetch(`${v}/agent/browser/status`).then(r=>r.json()).then(r=>{e||u(r)}).catch(()=>{})},1200);return(async()=>{try{if(!(await fetch(`${v}/health`)).ok)throw new Error("offline");if(!n){p("\u6B63\u5728\u6253\u5F00\u672C\u673A\u6D4F\u89C8\u5668\u3002\u5DF2\u5B89\u88C5 Chrome / Edge / 360 \u65F6\u4E0D\u7528\u4E0B\u8F7D\u3002");let a=await f("/agent/browser/open",{url:o||"about:blank",width:Math.round(l.current?.clientWidth||t.node.width),height:Math.round(Math.max(240,l.current?.clientHeight||t.node.height-44))});if(e)return;t.updateMetadata({sessionId:a.sessionId,url:a.url,content:a.url||o||"about:blank"}),a.status==="installing"?u(a):p("");return}p("")}catch(r){e||p(r instanceof Error&&/下载|Chrome/.test(r.message)?r.message:"\u672C\u673A\u52A9\u624B\u672A\u8FDE\u63A5\u3002\u6253\u5F00 Open CLAI Helper \u540E\u4F1A\u5F39\u51FA\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u753B\u5E03\u4E0A\u663E\u793A\u9884\u89C8\u3002")}})(),()=>{e=!0,window.clearInterval(s)}},[n,o,t.node.width,t.node.height]),h(()=>{if(!n)return;let e=`${v}/agent/browser/frame?sessionId=${encodeURIComponent(n)}&t=${Date.now()}`,u=c.current;if(u&&(u.src=e,U(!0)),!i)return;let s=new EventSource(`${v}/agent/browser/watch?sessionId=${encodeURIComponent(n)}`);return s.addEventListener("frame",r=>{let a=X(r.data),b=`${v}/agent/browser/frame?sessionId=${encodeURIComponent(n)}&seq=${a.seq||Date.now()}`;c.current&&(c.current.src=b),U(!0)}),s.addEventListener("meta",r=>{let a=X(r.data);a.url&&a.url!==t.node.metadata?.url&&(t.updateMetadata({url:a.url,content:a.url}),(!document.activeElement||document.activeElement.tagName!=="INPUT")&&E(a.url==="about:blank"?"":a.url)),a.title&&a.title!==t.node.title&&t.updateNode({title:a.title}),a.cursor&&J(a.cursor),a.status==="installing"?p("\u6B63\u5728\u51C6\u5907\u672C\u673A\u6D4F\u89C8\u5668\uFF0C\u56FD\u5185\u955C\u50CF\u4F18\u5148\uFF0C\u5927\u7EA6 500MB\uFF0C\u53EA\u9700\u4E00\u6B21\u2026"):(y.startsWith("\u6B63\u5728")||y.startsWith("\u672C\u673A\u6D4F\u89C8\u5668\u6682\u65F6"))&&p("")}),s.onerror=()=>p(r=>r||"\u672C\u673A\u6D4F\u89C8\u5668\u6682\u65F6\u8FDE\u4E0D\u4E0A\uFF0C\u9009\u4E2D\u8282\u70B9\u4F1A\u81EA\u52A8\u91CD\u8BD5\u3002"),()=>s.close()},[n,i]),h(()=>{if(!n||!l.current)return;let e=l.current,u=0,s=new ResizeObserver(()=>{window.clearTimeout(u),u=window.setTimeout(()=>{f("/agent/browser/action",{sessionId:n,action:"viewport",width:Math.max(320,e.clientWidth),height:Math.max(240,e.clientHeight)}).catch(()=>{})},180)});return s.observe(e),()=>{window.clearTimeout(u),s.disconnect()}},[n]);let S=R((e,u)=>{if(!n||!i)return;if(u==="mousemove"){let r=Date.now();if(r-N.current<32)return;N.current=r}let s=l.current?.getBoundingClientRect();!s||!s.width||!s.height||(f("/agent/browser/action",{sessionId:n,action:"mouse",type:u,button:e.button,x:(e.clientX-s.left)/s.width,y:(e.clientY-s.top)/s.height,clickCount:e.detail||1}).catch(()=>{}),M.current?.focus())},[n,i]),F=R(()=>{if(!n)return;let e=C.trim()||"about:blank";f("/agent/browser/action",{sessionId:n,action:"navigate",url:e}).catch(()=>{})},[n,C]);return x("div",{className:"cnv-br","data-canvas-no-zoom":!0,children:[x("div",{className:"cnv-br-bar",children:[d("button",{type:"button",title:"\u540E\u9000",onMouseDown:e=>e.stopPropagation(),onClick:()=>n&&void f("/agent/browser/action",{sessionId:n,action:"back"}),children:"\u2039"}),d("button",{type:"button",title:"\u5237\u65B0",onMouseDown:e=>e.stopPropagation(),onClick:()=>n&&void f("/agent/browser/action",{sessionId:n,action:"reload"}),children:"\u21BB"}),d("input",{value:C,placeholder:"\u8F93\u5165\u7F51\u5740\uFF0C\u56DE\u8F66\u6253\u5F00",onChange:e=>E(e.target.value),onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),F())},onMouseDown:e=>e.stopPropagation()})]}),x("div",{ref:l,className:"cnv-br-view",onPointerDown:e=>{e.stopPropagation(),S(e,e.detail>1?"click":"mousedown")},onPointerMove:e=>{e.buttons&&S(e,"mousemove")},onPointerUp:e=>S(e,"mouseup"),onWheel:e=>{e.stopPropagation(),!(!n||!i)&&f("/agent/browser/action",{sessionId:n,action:"wheel",dx:e.deltaX,dy:e.deltaY,x:.5,y:.5}).catch(()=>{})},onContextMenu:e=>e.preventDefault(),children:[d("img",{ref:c,alt:t.node.title||"browser",draggable:!1}),P.visible?d("div",{className:"cnv-br-cursor",style:{left:`${P.x*100}%`,top:`${P.y*100}%`}}):null,T?d("div",{className:"cnv-br-ime",children:T}):null,D&&!y?d("div",{className:"cnv-br-hint",children:"\u9884\u89C8 \xB7 \u8BF7\u5728\u5F39\u51FA\u7684\u6D4F\u89C8\u5668\u7A97\u53E3\u91CC\u64CD\u4F5C"}):null,!D||y?x("div",{className:"cnv-br-empty",children:[d("span",{children:"\u{1F310}"}),d("span",{children:y||"\u4F1A\u5F39\u51FA\u672C\u673A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u8BF7\u5728\u7A97\u53E3\u91CC\u64CD\u4F5C\u3002\u8FD9\u91CC\u662F\u9884\u89C8\u3002\u7535\u8111\u5DF2\u88C5 Chrome\u3001Edge \u6216 360 \u65F6\u4E0D\u7528\u4E0B\u8F7D\u3002"})]}):null,d("textarea",{ref:M,className:"cnv-br-hidden",autoCapitalize:"off",autoComplete:"off",spellCheck:!1,onKeyDown:e=>{!n||k.current||(e.key==="Tab"&&e.preventDefault(),f("/agent/browser/action",{sessionId:n,action:"key",type:"keydown",key:e.key}).catch(()=>{}))},onKeyUp:e=>{!n||k.current||f("/agent/browser/action",{sessionId:n,action:"key",type:"keyup",key:e.key}).catch(()=>{})},onCompositionStart:()=>{k.current=!0},onCompositionUpdate:e=>$(e.data||""),onCompositionEnd:e=>{k.current=!1;let u=e.data||"";$(""),n&&u&&f("/agent/browser/action",{sessionId:n,action:"insertText",text:u}).catch(()=>{})}})]})]})}function X(t){try{return JSON.parse(t)}catch{return{}}}async function f(t,n){let o=await fetch(`${v}${t}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}),i=await o.json().catch(()=>({}));if(!o.ok)throw new Error(String(i.error||o.status));return i}function I(t,n,o,i){t.applyOps([{type:"add_node",nodeType:n,title:o,x:t.node.position.x+t.node.width+48,y:t.node.position.y,metadata:{content:i,status:n==="image"?"success":void 0}}])}function W(t){let n=String(t.node.metadata?.sessionId||""),o=i=>{n&&f("/agent/browser/extract",{sessionId:n,kind:i}).then(c=>{let l=String(c.title||t.node.title||"\u9875\u9762");i==="image"&&c.dataUrl?I(t,"image",`${l} \u622A\u56FE`,String(c.dataUrl)):i==="sheet"&&c.dataUrl?I(t,"sheet:preview",`${l} \u8868\u683C`,String(c.dataUrl)):I(t,"markdown:doc",l,String(c.text||""))}).catch(()=>{})};return[{id:"br-shot",title:"\u628A\u5F53\u524D\u753B\u9762\u653E\u5230\u56FE\u7247\u8282\u70B9",label:"\u51FA\u56FE",icon:"\u29C9",onClick:()=>o("image")},{id:"br-md",title:"\u63D0\u53D6\u9875\u9762\u6587\u6848",label:"\u6587\u6848",icon:"\xB6",onClick:()=>o("markdown")},{id:"br-sheet",title:"\u63D0\u53D6\u9875\u9762\u8868\u683C",label:"\u8868\u683C",icon:"\u25A6",onClick:()=>o("sheet")}]}var ce={id:"browser",name:"\u6D4F\u89C8\u5668",version:"1.0.0",description:"\u5F39\u51FA\u672C\u673A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u753B\u5E03\u4E0A\u663E\u793A\u9884\u89C8",css:L,nodes:[{type:"browser:view",title:"\u6D4F\u89C8\u5668",icon:"\u{1F310}",description:"\u5F39\u51FA\u672C\u673A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u753B\u5E03\u8282\u70B9\u540C\u6B65\u9884\u89C8",defaultSize:{width:880,height:560},defaultMetadata:{content:"about:blank",url:"about:blank"},minimapColor:"#38bdf8",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,writeBackKey:"url",promptPrefix:"\u7528\u6237\u60F3\u6539\u8FD9\u4E2A\u6D4F\u89C8\u5668\u8282\u70B9\u6253\u5F00\u7684\u9875\u9762\u3002\u53EA\u8F93\u51FA\u4E00\u4E2A\u4EE5 http:// \u6216 https:// \u5F00\u5934\u7684\u7F51\u5740\uFF0C\u4E0D\u8981\u89E3\u91CA\u3002"},interactionToggle:!0,forceInteractive:(t,n)=>!!n?.isSelected,Content:O,toolbar:W}]};export{ce as default};
