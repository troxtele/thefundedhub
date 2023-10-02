import{a as M,r as d}from"./react-95e28a79.js";import{r as S}from"./react-dom-861fae9c.js";import{_ as D,d as P}from"./lodash-8bdfef8a.js";var R=function(t,n){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i])},R(t,n)};function T(t,n){R(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}function x(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,e=Object.getOwnPropertySymbols(t);i<e.length;i++)n.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(t,e[i])&&(r[e[i]]=t[e[i]]);return r}var j=function(t,n,r,e){switch(n){case"debounce":return P(t,r,e);case"throttle":return D(t,r,e);default:return t}},w=function(t){return typeof t=="function"},p=function(){return typeof window>"u"},_=function(t){return t instanceof Element||t instanceof HTMLDocument},A=function(t,n,r){return function(e){var i=e.width,l=e.height;t(function(s){return s.width===i&&s.height===l||s.width===i&&!r||s.height===l&&!n?s:{width:i,height:l}})}},F=function(t){T(n,t);function n(r){var e=t.call(this,r)||this;e.cancelHandler=function(){e.resizeHandler&&e.resizeHandler.cancel&&(e.resizeHandler.cancel(),e.resizeHandler=null)},e.attachObserver=function(){var c=e.props,o=c.targetRef,u=c.observerOptions;if(!p()){o&&o.current&&(e.targetRef.current=o.current);var a=e.getElement();a&&(e.observableElement&&e.observableElement===a||(e.observableElement=a,e.resizeObserver.observe(a,u)))}},e.getElement=function(){var c=e.props,o=c.querySelector,u=c.targetDomEl;if(p())return null;if(o)return document.querySelector(o);if(u&&_(u))return u;if(e.targetRef&&_(e.targetRef.current))return e.targetRef.current;var a=S.findDOMNode(e);if(!a)return null;var f=e.getRenderType();switch(f){case"renderProp":return a;case"childFunction":return a;case"child":return a;case"childArray":return a;default:return a.parentElement}},e.createResizeHandler=function(c){var o=e.props,u=o.handleWidth,a=u===void 0?!0:u,f=o.handleHeight,g=f===void 0?!0:f,h=o.onResize;if(!(!a&&!g)){var y=A(function(m){return e.setState(m,function(){return h==null?void 0:h(e.state.width,e.state.height)})},a,g);c.forEach(function(m){var b=m&&m.contentRect||{},E=b.width,z=b.height,H=!e.skipOnMount&&!p();H&&y({width:E,height:z}),e.skipOnMount=!1})}},e.getRenderType=function(){var c=e.props,o=c.render,u=c.children;return w(o)?"renderProp":w(u)?"childFunction":d.isValidElement(u)?"child":Array.isArray(u)?"childArray":"parent"};var i=r.skipOnMount,l=r.refreshMode,s=r.refreshRate,v=s===void 0?1e3:s,O=r.refreshOptions;return e.state={width:void 0,height:void 0},e.skipOnMount=i,e.targetRef=d.createRef(),e.observableElement=null,p()||(e.resizeHandler=j(e.createResizeHandler,l,v,O),e.resizeObserver=new window.ResizeObserver(e.resizeHandler)),e}return n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){p()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var r=this.props,e=r.render,i=r.children,l=r.nodeType,s=l===void 0?"div":l,v=this.state,O=v.width,c=v.height,o={width:O,height:c,targetRef:this.targetRef},u=this.getRenderType();switch(u){case"renderProp":return e==null?void 0:e(o);case"childFunction":{var a=i;return a==null?void 0:a(o)}case"child":{var f=i;if(f.type&&typeof f.type=="string"){o.targetRef;var g=x(o,["targetRef"]);return d.cloneElement(f,g)}return d.cloneElement(f,o)}case"childArray":{var h=i;return h.map(function(y){return!!y&&d.cloneElement(y,o)})}default:return M.createElement(s,null)}},n}(d.PureComponent);export{F as R};
