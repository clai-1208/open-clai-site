function V(){let t=globalThis.InfiniteCanvasRuntime;if(!t)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return t}function x(){return V().React}var k=((...t)=>x().useState(...t)),h=((...t)=>x().useEffect(...t));var w=((...t)=>x().useCallback(...t)),b=((...t)=>x().useRef(...t));var Z=`.cnv-br {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0;
    background: #0f172a;
    color: #e2e8f0;
}
.node-element:has(.cnv-br) > .rounded-3xl,
.node-element:has(.cnv-br) .rounded-\\[inherit\\] {
    border-radius: 0 !important;
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
    touch-action: none;
    cursor: grab;
    user-select: none;
}
.cnv-br-view.is-live {
    cursor: default;
}
.cnv-br-view img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    user-select: none;
    -webkit-user-drag: none;
}
.cnv-br-empty {
    position: absolute;
    inset: 0;
    pointer-events: none;
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
.cnv-br-gate {
    position: absolute;
    inset: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px;
    background: rgba(2, 6, 23, 0.48);
    pointer-events: none;
    text-align: center;
}
.cnv-br-gate span {
    max-width: 240px;
    color: #cbd5e1;
    font-size: 12px;
    line-height: 1.45;
}
.cnv-br-take,
.cnv-br-release {
    pointer-events: auto;
    border: 0;
    cursor: pointer;
    font-weight: 700;
}
.cnv-br-take {
    height: 40px;
    padding: 0 18px;
    border-radius: 999px;
    background: #38bdf8;
    color: #082f49;
    font-size: 14px;
    box-shadow: 0 10px 28px rgba(14, 165, 233, 0.4);
}
.cnv-br-take:hover {
    background: #7dd3fc;
}
.cnv-br-release,
.cnv-br-release-bar {
    height: 28px;
    padding: 0 10px;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.9);
    color: #e2e8f0;
    font-size: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
}
.cnv-br-release-bar {
    flex: 0 0 auto;
}
.cnv-br-release:hover {
    background: #1e293b;
}
.cnv-br-hidden {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 1px;
    height: 1px;
}
`;var pe=Symbol.for("infinite-canvas.jsx.fragment");function fe(t,n,o){let s=x(),i=t===pe?s.Fragment:t,d=o===void 0?n:{...n??{},key:o};return s.createElement(i,d)}function m(t,n,o){return fe(t,n,o)}var C=m;function re(){try{return{origin:(localStorage.getItem("canvas-agent-url")||"http://127.0.0.1:17371").replace(/\/$/,""),token:localStorage.getItem("canvas-agent-token")||""}}catch{return{origin:"http://127.0.0.1:17371",token:""}}}function R(t,n={}){let{origin:o,token:s}=re(),i=new URL(t,`${o}/`);s&&i.searchParams.set("token",s);for(let[d,p]of Object.entries(n))i.searchParams.set(d,String(p));return i.toString()}function oe(){let{token:t}=re();return{"content-type":"application/json",...t?{"x-canvas-agent-token":t}:{}}}function N(t){let n=String(t||"").trim();return!n||n==="about:blank"||/^chrome(-error)?:/i.test(n)||n==="0.0.0.1"?"":n}function y(){try{return window.openClaiHelper?.browser||null}catch{return null}}function ge(){try{return window.openClaiHelper?.canvasShell?!0:sessionStorage.getItem("open-clai-canvas-shell")==="1"}catch{return!1}}function be({ctx:t}){let n=String(t.node.metadata?.sessionId||""),o=String(t.node.metadata?.url||t.node.metadata?.content||""),s=t.isSelected,i=!!t.node.metadata?.interactive,d=b(null),p=b(null),L=b(null),P=b(!1),J=b(0),[H,E]=k(N(o)),[S,f]=k(""),[W,j]=k(""),[T,ae]=k({x:.5,y:.5,visible:!1}),[K,U]=k(!1),[Y,ie]=k(""),a=ge(),O=b(Promise.resolve()),M=b(n),I=b(o),se=b(i),$=b(async e=>({url:e}));M.current=n,I.current=o,se.current=i;let q=w(()=>({width:Math.round(p.current?.clientWidth||t.node.width),height:Math.round(Math.max(240,p.current?.clientHeight||t.node.height-44))}),[t.node.height,t.node.width]),X=w(e=>{let r=O.current.then(()=>v("/agent/browser/open",{sessionId:M.current||void 0,url:e,...q(),embed:a}).then(u=>(t.updateMetadata({sessionId:u.sessionId,url:u.url||e,content:u.url||e}),u)));return O.current=r.then(()=>{},()=>{}),r},[t,a,q]);$.current=X,h(()=>{let e=N(o);e&&E(e)},[o]),h(()=>{let e=!1,r=c=>{let l=String(c.status||""),g=String(c.message||"");l==="installing"?f(g||"\u6B63\u5728\u51C6\u5907\u672C\u673A\u6D4F\u89C8\u5668\uFF0C\u56FD\u5185\u955C\u50CF\u4F18\u5148\uFF0C\u5927\u7EA6 500MB\uFF0C\u53EA\u9700\u4E00\u6B21\u2026"):l==="error"&&f(g||"\u6D4F\u89C8\u5668\u8FD8\u6CA1\u51C6\u5907\u597D\u3002\u5B89\u88C5 Chrome \u540E\u91CD\u65B0\u6253\u5F00\u8FD9\u4E2A\u8282\u70B9\u5373\u53EF\u3002")};if(a)return f(y()?"":"\u8BF7\u5173\u6389\u52A9\u624B\u7A97\u53E3\u518D\u6253\u5F00\u4E00\u6B21\uFF0C\u624D\u80FD\u5728\u8282\u70B9\u91CC\u76F4\u63A5\u64CD\u4F5C\u7F51\u9875\u3002"),()=>{e=!0};let u=window.setInterval(()=>{fetch(R("/agent/browser/status"),{headers:oe()}).then(c=>c.json()).then(c=>{e||r(c)}).catch(()=>{})},1200);return n?(f(""),()=>{e=!0,window.clearInterval(u)}):((async()=>{try{if(!(await fetch(R("/health"))).ok)throw new Error("offline");f(a?"\u6B63\u5728\u6253\u5F00\u9875\u9762\u2026":"\u6B63\u5728\u6253\u5F00\u672C\u673A\u6D4F\u89C8\u5668\u3002\u5DF2\u5B89\u88C5 Chrome / Edge / 360 \u65F6\u4E0D\u7528\u4E0B\u8F7D\u3002"),await $.current(N(I.current)||"about:blank"),e||f("")}catch(c){e||f(we(c,a))}})(),()=>{e=!0,window.clearInterval(u)})},[a,n]),h(()=>{if(a||!n)return;let e=R("/agent/browser/frame",{sessionId:n,t:Date.now()}),r=d.current;if(r&&(r.src=e,U(!0)),!a&&!s)return;let u=new EventSource(R("/agent/browser/watch",{sessionId:n}));return u.addEventListener("frame",c=>{let l=ne(c.data),g=R("/agent/browser/frame",{sessionId:n,seq:l.seq||Date.now()});d.current&&(d.current.src=g),U(!0)}),u.addEventListener("meta",c=>{let l=ne(c.data),g=String(l.url||"");(g==="about:blank"||/^https?:\/\//i.test(g))&&g&&g!==t.node.metadata?.url&&(t.updateMetadata({url:g,content:g}),(!document.activeElement||document.activeElement.tagName!=="INPUT")&&E(g==="about:blank"?"":g)),l.title&&l.title!==t.node.title&&t.updateNode({title:l.title}),l.cursor&&ae(l.cursor),l.status==="installing"?f("\u6B63\u5728\u51C6\u5907\u672C\u673A\u6D4F\u89C8\u5668\uFF0C\u56FD\u5185\u955C\u50CF\u4F18\u5148\uFF0C\u5927\u7EA6 500MB\uFF0C\u53EA\u9700\u4E00\u6B21\u2026"):(S.startsWith("\u6B63\u5728")||S.startsWith("\u672C\u673A\u6D4F\u89C8\u5668\u6682\u65F6"))&&f("")}),u.onerror=()=>f(c=>c||(a?"\u672C\u673A\u6D4F\u89C8\u5668\u6682\u65F6\u8FDE\u4E0D\u4E0A\uFF0C\u7A0D\u540E\u4F1A\u81EA\u52A8\u91CD\u8BD5\u3002":"\u672C\u673A\u6D4F\u89C8\u5668\u6682\u65F6\u8FDE\u4E0D\u4E0A\uFF0C\u9009\u4E2D\u8282\u70B9\u4F1A\u81EA\u52A8\u91CD\u8BD5\u3002")),()=>u.close()},[n,s,a]),h(()=>{let e=y();if(!(!a||!e))return e.onEvent(r=>{let u=String(r.url||"");/^https?:\/\//i.test(u)&&u!==I.current&&(I.current=u,E(u),t.updateMetadata({url:u,content:u})),r.title&&r.title!==t.node.title&&t.updateNode({title:r.title})})},[t,a]),h(()=>{a&&f("\u6D4F\u89C8\u5668\u5728\u9879\u76EE\u5DE6\u4E0B\u89D2\u3002")},[a]),h(()=>{let e=y();if(!(!a||!e))return e.onFrame(r=>{r&&(ie(`data:image/jpeg;base64,${r}`),U(!0),f(""))})},[a]),h(()=>{if(a||!n||!p.current)return;let e=p.current,r=0,u=new ResizeObserver(()=>{window.clearTimeout(r),r=window.setTimeout(()=>{v("/agent/browser/action",{sessionId:n,action:"viewport",width:Math.max(320,e.clientWidth),height:Math.max(240,e.clientHeight)}).catch(()=>{})},180)});return u.observe(e),()=>{window.clearTimeout(r),u.disconnect()}},[n]);let G=b(Promise.resolve()),A=w(e=>{G.current=G.current.then(e,e).then(()=>{},()=>{})},[]),D=w((e,r)=>{let u=y(),c=p.current;if(!u||!c)return;let l=c.getBoundingClientRect();!l.width||!l.height||(u.input({type:r,x:(e.clientX-l.left)/l.width*c.clientWidth,y:(e.clientY-l.top)/l.height*c.clientHeight,deltaX:e.deltaX,deltaY:e.deltaY,clickCount:1}),r==="mouseDown"&&L.current?.focus())},[]),B=w((e,r)=>{let u=M.current;if(!u||!i)return;if(r==="mousemove"){let l=Date.now();if(l-J.current<32)return;J.current=l}let c=he(e,d.current,p.current);c&&(A(()=>v("/agent/browser/action",{sessionId:u,action:"mouse",type:r,button:e.button,x:c.x,y:c.y,clickCount:e.detail||1})),r!=="mousemove"&&L.current?.focus())},[i,A]),ue=w(e=>{e.stopPropagation(),e.preventDefault?.()},[]),ce=w(()=>{let e=N(H);if(!e)return;let r=y();if(a&&r){r.navigate(e),t.updateMetadata({url:e,content:e,interactive:!0}),f("");return}(async()=>{f(a?"\u6B63\u5728\u6253\u5F00\u9875\u9762\u2026":"\u6B63\u5728\u6253\u5F00\u672C\u673A\u6D4F\u89C8\u5668\u2026");try{await X(e),f("")}catch(u){f(u instanceof Error?u.message:"\u6253\u4E0D\u5F00\u8FD9\u4E2A\u7F51\u5740")}})()},[H,t,a,X]),F=w(e=>{t.updateMetadata({interactive:e})},[t]);h(()=>{if(!i)return;let e=r=>{r.key==="Escape"&&(r.preventDefault(),r.stopPropagation(),F(!1))};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[i,F]);let _=/正在|失败|未连接|打不开|还没|暂时/.test(S),Q=_?S:K||a&&i?"":a?"\u70B9\u300C\u5F00\u59CB\u4EA4\u4E92\u300D\uFF0C\u5728\u771F\u5B9E\u9875\u9762\u91CC\u70B9\u51FB\u3001\u6EDA\u52A8\u3001\u8F93\u5165\u3002":"\u4F1A\u5F39\u51FA\u672C\u673A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u8BF7\u5728\u7A97\u53E3\u91CC\u64CD\u4F5C\u3002\u8FD9\u91CC\u662F\u9884\u89C8\u3002\u7535\u8111\u5DF2\u88C5 Chrome\u3001Edge \u6216 360 \u65F6\u4E0D\u7528\u4E0B\u8F7D\u3002";return C("div",{className:"cnv-br","data-canvas-no-zoom":!0,children:[C("div",{className:"cnv-br-bar",children:[m("button",{type:"button",title:"\u540E\u9000",onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),onClick:()=>{let e=y();a&&e?e.back():n&&v("/agent/browser/action",{sessionId:n,action:"back"})},children:"\u2039"}),m("button",{type:"button",title:"\u5237\u65B0",onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),onClick:()=>{let e=y();a&&e?e.reload():n&&v("/agent/browser/action",{sessionId:n,action:"reload"})},children:"\u21BB"}),m("input",{value:H,placeholder:"\u8F93\u5165\u7F51\u5740\uFF0C\u56DE\u8F66\u6253\u5F00",onChange:e=>E(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key==="Enter"&&(e.preventDefault(),ce())},onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()}),a?m("button",{type:"button",className:"cnv-br-release cnv-br-release-bar",title:i?"\u9000\u51FA\u4EA4\u4E92\uFF0C\u6539\u56DE\u62D6\u52A8\u8282\u70B9":"\u5728\u8FD9\u4E2A\u9875\u9762\u91CC\u70B9\u51FB\u3001\u6EDA\u52A8\u3001\u8F93\u5165",onPointerDown:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onClick:()=>F(!i),children:i?"\u9000\u51FA\u4EA4\u4E92":"\u5F00\u59CB\u4EA4\u4E92"}):null]}),C("div",{ref:p,className:`cnv-br-view${i?" is-live":""}`,onPointerDownCapture:i?e=>{e.stopPropagation(),e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),a?D(e,"mouseDown"):B(e,"mousedown")}:void 0,onMouseDown:i?ue:void 0,onPointerMove:e=>{i&&(a?D(e,"mouseMove"):e.buttons&&B(e,"mousemove"))},onPointerUp:e=>{i&&(a?D(e,"mouseUp"):B(e,"mouseup"))},onWheel:e=>{if(!i)return;if(e.stopPropagation(),e.preventDefault(),a){D(e,"mouseWheel");return}e.stopPropagation(),e.preventDefault();let r=M.current;r&&A(()=>v("/agent/browser/action",{sessionId:r,action:"wheel",dx:e.deltaX,dy:e.deltaY,x:.5,y:.5}))},onContextMenu:e=>e.preventDefault(),children:[m("img",{ref:d,src:a&&Y?Y:void 0,alt:t.node.title||"browser",draggable:!1}),T.visible?m("div",{className:"cnv-br-cursor",style:{left:`${T.x*100}%`,top:`${T.y*100}%`}}):null,W?m("div",{className:"cnv-br-ime",children:W}):null,K&&!_&&!a?m("div",{className:"cnv-br-hint",children:"\u9884\u89C8 \xB7 \u8BF7\u5728\u5F39\u51FA\u7684\u6D4F\u89C8\u5668\u7A97\u53E3\u91CC\u64CD\u4F5C"}):null,Q?C("div",{className:"cnv-br-empty",children:[m("span",{children:"\u{1F310}"}),m("span",{children:Q})]}):null,m("textarea",{ref:L,className:"cnv-br-hidden",autoCapitalize:"off",autoComplete:"off",spellCheck:!1,onKeyDown:e=>{if(!(!i||P.current)){if(e.key==="Tab"&&e.preventDefault(),a){let r=y();e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey?r?.input({type:"char",keyCode:e.key}):r?.input({type:"keyDown",keyCode:ee(e.key)});return}n&&v("/agent/browser/action",{sessionId:n,action:"key",type:"keydown",key:e.key}).catch(()=>{})}},onKeyUp:e=>{if(!(!i||P.current)){if(a){y()?.input({type:"keyUp",keyCode:ee(e.key)});return}n&&v("/agent/browser/action",{sessionId:n,action:"key",type:"keyup",key:e.key}).catch(()=>{})}},onCompositionStart:()=>{P.current=!0},onCompositionUpdate:e=>j(e.data||""),onCompositionEnd:e=>{P.current=!1;let r=e.data||"";j(""),n&&i&&r&&v("/agent/browser/action",{sessionId:n,action:"insertText",text:r}).catch(()=>{})}})]})]})}function ee(t){return{ArrowLeft:"Left",ArrowRight:"Right",ArrowUp:"Up",ArrowDown:"Down"," ":"Space",Escape:"Esc"}[t]||t}function te(t){return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0}function me(t){if(!t)return null;let n=t.getBoundingClientRect(),o=t.naturalWidth,s=t.naturalHeight;if(!n.width||!n.height)return null;if(!o||!s)return n;let i=Math.min(n.width/o,n.height/s),d=o*i,p=s*i;return{left:n.left+(n.width-d)/2,top:n.top+(n.height-p)/2,width:d,height:p}}function he(t,n,o){let s=me(n)||o?.getBoundingClientRect();return!s||!s.width||!s.height?null:{x:te((t.clientX-s.left)/s.width),y:te((t.clientY-s.top)/s.height)}}function ne(t){try{return JSON.parse(t)}catch{return{}}}function we(t,n){let o=t instanceof Error?t.message:String(t);return/Failed to fetch|NetworkError|Load failed|offline/i.test(o)?n?"\u672C\u673A\u52A9\u624B\u672A\u8FDE\u63A5\u3002\u6253\u5F00 Open CLAI Helper \u540E\u5373\u53EF\u5728\u8FD9\u4E2A\u8282\u70B9\u91CC\u6D4F\u89C8\u3002":"\u672C\u673A\u52A9\u624B\u672A\u8FDE\u63A5\u3002\u6253\u5F00 Open CLAI Helper \u540E\u4F1A\u5F39\u51FA\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u9879\u76EE\u4E0A\u663E\u793A\u9884\u89C8\u3002":/invalid token/i.test(o)?"\u672C\u673A\u52A9\u624B\u5DF2\u6253\u5F00\uFF0C\u4F46\u8FD9\u4E2A\u9879\u76EE\u9875\u8FD8\u6CA1\u8FDE\u4E0A\u3002\u70B9\u53F3\u4FA7\u672C\u673A\u52A9\u624B\u300C\u8FDE\u63A5\u300D\u540E\u518D\u8BD5\u3002":/ProcessSingleton|profile directory|SingletonLock/i.test(o)?"\u672C\u673A\u6D4F\u89C8\u5668\u8FD8\u88AB\u5360\u7528\uFF0C\u6B63\u5728\u91CD\u65B0\u6253\u5F00\u3002\u8BF7\u518D\u8BD5\u4E00\u6B21\u3002":/下载|Chrome|Chromium|浏览器/.test(o)?o:o||(n?"\u9875\u9762\u6682\u65F6\u6253\u4E0D\u5F00":"\u672C\u673A\u6D4F\u89C8\u5668\u6682\u65F6\u6253\u4E0D\u5F00")}async function v(t,n){let o=await fetch(R(t),{method:"POST",headers:oe(),body:JSON.stringify(n)}),s=await o.json().catch(()=>({}));if(!o.ok)throw new Error(String(s.error||o.status));return s}function z(t,n,o,s){t.applyOps([{type:"add_node",nodeType:n,title:o,x:t.node.position.x+t.node.width+48,y:t.node.position.y,metadata:{content:s,status:n==="image"?"success":void 0}}])}function ve(t){let n=String(t.node.metadata?.sessionId||""),o=i=>{n&&v("/agent/browser/extract",{sessionId:n,kind:i}).then(d=>{let p=String(d.title||t.node.title||"\u9875\u9762");i==="image"&&d.dataUrl?z(t,"image",`${p} \u622A\u56FE`,String(d.dataUrl)):i==="sheet"&&d.dataUrl?z(t,"sheet:preview",`${p} \u8868\u683C`,String(d.dataUrl)):z(t,"markdown:doc",p,String(d.text||""))}).catch(()=>{})},s=!!t.node.metadata?.interactive;return[{id:"br-interact",title:s?"\u9000\u51FA\u4EA4\u4E92\uFF0C\u6539\u56DE\u62D6\u52A8\u8282\u70B9":"\u5F00\u59CB\u5728\u8FD9\u4E2A\u8282\u70B9\u91CC\u70B9\u51FB\u9875\u9762",label:s?"\u9000\u51FA\u4EA4\u4E92":"\u4EA4\u4E92",icon:s?"\u270B":"\u{1F5B1}",active:s,onClick:()=>t.updateMetadata({interactive:!s})},{id:"br-shot",title:"\u628A\u5F53\u524D\u753B\u9762\u653E\u5230\u56FE\u7247\u8282\u70B9",label:"\u51FA\u56FE",icon:"\u29C9",onClick:()=>o("image")},{id:"br-md",title:"\u63D0\u53D6\u9875\u9762\u6587\u6848",label:"\u6587\u6848",icon:"\xB6",onClick:()=>o("markdown")},{id:"br-sheet",title:"\u63D0\u53D6\u9875\u9762\u8868\u683C",label:"\u8868\u683C",icon:"\u25A6",onClick:()=>o("sheet")}]}var Be={id:"browser",name:"\u6D4F\u89C8\u5668",version:"1.1.5",description:"\u672C\u673A\u52A9\u624B\u7A97\u53E3\u91CC\u5728\u9879\u76EE\u8282\u70B9\u4E0A\u6D4F\u89C8\uFF1B\u7F51\u9875\u91CC\u5F39\u51FA\u6D4F\u89C8\u5668\u7A97\u53E3\u5E76\u540C\u6B65\u9884\u89C8",css:Z,nodes:[{type:"browser:view",title:"\u6D4F\u89C8\u5668",icon:"\u{1F310}",description:"\u672C\u673A\u52A9\u624B\u7A97\u53E3\u91CC\u76F4\u63A5\u5728\u8282\u70B9\u4E0A\u64CD\u4F5C\uFF0C\u7F51\u9875\u91CC\u5F39\u51FA\u6D4F\u89C8\u5668\u7A97\u53E3",defaultSize:{width:960,height:600},keepAspectRatio:()=>!0,defaultMetadata:{content:"about:blank",url:"about:blank"},minimapColor:"#38bdf8",useBuiltinPanel:{mode:"text",writeBackToSelf:!0,writeBackKey:"url",promptPrefix:"\u7528\u6237\u60F3\u6539\u8FD9\u4E2A\u6D4F\u89C8\u5668\u8282\u70B9\u6253\u5F00\u7684\u9875\u9762\u3002\u53EA\u8F93\u51FA\u4E00\u4E2A\u4EE5 http:// \u6216 https:// \u5F00\u5934\u7684\u7F51\u5740\uFF0C\u4E0D\u8981\u89E3\u91CA\u3002"},interactionToggle:!0,forceInteractive:()=>!0,Content:be,toolbar:ve}]};export{Be as default};
