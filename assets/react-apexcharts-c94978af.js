import{a as g}from"./apexcharts-d2fea99c.js";import{r as O}from"./react-b14f4aa9.js";import{p as m}from"./prop-types-387d7a00.js";var y={},v;Object.defineProperty(y,"__esModule",{value:!0});var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),R=g,d=l(R),b=O,c=l(b),x=m,a=l(x);function l(e){return e&&e.__esModule?e:{default:e}}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){var r,n={};for(r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(e)return!t||typeof t!="object"&&typeof t!="function"?e:t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}function E(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}window.ApexCharts=d.default;var h=function(){function e(t){S(this,e);var r=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return c.default.createRef?r.chartRef=c.default.createRef():r.setRef=function(n){return r.chartRef=n},r.chart=null,r}return E(e,b.Component),w(e,[{key:"render",value:function(){var t=P(this.props,[]);return c.default.createElement("div",j({ref:c.default.createRef?this.chartRef:this.setRef},t))}},{key:"componentDidMount",value:function(){var t=c.default.createRef?this.chartRef.current:this.chartRef;this.chart=new d.default(t,this.getConfig()),this.chart.render()}},{key:"getConfig",value:function(){var i=this.props,t=i.type,r=i.height,n=i.width,o=i.series,i=i.options;return this.extend(i,{chart:{type:t,height:r,width:n},series:o})}},{key:"isObject",value:function(t){return t&&(t===void 0?"undefined":_(t))==="object"&&!Array.isArray(t)&&t!=null}},{key:"extend",value:function(t,r){var n=this,o=(typeof Object.assign!="function"&&(Object.assign=function(i){if(i==null)throw new TypeError("Cannot convert undefined or null to object");for(var f=Object(i),s=1;s<arguments.length;s++){var u=arguments[s];if(u!=null)for(var p in u)u.hasOwnProperty(p)&&(f[p]=u[p])}return f}),Object.assign({},t));return this.isObject(t)&&this.isObject(r)&&Object.keys(r).forEach(function(i){n.isObject(r[i])&&i in t?o[i]=n.extend(t[i],r[i]):Object.assign(o,C({},i,r[i]))}),o}},{key:"componentDidUpdate",value:function(t){if(!this.chart)return null;var o=this.props,s=o.options,r=o.series,n=o.height,o=o.width,i=JSON.stringify(t.options),f=JSON.stringify(t.series),s=JSON.stringify(s),u=JSON.stringify(r);i===s&&f===u&&n===t.height&&o===t.width||(f!==u&&i===s&&n===t.height&&o===t.width?this.chart.updateSeries(r):this.chart.updateOptions(this.getConfig()))}},{key:"componentWillUnmount",value:function(){this.chart&&typeof this.chart.destroy=="function"&&this.chart.destroy()}}]),e}();(v=y.default=h).propTypes={type:a.default.string.isRequired,width:a.default.oneOfType([a.default.string,a.default.number]),height:a.default.oneOfType([a.default.string,a.default.number]),series:a.default.array.isRequired,options:a.default.object.isRequired},h.defaultProps={type:"line",width:"100%",height:"auto"};export{v as _};
