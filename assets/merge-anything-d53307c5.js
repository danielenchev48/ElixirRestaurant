import{i as c,a as m,b as O}from"./is-what-e9599878.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function o(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var a=Array(r),u=0,e=0;e<t;e++)for(var b=arguments[e],l=0,v=b.length;l<v;l++,u++)a[u]=b[l];return a}function d(r,e,t,a){var u=a.propertyIsEnumerable(e)?"enumerable":"nonenumerable";u==="enumerable"&&(r[e]=t),u==="nonenumerable"&&Object.defineProperty(r,e,{value:t,enumerable:!1,writable:!0,configurable:!0})}function g(r,e,t){if(!c(e))return t&&m(t)&&t.forEach(function(s){e=s(r,e)}),e;var a={};if(c(r)){var u=Object.getOwnPropertyNames(r),b=Object.getOwnPropertySymbols(r);a=o(u,b).reduce(function(s,n){var f=r[n];return(!O(n)&&!Object.getOwnPropertyNames(e).includes(n)||O(n)&&!Object.getOwnPropertySymbols(e).includes(n))&&d(s,n,f,r),s},{})}var l=Object.getOwnPropertyNames(e),v=Object.getOwnPropertySymbols(e),P=o(l,v).reduce(function(s,n){var f=e[n],p=c(r)?r[n]:void 0;return t&&m(t)&&t.forEach(function(j){f=j(p,f)}),p!==void 0&&c(f)&&(f=g(p,f,t)),d(s,n,f,e),s},a);return P}function y(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var a=null,u=r;return c(r)&&r.extensions&&Object.keys(r).length===1&&(u={},a=r.extensions),e.reduce(function(b,l){return g(b,l,a)},u)}export{y as m};
