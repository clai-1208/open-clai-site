function g(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function r(){return g().React}var m=((...e)=>r().useState(...e)),c=((...e)=>r().useEffect(...e));var d=((...e)=>r().useRef(...e));var k=`.cnv-md {
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 16px;
    font-size: 14px;
    line-height: 1.6;
}
.cnv-md h1,
.cnv-md h2,
.cnv-md h3 {
    margin: 0.6em 0 0.3em;
    font-weight: 600;
    line-height: 1.3;
}
.cnv-md h1 {
    font-size: 1.5em;
}
.cnv-md h2 {
    font-size: 1.3em;
}
.cnv-md p {
    margin: 0.5em 0;
}
.cnv-md a {
    color: #6366f1;
    text-decoration: underline;
}
.cnv-md code {
    padding: 0.1em 0.35em;
    border-radius: 4px;
    background: rgba(120, 120, 120, 0.16);
    font-family: monospace;
    font-size: 0.9em;
}
.cnv-md pre {
    padding: 12px;
    border-radius: 8px;
    background: rgba(120, 120, 120, 0.14);
    overflow: auto;
}
.cnv-md pre code {
    padding: 0;
    background: transparent;
}
.cnv-md ul,
.cnv-md ol {
    padding-left: 1.4em;
    margin: 0.5em 0;
}
.cnv-md blockquote {
    margin: 0.5em 0;
    padding-left: 0.8em;
    border-left: 3px solid rgba(120, 120, 120, 0.4);
    opacity: 0.85;
}
.cnv-md img {
    max-width: 100%;
}
`;var x=Symbol.for("infinite-canvas.jsx.fragment");function C(e,n,t){let s=r(),p=e===x?s.Fragment:e,a=t===void 0?n:{...n??{},key:t};return s.createElement(p,a)}function u(e,n,t){return C(e,n,t)}var i,f;function P(){return i?Promise.resolve(i):(f||(f=import("https://esm.sh/marked@14").then(e=>i=e.marked)),f)}var l=`# Markdown \u8282\u70B9

\u5728\u753B\u5E03\u91CC\u5199\u6587\u6863\uFF0C\u6E90\u7801\u4F1A\u6E32\u67D3\u6210\u6392\u7248\u3002

- \u5206\u955C\u8BF4\u660E\u3001\u89D2\u8272\u8BBE\u5B9A
- **\u7C97\u4F53**\u3001\u5217\u8868\u3001\u5F15\u7528

> \u9009\u4E2D\u540E\u70B9 \u270E \u5373\u53EF\u6539\u6E90\u7801

\u9002\u5408\u5F53\u63D0\u793A\u8BCD\u8349\u7A3F\u6216\u5206\u955C\u677F\u3002
`,R=new Map;function h(e){if(!i)return"";let n=e||l,t=R.get(n);return t===void 0&&(t=i.parse(n),R.set(n,t)),t}function b({ctx:e}){let[,n]=m(0),t=d(null),s=d(null);c(()=>{if(i)return;let o=!0;return P().then(()=>o&&n(w=>w+1)),()=>{o=!1}},[]);let p=e.node.metadata?.content||l,a=h(p);return c(()=>{let o=t.current;!o||s.current===a||(o.innerHTML=a,s.current=a)},[a]),u("div",{ref:t,className:"cnv-md","data-canvas-no-zoom":!0,onWheel:o=>o.stopPropagation(),style:{height:"100%",width:"100%",color:e.theme.node.text}})}function E({ctx:e}){let n=e.node.metadata?.content||l;return u("textarea",{autoFocus:!0,value:n,placeholder:"# \u8F93\u5165 Markdown",onChange:t=>e.updateMetadata({content:t.target.value}),onMouseDown:t=>t.stopPropagation(),onPointerDown:t=>t.stopPropagation(),onWheel:t=>t.stopPropagation(),style:{height:"100%",width:"100%",resize:"none",background:e.theme.node.fill,borderRadius:16,boxSizing:"border-box",padding:16,fontFamily:"monospace",fontSize:14,outline:"none",border:"none",color:e.theme.node.text}})}function M({ctx:e}){return e.node.metadata?.editing?u(E,{ctx:e}):u(b,{ctx:e})}var O={id:"markdown",name:"Markdown \u8282\u70B9",version:"1.1.0",description:"\u5728\u753B\u5E03\u4E2D\u7F16\u8F91\u4E0E\u6E32\u67D3 Markdown",css:k,nodes:[{type:"markdown:doc",title:"Markdown",icon:"\u{1F4DD}",description:"\u7F16\u8F91\u4E0E\u6E32\u67D3 Markdown",defaultSize:{width:360,height:300},defaultMetadata:{content:l},minimapColor:"#6366f1",hidePanel:!0,interactionToggle:!0,forceInteractive:e=>!!e.metadata?.editing,resource:e=>({kind:"text",text:e.metadata?.content}),Content:M,toolbar:e=>{let n=!!e.node.metadata?.editing;return[{id:"md-toggle-edit",title:n?"\u9884\u89C8\u6E32\u67D3\u7ED3\u679C":"\u7F16\u8F91 Markdown \u6E90\u7801",label:n?"\u9884\u89C8":"\u7F16\u8F91",icon:n?"\u{1F441}":"\u270E",active:n,onClick:()=>e.updateMetadata({editing:!n})}]}}]};export{O as default};
