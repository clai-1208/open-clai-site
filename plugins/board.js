function vt(){let e=globalThis.InfiniteCanvasRuntime;if(!e)throw new Error("[plugin-sdk] Infinite Canvas \u8FD0\u884C\u65F6\u672A\u5C31\u7EEA:\u8BF7\u5728\u753B\u5E03\u5BBF\u4E3B\u4E2D\u52A0\u8F7D\u672C\u63D2\u4EF6");return e}function ae(){return vt().React}var H=((...e)=>ae().useState(...e)),me=((...e)=>ae().useEffect(...e));var Te=((...e)=>ae().useCallback(...e)),I=((...e)=>ae().useRef(...e));var ge=[{id:"1:1",width:1024,height:1024,label:"1:1"},{id:"4:3",width:1024,height:768,label:"4:3"},{id:"3:4",width:768,height:1024,label:"3:4"},{id:"16:9",width:1280,height:720,label:"16:9"},{id:"9:16",width:720,height:1280,label:"9:16"},{id:"3:2",width:1200,height:800,label:"3:2"},{id:"2:3",width:800,height:1200,label:"2:3"}],yt=[{id:"move",label:"\u79FB",hint:"\u79FB\u52A8 / \u7F29\u653E\u56FE\u5C42\uFF0C\u9760\u8FD1\u8FB9\u7F18\u4F1A\u5438\u9644"},{id:"brush",label:"\u7B14",hint:"\u753B\u7B14"},{id:"eraser",label:"\u64E6",hint:"\u6A61\u76AE"},{id:"line",label:"\u7EBF",hint:"\u76F4\u7EBF"},{id:"rect",label:"\u6846",hint:"\u77E9\u5F62"},{id:"ellipse",label:"\u5706",hint:"\u692D\u5706"},{id:"eyedropper",label:"\u53D6",hint:"\u53D6\u8272"}],Je=[{id:"normal",label:"\u6B63\u5E38"},{id:"multiply",label:"\u6B63\u7247\u53E0\u5E95"},{id:"screen",label:"\u6EE4\u8272"},{id:"overlay",label:"\u53E0\u52A0"},{id:"darken",label:"\u53D8\u6697"},{id:"lighten",label:"\u53D8\u4EAE"},{id:"soft-light",label:"\u67D4\u5149"}];function J(e){return Number.isFinite(e)?Math.min(8192,Math.max(32,Math.round(e))):1024}function mn(e){return Number.isFinite(e)?Math.max(0,Math.min(1,e)):1}function Ie(e){return ge.find(t=>t.id===e)||null}function Be(e,t){return ge.find(a=>a.width===e&&a.height===t)?.id||"custom"}function fe(){return`ly-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function oe(e,t){return{x:0,y:0,width:e,height:t}}function be(e,t,n,a){let s=Math.max(1,e),u=Math.max(1,t),c=Math.min(n/s,a/u),o=Math.max(8,s*c),y=Math.max(8,u*c);return{x:(n-o)/2,y:(a-y)/2,width:o,height:y}}function xt(e,t,n,a){let s=Math.max(n/Math.max(1,e),a/Math.max(1,t)),u=Math.max(8,e*s),c=Math.max(8,t*s);return{x:(n-u)/2,y:(a-c)/2,width:u,height:c}}function gn(e){return Je.some(t=>t.id===e)}function fn(e,t,n){let a=oe(t,n);return e?{x:Number.isFinite(e.x)?Number(e.x):a.x,y:Number.isFinite(e.y)?Number(e.y):a.y,width:Number.isFinite(e.width)&&Number(e.width)>0?Number(e.width):a.width,height:Number.isFinite(e.height)&&Number(e.height)>0?Number(e.height):a.height}:a}function bn(e,t,n,a=0){return{id:e?.id||fe(),name:String(e?.name||`\u56FE\u5C42 ${a+1}`),visible:e?.visible!==!1,opacity:mn(Number(e?.opacity??1)),locked:!!e?.locked,blend:gn(e?.blend)?e.blend:"normal",kind:e?.kind==="image"?"image":"raster",transform:fn(e?.transform,t,n)}}function wt(e,t,n,a,s){return{id:fe(),name:e,visible:!0,opacity:1,locked:!1,blend:"normal",kind:"image",transform:be(t,n,a,s)}}function Pe(e,t,n,a="raster"){return{id:fe(),name:e,visible:!0,opacity:1,locked:!1,blend:"normal",kind:a,transform:oe(t,n)}}function vn(e="1:1"){let t=Ie(e)||ge[0],n=Pe("\u56FE\u5C42 1",t.width,t.height);return{version:1,width:t.width,height:t.height,ratio:t.id,lockRatio:!0,background:"#ffffff",layers:[n],activeLayerId:n.id,pixels:{}}}function $e(e){let t=vn();if(!e||e.version!==1)return t;let n=J(Number(e.width)||t.width),a=J(Number(e.height)||t.height),s=(e.layers?.length?e.layers:t.layers).map((u,c)=>bn(u,n,a,c));return{...t,...e,version:1,width:n,height:a,ratio:e.ratio&&(e.ratio==="custom"||Ie(e.ratio))?e.ratio:Be(n,a),lockRatio:e.lockRatio!==!1,background:e.background||"#ffffff",layers:s,activeLayerId:s.some(u=>u.id===e.activeLayerId)?String(e.activeLayerId):s[s.length-1].id,pixels:e.pixels||{}}}function We(e,t){let a=Math.max(1,e),s=Math.max(1,t);return a>=s?{width:560,height:Math.max(240,Math.round(560*s/a))}:{width:Math.max(240,Math.round(560*a/s)),height:560}}function Ee(e){return`doc:${e}`}function Mt(e,t,n){let a=e.findIndex(o=>o.id===t),s=a+n;if(a<0||s<0||s>=e.length)return e;let u=e.slice(),[c]=u.splice(a,1);return u.splice(s,0,c),u}function ie(e,t,n){let{transform:a}=e;return e.kind!=="image"&&Math.abs(a.x)<1&&Math.abs(a.y)<1&&Math.abs(a.width-t)<1&&Math.abs(a.height-n)<1}var yn=["nw","n","ne","e","se","s","sw","w"],Ve={normal:"source-over",multiply:"multiply",screen:"screen",overlay:"overlay",darken:"darken",lighten:"lighten","soft-light":"soft-light"};function A(e,t){let n=document.createElement("canvas");return n.width=Math.max(1,Math.round(e)),n.height=Math.max(1,Math.round(t)),n}function D(e){let t=e.getContext("2d");if(!t)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u677F");return t}function Ye(e){D(e).clearRect(0,0,e.width,e.height)}function Qe(e,t){let n=D(e);n.save(),n.globalCompositeOperation="source-over",n.fillStyle=t,n.fillRect(0,0,e.width,e.height),n.restore()}function Se(e){return e.toDataURL("image/png")}function qe(e,t=.92){return e.toDataURL("image/jpeg",t)}function Lt(e){return new Promise((t,n)=>{let a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=()=>n(new Error("\u65E0\u6CD5\u8BFB\u53D6\u56FE\u7247")),a.src=e})}function Ct(e){let t=A(e.width,e.height);return D(t).drawImage(e,0,0),t}function V(e,t){let n=be(e.width,e.height,t.width,t.height);return{x:t.x+n.x,y:t.y+n.y,width:n.width,height:n.height}}function xn(e,t,n){let a=n.kind==="image"?V(t,n.transform):n.transform;e.save(),e.globalAlpha=Math.max(0,Math.min(1,n.opacity)),e.globalCompositeOperation=Ve[n.blend]||"source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(t,a.x,a.y,a.width,a.height),e.restore()}async function Rt(e,t){if(Ye(e),!t)return;let n=await Lt(t);D(e).drawImage(n,0,0,e.width,e.height)}async function ve(e){let t=await Lt(e),n=Math.max(1,Math.round(t.naturalWidth||t.width)),a=Math.max(1,Math.round(t.naturalHeight||t.height)),s=A(n,a);return D(s).drawImage(t,0,0,n,a),{canvas:s,width:n,height:a}}function Ze(e){return Se(e)}function Ne(e,t,n){n.width=e.width,n.height=e.height;let a=D(n);a.clearRect(0,0,n.width,n.height),Qe(n,e.background);for(let s of e.layers){if(!s.visible)continue;let u=t.get(s.id);u&&xn(a,u,s)}}function et(e,t=512){let n=Math.min(1,t/Math.max(e.width,e.height)),a=A(Math.max(1,Math.round(e.width*n)),Math.max(1,Math.round(e.height*n)));return D(a).drawImage(e,0,0,a.width,a.height),qe(a,.72)}function Tt(e,t,n,a){let s=n/Math.max(1,e.width),u=a/Math.max(1,e.height);return e.layers.map(c=>{let o=t.get(c.id)||A(c.transform.width,c.transform.height);if(c.kind!=="image"&&ie(c,e.width,e.height)){let x=A(n,a);return D(x).drawImage(o,0,0,n,a),t.set(c.id,x),{...c,transform:{x:0,y:0,width:n,height:a}}}let y=c.transform.width/Math.max(1,c.transform.height),m=(c.transform.x+c.transform.width/2)*s,M=(c.transform.y+c.transform.height/2)*u,w=Math.min(s,u),p=Math.max(8,c.transform.width*w),b=Math.max(8,p/Math.max(1e-4,y));return{...c,transform:{x:m-p/2,y:M-b/2,width:p,height:b}}})}function De(e,t,n){let a=t.get(n.id);return a||(a=A(Math.max(1,n.transform.width),Math.max(1,n.transform.height)),t.set(n.id,a)),a}function tt(e,t,n){let a=A(e.width,e.height),s=D(a),u=n.kind==="image"?V(t,n.transform):n.transform;return s.drawImage(t,u.x,u.y,u.width,u.height),a}function nt(e,t,n,a){let s=t.getBoundingClientRect(),u=s.width/Math.max(1,n);return{x:(e.clientX-s.left)/Math.max(1,s.width)*n,y:(e.clientY-s.top)/Math.max(1,s.height)*a,scale:u}}function le(e,t,n){let a=t.width||1,s=t.height||1;return{x:(e.x-t.x)/a*n.width,y:(e.y-t.y)/s*n.height,brushScale:n.width/a}}function It(e){let{x:t,y:n,width:a,height:s}=e;return{nw:{x:t,y:n},n:{x:t+a/2,y:n},ne:{x:t+a,y:n},e:{x:t+a,y:n+s/2},se:{x:t+a,y:n+s},s:{x:t+a/2,y:n+s},sw:{x:t,y:n+s},w:{x:t,y:n+s/2}}}function Bt(e,t){return e.x>=t.x&&e.y>=t.y&&e.x<=t.x+t.width&&e.y<=t.y+t.height}function Ae(e,t,n){let a=It(t),s=n*.75;for(let u of yn){let c=a[u];if(Math.abs(e.x-c.x)<=s&&Math.abs(e.y-c.y)<=s)return u}return Bt(e,t)?"move":null}function rt(e,t,n){for(let a=e.layers.length-1;a>=0;a--){let s=e.layers[a];if(!s.visible)continue;let u=n?.get(s.id),c=s.kind==="image"&&u?V(u,s.transform):s.transform;if(Bt(t,c))return s}return null}function Pt(e,t,n,a,s){if(t==="move")return{...e,x:e.x+(a.x-n.x),y:e.y+(a.y-n.y)};let u=t.length===2,c=e.height?e.width/e.height:1,o=e.x,y=e.y,m=e.x+e.width,M=e.y+e.height,w=a.x-n.x,p=a.y-n.y;if(t.includes("w")&&(o=e.x+w),t.includes("e")&&(m=e.x+e.width+w),t.includes("n")&&(y=e.y+p),t.includes("s")&&(M=e.y+e.height+p),s&&u){let b=t.includes("w")?e.x+e.width:e.x,x=t.includes("n")?e.y+e.height:e.y,L=Math.abs(a.x-b),B=Math.abs(a.y-x);L/Math.max(.001,B)>c?B=L/c:L=B*c,o=t.includes("w")?b-L:b,m=t.includes("w")?b:b+L,y=t.includes("n")?x-B:x,M=t.includes("n")?x:x+B}else if(s){if(t==="e"||t==="w"){let x=Math.max(8,Math.abs(m-o))/Math.max(1e-4,c),L=e.y+e.height/2;y=L-x/2,M=L+x/2}else if(t==="n"||t==="s"){let x=Math.max(8,Math.abs(M-y))*c,L=e.x+e.width/2;o=L-x/2,m=L+x/2}}if(m<o){let b=o;o=m,m=b}if(M<y){let b=y;y=M,M=b}return{x:o,y,width:Math.max(8,m-o),height:Math.max(8,M-y)}}var Et=[{id:"left",tip:"\u5DE6\u5BF9\u9F50\u753B\u5E03"},{id:"center",tip:"\u6C34\u5E73\u5C45\u4E2D"},{id:"right",tip:"\u53F3\u5BF9\u9F50\u753B\u5E03"},{id:"top",tip:"\u9876\u5BF9\u9F50\u753B\u5E03"},{id:"middle",tip:"\u5782\u76F4\u5C45\u4E2D"},{id:"bottom",tip:"\u5E95\u5BF9\u9F50\u753B\u5E03"}];function wn(e,t){let n=t?.get(e.id);return e.kind==="image"&&n?V(n,e.transform):e.transform}function kt(e){return{left:e.x,cx:e.x+e.width/2,right:e.x+e.width,top:e.y,cy:e.y+e.height/2,bottom:e.y+e.height}}function $(e,t,n){let a=null;for(let s of t){let u=s-e;Math.abs(u)>n||(!a||Math.abs(u)<Math.abs(a.delta))&&(a={delta:u,target:s})}return a}function St(e){let t=new Set;return e.filter(n=>{let a=`${n.axis}:${Math.round(n.pos*10)}`;return t.has(a)?!1:(t.add(a),!0)})}function Nt(e,t,n){let a=[0,e.width/2,e.width],s=[0,e.height/2,e.height];for(let u of e.layers){if(u.id===n||!u.visible||ie(u,e.width,e.height))continue;let c=wn(u,t);a.push(c.x,c.x+c.width/2,c.x+c.width),s.push(c.y,c.y+c.height/2,c.y+c.height)}return{xs:a,ys:s}}function Dt(e=1){return Math.max(4,8/Math.max(.08,e))}function Mn(e,t,n,a=!1,s=!1){let u=kt(e),c=a?null:$(u.left,t.xs,n);for(let p of[a?null:$(u.cx,t.xs,n),a?null:$(u.right,t.xs,n)])p&&(!c||Math.abs(p.delta)<Math.abs(c.delta))&&(c=p);let o=s?null:$(u.top,t.ys,n);for(let p of[s?null:$(u.cy,t.ys,n),s?null:$(u.bottom,t.ys,n)])p&&(!o||Math.abs(p.delta)<Math.abs(o.delta))&&(o=p);let y={...e,x:e.x+(c?.delta||0),y:e.y+(o?.delta||0)},m=kt(y),M=[],w=Math.max(.6,n*.08);for(let p of[m.left,m.cx,m.right])t.xs.some(b=>Math.abs(b-p)<=w)&&M.push({axis:"x",pos:p});for(let p of[m.top,m.cy,m.bottom])t.ys.some(b=>Math.abs(b-p)<=w)&&M.push({axis:"y",pos:p});return{rect:y,guides:St(M)}}function At(e,t,n,a,s,u){if(e==="move")return Mn(t,n,a,!!u?.lockX,!!u?.lockY);let c=t.x,o=t.y,y=t.x+t.width,m=t.y+t.height,M=Math.max(1e-4,t.width/Math.max(1e-4,t.height)),w=[];if(e.includes("w")){let p=$(c,n.xs,a);p&&(c=p.target,w.push({axis:"x",pos:p.target}))}if(e.includes("e")){let p=$(y,n.xs,a);p&&(y=p.target,w.push({axis:"x",pos:p.target}))}if(e.includes("n")){let p=$(o,n.ys,a);p&&(o=p.target,w.push({axis:"y",pos:p.target}))}if(e.includes("s")){let p=$(m,n.ys,a);p&&(m=p.target,w.push({axis:"y",pos:p.target}))}if(y<c){let p=c;c=y,y=p}if(m<o){let p=o;o=m,m=p}if(s){let p=e.includes("w")?y:c,b=e.includes("n")?m:o,x=Math.max(8,y-c),L=Math.max(8,m-o),B=w.some(F=>F.axis==="x"),G=w.some(F=>F.axis==="y");B&&!G?L=x/M:G&&!B?x=L*M:Math.abs(x/M-L)<=Math.abs(L*M-x)?L=x/M:x=L*M,c=e.includes("w")?p-x:p,y=e.includes("w")?p:p+x,o=e.includes("n")?b-L:b,m=e.includes("n")?b:b+L}return{rect:{x:c,y:o,width:Math.max(8,y-c),height:Math.max(8,m-o)},guides:St(w)}}function zt(e,t,n,a){return a==="left"?{...e,x:0}:a==="center"?{...e,x:(t-e.width)/2}:a==="right"?{...e,x:t-e.width}:a==="top"?{...e,y:0}:a==="middle"?{...e,y:(n-e.height)/2}:{...e,y:n-e.height}}function Ht(e,t,n,a,s){if(t.length){e.save(),e.strokeStyle="#f43f5e",e.lineWidth=Math.max(1,1.25/Math.max(.2,s)),e.setLineDash([]);for(let u of t)e.beginPath(),u.axis==="x"?(e.moveTo(u.pos,0),e.lineTo(u.pos,a)):(e.moveTo(0,u.pos),e.lineTo(n,u.pos)),e.stroke();e.restore()}}function at(e){return e==="n"||e==="s"?"ns-resize":e==="e"||e==="w"?"ew-resize":e==="nw"||e==="se"?"nwse-resize":e==="ne"||e==="sw"?"nesw-resize":e==="move"?"move":""}function Ot(e,t,n,a=!1){let s=a?"#a8a29e":"#60a5fa";e.save(),e.strokeStyle=s,e.fillStyle="#fff",e.lineWidth=Math.max(1,n/7),e.setLineDash([6,4]),e.strokeRect(t.x,t.y,t.width,t.height),e.setLineDash([]);let u=Math.max(5,n);for(let c of Object.values(It(t)))e.fillRect(c.x-u/2,c.y-u/2,u,u),e.strokeRect(c.x-u/2,c.y-u/2,u,u);e.restore()}function ot(e,t,n,a,s,u){e.save(),e.globalCompositeOperation=u?"destination-out":"source-over",e.strokeStyle=u?"rgba(0,0,0,1)":a,e.lineWidth=s,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.stroke(),e.restore()}function it(e,t,n,a,s,u){if(e.save(),e.strokeStyle=s,e.lineWidth=u,e.lineCap="round",e.lineJoin="round",e.beginPath(),t==="line")e.moveTo(n.x,n.y),e.lineTo(a.x,a.y);else if(t==="rect")e.strokeRect(n.x,n.y,a.x-n.x,a.y-n.y);else{let c=(n.x+a.x)/2,o=(n.y+a.y)/2;e.ellipse(c,o,Math.abs(a.x-n.x)/2,Math.abs(a.y-n.y)/2,0,0,Math.PI*2)}e.stroke(),e.restore()}function Ut(e,t,n){let a=Math.max(0,Math.min(e.width-1,Math.round(t))),s=Math.max(0,Math.min(e.height-1,Math.round(n))),[u,c,o]=D(e).getImageData(a,s,1,1).data;return`#${[u,c,o].map(y=>y.toString(16).padStart(2,"0")).join("")}`}function st(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,a.rel="noopener",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Ft(e){return fetch(e).then(t=>t.blob())}var kn=Symbol.for("infinite-canvas.jsx.fragment");function Ln(e,t,n){let a=ae(),s=e===kn?a.Fragment:e,u=n===void 0?t:{...t??{},key:n};return a.createElement(s,u)}function i(e,t,n){return Ln(e,t,n)}var v=i;var C={width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.85,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};function ye({name:e}){switch(e){case"move":return i("svg",{...C,children:i("path",{d:"M5 9L2 12l3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"})});case"brush":return v("svg",{...C,children:[i("path",{d:"M15.5 3.5l5 5L9 20H4v-5L15.5 3.5z"}),i("path",{d:"M13 6l5 5"})]});case"eraser":return v("svg",{...C,children:[i("path",{d:"M4 16l8.5-8.5a2 2 0 0 1 2.8 0L20 12.2l-8.5 8.5H6.5L4 18.2V16z"}),i("path",{d:"M9 20h11"})]});case"line":return v("svg",{...C,children:[i("path",{d:"M5 19L19 5"}),i("circle",{cx:"5",cy:"19",r:"1.6",fill:"currentColor",stroke:"none"}),i("circle",{cx:"19",cy:"5",r:"1.6",fill:"currentColor",stroke:"none"})]});case"rect":return i("svg",{...C,children:i("rect",{x:"4",y:"6",width:"16",height:"12",rx:"1.5"})});case"ellipse":return i("svg",{...C,children:i("ellipse",{cx:"12",cy:"12",rx:"8",ry:"6"})});case"eyedropper":return i("svg",{...C,children:i("path",{d:"M15.5 3.5l5 5-2 1-3-3-1-3zM14 7.5L5.5 16 4 20l4-1.5L16.5 10"})});case"undo":return v("svg",{...C,children:[i("path",{d:"M9 8H5V4"}),i("path",{d:"M5 8a8 8 0 1 1-1.2 8"})]});case"upload":return v("svg",{...C,children:[i("path",{d:"M12 16V5M8 9l4-4 4 4"}),i("path",{d:"M5 19h14"})]});case"from-canvas":return v("svg",{...C,children:[i("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),i("path",{d:"M3 15l5-4 4 3 3-2 6 4"}),i("circle",{cx:"9",cy:"9",r:"1.2",fill:"currentColor",stroke:"none"})]});case"export":return v("svg",{...C,children:[i("path",{d:"M12 4v11M8 11l4 4 4-4"}),i("path",{d:"M5 19h14"})]});case"plus":return i("svg",{...C,children:i("path",{d:"M12 5v14M5 12h14"})});case"copy":return v("svg",{...C,children:[i("rect",{x:"8",y:"8",width:"12",height:"12",rx:"2"}),i("path",{d:"M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"})]});case"up":return i("svg",{...C,children:i("path",{d:"M6 14l6-6 6 6"})});case"down":return i("svg",{...C,children:i("path",{d:"M6 10l6 6 6-6"})});case"raster":return v("svg",{...C,children:[i("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1.5"}),i("path",{d:"M4 12h16M12 4v16"})]});case"merge":return v("svg",{...C,children:[i("rect",{x:"7",y:"3",width:"10",height:"6",rx:"1"}),i("path",{d:"M12 9v4M9 11l3 3 3-3"}),i("rect",{x:"4",y:"15",width:"16",height:"6",rx:"1"})]});case"fit":return v("svg",{...C,children:[i("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),i("rect",{x:"7",y:"8",width:"10",height:"8",rx:"1"})]});case"fill":return v("svg",{...C,children:[i("rect",{x:"7",y:"7",width:"10",height:"10",rx:"1"}),i("path",{d:"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"})]});case"trash":return i("svg",{...C,children:i("path",{d:"M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13"})});case"eye":return v("svg",{...C,children:[i("path",{d:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"}),i("circle",{cx:"12",cy:"12",r:"3"})]});case"eye-off":return v("svg",{...C,children:[i("path",{d:"M3 3l18 18M10.5 6.2A9 9 0 0 1 12 5c6 0 10 7 10 7a16 16 0 0 1-3.2 4.1M6.6 6.6A16 16 0 0 0 2 12s4 7 10 7a9.5 9.5 0 0 0 4.2-1"}),i("path",{d:"M9.9 9.9A3 3 0 0 0 12 15a3 3 0 0 0 2.1-.9"})]});case"lock":return v("svg",{...C,children:[i("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),i("path",{d:"M8 11V8a4 4 0 0 1 8 0v3"})]});case"unlock":return v("svg",{...C,children:[i("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),i("path",{d:"M8 11V8a4 4 0 0 1 7.5-2"})]});case"snap":return v("svg",{...C,children:[i("path",{d:"M6 4h4v8a2 2 0 0 1-4 0V4zM14 4h4v8a2 2 0 0 1-4 0V4z"}),i("path",{d:"M6 12a6 6 0 0 0 12 0"})]});case"align-left":return v("svg",{...C,children:[i("path",{d:"M4 4v16"}),i("path",{d:"M7 8h10M7 16h7"})]});case"align-center":return v("svg",{...C,children:[i("path",{d:"M12 4v16"}),i("path",{d:"M7 8h10M8.5 16h7"})]});case"align-right":return v("svg",{...C,children:[i("path",{d:"M20 4v16"}),i("path",{d:"M7 8h10M10 16h7"})]});case"align-top":return v("svg",{...C,children:[i("path",{d:"M4 4h16"}),i("path",{d:"M8 7v10M16 7v7"})]});case"align-middle":return v("svg",{...C,children:[i("path",{d:"M4 12h16"}),i("path",{d:"M8 7v10M16 8.5v7"})]});case"align-bottom":return v("svg",{...C,children:[i("path",{d:"M4 20h16"}),i("path",{d:"M8 7v10M16 10v7"})]});default:return null}}function z({tip:e,name:t,onClick:n,disabled:a,active:s,className:u}){return i("button",{type:"button",className:["cnv-bd-iconbtn",s?"active":"",u].filter(Boolean).join(" "),title:e,"data-tip":e,"aria-label":e,disabled:a,onClick:n,children:i(ye,{name:t})})}var Cn={normal:"norm",multiply:"mul ",screen:"scrn",overlay:"over",darken:"dark",lighten:"lite","soft-light":"sLit"},se=class{constructor(){this.chunks=[]}u8(t){this.chunks.push(Uint8Array.of(t&255))}u16(t){this.chunks.push(Uint8Array.of(t>>8&255,t&255))}i16(t){this.u16(t<0?t+65536:t)}u32(t){this.chunks.push(Uint8Array.of(t>>>24&255,t>>>16&255,t>>>8&255,t&255))}i32(t){this.u32(t>>>0)}bytes(t){this.chunks.push(typeof t=="string"?new TextEncoder().encode(t):t)}pad(t){t>0&&this.chunks.push(new Uint8Array(t))}concat(){let t=this.chunks.reduce((s,u)=>s+u.length,0),n=new Uint8Array(t),a=0;for(let s of this.chunks)n.set(s,a),a+=s.length;return n}size(){return this.chunks.reduce((t,n)=>t+n.length,0)}};function Rn(e){let t=new TextEncoder().encode(e).slice(0,255),n=1+t.length,a=Math.ceil(n/4)*4,s=new Uint8Array(a);return s[0]=t.length,s.set(t,1),s}function Tn(e){let t=new Uint8Array(e.length*2);for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);t[n*2]=a>>8&255,t[n*2+1]=a&255}return t}function _t(e){return e%2}function Xt(e){let{width:t,height:n}=e,a=e.getContext("2d");if(!a)throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u56FE\u5C42");let s=a.getImageData(0,0,t,n).data,u=new Uint8Array(t*n),c=new Uint8Array(t*n),o=new Uint8Array(t*n),y=new Uint8Array(t*n);for(let m=0,M=0;m<s.length;m+=4,M++)u[M]=s[m],c[M]=s[m+1],o[M]=s[m+2],y[M]=s[m+3];return{width:t,height:n,r:u,g:c,b:o,a:y}}function ze(e){let t=new Uint8Array(2+e.length);return t[0]=0,t[1]=0,t.set(e,2),t}function Gt(e,t){let n=A(e.width,e.height);Ne(e,t,n);let a=Xt(n),s={id:"__bg",name:"\u80CC\u666F",visible:!0,opacity:1,locked:!0,blend:"normal",kind:"raster",transform:oe(e.width,e.height)},u=A(e.width,e.height);Qe(u,e.background);let c=[s,...e.layers].map(p=>{let b=p.id==="__bg"?u:t.get(p.id)||A(1,1),x=p.kind==="image"&&p.id!=="__bg"?V(b,p.transform):p.transform,L=Math.round(x.x),B=Math.round(x.y),G=Math.max(L+1,Math.round(x.x+x.width)),F=Math.max(B+1,Math.round(x.y+x.height)),te=A(G-L,F-B);D(te).drawImage(b,0,0,te.width,te.height);let ne=Xt(te),P=[{id:-1,data:ze(ne.a)},{id:0,data:ze(ne.r)},{id:1,data:ze(ne.g)},{id:2,data:ze(ne.b)}];return{layer:p,packs:P,top:B,left:L,bottom:F,right:G}}),o=new se;o.i16(c.length);for(let p of c){o.i32(p.top),o.i32(p.left),o.i32(p.bottom),o.i32(p.right),o.u16(p.packs.length);for(let F of p.packs)o.i16(F.id),o.u32(F.data.length);o.bytes("8BIM"),o.bytes(Cn[p.layer.blend]||"norm"),o.u8(Math.round(Math.max(0,Math.min(1,p.layer.opacity))*255)),o.u8(0),o.u8(p.layer.visible?0:2),o.u8(0);let b=new se;b.u32(0),b.u32(0),b.bytes(Rn(p.layer.name));let x=Tn(p.layer.name),L=new se;L.u32(p.layer.name.length),L.bytes(x);let B=L.concat();b.bytes("8BIM"),b.bytes("luni"),b.u32(B.length+_t(B.length)),b.bytes(B),b.pad(_t(B.length));let G=b.concat();o.u32(G.length),o.bytes(G)}for(let p of c)for(let b of p.packs)o.bytes(b.data);let y=o.concat(),m=new se;m.u32(y.length),m.bytes(y),m.u32(0);let M=m.concat(),w=new se;return w.bytes("8BPS"),w.u16(1),w.pad(6),w.u16(3),w.u32(e.height),w.u32(e.width),w.u16(8),w.u16(3),w.u32(0),w.u32(0),w.u32(M.length),w.bytes(M),w.u16(0),w.bytes(a.r),w.bytes(a.g),w.bytes(a.b),new Blob([w.concat()],{type:"image/vnd.adobe.photoshop"})}var Kt=`.cnv-bd {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 16px;
    background: var(--bd-fill);
    color: var(--bd-text);
    font-size: 12px;
    user-select: none;
    box-sizing: border-box;
}
.cnv-bd-bar,
.cnv-bd-side {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    background: var(--bd-panel);
    border-bottom: 1px solid var(--bd-stroke);
}
.cnv-bd-side {
    border-bottom: 0;
    border-top: 1px solid var(--bd-stroke);
    padding: 6px;
    gap: 4px;
}
.cnv-bd-align {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 4px 6px 2px;
    background: var(--bd-panel);
}
.cnv-bd-bar button,
.cnv-bd-side button,
.cnv-bd-align button,
.cnv-bd-menu button,
.cnv-bd-size button {
    height: 28px;
    min-width: 28px;
    padding: 0 8px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
}
.cnv-bd-iconbtn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    padding: 0;
}
.cnv-bd-iconbtn svg {
    display: block;
}
.cnv-bd-bar button:hover,
.cnv-bd-side button:hover,
.cnv-bd-align button:hover,
.cnv-bd-menu button:hover,
.cnv-bd-size button:hover,
.cnv-bd-layer:hover {
    background: var(--bd-hover);
}
.cnv-bd-side button:disabled,
.cnv-bd-align button:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    pointer-events: auto;
}
.cnv-bd-iconbtn[data-tip]::after {
    content: attr(data-tip);
    position: absolute;
    z-index: 8;
    left: 50%;
    padding: 4px 8px;
    border-radius: 6px;
    background: var(--bd-fill);
    color: var(--bd-text);
    border: 1px solid var(--bd-stroke);
    font-size: 11px;
    line-height: 1.3;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transform: translateX(-50%) translateY(2px);
    transition: opacity 0.12s ease;
}
.cnv-bd-bar .cnv-bd-iconbtn[data-tip]::after {
    top: calc(100% + 6px);
    bottom: auto;
}
.cnv-bd-side .cnv-bd-iconbtn[data-tip]::after,
.cnv-bd-align .cnv-bd-iconbtn[data-tip]::after,
.cnv-bd-layer .cnv-bd-iconbtn[data-tip]::after {
    bottom: calc(100% + 6px);
    top: auto;
    transform: translateX(-50%) translateY(-2px);
}
.cnv-bd-iconbtn[data-tip]:hover::after,
.cnv-bd-iconbtn[data-tip]:focus-visible::after {
    opacity: 1;
}
.cnv-bd-bar button.active,
.cnv-bd-menu button.active,
.cnv-bd-size button.active,
.cnv-bd-iconbtn.active {
    background: var(--bd-active);
    color: var(--bd-active-text);
}
.cnv-bd-bar input[type="color"],
.cnv-bd-size input[type="color"] {
    width: 28px;
    height: 28px;
    padding: 0;
    border: 1px solid var(--bd-stroke);
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
}
.cnv-bd-bar input[type="range"],
.cnv-bd-layer input[type="range"] {
    width: 72px;
    accent-color: var(--bd-text);
    cursor: pointer;
}
.cnv-bd-layer input[type="range"] {
    width: 100%;
}
.cnv-bd-bar select,
.cnv-bd-size select,
.cnv-bd-size input[type="number"] {
    height: 28px;
    border: 1px solid var(--bd-stroke);
    border-radius: 8px;
    background: var(--bd-fill);
    color: inherit;
    padding: 0 8px;
    font: inherit;
    outline: none;
}
.cnv-bd-size input[type="number"] {
    width: 88px;
}
.cnv-bd-wrap {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
}
.cnv-bd-view {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bd-fill);
    background-image:
        linear-gradient(45deg, var(--bd-check) 25%, transparent 25%),
        linear-gradient(-45deg, var(--bd-check) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--bd-check) 75%),
        linear-gradient(-45deg, transparent 75%, var(--bd-check) 75%);
    background-size: 16px 16px;
    background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    cursor: crosshair;
    touch-action: none;
}
.cnv-bd-stage {
    position: relative;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 12px 28px color-mix(in srgb, var(--bd-text) 18%, transparent);
    background: #fff;
}
.cnv-bd-stage canvas[data-board-main] {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.cnv-bd-overlay {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    pointer-events: none;
}
.cnv-bd-layers {
    flex: 0 0 214px;
    width: 214px;
    display: flex;
    flex-direction: column;
    min-height: 0;
    border-left: 1px solid var(--bd-stroke);
    background: var(--bd-panel);
}
.cnv-bd-layers h4,
.cnv-bd-picker h3,
.cnv-bd-export h3,
.cnv-bd-size h3 {
    margin: 0;
    padding: 10px 12px 6px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--bd-muted);
}
.cnv-bd-picker h3,
.cnv-bd-export h3,
.cnv-bd-size h3 {
    padding: 0;
    font-size: 13px;
    letter-spacing: 0;
    color: var(--bd-text);
}
.cnv-bd-layer-list {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    padding: 0 6px 8px;
    display: flex;
    flex-direction: column-reverse;
    gap: 4px;
}
.cnv-bd-layer {
    display: grid;
    grid-template-columns: 22px 22px 36px minmax(0, 1fr);
    gap: 4px;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
}
.cnv-bd-layer.active {
    background: var(--bd-active);
    color: var(--bd-active-text);
}
.cnv-bd-layer .cnv-bd-iconbtn {
    width: 22px;
    min-width: 22px;
    height: 22px;
}
.cnv-bd-thumb {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    overflow: hidden;
    background:
        linear-gradient(45deg, var(--bd-check) 25%, transparent 25%),
        linear-gradient(-45deg, var(--bd-check) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--bd-check) 75%),
        linear-gradient(-45deg, transparent 75%, var(--bd-check) 75%);
    background-size: 8px 8px;
    background-position: 0 0, 0 4px, 4px -4px, -4px 0;
    background-color: var(--bd-fill);
    pointer-events: none;
}
.cnv-bd-thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.cnv-bd-layer-main {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.cnv-bd-layer input[type="text"] {
    width: 100%;
    min-width: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    outline: none;
}
.cnv-bd-layer-meta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 52px 24px;
    gap: 4px;
    align-items: center;
}
.cnv-bd-layer-meta select {
    width: 100%;
    min-width: 0;
    height: 22px;
    border: 1px solid var(--bd-stroke);
    border-radius: 6px;
    background: var(--bd-fill);
    color: inherit;
    font: inherit;
    outline: none;
}
.cnv-bd-layer-meta span {
    font-variant-numeric: tabular-nums;
    color: var(--bd-muted);
    text-align: right;
}
.cnv-bd-layer input[type="range"] {
    width: 100%;
}
.cnv-bd-hint {
    position: absolute;
    left: 12px;
    bottom: 12px;
    padding: 6px 10px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--bd-panel) 88%, transparent);
    color: var(--bd-muted);
    pointer-events: none;
}
.cnv-bd-picker,
.cnv-bd-export,
.cnv-bd-size {
    position: absolute;
    inset: 0;
    z-index: 4;
    background: color-mix(in srgb, var(--bd-panel) 96%, transparent);
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 10px;
}
.cnv-bd-size-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
}
.cnv-bd-size-row label {
    color: var(--bd-muted);
    min-width: 36px;
}
.cnv-bd-grid {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
    gap: 8px;
}
.cnv-bd-grid button {
    height: auto;
    padding: 0;
    overflow: hidden;
    border-radius: 10px;
    background: var(--bd-fill);
    border: 1px solid var(--bd-stroke);
}
.cnv-bd-grid img {
    display: block;
    width: 100%;
    height: 72px;
    object-fit: cover;
}
.cnv-bd-grid span {
    display: block;
    padding: 6px 8px;
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cnv-bd-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.cnv-bd-empty {
    color: var(--bd-muted);
    font-size: 13px;
}
.cnv-bd-readout {
    font-variant-numeric: tabular-nums;
    color: var(--bd-muted);
}
`;var He={color:"#111111",size:6},Bn=720;function Pn(e){let t=String(e.metadata?.content||"").trim();return t&&(e.type==="image"||t.startsWith("data:image")||t.startsWith("blob:"))?t:""}function En(e){return e.getNodes().flatMap(t=>{if(t.id===e.node.id)return[];let n=Pn(t);return n?[{node:t,src:n}]:[]})}function jt(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>n(new Error("\u65E0\u6CD5\u8BFB\u53D6\u56FE\u7247")),a.readAsDataURL(e)})}function $t(e,t,n){e.applyOps([{type:"add_node",nodeType:"image",title:n,x:e.node.position.x+e.node.width+48,y:e.node.position.y,metadata:{content:t,status:"success"}}])}function ct(e,t){let n={};for(let a of e.layers){let s=t.get(a.id);s&&(n[a.id]=Ze(s))}return{...e,pixels:n}}function Jt(e,t){let n={};for(let a of e){let s=t.get(a.id);s&&(n[a.id]=et(s,64))}return n}function O(e){e.stopPropagation()}function Sn({id:e,hint:t,active:n,onClick:a}){return i("button",{type:"button",className:n?"cnv-bd-iconbtn active":"cnv-bd-iconbtn",title:t,"data-tip":t,"aria-label":t,onClick:a,"data-tool":e,children:i(ye,{name:e})})}function Nn({layer:e,active:t,preview:n,onSelect:a,onToggle:s,onLock:u,onRename:c,onOpacity:o,onBlend:y}){return v("div",{className:t?"cnv-bd-layer active":"cnv-bd-layer",onClick:a,onMouseDown:O,onPointerDown:O,children:[i("button",{type:"button",className:"cnv-bd-iconbtn",title:e.visible?"\u9690\u85CF\u56FE\u5C42":"\u663E\u793A\u56FE\u5C42","data-tip":e.visible?"\u9690\u85CF\u56FE\u5C42":"\u663E\u793A\u56FE\u5C42","aria-label":e.visible?"\u9690\u85CF\u56FE\u5C42":"\u663E\u793A\u56FE\u5C42",onClick:m=>{m.stopPropagation(),s()},children:i(ye,{name:e.visible?"eye":"eye-off"})}),i("button",{type:"button",className:e.locked?"cnv-bd-iconbtn active":"cnv-bd-iconbtn",title:e.locked?"\u89E3\u9501\u56FE\u5C42":"\u9501\u5B9A\u56FE\u5C42","data-tip":e.locked?"\u89E3\u9501\u56FE\u5C42":"\u9501\u5B9A\u56FE\u5C42","aria-label":e.locked?"\u89E3\u9501\u56FE\u5C42":"\u9501\u5B9A\u56FE\u5C42",onClick:m=>{m.stopPropagation(),u()},children:i(ye,{name:e.locked?"lock":"unlock"})}),i("div",{className:"cnv-bd-thumb",children:n?i("img",{src:n,alt:""}):null}),v("div",{className:"cnv-bd-layer-main",children:[i("input",{type:"text",value:e.name,onClick:m=>m.stopPropagation(),onChange:m=>c(m.target.value)}),v("div",{className:"cnv-bd-layer-meta",children:[i("select",{value:e.blend,title:"\u6DF7\u5408\u6A21\u5F0F",onClick:m=>m.stopPropagation(),onChange:m=>y(m.target.value),children:Je.map(m=>i("option",{value:m.id,children:m.label},m.id))}),i("input",{type:"range",min:"0",max:"1",step:"0.01",value:e.opacity,title:`\u4E0D\u900F\u660E\u5EA6 ${Math.round(e.opacity*100)}%`,onClick:m=>m.stopPropagation(),onMouseDown:O,onPointerDown:O,onChange:m=>o(Number(m.target.value))}),i("span",{children:Math.round(e.opacity*100)})]})]})]})}function Dn({ctx:e}){let t=I(null),n=I(null),a=I(null),s=I(A(1024,1024)),u=I(null),c=I(new Map),o=I($e(null)),y=I(null),m=I(null),M=I([]),w=I(!0),p=I(!1),b=I([]),x=I(0),L=I(e.storage),B=I(e.node.id),G=I("brush"),F=I(He.color),te=I(He.size),ne=I(!1),[P,dt]=H(o.current),[K,Oe]=H("brush"),[ue,lt]=H(He.color),[ce,Wt]=H(He.size),[Vt,xe]=H("crosshair"),[Ue,he]=H(!1),[ut,re]=H(!1),[Fe,we]=H(!1),[_e,Me]=H(String(P.width)),[Xe,ke]=H(String(P.height)),[Yt,ht]=H({}),[Le,Qt]=H(!1),pt=I(!1),[Ge,qt]=H(!0),de=e.isSelected,Y=e.theme;L.current=e.storage,B.current=e.node.id,G.current=K,F.current=ue,te.current=ce,ne.current=de,w.current=Ge;let Ce=()=>n.current||t.current,_=()=>o.current.layers.find(r=>r.id===o.current.activeLayerId)||o.current.layers[o.current.layers.length-1],U=r=>{let d=c.current.get(r.id);return r.kind==="image"&&d?V(d,r.transform):r.transform},j=Te(()=>{let r=o.current;Ne(r,c.current,s.current);let d=Ce()?.querySelector("canvas[data-board-main]");d&&(d.width=r.width,d.height=r.height,D(d).drawImage(s.current,0,0));let l=u.current;if(!l)return;l.width=r.width,l.height=r.height;let h=D(l);h.clearRect(0,0,l.width,l.height);let g=y.current;if(g&&(g.tool==="line"||g.tool==="rect"||g.tool==="ellipse")){it(h,g.tool,g.from,g.last,F.current,te.current);return}if(!ne.current)return;let f=_();if(!f?.visible||G.current!=="move"&&f.kind!=="image")return;let R=Ce(),k=R?R.getBoundingClientRect().width/Math.max(1,r.width):1;Ot(h,U(f),Math.max(6,8/Math.max(.2,k)),f.locked),Ht(h,M.current,r.width,r.height,k)},[]),T=Te((r,d)=>{if(o.current=r,dt(r),Me(String(r.width)),ke(String(r.height)),d?.resize){let h=We(r.width,r.height);e.updateNode({width:h.width,height:h.height})}j(),d?.thumbs!==!1&&ht(Jt(r.layers,c.current));let l=()=>{let h=ct(o.current,c.current);L.current.set(Ee(B.current),h).catch(()=>{});let g=et(s.current,Bn);e.node.metadata?.content!==g&&e.updateMetadata({content:g,ratio:h.ratio,canvasWidth:h.width,canvasHeight:h.height})};window.clearTimeout(x.current),d?.flush?l():x.current=window.setTimeout(l,250)},[e,j]),Zt=r=>{let d=c.current.get(r);d&&(b.current.push({kind:"pixels",layerId:r,pixels:Ze(d)}),b.current.length>40&&b.current.shift())},Q=()=>{b.current.push({kind:"doc",layers:o.current.layers.map(r=>({...r,transform:{...r.transform}})),activeLayerId:o.current.activeLayerId,pixels:ct(o.current,c.current).pixels}),b.current.length>40&&b.current.shift()},en=()=>{let r=b.current.pop();if(r){if(r.kind==="pixels"){let d=c.current.get(r.layerId);if(!d)return;Rt(d,r.pixels).then(()=>T(o.current));return}if(r.kind==="transform"){T({...o.current,layers:o.current.layers.map(d=>d.id===r.layerId?{...d,transform:r.transform}:d)});return}(async()=>{let d=new Map;for(let l of r.layers){let h=r.pixels[l.id];if(h){let g=await ve(h);d.set(l.id,g.canvas)}else d.set(l.id,A(l.transform.width,l.transform.height))}c.current=d,T({...o.current,layers:r.layers,activeLayerId:r.activeLayerId})})()}};me(()=>{let r=!1;L.current.get(Ee(B.current)).then(async h=>{if(r)return;let g=$e(h),f=new Map,R=String(e.node.metadata?.content||""),k=Object.values(g.pixels||{}).some(N=>!!N&&N.length>200);for(let N of g.layers){let Z=g.pixels?.[N.id];if(Z){let X=await ve(Z);if(r)return;f.set(N.id,X.canvas)}else f.set(N.id,A(N.transform.width||g.width,N.transform.height||g.height))}if(!r&&!k&&R.startsWith("data:image")&&R.length>200)try{let N=await ve(R);if(!r){let Z=g.layers[g.layers.length-1];Z&&f.set(Z.id,N.canvas)}}catch{}if(r)return;c.current=f;let E=g.layers.map(N=>{let Z=f.get(N.id);return N.kind!=="image"||!Z?N:{...N,transform:V(Z,N.transform)}}),S={...g,layers:E};o.current=S,dt(S),Me(String(S.width)),ke(String(S.height)),ht(Jt(S.layers,f)),!r&&(pt.current=!0,Qt(!0),j())});let d=()=>{if(!pt.current)return;window.clearTimeout(x.current);let h=ct(o.current,c.current);L.current.set(Ee(B.current),h).catch(()=>{})},l=()=>{document.visibilityState==="hidden"&&d()};return window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",l),()=>{r=!0,window.clearTimeout(x.current),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",l),d()}},[e.node.id,j]),me(()=>{Le&&j()},[de,K,Le,j]);let Ke=async r=>{Q();let{canvas:d,width:l,height:h}=await ve(r),g=wt(`\u56FE\u7247 ${o.current.layers.length+1}`,l,h,o.current.width,o.current.height);c.current.set(g.id,d),T({...o.current,layers:[...o.current.layers,g],activeLayerId:g.id}),Oe("move"),he(!1)},je=async(r,d,l)=>{let h=J(r),g=J(d);if(h===o.current.width&&g===o.current.height){T({...o.current,ratio:l||Be(h,g)});return}let f=Tt(o.current,c.current,h,g);T({...o.current,width:h,height:g,ratio:l||Be(h,g),layers:f},{resize:!0})},tn=r=>{if(r==="custom"){T({...o.current,ratio:"custom"});return}let d=Ie(r);d&&je(d.width,d.height,d.id)},Re=(r,d)=>{let l=J(Number(d)),h=o.current,g=h.width,f=h.height;r==="w"?(g=l,h.lockRatio&&(f=J(l*h.height/Math.max(1,h.width)))):(f=l,h.lockRatio&&(g=J(l*h.width/Math.max(1,h.height)))),je(g,f,"custom")},nn=r=>{if(!Le||!de||Ue||ut||Fe)return;r.stopPropagation(),r.preventDefault();let d=Ce();if(!d)return;let l=nt(r,d,o.current.width,o.current.height);if(K==="eyedropper"){lt(Ut(s.current,l.x,l.y)),Oe("brush");return}if(K==="move"){let f=_(),R=Math.max(8,10/Math.max(.2,l.scale)),k=f&&f.visible&&!f.locked?Ae(l,U(f),R):null;if(!k){let E=rt(o.current,l,c.current);E&&(T({...o.current,activeLayerId:E.id},{thumbs:!1}),f=E,k=E.locked?null:Ae(l,U(E),R))}if(!f||f.locked||!k)return;r.currentTarget.setPointerCapture(r.pointerId),b.current.push({kind:"transform",layerId:f.id,transform:{...f.transform}}),b.current.length>40&&b.current.shift(),m.current={handle:k,from:l,start:{...U(f)},layerId:f.id},xe(at(k)||"move");return}let h=_();if(!h||h.locked||!h.visible)return;r.currentTarget.setPointerCapture(r.pointerId);let g=De(o.current,c.current,h);if(Zt(h.id),y.current={tool:K,from:l,last:l},K==="brush"||K==="eraser"){let f=le(l,U(h),g);ot(D(g),f,f,ue,ce*f.brushScale,K==="eraser"),j()}},rn=r=>{let d=Ce();if(!d)return;let l=nt(r,d,o.current.width,o.current.height),h=m.current;if(h){let f=o.current.layers.find(X=>X.id===h.layerId);if(!f)return;let R=f.kind==="image"?!0:r.shiftKey,k=Pt(h.start,h.handle,h.from,l,R),E=c.current.get(f.id);f.kind==="image"&&E&&(k=V(E,k));let S=!1,N=!1;if(h.handle==="move"&&r.shiftKey){let X=Math.abs(k.x-h.start.x),hn=Math.abs(k.y-h.start.y);X>=hn?(k={...k,y:h.start.y},N=!0):(k={...k,x:h.start.x},S=!0)}if(!w.current||r.altKey||r.metaKey)M.current=[];else{let X=At(h.handle,k,Nt(o.current,c.current,f.id),Dt(l.scale),R,{lockX:S,lockY:N});k=X.rect,M.current=X.guides}T({...o.current,layers:o.current.layers.map(X=>X.id===f.id?{...X,transform:k}:X)},{thumbs:!1});return}let g=y.current;if(g){let f=_(),R=De(o.current,c.current,f);if(g.tool==="brush"||g.tool==="eraser"){let k=le(g.last,U(f),R),E=le(l,U(f),R);ot(D(R),k,E,ue,ce*E.brushScale,g.tool==="eraser"),g.last=l,j();return}g.last=l,j();return}if(K==="move"){let f=_(),R=Math.max(8,10/Math.max(.2,l.scale)),k=f&&f.visible&&!f.locked?Ae(l,U(f),R):null;xe(at(k)||(rt(o.current,l,c.current)?"move":"default"))}else xe("crosshair")},mt=()=>{let r=y.current,d=m.current;if(y.current=null,m.current=null,M.current=[],p.current=!1,d){T(o.current,{flush:!0});return}if(r){if(r.tool==="line"||r.tool==="rect"||r.tool==="ellipse"){let l=_(),h=De(o.current,c.current,l),g=le(r.from,U(l),h),f=le(r.last,U(l),h);it(D(h),r.tool,g,f,ue,ce*f.brushScale)}T(o.current,{flush:!0})}},ee=(r,d)=>{T({...o.current,layers:o.current.layers.map(l=>l.id===r?{...l,...d}:l)})},an=()=>{Q();let r=Pe(`\u56FE\u5C42 ${o.current.layers.length+1}`,o.current.width,o.current.height);c.current.set(r.id,A(o.current.width,o.current.height)),T({...o.current,layers:[...o.current.layers,r],activeLayerId:r.id})},on=()=>{let r=_();if(!r)return;Q();let d=c.current.get(r.id),l={...r,id:fe(),name:`${r.name} \u62F7\u8D1D`,locked:!1,transform:{...r.transform,x:r.transform.x+24,y:r.transform.y+24}};c.current.set(l.id,d?Ct(d):A(r.transform.width,r.transform.height));let h=o.current.layers.findIndex(f=>f.id===r.id),g=o.current.layers.slice();g.splice(h+1,0,l),T({...o.current,layers:g,activeLayerId:l.id})},sn=()=>{let r=o.current.activeLayerId;if(Q(),o.current.layers.length<=1){let l=c.current.get(r);l&&Ye(l),T({...o.current,layers:o.current.layers.map(h=>h.id===r?{...Pe("\u56FE\u5C42 1",o.current.width,o.current.height),id:r}:h)});return}c.current.delete(r);let d=o.current.layers.filter(l=>l.id!==r);T({...o.current,layers:d,activeLayerId:d[d.length-1].id})},gt=r=>{let d=Mt(o.current.layers,o.current.activeLayerId,r);d!==o.current.layers&&(Q(),T({...o.current,layers:d}))},cn=()=>{let r=_();if(!r||r.locked)return;let d=c.current.get(r.id);d&&(Q(),c.current.set(r.id,tt(o.current,d,r)),ee(r.id,{kind:"raster",transform:oe(o.current.width,o.current.height)}))},dn=()=>{let r=o.current.layers,d=r.findIndex(S=>S.id===o.current.activeLayerId);if(d<=0)return;let l=r[d],h=r[d-1];if(h.locked)return;let g=c.current.get(l.id),f=c.current.get(h.id);if(!g||!f)return;Q();let R=tt(o.current,f,h),k=D(R);k.globalAlpha=Math.max(0,Math.min(1,l.opacity)),k.globalCompositeOperation=Ve[l.blend]||"source-over";let E=U(l);k.drawImage(g,E.x,E.y,E.width,E.height),c.current.set(h.id,R),c.current.delete(l.id),T({...o.current,layers:r.filter(S=>S.id!==l.id).map(S=>S.id===h.id?{...S,kind:"raster",transform:oe(o.current.width,o.current.height)}:S),activeLayerId:h.id})},ft=r=>{let d=_();if(!d||d.locked)return;let l=c.current.get(d.id);if(!l)return;Q();let h=r==="cover"?xt(l.width,l.height,o.current.width,o.current.height):be(l.width,l.height,o.current.width,o.current.height);ee(d.id,{transform:h})},ln=r=>{let d=_();!d||d.locked||ie(d,o.current.width,o.current.height)||(Q(),ee(d.id,{transform:zt(U(d),o.current.width,o.current.height,r)}))};me(()=>{if(!de)return;let r=l=>{let h=l.target;if(h&&(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.tagName==="SELECT"||h.isContentEditable))return;let g=_();if(!g||g.locked||!g.visible||ie(g,o.current.width,o.current.height))return;let f=l.shiftKey?10:1,R=0,k=0;if(l.key==="ArrowLeft")R=-f;else if(l.key==="ArrowRight")R=f;else if(l.key==="ArrowUp")k=-f;else if(l.key==="ArrowDown")k=f;else return;l.preventDefault(),l.stopPropagation(),p.current||(b.current.push({kind:"transform",layerId:g.id,transform:{...g.transform}}),b.current.length>40&&b.current.shift(),p.current=!0);let E=U(g);T({...o.current,layers:o.current.layers.map(S=>S.id===g.id?{...S,transform:{...E,x:E.x+R,y:E.y+k}}:S)},{thumbs:!1})},d=l=>{l.key.startsWith("Arrow")&&(p.current=!1,T(o.current))};return window.addEventListener("keydown",r,!0),window.addEventListener("keyup",d,!0),()=>{window.removeEventListener("keydown",r,!0),window.removeEventListener("keyup",d,!0)}},[de,T]);let pe=async r=>{j();let d=e.node.title||"\u753B\u677F";if(r==="psd"){st(Gt(o.current,c.current),`${d}.psd`),re(!1);return}let l=s.current,h=r==="jpeg"?qe(l,.92):r==="webp"?l.toDataURL("image/webp",.92):Se(l);if(r==="node"){$t(e,h,d),re(!1);return}st(await Ft(h),`${d}.${r==="jpeg"?"jpg":r}`),re(!1)},bt=Ue?En(e):[],q=_(),un={"--bd-fill":Y.node.fill,"--bd-panel":Y.node.panel,"--bd-text":Y.node.text,"--bd-muted":Y.node.muted,"--bd-stroke":Y.node.stroke,"--bd-hover":Y.toolbar.itemHover,"--bd-active":Y.toolbar.activeBg,"--bd-active-text":Y.toolbar.activeText,"--bd-check":Y.node.faint};return v("div",{className:"cnv-bd","data-board-node":e.node.id,"data-canvas-no-zoom":!0,style:un,onMouseDown:O,onPointerDown:O,onWheel:O,children:[v("div",{className:"cnv-bd-bar",children:[yt.map(r=>i(Sn,{id:r.id,hint:r.hint,active:K===r.id,onClick:()=>{Oe(r.id),xe(r.id==="move"?"move":"crosshair")}},r.id)),i("input",{type:"color",value:ue,title:"\u989C\u8272",onChange:r=>lt(r.target.value)}),i("input",{type:"range",min:"1",max:"64",value:ce,title:`\u7B14\u5237 ${ce}`,onMouseDown:O,onPointerDown:O,onChange:r=>Wt(Number(r.target.value))}),i("button",{type:"button",className:Fe?"active":"",title:"\u753B\u5E03\u5927\u5C0F","data-tip":"\u753B\u5E03\u5927\u5C0F",onClick:()=>{we(!0),re(!1),he(!1)},children:v("span",{className:"cnv-bd-readout",children:[P.width,"\xD7",P.height]})}),i(z,{tip:Ge?"\u5173\u95ED\u5438\u9644":"\u5F00\u542F\u5438\u9644",name:"snap",active:Ge,onClick:()=>qt(r=>!r)}),i(z,{tip:"\u64A4\u9500",name:"undo",onClick:en}),i("input",{ref:a,type:"file",accept:"image/*",hidden:!0,onChange:r=>{let d=r.target.files?.[0];d&&jt(d).then(Ke),r.target.value=""}}),i(z,{tip:"\u4E0A\u4F20\u56FE\u7247",name:"upload",onClick:()=>a.current?.click()}),i(z,{tip:"\u4ECE\u753B\u5E03\u9009\u56FE",name:"from-canvas",onClick:()=>{he(!0),we(!1),re(!1)}}),i(z,{tip:"\u5BFC\u51FA",name:"export",onClick:()=>{re(!0),we(!1),he(!1)}})]}),v("div",{className:"cnv-bd-wrap",children:[v("div",{ref:t,className:"cnv-bd-view",style:{cursor:Vt},onPointerDown:nn,onPointerMove:rn,onPointerUp:mt,onPointerCancel:mt,onDragOver:r=>{r.preventDefault(),r.stopPropagation()},onDrop:r=>{r.preventDefault(),r.stopPropagation();let d=r.dataTransfer.files?.[0];d?.type.startsWith("image/")&&jt(d).then(Ke)},children:[v("div",{ref:n,className:"cnv-bd-stage",children:[i("canvas",{"data-board-main":!0}),i("canvas",{ref:u,className:"cnv-bd-overlay"})]}),de?null:i("div",{className:"cnv-bd-hint",children:"\u9009\u4E2D\u540E\u5373\u53EF\u7ED8\u5236\uFF0C\u7528\u300C\u79FB\u300D\u8C03\u6574\u56FE\u5C42"}),Le?null:i("div",{className:"cnv-bd-hint",children:"\u6B63\u5728\u6253\u5F00\u753B\u677F\u2026"})]}),v("div",{className:"cnv-bd-layers",children:[i("h4",{children:"\u56FE\u5C42"}),i("div",{className:"cnv-bd-layer-list",children:P.layers.map(r=>i(Nn,{layer:r,preview:Yt[r.id]||"",active:r.id===P.activeLayerId,onSelect:()=>T({...o.current,activeLayerId:r.id}),onToggle:()=>ee(r.id,{visible:!r.visible}),onLock:()=>ee(r.id,{locked:!r.locked}),onRename:d=>ee(r.id,{name:d}),onOpacity:d=>ee(r.id,{opacity:d}),onBlend:d=>ee(r.id,{blend:d})},r.id))}),i("div",{className:"cnv-bd-align",children:Et.map(r=>i(z,{tip:r.tip,name:`align-${r.id}`,disabled:!q||q.locked||ie(q,P.width,P.height),onClick:()=>ln(r.id)},r.id))}),v("div",{className:"cnv-bd-side",children:[i(z,{tip:"\u65B0\u5EFA\u56FE\u5C42",name:"plus",onClick:an}),i(z,{tip:"\u590D\u5236\u56FE\u5C42",name:"copy",onClick:on}),i(z,{tip:"\u4E0A\u79FB\u56FE\u5C42",name:"up",onClick:()=>gt(1)}),i(z,{tip:"\u4E0B\u79FB\u56FE\u5C42",name:"down",onClick:()=>gt(-1)}),i(z,{tip:"\u6805\u683C\u5316\u56FE\u5C42",name:"raster",disabled:!q||q.kind!=="image",onClick:cn}),i(z,{tip:"\u5411\u4E0B\u5408\u5E76",name:"merge",disabled:P.layers.findIndex(r=>r.id===P.activeLayerId)<=0,onClick:dn}),i(z,{tip:"\u9002\u5E94\u753B\u5E03",name:"fit",disabled:!q||q.locked,onClick:()=>ft("contain")}),i(z,{tip:"\u94FA\u6EE1\u753B\u5E03",name:"fill",disabled:!q||q.locked,onClick:()=>ft("cover")}),i(z,{tip:"\u5220\u9664\u56FE\u5C42",name:"trash",onClick:sn})]})]})]}),Fe?v("div",{className:"cnv-bd-size",onMouseDown:O,onPointerDown:O,children:[i("h3",{children:"\u753B\u5E03\u5927\u5C0F"}),v("div",{className:"cnv-bd-size-row",children:[i("label",{children:"\u9884\u8BBE"}),v("select",{value:P.ratio,onChange:r=>tn(r.target.value),children:[ge.map(r=>v("option",{value:r.id,children:[r.label," \xB7 ",r.width,"\xD7",r.height]},r.id)),i("option",{value:"custom",children:"\u81EA\u5B9A\u4E49"})]})]}),v("div",{className:"cnv-bd-size-row",children:[i("label",{children:"\u5BBD\u5EA6"}),i("input",{type:"number",min:"32",max:"8192",value:_e,onChange:r=>{if(Me(r.target.value),P.lockRatio){let d=Number(r.target.value);Number.isFinite(d)&&d>0&&ke(String(J(d*P.height/Math.max(1,P.width))))}},onBlur:r=>Re("w",r.target.value),onKeyDown:r=>{r.key==="Enter"&&Re("w",_e)}}),i("span",{children:"px"})]}),v("div",{className:"cnv-bd-size-row",children:[i("label",{children:"\u9AD8\u5EA6"}),i("input",{type:"number",min:"32",max:"8192",value:Xe,onChange:r=>{if(ke(r.target.value),P.lockRatio){let d=Number(r.target.value);Number.isFinite(d)&&d>0&&Me(String(J(d*P.width/Math.max(1,P.height))))}},onBlur:r=>Re("h",r.target.value),onKeyDown:r=>{r.key==="Enter"&&Re("h",Xe)}}),i("span",{children:"px"})]}),v("div",{className:"cnv-bd-size-row",children:[i("button",{type:"button",className:P.lockRatio?"active":"",title:"\u7EA6\u675F\u6BD4\u4F8B",onClick:()=>T({...o.current,lockRatio:!o.current.lockRatio}),children:P.lockRatio?"\u5DF2\u9501\u5B9A\u6BD4\u4F8B":"\u89E3\u9501\u6BD4\u4F8B"}),i("label",{children:"\u7EB8\u5F20"}),i("input",{type:"color",value:P.background,title:"\u7EB8\u5F20\u989C\u8272",onChange:r=>T({...o.current,background:r.target.value})})]}),i("button",{type:"button",onClick:()=>{je(Number(_e),Number(Xe)),we(!1)},children:"\u5B8C\u6210"})]}):null,Ue?v("div",{className:"cnv-bd-picker",onMouseDown:O,onPointerDown:O,children:[i("h3",{children:"\u4ECE\u753B\u5E03\u9009\u56FE"}),bt.length===0?i("div",{className:"cnv-bd-empty",children:"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u56FE\u7247\u8282\u70B9"}):i("div",{className:"cnv-bd-grid",children:bt.map(({node:r,src:d})=>v("button",{type:"button",onClick:()=>void Ke(d),children:[i("img",{src:d,alt:""}),i("span",{children:r.title||"\u56FE\u7247"})]},r.id))}),i("button",{type:"button",onClick:()=>he(!1),children:"\u53D6\u6D88"})]}):null,ut?v("div",{className:"cnv-bd-export",onMouseDown:O,onPointerDown:O,children:[i("h3",{children:"\u5BFC\u51FA\u753B\u677F"}),v("div",{className:"cnv-bd-menu",children:[i("button",{type:"button",className:"active",onClick:()=>void pe("png"),children:"PNG"}),i("button",{type:"button",onClick:()=>void pe("jpeg"),children:"JPEG"}),i("button",{type:"button",onClick:()=>void pe("webp"),children:"WebP"}),i("button",{type:"button",onClick:()=>void pe("psd"),children:"PSD"}),i("button",{type:"button",onClick:()=>void pe("node"),children:"\u653E\u5230\u753B\u5E03"})]}),i("button",{type:"button",onClick:()=>re(!1),children:"\u53D6\u6D88"})]}):null]})}function An(e){return[{id:"board-png",title:"\u5BFC\u51FA PNG \u5230\u753B\u5E03",label:"\u51FA\u56FE",icon:"\u29C9",onClick:()=>{let t=document.querySelector(`[data-board-node="${e.node.id}"] canvas[data-board-main]`);t&&$t(e,Se(t),e.node.title||"\u753B\u677F")}}]}var zn=We(1024,1024),hr={id:"board",name:"\u753B\u677F",version:"1.1.1",description:"\u624B\u7ED8\u8349\u7A3F\u3001\u56FE\u5C42\u53D8\u6362\u3001\u6DF7\u5408\u6A21\u5F0F\u4E0E PSD / \u56FE\u7247\u5BFC\u51FA",css:Kt,nodes:[{type:"board:sketch",title:"\u753B\u677F",icon:"\u270E",description:"\u5728\u753B\u5E03\u4E0A\u624B\u7ED8\u8349\u7A3F\uFF0C\u56FE\u5C42\u53EF\u79FB\u52A8\u7F29\u653E\uFF0C\u56FE\u7247\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u5C42\u7F16\u8F91",defaultSize:zn,defaultMetadata:{content:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",ratio:"1:1",canvasWidth:1024,canvasHeight:1024},minimapColor:"#f59e0b",hidePanel:!0,keepAspectRatio:()=>!0,forceInteractive:(e,t)=>!!t?.isSelected,interactionToggle:!0,Content:Dn,toolbar:An}]};export{hr as default};
