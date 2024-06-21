import{isServer as x,getRequestEvent as O,createComponent as w,delegateEvents as Ke,ssrElement as B,escape as $,mergeProps as ze,ssr as T,ssrHydrationKey as H,useAssets as Je,NoHydration as ye,HydrationScript as Ge,ssrAttribute as W,Hydration as Ve,renderToString as Xe,renderToStream as Ye}from"solid-js/web";import{getOwner as we,runWithOwner as ve,createMemo as P,createContext as be,createSignal as U,createRenderEffect as Qe,on as ne,useContext as Ze,startTransition as et,resetErrorBoundaries as tt,batch as nt,untrack as Re,createComponent as Se,children as rt,Show as Ee,createRoot as st,onCleanup as re,lazy as ot,Suspense as at,ErrorBoundary as it,catchError as ct,sharedConfig as G}from"solid-js";import{createRouter as ut}from"radix3";import{M as lt,T as ht,a as ft}from"./assets/index-D2KKXV4l.js";import{provideRequestEvent as dt}from"solid-js/web/storage";import{H3Event as Y,setResponseStatus as pt,sendRedirect as mt,setHeader as gt,getRequestIP as yt,getResponseStatus as wt,getResponseStatusText as vt,getCookie as bt,setCookie as Rt,getRequestURL as St,getResponseHeaders as Et,getResponseHeader as At,setResponseHeader as $t,appendResponseHeader as Tt,removeResponseHeader as Pt,getRequestWebStream as Ct,eventHandler as xt}from"h3";import{getContext as Lt}from"unctx";import{AsyncLocalStorage as kt}from"node:async_hooks";function Ae(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,a){if(n)return!(n=!1);const o={to:r,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of e)i.listener({...o,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:s}}let Q;function se(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Q=window.history.state._depth}x||se();function qt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Ht(e,t){let n=!1;return()=>{const s=Q;se();const r=s==null?null:Q-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const Ot=/^(?:[a-z0-9]+:)?\/\//i,Ft=/^\/+|(\/)\/+$/g,$e="http://sr";function M(e,t=!1){const n=e.replace(Ft,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function z(e,t,n){if(Ot.test(t))return;const s=M(e),r=n&&M(n);let a="";return!r||t.startsWith("/")?a=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?a=s+r:a=r,(a||"/")+M(t,!a)}function It(e,t){return M(e).replace(/\/*(\*.*)?$/g,"")+M(t)}function Te(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function _t(e,t,n){const[s,r]=e.split("/*",2),a=s.split("/").filter(Boolean),o=a.length;return i=>{const l=i.split("/").filter(Boolean),c=l.length-o;if(c<0||c>0&&r===void 0&&!t)return null;const m={path:o?"":"/",params:{}},b=d=>n===void 0?void 0:n[d];for(let d=0;d<o;d++){const f=a[d],S=l[d],u=f[0]===":",h=u?f.slice(1):f;if(u&&V(S,b(h)))m.params[h]=S;else if(u||!V(S,f))return null;m.path+=`/${S}`}if(r){const d=c?l.slice(-c).join("/"):"";if(V(d,b(r)))m.params[r]=d;else return null}return m}}function V(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ut(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,a)=>r+(a.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Pe(e){const t=new Map,n=we();return new Proxy({},{get(s,r){return t.has(r)||ve(n,()=>t.set(r,P(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ce(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Ce(s).reduce((a,o)=>[...a,...r.map(i=>i+o)],[])}const Mt=100,jt=be(),xe=be();function Nt(e,t=""){const{component:n,load:s,children:r,info:a}=e,o=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,info:a};return Le(e.path).reduce((l,c)=>{for(const m of Ce(c)){const b=It(t,m);let d=o?b:b.split("/*",1)[0];d=d.split("/").map(f=>f.startsWith(":")||f.startsWith("*")?f:encodeURIComponent(f)).join("/"),l.push({...i,originalPath:c,pattern:d,matcher:_t(d,!o,e.matchFilters)})}return l},[])}function Dt(e,t=0){return{routes:e,score:Ut(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const a=e[r],o=a.matcher(n);if(!o)return null;s.unshift({...o,route:a})}return s}}}function Le(e){return Array.isArray(e)?e:[e]}function ke(e,t="",n=[],s=[]){const r=Le(e);for(let a=0,o=r.length;a<o;a++){const i=r[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=Nt(i,t);for(const c of l){n.push(c);const m=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!m)ke(i.children,c.pattern,n,s);else{const b=Dt([...n],s.length);s.push(b)}n.pop()}}}return n.length?s:s.sort((a,o)=>o.score-a.score)}function j(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Bt(e,t){const n=new URL($e),s=P(l=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),l}},n,{equals:(l,c)=>l.href===c.href}),r=P(()=>s().pathname),a=P(()=>s().search,!0),o=P(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return i()},query:Pe(ne(a,()=>Te(s())))}}let q;function Wt(){return q}let N=!1;function ce(e){N=e}function Kt(e,t,n,s={}){const{signal:[r,a],utils:o={}}=e,i=o.parsePath||(p=>p),l=o.renderPath||(p=>p),c=o.beforeLeave||Ae(),m=z("",s.base||"");if(m===void 0)throw new Error(`${m} is not a valid base path`);m&&!r().value&&a({value:m,replace:!0,scroll:!1});const[b,d]=U(!1);let f;const S=(p,v)=>{v.value===u()&&v.state===y()||(f===void 0&&d(!0),q=p,f=v,et(()=>{f===v&&(h(f.value),g(f.state),tt(),x||L[1]([]))}).finally(()=>{f===v&&nt(()=>{q=void 0,p==="navigate"&&De(f),d(!1),f=void 0})}))},[u,h]=U(r().value),[y,g]=U(r().state),F=Bt(u,y),A=[],L=U(x?We():[]),I=P(()=>typeof s.transformUrl=="function"?j(t(),s.transformUrl(F.pathname)):j(t(),F.pathname)),Me=Pe(()=>{const p=I(),v={};for(let E=0;E<p.length;E++)Object.assign(v,p[E].params);return v}),oe={pattern:m,path:()=>m,outlet:()=>null,resolvePath(p){return z(m,p)}};return Qe(ne(r,p=>S("native",p),{defer:!0})),{base:oe,location:F,params:Me,isRouting:b,renderPath:l,parsePath:i,navigatorFactory:Ne,matches:I,beforeLeave:c,preloadRoute:Be,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:L};function je(p,v,E){Re(()=>{if(typeof v=="number"){v&&(o.go?o.go(v):console.warn("Router integration does not support relative routing"));return}const{replace:D,resolve:J,scroll:k,state:_}={replace:!1,resolve:!0,scroll:!0,...E},C=J?p.resolvePath(v):z("",v);if(C===void 0)throw new Error(`Path '${v}' is not a routable path`);if(A.length>=Mt)throw new Error("Too many redirects");const ae=u();if(C!==ae||_!==y())if(x){const ie=O();ie&&(ie.response={status:302,headers:new Headers({Location:C})}),a({value:C,replace:D,scroll:k,state:_})}else c.confirm(C,E)&&(A.push({value:ae,replace:D,scroll:k,state:y()}),S("navigate",{value:C,state:_}))})}function Ne(p){return p=p||Ze(xe)||oe,(v,E)=>je(p,v,E)}function De(p){const v=A[0];v&&(a({...p,replace:v.replace,scroll:v.scroll}),A.length=0)}function Be(p,v={}){const E=j(t(),p.pathname),D=q;q="preload";for(let J in E){const{route:k,params:_}=E[J];k.component&&k.component.preload&&k.component.preload();const{load:C}=k;N=!0,v.preloadData&&C&&ve(n(),()=>C({params:_,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Te(p),state:null,key:""},intent:"preload"})),N=!1}q=D}function We(){const p=O();return p&&p.router&&p.router.submission?[p.router.submission]:[]}}function zt(e,t,n,s){const{base:r,location:a,params:o}=e,{pattern:i,component:l,load:c}=s().route,m=P(()=>s().path);l&&l.preload&&l.preload(),N=!0;const b=c?c({params:o,location:a,intent:q||"initial"}):void 0;return N=!1,{parent:t,pattern:i,path:m,outlet:()=>l?Se(l,{params:o,location:a,data:b,get children(){return n()}}):n(),resolvePath(f){return z(r.path(),f,m())}}}const qe=e=>t=>{const{base:n}=t,s=rt(()=>t.children),r=P(()=>ke(s(),t.base||""));let a;const o=Kt(e,r,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(o),w(jt.Provider,{value:o,get children(){return w(Jt,{routerState:o,get root(){return t.root},get load(){return t.rootLoad},get children(){return[(a=we())&&null,w(Gt,{routerState:o,get branches(){return r()}})]}})}})};function Jt(e){const t=e.routerState.location,n=e.routerState.params,s=P(()=>e.load&&Re(()=>{ce(!0),e.load({params:n,location:t,intent:Wt()||"initial"}),ce(!1)}));return w(Ee,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>w(r,{params:n,location:t,get data(){return s()},get children(){return e.children}})})}function Gt(e){if(x){const r=O();if(r&&r.router&&r.router.dataOnly){Vt(r,e.routerState,e.branches);return}r&&((r.router||(r.router={})).matches||(r.router.matches=e.routerState.matches().map(({route:a,path:o,params:i})=>({path:a.originalPath,pattern:a.pattern,match:o,params:i,info:a.info}))))}const t=[];let n;const s=P(ne(e.routerState.matches,(r,a,o)=>{let i=a&&r.length===a.length;const l=[];for(let c=0,m=r.length;c<m;c++){const b=a&&a[c],d=r[c];o&&b&&d.route.key===b.route.key?l[c]=o[c]:(i=!1,t[c]&&t[c](),st(f=>{t[c]=f,l[c]=zt(e.routerState,l[c-1]||e.routerState.base,ue(()=>s()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),o&&i?o:(n=l[0],l)}));return ue(()=>s()&&n)()}const ue=e=>()=>w(Ee,{get when(){return e()},keyed:!0,children:t=>w(xe.Provider,{value:t,get children(){return t.outlet()}})});function Vt(e,t,n){const s=new URL(e.request.url),r=j(n,new URL(e.router.previousUrl||e.request.url).pathname),a=j(n,s.pathname);for(let o=0;o<a.length;o++){(!r[o]||a[o].route!==r[o].route)&&(e.router.dataOnly=!0);const{route:i,params:l}=a[o];i.load&&i.load({params:l,location:t.location,intent:"preload"})}}function Xt([e,t],n,s){return[e,s?r=>t(s(r)):t]}function Yt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Qt(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,s=Xt(U(n(e.get()),{equals:(r,a)=>r.value===a.value&&r.state===a.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&re(e.init((r=e.get())=>{t=!0,s[1](n(r)),t=!1})),qe({signal:s,create:e.create,utils:e.utils})}function Zt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function en(e,t){const n=Yt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function tn(e){const t=new URL(e);return t.pathname+t.search}function nn(e){let t;const n=e.url||(t=O())&&tn(t.request.url)||"",s={value:e.transformUrl?e.transformUrl(n):n};return qe({signal:[()=>s,r=>Object.assign(s,r)]})(e)}const rn=new Map;function sn(e=!0,t=!1,n="/_server",s){return r=>{const a=r.base.path(),o=r.navigatorFactory(r.base);let i={};function l(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function c(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const h=u.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const y=l(h),g=y?h.href.baseVal:h.href;if((y?h.target.baseVal:h.target)||!g&&!h.hasAttribute("state"))return;const A=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||A&&A.includes("external"))return;const L=y?new URL(g,document.baseURI):new URL(g);if(!(L.origin!==window.location.origin||a&&L.pathname&&!L.pathname.toLowerCase().startsWith(a.toLowerCase())))return[h,L]}function m(u){const h=c(u);if(!h)return;const[y,g]=h,F=r.parsePath(g.pathname+g.search+g.hash),A=y.getAttribute("state");u.preventDefault(),o(F,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:A&&JSON.parse(A)})}function b(u){const h=c(u);if(!h)return;const[y,g]=h;typeof s=="function"&&(g.pathname=s(g.pathname)),i[g.pathname]||r.preloadRoute(g,{preloadData:y.getAttribute("preload")!=="false"})}function d(u){const h=c(u);if(!h)return;const[y,g]=h;typeof s=="function"&&(g.pathname=s(g.pathname)),!i[g.pathname]&&(i[g.pathname]=setTimeout(()=>{r.preloadRoute(g,{preloadData:y.getAttribute("preload")!=="false"}),delete i[g.pathname]},200))}function f(u){const h=c(u);if(!h)return;const[,y]=h;typeof s=="function"&&(y.pathname=s(y.pathname)),i[y.pathname]&&(clearTimeout(i[y.pathname]),delete i[y.pathname])}function S(u){if(u.defaultPrevented)return;let h=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const g=new URL(h,$e);if(h=r.parsePath(g.pathname+g.search),!h.startsWith(n))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=rn.get(h);if(y){u.preventDefault();const g=new FormData(u.target);u.submitter&&u.submitter.name&&g.append(u.submitter.name,u.submitter.value),y.call({r,f:u.target},g)}}Ke(["click","submit"]),document.addEventListener("click",m),e&&(document.addEventListener("mouseover",d),document.addEventListener("mouseout",f),document.addEventListener("focusin",b),document.addEventListener("touchstart",b)),document.addEventListener("submit",S),re(()=>{document.removeEventListener("click",m),e&&(document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",f),document.removeEventListener("focusin",b),document.removeEventListener("touchstart",b)),document.removeEventListener("submit",S)})}}function on(e){if(x)return nn(e);const t=()=>{const s=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(s)+window.location.hash:s+window.location.hash,state:window.history.state}},n=Ae();return Qt({get:t,set({value:s,replace:r,scroll:a,state:o}){r?window.history.replaceState(qt(o),"",s):window.history.pushState(o,"",s),en(decodeURIComponent(window.location.hash.slice(1)),a),se()},init:s=>Zt(window,"popstate",Ht(s,r=>{if(r&&r<0)return!n.confirm(r);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:sn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:s=>window.history.go(s),beforeLeave:n}})(e)}function an(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var cn=" ";const un={style:e=>B("style",e.attrs,()=>$(e.children),!0),link:e=>B("link",e.attrs,void 0,!0),script:e=>e.attrs.src?B("script",ze(()=>e.attrs,{get id(){return e.key}}),()=>T(cn),!0):null,noscript:e=>B("noscript",e.attrs,()=>$(e.children),!0)};function Z(e,t){let{tag:n,attrs:{key:s,...r}={key:void 0},children:a}=e;return un[n]({attrs:{...r,nonce:t},key:s,children:a})}function ln(e,t,n,s="default"){return ot(async()=>{{const a=(await e.import())[s],i=(await t.inputs?.[e.src].assets()).filter(c=>c.tag==="style"||c.attrs.rel==="stylesheet");return typeof window<"u"&&an(i),{default:c=>[...i.map(m=>Z(m)),Se(a,c)]}}})}const He=[{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import("./index.js"),import:()=>import("./index.js")},path:"/",filePath:"/Users/andrew/Documents/Dev/Projects/andrewnathanco/github/ancgames/code/src/routes/index.tsx"}],hn=fn(He.filter(e=>e.page));function fn(e){function t(n,s,r,a){const o=Object.values(n).find(i=>r.startsWith(i.id+"/"));return o?(t(o.children||(o.children=[]),s,r.slice(o.id.length)),n):(n.push({...s,id:r,path:r.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,s)=>n.path.length-s.path.length).reduce((n,s)=>t(n,s,s.path,s.path),[])}function dn(e,t){const n=mn.lookup(e);if(n&&n.route){const s=n.route[`$${t}`];return s===void 0?void 0:{handler:s,params:n.params}}}function pn(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}const mn=ut({routes:He.reduce((e,t)=>{if(!pn(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(s,r)=>`**:${r}`);if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Oe(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&ln(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return hn.map(e)}let le;const gn=x?()=>O().routes:()=>le||(le=Oe());function yn(){return w(on,{get base(){return"/"},root:e=>w(lt,{get children(){return[w(ht,{children:"Splotch"}),w(ft,{name:"description",content:""}),w(at,{get children(){return e.children}})]}}),get children(){return w(gn,{})}})}const Fe=x?e=>{const t=O();return t.response.status=e.code,t.response.statusText=e.text,re(()=>!t.nativeEvent.handled&&!t.complete&&(t.response.status=200)),null}:e=>null;var wn=["<span",' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">',"</span>"],vn=["<span",' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];const bn=e=>{const t=x?"500 | Internal Server Error":"Error | Uncaught Client Exception";return w(it,{fallback:n=>(console.error(n),[T(wn,H(),$(t)),w(Fe,{code:500})]),get children(){return e.children}})},Rn=e=>{let t=!1;const n=ct(()=>e.children,s=>{console.error(s),t=!!s});return t?[T(vn,H()),w(Fe,{code:500})]:n};var he=["<script",">","<\/script>"],Sn=["<script",' type="module"'," async","><\/script>"],En=["<script",' type="module" async',"><\/script>"];const An=T("<!DOCTYPE html>");function Ie(e,t,n=[]){for(let s=0;s<t.length;s++){const r=t[s];if(r.path!==e[0].path)continue;let a=[...n,r];if(r.children){const o=e.slice(1);if(o.length===0||(a=Ie(o,r.children,a),!a))continue}return a}}function $n(e){const t=O(),n=t.nonce;let s=[];return Promise.resolve().then(async()=>{let r=[];if(t.router&&t.router.matches){const a=[...t.router.matches];for(;a.length&&(!a[0].info||!a[0].info.filesystem);)a.shift();const o=a.length&&Ie(a,t.routes);if(o)for(let i=0;i<o.length;i++){const l=o[i],c=globalThis.MANIFEST.client.inputs[l.$component.src];r.push(c.assets())}}s=await Promise.all(r).then(a=>[...new Map(a.flat().map(o=>[o.attrs.key,o])).values()].filter(o=>o.attrs.rel==="modulepreload"&&!t.assets.find(i=>i.attrs.key===o.attrs.key)))}),Je(()=>s.length?s.map(r=>Z(r)):void 0),w(ye,{get children(){return[An,w(Rn,{get children(){return w(e.document,{get assets(){return[w(Ge,{}),t.assets.map(r=>Z(r,n))]},get scripts(){return n?[T(he,H()+W("nonce",$(n,!0),!1),`window.manifest = ${JSON.stringify(t.manifest)}`),T(Sn,H(),W("nonce",$(n,!0),!1),W("src",$(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]:[T(he,H(),`window.manifest = ${JSON.stringify(t.manifest)}`),T(En,H(),W("src",$(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]},get children(){return w(Ve,{get children(){return w(bn,{get children(){return w(yn,{})}})}})}})}})]}})}function Tn(e){let t;const n=Ue(e),s={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(n,{...s,body:e.node.req.body}):new Request(n,{...s,get body(){return t||(t=_n(e),t)}})}function Pn(e){return e.web??={request:Tn(e),url:Ue(e)},e.web.request}function Cn(){return Nn()}const _e=Symbol("$HTTPEvent");function xn(e){return typeof e=="object"&&(e instanceof Y||e?.[_e]instanceof Y||e?.__is_event__===!0)}function R(e){return function(...t){let n=t[0];if(xn(n))t[0]=n instanceof Y||n.__is_event__?n:n[_e];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(n=Cn(),!n)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(n)}return e(...t)}}const Ue=R(St),Ln=R(yt),ee=R(pt),fe=R(wt),kn=R(vt),K=R(Et),de=R(At),qn=R($t),Hn=R(Tt),pe=R(mt),On=R(bt),Fn=R(Rt),In=R(gt),_n=R(Ct),Un=R(Pt),Mn=R(Pn);function jn(){return Lt("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:kt})}function Nn(){return jn().use().event}const X=Symbol("fetchEvent");function Dn(e){return{request:Mn(e),response:Kn(e),clientAddress:Ln(e),locals:{},nativeEvent:e}}function Bn(e){if(!e[X]){const t=Dn(e);e[X]=t}return e[X]}class Wn{event;constructor(t){this.event=t}get(t){const n=de(this.event,t);return Array.isArray(n)?n.join(", "):n||null}has(t){return this.get(t)!==void 0}set(t,n){return qn(this.event,t,n)}delete(t){return Un(this.event,t)}append(t,n){Hn(this.event,t,n)}getSetCookie(){const t=de(this.event,"Set-Cookie");return Array.isArray(t)?t:[t]}forEach(t){return Object.entries(K(this.event)).forEach(([n,s])=>t(Array.isArray(s)?s.join(", "):s,n,this))}entries(){return Object.entries(K(this.event)).map(([t,n])=>[t,Array.isArray(n)?n.join(", "):n])[Symbol.iterator]()}keys(){return Object.keys(K(this.event))[Symbol.iterator]()}values(){return Object.values(K(this.event)).map(t=>Array.isArray(t)?t.join(", "):t)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}function Kn(e){return{get status(){return fe(e)},set status(t){ee(e,t)},get statusText(){return kn(e)},set statusText(t){ee(e,fe(e),t)},headers:new Wn(e)}}function zn(e){const t=On(e.nativeEvent,"flash");if(!t)return;let n=JSON.parse(t);if(!n||!n.result)return;const s=[...n.input.slice(0,-1),new Map(n.input[n.input.length-1])];Fn(e.nativeEvent,"flash","",{maxAge:0});const r=n.error?new Error(n.result):n.result;return{input:s,url:n.url,pending:!1,result:n.thrown?void 0:r,error:n.thrown?r:void 0}}async function Jn(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Content-Type","text/html"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],router:{submission:zn(e)},routes:Oe(),complete:!1,$islands:new Set})}const Gn=new Set([301,302,303,307,308]);function te(e){return e.status&&Gn.has(e.status)?e.status:302}function Vn(e,t,n={}){return xt({handler:s=>{const r=Bn(s);return dt(r,async()=>{const a=dn(new URL(r.request.url).pathname,r.request.method);if(a){const f=(await a.handler.import())[r.request.method];r.params=a.params||{},G.context={event:r};const S=await f(r);if(S!==void 0)return S;if(r.request.method!=="GET")throw new Error(`API handler for ${r.request.method} "${r.request.url}" did not return a response.`)}const o=await t(r),i=typeof n=="function"?await n(o):{...n},l=i.mode||"stream";if(i.nonce&&(o.nonce=i.nonce),l==="sync"){const d=Xe(()=>(G.context.event=o,e(o)),i);if(o.complete=!0,o.response&&o.response.headers.get("Location")){const f=te(o.response);return pe(s,o.response.headers.get("Location"),f)}return d}if(i.onCompleteAll){const d=i.onCompleteAll;i.onCompleteAll=f=>{ge(o)(f),d(f)}}else i.onCompleteAll=ge(o);if(i.onCompleteShell){const d=i.onCompleteShell;i.onCompleteShell=f=>{me(o,s)(),d(f)}}else i.onCompleteShell=me(o,s);const c=Ye(()=>(G.context.event=o,e(o)),i);if(o.response&&o.response.headers.get("Location")){const d=te(o.response);return pe(s,o.response.headers.get("Location"),d)}if(l==="async")return c;const{writable:m,readable:b}=new TransformStream;return c.pipeTo(m),b})}})}function me(e,t){return()=>{if(e.response&&e.response.headers.get("Location")){const n=te(e.response);ee(t,n),In(t,"Location",e.response.headers.get("Location"))}}}function ge(e){return({write:t})=>{e.complete=!0;const n=e.response&&e.response.headers.get("Location");n&&t(`<script>window.location="${n}"<\/script>`)}}function Xn(e,t){return Vn(e,Jn,t)}var Yn=['<head><script defer data-domain="ancgames.com" src="https://plausible.io/js/script.js"><\/script><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',"</head>"],Qn=["<html",' lang="en">','<body><div id="app">',"</div><!--$-->","<!--/--></body></html>"];const ir=Xn(()=>w($n,{document:({assets:e,children:t,scripts:n})=>T(Qn,H(),w(ye,{get children(){return T(Yn,$(e))}}),$(t),$(n))}));export{ir as default};
