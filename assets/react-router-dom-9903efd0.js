import{r as c,R as E}from"./react-91cb21d0.js";import{R as O,N as T,u as x,a as P,b as B,c as F}from"./react-router-b395eb81.js";import{c as _,s as j,b as v}from"./@remix-run-d753ad9e.js";/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}function K(e,t){if(e==null)return{};var a={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(a[i]=e[i]);return a}function N(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I(e,t){return e.button===0&&(!t||t==="_self")&&!N(e)}const A=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],W="startTransition",y=E[W];function q(e){let{basename:t,children:a,future:r,window:i}=e,o=c.useRef();o.current==null&&(o.current=_({window:i,v5Compat:!0}));let s=o.current,[u,l]=c.useState({action:s.action,location:s.location}),{v7_startTransition:n}=r||{},f=c.useCallback(p=>{n&&y?y(()=>l(p)):l(p)},[l,n]);return c.useLayoutEffect(()=>s.listen(f),[s,f]),c.createElement(O,{basename:t,children:a,location:u.location,navigationType:u.action,navigator:s})}const z=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J=c.forwardRef(function(t,a){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:u,target:l,to:n,preventScrollReset:f}=t,p=K(t,A),{basename:L}=c.useContext(T),R,b=!1;if(typeof n=="string"&&H.test(n)&&(R=n,z))try{let d=new URL(window.location.href),h=n.startsWith("//")?new URL(d.protocol+n):new URL(n),g=j(h.pathname,L);h.origin===d.origin&&g!=null?n=g+h.search+h.hash:b=!0}catch{}let U=x(n,{relative:i}),C=D(n,{replace:s,state:u,target:l,preventScrollReset:f,relative:i});function k(d){r&&r(d),d.defaultPrevented||C(d)}return c.createElement("a",m({},p,{href:R||U,onClick:b||o?r:k,ref:a,target:l}))});var w;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(w||(w={}));var S;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(S||(S={}));function D(e,t){let{target:a,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,u=P(),l=B(),n=F(e,{relative:s});return c.useCallback(f=>{if(I(f,a)){f.preventDefault();let p=r!==void 0?r:v(l)===v(n);u(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,u,n,r,i,a,e,o,s])}export{q as B,J as L};
