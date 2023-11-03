/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}var W;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(W||(W={}));const pt="popstate";function Kr(e){e===void 0&&(e={});function t(n,i){let{pathname:d,search:s,hash:u}=n.location;return Ce("",{pathname:d,search:s,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:je(i)}return er(t,r,null,e)}function U(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ue(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zt(){return Math.random().toString(36).substr(2,8)}function mt(e,t){return{usr:e.state,key:e.key,idx:t}}function Ce(e,t,r,n){return r===void 0&&(r=null),I({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?he(t):t,{state:r,key:t&&t.key||n||Zt()})}function je(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function he(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function er(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:d=!1}=n,s=i.history,u=W.Pop,f=null,h=m();h==null&&(h=0,s.replaceState(I({},s.state,{idx:h}),""));function m(){return(s.state||{idx:null}).idx}function E(){u=W.Pop;let b=m(),P=b==null?null:b-h;h=b,f&&f({action:u,location:R.location,delta:P})}function D(b,P){u=W.Push;let $=Ce(R.location,b,P);r&&r($,b),h=m()+1;let K=mt($,h),l=R.createHref($);try{s.pushState(K,"",l)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(l)}d&&f&&f({action:u,location:R.location,delta:1})}function C(b,P){u=W.Replace;let $=Ce(R.location,b,P);r&&r($,b),h=m();let K=mt($,h),l=R.createHref($);s.replaceState(K,"",l),d&&f&&f({action:u,location:R.location,delta:0})}function M(b){let P=i.location.origin!=="null"?i.location.origin:i.location.href,$=typeof b=="string"?b:je(b);return U(P,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,P)}let R={get action(){return u},get location(){return e(i,s)},listen(b){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(pt,E),f=b,()=>{i.removeEventListener(pt,E),f=null}},createHref(b){return t(i,b)},createURL:M,encodeLocation(b){let P=M(b);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:D,replace:C,go(b){return s.go(b)}};return R}var z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(z||(z={}));const tr=new Set(["lazy","caseSensitive","path","id","index","children"]);function rr(e){return e.index===!0}function Qe(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((i,d)=>{let s=[...r,d],u=typeof i.id=="string"?i.id:s.join("-");if(U(i.index!==!0||!i.children,"Cannot specify children on an index route"),U(!n[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),rr(i)){let f=I({},i,t(i),{id:u});return n[u]=f,f}else{let f=I({},i,t(i),{id:u,children:void 0});return n[u]=f,i.children&&(f.children=Qe(i.children,t,s,n)),f}})}function Te(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?he(t):t,i=He(n.pathname||"/",r);if(i==null)return null;let d=Lt(e);ar(d);let s=null;for(let u=0;s==null&&u<d.length;++u)s=hr(d[u],gr(i));return s}function nr(e,t){let{route:r,pathname:n,params:i}=e;return{id:r.id,pathname:n,params:i,data:t[r.id],handle:r.handle}}function Lt(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(d,s,u)=>{let f={relativePath:u===void 0?d.path||"":u,caseSensitive:d.caseSensitive===!0,childrenIndex:s,route:d};f.relativePath.startsWith("/")&&(U(f.relativePath.startsWith(n),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(n.length));let h=Fe([n,f.relativePath]),m=r.concat(f);d.children&&d.children.length>0&&(U(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Lt(d.children,t,m,h)),!(d.path==null&&!d.index)&&t.push({path:h,score:fr(h,d.index),routesMeta:m})};return e.forEach((d,s)=>{var u;if(d.path===""||!((u=d.path)!=null&&u.includes("?")))i(d,s);else for(let f of Tt(d.path))i(d,s,f)}),t}function Tt(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),d=r.replace(/\?$/,"");if(n.length===0)return i?[d,""]:[d];let s=Tt(n.join("/")),u=[];return u.push(...s.map(f=>f===""?d:[d,f].join("/"))),i&&u.push(...s),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function ar(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ur(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ir=/^:\w+$/,or=3,lr=2,sr=1,dr=10,cr=-2,gt=e=>e==="*";function fr(e,t){let r=e.split("/"),n=r.length;return r.some(gt)&&(n+=cr),t&&(n+=lr),r.filter(i=>!gt(i)).reduce((i,d)=>i+(ir.test(d)?or:d===""?sr:dr),n)}function ur(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function hr(e,t){let{routesMeta:r}=e,n={},i="/",d=[];for(let s=0;s<r.length;++s){let u=r[s],f=s===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=pr({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},h);if(!m)return null;Object.assign(n,m.params);let E=u.route;d.push({params:n,pathname:Fe([i,m.pathname]),pathnameBase:Rr(Fe([i,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(i=Fe([i,m.pathnameBase]))}return d}function pr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=mr(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let d=i[0],s=d.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:n.reduce((h,m,E)=>{let{paramName:D,isOptional:C}=m;if(D==="*"){let R=u[E]||"";s=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const M=u[E];return C&&!M?h[D]=void 0:h[D]=yr(M||"",D),h},{}),pathname:d,pathnameBase:s,pattern:e}}function mr(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ue(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,u,f)=>(n.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function gr(e){try{return decodeURI(e)}catch(t){return ue(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yr(e,t){try{return decodeURIComponent(e)}catch(r){return ue(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function He(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function vr(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?he(e):e;return{pathname:r?r.startsWith("/")?r:wr(r,t):t,search:Dr(n),hash:xr(i)}}function wr(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Je(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ft(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function br(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=he(e):(i=I({},e),U(!i.pathname||!i.pathname.includes("?"),Je("?","pathname","search",i)),U(!i.pathname||!i.pathname.includes("#"),Je("#","pathname","hash",i)),U(!i.search||!i.search.includes("#"),Je("#","search","hash",i)));let d=e===""||i.pathname==="",s=d?"/":i.pathname,u;if(n||s==null)u=r;else{let E=t.length-1;if(s.startsWith("..")){let D=s.split("/");for(;D[0]==="..";)D.shift(),E-=1;i.pathname=D.join("/")}u=E>=0?t[E]:"/"}let f=vr(i,u),h=s&&s!=="/"&&s.endsWith("/"),m=(d||s===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(h||m)&&(f.pathname+="/"),f}const Fe=e=>e.join("/").replace(/\/\/+/g,"/"),Rr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class At{constructor(t,r,n,i){i===void 0&&(i=!1),this.status=t,this.statusText=r||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function Mr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ut=["post","put","patch","delete"],Er=new Set(Ut),Sr=["get",...Ut],Pr=new Set(Sr),Lr=new Set([301,302,303,307,308]),Tr=new Set([307,308]),Ge={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fr={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ee={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ct=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ar=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),jt="remix-router-transitions";function Vr(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;U(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let a=e.detectErrorBoundary;i=o=>({hasErrorBoundary:a(o)})}else i=Ar;let d={},s=Qe(e.routes,i,void 0,d),u,f=e.basename||"/",h=I({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,E=new Set,D=null,C=null,M=null,R=e.hydrationData!=null,b=Te(s,e.history.location,f),P=null;if(b==null){let a=k(404,{pathname:e.history.location.pathname}),{matches:o,route:c}=Mt(s);b=o,P={[c.id]:a}}let $=!b.some(a=>a.route.lazy)&&(!b.some(a=>a.route.loader)||e.hydrationData!=null),K,l={historyAction:e.history.action,location:e.history.location,matches:b,initialized:$,navigation:Ge,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||P,fetchers:new Map,blockers:new Map},L=W.Pop,V=!1,O,G=!1,q=new Map,X=null,pe=!1,ae=!1,Oe=[],Ie=[],_=new Map,Ne=0,ve=-1,me=new Map,Q=new Set,ge=new Map,we=new Map,ie=new Set,oe=new Map,le=new Map,We=!1;function zt(){if(m=e.history.listen(a=>{let{action:o,location:c,delta:p}=a;if(We){We=!1;return}ue(le.size===0||p!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let y=ct({currentLocation:l.location,nextLocation:c,historyAction:o});if(y&&p!=null){We=!0,e.history.go(p*-1),_e(y,{state:"blocked",location:c,proceed(){_e(y,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),e.history.go(p)},reset(){let v=new Map(l.blockers);v.set(y,Ee),B({blockers:v})}});return}return se(o,c)}),r){Wr(t,q);let a=()=>$r(t,q);t.addEventListener("pagehide",a),X=()=>t.removeEventListener("pagehide",a)}return l.initialized||se(W.Pop,l.location),K}function _t(){m&&m(),X&&X(),E.clear(),O&&O.abort(),l.fetchers.forEach((a,o)=>ze(o)),l.blockers.forEach((a,o)=>dt(o))}function Bt(a){return E.add(a),()=>E.delete(a)}function B(a,o){l=I({},l,a);let c=[],p=[];h.v7_fetcherPersist&&l.fetchers.forEach((y,v)=>{y.state==="idle"&&(ie.has(v)?p.push(v):c.push(v))}),E.forEach(y=>y(l,{deletedFetchers:p,unstable_viewTransitionOpts:o})),h.v7_fetcherPersist&&(c.forEach(y=>l.fetchers.delete(y)),p.forEach(y=>ze(y)))}function be(a,o){var c,p;let y=l.actionData!=null&&l.navigation.formMethod!=null&&J(l.navigation.formMethod)&&l.navigation.state==="loading"&&((c=a.state)==null?void 0:c._isRedirect)!==!0,v;o.actionData?Object.keys(o.actionData).length>0?v=o.actionData:v=null:y?v=l.actionData:v=null;let x=o.loaderData?xt(l.loaderData,o.loaderData,o.matches||[],o.errors):l.loaderData,w=l.blockers;w.size>0&&(w=new Map(w),w.forEach((j,S)=>w.set(S,Ee)));let g=V===!0||l.navigation.formMethod!=null&&J(l.navigation.formMethod)&&((p=a.state)==null?void 0:p._isRedirect)!==!0;u&&(s=u,u=void 0),pe||L===W.Pop||(L===W.Push?e.history.push(a,a.state):L===W.Replace&&e.history.replace(a,a.state));let F;if(L===W.Pop){let j=q.get(l.location.pathname);j&&j.has(a.pathname)?F={currentLocation:l.location,nextLocation:a}:q.has(a.pathname)&&(F={currentLocation:a,nextLocation:l.location})}else if(G){let j=q.get(l.location.pathname);j?j.add(a.pathname):(j=new Set([a.pathname]),q.set(l.location.pathname,j)),F={currentLocation:l.location,nextLocation:a}}B(I({},o,{actionData:v,loaderData:x,historyAction:L,location:a,initialized:!0,navigation:Ge,revalidation:"idle",restoreScrollPosition:ut(a,o.matches||l.matches),preventScrollReset:g,blockers:w}),F),L=W.Pop,V=!1,G=!1,pe=!1,ae=!1,Oe=[],Ie=[]}async function nt(a,o){if(typeof a=="number"){e.history.go(a);return}let c=Ze(l.location,l.matches,f,h.v7_prependBasename,a,o==null?void 0:o.fromRouteId,o==null?void 0:o.relative),{path:p,submission:y,error:v}=yt(h.v7_normalizeFormMethod,!1,c,o),x=l.location,w=Ce(l.location,p,o&&o.state);w=I({},w,e.history.encodeLocation(w));let g=o&&o.replace!=null?o.replace:void 0,F=W.Push;g===!0?F=W.Replace:g===!1||y!=null&&J(y.formMethod)&&y.formAction===l.location.pathname+l.location.search&&(F=W.Replace);let j=o&&"preventScrollReset"in o?o.preventScrollReset===!0:void 0,S=ct({currentLocation:x,nextLocation:w,historyAction:F});if(S){_e(S,{state:"blocked",location:w,proceed(){_e(S,{state:"proceeding",proceed:void 0,reset:void 0,location:w}),nt(a,o)},reset(){let A=new Map(l.blockers);A.set(S,Ee),B({blockers:A})}});return}return await se(F,w,{submission:y,pendingError:v,preventScrollReset:j,replace:o&&o.replace,enableViewTransition:o&&o.unstable_viewTransition})}function Ht(){if($e(),B({revalidation:"loading"}),l.navigation.state!=="submitting"){if(l.navigation.state==="idle"){se(l.historyAction,l.location,{startUninterruptedRevalidation:!0});return}se(L||l.historyAction,l.navigation.location,{overrideNavigation:l.navigation})}}async function se(a,o,c){O&&O.abort(),O=null,L=a,pe=(c&&c.startUninterruptedRevalidation)===!0,Gt(l.location,l.matches),V=(c&&c.preventScrollReset)===!0,G=(c&&c.enableViewTransition)===!0;let p=u||s,y=c&&c.overrideNavigation,v=Te(p,o,f);if(!v){let A=k(404,{pathname:o.pathname}),{matches:H,route:de}=Mt(p);Ke(),be(o,{matches:H,loaderData:{},errors:{[de.id]:A}});return}if(l.initialized&&!ae&&Ir(l.location,o)&&!(c&&c.submission&&J(c.submission.formMethod))){be(o,{matches:v});return}O=new AbortController;let x=Pe(e.history,o,O.signal,c&&c.submission),w,g;if(c&&c.pendingError)g={[Ae(v).route.id]:c.pendingError};else if(c&&c.submission&&J(c.submission.formMethod)){let A=await Wt(x,o,c.submission,v,{replace:c.replace});if(A.shortCircuited)return;w=A.pendingActionData,g=A.pendingActionError,y=Xe(o,c.submission),x=new Request(x.url,{signal:x.signal})}let{shortCircuited:F,loaderData:j,errors:S}=await $t(x,o,v,y,c&&c.submission,c&&c.fetcherSubmission,c&&c.replace,w,g);F||(O=null,be(o,I({matches:v},w?{actionData:w}:{},{loaderData:j,errors:S})))}async function Wt(a,o,c,p,y){y===void 0&&(y={}),$e();let v=Br(o,c);B({navigation:v});let x,w=tt(p,o);if(!w.route.action&&!w.route.lazy)x={type:z.error,error:k(405,{method:a.method,pathname:o.pathname,routeId:w.route.id})};else if(x=await Se("action",a,w,p,d,i,f),a.signal.aborted)return{shortCircuited:!0};if(ye(x)){let g;return y&&y.replace!=null?g=y.replace:g=x.location===l.location.pathname+l.location.search,await Re(l,x,{submission:c,replace:g}),{shortCircuited:!0}}if(Ue(x)){let g=Ae(p,w.route.id);return(y&&y.replace)!==!0&&(L=W.Push),{pendingActionData:{},pendingActionError:{[g.route.id]:x.error}}}if(fe(x))throw k(400,{type:"defer-action"});return{pendingActionData:{[w.route.id]:x.data}}}async function $t(a,o,c,p,y,v,x,w,g){let F=p||Xe(o,y),j=y||v||Pt(F),S=u||s,[A,H]=vt(e.history,l,c,j,o,ae,Oe,Ie,ge,Q,S,f,w,g);if(Ke(T=>!(c&&c.some(Y=>Y.route.id===T))||A&&A.some(Y=>Y.route.id===T)),ve=++Ne,A.length===0&&H.length===0){let T=lt();return be(o,I({matches:c,loaderData:{},errors:g||null},w?{actionData:w}:{},T?{fetchers:new Map(l.fetchers)}:{})),{shortCircuited:!0}}if(!pe){H.forEach(Y=>{let re=l.fetchers.get(Y.key),N=Le(void 0,re?re.data:void 0);l.fetchers.set(Y.key,N)});let T=w||l.actionData;B(I({navigation:F},T?Object.keys(T).length===0?{actionData:null}:{actionData:T}:{},H.length>0?{fetchers:new Map(l.fetchers)}:{}))}H.forEach(T=>{_.has(T.key)&&ee(T.key),T.controller&&_.set(T.key,T.controller)});let de=()=>H.forEach(T=>ee(T.key));O&&O.signal.addEventListener("abort",de);let{results:ce,loaderResults:xe,fetcherResults:Ve}=await it(l.matches,c,A,H,a);if(a.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",de),H.forEach(T=>_.delete(T.key));let Z=Et(ce);if(Z){if(Z.idx>=A.length){let T=H[Z.idx-A.length].key;Q.add(T)}return await Re(l,Z.result,{replace:x}),{shortCircuited:!0}}let{loaderData:te,errors:Be}=Dt(l,c,A,xe,g,H,Ve,oe);oe.forEach((T,Y)=>{T.subscribe(re=>{(re||T.done)&&oe.delete(Y)})});let ke=lt(),qe=st(ve),Ye=ke||qe||H.length>0;return I({loaderData:te,errors:Be},Ye?{fetchers:new Map(l.fetchers)}:{})}function at(a){return h.v7_fetcherPersist&&(we.set(a,(we.get(a)||0)+1),ie.has(a)&&ie.delete(a)),l.fetchers.get(a)||Fr}function Kt(a,o,c,p){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");_.has(a)&&ee(a);let y=u||s,v=Ze(l.location,l.matches,f,h.v7_prependBasename,c,o,p==null?void 0:p.relative),x=Te(y,v,f);if(!x){De(a,o,k(404,{pathname:v}));return}let{path:w,submission:g,error:F}=yt(h.v7_normalizeFormMethod,!0,v,p);if(F){De(a,o,F);return}let j=tt(x,w);if(V=(p&&p.preventScrollReset)===!0,g&&J(g.formMethod)){Vt(a,o,w,j,x,g);return}ge.set(a,{routeId:o,path:w}),kt(a,o,w,j,x,g)}async function Vt(a,o,c,p,y,v){if($e(),ge.delete(a),!p.route.action&&!p.route.lazy){let N=k(405,{method:v.formMethod,pathname:c,routeId:o});De(a,o,N);return}let x=l.fetchers.get(a),w=Hr(v,x);l.fetchers.set(a,w),B({fetchers:new Map(l.fetchers)});let g=new AbortController,F=Pe(e.history,c,g.signal,v);_.set(a,g);let j=Ne,S=await Se("action",F,p,y,d,i,f);if(F.signal.aborted){_.get(a)===g&&_.delete(a);return}if(ie.has(a)){l.fetchers.set(a,ne(void 0)),B({fetchers:new Map(l.fetchers)});return}if(ye(S))if(_.delete(a),ve>j){let N=ne(void 0);l.fetchers.set(a,N),B({fetchers:new Map(l.fetchers)});return}else{Q.add(a);let N=Le(v);return l.fetchers.set(a,N),B({fetchers:new Map(l.fetchers)}),Re(l,S,{fetcherSubmission:v})}if(Ue(S)){De(a,o,S.error);return}if(fe(S))throw k(400,{type:"defer-action"});let A=l.navigation.location||l.location,H=Pe(e.history,A,g.signal),de=u||s,ce=l.navigation.state!=="idle"?Te(de,l.navigation.location,f):l.matches;U(ce,"Didn't find any matches after fetcher action");let xe=++Ne;me.set(a,xe);let Ve=Le(v,S.data);l.fetchers.set(a,Ve);let[Z,te]=vt(e.history,l,ce,v,A,ae,Oe,Ie,ge,Q,de,f,{[p.route.id]:S.data},void 0);te.filter(N=>N.key!==a).forEach(N=>{let Me=N.key,ht=l.fetchers.get(Me),Qt=Le(void 0,ht?ht.data:void 0);l.fetchers.set(Me,Qt),_.has(Me)&&ee(Me),N.controller&&_.set(Me,N.controller)}),B({fetchers:new Map(l.fetchers)});let Be=()=>te.forEach(N=>ee(N.key));g.signal.addEventListener("abort",Be);let{results:ke,loaderResults:qe,fetcherResults:Ye}=await it(l.matches,ce,Z,te,H);if(g.signal.aborted)return;g.signal.removeEventListener("abort",Be),me.delete(a),_.delete(a),te.forEach(N=>_.delete(N.key));let T=Et(ke);if(T){if(T.idx>=Z.length){let N=te[T.idx-Z.length].key;Q.add(N)}return Re(l,T.result)}let{loaderData:Y,errors:re}=Dt(l,l.matches,Z,qe,void 0,te,Ye,oe);if(l.fetchers.has(a)){let N=ne(S.data);l.fetchers.set(a,N)}st(xe),l.navigation.state==="loading"&&xe>ve?(U(L,"Expected pending action"),O&&O.abort(),be(l.navigation.location,{matches:ce,loaderData:Y,errors:re,fetchers:new Map(l.fetchers)})):(B({errors:re,loaderData:xt(l.loaderData,Y,ce,re),fetchers:new Map(l.fetchers)}),ae=!1)}async function kt(a,o,c,p,y,v){let x=l.fetchers.get(a),w=Le(v,x?x.data:void 0);l.fetchers.set(a,w),B({fetchers:new Map(l.fetchers)});let g=new AbortController,F=Pe(e.history,c,g.signal);_.set(a,g);let j=Ne,S=await Se("loader",F,p,y,d,i,f);if(fe(S)&&(S=await Nt(S,F.signal,!0)||S),_.get(a)===g&&_.delete(a),F.signal.aborted)return;if(ie.has(a)){l.fetchers.set(a,ne(void 0)),B({fetchers:new Map(l.fetchers)});return}if(ye(S))if(ve>j){let H=ne(void 0);l.fetchers.set(a,H),B({fetchers:new Map(l.fetchers)});return}else{Q.add(a),await Re(l,S);return}if(Ue(S)){De(a,o,S.error);return}U(!fe(S),"Unhandled fetcher deferred data");let A=ne(S.data);l.fetchers.set(a,A),B({fetchers:new Map(l.fetchers)})}async function Re(a,o,c){let{submission:p,fetcherSubmission:y,replace:v}=c===void 0?{}:c;o.revalidate&&(ae=!0);let x=Ce(a.location,o.location,{_isRedirect:!0});if(U(x,"Expected a location on the redirect navigation"),r){let A=!1;if(o.reloadDocument)A=!0;else if(Ct.test(o.location)){const H=e.history.createURL(o.location);A=H.origin!==t.location.origin||He(H.pathname,f)==null}if(A){v?t.location.replace(o.location):t.location.assign(o.location);return}}O=null;let w=v===!0?W.Replace:W.Push,{formMethod:g,formAction:F,formEncType:j}=a.navigation;!p&&!y&&g&&F&&j&&(p=Pt(a.navigation));let S=p||y;if(Tr.has(o.status)&&S&&J(S.formMethod))await se(w,x,{submission:I({},S,{formAction:o.location}),preventScrollReset:V});else{let A=Xe(x,p);await se(w,x,{overrideNavigation:A,fetcherSubmission:y,preventScrollReset:V})}}async function it(a,o,c,p,y){let v=await Promise.all([...c.map(g=>Se("loader",y,g,o,d,i,f)),...p.map(g=>g.matches&&g.match&&g.controller?Se("loader",Pe(e.history,g.path,g.controller.signal),g.match,g.matches,d,i,f):{type:z.error,error:k(404,{pathname:g.path})})]),x=v.slice(0,c.length),w=v.slice(c.length);return await Promise.all([St(a,c,x,x.map(()=>y.signal),!1,l.loaderData),St(a,p.map(g=>g.match),w,p.map(g=>g.controller?g.controller.signal:null),!0)]),{results:v,loaderResults:x,fetcherResults:w}}function $e(){ae=!0,Oe.push(...Ke()),ge.forEach((a,o)=>{_.has(o)&&(Ie.push(o),ee(o))})}function De(a,o,c){let p=Ae(l.matches,o);ze(a),B({errors:{[p.route.id]:c},fetchers:new Map(l.fetchers)})}function ze(a){let o=l.fetchers.get(a);_.has(a)&&!(o&&o.state==="loading"&&me.has(a))&&ee(a),ge.delete(a),me.delete(a),Q.delete(a),ie.delete(a),l.fetchers.delete(a)}function qt(a){if(h.v7_fetcherPersist){let o=(we.get(a)||0)-1;o<=0?(we.delete(a),ie.add(a)):we.set(a,o)}else ze(a);B({fetchers:new Map(l.fetchers)})}function ee(a){let o=_.get(a);U(o,"Expected fetch controller: "+a),o.abort(),_.delete(a)}function ot(a){for(let o of a){let c=at(o),p=ne(c.data);l.fetchers.set(o,p)}}function lt(){let a=[],o=!1;for(let c of Q){let p=l.fetchers.get(c);U(p,"Expected fetcher: "+c),p.state==="loading"&&(Q.delete(c),a.push(c),o=!0)}return ot(a),o}function st(a){let o=[];for(let[c,p]of me)if(p<a){let y=l.fetchers.get(c);U(y,"Expected fetcher: "+c),y.state==="loading"&&(ee(c),me.delete(c),o.push(c))}return ot(o),o.length>0}function Yt(a,o){let c=l.blockers.get(a)||Ee;return le.get(a)!==o&&le.set(a,o),c}function dt(a){l.blockers.delete(a),le.delete(a)}function _e(a,o){let c=l.blockers.get(a)||Ee;U(c.state==="unblocked"&&o.state==="blocked"||c.state==="blocked"&&o.state==="blocked"||c.state==="blocked"&&o.state==="proceeding"||c.state==="blocked"&&o.state==="unblocked"||c.state==="proceeding"&&o.state==="unblocked","Invalid blocker state transition: "+c.state+" -> "+o.state);let p=new Map(l.blockers);p.set(a,o),B({blockers:p})}function ct(a){let{currentLocation:o,nextLocation:c,historyAction:p}=a;if(le.size===0)return;le.size>1&&ue(!1,"A router only supports one blocker at a time");let y=Array.from(le.entries()),[v,x]=y[y.length-1],w=l.blockers.get(v);if(!(w&&w.state==="proceeding")&&x({currentLocation:o,nextLocation:c,historyAction:p}))return v}function Ke(a){let o=[];return oe.forEach((c,p)=>{(!a||a(p))&&(c.cancel(),o.push(p),oe.delete(p))}),o}function Jt(a,o,c){if(D=a,M=o,C=c||null,!R&&l.navigation===Ge){R=!0;let p=ut(l.location,l.matches);p!=null&&B({restoreScrollPosition:p})}return()=>{D=null,M=null,C=null}}function ft(a,o){return C&&C(a,o.map(p=>nr(p,l.loaderData)))||a.key}function Gt(a,o){if(D&&M){let c=ft(a,o);D[c]=M()}}function ut(a,o){if(D){let c=ft(a,o),p=D[c];if(typeof p=="number")return p}return null}function Xt(a){d={},u=Qe(a,i,void 0,d)}return K={get basename(){return f},get state(){return l},get routes(){return s},get window(){return t},initialize:zt,subscribe:Bt,enableScrollRestoration:Jt,navigate:nt,fetch:Kt,revalidate:Ht,createHref:a=>e.history.createHref(a),encodeLocation:a=>e.history.encodeLocation(a),getFetcher:at,deleteFetcher:qt,dispose:_t,getBlocker:Yt,deleteBlocker:dt,_internalFetchControllers:_,_internalActiveDeferreds:oe,_internalSetRoutes:Xt},K}function Ur(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ze(e,t,r,n,i,d,s){let u,f;if(d!=null&&s!=="path"){u=[];for(let m of t)if(u.push(m),m.route.id===d){f=m;break}}else u=t,f=t[t.length-1];let h=br(i||".",Ft(u).map(m=>m.pathnameBase),He(e.pathname,r)||e.pathname,s==="path");return i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f&&f.route.index&&!rt(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),n&&r!=="/"&&(h.pathname=h.pathname==="/"?r:Fe([r,h.pathname])),je(h)}function yt(e,t,r,n){if(!n||!Ur(n))return{path:r};if(n.formMethod&&!_r(n.formMethod))return{path:r,error:k(405,{method:n.formMethod})};let i=()=>({path:r,error:k(400,{type:"invalid-body"})}),d=n.formMethod||"get",s=e?d.toUpperCase():d.toLowerCase(),u=It(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!J(s))return i();let D=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((C,M)=>{let[R,b]=M;return""+C+R+"="+b+`
`},""):String(n.body);return{path:r,submission:{formMethod:s,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:D}}}else if(n.formEncType==="application/json"){if(!J(s))return i();try{let D=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:s,formAction:u,formEncType:n.formEncType,formData:void 0,json:D,text:void 0}}}catch{return i()}}}U(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=et(n.formData),h=n.formData;else if(n.body instanceof FormData)f=et(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=Rt(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=Rt(f)}catch{return i()}let m={formMethod:s,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(J(m.formMethod))return{path:r,submission:m};let E=he(r);return t&&E.search&&rt(E.search)&&f.append("index",""),E.search="?"+f,{path:je(E),submission:m}}function Cr(e,t){let r=e;if(t){let n=e.findIndex(i=>i.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function vt(e,t,r,n,i,d,s,u,f,h,m,E,D,C){let M=C?Object.values(C)[0]:D?Object.values(D)[0]:void 0,R=e.createURL(t.location),b=e.createURL(i),P=C?Object.keys(C)[0]:void 0,K=Cr(r,P).filter((L,V)=>{if(L.route.lazy)return!0;if(L.route.loader==null)return!1;if(jr(t.loaderData,t.matches[V],L)||s.some(q=>q===L.route.id))return!0;let O=t.matches[V],G=L;return wt(L,I({currentUrl:R,currentParams:O.params,nextUrl:b,nextParams:G.params},n,{actionResult:M,defaultShouldRevalidate:d||R.pathname+R.search===b.pathname+b.search||R.search!==b.search||Ot(O,G)}))}),l=[];return f.forEach((L,V)=>{if(!r.some(pe=>pe.route.id===L.routeId))return;let O=Te(m,L.path,E);if(!O){l.push({key:V,routeId:L.routeId,path:L.path,matches:null,match:null,controller:null});return}let G=t.fetchers.get(V),q=tt(O,L.path),X=!1;h.has(V)?X=!1:u.includes(V)?X=!0:G&&G.state!=="idle"&&G.data===void 0?X=d:X=wt(q,I({currentUrl:R,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:r[r.length-1].params},n,{actionResult:M,defaultShouldRevalidate:d})),X&&l.push({key:V,routeId:L.routeId,path:L.path,matches:O,match:q,controller:new AbortController})}),[K,l]}function jr(e,t,r){let n=!t||r.route.id!==t.route.id,i=e[r.route.id]===void 0;return n||i}function Ot(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function wt(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function bt(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let i=r[e.id];U(i,"No route found in manifest");let d={};for(let s in n){let f=i[s]!==void 0&&s!=="hasErrorBoundary";ue(!f,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!f&&!tr.has(s)&&(d[s]=n[s])}Object.assign(i,d),Object.assign(i,I({},t(i),{lazy:void 0}))}async function Se(e,t,r,n,i,d,s,u){u===void 0&&(u={});let f,h,m,E=M=>{let R,b=new Promise((P,$)=>R=$);return m=()=>R(),t.signal.addEventListener("abort",m),Promise.race([M({request:t,params:r.params,context:u.requestContext}),b])};try{let M=r.route[e];if(r.route.lazy)if(M){let R,b=await Promise.all([E(M).catch(P=>{R=P}),bt(r.route,d,i)]);if(R)throw R;h=b[0]}else if(await bt(r.route,d,i),M=r.route[e],M)h=await E(M);else if(e==="action"){let R=new URL(t.url),b=R.pathname+R.search;throw k(405,{method:t.method,pathname:b,routeId:r.route.id})}else return{type:z.data,data:void 0};else if(M)h=await E(M);else{let R=new URL(t.url),b=R.pathname+R.search;throw k(404,{pathname:b})}U(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(M){f=z.error,h=M}finally{m&&t.signal.removeEventListener("abort",m)}if(zr(h)){let M=h.status;if(Lr.has(M)){let P=h.headers.get("Location");if(U(P,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ct.test(P))P=Ze(new URL(t.url),n.slice(0,n.indexOf(r)+1),s,!0,P);else if(!u.isStaticRequest){let $=new URL(t.url),K=P.startsWith("//")?new URL($.protocol+P):new URL(P),l=He(K.pathname,s)!=null;K.origin===$.origin&&l&&(P=K.pathname+K.search+K.hash)}if(u.isStaticRequest)throw h.headers.set("Location",P),h;return{type:z.redirect,status:M,location:P,revalidate:h.headers.get("X-Remix-Revalidate")!==null,reloadDocument:h.headers.get("X-Remix-Reload-Document")!==null}}if(u.isRouteRequest)throw{type:f===z.error?z.error:z.data,response:h};let R,b=h.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?R=await h.json():R=await h.text(),f===z.error?{type:f,error:new At(M,h.statusText,R),headers:h.headers}:{type:z.data,data:R,statusCode:h.status,headers:h.headers}}if(f===z.error)return{type:f,error:h};if(Nr(h)){var D,C;return{type:z.deferred,deferredData:h,statusCode:(D=h.init)==null?void 0:D.status,headers:((C=h.init)==null?void 0:C.headers)&&new Headers(h.init.headers)}}return{type:z.data,data:h}}function Pe(e,t,r,n){let i=e.createURL(It(t)).toString(),d={signal:r};if(n&&J(n.formMethod)){let{formMethod:s,formEncType:u}=n;d.method=s.toUpperCase(),u==="application/json"?(d.headers=new Headers({"Content-Type":u}),d.body=JSON.stringify(n.json)):u==="text/plain"?d.body=n.text:u==="application/x-www-form-urlencoded"&&n.formData?d.body=et(n.formData):d.body=n.formData}return new Request(i,d)}function et(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function Rt(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function Or(e,t,r,n,i){let d={},s=null,u,f=!1,h={};return r.forEach((m,E)=>{let D=t[E].route.id;if(U(!ye(m),"Cannot handle redirect results in processLoaderData"),Ue(m)){let C=Ae(e,D),M=m.error;n&&(M=Object.values(n)[0],n=void 0),s=s||{},s[C.route.id]==null&&(s[C.route.id]=M),d[D]=void 0,f||(f=!0,u=Mr(m.error)?m.error.status:500),m.headers&&(h[D]=m.headers)}else fe(m)?(i.set(D,m.deferredData),d[D]=m.deferredData.data):d[D]=m.data,m.statusCode!=null&&m.statusCode!==200&&!f&&(u=m.statusCode),m.headers&&(h[D]=m.headers)}),n&&(s=n,d[Object.keys(n)[0]]=void 0),{loaderData:d,errors:s,statusCode:u||200,loaderHeaders:h}}function Dt(e,t,r,n,i,d,s,u){let{loaderData:f,errors:h}=Or(t,r,n,i,u);for(let m=0;m<d.length;m++){let{key:E,match:D,controller:C}=d[m];U(s!==void 0&&s[m]!==void 0,"Did not find corresponding fetcher result");let M=s[m];if(!(C&&C.signal.aborted))if(Ue(M)){let R=Ae(e.matches,D==null?void 0:D.route.id);h&&h[R.route.id]||(h=I({},h,{[R.route.id]:M.error})),e.fetchers.delete(E)}else if(ye(M))U(!1,"Unhandled fetcher revalidation redirect");else if(fe(M))U(!1,"Unhandled fetcher deferred data");else{let R=ne(M.data);e.fetchers.set(E,R)}}return{loaderData:f,errors:h}}function xt(e,t,r,n){let i=I({},t);for(let d of r){let s=d.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&d.route.loader&&(i[s]=e[s]),n&&n.hasOwnProperty(s))break}return i}function Ae(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Mt(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function k(e,t){let{pathname:r,routeId:n,method:i,type:d}=t===void 0?{}:t,s="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&r&&n?u="You made a "+i+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":d==="defer-action"?u="defer() is not supported in actions":d==="invalid-body"&&(u="Unable to encode submission body")):e===403?(s="Forbidden",u='Route "'+n+'" does not match URL "'+r+'"'):e===404?(s="Not Found",u='No route matches URL "'+r+'"'):e===405&&(s="Method Not Allowed",i&&r&&n?u="You made a "+i.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new At(e||500,s,new Error(u),!0)}function Et(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(ye(r))return{result:r,idx:t}}}function It(e){let t=typeof e=="string"?he(e):e;return je(I({},t,{hash:""}))}function Ir(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function fe(e){return e.type===z.deferred}function Ue(e){return e.type===z.error}function ye(e){return(e&&e.type)===z.redirect}function Nr(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function zr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function _r(e){return Pr.has(e.toLowerCase())}function J(e){return Er.has(e.toLowerCase())}async function St(e,t,r,n,i,d){for(let s=0;s<r.length;s++){let u=r[s],f=t[s];if(!f)continue;let h=e.find(E=>E.route.id===f.route.id),m=h!=null&&!Ot(h,f)&&(d&&d[f.route.id])!==void 0;if(fe(u)&&(i||m)){let E=n[s];U(E,"Expected an AbortSignal for revalidating fetcher deferred result"),await Nt(u,E,i).then(D=>{D&&(r[s]=D||r[s])})}}}async function Nt(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:z.data,data:e.deferredData.unwrappedData}}catch(i){return{type:z.error,error:i}}return{type:z.data,data:e.deferredData.data}}}function rt(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function tt(e,t){let r=typeof t=="string"?he(t).search:t.search;if(e[e.length-1].route.index&&rt(r||""))return e[e.length-1];let n=Ft(e);return n[n.length-1]}function Pt(e){let{formMethod:t,formAction:r,formEncType:n,text:i,formData:d,json:s}=e;if(!(!t||!r||!n)){if(i!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(d!=null)return{formMethod:t,formAction:r,formEncType:n,formData:d,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:s,text:void 0}}}function Xe(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Br(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Le(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Hr(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ne(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Wr(e,t){try{let r=e.sessionStorage.getItem(jt);if(r){let n=JSON.parse(r);for(let[i,d]of Object.entries(n||{}))d&&Array.isArray(d)&&t.set(i,new Set(d||[]))}}catch{}}function $r(e,t){if(t.size>0){let r={};for(let[n,i]of t)r[n]=[...i];try{e.sessionStorage.setItem(jt,JSON.stringify(r))}catch(n){ue(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}export{W as A,At as E,Mr as a,Kr as b,Vr as c,je as d,pr as e,Ft as g,U as i,Fe as j,Te as m,he as p,br as r,He as s};
