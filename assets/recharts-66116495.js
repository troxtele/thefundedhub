import{r as u,a as C}from"./react-b137ca31.js";import{a as U}from"./lodash-d8e576b4.js";import"./react-is-e8e5dbb3.js";import{c as q}from"./classnames-f6dc54bb.js";import{R as B}from"./react-resize-detector-859e49bf.js";var y=function(n){return U(n)&&n.indexOf("%")===n.length-1},W=function(n,t){for(var i=arguments.length,l=new Array(i>2?i-2:0),s=2;s<i;s++)l[s-2]=arguments[s]};function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},A.apply(this,arguments)}function F(e,n){return Q(e)||K(e,n)||J(e,n)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,n){if(e){if(typeof e=="string")return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}}function I(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function K(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,l,s,o,f=[],r=!0,g=!1;try{if(s=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;r=!1}else for(;!(r=(i=s.call(t)).done)&&(f.push(i.value),f.length!==n);r=!0);}catch(v){g=!0,l=v}finally{try{if(!r&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(g)throw l}}return f}}function Q(e){if(Array.isArray(e))return e}var _=u.forwardRef(function(e,n){var t=e.aspect,i=e.initialDimension,l=i===void 0?{width:-1,height:-1}:i,s=e.width,o=s===void 0?"100%":s,f=e.height,r=f===void 0?"100%":f,g=e.minWidth,v=g===void 0?0:g,w=e.minHeight,p=e.maxHeight,S=e.children,O=e.debounce,j=O===void 0?0:O,x=e.id,E=e.className,H=e.onResize,$=u.useState({containerWidth:l.width,containerHeight:l.height}),z=F($,2),R=z[0],T=z[1],d=u.useRef(null);u.useImperativeHandle(n,function(){return d},[d]);var b=u.useCallback(function(){return d.current?{containerWidth:d.current.clientWidth,containerHeight:d.current.clientHeight}:null},[]),D=u.useCallback(function(){var c=b();if(c){var m=c.containerWidth,h=c.containerHeight;H&&H(m,h),T(function(a){var P=a.containerWidth,L=a.containerHeight;return m!==P||h!==L?{containerWidth:m,containerHeight:h}:a})}},[b,H]),N=u.useMemo(function(){var c=R.containerWidth,m=R.containerHeight;if(c<0||m<0)return null;W(y(o)||y(r),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,o,r),W(!t||t>0,"The aspect(%s) must be greater than zero.",t);var h=y(o)?c:o,a=y(r)?m:r;return t&&t>0&&(h?a=h/t:a&&(h=a*t),p&&a>p&&(a=p)),W(h>0||a>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,h,a,o,r,v,w,t),u.cloneElement(S,{width:h,height:a})},[t,S,r,p,w,v,R,o]);u.useEffect(function(){var c=b();c&&T(c)},[b]);var M={width:o,height:r,minWidth:v,minHeight:w,maxHeight:p};return C.createElement(B,{handleWidth:!0,handleHeight:!0,onResize:D,targetRef:d,refreshMode:j>0?"debounce":void 0,refreshRate:j},C.createElement("div",A({},x!=null?{id:"".concat(x)}:{},{className:q("recharts-responsive-container",E),style:M,ref:d}),N))});export{_ as R};
