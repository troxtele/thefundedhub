import{r as s,j as e,a as fe}from"./react-530ba4e7.js";import{c as ge}from"./react-dom-0ad81d1b.js";import{L as c,N as C,B as xe}from"./react-router-dom-63c2ca8f.js";import{S as z,N as L,a as b,E as W}from"./swiper-0597d310.js";import{m as re}from"./framer-motion-62786b97.js";import{b as w,c as ye,O as ve,d as be,e as y}from"./react-router-9fe743ea.js";import{T as je}from"./react-ts-tradingview-widgets-353631ef.js";import{R as G,F as we,a as Ne,H as ke,b as Te,C as Se,B as Ce,P as Pe,c as Ae,d as Fe,A as Me,e as Ee,f as Ie,g as De,M as He,h as Be,i as Re,j as ne,k as B,l as Oe,m as ze}from"./react-icons-26362fff.js";import{C as V,S as oe}from"./country-state-city-7cb9a309.js";import{R as $,A as Le,X as le,Y as de,T as ce,a as Ue,B as qe,C as We,b as $e,c as Ye,d as he,e as Ge,P as Ve,f as _e,L as me,g as Je,h as Ke,S as Xe}from"./recharts-ec943048.js";import{u as Qe,t as Ze}from"./react-timezone-select-c58820ac.js";import{c as ea,T as aa,S as ta,P as ia}from"./@mui-5f31fee6.js";import"./@babel-15fe5a24.js";import"./scheduler-765c72db.js";import"./@remix-run-d753ad9e.js";import"./ssr-window-c9202916.js";import"./classnames-ba74963b.js";import"./react-resize-detector-40b59716.js";import"./lodash-6ea61103.js";import"./react-smooth-def4a408.js";import"./prop-types-77cd915a.js";import"./fast-equals-a0711cdd.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./reduce-css-calc-1b1f81b2.js";import"./css-unit-converter-9e08bb2c.js";import"./eventemitter3-16d8dc20.js";import"./spacetime-5ab9584c.js";import"./timezone-soft-f8ea18f8.js";import"./clsx-1229b3e0.js";import"./@emotion-903f1ee5.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./stylis-79144faa.js";import"./react-transition-group-12af8031.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();const H="/assets/logo-f6759efc.webp",sa="/assets/dashboard-b0545265.webp",Q="/assets/discord-16d233d8.svg",T="/assets/arrow-cfc95aca.svg",Z="/assets/circle-6d090450.svg",ra="/assets/tick-53942fb4.svg",na="/assets/discord-mobile-1c66d100.webp",oa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAg4KEgvy8yhPAAAGc0lEQVR42u2de2wURRzHv7NQKFCCVIT6ALlHeYgkBtKCUCDxUdsYbTEgqBCEiBjF+CQ2RIwxEYWEh8GGEI3GB2pKBBswYrFChFaggNFYFbm9K5ZQUoOPYukDu+MfO1eud9Sbdufudwvz/Wce+d3k9/3cze7t7O0cg6SCM/ly5GEEDNlXJEQt+NxY6vlL3YBMJmhv31Gb8Bip8UjVGPnqEEi9nyM3pJB9IMeqCF2lajCJT0BoivWt3CcliVL2KegbP8RaJux38I2oZBfITK/CzM56jlURUoJAAgCmiXKL/3ky8wDMR7s0FSGQOAawYaJygNL+JaTkWCABgIsY9i+1Y6EanFOHgPas3iux73gBmjoRVNZnXmEAAH81L+xEMKl9jxMErgSgEoFLAahD4FoAqhC4GIAaBK4GIBCET4q9QuByAIC/mhc4QeB6AE4RXAYAnCG4LAA4QeAiALxVlEO7QRB5ONwte43gIgDGSVEpPHHTJRFURSCQvkySWQ9IEbFd/EUAQIZxJPANa7pUDD/FxkcgkFgvcBEAz6Hgbl4AABjA7uoGUmQjh7+BRfFGddEUANhihHoSz++MH+MqAJ4zfCor78EL0uOHuGgKAIC/EcUnJvQpxCj07z6Ke3GH7IguAwAA2bWo/f+I4FwuDcBVUyAR0gCoE6CWBkCdALU0AOoEqKUBUCdALUXfBH++uv98fisy0YBK69PsNmpbSQZgLsYGPkQ0lhivmgt9qXYrvVspmAKBJ/EOhkR0jEZlcGavh3MbgOBYtj6msx/fWj+A2pqcnE+BZ8Nj8IPsGPLhBwDccOEhvN018ESRMU69Ad8aYgA8X1S2+eYxfnrg+SP2qhzPjwZgLMAc9QDgEIDzY8C1ovyEceC689gh2tcnwGwC5BxAeHX2ZrtgE0X7b2prcnJ+DDiMuwEAJYEWXtNnNr9H9B+KiTRxjNpuAgBYbxk2gAFsLQMPd7cZ70VH+kpQQm03Vo6nQHY5PovtZa946qitJQkAMGgBdnbp4FjjeY3aWBIBZDV7i9g8fI02AE3Ybk33lTDueNgkScm1AOMoQxlwZlBWM7Whnkrp5bD77Ov1AA1AA6BOgFoaAHUC1FJ2ezw4omMqG4ozbQcm/ENtKukAQqOtdbzYMAAgvdXccmHVuHNOx0yWFEyB0C1WDe7rHCkdT6VVHR/maEg3AajNsMoRbXdi2gfUxmTleAqkL8coUbVwFtfYVV5g3u6r7BoZGG5lqDcwJkgMAHNFedwo8NQFprEvkSH6owCw0j6JWBR1+FCv82PAGLvgqz11gL+avSvyGpsAswmQuu8B4p2wUu0x64QDOC78r6zzAGYee9hu81+orcnJ+Y2RMjYZADCmwzTPXjwf8LKYyCesF6jtJgBARmnz47gRAMAiTodf+PdGR/ob0UhtN1aOp0BWMyuKMfZD+0JqY0kDAHi/Rw62oUM0W7C+dfr4s9TGZKXkWsD3G+4PDDemWJlGw8Aqd60MKrsa9DdG3R1wia749QANgDoBamkA1AlQSwNQOVhtAhY8XAGAs8D8wD6zLf2c2WTuMPOoTSUZQG1GcCf7mM1CPwCDUYz9wbXcNasCCgD03yp+JtUpviK0ktpY0gAEitm9sb38pToPtTU5Ob4WYI+ISgtb1XHUKMLTAIB+HYvwctdI83VIPMvbU/kmEwPAFLvgq33rAOwLeMUnIjc2V0xSD8CpnB8DBtsF+0m0fxTlkN4M5kYAp0X5AGfA6YGYbTf5KWprcnI+BSqwDAAwJ3jQPNqSz3x2t1ERHWh9aByhtpsIAOuxBGkAgNyIeV+f9lF0YHY5evLsf5LkeAr4fmXPxHS24cGRLdTWkgQA8JbyRfjzYpsF+W3ueWhKyZqg//36Xe3zMA2ZaOBftW6f0E5tK8kAgJF/YDM2U5vpjfR6AHUC1NIAqBOglgZAnQC1rngAev8AFYPo/QP0/gFR0vsH6P0D9P4Bev8AvX9ATKTeP0DvH5CC0vsHOB9C7x+g9w8Iy3329XqABqABUCdALQ2AOgFqyfzlpmWX3DVb8YczDWfuEAD/XVRmUBuT1iy7sCQe05N5V6thL2UtM1v5HsK/3ZUST2P5WCoaVfHjJX7TG8zlB1Puj5elWCDXF/dnWRJTwHuYbaL20ittjG9f8ixw8jmUUrvpqdgm7wqpONkBzTy23JrBslL+xGmhAfv5m36J+Q8A/wHDzAv/plmRIQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xNFQxMDoxODoxMSswMDowMBkc9m8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTRUMTA6MTg6MTErMDA6MDBoQU7TAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",Y="/assets/meta-trader-5-ec51858e.webp",ee="/assets/meta-trader-4-873c0a4f.webp";function M({data:t,state:a,close:i,identity:r,priceChange:n}){const[l,o]=s.useState(!1),[p,u]=s.useState(t[0]),d=f=>{u(f),o(!1),a&&a(f)};return s.useEffect(()=>{o(i===r)},[i]),s.useEffect(()=>{u(t[0])},[n]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative",children:[e.jsx("select",{id:"option",name:"option",onChange:f=>d(f.target.value),className:"price-table-select",children:t.map((f,v)=>e.jsx("option",{value:f,children:f},v+f))}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:T,alt:"arrow"})})]})})}function pe({clr:t}){const[a,i]=s.useState(6),[r,n]=s.useState(!1),[l,o]=s.useState(0),[p,u]=s.useState(0),[d,f]=s.useState(0),[v,P]=s.useState(0),[S,m]=s.useState("meta-5"),h={0:["500","500","500","1,000","1,000","1,000","800","500","$50.00/Month"],1:["250","250","250","600","600","600","400","250","$50.00 /Month"],2:["500","500","500","1,200","1,200","1,200","800","500","$100.00/Month"],3:["1,250","1,250","1,250","3,000","3,000","3,000","2,000","1,250","$250.00/Month"],4:["2,500","2,500","2,500","6,000","6,000","6,000","4,000","2,500","$500.00/Month"],5:["5,000","5,000","5,000","12,000","12,000","12,000","8,000","5,000","$1000.00/Month"],6:["10,000","10,000","10,000","24,000","24,000","24,000","20,000","20,000","$2000.00/Month"]};s.useEffect(()=>{o("$ "+h[a][1]+" (5%)"),u("$ "+h[a][3]+" (12%)")},[a]);const N=["1080","79","129","229","349","569","1049"];return e.jsxs("div",{className:"price-table",children:[e.jsxs("div",{className:"desktop-content relative z-[999] hidden lg:grid gap-2 w-full backdrop-blur-3xl rounded-2xl font-Montserrat",children:[e.jsxs("div",{className:"left grid grid-cols-5 items-center justify-start gap-2  font-medium",children:[e.jsxs("div",{className:`heading grid col-span-3 gap-5 p-5 h-full rounded-3xl ${t}`,children:[e.jsxs("h3",{className:"font-light",children:[e.jsx("b",{className:"font-bold",children:"Step 1: "})," Choose your Balance"]}),e.jsxs("div",{className:"prices flex flex-wrap gap-4",children:[e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a===1?"border-primary":"border-primary/10"}`,onClick:()=>i(1),children:"$ 5,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a===2?"border-primary":"border-primary/10"}`,onClick:()=>i(2),children:"$ 10,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a===3?"border-primary":"border-primary/10"}`,onClick:()=>i(3),children:"$ 25,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a===4?"border-primary":"border-primary/10"}`,onClick:()=>i(4),children:"$ 50,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a===5?"border-primary":"border-primary/10"}`,onClick:()=>i(5),children:"$ 100,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a===6?"border-primary":"border-primary/10"}`,onClick:()=>i(6),children:"$ 200,000"})})]})]}),e.jsxs("div",{className:`right-inside p-5 rounded-3xl col-span-2 h-full ${t}`,children:[e.jsx("div",{className:"heading",children:e.jsxs("h3",{className:"font-light",children:[e.jsx("b",{className:"font-bold",children:"Step 2: "})," Choose your Platform"]})}),e.jsxs("div",{className:"tranders flex gap-3 items-center w-full mt-2 relative z-30",children:[e.jsxs("div",{className:`img scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative after:absolute after:h-full after:w-full after:bottom-[-3rem] after:left-0 after:rounded-2xl after:bg-red-600 after:content-[coming_soon] group ${S==="meta-4"?"border-primary":"border-transparent "}`,onClick:()=>m("meta-4"),children:[e.jsx("img",{className:"max-w-[7rem] w-full relative opacity-20",src:ee,alt:"scop-markets"}),e.jsx("div",{className:"coming-soon absolute transition-all duration-200 opacity-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 whitespace-nowrap -bottom-[1rem]",children:e.jsx("h6",{className:"text-[0.65rem]",children:"Available Soon!"})})]}),e.jsx("div",{className:`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary cursor-pointer ${S==="meta-5"?"border-primary":"border-transparent "}`,onClick:()=>m("meta-5"),children:e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]",src:Y,alt:"meta-trader-5"})})]})]})]}),e.jsxs("div",{className:`grid rounded-3xl w-full p-7 ${t}`,children:[e.jsx("div",{className:"heading mb-8",children:e.jsxs("h3",{children:[e.jsx("b",{className:"font-bold",children:"Step 3:"})," Customize your Challenge"]})}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[50]",children:[e.jsxs("span",{className:"col-span-4 text-start flex items-center gap-1",children:["Trading ",e.jsx("b",{className:"font-bold",children:" Period "}),":"]}),e.jsx("div",{className:"col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] flex justify-center before:-top-10 before:text-[0.9rem]",children:e.jsx("div",{className:"wrap flex gap-2 justify-center items-center !font-normal",children:e.jsx(M,{identity:1,priceChange:a,setClose:n,close:r,state:f,data:["Unlimited","45 Days","30 Days"]})})}),e.jsx("div",{className:"col-span-2 flex justify-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"relative before:absolute before:font-bold before:content-['Phase_2'] flex justify-center before:-top-10 before:text-[0.9rem] font-normal",children:e.jsxs("select",{id:"option",name:"option",className:"price-table-select ",children:[e.jsx("option",{value:"Unlimited",children:"Unlimited"}),e.jsx("option",{value:"45 days",selected:d==="45 Days",children:"45 days"}),e.jsx("option",{value:"60 days",selected:d==="30 Days",children:"60 days"})]})}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:T,alt:"arrow"})})]})}),e.jsx("span",{className:"col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10 flex justify-center items-center",children:"Unlimited"})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-40",children:[e.jsxs("span",{className:"col-span-4 text-start flex items-center gap-1",children:["Minimum Trading ",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx("span",{className:"col-span-2 flex justify-center",children:e.jsx(M,{identity:3,priceChange:a,setClose:n,close:r,state:P,data:["0 Days","5 Days","7 Days"]})}),e.jsx("span",{className:"col-span-2 flex justify-center",children:e.jsxs("div",{className:"relative",children:[e.jsxs("select",{id:"option",name:"option",className:"price-table-select ",children:[e.jsx("option",{value:"0 Days",selected:v==="0 Days",children:"0 Days"}),e.jsx("option",{value:"5 days",selected:v==="5 Days",children:"5 days"}),e.jsx("option",{value:"7 days",selected:v==="7 Days",children:"7 days"})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:T,alt:"arrow"})})]})}),e.jsx("span",{className:"col-span-2 flex justify-center items-center",children:"-"})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-30",children:[e.jsxs("span",{className:"col-span-4 text-start mt-[0.13rem] flex items-center gap-1",children:["Max ",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{className:"col-span-2 ",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:e.jsx(M,{identity:5,priceChange:a,setClose:n,close:r,state:o,data:[`$ ${h[a][0]} (5%)`,`$ ${h[a][0].replace(",","")/5*4} (4%)`]})})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:l})}),e.jsxs("div",{className:"col-span-2 flex justify-center items-center gap-1",children:[e.jsx("b",{children:"$"}),e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:h[a][2]})]})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-20 ",children:[e.jsxs("span",{className:"col-span-4 text-start pt-[0.1rem] flex items-center gap-1",children:["Max ",e.jsx("b",{className:"font-bold",children:"Overall "})," Loss:"]}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:e.jsx(M,{identity:6,priceChange:a,setClose:n,close:r,state:u,data:[`$ ${h[a][3]} (12%)`,`$ ${h[a][3].replace(",","")/12*10} (10%)`,`$ ${h[a][3].replace(",","")/12*8} (8%)`]})})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:e.jsx("span",{children:p})})}),e.jsxs("div",{className:"col-span-2 flex justify-center items-center gap-1",children:[e.jsx("b",{children:"$ "}),e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:h[a][5]})]})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-10",children:[e.jsxs("span",{className:"col-span-4 text-start mt-[0.13rem] flex items-center gap-1",children:["Profit ",e.jsx("b",{className:"font-bold",children:"Target"}),":"]}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:e.jsx(M,{identity:7,priceChange:a,setClose:n,close:r,data:[`$ ${h[a][6]} (10%)`,`$ ${h[a][6].replace(",","")/10*8} (8%)`]})})}),e.jsxs("div",{className:"col-span-2 flex justify-center items-center gap-1",children:[e.jsx("b",{children:"$ "}),e.jsxs("span",{className:"priceVal inline-flex justify-center items-center",children:[h[a][7]," (5%)"]})]}),e.jsx("span",{className:"col-span-2 flex justify-center items-center",children:"-"})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[5]",children:[e.jsx("span",{className:"col-span-4 text-start mt-[0.13rem]",children:"Leverage:"}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"1:100"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"1:100"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"1:100"})})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[0]",children:[e.jsxs("span",{className:"col-span-4 text-start mt-[0.13rem]",children:["Monthly ",e.jsx("b",{className:"font-bold",children:"Salary"}),":"]}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"-"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"-"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:h[a][8]})})]})]}),e.jsxs("div",{className:`bottom flex justify-between py-7 px-12 rounded-3xl ${t}`,children:[e.jsxs("div",{className:"wrap grid gap-1",children:[e.jsxs("div",{className:"refund flex items-center",children:[e.jsx("b",{className:"text-lg font-codePro",children:"Refundable fee:"}),e.jsxs("h4",{className:"text-[1.4rem] font-extrabold ml-4 w-28",children:["$ ",N[a]]})]}),e.jsx("div",{className:" font-Montserrat text-sm",children:"Or pay in 3 installments from $175 / month"})]}),e.jsx("div",{className:"btn flex justify-start items-center",children:e.jsx(c,{to:"/login",className:"glowing-btn",children:"Get Funded Now"})})]})]}),e.jsxs("div",{className:"mobile-content relative z-20 lg:hidden flex flex-wrap justify-start items-center mt-6",children:[e.jsx("div",{className:"top font-medium w-full",children:e.jsx("div",{className:"heading flex justify-center",children:e.jsxs("div",{className:"prices grid grid-cols-3 gap-2 xs:gap-4",children:[e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${a===1?"border-primary":"border-primary/10"}`,onClick:()=>i(1),children:"$ 5,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${a===2?"border-primary":"border-primary/10"}`,onClick:()=>i(2),children:"$ 10,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${a===3?"border-primary":"border-primary/10"}`,onClick:()=>i(3),children:"$ 25,000"})}),e.jsxs("div",{className:"price-wrapper col-span-full flex justify-center items-center gap-2 xs:gap-4",children:[e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${a===4?"border-primary":"border-primary/10"}`,onClick:()=>i(4),children:"$ 50,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${a===5?"border-primary":"border-primary/10"}`,onClick:()=>i(5),children:"$ 100,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${a===6?"border-primary":"border-primary/10"}`,onClick:()=>i(6),children:"$ 200,000"})})]})]})})}),e.jsxs("div",{className:"tranders grid items-center w-full relative z-30",children:[e.jsxs("p",{className:"mt-12 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 2:"})," ","  ","Customize your Platform:"]}),e.jsxs("div",{className:"wrap flex justify-center gap-3 mt-7",children:[e.jsx("div",{className:`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary ${S==="meta-4"?"border-primary":"border-transparent "}`,onClick:()=>m("meta-4"),children:e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]",src:ee,alt:"scop-markets"})}),e.jsx("div",{className:`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary ${S==="meta-5"?"border-primary":"border-transparent "}`,onClick:()=>m("meta-5"),children:e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]",src:Y,alt:"meta-trader-5"})})]})]}),e.jsx("div",{className:"step w-full",children:e.jsxs("p",{className:"mt-12 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 3:"})," ","  ","Customize your Challenge:"]})}),e.jsx("div",{className:"flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-screen sm:w-[70vw] sm:m-auto relative z-20",children:e.jsxs(z,{navigation:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",modules:[L],spaceBetween:30,className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-3 xs:px-6 mt-[1.875rem] text-white",children:[e.jsx(b,{children:e.jsxs("div",{className:"phase1 pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-3xl bg-main-bg/90 h-full",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:"Phase 1"})}),e.jsxs("div",{className:"items grid gap-4 px-4",children:[e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Trading",e.jsx("b",{className:"font-bold",children:" Period"}),":"]}),e.jsx("div",{children:e.jsx("div",{className:"wrap flex gap-2 justify-center items-center relative z-[10]",children:e.jsx(M,{identity:"FKL%UL5fF5",priceChange:a,setClose:n,close:r,data:["Unlimited","45 Days","30 Days"]})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[9]",children:[e.jsxs("span",{children:["Min. Trading",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx(M,{identity:"JLALNV@fs#",priceChange:a,setClose:n,close:r,data:["0 Days","5 Days","7 Days"]})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[8]",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{children:e.jsx(M,{identity:"N-trsd7OQ",priceChange:a,setClose:n,close:r,state:o,data:[`$ ${h[a][0]} (5%)`,`$ ${h[a][0].replace(",","")/5*4} (4%)`]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[7]",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Overall "})," Loss:"]}),e.jsx("div",{children:e.jsx(M,{identity:"ff$JGsf",priceChange:a,setClose:n,close:r,state:u,data:[`$ ${h[a][3]} (12%)`,`$ ${h[a][3].replace(",","")/12*10} (10%)`,`$ ${h[a][3].replace(",","")/12*8} (8%)`]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[6]",children:[e.jsxs("span",{children:["Profit ",e.jsx("b",{className:"font-bold",children:" Target "}),":"]}),e.jsx("div",{children:e.jsx(M,{identity:"JF$)NF17f",priceChange:a,setClose:n,close:r,data:[`$ ${h[a][6]} (10%)`,`$ ${h[a][6].replace(",","")/10*8} (8%)`]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsx("span",{children:"Leverage:"}),e.jsx("div",{children:e.jsx("span",{className:"w-[136px] flex justify-center",children:"1:100"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Monthly ",e.jsx("b",{className:"font-bold",children:" Salary "}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[136px] flex justify-center",children:"-"})})]})]})]})}),e.jsx(b,{children:e.jsxs("div",{className:"phase2 pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-3xl bg-main-bg/90 h-full",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:"Phase 2"})}),e.jsxs("div",{className:"items grid gap-4 px-4",children:[e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Trading",e.jsx("b",{className:"font-bold",children:" Period"}),":"]}),e.jsx("div",{children:e.jsx("div",{className:"wrap flex gap-2 justify-center items-center relative z-[10]",children:e.jsx(M,{identity:"Lhf$5mxQ@Lf",priceChange:a,setClose:n,close:r,data:["Unlimited","45 Days","30 Days"]})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[9]",children:[e.jsxs("span",{children:["Min. Trading",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx(M,{identity:"LfFLH%pER",priceChange:a,setClose:n,close:r,data:["0 Days","5 Days","7 Days"]})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{children:e.jsx("span",{className:"priceVal w-[136px] flex justify-center",children:l})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Overall "})," Loss:"]}),e.jsx("div",{children:e.jsx("span",{className:"priceVal w-[136px] flex justify-center",children:p})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Profit",e.jsx("b",{className:"font-bold",children:" target "}),":"]}),e.jsxs("span",{className:"priceVal w-[136px] flex justify-center",children:["$ ",h[a][7]]})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsx("span",{children:"Leverage:"}),e.jsx("div",{children:e.jsx("span",{className:"w-[136px] flex justify-center",children:"1:100"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Monthly ",e.jsx("b",{className:"font-bold",children:" Salary "}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[136px] flex justify-center",children:"-"})})]})]})]})}),e.jsx(b,{children:e.jsxs("div",{className:"funded pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-3xl bg-main-bg/90 h-full",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:"Funded"})}),e.jsxs("div",{className:"items grid gap-4 px-4",children:[e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Trading",e.jsx("b",{className:"font-bold",children:" Period"}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:"Unlimited"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Min. Trading",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx("span",{className:"w-[122px] flex justify-center",children:"-"})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{children:e.jsxs("span",{className:"w-[122px] flex justify-center",children:["$ ",h[a][2]]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Overall "})," Loss:"]}),e.jsx("div",{children:e.jsxs("span",{className:"w-[122px] flex justify-center",children:["$ ",h[a][5]]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Profit",e.jsx("b",{className:"font-bold",children:" Target "}),":"]}),e.jsx("span",{className:"w-[122px] flex justify-center",children:"-"})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsx("span",{children:"Leverage:"}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:"1:100"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Monthly ",e.jsx("b",{className:"font-bold",children:" Salary "}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:h[a][8]})})]})]})]})})]})}),e.jsxs("div",{className:"wrap  mt-10 grid sm:grid-cols-2 justify-center items-center gap-4 w-full",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"refund flex items-center justify-center",children:[e.jsx("span",{className:"!text-lg",children:"Refundable fee: "}),e.jsxs("h4",{className:"text-[1.5rem] font-Montserrat font-extrabold ml-4",children:[" ","$ ",N[a]]})]})}),e.jsx("div",{className:"btn flex w-full justify-center",children:e.jsx(c,{to:"/login",className:"font-Montserrat text-xs font-bold py-4 px-12  rounded-3xl glowing-btn uppercase",children:"Get Funded Now"})})]})]})]})}function x({delay:t,children:a}){return e.jsx(re.div,{whileInView:{opacity:1,x:0,transition:{duration:.5,delay:t,bounce:.5,ease:"easeOut"}},viewport:{once:!0},initial:{opacity:0,x:-150},children:a})}function j({delay:t,cls:a,children:i}){return e.jsx(re.div,{className:a,whileInView:{opacity:1,y:0,transition:{duration:.3,delay:t,bounce:.5,ease:"easeOut"}},viewport:{once:!0},initial:{opacity:0,y:-150},children:i})}function la(){return e.jsx("section",{className:"prices relative pt-20 sm:pt-32",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-20 grid 2xl:px-36",children:[e.jsxs("div",{className:"heading flex flex-col sm:text-center",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] text-wht-gradient",children:"Get Funded Now"})}),e.jsxs(x,{delay:.2,children:[e.jsx("p",{className:"mt-2 hidden sm:block",children:"Choose your favorite account size, start trading, earn profit-splits and scale."}),e.jsxs("p",{className:"sm:hidden mt-2 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 1:"})," Choose your balance:"]})]})]}),e.jsx("div",{className:"wrap sm:max-w-[70rem] sm:w-full sm:m-auto sm:pt-4",children:e.jsx(j,{children:e.jsx(pe,{clr:"bg-light/[17%]"})})})]})})})}function E(){const[t,a]=s.useState(!1),{pathname:i}=w();return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"transition-all duration-300 border-b border-transparent py-3 sm:py-6 bg-transparent z-[9999] absolute left-0 right-0 top-0",children:[e.jsx("div",{className:"text-xl text-all bg-all/10 py-4 px-4 mb-6 text-center hidden",children:"We do NOT give out any real capital for management. All accounts are DEMO."}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper flex justify-between z-[999]",children:[e.jsx(c,{to:"/",className:"main-logo",children:e.jsx("img",{className:"max-w-[8rem] sm:max-w-[10rem]",src:H,alt:"TheFundedHub"})}),e.jsxs("nav",{className:"nav-links text-wht font-light flex justify-center items-center",children:[e.jsxs("ul",{className:"hidden md:flex gap-6 justify-center items-center text-sm",children:[e.jsx("li",{children:e.jsx(c,{to:"/blog",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${i==="/blog"?"text-white":"text-white/40"}`,children:"Blog"})}),e.jsx("li",{children:e.jsx(c,{to:"/faq",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${i==="/faq"?"text-white":"text-white/40"}`,children:"FAQ"})}),e.jsx("li",{children:e.jsx(c,{to:"/contact",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${i==="/contact"?"text-white":"text-white/40"}`,children:"Contact us"})}),e.jsx("li",{className:"relative",children:e.jsx(c,{to:"/login",className:"bg-primary/20 md:bg-transparent flex justify-center items-center py-2.5 px-7 sm:px-12 hover:text-white/70 text-white transition-all duration-200 rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.9rem] w-full glowing-btn capitalize pb-[0.725rem]",children:"Personal Hub"})})]}),e.jsx("div",{className:"menu-bar md:hidden",children:e.jsx("svg",{onClick:()=>a(!t),stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1.8em",width:"1.8em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})})})]})]})})]}),e.jsxs("div",{className:"mobile-nav z-[9999] relative",children:[e.jsx("svg",{onClick:()=>a(!1),className:`text-wht fixed right-[5%] top-8 z-[88] transition-all duration-500 ${t?"opacity-100 rotate-180 visible":"opacity-0 invisible"}`,stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 15 15",height:"2.2em",width:"2.2em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"})}),e.jsx("div",{onClick:()=>a(!1),className:`darkbg fixed inset-0 bg-main-bg/20 bottom-0  backdrop-blur-xl z-[77] transition-all duration-500 ${t?"opacity-100 visible":"opacity-0 invisible"}`}),e.jsx("nav",{className:`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-main-bg/30 z-[99] transition-all duration-500 ${t?"left-0 opacity-100":"-left-full opacity-0"}`,children:e.jsxs("div",{className:"wrapper",children:[e.jsx(c,{to:"/",className:"logo block pt-6 px-6",children:e.jsx("img",{className:"max-w-[6rem] md:hidden",src:H,alt:"TheFundedHub"})}),e.jsxs("ul",{className:"flex flex-col justify-start text-sm mt-6",children:[e.jsx("li",{children:e.jsx(c,{to:"/blog",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-y border-light/30 transition-all duration-300",children:"Blog"})}),e.jsx("li",{children:e.jsx(c,{to:"/faq",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300",children:"FAQ"})}),e.jsx("li",{children:e.jsx(c,{to:"/contact",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300",children:"Contact Us"})}),e.jsx("li",{className:"flex mt-4 pl-6",children:e.jsx(c,{to:"/login",className:"flex justify-center items-center font-Montserrat font-semibold rounded-3xl w-44 h-10 glowing-btn capitalize text-base",children:"Personal Hub"})})]})]})})]})]})}function da(){return e.jsx("section",{className:"evaluation relative pt-12 sm:pt-16",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-40",children:[e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Evaluation Program"})}),e.jsx(x,{delay:.2,children:e.jsx("div",{className:"paras mt-2",children:e.jsxs("p",{children:["Prove your trading skills by passing our two phases Evaluation Program. ",e.jsx("br",{})," Configure your own target profits and drawdown limits, follow simple rules and start trading with our capital. ",e.jsx("br",{})," You earn up to 90% of the profits."]})})})]}),e.jsxs("div",{className:"cards relative z-30 hidden lg:flex gap-8 md:gap-12 justify-center items-center mt-10",children:[e.jsx("div",{className:"img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]",children:e.jsxs(j,{delay:.4,cls:"card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[20rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 1"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"Starting your Evaluation process"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"8%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx(c,{to:"/login",className:"uppercase font-Montserrat text-xs font-bold px-8 border-primary/50 hover:border-primary transition-all duration-200 border-4 rounded-3xl w-[13rem] py-3 text-main-bg opacity-[75%] hover:opacity-100 eva-btn-glow",children:"Get Funded Now"})})]})}),e.jsx("div",{className:"img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]",children:e.jsxs(j,{delay:.5,cls:"card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[20rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 2"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"One step away to be a TFH Funded Trader"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"5%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"-"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx(c,{to:"/login",className:"uppercase font-Montserrat text-xs font-bold px-8 border-primary/50 hover:border-primary transition-all duration-200 border-4 rounded-3xl w-[13rem] py-3 text-main-bg opacity-[75%] hover:opacity-100 eva-btn-glow",children:"Get Funded Now"})})]})}),e.jsx("div",{className:"img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]",children:e.jsxs(j,{delay:.6,cls:"card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[20rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Funded"}),e.jsxs("span",{className:"text-sm flex font-codePro font-light",children:["Trade with our ",e.jsx("br",{})," funds in the Hub"]})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end relative before:absolute before:content-['up_to'] before:-top-1/2 before:text-xs before:font-extralight",children:"90/10"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Profit Share"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Refundable registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx(c,{to:"/login",className:"uppercase font-Montserrat text-xs font-bold px-8 border-primary/50 hover:border-primary transition-all duration-200 border-4 rounded-3xl w-[13rem] py-3 text-main-bg opacity-[75%] hover:opacity-100 eva-btn-glow",children:"Get Funded Now"})})]})})]}),e.jsx("div",{className:"cards lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-8",children:e.jsxs(z,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[W,L],className:"evaluation-slider flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full",children:[e.jsx(b,{className:"flex justify-center items-center max-w-[27.125rem]",children:e.jsxs("div",{className:"card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 1"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"Starting your Evaluation process"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"8%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx(c,{to:"/login",className:"capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base",children:"Get Funded Now"})})]})}),e.jsx(b,{className:"flex justify-center items-center max-w-[27.125rem]",children:e.jsxs("div",{className:"card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 2"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"One step away to be our Funded Trader"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"5%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"-"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx(c,{to:"/login",className:"capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base",children:"Get Funded Now"})})]})}),e.jsx(b,{className:"flex justify-center items-center max-w-[27.125rem]",children:e.jsxs("div",{className:"card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Funded"}),e.jsxs("span",{className:"text-sm flex font-codePro font-light",children:["Trade with our ",e.jsx("br",{})," funds in the Hub"]})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"90/10"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Profit Share"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"NO"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Minimum Trading Days"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Refundable registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx(c,{to:"/login",className:"capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base",children:"Get Funded Now"})})]})})]})})]})})})}function ca(){return e.jsx("section",{className:"dashboard relative pt-20 sm:pt-28",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper relative z-20 grid gap-8 sm:gap-12 justify-center items-center",children:[e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center md:text-center",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium",children:"Personal trading Hub"})}),e.jsx(x,{delay:.2,children:e.jsx("p",{className:"max-w-[55rem] mt-2",children:"To easily track your performance, you will have access to your own personal trading Hub to monitor your trading data and stats in real-time. This helps you to avoid breaching the trading rules during the challenge and while you’re a TFH funded trader."})})]}),e.jsx(j,{delay:.4,cls:"dashboard-img z-10 relative",children:e.jsx("img",{className:"md:max-w-[90%] m-auto rounded-2xl",src:sa,alt:"dashboard"})})]})})})}function ha(){return e.jsx("section",{className:"discord pt-24 relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsxs("div",{className:"wrapper relative hidden sm:flex gap-8 justify-evenly items-center md:px-6",children:[e.jsxs("div",{className:"left grid flex-col justify-center items-center sm:items-start gap-6",children:[e.jsx("div",{className:"img flex justify-start items-center",children:e.jsx(x,{delay:.1,children:e.jsx("img",{className:`sm:w-[20rem] md:w-[25rem] w-full opacity-80\r
                  `,src:Q,alt:"discord"})})}),e.jsxs("div",{className:"w-full grid justify-center sm:justify-start gap-3",children:[e.jsx(x,{delay:.2,children:e.jsx("p",{className:"max-w-[30rem] text-center sm:text-start",children:"Trading is certainly not easy! Interact with other traders and discuss about the markets, strategies and stay up to date with all the TFH official announcements."})}),e.jsx(x,{delay:.3,children:e.jsx("div",{className:"mt-2 btn uppercase flex justify-center sm:justify-start",children:e.jsx("a",{target:"__blank",href:"https://discord.com/invite/96Mq2M2gdB",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-black border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] grd-btn max-w-[228px]",children:"Join our Discord"})})})]})]}),e.jsx("div",{className:"right relative z-10",children:e.jsx(x,{delay:.3,children:e.jsx("img",{className:"max-w-[30rem] w-full relative z-10 opacity-80",src:na,alt:""})})})]}),e.jsxs("div",{className:"left relative grid sm:hidden flex-col justify-center items-center sm:items-start gap-3",children:[e.jsx(x,{delay:.1,children:e.jsx("div",{className:"img flex justify-center items-center relative z-10",children:e.jsx("img",{className:"max-w-[20rem] w-full opacity-80",src:Q,alt:"discord"})})}),e.jsxs("div",{className:"w-full grid justify-center sm:justify-start gap-3 relative z-10",children:[e.jsx(x,{delay:.2,children:e.jsx("p",{className:"max-w-[30rem] text-center sm:text-start font-Montserrat",children:"Trading is certainly not easy! Interact with other traders and discuss about the markets, strategies and stay up to date with all the TFH official announcements."})}),e.jsx(x,{delay:.3,children:e.jsx("div",{className:"mt-2 btn uppercase flex justify-center items-center",children:e.jsx("a",{target:"__blank",href:"https://discord.com/invite/96Mq2M2gdB",className:"uppercase max-w-[228px] h-[48px] font-Montserrat text-center text-xs font-bold grd-btn-wht rounded-3xl w-full text-main-bg flex justify-center items-center",children:"Join our Discord"})})})]})]})]})})}const ma="/assets/x-a3a9855d.webp",pa="/assets/discord-b0b80765.webp",ua="/assets/instagram-3e95cfc6.webp";function D(){return e.jsxs("div",{className:"logos flex gap-4",children:[e.jsx("a",{target:"__blank",href:"https://www.instagram.com/fundedhub/",className:"lo-8 w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:ua,alt:"Instagram"})}),e.jsx("a",{target:"__blank",href:"https://twitter.com/TheFundedHub",className:"logo w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:ma,alt:"X"})}),e.jsx("a",{target:"__blank",href:"https://discord.com/invite/96Mq2M2gdB",className:"logo w-[1.9rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:pa,alt:"discord"})})]})}function I(){const[t,a]=s.useState(""),{pathname:i}=w();return s.useEffect(()=>{a(i)},[]),e.jsx("footer",{className:"footer relative bg-black sm:bg-main-bg pt-12 pb-5 z-40",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsxs("div",{className:"footer-desktop hidden lg:grid gap-10",children:[e.jsxs("div",{className:"top flex justify-between",children:[e.jsx("div",{className:"left ",children:e.jsx(c,{to:"/",className:"main-logo flex gap-1",children:e.jsx("img",{className:"max-w-[10rem]",src:H,alt:"TheFundedHub"})})}),e.jsxs("div",{className:"middle grid gap-6 justify-end items-center",children:[e.jsx("div",{className:"item flex justify-center items-center",children:e.jsxs("ul",{className:"flex font-Montserrat font-medium gap-4 flex-wrap md:flex-nowrap",children:[e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/terms-condition"),to:"/terms-condition",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/terms-condition"?"text-white":"text-white/40"}`,children:"Terms and Condition"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/privacy-policy"),to:"/privacy-policy",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/privacy-policy"?"text-white":"text-white/40"}`,children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/cookie-policy"),to:"/cookie-policy",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/cookie-policy"?"text-white":"text-white/40"}`,children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/risk-disclosure"),to:"/risk-disclosure",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/risk-disclosure"?"text-white":"text-white/40"}`,children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/report-problem"),to:"/report-problem",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/report-problem"?"text-white":"text-white/40"}`,children:"Report a problem"})})]})}),e.jsx("div",{className:"item",children:e.jsxs("div",{className:"info grid text-center",children:[e.jsx("span",{className:"uppercase text-sm font-codePro",children:"THE FUNDED HUB GLOBAL LLP"}),e.jsx("span",{className:"text-sm",children:"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX"})]})})]}),e.jsx("div",{className:"right",children:e.jsx(D,{})})]}),e.jsx("div",{className:"bottom",children:e.jsxs("div",{className:"hidden sm:block bottom-content text-center",children:[e.jsx("p",{className:"text-[0.65rem] font-light",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP (Company number: OC448629)"}),e.jsx("p",{className:"text-[0.65rem] font-light mt-2",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP. All information available on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! THE FUNDED HUB GLOBAL LLP does not provide any of the investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Either The Funded Hub and THE FUNDED HUB GLOBAL LLP is not a broker and do not accept deposits. The offered technical solution for the The Funded Hub MT5 platforms and data feed are powered by our institutional liquidity providers."})]})})]}),e.jsxs("div",{className:"footer-mobile grid gap-6 lg:hidden",children:[e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"logo flex justify-center items-center",children:e.jsx(c,{to:"/",className:"main-logo flex gap-1",children:e.jsx("img",{className:"max-w-[8rem]",src:H,alt:"TheFundedHub"})})}),e.jsx(D,{})]}),e.jsxs("div",{className:"content grid gap-8 mt-4",children:[e.jsx("div",{className:"top",children:e.jsxs("div",{className:"items gap-4",children:[e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/terms-condition"),to:"/terms-condition",className:` ${t==="/terms-condition"?"text-white":"text-white/40"} hover:text-white`,children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/privacy-policy"),to:"/privacy-policy",className:` ${t==="/privacy-policy"?"text-white":"text-white/40"} hover:text-white`,children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/ookie-policy"),to:"/cookie-policy",className:` ${t==="/cookie-policy"?"text-white":"text-white/40"} hover:text-white`,children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/risk-disclosure"),to:"/risk-disclosure",className:` ${t==="/risk-disclosure"?"text-white":"text-white/40"} hover:text-white`,children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(c,{onClick:()=>a("/report-problem"),to:"/report-problem",className:` ${t==="/report-problem"?"text-white":"text-white/40"} hover:text-white`,children:"Report a problem"})})]})}),e.jsx("div",{className:"item mt-12 text-center col-span-full",children:e.jsxs("div",{className:"info grid",children:[e.jsx("span",{className:"uppercase text-[0.9rem] font-codePro",children:"THE FUNDED HUB GLOBAL LLP"}),e.jsx("span",{className:"text-sm font-Montserrat",children:"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX"})]})})]})}),e.jsxs("div",{className:"bottom text-center",children:[e.jsx("p",{className:"text-[0.65rem] font-light",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP (Company number: OC448629)"}),e.jsx("p",{className:"text-[0.65rem] font-light mt-2",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP. All information available on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! THE FUNDED HUB GLOBAL LLP does not provide any of the investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Either The Funded Hub and THE FUNDED HUB GLOBAL LLP is not a broker and do not accept deposits. The offered technical solution for the The Funded Hub MT5 platforms and data feed are powered by our institutional liquidity providers."})]})]})]})]})})}const fa="/assets/BlackBull-logo-e0d8c751.svg";function ga(){const t=screen.width>=680;return e.jsxs("div",{className:"content-bottom w-full relative z-10 grid gap-8 pt-20 md:pt-24",children:[e.jsxs("div",{className:"top text-start 2xl:px-36",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Earn a monthly Salary"})}),e.jsx(x,{delay:.2,children:e.jsx("div",{className:"paras grid gap-5 mt-2",children:e.jsx("p",{children:"Earn a monthly salary as soon as you qualify for the scaling plan, bringing you closer to your dream of becoming a full-time trader. All the funded traders who successfully complete Challenge Phases 1 & 2 and receive a live funded account are eligible for a Monthly Salary, provided they meet certain conditions."})})})]}),e.jsx("div",{className:"bottom relative z-10 text-lg font-black md:flex justify-center items-center gap-5 w-full",children:t?e.jsxs("div",{className:"items grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center text-[0.9rem] text-center",children:[e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.1,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$5,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$50.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.2,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$10,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$100.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.3,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$25,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$250.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.4,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4  md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$50,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$500.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.5,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$100,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$1000.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.5,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none relative ",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$200,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$2000.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})})]}):e.jsx("div",{className:"salary-slider sm:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center overflow-hidden -mx-[1.5rem] px-[1.5rem] w-screen",children:e.jsxs(z,{loop:!0,navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[W,L],className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full",children:[e.jsxs(b,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$5,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$50.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(b,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$10,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$100.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(b,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$25,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$250.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(b,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$50,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$500.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(b,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$100,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$1000.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(b,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$200,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$2000.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})]})})})]})}function xa(){return e.jsx("section",{className:"benefits relative md:m-auto pt-20 sm:pt-24",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper grid gap-8 relative z-30",children:[e.jsxs("div",{className:"heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"The Funded Hub Benefits"})}),e.jsx(x,{delay:.2,children:e.jsx("div",{className:"paras mt-2",children:e.jsxs("p",{children:["We are partnering up directly with a regulated liquidity provider to offer you unbeatable trading conditions. ",e.jsx("br",{})," ","Our accounts will let you trade in an excellent environment with tight spreads and lighting-fast execution."]})})})]}),e.jsxs("div",{className:"Contents w-full grid",children:[e.jsxs("div",{className:"w-full max-w-screen hidden lg:flex justify-center items-center relative",children:[e.jsxs("div",{className:"items grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10",children:[e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow ",children:e.jsxs(j,{delay:.1,cls:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Craft"})," ","your challenge"]})}),e.jsx("p",{className:"text-sm mt-3",children:"All other prop firms with the same rules? With us you can customize basically everything; from the trading period to the target profits to the max drawdown."})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.2,cls:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:["Earn a fixed"," ",e.jsx("div",{className:"font-codeProBold inline-block",children:"salary"})]})}),e.jsx("p",{className:"text-sm mt-3",children:"You're investing time trading for us and we want to reward your skills and efforts! Earn a fixed monthly salary based on your account balance."})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.3,cls:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Lightning-fast"})," ","Payouts"]})}),e.jsx("p",{className:"text-sm mt-3",children:"We work with DEEL to ensure the smoothest withdrawal experience to all our traders. Once the payout is approved, get your money in a flash!"})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.4,cls:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Regulated"})," ","brokers only"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Our traders deserve the best, only! We're thrilled to be partnering with BlackBull to offer you the best trading conditions in the market."})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(j,{delay:.5,cls:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[" ",e.jsx("div",{className:"font-codeProBold inline-block",children:"24/5"})," ","dedicated support"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Any question or concern? We got you! Our team of traders and engineers is available 24/5 to help you with anything you might need, even on Whatsapp!"})]})})]}),e.jsx("img",{className:"cirlce sm:hidden absolute -top-[200%] -left-[18%]  w-[70rem] rotate-[80deg] opacity-[0.1]",src:Z,alt:"circle"}),e.jsx("img",{className:"cirlce sm:hidden absolute -top-[100%] -right-[20%]  w-[50rem] rotate-[20deg] opacity-[0.05]",src:Z,alt:"circle"})]}),e.jsx("div",{className:"sm:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-screen relative",children:e.jsxs(z,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[W,L],className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full",children:[e.jsxs(b,{className:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Craft"})," ","your challenge"]})}),e.jsx("p",{className:"text-sm mt-3",children:"All other prop firms with the same rules? With us you can customize basically everything; from the trading period to the target profits to the max drawdown."})]}),e.jsxs(b,{className:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:["Earn a fixed"," ",e.jsx("div",{className:"font-codeProBold inline-block",children:"salary"})]})}),e.jsx("p",{className:"text-sm mt-3",children:"You're investing time trading for us and we want to reward your skills and efforts! Earn a fixed monthly salary based on your account balance."})]}),e.jsxs(b,{className:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Lightning-fast"})," ","Payouts"]})}),e.jsx("p",{className:"text-sm mt-3",children:"NWe work with DEEL to ensure the smoothest withdrawal experience to all our traders. Once the payout is approved, get your money in a flash!"})]}),e.jsxs(b,{className:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Regulated"})," ","brokers only"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Our traders deserve the best, only! We're thrilled to be partnering with BlackBull to offer you the best trading conditions in the market."})]}),e.jsxs(b,{className:"item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"24/5"})," ","dedicated support"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Any question or concern? We got you! Our team of traders and engineers is available 24/5 to help you with anything you might need, even on Whatsapp!"})]})]})}),e.jsx("div",{className:"trade mt-12 ",children:e.jsxs("div",{className:"bg-[#2B2C30]/[17%] border-[3px] border-primary/[3%] rounded-3xl p-6 grid gap-6 md:grid-cols-5 justify-center items-center max-w-[72rem] m-auto bottom-shadow",children:[e.jsxs("div",{className:"left md:col-span-3",children:[e.jsx("h4",{className:"text-xl font-medium",children:"Regulated Broker"}),e.jsx("p",{className:"pt-2",children:"Trade with lightning fast execution speed on a trusted & regulated broker Ranked #1 forex broker in execution speed by CompareForexBrokers.com"})]}),e.jsxs("div",{className:"right md:col-span-2 md:place-self-end flex flex-col gap-3 justify-center items-center",children:[e.jsx("img",{className:"max-w-[14rem] sm:max-w-[18rem] w-full",src:fa,alt:"black-bull"}),e.jsx("img",{className:"max-w-[9rem] w-full",src:Y,alt:"metaTrader-5"})]})]})}),e.jsx("div",{className:"content-top"}),e.jsx(ga,{})]})]})})})}const ae="/assets/desktop-d4677cd2.webp",te="/assets/desktop-shadow-59658f88.png";function ya(){return e.jsx("main",{className:"main relative pt-16 md:pt-36",children:e.jsxs("div",{className:"container relative",children:[e.jsxs("div",{className:"wrapper z-10 relative flex justify-center md:gap-12 sm:pt-12",children:[e.jsx("div",{className:"left-content md:flex justify-start mt-1",children:e.jsx("div",{className:"desktop-img hidden md:block relative",children:e.jsxs(x,{delay:.5,children:[e.jsx("img",{className:"w-[32rem] globe-rotate z-0",src:ae,alt:"mobile"}),e.jsx("div",{className:"shadow absolute -bottom-[2.8rem] left-0 right-0 min-w-full",children:e.jsx("img",{src:te,alt:"shadow"})})]})})}),e.jsxs("div",{className:"right-content flex flex-col sm:gap-6 md:gap-8 relative z-1",children:[e.jsx(x,{delay:1,className:"heading grid gap-2 justify-end items-center md:text-center font-medium text-wht-gradient",children:e.jsxs("h1",{className:"xs:leading-[0.95] text-3xl exs:text-[2rem] xs:text-[2.4rem] sm:text-[4rem] md:text-[4rem] xl:text-[4.4rem] font-codeProLight tracking-tighter text-center w-full md:text-start text-wht-gradient z-10 relative hidden sm:inline-block",children:["Becoming a",e.jsxs("b",{className:"font-codePro",children:[" ","full time ",e.jsx("br",{})," trader"]})," ","has never ",e.jsx("br",{})," been easier."]})}),e.jsxs("div",{className:"mbl-img pb-10 pt-6 sm:-mt-2.5 md:hidden relative",children:[e.jsx("img",{className:"max-w-[30rem] w-full globe-rotate z-0 sm:-ml-10",src:ae,alt:"mobile"}),e.jsx("div",{className:"shadow absolute bottom-0 left-0 right-0 min-w-full",children:e.jsx("img",{src:te,alt:"shadow"})})]}),e.jsx("div",{className:"mobile-heading sm:hidden",children:e.jsx(x,{delay:1,className:"heading grid gap-2 justify-end items-center md:text-center font-medium text-wht-gradient",children:e.jsxs("h1",{className:"xs:leading-[0.95] text-3xl exs:text-[2rem] xs:text-[2.25rem] sm:text-[4rem] md:text-[4rem] xl:text-[4.4rem] font-codeProLight tracking-tighter w-full md:text-start text-wht-gradient z-10 relative pt-4 ",children:["Becoming a",e.jsxs("b",{className:"font-codePro",children:[" ","full time ",e.jsx("br",{})," trader"]})," ","has never ",e.jsx("br",{})," been easier."]})})}),e.jsx("div",{className:"botton-content font-Montserrat grid w-full gap-5 max-w-4xl md:text-left z-10 relative mt-4 md:mt-0",children:e.jsx(x,{delay:1.25,children:e.jsx("p",{className:"font-light font-Montserrat  text-[1.05rem] max-w-[30rem]",children:"Customize your challenge, get funded with our capital and earn up to 90% profit split plus a fixed monthly salary. We take all the trading risks."})})})]})]}),e.jsx("div",{className:"wrap flex sm:justify-center mt-6 sm:mt-10 md:mt-16",children:e.jsxs("div",{className:"btns grid sm:grid-cols-2 gap-4 sm:gap-6 justify-start items-end",children:[e.jsx("div",{className:"btn flex font-extrabold flex-shrink-0 h-[55px] sm:h-[45px] w-[230px] sm:w-[265px]",children:e.jsx(c,{to:"/login",className:"glowing-btn",children:"Get Funded Now"})}),e.jsx("div",{className:"btn flex font-extrabold flex-shrink-0",children:e.jsx("a",{target:"__blank",href:"https://discord.com/invite/96Mq2M2gdB",className:"uppercase font-base flex justify-center items-center border-[3px] border-white rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] h-[55px] sm:h-[45px] hover:opacity-60 opacity-100 transition-all duration-300 w-[230px]",children:"Join our Discord"})})]})})]})})}function va({heading:t,para:a}){const[i,r]=s.useState(0),[n,l]=s.useState(!1),o=s.useRef(null);return s.useEffect(()=>{r(o.current.clientHeight)},[n]),e.jsxs("article",{className:"border border-primary/[15%] rounded-2xl",children:[e.jsxs("header",{onClick:()=>l(!n),className:"flex justify-between cursor-pointer py-3 px-4",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t}})}),e.jsx("div",{className:"arrow flex justify-center items-center ml-3",children:e.jsx("img",{className:`max-w-[1.2rem] transform-gpu transition-all duration-300 ${n?"rotate-180":""}`,src:T,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:n?i+"px":"0"},className:"content transition-all duration-300 overflow-hidden",children:e.jsx("p",{ref:o,className:" peraH mt-2 text-[0.9rem] xs:text-base pb-6 px-4",children:a})})]})}function ba(){const t=["Do you offer  Leverage?","Do you offer  Leverage?","Do you offer  Leverage?","Do you offer  Leverage?"],a=["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,"];return e.jsx("section",{className:"faq relative pt-28",children:e.jsx("div",{className:"container relative z-10",children:e.jsxs("div",{className:"wrapper grid gap-12 justify-center items-center",children:[e.jsxs("div",{className:"heading flex flex-col gap-2 justify-center items-center text-center",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"FAQ"})}),e.jsx("div",{className:"paras",children:e.jsx(x,{delay:.2,children:e.jsxs("p",{className:"fo",children:["If you don't find an answer in the frequently asked questions don't hesitate to"," ",e.jsx(c,{to:"/contact",className:"underline font-semibold",children:"contact us"})]})})})]}),e.jsx("div",{className:"articles md:max-w-[60rem] m-auto grid gap-5",children:t.map((i,r)=>e.jsx(j,{delay:r/10,cls:"",children:e.jsx(va,{heading:i,para:a[r]})},r))}),e.jsx("div",{className:"readmore flex justify-center mb-12 xs:mb-24 md:mb-32",children:e.jsx(c,{to:"faq",className:"underline text-xs x:text-sm decoration-2 font-bold py-2 px-10",children:"Visit FAQ Page"})})]})})})}const ja={parent:{display:"none"}};function wa(){const t=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"US 100"},{proName:"BITSTAMP:BTCUSD",title:"Bitcoin"},{proName:"BITSTAMP:ETHUSD",title:"Ethereum"},{description:"EURUSD",proName:"FX:EURUSD"},{description:"GBPUSD",proName:"FX:GBPUSD"},{description:"AUDUSD",proName:"FX:AUDUSD"}];return e.jsx("div",{className:"ticker-widget pt-12 sm:pt-16 relative z-10",children:e.jsx("div",{className:"lg:container sm:px-6 lg:px-0 m-auto",children:e.jsx("div",{className:"wrapper backdrop-blur-3xl widget bg-main-bg/30",children:e.jsx(je,{colorTheme:"dark",copyrightStyles:ja,displayMode:"regular",isTransparent:!0,symbols:t})})})})}function Na(){const[t,a]=s.useState("FTMO"),i={FTMO:["100K Evaluation","5% Daily | 10% Total","4 Day","Unlimited","10% - 5%","Only in Swing Acc.","No","$600"],"SKILLED FUNDED TRADERS":["100K Evaluation","5% Daily | 10% Total","3 Day","Unlimited","8% - 5%","No","No","$549"],"TRUE FOREX FUNDS":["100K Evaluation","5% Daily | 10% Total","5 Day","Unlimited","8% - 5%","Yes","No","$660"],FUNDEDNEXT:["100K Evaluation","5% Daily | 10% Total","5 Day","30-60 days","10% - 5%","Yes","No","$549"]};return e.jsx("section",{className:"compare relative pt-20 sm:pt-28",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-20 grid gap-8 sm:gap-12",children:[e.jsxs("div",{className:"heading relative z-20 flex flex-col justify-center sm:items-center md:text-center gap-5 md:gap-8",children:[e.jsx(x,{delay:.1,children:e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium",children:"Compare your options"})}),e.jsx(x,{delay:.2,children:e.jsxs("div",{className:"buttons grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8 text-center justify-center items-center max-w-[20rem] m-auto sm:max-w-none",children:[e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="FTMO"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("FTMO"),children:"FTMO"}),e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="SKILLED FUNDED TRADERS"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("SKILLED FUNDED TRADERS"),children:"SKILLED FUNDED TRADERS"}),e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="TRUE FOREX FUNDS"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("TRUE FOREX FUNDS"),children:"TRUE FOREX FUNDS"}),e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="FUNDEDNEXT"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("FUNDEDNEXT"),children:"FUNDEDNEXT"})]})})]}),e.jsxs("div",{className:"content relative z-10 hidden md:grid sm:grid-cols-2 m-auto gap-10 max-w-[55rem] w-full",children:[e.jsx("div",{className:"wrap scale-100 hover:scale-[1.03] transition-all duration-200 relative z-10",children:e.jsx(j,{delay:.1,cls:"",children:e.jsxs("div",{className:"item bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10",children:[e.jsx("div",{className:"head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]",children:e.jsx("img",{className:"w-40",src:H,alt:"main-logo"})}),e.jsx("b",{}),e.jsxs("div",{className:"paras grid gap-3 py-8",children:[e.jsx("span",{children:e.jsx("b",{children:"100K Evaluation"})}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:"5% Daily | 12% Total"})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:"Up to 0 Days"})]}),e.jsxs("span",{children:["Trading Period - ",e.jsx("b",{children:"Up to Unlimited"})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:" 8% & 5%"})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:"Yes"})]}),e.jsxs("span",{children:["Monthly Salary - ",e.jsx("b",{children:"$1,000"})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:"$569"})]})]})]})})}),e.jsx("div",{className:"wrap scale-100 hover:scale-[1.03] transition-all duration-200 relative z-10",children:e.jsx(j,{delay:.2,cls:"",children:e.jsxs("div",{className:"item bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10",children:[e.jsx("div",{className:"head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]",children:t}),e.jsxs("div",{className:"paras grid gap-3 py-8",children:[e.jsx("span",{children:e.jsx("b",{children:"100K Evaluation"})}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:i[t][1]})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:i[t][2]})]}),e.jsxs("span",{children:["Trading Period - ",e.jsx("b",{children:i[t][3]})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:i[t][4]})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:i[t][5]})]}),e.jsxs("span",{children:["Monthly Salary - ",e.jsx("b",{children:i[t][6]})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:i[t][7]})]})]})]})})})]}),e.jsxs(z,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[W,L],className:"content relative z-10 grid md:hidden md:grid-cols-2 m-auto gap-10 w-full max-w-[100vw]",children:[e.jsxs(b,{className:"item relative z-10 bg-main-bg/90 sm:bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[30rem]",children:[e.jsx("div",{className:"head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]",children:e.jsx("img",{className:"w-40",src:H,alt:"main-logo"})}),e.jsxs("div",{className:"paras grid gap-3 py-8",children:[e.jsx("span",{children:e.jsx("b",{children:"100K Evaluation"})}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:"4% Daily | 8% Total"})]}),e.jsxs("span",{children:["Payout Split - ",e.jsx("b",{children:"80/20"})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:"5 Day"})]}),e.jsxs("span",{children:["Time Period For Evaluation - ",e.jsx("b",{children:"45 & 45 Days"})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:" 8% & 5%"})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:"Yes"})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:"$475"})]})]}),e.jsx("div",{className:"compare-arrow hidden absolute  text-primary top-1/2 transform -translate-y-1/2 right-0 opacity-50",children:e.jsx("img",{className:"w-12 -rotate-90",src:T,alt:""})})]}),e.jsxs(b,{className:"item relative z-10 bg-main-bg/90 sm:bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[30rem]",children:[e.jsx("div",{className:"head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]",children:t}),e.jsxs("div",{className:"paras grid gap-3 py-8",children:[e.jsxs("span",{children:["Account Size & Model - ",e.jsx("b",{children:i[t][0]})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:i[t][1]})]}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:i[t][2]})]}),e.jsxs("span",{children:["Payout Split - ",e.jsxs("b",{children:[" ",i[t][3]]})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:i[t][4]})]}),e.jsxs("span",{children:["Time Period For Evaluation - ",e.jsx("b",{children:i[t][5]})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:i[t][6]})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:i[t][7]})]})]})]})]})]})})})}function ka(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs("div",{className:"purple-shadow bg-black sm:bg-[#030307] h-screenf",children:[e.jsx(E,{}),e.jsx(ya,{}),e.jsx(wa,{}),e.jsx(da,{}),e.jsx(xa,{}),e.jsx(Na,{}),e.jsx(ca,{}),e.jsx(la,{}),e.jsx(ha,{}),e.jsx(ba,{}),e.jsx(I,{}),e.jsx("div",{className:"hidden h-0 w-0 opacity-0 left-0 visible md:invisible"}),e.jsx("script",{src:"./js/script.js"})]})}function Ta({props:t}){const[a,i]=t,[r,n]=s.useState(""),[l,o]=s.useState(""),[p,u]=s.useState(""),[d,f]=s.useState(""),[v,P]=s.useState(""),[S,m]=s.useState(""),[h,N]=s.useState(!1),[A,F]=s.useState(!1),R=V.getAllCountries(),[U,g]=s.useState(!1);s.useEffect(()=>{r&&l&&p&&d.includes("@")&&v&&S&&A&&h?g(!0):g(!1)},[r,l,p,d,v,S,A,h]);const O=ye();function K(k){document.querySelector("html").classList.remove("stop-scrolling"),O(k)}return e.jsxs("div",{className:`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center ${a?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${a?"opacity-100 ":"opacity-0"}`,onClick:()=>i(!1)}),e.jsx("div",{className:"scroll h-screen",children:e.jsx("div",{className:"wrap overflow-hidden rounded-3xl h-full  sm:h-unset p-6 overflow-y-scroll sm:overflow-y-auto sm:flex justify-center items-center",children:e.jsxs("div",{className:`box relative max-w-[42rem] w-full text-main text-wht bg-light-gra transition-all bg-main-bg/80 duration-300 rounded-3xl z-[999] py-6 my-3 px-6 ${a?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsxs("form",{className:"grid gap-6 relative z-10 rounded-xl border-primary",children:[e.jsxs("div",{className:"heading grid gap-3 justify-start items-center",children:[e.jsx("div",{className:"wrap",children:e.jsx("h1",{className:"text-start text-xl xs:text-[1.8rem] font-medium text-wht-gradient pb-[0.2rem]",children:"Register"})}),e.jsx("div",{className:"register font-normal",children:e.jsxs("span",{children:["Already have an account?"," ",e.jsx("span",{onClick:()=>i(!1),className:"underline sm:cursor-pointer text-all",children:"Login"})]})})]}),e.jsxs("div",{className:"input-fields grid sm:grid-cols-2 gap-6 sm:gap-8 mt-2",children:[e.jsxs("div",{className:"left grid gap-5",children:[e.jsxs("div",{className:"same-line grid grid-cols-6 gap-4",children:[e.jsx("div",{className:"selecte-title col-span-2",children:e.jsxs("div",{className:"wrapper relative",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:T,alt:"arrow"}),e.jsxs("select",{id:"title",name:"title",autoFocus:!0,className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent",children:[e.jsx("option",{value:"Mr.",children:"Mr."}),e.jsx("option",{value:"Mr.",children:"Ms."}),e.jsx("option",{value:"Mr.",children:"Mrs."}),e.jsx("option",{value:"Mr.",children:"Mx."})]})]})}),e.jsx("div",{className:"first-name col-span-4",children:e.jsx("input",{onChange:k=>n(k.target.value),value:r,name:"first-name",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"text",placeholder:"First Name"})})]}),e.jsx("div",{className:"last-name",children:e.jsx("input",{onChange:k=>o(k.target.value),value:l,name:"last-name",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"text",placeholder:"Last Name"})}),e.jsx("div",{className:"email",children:e.jsx("input",{onChange:k=>f(k.target.value),value:d,name:"email",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"email",placeholder:"Email"})})]}),e.jsxs("div",{className:"right grid gap-5",children:[e.jsx("div",{className:"country-residence",children:e.jsxs("div",{className:"wrapper relative",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:T,alt:"arrow"}),e.jsxs("select",{onChange:k=>u(k.target.value),value:p,id:"country",name:"country",className:"form-control relative w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent",children:[e.jsx("option",{defaultChecked:!0,children:"Choose a country"}),R.map((k,X)=>e.jsx("option",{value:k.name,children:k.name},X))]})]})}),e.jsx("div",{className:"password",children:e.jsx("input",{onChange:k=>P(k.target.value),value:v,name:"password",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"password",placeholder:"Password"})}),e.jsx("div",{className:"confirm-pass",children:e.jsx("input",{onChange:k=>m(k.target.value),value:S,name:"confirm-pass",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"password",placeholder:"Confirm Password"})})]})]}),e.jsxs("div",{className:"wrap grid sm:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"checkboxs grid gap-3 justify-start max-w-[35rem] mt-2",children:[e.jsxs("div",{className:"checkbox flex gap-3 justify-start items-center",children:[e.jsx("input",{onInput:()=>N(!h),type:"checkbox",id:"checkbox1",className:"relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"}),e.jsxs("label",{htmlFor:"checkbox1",className:"sm:cursor-pointer font-Montserrat font-medium text-sm",children:["I agree to the"," ",e.jsx("span",{onClick:()=>K("/terms-condition"),className:"underline text-all cursor-pointer",children:"terms and conditions"})]})]}),e.jsxs("div",{className:"checkbox flex gap-3 justify-start items-center",children:[e.jsx("input",{onInput:()=>F(!A),type:"checkbox",id:"checkbox2",className:"relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"}),e.jsxs("label",{htmlFor:"checkbox2",className:"sm:cursor-pointer font-Montserrat font-medium text-sm",children:["I accept the"," ",e.jsx("span",{onClick:()=>K("/privacy-policy"),className:"underline text-all cursor-pointer",children:"privacy policy"})]})]}),e.jsxs("div",{className:"checkbox flex gap-3 justify-start items-center",children:[e.jsx("input",{type:"checkbox",id:"checkbox3",className:"relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"}),e.jsx("label",{htmlFor:"checkbox3",className:"sm:cursor-pointer font-Montserrat font-medium text-sm",children:"Subscribe to our newsletter"})]})]}),e.jsx("div",{className:"login-btn mt-6 grid justify-center items-center w-full",children:e.jsx("button",{onClick:()=>U?i(!1):"",className:`py-2.5 sm:py-3 px-16 sm:px-20 transition-all duration-300 rounded-3xl font-Montserrat font-semibold ${U?"bg-blu hover:opacity-70":" !cursor-default bg-blu/20"}`,children:"Sign Up"})})]})]}),e.jsx("div",{className:"wrap",onClick:()=>i(!1),children:e.jsx("div",{className:"cross p-2 absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 top-4 z-50",children:e.jsx(G,{})})})]})})})]})}function Sa(){const[t,a]=s.useState(!1),[i,r]=s.useState(!1);s.useEffect(()=>{const l=document.querySelector("html");t||i?l.classList.add("stop-scrolling"):l.classList.remove("stop-scrolling")},[t,i]);const{pathname:n}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[n]),e.jsxs("main",{className:"login min-h-screen purple-shadow pt-32 md:py-32",children:[e.jsx("header",{className:"z-50 left-0 right-0 transition-all duration-300 border-b border-transparent py-2 sm:py-6 absolute top-0",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper flex mt-4 md:mt-0 justify-start md:justify-between",children:[e.jsx(c,{to:"/",className:"main-logo",children:e.jsx("img",{className:"max-w-[8rem] sm:max-w-[10rem]",src:H,alt:"TheFundedHub"})}),e.jsx("nav",{className:"nav-links hidden md:flex text-wht font-light justify-center items-center",children:e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(c,{to:"/terms-condition",className:"text-[0.8rem]",children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(c,{to:"/privacy-policy",className:"text-[0.8rem]",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(c,{to:"/cookie-policy",className:"text-[0.8rem]",children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(c,{to:"/risk-disclosure",className:"text-[0.8rem]",children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(c,{to:"/report-problem",className:"text-[0.8rem]",children:"Report a problem"})})]})})})]})})}),e.jsx("section",{className:"relative",children:e.jsx("div",{className:"container relative",children:e.jsx("div",{className:"wrapper z-10 relative flex justify-center items-center min-h-[40vh] md:pt-20 pb-24 sm:pb-36",children:e.jsxs("form",{className:"grid gap-3 p-7 relative z-10 rounded-2xl bg-main-bg/[60%] border-primary max-w-[30rem] w-full",action:"",children:[e.jsxs("div",{className:"heading grid gap-3 justify-start items-center",children:[e.jsx("div",{className:"wrap",children:e.jsx("h1",{className:"text-start text-xl xs:text-[1.8rem] font-medium text-wht-gradient pb-[0.2rem]",children:"Sign in"})}),e.jsx("div",{className:"register font-normal",children:e.jsxs("span",{children:["New user?"," ",e.jsx("span",{onClick:()=>r(!0),className:"underline sm:cursor-pointer text-all",children:"Register now"})]})})]}),e.jsx("div",{className:"email mt-3",children:e.jsx("input",{name:"email",className:"email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"email",placeholder:"Email"})}),e.jsx("div",{className:"forget-pass text-end",children:e.jsx("a",{onClick:()=>a(!0),href:"#",className:"underline font-Montserrat font-medium text-sm",children:"Forgot Password"})}),e.jsx("div",{className:"email",children:e.jsx("input",{name:"email",className:"email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"password",placeholder:"Password"})}),e.jsx("div",{className:"wrapper flex gap-3 flex-col sm:flex-row justify-between items-start sm:items-center mt-1",children:e.jsxs("div",{className:"remember flex gap-3 justify-center items-center",children:[e.jsx("input",{type:"checkbox",id:"remeber",className:"relative h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/70 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"}),e.jsx("label",{htmlFor:"remeber",className:"sm:cursor-pointer text-sm font-Montserrat font-medium",children:"Remember me"})]})}),e.jsx("div",{className:"login-btn mt-10 flex justify-center items-center",children:e.jsx("button",{className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold grd-btn-wht pink-glowing-btn",children:"Login"})}),e.jsxs("div",{className:"signup grid gap-4 mt-2",children:[e.jsx("div",{className:"heading flex justify-center items-cente font-Montserrat font-semiboldr",children:e.jsx("h5",{children:"Or sign in with:"})}),e.jsxs("div",{className:"logos flex justify-center items-center gap-3",children:[e.jsx("a",{href:"#",className:"logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center",children:e.jsx(we,{className:" w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]"})}),e.jsx("a",{href:"#",className:"logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center",children:e.jsx(Ne,{className:"w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]"})})]})]})]})})})}),e.jsxs("div",{className:`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center overflow-hidden ${t?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${t?"opacity-100 ":"opacity-0"}`,onClick:()=>a(!1)}),e.jsxs("div",{className:`box relative m-6 max-w-[500px] w-full text-main text-wht bg-light-gray bg-main-bg/90 transition-all duration-300 rounded-3xl z-[999] py-10 px-6 ${t?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsxs("form",{className:"content grid w-full text-center gap-4 font-semibold",children:[e.jsx("div",{className:"heading text-2xl",children:e.jsx("h3",{children:"Password Recovery"})}),e.jsxs("p",{className:"font-light font-Montserrat text-[1.05rem]",children:["We will send a password recovery link to ",e.jsx("br",{})," your e-mail"]}),e.jsxs("div",{className:"email w-full relative mt-4",children:[e.jsx("input",{name:"email",className:"email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"email",placeholder:"Email"}),e.jsx("div",{className:"arrow absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx(ke,{className:"text-3xl text-thin text-primary/[78%]"})})]}),e.jsx("div",{className:"confirm-btn mt-8 flex justify-center items-center",children:e.jsx("button",{className:"py-2 sm:py-2.5 px-12 sm:px-16 grd-btn-wht rounded-3xl font-Montserrat font-semibold",children:"Confirm"})})]}),e.jsx("div",{className:"cross",onClick:()=>a(!1),children:e.jsx(G,{className:"absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 md:right-6 top-4 md:top-6"})})]})]}),e.jsx(Ta,{props:[i,r]}),e.jsx("footer",{className:"z-50 relative md:hidden left-0 right-0 transition-all duration-300 border-b border-transparent py-4 pb-10",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"wrapper flex flex-col md:flex-row justify-between gap-8",children:e.jsx("nav",{className:"nav-links text-wht font-light flex justify-center items-center",children:e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(c,{to:"/terms-condition",className:"text-[0.8rem]",children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(c,{to:"/privacy-policy",className:"text-[0.8rem]",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(c,{to:"/cookie-policy",className:"text-[0.8rem]",children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(c,{to:"/risk-disclosure",className:"text-[0.8rem]",children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(c,{to:"/report-problem",className:"text-[0.8rem]",children:"Report a problem"})})]})})})})})})]})}function _({clr:t}){return e.jsxs("form",{className:`grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-3xl border-primary backdrop-blur-3xl ${t==="dash-bar-clr"?"dash-bar-clr":"bg-main-bg/30"}`,children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"text-xl",children:"Have questions?"})}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6",children:[e.jsx("div",{className:"name",children:e.jsx("input",{name:"name",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Name"})}),e.jsx("div",{className:"surname",children:e.jsx("input",{name:"surname",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Surname"})}),e.jsx("div",{className:"email",children:e.jsx("input",{name:"email",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"email",placeholder:"Email"})}),e.jsx("div",{className:"subject",children:e.jsx("input",{name:"subject",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Subject"})})]}),e.jsx("div",{className:"textarea",children:e.jsx("textarea",{className:"focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]",name:"comment",id:"comment",placeholder:"Comment"})}),e.jsx("div",{className:"login-btn flex justify-center items-center",children:e.jsx("button",{className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold glowing-btn max-w-[12rem]",children:"Send"})})]})}function Ca(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("section",{className:"contact relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsx("div",{className:"wrapper flex items-center justify-center w-full",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full",children:[e.jsxs("div",{className:"left md:col-span-1",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("div",{className:"wrap",children:e.jsx("h3",{className:"text-3xl text-wht-gradient",children:"Contact Us"})}),e.jsxs("p",{children:["Questions? Doubts? ",e.jsx("br",{})," Please contact us anytime and our team will take care of you!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(D,{})})]}),e.jsx("div",{className:"right md:col-span-2",children:e.jsx(_,{})})]})})})}),e.jsx(I,{})]})}function ue({heading:t,para:a,fls:i}){const[r,n]=s.useState(0),[l,o]=s.useState(i),p=s.useRef(null);return s.useEffect(()=>{n(p.current.clientHeight)},[l]),e.jsxs("article",{className:"dash-home-bg rounded-xl",children:[e.jsxs("header",{onClick:()=>o(!l),className:"flex justify-between cursor-pointer py-3 px-4",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base font-Montserrat font-semibold",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t}})}),e.jsx("div",{className:"arrow flex justify-center items-center ml-3",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${l?"rotate-180":""}`,src:T,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:l?r+"px":"0"},className:"faq-content transition-all duration-300 overflow-hidden",children:e.jsx("div",{ref:p,className:"wrapper",children:e.jsx("div",{className:"text-[0.9rem] xs:text-base px-4 pb-5 pt-4 border-t border-primary/20",children:e.jsx("div",{className:"faq-collaps",dangerouslySetInnerHTML:{__html:a}})})})})]})}function Pa(){const[t,a]=s.useState("Started"),{pathname:i}=w(),r={Started:[["What is The Funded Hub?",`<div className="paras">
                  <p>Become a TFH Trader and Grow Your Profits:</p>
                  <ul>
                    <li>
                      Skilled Funded Traders is seeking experienced traders to
                      join their team.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Evaluation and Placement Process:</p>
                  <ul>
                    <li>
                      We follow a 2-Step evaluation process to assess trader
                      skills and potential.
                    </li>
                    <li>
                      Successful completion of the evaluation grants traders a
                      seat in our Proprietary Trading Firm.
                    </li>
                    <li>
                      Traders will remotely manage funds and grow their accounts
                      through our scaling plan.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Profit Sharing and Loss Coverage:</p>
                  <ul>
                    <li>
                      Funded traders are eligible to retain up to 90% of the
                      profits they generate on funded accounts.
                    </li>
                    <li>
                      In the event of losses the company covers them, providing
                      traders with risk protection.
                    </li>
                  </ul>
                </div>
              </div>`],["How Do I Get Started",` <div className="paras">
                  <b>How to Become a Funded Trader - Step-by-Step Guide</b>
                  <p>Step 1: Visit the Pricing Section:</p>
                  <ul>
                    <li>Go to the home page of our trading platform.</li>
                    <li>
                      Click any of the “Get Funded Now” buttons or the “Client
                      Area” button at the top.
                    </li>
                    <li>
                      Sign-up to gain access to your personal private area and
                      follow the instructions during the registration.
                    </li>
                    <li>
                      In your private area press the “Start new Challenge”
                      button at the top or navigate to the “Billing” section.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 2: Choose Your Challenge Size:</p>
                  <ul>
                    <li>
                      From the available options, customize the challenge as
                      suits you best.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 3: Proceed to Checkout and Make Payment:</p>
                  <ul>
                    <li>Add the chosen challenge to your cart.</li>
                    <li>Proceed to the checkout page.</li>
                    <li>
                      Make the payment for the challenge using either
                      credit/debit card or cryptocurrency (ETH, USDC, or DAI on
                      the ERC-20 network).
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 4: Account Credentials and Access:</p>
                  <ul>
                    <li>
                      After payment, you will receive a welcome email within a
                      few minutes to a couple of hours.
                    </li>
                    <li>The email will contain your account credentials.</li>
                    <li>
                      You can now access the trading platform and dashboard
                      using these credentials.
                    </li>
                    <li>
                      Please note that payments via Coinbase Commerce orders may
                      take longer, as they need to be confirmed on the
                      blockchain.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Important Note on Cryptocurrency Payment:</p>
                  <ul>
                    <li>
                      We only accept ETH, USDC, and DAI on the ERC-20 network.
                    </li>
                    <li>
                      Sending these cryptocurrencies on any other network
                      besides ERC-20 will result in non-receipt of payment.
                    </li>
                    <li>
                      Unsupported cryptocurrency recovery is not possible, so
                      ensure you use the correct network.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 5: Review Challenge Rules:</p>
                  <ul>
                    <li>
                      Before starting the challenge, thoroughly review all the
                      rules and guidelines.
                    </li>
                    <li>
                      In case of any doubts, reach out to our live support for
                      clarification.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 6: KYC/AML Screening:</p>
                  <ul>
                    <li>
                      All funded accounts are subject to a KYC/AML screening
                      before issuance.
                    </li>
                    <li>
                      Ensure you can provide a valid form of ID and proof of
                      address issued within the last 90 days.
                    </li>
                    <li>
                      This step is essential to avoid delays in receiving your
                      funded account if you successfully complete the evaluation
                      phase.
                    </li>
                  </ul>
                  <span>
                    By following these steps, you can register and become one of
                    our funded traders, gaining access to exciting trading
                    opportunities.
                  </span>
                </div>`],["Receiving Your Account",`<div className="paras">
                  <b>Receiving Your Trading Account - Timelines and Support</b>
                  <p>Phase 1 Account:</p>
                  <ul>
                    <li>
                      After payment completion, processing of Phase 1 Challenge
                      account begins.
                    </li>
                    <li>
                      Expect to receive your account credentials in less than 5
                      minutes.
                    </li>
                    <li>
                      Check spam or promotional folders if the email is not
                      found initially.
                    </li>
                    <li>
                      If the email is still not located, and you have a
                      confirmed purchase notification, contact our support team
                      via live chat or email.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Phase 2 Account:</p>
                  <ul>
                    <li>
                      Phase 2 accounts can take up to 24 hours to be sent.
                    </li>
                    <li>
                      An automated account review is conducted during this
                      period for compliance purposes.
                    </li>
                    <li>
                      The review ensures any violations during Phase 1 are
                      addressed.
                    </li>
                  </ul>
                  <span>By adhering to these timelines and reaching out to our support team if necessary, you can ensure a seamless and efficient process in obtaining your trading account for the desired challenge phase.</span>
                </div>`],["How many accounts can I trade & is there a maximum account size that I can trade?",` <div className="paras">
                  <b>Maximum Capital Allocation for Skilled Funded Traders</b>
                  <p>Active Challenge Accounts Limit:</p>
                  <ul>
                    <li>
                      The Funded Hub members are allowed to have a maximum of
                      $600,000 in active challenge accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Active Funded Accounts Limit:</p>
                  <ul>
                    <li>
                      Members can have a maximum of $600,000 in active funded
                      accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Clarification on Funded Accounts Trading Limit:</p>
                  <ul>
                    <li>
                      Traders can only trade up to $600,000 in active funded
                      accounts simultaneously.
                    </li>
                    <li>
                      However, traders can have an additional $800,000 in
                      challenge accounts (Phase-1 and Phase-2) alongside the
                      $400,000 max in active funded accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Refund Policy for Exceeding Funded Account Limit:</p>
                  <ul>
                    <li>
                      If a trader trades more than $600,000 in active funded
                      accounts at any given time, they will only be refunded for
                      funded accounts that have not been traded.
                    </li>
                    <li>
                      If the funded account that exceeds the $600,000 limit has
                      already been traded, no refund will be provided, and the
                      account will be breached.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>No Impact on Scaling Plan:</p>
                  <ul>
                    <li>
                      The Maximum Capital Allocation policy does not affect the
                      Scaling Plan.
                    </li>
                  </ul>
                </div>`],["Am I authorized to use a VPN?",`<div className="paras">
                  <b>Sole Traders and VPN/VPS Usage Policy</b>
                  <p>Sole Trader Requirement:</p>
                  <ul>
                    <li>
                      All participants in our challenge and funded programs must
                      be the sole traders of their accounts, as stated in our
                      Terms and Conditions.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Discouragement of VPN/VPS:</p>
                  <ul>
                    <li>
                      We discourage the use of a VPN or VPS to access trading
                      accounts due to the impact on data tracking in our
                      internal systems.
                    </li>
                    <li>
                      This practice is usually followed by any service that
                      prohibits multiple users on a single account.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Permissible Use of VPN/VPS:</p>
                  <ul>
                    <li>
                      It is permissible to use a VPN or VPS; however, if
                      potentially malicious activity is detected on your
                      account, the use of a VPN or VPS will be a significant
                      factor in assessing any violations of our terms and
                      conditions.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Compliance with Terms and Conditions:</p>
                  <ul>
                    <li>
                      We kindly request all participants to ensure compliance
                      with our Terms and Conditions, including refraining from
                      having multiple users trade on a single account.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Prohibited during KYC/AML Verification:</p>
                  <ul>
                    <li>
                      Connecting to Virtual Private Networks (&quot;VPN&quot;)
                      and Virtual Private Servers (&quot;VPS&quot;) during the
                      KYC/AML verification process is strictly prohibited.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Consequences of VPS/VPN Usage during KYC/AML:</p>
                  <ul>
                    <li>
                      If you are connected to a VPS or VPN while completing the
                      KYC process, your account may not receive funding.
                    </li>
                    <li>
                      If it is discovered that you completed the KYC/AML process
                      using a VPS or VPN, your funded account may be disabled or
                      breached.
                    </li>
                  </ul>
                  <span>
                    <p>Note</p>: The above information is subject to change. Please
                    refer to the latest updates on our official website or
                    contact our support team for any queries.
                  </span>
                </div>
                <div className="paras">
                  <p>Contact Options:</p>
                  <ul>
                    <li>
                      Live Chat: Open a conversation on your dashboard <i href="#">here</i>:
                    </li>
                    <li>
                      Email: Contact us by email with general account-related
                      queries: 
                      <a href="mailto: support@thefundedhub.com">
                        support@thefundedhub.com
                      </a>
                    </li>
                  </ul>
                </div>`]],Evaluation:[["Can I have more than one challenge?",""],["Is there any restrictions on trading?",""]],TFH:[["Do you offer Leverage?",""],["Can I hold trades over the weekend?",""],["Can I have more than one challenge?",""],["Is there any restrictions on trading?",""]],Billing:[["Do you offer Leverage?",""],["Can I hold trades over the weekend?",""],["Can I hold trades over the weekend?",""],["Is there any restrictions on trading?",""]]};return s.useEffect(()=>{window.scrollTo(0,0)},[i]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("section",{className:"faq relative purple-shadow pt-16 sm:pt-28",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative pb-24 sm:pb-36 md:pb-44 w-full grid gap-16 xs:gap-20 md:gap-32 max-w-[75rem] m-auto",children:[e.jsxs("div",{className:"top-content py-10 md:py-20 relative",children:[e.jsx("div",{className:"header grid relative",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2 text-wht-gradient",children:"Frequently asked questions"})})}),e.jsxs("div",{className:"content grid md:grid-cols-12 gap-12 mt-10 relative faq-content",children:[e.jsx("div",{className:"left md:col-span-3 relative",children:e.jsxs("div",{className:"options sm:mr-[1rem] flex flex-wrap xs:grid grid-cols-2 md:grid-cols-1 gap-3 relative",children:[e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Started"?"border-primary/80 before:opacity-100":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("Started"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Getting Started"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Evaluation"?"border-primary/80 before:opacity-100":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("Evaluation"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Evaluation Program"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="TFH"?"border-primary/80 before:opacity-100":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("TFH"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"TFH Funded"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Billing"?"border-primary/80 before:opacity-100":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("Billing"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Order and Billing"})})]})}),e.jsx("div",{className:"right faq-collaps md:col-span-9 flex flex-col gap-4 relative",children:r[t].map((n,l)=>e.jsx(ue,{heading:n[0],para:n[1]},l+t))})]})]}),e.jsx("div",{className:"flex items-center relative",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10  w-full",children:[e.jsxs("div",{className:"left md:col-span-1 break-all relative",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("div",{className:"wrap",children:e.jsx("h3",{className:"text-3xl text-wht-gradient",children:"Contact Us"})}),e.jsxs("p",{children:["Questions? Doubts? ",e.jsx("br",{})," Please contact us anytime and our team will take care of you!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(D,{})})]}),e.jsx("div",{className:"right md:col-span-2 relative",children:e.jsx(_,{})})]})})]})})}),e.jsx(I,{})]})}function Aa(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("main",{className:"cookie pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Cookie Policy"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsxs("p",{children:["When displaying content, advertisements and other functionalities on the"," ",e.jsx(c,{to:"/",className:"underline",children:"www.thefundedhub.com"})," ","website (the “Website”) various technologies are used to collect and process personal data, including cookies. You will find details concerning this method of processing in this Cookie Policy."]}),e.jsxs("ul",{className:"",children:[e.jsx("span",{children:"In this Cookie Policy, you will find information regarding the following:"}),e.jsx("li",{children:"1) Who is the operator of the Website and whom to contact?"}),e.jsx("li",{children:"2) What technologies do we use and what are cookies?"}),e.jsx("li",{children:"3) How to set up the use of cookies on the Website?"}),e.jsx("li",{children:"4) How to set up cookies in the web browser?"}),e.jsx("li",{children:"5) What cookies do we use on the Website?"}),e.jsx("li",{children:"6) What are your rights and how can you exercise them"}),e.jsx("li",{})]}),e.jsxs("p",{children:["If you have any questions relating to the processing of your personal data, including cookies in connection with the operation of the Website, and to exercise your rights, you can contact us at"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})]}),e.jsx("span",{children:"We and some third parties process personal data using cookies and other technologies on the Website"}),e.jsxs("p",{children:[e.jsx("div",{children:"WHAT TECHNOLOGIES DO WE USE AND WHAT ARE COOKIES?"}),"Cookies are small files that are stored on your device and that help us collect information about your activities. In particular, cookies allow us to remember your settings, preferences, and your access data, provide targeted content and marketing communications, and analyses the operation of the Website. Cookies may come from us or from third parties whose services we use. In addition to cookies, we may also process your IP address, which is a unique number assigned to a computer or other device communicating via the internet protocol, and analytical scripts, which are small pieces of a computer code through which users and their behavior on websites can be tracked."]}),e.jsxs("p",{children:[e.jsx("div",{children:"HOW TO SET UP THE USE OF COOKIES ON THE WEBSITE?"}),"You can set up your preferences in your web browser and also in your operating system. Some parts of the Website are designed to work with the use of cookies. If you reject some cookies, it may affect the use of some features on the Website or parts of it."]}),e.jsxs("p",{children:[e.jsx("div",{children:"HOW TO SET UP COOKIES IN THE WEB BROWSER?"}),"You can set up the storage of cookies on your device in your web browser. You can set up your browser to accept all cookies, reject them, or indicate when a cookie is being sent, at any time. For more information and options, see the operating system settings of your device."]}),e.jsxs("ul",{children:[e.jsx("span",{children:"Most browsers automatically accept cookies by default. You can get more information about setting up cookies for the most common browsers here:"}),e.jsx("li",{children:"Google Chrome"}),e.jsx("li",{children:"Internet Explorer"}),e.jsx("li",{children:"Microsoft Edge"}),e.jsx("li",{children:"Mozilla Firefox"}),e.jsx("li",{children:"Opera"}),e.jsx("li",{children:"Safari"})]}),e.jsx("span",{children:"You can also delete cookies from your device’s memory at any time. For more information, access your browser or operating system."}),e.jsxs("p",{children:[e.jsx("div",{children:"WHAT COOKIES DO WE USE ON THE WEBSITE?"}),e.jsx("span",{children:"We use the following types of cookies on the Website:"}),e.jsxs("ul",{className:"grid gap-5 mt-5",children:[e.jsxs("li",{children:[e.jsx("div",{children:"➔ Necessary basic cookies:"}),"These cookies allow you to browse the Website and use its functionalities. Through these cookies, we also ensure the security and administration of the Website. Enabling these cookies is automatic and cannot be turned off, as they are necessary for the operation of the Website. We only keep the necessary basic cookies for the duration of your current session."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Functional cookies:"})," Thanks to these cookies, we are able to provide you with a better user experience when using the Website and services. For example, this type of cookie will ensure that the information displayed when you visit the Website corresponds to your preferences and your previous settings. We store functional cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Analytical cookies:"})," Thanks to these cookies, we obtain information on how our Website and services are used. These cookies allow us, for example, to find out that you have visited the Website before, or to monitor which parts of the Website you use most often. We use third-party tools for analytics. We store analytical cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Advertising cookies: "}),"Through these cookies, we and our partners can offer you targeted advertising, for example, based on the collection of information about the services that you have viewed or ordered on the Website or other websites. The Website may also display content from third-party websites or services, and third-party cookies may be stored on your device. The storage and use of those cookies is administered by third parties based on their own rules, which you will find in their privacy policies. We store advertising cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent. A list of all cookies that we use is available here."]}),e.jsxs("li",{children:[e.jsx("div",{children:"What are your rights and how can you exercise them?"}),"You can withdraw your consent to the processing of certain cookies by deleting them in the settings of your web browser. You can exercise other rights specified below by sending a request to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})]})]})]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right of access to personal data"}),"You can ask us at any time to send you a confirmation as to whether or not your personal data are being processed. If we process your data, we will provide you with further details on the processing. If you request it, we will also provide you with a copy of the personal data processed. Please note that the first copy is free of charge, but any following copy will be provided for a small fee."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to rectification of personal data"}),"If we process your personal data inaccurately, you can notify us of this fact, and we will rectify the inaccurate personal data without undue delay. If you register on the Website, you will be able to rectify and amend your personal data yourself by editing your user account"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to erasure of personal data (“right to be forgotten”)"}),"You have the right to obtain from us erasure of personal data concerning you without undue delay in the following cases: If the data are no longer necessary in relation to the purposes for which we have collected or otherwise processed them; If you withdraw your consent to their processing and, at the same time, there will be no other legal ground for their processing (this only applies in the cases where we process personal data on the basis of your consent);",e.jsx("br",{}),"If you object and there are no overriding legitimate grounds for the processing, or if you object to the processing for direct marketing purposes; or",e.jsx("br",{}),"If your personal data are processed unlawfully."]}),e.jsx("p",{children:"We will not be able to act on the request for erasure of personal data if their processing is necessary for exercising the right of freedom of expression and information, for compliance with any of our legal obligations, for the performance of a task carried out in the public interest, for the establishment, exercise, or defense of our legal claims, or for other reasons provided for by law."}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to restriction of processing"}),"In cases stated in article 18 of the GDPR, you have the right to obtain from us restriction of processing of your personal data for a certain period."]}),e.jsxs("p",{children:["Right to data portability and to the provision of data in a machine-readable format In the case of automated processing based on your consent or performance of the contract, you have the right to receive the data in a structured, commonly used and machine-readable format and to have them transmitted by us to another personal data controller. ",e.jsx("br",{})," Right to object ",e.jsx("br",{})," ","If we process personal data on the basis of our legitimate interest, you have the right to object to such processing. If you file such an objection, we will not be able to process your personal data unless we demonstrate compelling legitimate grounds for the processing, which override your interests or rights and freedoms, or for the establishment, exercise or defense of our legal claims. In case we process your personal data for marketing purposes about our products and services, we will terminate the processing without undue delay upon receipt of the objection. In such a case, we will no longer be able to send you offers of our products and services."]}),e.jsx("p",{children:"If processing is based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on the consent given before its withdrawal."}),e.jsxs("p",{children:[e.jsx("div",{children:"Right not to be the subject of automated decision-making"}),"Except where processing is necessary for entering into, or performance of, a contract, where this is permitted by applicable law, or based on your express consent, you have the right not to be the subject of any decision which is based solely on automated processing, including profiling, which produces legal effects concerning you or similarly affects you to a significant extent."]}),e.jsxs("p",{children:[e.jsxs("div",{children:["Right to lodge a complaint with the supervisory authority"," "]}),"If you believe that we are processing your data in violation of the relevant legal regulations, you can lodge a complaint with the relevant supervisory authority."]})]})]})})}),e.jsx(I,{})]})}function Fa(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("main",{className:"privacy pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Privacy Policy"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsxs("p",{children:["When you use our services, we collect and store personal data about you. This Privacy Statement (the 'Policy') informs you of the methods used to handle your personal data.",e.jsx("br",{}),"Information about the following is included in this Privacy Policy:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"How do you get in touch with the person in charge of your personal data?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"In what ways do we obtain and what information do we gather about you?"}),e.jsx("li",{children:"How do we make use of the information you provide about yourself?"}),e.jsx("li",{children:"How do we keep our customers' personal information safe and secure?"}),e.jsx("li",{children:"We share your personal information with whom?"}),e.jsx("li",{children:"What about international organizations and third countries?"}),e.jsx("li",{children:"When it comes to enforcing your rights, how do you go about it?"})]})]}),e.jsxs("p",{children:[e.jsx("div",{children:"Who is the controller of your personal data and whom to contact?"}),"The controller of personal data is THE FUNDED HUB GLOBAL LLP with its registered office at 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX you can contact AC THE FUNDED HUB GLOBAL LLP at"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","regarding any questions and the exercise of rights relating to the processing of your personal data."]}),e.jsxs("p",{children:[e.jsx("div",{children:"What and how do we collect personal information about you?"}),"The information in this part is meant to give you a broad overview of how and what types of personal data we acquire from you. Personal data includes any information that can be used to identify or connect you to a specific individual."]}),e.jsx("p",{children:"When you use our services, you provide us with much of the information we need to know about you. In particular, this includes:"}),e.jsx("p",{children:"Specifically, whether you sign up for an account, provide personal information, place an order, participate in an event or project, or connect with us via customer service or social media. Identification and contact data include your name; surname; phone number; e-mail; postal address; date of birth; username and password; and any warranty claims you may have made. Payment data include your bank account information; and other data, such as records of communication between you and our company or information about any warranty claims."}),e.jsx("p",{children:"Your personal information that we automatically gather when you utilize our products or services. Among these are information about your device (such as your IP address), information about how you use a website (such as the time and date of your visit and the country from which you accessed the website), and information about how you use a service (such as the login and logout information, your account settings, the value of your fictitious capital, your account currency, business strategy)"}),e.jsx("p",{children:"If you choose to link your social networking accounts to your account on the website, third parties may give us information about you. Examples of these third parties include the providers of trading platforms on which you choose to trade using our services. Financial data (such as kind of instrument, time of starting and closing a trade), as well as data from social networks (such as profit or loss), are included (user name, profile picture, e-mail address associated with the account on the social network). For details on how trading platform providers and social network operators use your personal information for their own purposes, please refer to their privacy policies."}),e.jsxs("p",{children:[e.jsx("div",{children:"Do you know what we do with the information you provide us?"}),"This is how we make use of personally identifiable information:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Creating a user account and signing up:"}),"In order to utilize the services, you must register on the website and create an account, and we use your personal data for this purpose"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Your name, email address, and phone number are required to identify you and get in touch with you."]}),e.jsx("p",{children:e.jsx("div",{children:"The legal justification for the processing of personal data:"})}),e.jsxs("p",{children:["You must provide your personal data to us in order for us to register your user account, as we cannot do so without it.",e.jsx("br",{}),"Providing services, exercising contractual rights and responsibilities, and so on:",e.jsx("br",{}),"We need to process your personal data in order to offer you our services, i.e. to give you appropriate access, tools, and assistance, and to conduct transactions. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:["Personal data includes name, address, phone number, email address, payment information, information about how the service is used, information about simulated transactions, and information from social media profiles that you choose to link to your account on the website. ",e.jsx("br",{}),"Legitimate interest or fulfillment of a contract under which we provide our services are both sufficient legal grounds for processing. We retain your personal information for a short amount of time after we no longer provide you with services. The processing is necessary to preserve and defend our rights, which are based on our legitimate interests."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Promotion of our products and services or participation in events:"}),"The marketing messages we send to our existing and former customers will be based on our products and services. Commercial communications may also be sent to you, to the extent to which you have given us your permission. To make it easy for you to discontinue receiving business communications, each email received will be clearly labelled as business communication and include a link that allows you to do so. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information"}),e.jsx("div",{children:"Contact information and identification:"}),"The legal justification for the processing of personal data:",e.jsx("br",{}),"If you have used our services, we may occasionally contact you with marketing materials because we have a genuine interest in staying in touch with those who have used our services. If you agree to allow us to use your personal data for marketing reasons, we will do so."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"If you contact us via social media, we collect your name, email address, phone number, and other personal information."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to keep our customers happy and to make our services more useful to them. Your personal data may be processed in order for us to create, test, improve, and secure some of our services if you utilise them. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Personal information, such as your name, address, phone number, and email address, as well as information about your device, the website, and your use of the services."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to make our services better."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Analytics:"}),"We employ consumer behavior analysis to learn more about how our website and services are being used. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Personal information, such as your name, address, phone number, and email address, as well as information about your device, your use of the website, and the results of your simulated trades."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to learn more about our customers' buying habits and preferences."]}),e.jsxs("p",{children:[e.jsx("div",{children:"How do we keep our personal information safe?"}),"Personal data is stored on computers and other devices in an encrypted database. Organizational and technical safeguards have been put in place to protect the data that we collect and handle from unauthorized access, modification, disclosure, or destruction."]}),e.jsxs("p",{children:[e.jsx("div",{children:"How long does it take us to process your information?"}),"As stated above, personal data are only processed as necessary to accomplish the stated goals and for as long as is required by law. It is then destroyed or anonymized after that. For the following periods of time, we collect and use personal information:",e.jsx("br",{}),"The processing of personal data is limited to the duration necessary to carry out the agreement and to execute the parties' rights and obligations under it, such as handling complaints, resolving damage claims, or engaging in legal action.",e.jsx("br",{}),"if you don't give us permission to send you business communications, we keep your personal data for a maximum of 5 years from the end of your last contract with us or until you object or unsubscribe from the business communications; if we need to fulfill our legal obligations, we keep your personal data for the period set out by the relevant law;"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Third parties use of your information:"}),"In order to deliver our services, we make your data available or transmit it to the following people:"]}),e.jsx("p",{children:"Simulated trades are made possible by your trading platform provider Website and service providers (such as other companies in the group, cloud service providers, payment system operators, financial institutions, service and support providers, IT companies, marketing and communication agencies, consultants, and postal service providers), as well as other third parties"}),e.jsx("p",{children:"In addition, we may send your personal information to parties for whom you have given your permission, as well as in circumstances where we are legally required to do so. The recipients of your personal data are contractually required to protect your information in accordance with applicable laws and to use it only in line with our instructions in accordance with the terms of their contract with us."}),e.jsx("p",{children:"As data controllers, third parties gather personal information for their own ends. Personal data will be processed in accordance with their own guidelines in this situation."}),e.jsxs("p",{children:[e.jsx("div",{children:"Your rights:"}),"Send a request to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","to exercise all of your rights, including the right to withdraw your permission. As a user, you have the following rights when it comes to personal data:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to access personal information:"}),"Whenever you want to know if your personal information is being used, you can ask us to give you a confirmation letter. If we do anything with your data, we'll let you know about it. The personal data we collect and use will be made available to you if you request it. The first copy is free, however, subsequent copies can be purchased for a nominal cost. ",e.jsx("br",{}),"Individuals have the right to have their personal information corrected. Please contact us if your personal data is incorrectly processed and we will correct it as soon as possible. If you sign up for an account on the Website, you will be able to edit and correct your personal information."]}),e.jsxs("p",{children:["The 'right to be forgotten' (right to deletion of personal data)",e.jsx("br",{}),"In the following circumstances, you have the right to have your personal data deleted from our systems immediately: As soon as the data gathered or otherwise processed is no longer required for the stated purposes, Your consent to their processing will be revoked if you do so and there is no other legal basis for their processing (this only applies in circumstances where we treat personal data on your consent). Processing for direct marketing reasons, if you object to the processing and there are no overriding legal grounds;",e.jsx("br",{}),"Please contact us if your personal data is incorrectly processed and we will correct it as soon as possible. If you sign up for an account on the Website, you will be able to edit and correct your personal information."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The 'right to be forgotten' (right to deletion of personal data):"}),"In the following circumstances, you have the right to have your personal data deleted from our systems immediately: As soon as the data gathered or otherwise processed is no longer required for the stated purposes, Your consent to their processing will be revoked if you do so and there is no other legal basis for their processing (this only applies in circumstances where we treat personal data on your consent). Processing for direct marketing reasons, if you object to the processing and there are no overriding legal grounds; ",e.jsx("br",{}),"If you believe that your personal data has been improperly processed, please contact us. ",e.jsx("br",{}),"When a request is made for personal data to be erased, we will not be able to do so if their processing is necessary for exercising the right to freedom of expression and information; compliance with any of our legal obligations; performance of a task carried out in the public interest; establishment, exercise or defense of our legal claims; or other reasons permitted by law."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to limit the use of data:"}),"Article 18 of the GDPR gives you the right to request a temporary halt to the processing of your personal data. Possession and use of information in a machine-readable format, as well as the right to access to such data When we process your personal information through automatic means, you have the right to receive the data in a structured, commonly used, and machine-readable format and to have it transferred to another personal data controller."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to express one's views:"}),"You have the right to object to the processing of your personal data if we do so because it is in our legitimate interests to do so. Our ability to process your personal data is restricted if you raise an objection, and we must show that the processing is necessary to establish, exercise, or defend our legal claims and we have a compelling legitimate interest in doing so."]}),e.jsx("p",{children:"If you object to our use of your personal data for marketing purposes, we shall immediately stop doing so. Our ability to send you offers for our products and services will be terminated if you do this."}),e.jsx("span",{children:"The ability to revoke consent"}),e.jsx("p",{children:"You have the right to revoke your consent at any time if the processing is based on that consent. The lawfulness of processing based on prior consent is unaffected by the withdrawal of consent."}),e.jsxs("p",{children:[e.jsx("div",{children:"The right not to be subjected to automated decision-making processes:"}),"You have the right not to be the subject of any decision based purely on automated processing, including profiling, that generates legal effects concerning you or otherwise affects you to a significant extent, unless this is permitted by relevant legislation or based on your express consent."]}),e.jsx("p",{children:"The right to file a complaint with the governmental agency responsible for investigating complaints."}),e.jsx("p",{children:"You can file a complaint with the relevant supervisory authority if you believe that we are misusing your personal information. Our headquarters are located at this location."}),e.jsxs("p",{children:[e.jsx("div",{children:"Requirements to be met:"}),"We reserve the right to amend this policy at any time, but we will notify you of any such change. A copy of this policy can be found in your Client Section. Use of your own affiliate link shall not count as affiliate commission."]})]})]})})}),e.jsx(I,{})]})}function Ma(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("main",{className:"terms-condition pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Terms of Service"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsx("h4",{className:"text-xl",children:"Overview"}),e.jsx("p",{children:"By using our site and/or purchasing something from us, you participate in our 'Service' and agree to be bound by the following terms and conditions ('Terms of Service', 'Terms'), as well as any other terms and conditions and policies linked herein and/or accessible through a hyperlink. These Terms of Service apply to all users of the site, including but not limited to browsers, vendors, consumers, merchants, and/or content creators."}),e.jsxs("p",{children:["Please carefully read these Terms of Service before accessing or using our website. You agree to be bound by these Terms of Service by accessing or using any portion of the site. You may not visit the website or use any services if you do not agree to all of the terms and conditions of this agreement. Acceptance is solely restricted to these Terms of Service if these Terms of Service are deemed an offer. The Services are only available to those over the age of 18 who live in the countries where the Services are provided.",e.jsx("br",{}),"Any additional features or tools added to the existing site (within the given accounts area) will be subject to the Terms of Service as well. The most recent version of the Terms of Service will be seen on this page at any time. By making updates and/or modifications to our website, we retain the right to update, amend, or replace any portion of these Terms of Service. It is your right and obligation to check this page for updates on a regular basis. Your continued use or access to the website after such modifications are posted implies acceptance of those changes."]}),e.jsx("p",{children:"IN ACCORDANCE WITH APPLICABLE LAWS, NONE OF THE SERVICES PROVIDED TO YOU BY THE PROVIDER CAN BE CONSIDERED INVESTMENT SERVICES. THE PROVIDER DOES NOT GIVE OR PROVIDE TO YOU ANY GUIDANCE, INSTRUCTIONS, OR INFORMATION ABOUT HOW OR IN WHAT MANNER YOU SHOULD PERFORM TRANSACTIONS WHEN USING THE SERVICES OR OTHERWISE, OR ANY OTHER SIMILAR INFORMATION ABOUT THE INVESTMENT TOOLS TRADED, AND THE PROVIDER DOES NOT ACCEPT ANY SUCH GUIDANCE, INSTRUCTIONS, OR INFORMATION FROM YOU. NEITHER THE SERVICES NOR THE RECOMMENDATIONS CONSTITUTE INVESTMENT ADVICE.THE PROVIDER'S EMPLOYEES, STAFF, AND REPRESENTATIVES ARE NOT AUTHORIZED TO GIVE INVESTMENT ADVICE OR RECOMMENDATIONS. IF ANY INFORMATION OR STATEMENT OF THE PROVIDER'S EMPLOYEES, STAFF, OR REPRESENTATIVES IS INTERPRETED AS INVESTMENT ADVICE OR RECOMMENDATIONS, THE PROVIDER EXPLICITLY DISCLAIMS THAT SUCH INFORMATION OR STATEMENT IS INVESTMENT ADVICE OR RECOMMENDATIONS AND SHALL NOT BE RESPONSIBLE FOR THEM."}),e.jsx("p",{children:"We may give third parties access to our website in order to debug and/or maintain issues with our website, database, or infrastructure. After the scope of work is undertaken, these accesses are monitored and restricted. ALL PAYMENTS ARE FINAL AND ONLY FOR THE PURPOSE OF EVALUATION."}),e.jsx("p",{children:"You must pay registration fees in order to have access to the TheFundedHub (THE FUNDED HUB GLOBAL LLP) platform, models, and services. If the service has begun (i.e the client has started trading and/or the client has not successfully completed the Evaluation, the customer is not entitled to a refund of the registration fee, Evaluation Program that are part of the TheFundedHub offer are not due a refund."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 1 - Terms of Online Registration"}),"In signing these Terms of Service, you officially confirm that you are of legal age in your state or province of residence, or that you are of legal age and have given us your permission to allow any of your minor children to use this site. As a condition of using the Service, you agree that you will not engage in any illegal or unauthorized activity (including but not limited to copyright laws). Your Services will be terminated immediately if you violate any of the Terms."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 2 – General Conditions"}),"We have the right to refuse service to anyone at any time for any reason. You acknowledge that your content (except credit card information) may be conveyed unencrypted and may entail (a) transmissions across different networks, and (b) modifications to conform and adapt to the technical requirements of connecting networks or devices. Whenever credit card information is sent over a network, it is always encrypted. Without our explicit written consent, you undertake not to replicate, duplicate, copy, sell, resell, or exploit any component of the Service, use of the Service, or access to the Service or any contact on the website through which the service is offered. The titles in this agreement are given solely for convenience and have no bearing on the Terms."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 3 – Information Accuracy, Completeness, and Timeliness"}),"We make every effort to assure that the information we give is reliable; nevertheless, the information is also provided by third parties, and we are not responsible if the material on this site is not accurate, full, or up to date. This site's content is intended for general information purposes only and should not be relied on or used as the only basis for making choices without contacting primary, more accurate, more complete, or more current sources of information. Any reliance on the information on this site is entirely at your own risk. To reduce your risk, you may always send an email to",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","with your inquiries. This website may contain historical information. Historical material is, by definition, out of date and is given only for your convenience. We retain the right to change the contents of this site at any time, but we are under no obligation to update any of the material on our site. You acknowledge that it is your obligation to keep track of changes to our website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 4 – Changes to the Service and Prices"}),"Our product prices are subject to change without notice. We retain the right to alter or discontinue the Service (accounts offered) (or any part or content thereof) at any time and without notice. We will not be accountable to you or any third person if the Service is modified, priced, suspended, or discontinued."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 5 – Products or Services (if applicable)"}),"We retain the right, but not the obligation, to limit our product or service sales to any individual, geographic location, or jurisdiction. On a case-by-case basis, we may exercise this power. We have the right to limit the number of products or services we offer at any time. All product descriptions and prices are subject to change at our sole discretion at any time without notice. At any moment, we have the right to discontinue any product. Any offer made on this site for a product or service is invalid where prohibited. We don't promise that the quality of any items, services, information, or other material you buy or get from us will match your expectations, or that any flaws in the Service will be rectified."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 6 – Account Information and Billing Accuracy"}),"We have the right to reject any order placed with us. We reserve the right, in our sole discretion, to limit or cancel the number of items purchased per person, per household, or per order. Orders placed by or under the same customer account, the same payment card, and/or orders using the same billing and/or delivery address may be subject to these limitations. If we alter or cancel an order, we may attempt to tell you by contacting the e-mail address and/or billing address/phone number supplied at the time the transaction was placed. We have the right to limit or prohibit orders that appear to be placed by dealers, resellers, or unlicensed distributors at our sole discretion. For any purchases made at our site, you agree to provide current, complete, and accurate purchase and account information. You agree to keep your account and other information up to date, including your email address, credit card numbers, and expiry dates so that we can process transactions and contact you as required."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 7 – Additional Resources"}),"We may offer you access to third-party tools over which we have no control or involvement. You understand and agree that we provide access to such tools 'as is' and 'as available,' with no warranties, representations, or obligations of any kind, and without any endorsement. We accept no liability originating from or related to your use of optional third-party tools. Any use of optional tools made available through the site is solely at your own risk and discretion, and you should ensure that you are acquainted with and approve of the conditions under which the tools are made available by the relevant third-party source (s). We may also provide new services and/or features on the website in the future (including, the release of new tools and resources). These Terms of Service will apply to any additional features and/or services."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 8 – External Links"}),"Third-party materials may be included in certain content, products, and services offered via our Service. Third-party links on our site may take you to websites that are not associated with us. We are not responsible for reviewing or assessing the content or accuracy, and we make no warranty and accept no liability or obligation for any third-party materials or websites, or for any other materials, products, or services provided by third parties. We are not responsible for any risk or damages resulting from the purchase or use of goods, services, resources, materials, or other transactions conducted in connection with any third-party websites. Please carefully research and understand the third-rules parties and procedures before engaging in any transaction. Third-party product complaints, claims, concerns, or inquiries should be directed to the third party."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 9 – Comments, Feedback, and Other Submissions from Users"}),"If you send us creative ideas, suggestions, proposals, plans, or other materials (collectively, 'comments'), whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use any comments that you forward to us in any medium. We are not and will not be obligated to (1) keep any comments confidential; (2) compensate for any remarks; or (3) reply to any comments."]}),e.jsx("p",{children:"We may, but are under no obligation to, monitor, edit, or delete material that we consider to be illegal, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable, or that infringes any party's intellectual property or these Terms of Service."}),e.jsx("p",{children:"You agree that your comments will not infringe on any third rights, parties including copyright, trademark, privacy, personality, or any other personal or property right. You further agree that your comments will not contain libelous or otherwise illegal, abusive, or obscene content, nor will they contain any computer virus or other malware that might interfere with the functioning of the Service or any connected website. You may not use a fraudulent e-mail address, pose as someone other than yourself, or otherwise mislead us or third parties about the origin of any remarks. Any comments you make, as well as their correctness, are completely your responsibility. We accept no responsibility or liability for any remarks posted by you or any other party."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 10 – Personal Information"}),"Our Privacy Policy governs the submission of personal data through the website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 11 – Errors, Inaccuracies, and Omissions"}),"On rare occasions, information on our site or in the Service may contain typographical errors, inaccuracies, or omissions relating to product descriptions, price, promotions, offers, product shipping charges, transit times, or availability. If any information in the Service or on any connected website is erroneous, we have the right to remedy any mistakes, inaccuracies, or omissions, and to modify or update information or cancel orders at any time without prior notice (including after you have submitted your order). Except as required by law, we make no commitment to update, revise, or clarify anything in the Service or on any connected website, including, without limitation, price information. There is no specific update or refresh date applied in the Service or on any associated website to indicate that all information in the Service or on any related website has been edited or updated."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 12 – Restricted Uses"}),"You are prohibited from using the site or its content: (a) for any illegal purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any regional and global, federal, provincial, or state regulations, rules, laws, or state regulations; (d) to infringe upon or violate our intellectual rights or the intellectual property rights of others; and (e) to infringe upon or infringe our intellectual rights or the intellectual property rights of others.(e) to harass, misuse, insult, harm, besmirch, slander, disparage, intimidate, or discriminate due to gender, sexual orientation, faith, ethnic background, race, age, national or ethnic origin, or incapacity; (f) to submit misinformation; (g) to upload or transmit viruses or any other type of malicious code that will or may be used to affect the functionality or operation of the Service or any related website, other websites, or the Internet; (h) to submit false or misleadingFor breaching any of the prohibited uses, we retain the right to suspend your usage of the Service or any connected website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 13 - Unauthorized trading practices"}),e.jsxs("ul",{className:" list-disc ml-8 grid gap-5",children:[e.jsx("li",{children:"It is prohibited for the Customer to intentionally or unintentionally use trading strategies that take advantage of errors in the Services, such as inaccuracies in displayed prices or delays in their updates."}),e.jsx("li",{children:"The Customer is not permitted to execute trades using an external or slow data feed."}),e.jsx("li",{children:"The Customer is prohibited from engaging, either alone or in cooperation with others, in any trades or combination of trades across connected accounts or accounts held with different TheFundedHub entities, if the purpose of such trades is to manipulate trading. Examples of such manipulation include entering into opposite positions simultaneous"}),e.jsx("li",{children:"The Customer is prohibited from conducting trades that violate the terms and conditions of TheFundedHub. Any trades that go against these terms and conditions are not allowed. The Customer must comply with the rules set by TheFundedHub and the Trading Platform when using the Services"}),e.jsx("li",{children:"Do not use any software, artificial intelligence, ultra-high speed, or mass data entry that could manipulate or abuse our systems or services, or give you an unfair advantage."}),e.jsx("li",{children:"The Customer is prohibited from performing gap trading by opening trades during scheduled major global news, macroeconomic events, or corporate reports or earnings that may affect the relevant financial market for trading financial instruments."}),e.jsx("li",{children:"The customer is not allowed to perform trades that are inconsistent with the way trading is typically carried out in the forex or any other financial market. They should also avoid any activities that may cause financial or other harm to TheFundedHub Trading, such as over-leveraging, over-exposure, making one-sided bets, or account rolling. If the customer engages in any of these activities, it may raise valid concerns that they are intentionally harming TheFundedHub Trading."}),e.jsxs("li",{children:["As one of our customers, you should be aware of this and acknowledge that all of our services are intended solely for personal use by the customer. As a result, only you may access your TheFundedHub Account and execute transactions. Hence, you should not, and you therefore do not,",e.jsxs("ul",{className:"inner-li mt-5 grid gap-5 ml-5",children:[e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"Neither you nor any third party shall participate in or collaborate with any third party to have such third party execute trades for you, whether such third party is a private individual or a professional, or permit access to or trading on your TheFundedHub Account by any third party;"}),e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"Access any third-party TheFundedHub Account, trade on behalf of any third-party, or conduct any account management or similar services where you commit to trade, run, or manage the TheFundedHub Account on behalf of another user, whether professionally or otherwise."})]})]}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"Additionally, you agree not to abuse the Services by engaging in trades that do not adhere to market-accepted risk management guidelines for trading on financial markets. This includes, among other things, the following actions: (i)opening positions with sizes that are noticeably larger than those of your other trades, whether on this account or another one of yours; (ii) opening positions with numbers that are noticeably smaller or larger than those of your other trades, whether on this account or another one of yours.(iii) Using high level of margin."}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"TheFundedHub reserves the right to determine, at its own discretion, whether certain trades, practices, strategies or situations are Forbidden Trading Practices."}),e.jsxs("li",{className:"marker:text-transparent ml-5",children:["It is advised that all TheFundedHub clients adhere to the following trading guidelines also. Otherwise, TheFundedHub won't be held responsible for whatever repercussions it chooses to have.",e.jsx("ul",{className:"mt-5 ml-5 text-wht inner-li",children:e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"During KYC it’s strictly recommended to provide right information and not to manipulate or try to impersonate others. It is also advised not to use any VPS/VPN during KYC verification."})})]}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"If the Customer engages in any of the prohibited trading practices mentioned above or does not follow the guidelines, TheFundedHub may pause or terminate payout. TheFundedHub may also remove any trades that violate the prohibition from the Customer's trading history and not count their results in the profits and losses achieved by the demo trading. Furthermore, TheFundedHub Trading reserves the right to cancel the Customer's TheFundedHub Account immediately and terminate this Agreement, and/or reduce the offered leverage on products to 1:5 or lower on any or all of the Customer's accounts. If any or all of the prohibited trading practices are performed on one or more TheFundedHub Accounts of one Customer or multiple Customers, or by combining trading on TheFundedHub Account and trading through Evaluation Services (i.e. TheFundedHub Demo phase-1 or Phase-2), then TheFundedHub Trading has the right to cancel all TheFundedHub Accounts and terminate respective agreements, used for or involved in the prohibited trading practices."})]})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 14 – Limitation of Liability; Disclaimer of Warranties"}),e.jsx("p",{children:"TheFundedHub does not promise, represent, or assure that your use of our service will be error-free, speedy, secure, or uninterrupted. We do not represent that the results that may be achieved from the use of the service will be accurate or trustworthy. You accept that we may suspend the service for an extended amount of time or terminate it at any moment, with or without notice to you. You expressly acknowledge that your use of the service, or inability to utilize it, is at your own risk. The service and all products and services delivered to you via the service are provided 'as is' and 'as available for your use, without any express or implied representation, warranties, or conditions of any kind, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.TheFundedHub, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors shall in no event be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because certain states or countries do not allow the exclusion or limitation of responsibility for consequential or incidental damages, our liability shall be limited to the fullest extent permissible by law in such states or jurisdictions."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 15 – Indemnification"}),e.jsx("p",{children:"You indemnify and hold, uphold, and retain Intellimeter and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees harmless from any claim or demand made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference or your violation of any law or regulation."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 16 – Severability"}),e.jsx("p",{children:"If any provision of these Terms of Service is found to be unlawful, void, or unenforceable, that provision shall be enforced to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed severed from these Terms of Service; however, such determination shall have no bearing on the validity and enforceability of the remaining provisions."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 17 – Termination"}),"For all reasons, the parties' responsibilities and liabilities accrued prior to the termination date will survive the termination of this agreement. Unless and until either you or us terminate these Terms of Service, they will remain in force. You may terminate these Terms of Service at any time by telling us that you no longer want to utilize our Services or by discontinuing your usage of our website."]}),e.jsx("p",{children:"We may also terminate this agreement at any time without notice if you fail, or we suspect you have failed, to comply with any term or provision of these Terms of Service, and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly deny you access to our Services (or any part thereof)."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 18 – Refund Policy"}),"By sending an e-mail to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"}),", the Customer may request the termination of the Client Section at any time. Sending a request to cancel the Client Section is regarded as a request by the Customer to terminate the contract, with the Customer losing access to the Services, including the Client Section and Trading Platform. The Provider will send an email to the Customer to confirm receipt of the request, at which point the contractual relationship between the Customer and the Provider will be dissolved. The Customer is not entitled to a refund of any fees previously paid or other expenditures spent in this situation."]}),e.jsxs("p",{children:["If the Customer engages in any of the forbidden practices repeatedly, and the Provider has previously notified the Customer thereof, the Provider may prevent the Customer from accessing all Services or their parts, including access to the Client Section and Trading Platform, without any compensation. In such a case, the Customer is not entitled to a refund of the fees paid. After paying the fee for the selected option of the TheFundedHub program, the Customer will receive the relevant login data for the Trading Platform at the e-mail address provided by the Customer or in the Client Section. The Customer activates the account by receiving the account credential. IF YOU ARE A CONSUMER, YOU ACKNOWLEDGE THAT, BY OPENING THE FIRST TRADE, YOU EXPRESSLY DEMAND THE PROVIDER TO COMPLETE THE SERVICES BEFORE THE EXPIRY OF THE PERIOD FOR WITHDRAWAL FROM THE CONTRACT, WHICH AFFECTS YOUR RIGHT TO WITHDRAW FROM THE CONTRACT. If you do not activate the TheFundedHub account within 30 calendar days of the date on which it was made available to you, your access to it will be suspended. You can request the renewal of access by sending an e-mail to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","within 3 days of the initial suspension, otherwise, we will terminate the provision of the Services without any right to a refund of the fee."]}),e.jsx("p",{children:"If the Customer files an unjustifiable complaint about the paid fee or disputes the paid fee with the Customer's bank or payment service provider (e.g., through chargeback services, dispute services, or other similar services), on the basis of which an annulment, cancellation, or refund of the fee or any part thereof is requested, the Provider reserves the right, at its sole discretion, to stop providing any services to the Customer and refuse any future provision of any services."}),e.jsx("p",{children:"Both the Customer and TheFundedHub mutually commit to conducting their dealings and interactions with fairness and respect. They shall refrain from causing harm to each other's reputation or legitimate interests, both during and after the trading period. Any disagreements or disputes that may arise between them will be resolved in accordance with the terms of this Agreement and the applicable legal framework."}),e.jsx("p",{children:"If you do not begin trading within 7 days after registering, you may request a refund. It should be noted that after the trader has begun trading on the account, the fees are non-refundable. This includes both full and partial refunds."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 19 – Entire Agreement"}),"We shall not be deemed to have waived any right or provision of these Terms of Service if we fail to exert or enforce such right or provision. These Terms of Service, as well as any policies or operating rules posted by us on this site or in relation to The Service, represent the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguity in the interpretation of these Terms of Service should not be interpreted against the party who drafted them."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 20 – Governing Law"}),e.jsx("p",{children:"These Terms of Service, as well as any additional agreements under which we give you Services, are regulated and construed in accordance with the user's legal jurisdiction."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 21 – Local Law"}),"It's recommended to know your local regulations if there are any. You're taking service as per your own risk and responsibilities. By declaring that you are over 18 years old and thereby TheFundedHub isn't responsible for any action taken by its customer. If there is any violation of local law, you are solely responsible for this."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 22– Changes to Terms of Service"}),"The user's legal jurisdiction governs and is construed in line with these Terms of Service and any other agreements whereby we provide you Services."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 23 – Contact Information"}),"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX."]}),e.jsx("p",{children:e.jsx("div",{})})]})]})})}),e.jsx(I,{})]})}function Ea(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("main",{className:"privacy pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Risk Disclosure"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsx("p",{children:"The Funded Hub's content is intended to be generic in nature. A recommendation, endorsement, or sponsorship of any security, company, or fund is not intended by the Company`'s information. Lesser-known clients or consumers may not be represented in testimonials on the Company's websites. The Company, its partners, representatives, agents, employees, and contractors accept no responsibility or liability for any use or misuse of such information."}),e.jsxs("p",{children:[e.jsx("div",{children:"Futures and FX trading are not suitable for all investors."}),"An investor may lose all or part of their initial investment. Trading should only be done with risk capital—money that can be lost without endangering one's financial stability or lifestyle. This is not a solicitation or offer to buy or sell futures, options, or forex. Past performance does not guarantee future results."]}),e.jsx("p",{children:"There are some restrictions under CFTC Rule 4.41 - Hypothetical or simulated performance outcomes Simulated outcomes do not represent actual trading. Because the deals were not actually performed, the outcomes may have under-or over-compensated for market conditions like lack of liquidity. Simulated trading programs are generally created with the advantage of hindsight. Notification that any account will or is likely to generate such profit or loss is made."}),e.jsxs("p",{children:[e.jsx("div",{children:"Risky Warning:"}),"Margin trading CFDs include a high level of risk and are not suited for all investors. Before trading CFDs, you should carefully assess your trading objectives, experience, and risk appetite. You could lose more than your initial investment, so don't deposit anything you can't afford to lose. Understand the hazards and take precautions to manage them."]}),e.jsx("p",{children:"The site may contain links to third-party websites. Information or materials posted on sites connected to our site have not been reviewed by our company and are not our responsibility. By linking to a third-party website, the Company is not endorsing or recommending any of the third-product parties or This site's content is solely for informational purposes. It should not be construed as an offer or solicitation in any area where such action is prohibited or as a suggestion to purchase, sell, or otherwise deal with any particular currency or precious metal trade. You should exit this site immediately if you are unsure about your local currency and spot metal trading laws."}),e.jsx("p",{children:"It is advised to be aware of any local laws. Before trading currencies or metals, you should seek independent financial, legal, and tax counsel. This site does not constitute advice from the Company or any of its affiliates, directors, officers, or employees."}),e.jsx("p",{children:"Any person in any nation or territory where such distribution or usage would be contrary to local law or regulation is prohibited from using the Company's services."}),e.jsx("p",{children:"We want to sharpen your trading style more than ever. We believe that you will perform the best when you are within your comfort zone. So you’re allowed to trade with any trading style that you like most. We aim to get the best out of you and once you trade freely. We all will grow together. So choose your trading plan wisely."})]})]})})}),e.jsx(I,{})]})}function Ia(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("section",{className:"contact relative pb-28 pt-32 sm:pt-44 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsx("div",{className:"wrapper flex items-center w-full",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full m-auto",children:[e.jsxs("div",{className:"left md:col-span-1 break-all ",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("h3",{className:"text-3xl",children:"Report a Problem"}),e.jsxs("p",{children:["Did you notice any bug or technical error? ",e.jsx("br",{})," Please let us know!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(D,{})})]}),e.jsx("div",{className:"right md:col-span-2",children:e.jsxs("form",{className:"grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-xl bg-main-bg/70 border-primary",children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"text-xl sm:text-2xl",children:"Contact Us"})}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6",children:[e.jsx("div",{className:"name",children:e.jsx("input",{name:"name",className:"name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]",type:"text",placeholder:"Name"})}),e.jsx("div",{className:"surname",children:e.jsx("input",{name:"surname",className:"name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]",type:"text",placeholder:"Surname"})}),e.jsx("div",{className:"email",children:e.jsx("input",{name:"email",className:"name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]",type:"email",placeholder:"Email"})}),e.jsx("div",{className:"subject",children:e.jsx("input",{name:"subject",className:"name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]",type:"text",placeholder:"Subject"})})]}),e.jsx("div",{className:"textarea",children:e.jsx("textarea",{className:"focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]",name:"comment",id:"comment",placeholder:"Comment"})}),e.jsx("div",{className:"login-btn flex justify-center items-center",children:e.jsx("button",{className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold grd-btn-wht pink-glowing-btn",children:"Send"})})]})})]})})})}),e.jsx(I,{})]})}function Da({props:t}){const[a,i]=s.useState(!1),[r,n]=s.useState("John Doe"),[l,o]=s.useState(!1),[p,u]=s.useState(!1),d=s.useRef(null),f=r.split(" ").map(g=>g.charAt(0)).join(""),[v,P]=t,{pathname:S}=w();s.useEffect(()=>{window.scrollTo(0,0),i(!1),o(!1),u(!1)},[S]);const m=g=>{o(!1),i(!1),g==="notification"&&o(!l),g==="account"&&i(!a)},[h,N]=s.useState("Funded - 7382691"),[A,F]=s.useState(!1),[R,U]=s.useState(0);return s.useEffect(()=>{window.scrollTo(0,0)},[S]),e.jsxs("header",{className:"header-area px-[20px] z-[9999] fixed dash-nav floating-bars",children:[e.jsx("div",{className:"header-left",children:e.jsx("div",{className:"accounts relative h-[1.875rem] z-50",children:e.jsxs("div",{className:"grid gap-2 absolute inset-0 min-w-[12rem]",children:[e.jsxs("div",{className:"border border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg floating-bars w-full relative",children:[e.jsxs("header",{onClick:()=>F(!A),className:"select-account flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base",children:h}),e.jsx("div",{className:"arrow flex justify-center items-center",children:e.jsx("img",{className:`max-w-[1rem] transform-gpu transition-all duration-300 ${A?"rotate-180":""}`,src:T,alt:"arrow"})})]}),e.jsx("div",{className:`select-account-options dash-bar-clr content overflow-hidden absolute border border-primary/0 transition-all duration-300 py-[0.26rem] w-full mt-2 rounded-lg font-Montserrat floating-bars ${A?"max-h-[81px] opacity-100 visible":"max-h-0 opacity-0 invisible"}`,children:e.jsxs("div",{ref:d,className:"grid gap-1 text-center text-[0.9rem] xs:text-base",children:[e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${h==="Phase 1 - 6180217"?"hidden":""}`,onClick:()=>(N("Phase 1 - 6180217"),F(!1)),children:"Phase 1 - 6180217"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${h==="Phase 2 - 9584654"?"hidden":""}`,onClick:()=>(N("Phase 2 - 9584654"),F(!1)),children:"Phase 2 - 9584654"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${h==="Funded - 7382691"?"hidden":""}`,onClick:()=>(N("Funded - 7382691"),F(!1)),children:"Funded - 7382691"})]})})]}),e.jsxs("div",{className:"border-2 hidden border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg floating-bars w-full",children:[e.jsxs("header",{onClick:()=>F(!A),className:"flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base",children:h}),e.jsx("div",{className:"arrow flex justify-center items-center",children:e.jsx("img",{className:`max-w-[1.2rem] transform-gpu transition-all duration-300 ${A?"rotate-180":""}`,src:T,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:A?R+"px":"0"},className:"content transition-all duration-300 overflow-hidden",children:e.jsxs("div",{ref:d,className:"grid gap-1 mt-1 text-[0.9rem] xs:text-base pb-4 px-4",children:[e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${h==="Phase - 1"?"hidden":""}`,onClick:()=>(N("Phase - 1"),F(!1)),children:"Phase - 1"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${h==="Phase - 2"?"hidden":""}`,onClick:()=>(N("Phase - 2"),F(!1)),children:"Phase - 2"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${h==="Funded"?"hidden":""}`,onClick:()=>(N("Funded"),F(!1)),children:"Funded"})]})})]})]})})}),e.jsxs("div",{className:"header-right relative",children:[e.jsxs("div",{className:"navigate relative font-Montserrat font-medium text-wht/90 hidden sm:inline-block",children:[e.jsxs("div",{className:"wrap flex gap-3 items-center cursor-pointer",onClick:()=>u(!p),children:[e.jsx("h4",{className:"user-name",children:r}),e.jsx("div",{className:"short-name uppercase border bg-blu/20 border-blu h-10 w-10 rounded-full flex justify-center items-center",children:f}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:"w-5",src:T,alt:""})})]}),e.jsx("div",{className:`floating absolute dash-bar-clr z-50 -bottom-[7rem] text-wht rounded-xl border border-primary/20 transition-all duration-300 transform ${p?"opacity-100 scale-100 -right-[1rem]":"opacity-0 scale-75 -right-[3rem]"}`,children:e.jsx("div",{className:"wrap",children:e.jsxs("ul",{children:[e.jsx("li",{className:"group",children:e.jsx(c,{to:"profile",className:"flex items-center  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 hover:bg-primary/10 ease-linear pl-4 pr-10",onClick:()=>u(!1),children:"My Profile"})}),e.jsx("li",{className:"group",children:e.jsx(c,{to:"/login",className:"flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 hover:bg-primary/10 ease-linear pl-4 pr-10",onClick:()=>u(!1),children:"Logout"})})]})})})]}),e.jsxs("div",{className:"author-wrapper relative lg:!flexf !hidden",children:[e.jsxs("div",{className:"author-wrap cursor-pointer",onClick:()=>m("account"),children:[e.jsx("div",{className:"thumb h-10 w-10 bg-primary/50 rounded-lg flex justify-center items-center",children:e.jsx(Te,{className:"text-xl"})}),e.jsxs("div",{className:"name ml-[15px]",children:["James",e.jsx("svg",{className:"inline-block w-[24px] h-[24px] fill-white",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M7 10l5 5 5-5z"})})]})]}),e.jsx("div",{className:`user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] rounded-[10px] shadow-[0_1px_15px_rgba(199,179,252,0.13)] lg:origin-center origin-right floating-bars z-[99999] transition-all duration-500 ${a?" scale-100 opacity-100 visible":"scale-50 opacity-0 invisible"}`,children:e.jsxs("ul",{children:[e.jsx("li",{className:"border-b border-primary/20",children:e.jsx("a",{href:"#",className:"block text-primary text-base leading-[1.5] tracking-[-0.05px] py-[10px] group-hover:!fill-primary",children:"fundedhub@mail.com"})}),e.jsx("li",{className:"border-b border-primary/20 group",children:e.jsx(c,{to:"profile",className:"flex items-center   leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary",children:"My Profile"})}),e.jsx("li",{className:"group",children:e.jsx(c,{to:"/login",className:"flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear  text-wht group-hover:text-primary",children:"Logout"})})]})})]}),e.jsx("div",{className:"mobile-bar lg:hidden group",onClick:()=>(v(!P),o(!1)),children:e.jsx("div",{className:"h-10 w-10 bg-primary/50 rounded-full cursor-pointer flex justify-center items-center",children:e.jsx(Se,{className:"text-2xl"})})})]})]})}const Ha="/assets/dashboard-logo-137f35b9.png";function Ba(){const[t,a]=s.useState(!1),{pathname:i}=w();return s.useEffect(()=>{window.scrollTo(0,0),a(i==="/dashboard")},[i]),e.jsxs("aside",{className:"sidebar floating-bars",children:[e.jsx("div",{className:"logo text-center h-[80px] flex items-center justify-center cursor-pointer relative z-[9999]",children:e.jsx(c,{to:"/dashboard",children:e.jsx("img",{className:"inline-block w-36",src:Ha,alt:"logo"})})}),e.jsxs("div",{className:"lg:hidden flex flex-wrap flex-col items-center justify-center",children:[e.jsx("img",{className:"w-[55px] h-[55px] rounded-full",src:"/assets/img/author/author.jpeg",alt:"author"}),e.jsx("h4",{className:"text-wht text-[15px] mt-[8px]",children:"abc dev"}),e.jsx("p",{className:"text-primary text-[12px] mt-[8px]",children:"abc.dev@gmail.com"})]}),e.jsx("div",{className:"main-menu z-30 relative",children:e.jsxs("ul",{className:"nav grid gap-2 overflow-y-scroll md:overflow-auto",children:[e.jsx(C,{to:"/dashboard",onClick:()=>a(!0),className:t?"active-side-nav":"",children:e.jsx("li",{className:"nav-item group",children:e.jsx("div",{className:"nav-link",children:e.jsx("span",{className:"",children:"Dashboard"})})})}),e.jsx(C,{to:"withdraw",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Withdraw"})})})}),e.jsx(C,{to:"top-up-reset",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Top-up & Reset"})})})}),e.jsx(C,{to:"billing",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Billing"})})})}),e.jsx(C,{to:"help",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Help"})})})}),e.jsx(C,{to:"dashboard-contact",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Contact"})})})}),e.jsx(C,{to:"certificate",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Certificate"})})})})]})}),e.jsxs("div",{className:"absolute grid gap-4 justify-center items-center bottom-[1.5rem] w-full z-30 font-Montserrat",children:[e.jsx("div",{className:"wrap flex justify-center",children:e.jsx(D,{})}),e.jsx(c,{to:"/dashboard/start-new-challenge",className:"capitalize whitespace-nowrap font-Montserrat text-xs font-bold py-3 px-5 dash-btn rounded-3xl text-center max-w-[12rem]",children:"START NEW CHALLENGE"})]})]})}function Ra(){const[t,a]=s.useState("Per Trade"),i=[{name:"0",date:"20 Sep 2023",trade:"195.000"},{name:"29",date:"21 Sep 2023",trade:"217.336"},{name:"51",date:"22 Sep 2023",trade:"196.724"},{name:"65",date:"23 Sep 2023",trade:"221.533"},{name:"87",date:"24 Sep 2023",trade:"193.716"},{name:"97",date:"25 Sep 2023",trade:"196.444"},{name:"110",date:"26 Sep 2023",trade:"203.723"},{name:"999",date:"20 Oct 2023",trade:"201.075"},{name:"1010",date:"27 Oct 2023",trade:"209.012"},{name:"1011",date:"28 Oct 2023",trade:"211.507"},{name:"1012",date:"29 Oct 2023",trade:"217.470"}],r=[{name:"0",date:"20 Sep 2023",trade:"195.000"},{name:"29",date:"21 Sep 2023",trade:"217.336"},{name:"920",date:"6 Oct 2023",trade:"211.414"},{name:"921",date:"7 Oct 2023",trade:"193.438"},{name:"97",date:"25 Sep 2023",trade:"196.444"},{name:"110",date:"26 Sep 2023",trade:"203.723"},{name:"232",date:"27 Sep 2023",trade:"200.487"},{name:"375",date:"28 Sep 2023",trade:"209.204"},{name:"443",date:"29 Sep 2023",trade:"223.989"},{name:"575",date:"30 Sep 2023",trade:"210.055"},{name:"1010",date:"27 Oct 2023",trade:"209.012"},{name:"1011",date:"28 Oct 2023",trade:"211.507"},{name:"1012",date:"29 Oct 2023",trade:"217.470"}],n=({active:l,payload:o,label:p})=>{var u,d;return l&&o&&o.length?(console.log(o),e.jsxs("div",{className:"customTooltip",children:[e.jsx("p",{className:"intro pb-4",children:(d=(u=o[0])==null?void 0:u.payload)==null?void 0:d.date}),e.jsx("p",{className:"intro pb-4",children:p}),e.jsx("p",{className:"label",children:`${o[0].name} : ${o[0].value}`})]})):null};return e.jsx("div",{className:"lineChart h-full w-full",children:e.jsxs("div",{className:"charts-wrapper",children:[e.jsx("div",{className:"buttons",children:e.jsxs("div",{children:[e.jsx("h3",{className:t==="Per Trade"?"active":"",onClick:()=>a("Per Trade"),children:"Per Trade"}),e.jsx("h3",{className:t==="Daily"?"active":"",onClick:()=>a("Daily"),children:"Daily"})]})}),e.jsx($,{width:"100%",height:"100%",children:e.jsxs(Le,{data:t==="Per Trade"?i:r,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorTrade",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#151b68",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"#151b68",stopOpacity:0})]})}),e.jsx(le,{axisLine:!0,tickLine:!0,dataKey:"name"}),e.jsx(de,{axisLine:!1,tickLine:!1,domain:[190,225],type:"number"}),e.jsx(ce,{cursor:{opacity:"0.5",stroke:"#131397"},content:e.jsx(n,{})}),e.jsx(Ue,{type:"monotone",dataKey:"trade",stroke:"#0014ff",strokeWidth:2,fillOpacity:1,fill:"url(#colorTrade)"})]})})]})})}function q({data:t,percent:a}){const i=({active:r,payload:n,label:l})=>r&&n&&n.length?e.jsxs("div",{className:"customTooltip",children:[e.jsx("div",{style:{position:"absolute",width:"100%",height:"100%",opacity:"0.9",zIndex:"-1",top:"0",left:"0",borderRadius:"10px",padding:"10px 20px 10px 20px"}}),e.jsx("p",{className:"intro pt-2 pb-6",children:l}),e.jsxs("p",{className:"label",children:[`${n[0].name} : `,e.jsx("span",{style:{color:n[0].value>=0?"green":"red"},children:n[0].value})]})]}):null;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"barChart w-full",children:e.jsx("div",{className:"charts-wrapper",children:e.jsx($,{width:"100%",height:"100%",children:e.jsxs(qe,{data:t,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"positive",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#0c1ad5",stopOpacity:1}),e.jsx("stop",{offset:"95%",stopColor:"#0c1ad5",stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"negative",x1:"0",x2:"0",y1:"1",y2:"0",children:[e.jsx("stop",{offset:"5%",stopColor:"#0c1ad5",stopOpacity:1}),e.jsx("stop",{offset:"95%",stopColor:"#0c1ad5",stopOpacity:.1})]})]}),e.jsx(We,{strokeDasharray:"10 10",vertical:!1}),e.jsx(le,{dataKey:"name",type:"category",axisLine:!1,tickLine:!1}),e.jsx(de,{axisLine:!1,tickLine:!1,domain:[-3,5],tickFormatter:r=>`${r} ${a===1?"%":""}`}),e.jsx(ce,{cursor:{fill:"transparent"},labelStyle:{color:"gray"},itemStyle:{color:"white",fontWeight:"500"},content:e.jsx(i,{})}),e.jsx($e,{y:0,stroke:"#fff"}),e.jsx(Ye,{dataKey:"return",children:t.map((r,n)=>e.jsx(he,{fill:(r==null?void 0:r.return)>=0?"url(#positive)":"url(#negative)"},`cell-${n}`))})]})})})})})}function Oa(){let t=[{name:"Sunday",wins:1,losses:13,fill:"purple"},{name:"Saturday",wins:0,losses:0,fill:"blue"},{name:"Friday",wins:94,losses:76,fill:"orange"},{name:"Thursday",wins:118,losses:52,fill:"pink"},{name:"Wednesday",wins:131,losses:86,fill:"purple"},{name:"Tuesday",wins:166,losses:136,fill:"yellow"},{name:"Monday",wins:61,losses:78,fill:"green"}];return t=t==null?void 0:t.map(a=>({...a,winRate:(a==null?void 0:a.wins)/((a==null?void 0:a.wins)+(a==null?void 0:a.losses))*100||0})),e.jsx("div",{className:"radialChart h-full w-full",children:e.jsx("div",{className:"charts-wrapper",children:e.jsx($,{width:"100%",height:"100%",children:e.jsxs(Ge,{innerRadius:"30%",outerRadius:"130%",data:t,startAngle:90,endAngle:360,barSize:8,children:[e.jsx(Ve,{type:"number",domain:[0,100],tick:!1}),e.jsx(_e,{minAngle:15,background:{fill:"#2B2C30"},dataKey:"winRate",cornerRadius:30,legendType:"circle"}),e.jsx(me,{iconSize:10,width:120,height:140,layout:"vertical",verticalAlign:"top",align:"center",content:a=>{const{payload:i}=a,r=(i==null?void 0:i.length)-1;return e.jsx("table",{className:"recharts-default-legend",style:{padding:"0px",margin:"0px",textAlign:"left"},children:e.jsx("tbody",{children:i==null?void 0:i.map((n,l)=>{var o,p,u,d,f,v,P;return e.jsxs("tr",{className:"recharts-legend-item legend-item-0",children:[e.jsxs("td",{children:[e.jsxs("svg",{className:"recharts-surface",width:"10",height:"10",viewBox:"0 0 32 32",style:{display:"inline-block",verticalAlign:"middle",marginRight:"4px"},children:[e.jsx("title",{}),e.jsx("desc",{}),e.jsx("path",{fill:(o=i[r-l])==null?void 0:o.color,cx:"16",cy:"16",className:"recharts-symbols",transform:"translate(16, 16)",d:"M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"})]}),e.jsx("span",{className:"recharts-legend-item-text",style:{color:(p=i[r-l])==null?void 0:p.color},children:`${(u=i[r-l])==null?void 0:u.value}: `})]}),e.jsx("td",{children:e.jsxs("span",{style:{marginLeft:"10px"},children:["Wins: ",(f=(d=i[r-l])==null?void 0:d.payload)==null?void 0:f.wins]})}),e.jsx("td",{children:e.jsxs("span",{style:{marginLeft:"10px"},children:["Losses: ",(P=(v=i[r-l])==null?void 0:v.payload)==null?void 0:P.losses]})})]},l)})})})}})]})})})})}const za=t=>{const{cx:a,cy:i,innerRadius:r,outerRadius:n,startAngle:l,endAngle:o,fill:p,payload:u,percent:d}=t;return e.jsxs("g",{children:[e.jsx("rect",{x:a-65,y:i-35,rx:"20",ry:"20",width:"130",height:"70",style:{fill:"none",stroke:p,strokeDasharray:"6"}}),e.jsxs("text",{x:a,y:i,dy:8,textAnchor:"middle",fill:p,children:[e.jsx("tspan",{x:a,dy:"-0.2em",fill:"white",children:u.name}),e.jsxs("tspan",{x:a,dy:"1.4em",children:["("," ",parseFloat(d*100).toFixed(2)," ","% )"]})]}),e.jsx(Xe,{cx:a,cy:i,innerRadius:r,outerRadius:n,startAngle:l,endAngle:o,cornerRadius:10,fill:p})]})};function ie({data:t}){const[a,i]=s.useState(-1),r=s.useCallback((l,o)=>{i(o)},[i]),n=s.useCallback((l,o)=>{i(-1)},[i]);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"pieChart max-h-[450px] h-full",children:e.jsx("div",{className:"charts-wrapper",children:e.jsx($,{width:"100%",height:"100%",children:e.jsxs(Je,{children:[e.jsx(me,{iconType:"circle",layout:"horizontal",verticalAlign:"top",align:"center"}),e.jsx(Ke,{activeIndex:a,activeShape:za,data:t,innerRadius:80,outerRadius:120,fill:"#8884d8",cornerRadius:10,paddingAngle:6,dataKey:"value",label:!0,onMouseEnter:r,onMouseLeave:n,children:t==null?void 0:t.map((l,o)=>e.jsx(he,{style:{outline:"none",opacity:a<0?"1":"0.5"}},`cell-${o}`))})]})})})})})}function La(){const{pathname:t}=w(),a=[{name:"Mon",return:-1.75},{name:"Tue",return:2.9},{name:"Wed",return:3.2},{name:"Thu",return:.7},{name:"Fri",return:4.8},{name:"Sat",return:0},{name:"Sun",return:-2.1}],i=[{name:"00:00-00:05",return:540},{name:"00:05-00:15",return:-125},{name:"00:60-00:75",return:-300},{name:"00:75-00:90",return:200}],r=[{name:"Sell",return:-50},{name:"Buy",return:505}],n=[{name:"US30.cash",value:30.3,fill:"#f59e0b"},{name:"US100.cash",value:34.6,fill:"#84cc16"},{name:"GER30.cash",value:33.7,fill:"#5b21b6"},{name:"BTC",value:1.4,fill:"#3b82f6"}],l=[{name:"Sell",value:30,fill:"#dc2626"},{name:"Buy",value:70,fill:"#84cc16"}],o=[{name:"GBPUSD.tff",return:800},{name:"XAUUSD",return:95},{name:"XAGUSD",return:-40}],p=[{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "}],u=[{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"}];return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsx("main",{className:"new-dashboard relative pt-16 sm:pb-6 sm:pt-24 bg-black",children:e.jsx("div",{className:"content-wrapper relative",children:e.jsxs("div",{className:"inner-content px-6 relative",children:[e.jsx("div",{className:"flex flex-col xs:flex-row gap-5 relative mb-10 md:hidden",children:e.jsxs("div",{className:"inline-flex justify-start text-[22px] leading-[1.5] font-medium tracking-[-0.06px] ",children:[e.jsx("svg",{className:"breadcrumb-icon mt-1",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})}),"Dashboard"]})}),e.jsxs("div",{className:"dashboard-wrapper z-10 grid gap-6 font-Montserrat font-normal text-sm",children:[e.jsxs("div",{className:"head flexf flex-col xs:flex-row gap-6 justify-between hidden",children:[e.jsxs("div",{className:"left flex  items-center gap-4",children:[e.jsx("div",{className:"symbol bg-blu p-2.5 sm:p-3 rounded-full",children:e.jsx(Ce,{className:"text-2xl"})}),e.jsx("h2",{className:"relative text-wht-gradient text-2xl sm:text-3xl",children:"Account"})]}),e.jsx("div",{className:"right flex items-center",children:e.jsxs("span",{children:[e.jsx("span",{className:"text-gry",children:"Created"}),": Aug 30, 2023"]})})]}),e.jsxs("div",{className:"wrap grid md:grid-cols-3 gap-6",children:[e.jsx("div",{className:"balance-chart col-span-2 hidden",children:e.jsx("div",{className:"ApexChart relative z-10 grid gap-4 dash-home-bg rounded-xl mt-6 md:mt-0",children:e.jsx("div",{className:"min-h-[300px] sm:h-[280px] md:min-h-[420px] rounded-xl py-4 md:p-6 pr-4 md:mt-4"})})}),e.jsxs("div",{className:"chart-wrap md:col-span-2 grid gap-4 mt-1",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Balance chart"})}),e.jsx("div",{className:"dash-home-bg overflow-hidden w-full max-h-full",children:e.jsx(Ra,{})})]}),e.jsxs("div",{className:"right md:col-span-1 grid gap-4",children:[e.jsxs("div",{className:"top flex gap-4 justify-between items-center",children:[e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Funded Account"}),e.jsx("div",{className:"pas bg-grn p-1 px-2.5 rounded-2xl text-white",children:"passed"})]}),e.jsx("div",{className:"wrap dash-home-bg py-6 px-4 text-sm h-full",children:e.jsxs("div",{className:" grid gap-8",children:[e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Deposit:"}),e.jsx("div",{className:"value",children:"£10,000.00"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Start date:"}),e.jsx("div",{className:"value",children:"Aug 11, 2023, 6:20:20 PM"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Broker:"}),e.jsx("div",{className:"value",children:"BlackBull"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Platform:"}),e.jsx("div",{className:"value",children:"MetaTrader 5"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Balance:"}),e.jsx("div",{className:"value",children:"£10,425.05"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Equity:"}),e.jsx("div",{className:"value",children:"£10,425.05"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Last update:"}),e.jsx("div",{className:"value",children:"Sep 10, 2023, 5:06:47 PM"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Created:"}),e.jsx("div",{className:"value",children:"Sep 10, 2023"})]})]})})]})]}),e.jsxs("div",{className:"wrap grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 text-sm pt-2",children:[e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsxs("div",{className:"top text-[0.8rem] flex justify-between gap-1",children:[e.jsx("div",{className:"text-gry",children:"Balance"}),e.jsx("div",{className:"text-green-500 ",children:"+£425.05"})]}),e.jsx("div",{className:"val font-bold",children:"£10,425.05"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsxs("div",{className:"top text-[0.8rem] flex justify-between gap-1",children:[e.jsx("div",{className:"text-gry",children:"Equity"}),e.jsx("div",{className:"text-green-500 ",children:"+£425.05"})]}),e.jsx("div",{className:"val font-bold",children:"£10,425.05"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-between gap-1",children:e.jsx("div",{className:"text-gry",children:"Today’s Permitted Loss"})}),e.jsx("div",{className:"val font-bold",children:"Not available"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-between gap-1",children:e.jsx("div",{className:"text-gry",children:"Max. Permitted Loss"})}),e.jsx("div",{className:"val font-bold",children:"Not available"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-between gap-1",children:e.jsx("div",{className:"text-gry",children:"Today's Profit"})}),e.jsx("div",{className:"val font-bold",children:"£0.00"})]})]}),e.jsxs("div",{className:"wrap mt-8",children:[e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Trading Objectives"}),e.jsxs("div",{className:"items mt-4 grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"item dash-home-bg p-5",children:[e.jsxs("div",{className:"top flex justify-between items-center border-b border-primary/10 pb-4",children:[e.jsxs("div",{className:"txt flex gap-4 items-center",children:[e.jsx("div",{className:"pas bg-grn p-1.5 px-2.5 rounded-2xl text-white",children:"passed"}),e.jsx("div",{children:"Max Daily Loss"})]}),e.jsx("div",{className:"val",children:"£500.00"})]}),e.jsxs("div",{className:"bottom flex gap-4 justify-between pt-3",children:[e.jsx("div",{className:"text-gry",children:"Result:"}),e.jsx("div",{children:" -£237.76"})]})]}),e.jsxs("div",{className:"item dash-home-bg p-5",children:[e.jsxs("div",{className:"top flex justify-between items-center border-b border-primary/10 pb-4",children:[e.jsxs("div",{className:"txt flex gap-4 items-center",children:[e.jsx("div",{className:"pas bg-grn p-1.5 px-2.5 rounded-2xl text-white",children:"passed"}),e.jsx("div",{children:"Max Loss"})]}),e.jsx("div",{className:"val",children:"£1,000.00"})]}),e.jsxs("div",{className:"bottom flex gap-4 justify-between pt-3",children:[e.jsx("div",{className:"text-gry",children:"Result:"}),e.jsx("div",{children:" -£223.76"})]})]})]})]}),e.jsx("div",{className:"middle mt-8 text-xs",children:e.jsxs("div",{className:"wrap grid md:grid-cols-5 gap-6 ",children:[e.jsxs("div",{className:"left md:col-span-2 flex flex-col gap-4",children:[e.jsx("div",{className:"wrap flex ",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Daily Summary"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4 h-full",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-primary",children:[e.jsx("th",{align:"left",children:"Time"}),e.jsx("th",{align:"left",children:"Trades"}),e.jsx("th",{align:"left",children:"Lots"}),e.jsx("th",{align:"left",children:"Result"})]})}),e.jsx("tbody",{className:"text-gry",children:p.map((d,f)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("span",{children:[" ",d.time," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.trade," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.lots," "]})}),e.jsx("td",{children:e.jsxs("span",{className:`${d.result.indexOf("-")===-1?"text-grn":"text-danger"}`,children:[" ",d.result," "]})})]},d.trade+f))})]})})]}),e.jsxs("div",{className:"right md:col-span-3 grid gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Daily Returns"})}),e.jsx("div",{className:"chart dash-home-bg py-4 max-h-full",children:e.jsx(q,{data:a,percent:1})})]})]})}),e.jsx("div",{className:"win-loss mt-8 text-xs",children:e.jsxs("div",{className:"wrap flex flex-col md:grid md:grid-cols-2 gap-6 ",children:[e.jsxs("div",{className:"left grid gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Wins & Losses"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4 h-[658px]  sm:h-full w-full",children:e.jsx(Oa,{})})]}),e.jsxs("div",{className:"right  grid gap-4",children:[e.jsx("div",{className:"wrap flex",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Profit by Holding time"})}),e.jsx("div",{className:"chart dash-home-bg py-4",children:e.jsx(q,{data:i})})]})]})}),e.jsxs("div",{className:"statistics mt-8",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Statistics"})}),e.jsx("div",{className:"wrap mt-4",children:e.jsxs("div",{className:"items grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:[e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Best trade"}),e.jsx("span",{children:"£27.17"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Pe,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Worst trade"}),e.jsx("span",{children:"-£26.27"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Ae,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"No. of trades"}),e.jsx("span",{children:"158"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Fe,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Lots"}),e.jsx("span",{children:"7.57"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Me,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Win rate"}),e.jsx("span",{children:"75%"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Ee,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Average win"}),e.jsx("span",{children:"£8.70"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Ie,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Average loss"}),e.jsx("span",{children:"-£8.78"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(De,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Average RRR"}),e.jsx("span",{children:"0.99"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(He,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Expectancy"}),e.jsx("span",{children:"£4.44"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Be,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-between items-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Profit factor"}),e.jsx("span",{children:"3.10"})]}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"icon",children:e.jsx(Re,{})})})]})]})})]}),e.jsx("div",{className:"buy-sell mt-8 text-xs",children:e.jsxs("div",{className:"wrap grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"left flex flex-col gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Buy / Sell"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4  h-full ",children:e.jsx(q,{data:r})})]}),e.jsxs("div",{className:"right grid gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Direction Allocation"})}),e.jsx("div",{className:"chart dash-home-bg py-4",children:e.jsx(ie,{data:l})})]})]})}),e.jsx("div",{className:"symbol mt-8 text-xs",children:e.jsxs("div",{className:"wrap grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"left flex flex-col gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Symbol"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4  h-full w-full",children:e.jsx(q,{data:o})})]}),e.jsxs("div",{className:"right grid gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Symbol Allocation"})}),e.jsx("div",{className:"chart dash-home-bg py-4",children:e.jsx(ie,{data:n})})]})]})}),e.jsxs("div",{className:"history mt-8",children:[e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"History"}),e.jsx("div",{className:"wrap mt-4 dash-home-bg px-3 py-4 h-[400px] overflow-y-scroll",children:e.jsx("div",{className:"w-full m-auto max-w-[80vw] md:max-w-[70vw] overflow-x-scroll pr-10 pb-10",children:e.jsxs("table",{className:"",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-primary",children:[e.jsx("th",{align:"left",children:"Open"}),e.jsx("th",{align:"left",children:"Action"}),e.jsx("th",{align:"left",children:"Symbol"}),e.jsx("th",{align:"left",children:"Volume"}),e.jsx("th",{align:"left",children:"Open price"}),e.jsx("th",{align:"left",children:"Close"}),e.jsx("th",{align:"left",children:"Close price"}),e.jsx("th",{align:"left",children:"Duration"}),e.jsx("th",{align:"left",children:"Swap"}),e.jsx("th",{align:"left",children:"Commission"}),e.jsx("th",{align:"left",children:"Profit"}),e.jsx("th",{align:"left",children:"Pip"})]})}),e.jsx("tbody",{children:u.map((d,f)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("span",{children:[" ",d.open," "]})}),e.jsx("td",{children:e.jsxs("span",{className:`${d.Action==="buy"?"text-grn":"text-danger"} capitalize`,children:[" ",d.Action," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.Symbol," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.Volume]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.OpenPrice," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.Close]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.ClosePrice," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.Duration," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.Swap," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",d.Commission," "]})}),e.jsx("td",{children:e.jsxs("span",{className:`${d.Profit.indexOf("-")===-1?"text-grn":"text-danger"} capitalize`,children:[" ",d.Profit]})}),e.jsx("td",{children:e.jsxs("span",{className:`${d.Pip.indexOf("-")===-1?"text-grn":"text-danger"} capitalize`,children:[" ",d.Pip," "]})})]},d.open+f))})]})})})]})]})]})})})}function Ua({props:t}){const[a,i]=s.useState(!1),[r,n]=t,{pathname:l}=w();return s.useEffect(()=>{window.scrollTo(0,0),r(!1),i(l==="/dashboard")},[l]),e.jsx("div",{className:"wrapper relative left-0 right-0 top-0 bottom-0 z-[999] overflow-hidden",children:e.jsxs("aside",{className:`mobile-nav pt-[70px] h-screen overflow-y-scroll lg:hidden w-[80%] sm:w-[60%] fixed z-[999] top-0 bottom-0 transition-all duration-500 o  ${n?"left-0":"-left-full"}
    `,children:[e.jsx("div",{className:`bg-main-bg/70 fixed z-[90] left-0 right-0 top-0 bottom-0 transition-all duration-200 ${n?"visible opacity-100":"invisible opacity-0 -z-[100]"}`,onClick:()=>r(!1)}),e.jsxs("ul",{className:"pl-12 w-full font-Montserrat relative z-[999]",children:[e.jsx("li",{className:"border-b border-primary/20 group mt-4",children:e.jsx(c,{to:"profile",className:"flex items-center  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary",children:"My Profile"})}),e.jsx("li",{className:"group",children:e.jsx(c,{to:"/login",className:"flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear  text-wht group-hover:text-primary",children:"Logout"})})]}),e.jsx("div",{className:"main-menu relative z-[999] ml-5",children:e.jsxs("ul",{className:"nav grid gap-2 h-full",children:[e.jsx(C,{to:"/dashboard",onClick:()=>i(!0),className:a?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link",children:e.jsx("span",{children:"Dashboard"})})})}),e.jsx(C,{to:"trading-overview",className:({isActive:o})=>o?"active-side-nav hidden":"hidden",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Trading Overview"})})})}),e.jsx(C,{to:"withdraw",className:({isActive:o})=>o?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Withdraw"})})})}),e.jsx(C,{to:"top-up-reset",className:({isActive:o})=>o?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Top-up & Reset"})})})}),e.jsx(C,{to:"./billing",className:({isActive:o})=>o?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Billing"})})})}),e.jsx(C,{to:"help",className:({isActive:o})=>o?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Help"})})})}),e.jsx(C,{to:"dashboard-contact",className:({isActive:o})=>o?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group flex gap-4",children:e.jsx("span",{children:"Contact"})})})}),e.jsx(C,{to:"certificate",className:({isActive:o})=>o?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"text group-hover:text-main-bg/70",children:"Certificate"})})})}),e.jsxs("div",{className:"ml-14 mt-8 mb-12 grid gap-8",children:[e.jsx(D,{}),e.jsx(c,{to:"/dashboard/start-new-challenge",className:"capitalize  whitespace-nowrap font-Montserrat text-xs font-bold py-3 px-5 dash-btn rounded-3xl text-center max-w-[12rem]",children:"START NEW CHALLENGE"})]})]})})]})})}function qa(){const[t,a]=s.useState(!0),[i,r]=s.useState(!1),[n,l]=s.useState({top:30,right:30,left:-20,bottom:-5});s.useEffect(()=>{i?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[i]);const{pathname:o}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[o]),s.useEffect(()=>{screen.width>560&&l({top:30,right:30,left:15,bottom:10})},[]),e.jsxs(e.Fragment,{children:[e.jsx(Da,{props:[r,i]}),e.jsx(Ba,{sideOpen:t}),e.jsx(Ua,{props:[r,i]}),e.jsx("div",{className:"wrapper purple-shadow  fh-screen",children:o==="/dashboard"?e.jsx(La,{}):e.jsx(ve,{})})]})}function Wa(){const[t,a]=s.useState(0),[i,r]=s.useState(!1),n=s.useRef(null);s.useEffect(()=>{a(n.current.clientHeight)},[i]);const l=[{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"}];return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadow-dash min-h-screen",children:e.jsx("div",{className:"inner-content px-6",children:e.jsxs("div",{className:"dashboard-wrapper relative",children:[e.jsx("div",{className:"flex flex-wrap relative",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"flex flex-wrap",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"content relative mb-[30px]",children:e.jsxs("div",{className:"flex relative z-10 flex-wrap justify-center mx-[-15px]",children:[e.jsx("div",{className:"xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]",children:e.jsxs("div",{className:"p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr",children:[e.jsx("h3",{className:"text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht",children:"Account Profit"}),e.jsx("p",{className:"xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"Your account profit from your current trading cycle."}),e.jsx("p",{className:"text-blu text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]",children:"$0.00"})]})}),e.jsx("div",{className:"xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]",children:e.jsxs("div",{className:"p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr",children:[e.jsx("h3",{className:" text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px]",children:"Withdrawable Profit"}),e.jsx("p",{className:"xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"Withdrawable profit at the end of your trading cycle."}),e.jsx("p",{className:"text-primary text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]",children:"$0.00"})]})}),e.jsx("div",{className:"xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]",children:e.jsxs("div",{className:"p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr",children:[e.jsx("h3",{className:"text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht",children:"Withdraw Request"}),e.jsx("p",{className:"xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"Total Account Growth Percentage You've Reached"}),e.jsx("div",{className:"btn",children:e.jsx("a",{className:"capitalize hidden sm:inline-block font-Montserrat text-sm font-bold py-3 px-7 dash-btn rounded-3xl",href:"/dashboard/billing",children:"Get your payout"})})]})})]})})})})})}),e.jsx("div",{className:"flex flex-wrap relative",children:e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"card-wrap dash-bar-clr rounded-[2rem]",children:[e.jsxs("div",{className:"card-heading flex items-center justify-between cursor-pointer",onClick:()=>r(!i),children:[e.jsx("h3",{className:"text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]",children:"Withdraw History"}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${i?"rotate-180":""}`,src:T,alt:"arrow"})})]}),e.jsx("article",{className:"dash-home-bg rounded-xl",children:e.jsx("div",{style:{maxHeight:i?t+"px":"0"},className:"width-content transition-all duration-300 overflow-hidden",children:e.jsx("div",{ref:n,className:"wrapper",children:e.jsx("div",{className:"billing-data bg-transparent px-3 py-4 overflow-y-scroll",children:e.jsx("div",{className:"w-full m-auto max-w-[80vw] md:max-w-[70vw] overflow-x-scroll",children:e.jsxs("table",{className:"font-Montserrat w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("th",{align:"left",children:"Pay"}),e.jsx("th",{align:"left",children:"Funded challenge"}),e.jsx("th",{align:"left",children:"Dates"}),e.jsx("th",{align:"left",children:"Amount"}),e.jsx("th",{align:"left",children:"Account"}),e.jsx("th",{align:"left",children:"status"}),e.jsx("th",{align:"left",children:"Invoice"})]})}),e.jsx("tbody",{children:l.map((o,p)=>e.jsxs("tr",{children:[e.jsx("td",{children:" -- "}),e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("div",{className:"nm text-all",children:"Funded challenge"}),e.jsxs("div",{className:"acnt-sizes flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Account size:"}),o.accountSize]}),e.jsxs("div",{className:"perf flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Proforma no.:"}),o.ProformaNo]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dates",children:[e.jsx("div",{className:"date1",children:o.date1}),e.jsx("div",{className:"date2",children:o.date2})]})}),e.jsx("td",{children:e.jsx("div",{className:"amount",children:o.amount})}),e.jsxs("td",{children:[e.jsx("div",{children:"Funded"}),e.jsx("div",{children:"MT5"})]}),e.jsx("td",{children:e.jsx("div",{className:"paid py-2 text-center rounded-xl bg-grn text-white",children:"paid"})}),e.jsx("td",{children:e.jsx("div",{className:"invoice flex justify-center items-center",children:e.jsx(ne,{className:" cursor-pointer"})})})]},o.open+p))})]})})})})})})]})})})]})})})}function $a(){return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash",children:e.jsx("div",{className:"inner-content px-6 min-h-screen",children:e.jsx("div",{className:"dashboard-wrapper",children:e.jsx("div",{className:"flex flex-wrap",children:e.jsxs("div",{className:"w-full grid sm:grid-cols-2 md:grid-cols-3 !gap-4",children:[e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-5 rounded-3xl relative z-10 overflow-hidden dash-home-bg backdrop-blur-3xl dash-home-bg",children:[e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"card-heading flex items-center justify-between mb-[20px]",children:e.jsx("h3",{className:"card-title text-xl",children:"Top Up"})}),e.jsxs("p",{className:"xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70",children:["Traders will get an opportunity to bring back their account balance to the initial amount. Applicable if you have not violated any of the drawdown rules. Once you top up your account, your trading cycle will also reset. To know more"," ",e.jsx("a",{href:"#",className:"underline",children:"click"})]}),e.jsx("p",{className:"xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px]",children:"*** You must close the running trades if you have any***"})]}),e.jsx("div",{className:"btn flex justify-center",children:e.jsx("a",{href:"#",className:"capitalize font-Montserrat text-sm font-bold py-4 px-12 dash-btn rounded-3xl",children:"Top Up Request"})})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-5 rounded-3xl relative z-10 overflow-hidden dash-home-bg backdrop-blur-3xl dash-home-bg",children:[e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"card-heading flex items-center justify-between mb-[20px]",children:e.jsx("h3",{className:"card-title text-xl",children:"Reset"})}),e.jsxs("p",{className:"text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70",children:['If a trader violates the rules his/her account will be suspended. Prop dashboard will give him/her the opportunity to continue with the program at a discounted price/cost. This re-registration cost is also known as the "Reset" fee since the trader will be provided with a new account and his trading cycle will be reset. To know more'," ",e.jsx("a",{href:"#",className:"underline",children:"click here"})]}),e.jsx("p",{className:"text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"*** You must close the running trades if you have any***"})]}),e.jsx("div",{className:"btn flex justify-center",children:e.jsx("a",{href:"#",className:"capitalize font-Montserrat text-sm font-bold py-4 px-12 dash-btn rounded-3xl",children:"Reset Request"})})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"card-wrap dash-home-bg h-full",children:[e.jsx("div",{className:"card-heading flex items-center justify-between mb-[20px]",children:e.jsx("h3",{className:"card-title !mb-0",children:"Top Up & Reset History"})}),e.jsx("div",{className:"content h-full flex justify-center items-center",children:e.jsxs("div",{className:"withdraw-history text-center py-[40px]",children:[e.jsx("div",{className:"thumb inline-block mb-[24px]",children:e.jsx("img",{src:oa,alt:"thumb"})}),e.jsx("p",{children:"No history found!"})]})})]})})]})})})})})}function Ya(){const[t,a]=s.useState("Started"),i={Started:[["What is The Funded Hub?",`<div className="paras">
                  <p>Become a TFH Trader and Grow Your Profits:</p>
                  <ul>
                    <li>
                      Skilled Funded Traders is seeking experienced traders to
                      join their team.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Evaluation and Placement Process:</p>
                  <ul>
                    <li>
                      We follow a 2-Step evaluation process to assess trader
                      skills and potential.
                    </li>
                    <li>
                      Successful completion of the evaluation grants traders a
                      seat in our Proprietary Trading Firm.
                    </li>
                    <li>
                      Traders will remotely manage funds and grow their accounts
                      through our scaling plan.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Profit Sharing and Loss Coverage:</p>
                  <ul>
                    <li>
                      Funded traders are eligible to retain up to 90% of the
                      profits they generate on funded accounts.
                    </li>
                    <li>
                      In the event of losses the company covers them, providing
                      traders with risk protection.
                    </li>
                  </ul>
                </div>
              </div>`],["How Do I Get Started",` <div className="paras">
                  <b>How to Become a Funded Trader - Step-by-Step Guide</b>
                  <p>Step 1: Visit the Pricing Section:</p>
                  <ul>
                    <li>Go to the home page of our trading platform.</li>
                    <li>
                      Click any of the “Get Funded Now” buttons or the “Client
                      Area” button at the top.
                    </li>
                    <li>
                      Sign-up to gain access to your personal private area and
                      follow the instructions during the registration.
                    </li>
                    <li>
                      In your private area press the “Start new Challenge”
                      button at the top or navigate to the “Billing” section.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 2: Choose Your Challenge Size:</p>
                  <ul>
                    <li>
                      From the available options, customize the challenge as
                      suits you best.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 3: Proceed to Checkout and Make Payment:</p>
                  <ul>
                    <li>Add the chosen challenge to your cart.</li>
                    <li>Proceed to the checkout page.</li>
                    <li>
                      Make the payment for the challenge using either
                      credit/debit card or cryptocurrency (ETH, USDC, or DAI on
                      the ERC-20 network).
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 4: Account Credentials and Access:</p>
                  <ul>
                    <li>
                      After payment, you will receive a welcome email within a
                      few minutes to a couple of hours.
                    </li>
                    <li>The email will contain your account credentials.</li>
                    <li>
                      You can now access the trading platform and dashboard
                      using these credentials.
                    </li>
                    <li>
                      Please note that payments via Coinbase Commerce orders may
                      take longer, as they need to be confirmed on the
                      blockchain.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Important Note on Cryptocurrency Payment:</p>
                  <ul>
                    <li>
                      We only accept ETH, USDC, and DAI on the ERC-20 network.
                    </li>
                    <li>
                      Sending these cryptocurrencies on any other network
                      besides ERC-20 will result in non-receipt of payment.
                    </li>
                    <li>
                      Unsupported cryptocurrency recovery is not possible, so
                      ensure you use the correct network.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 5: Review Challenge Rules:</p>
                  <ul>
                    <li>
                      Before starting the challenge, thoroughly review all the
                      rules and guidelines.
                    </li>
                    <li>
                      In case of any doubts, reach out to our live support for
                      clarification.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 6: KYC/AML Screening:</p>
                  <ul>
                    <li>
                      All funded accounts are subject to a KYC/AML screening
                      before issuance.
                    </li>
                    <li>
                      Ensure you can provide a valid form of ID and proof of
                      address issued within the last 90 days.
                    </li>
                    <li>
                      This step is essential to avoid delays in receiving your
                      funded account if you successfully complete the evaluation
                      phase.
                    </li>
                  </ul>
                  <span>
                    By following these steps, you can register and become one of
                    our funded traders, gaining access to exciting trading
                    opportunities.
                  </span>
                </div>`],["Receiving Your Account",`<div className="paras">
                  <b>Receiving Your Trading Account - Timelines and Support</b>
                  <p>Phase 1 Account:</p>
                  <ul>
                    <li>
                      After payment completion, processing of Phase 1 Challenge
                      account begins.
                    </li>
                    <li>
                      Expect to receive your account credentials in less than 5
                      minutes.
                    </li>
                    <li>
                      Check spam or promotional folders if the email is not
                      found initially.
                    </li>
                    <li>
                      If the email is still not located, and you have a
                      confirmed purchase notification, contact our support team
                      via live chat or email.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Phase 2 Account:</p>
                  <ul>
                    <li>
                      Phase 2 accounts can take up to 24 hours to be sent.
                    </li>
                    <li>
                      An automated account review is conducted during this
                      period for compliance purposes.
                    </li>
                    <li>
                      The review ensures any violations during Phase 1 are
                      addressed.
                    </li>
                  </ul>
                  <span>By adhering to these timelines and reaching out to our support team if necessary, you can ensure a seamless and efficient process in obtaining your trading account for the desired challenge phase.</span>
                </div>`],["How many accounts can I trade & is there a maximum account size that I can trade?",` <div className="paras">
                  <b>Maximum Capital Allocation for Skilled Funded Traders</b>
                  <p>Active Challenge Accounts Limit:</p>
                  <ul>
                    <li>
                      The Funded Hub members are allowed to have a maximum of
                      $600,000 in active challenge accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Active Funded Accounts Limit:</p>
                  <ul>
                    <li>
                      Members can have a maximum of $600,000 in active funded
                      accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Clarification on Funded Accounts Trading Limit:</p>
                  <ul>
                    <li>
                      Traders can only trade up to $600,000 in active funded
                      accounts simultaneously.
                    </li>
                    <li>
                      However, traders can have an additional $800,000 in
                      challenge accounts (Phase-1 and Phase-2) alongside the
                      $400,000 max in active funded accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Refund Policy for Exceeding Funded Account Limit:</p>
                  <ul>
                    <li>
                      If a trader trades more than $600,000 in active funded
                      accounts at any given time, they will only be refunded for
                      funded accounts that have not been traded.
                    </li>
                    <li>
                      If the funded account that exceeds the $600,000 limit has
                      already been traded, no refund will be provided, and the
                      account will be breached.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>No Impact on Scaling Plan:</p>
                  <ul>
                    <li>
                      The Maximum Capital Allocation policy does not affect the
                      Scaling Plan.
                    </li>
                  </ul>
                </div>`],["Am I authorized to use a VPN?",`<div className="paras">
                  <b>Sole Traders and VPN/VPS Usage Policy</b>
                  <p>Sole Trader Requirement:</p>
                  <ul>
                    <li>
                      All participants in our challenge and funded programs must
                      be the sole traders of their accounts, as stated in our
                      Terms and Conditions.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Discouragement of VPN/VPS:</p>
                  <ul>
                    <li>
                      We discourage the use of a VPN or VPS to access trading
                      accounts due to the impact on data tracking in our
                      internal systems.
                    </li>
                    <li>
                      This practice is usually followed by any service that
                      prohibits multiple users on a single account.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Permissible Use of VPN/VPS:</p>
                  <ul>
                    <li>
                      It is permissible to use a VPN or VPS; however, if
                      potentially malicious activity is detected on your
                      account, the use of a VPN or VPS will be a significant
                      factor in assessing any violations of our terms and
                      conditions.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Compliance with Terms and Conditions:</p>
                  <ul>
                    <li>
                      We kindly request all participants to ensure compliance
                      with our Terms and Conditions, including refraining from
                      having multiple users trade on a single account.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Prohibited during KYC/AML Verification:</p>
                  <ul>
                    <li>
                      Connecting to Virtual Private Networks (&quot;VPN&quot;)
                      and Virtual Private Servers (&quot;VPS&quot;) during the
                      KYC/AML verification process is strictly prohibited.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Consequences of VPS/VPN Usage during KYC/AML:</p>
                  <ul>
                    <li>
                      If you are connected to a VPS or VPN while completing the
                      KYC process, your account may not receive funding.
                    </li>
                    <li>
                      If it is discovered that you completed the KYC/AML process
                      using a VPS or VPN, your funded account may be disabled or
                      breached.
                    </li>
                  </ul>
                  <span>
                    <p>Note</p>: The above information is subject to change. Please
                    refer to the latest updates on our official website or
                    contact our support team for any queries.
                  </span>
                </div>
                <div className="paras">
                  <p>Contact Options:</p>
                  <ul>
                    <li>
                      Live Chat: Open a conversation on your dashboard <i href="#">here</i>:
                    </li>
                    <li>
                      Email: Contact us by email with general account-related
                      queries: 
                      <a href="mailto: support@thefundedhub.com">
                        support@thefundedhub.com
                      </a>
                    </li>
                  </ul>
                </div>`]],Evaluation:[["Can I have more than one challenge?",""],["Is there any restrictions on trading?",""]],TFH:[["Do you offer Leverage?",""],["Can I hold trades over the weekend?",""],["Can I have more than one challenge?",""],["Is there any restrictions on trading?",""]],Billing:[["Do you offer Leverage?",""],["Can I hold trades over the weekend?",""],["Can I hold trades over the weekend?",""],["Is there any restrictions on trading?",""]]};return e.jsx("main",{className:"content-wrapper min-h-screen pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash",children:e.jsx("div",{className:"inner-content px-6",children:e.jsx("div",{className:"dashboard-wrapper",children:e.jsxs("div",{className:"top-content relative faq-content",children:[e.jsx("div",{className:"header grid relative",children:e.jsx("h1",{className:"text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize",children:"FAQ"})}),e.jsxs("div",{className:"content grid gap-12 mt-10 relative",children:[e.jsx("div",{className:"left  relative",children:e.jsxs("div",{className:"options mr-[1rem] flex flex-wrap gap-4 relative",children:[e.jsx("div",{className:`option py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Started"?"border-primary":"border-primary/10"}`,onClick:()=>a("Started"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Getting Started"})}),e.jsx("div",{className:`option py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Evaluation"?"border-primary":"border-primary/10"}`,onClick:()=>a("Evaluation"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Evaluation Program"})}),e.jsx("div",{className:`option py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="TFH"?"border-primary":"border-primary/10"}`,onClick:()=>a("TFH"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"TFH Funded"})}),e.jsx("div",{className:`option py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Billing"?"border-primary":"border-primary/10"}`,onClick:()=>a("Billing"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Order and Billing"})})]})}),e.jsx("div",{className:"right faq-collaps flex flex-col gap-4 relative max-w-[60rem]",children:i[t].map((r,n)=>e.jsx(ue,{heading:r[0],para:r[1]},n+t))})]})]})})})})}const J="/assets/blog-1-0eaa22c3.png";function Ga(){const[t,a]=s.useState(""),[i,r]=s.useState([]),[n,l]=s.useState("John Doe"),[o,p]=s.useState([]),u=V.getAllCountries(),[d,f]=s.useState("personal"),v=n.split(" ").map(g=>g.charAt(0)).join(""),[P,S]=s.useState(0),[m,h]=s.useState(!1),N=s.useRef(null);s.useEffect(()=>{var g;S((g=N==null?void 0:N.current)==null?void 0:g.clientHeight)},[m]),s.useEffect(()=>{r([]),u.forEach(g=>{g.name===t&&r(oe.getStatesOfCountry(g.isoCode))})},[t]);const A="original",F={...Ze,"Europe/Berlin":"Frankfurt"},{options:R,parseTimezone:U}=Qe({labelStyle:A,timezones:F});return e.jsx(e.Fragment,{children:e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash min-h-[100vh] font-Montserrat",children:e.jsx("div",{className:"inner-content px-6",children:e.jsx("div",{className:"dashboard-wrapper",children:e.jsxs("div",{className:"grid gap-4  mb-20",children:[e.jsx("div",{className:"py-8 rounded-xl relative  min-h-full",children:e.jsxs("div",{className:"grid grid-cols-2 sm:flex gap-4 w-full max-w-[40rem]",children:[e.jsx("button",{className:`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${d==="personal"?"border-primary":"border-primary/10"}`,onClick:()=>f("personal"),children:"Personal Information"}),e.jsx("button",{className:`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${d==="account"?"border-primary":"border-primary/10"}`,onClick:()=>f("account"),children:"Account Information"}),e.jsx("button",{className:`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${d==="Security"?"border-primary":"border-primary/10"}`,onClick:()=>f("Security"),children:"Security"})]})}),d==="personal"?e.jsxs("div",{className:"personal grid gap-8",children:[e.jsx("div",{className:"top dash-bar-clr p-6 rounded-3xl",children:e.jsxs("div",{className:"user flex gap-4 items-center max-w-[20rem] mb-6",children:[e.jsxs("div",{className:"img grid gap-2 justify-center items-center relative",children:[e.jsx("img",{className:"h-[6rem] w-[6rem] rounded-full hidden",src:J,alt:"user-img"}),e.jsx("div",{className:"short-name uppercase border bg-blu/20 border-blu h-24 w-24 rounded-full flex justify-center items-center text-2xl",children:v}),e.jsx("div",{className:"edit text-center absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2",children:"Edit"})]}),e.jsxs("div",{className:"info flex flex-col gap-2",children:[e.jsx("div",{className:"name font-medium",children:"John Doe"}),e.jsx("div",{className:"user-name",children:"info@johndoe.com"})]})]})}),e.jsxs("div",{className:"client font-normal",children:[e.jsx("div",{className:"head text-xl font-semibold",children:"Client"}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl pb-8",children:[e.jsxs("div",{className:"first-name grid gap-2",children:[e.jsx("label",{htmlFor:"first-name",className:"font-medium",children:"First Name"}),e.jsx("input",{id:"first-name",name:"first-name",className:"last-name w-full focus:outline-primary/70 bg-dark  backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"John"})]}),e.jsxs("div",{className:"last-name grid gap-2",children:[e.jsx("label",{htmlFor:"last-name",className:"font-medium",children:"Last name"}),e.jsx("input",{id:"last-name",name:"last-name",className:"last-name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Doe"})]}),e.jsxs("div",{className:"selecte-title grid gap-2",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsxs("div",{className:"wrapper relative bg-dark rounded-2xl",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:T,alt:"arrow"}),e.jsxs("select",{id:"title",name:"title",autoFocus:!0,className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent",children:[e.jsx("option",{value:"Mr.",children:"Mr."}),e.jsx("option",{value:"Mr.",children:"Ms."}),e.jsx("option",{value:"Mr.",children:"Mrs."}),e.jsx("option",{value:"Mr.",children:"Mx."})]})]})]})]})]}),e.jsxs("div",{className:"client font-normal",children:[e.jsx("div",{className:"head text-xl font-semibold",children:"Contact Info"}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl pb-8",children:[e.jsxs("div",{className:"phone grid gap-2",children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx("input",{id:"phone",name:"phone",className:"phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"number",placeholder:"1234567890"})]}),e.jsxs("div",{className:"email grid gap-2",children:[e.jsx("label",{htmlFor:"email",children:"E-mail address"}),e.jsx("input",{id:"email",name:"email",className:"phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"email",placeholder:"example@mail.com"})]}),e.jsxs("div",{className:"country grid gap-2",children:[e.jsx("label",{htmlFor:"country",children:"Country"}),e.jsxs("div",{className:"wrapper relative bg-dark rounded-2xl",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:T,alt:"arrow"}),e.jsx("select",{id:"country",name:"country",onChange:g=>a(g.target.value),className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent",children:u.map((g,O)=>e.jsx("option",{value:g.name,children:g.name},O))})]})]}),e.jsxs("div",{className:"City grid gap-2",children:[e.jsx("label",{htmlFor:"city",children:"City"}),e.jsxs("select",{id:"city",name:"city",disabled:!i.length,className:"form-control w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",children:[e.jsx("option",{defaultChecked:!0,children:"City"}),i.map((g,O)=>e.jsx("option",{value:g.name,children:g.name},O))]})]}),e.jsxs("div",{className:"street grid gap-2",children:[e.jsx("label",{htmlFor:"street",children:"Street"}),e.jsx("input",{id:"street",name:"street",className:"name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Vila Safi 13A",required:!0})]}),e.jsxs("div",{className:"zip grid gap-2",children:[e.jsx("label",{htmlFor:"zip",children:"Zip"}),e.jsx("input",{id:"zip",name:"zip",className:"name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"4042",required:!0})]})]})]}),e.jsx("div",{className:"save flex justify-center w-full mt-6",children:e.jsx("button",{className:"capitalize hidden sm:inline-block font-Montserrat text-lg font-bol2 py-3 max-w-[20rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto font-semibold",children:"Save"})})]}):d==="account"?e.jsxs("div",{className:"account font-normal",children:[e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl ",children:[e.jsxs("div",{className:"email-readonly grid gap-2",children:[e.jsx("label",{htmlFor:"email-readonly",children:"Username"}),e.jsx("input",{id:"email-readonly",name:"email-readonly",className:"phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none text-gry",type:"email",readOnly:!0,value:"johndoe@mail.com",placeholder:"johndoe@mail.com"})]}),e.jsxs("div",{className:"time-zone grid gap-2",children:[e.jsx("label",{htmlFor:"time-zone",children:"Time Zone"}),e.jsxs("div",{className:"wrapper relative bg-dark rounded-2xl",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:T,alt:"arrow"}),e.jsx("select",{id:"time-zone",name:"time-zone",onChange:g=>p(g.target.value),className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent",children:R.map(g=>e.jsx("option",{value:g.value,children:g.label},g))})]})]})]}),e.jsx("div",{className:"save flex justify-center w-full mt-10",children:e.jsx("button",{className:"capitalize hidden sm:inline-block font-Montserrat text-lg font-bol2 py-3 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto",children:"Save"})})]}):e.jsx("div",{className:"security",children:e.jsxs("div",{className:"dash-bar-clr rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>h(!m),children:[e.jsx("h3",{className:"text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]",children:"Password Change"}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${m?"rotate-180":""}`,src:T,alt:"arrow"})})]}),e.jsx("article",{className:"",children:e.jsx("div",{style:{maxHeight:m?P+"px":"0"},className:"width-content transition-all duration-300 overflow-hidden ",children:e.jsxs("div",{ref:N,className:"wrapper py-3 px-2 pt-4",children:[e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 pt-4",children:[e.jsx("div",{className:"curr-pass",children:e.jsx("input",{name:"current-pass",className:"curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"password",placeholder:"Current Password*"})}),e.jsx("div",{className:"new-pass",children:e.jsx("input",{name:"new-pass",className:"curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"password",placeholder:"New Password*"})}),e.jsx("div",{className:"confirm-pass sm:col-start-2",children:e.jsx("input",{name:"confirm-pass",className:"curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"password",placeholder:"Confirm Password*"})})]}),e.jsx("div",{className:"save flex justify-center w-full mt-10",children:e.jsx("button",{className:"capitalize hidden sm:inline-block font-Montserrat text-lg font-bold py-2 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto",children:"Save"})})]})})})]})})]})})})})})}function Va(){const{pathname:t}=w();return s.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsx("main",{className:"contact content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsxs("div",{className:"px-6 py-[20px] z-10 relative md:ml-1",children:[e.jsx("div",{className:"breadcrumb-wrap",children:e.jsx("div",{className:"breadcrumb-title",children:"Contact"})}),e.jsx("div",{className:"wrapper flex items-center w-full relative",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 w-full",children:[e.jsxs("div",{className:"left md:col-span-1 break-all ",children:[e.jsx("div",{className:"heading grid gap-2",children:e.jsxs("p",{children:["Questions? Doubts? ",e.jsx("br",{})," Please contact us anytime and our team will take care of you!"]})}),e.jsx("div",{className:"mt-5",children:e.jsx(D,{})})]}),e.jsx("div",{className:"right md:col-span-2 max-w-[50rem] w-full",children:e.jsx(_,{clr:"dash-bar-clr"})})]})})]})})}function _a(){const t=[{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"}];return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsxs("div",{className:"inner-content px-6",children:[e.jsx("div",{className:"breadcrumb-wrap relative z-10",children:e.jsxs("div",{className:"breadcrumb-title md:hidden",children:[e.jsx("svg",{className:"breadcrumb-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"})}),"Billing"]})}),e.jsx("div",{className:"dashboard-wrapper relative",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"content",children:e.jsx("div",{className:"tabs-wrap",children:e.jsx("div",{className:"payment-method h-full text-center ",children:t===""?e.jsx("p",{children:"No history found!"}):e.jsx("div",{className:"billing-data dash-home-bg px-3 py-4 overflow-y-scroll",children:e.jsx("div",{className:"w-full m-auto max-w-[80vw] md:max-w-[70vw] overflow-x-scroll",children:e.jsxs("table",{className:" font-Montserrat  w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("th",{align:"left",children:"Pay"}),e.jsx("th",{align:"left",children:"Funded challenge"}),e.jsx("th",{align:"left",children:"Dates"}),e.jsx("th",{align:"left",children:"Amount"}),e.jsx("th",{align:"left",children:"Account"}),e.jsx("th",{align:"left",children:"status"}),e.jsx("th",{align:"left",children:"Invoice"})]})}),e.jsx("tbody",{children:t.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:" -- "}),e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("div",{className:"nm text-all",children:"Funded challenge"}),e.jsxs("div",{className:"acnt-sizes flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Account size:"}),a.accountSize]}),e.jsxs("div",{className:"perf flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Proforma no.:"}),a.ProformaNo]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dates",children:[e.jsx("div",{className:"date1",children:a.date1}),e.jsx("div",{className:"date2",children:a.date2})]})}),e.jsx("td",{children:e.jsx("div",{className:"amount",children:a.amount})}),e.jsxs("td",{children:[e.jsx("div",{children:"Funded"}),e.jsx("div",{children:"MT5"})]}),e.jsx("td",{children:e.jsx("div",{className:"paid py-2 text-center rounded-xl bg-grn text-white",children:"paid"})}),e.jsx("td",{children:e.jsx("div",{className:"invoice flex justify-center items-center",children:e.jsx(ne,{className:" cursor-pointer"})})})]},a.open+i))})]})})})})})})})})})})})]})})}function Ja(){return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsxs("div",{className:"inner-content px-6",children:[e.jsx("div",{className:"breadcrumb-wrap relative z-10",children:e.jsxs("div",{className:"breadcrumb-title md:hidden",children:[e.jsx("svg",{className:"breadcrumb-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"})}),"Billing"]})}),e.jsx("div",{className:"dashboard-wrapper relative",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"content",children:e.jsx("div",{className:"tabs-wrap",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"tab-content tab-space",children:e.jsx("div",{className:`prices relative  
                            }`,children:e.jsx(pe,{clr:"dash-bar-clr"})})})})})})})})})})})]})})}const Ka="/assets/PHASE1-PASSED-2fea9118.png",Xa="/assets/PHASE2-PASSED-b1c1f431.png",Qa="/assets/FIRST-PAYOUT-a491e124.png",Za="/assets/SECOND-AND-OTHER-PAYOUT-4eb85b75.png",et="/assets/PERSONAL-RECORD-5af8f06e.png",at="/assets/MAX-ALLOCATED-03f68713.png";function tt(){return e.jsx("main",{className:"certificate relative pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsx("div",{className:"content-wrapper relative",children:e.jsx("div",{className:"inner-content px-6 relative",children:e.jsxs("div",{className:"certificates grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fmd:mx-w-[80%] 2xl:fmax-w-[70rem]",children:[e.jsxs("div",{className:"item relative",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:Ka,alt:"certificate"})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(B,{className:"text-[3.2rem]"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:"PHASE 1"})]})]}),e.jsxs("div",{className:"item relative",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:Xa,alt:"certificate"})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(B,{className:"text-[3.2rem]"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:"PHASE 2"})]})]}),e.jsxs("div",{className:"item relative",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:Qa,alt:"certificate"})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(B,{className:"text-[3.2rem]"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:"FIRST PAYOUT"})]})]}),e.jsxs("div",{className:"item relative",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:Za,alt:"certificate"})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(B,{className:"text-[3.5rem] text-center"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:"NEW PAYOUT"})]})]}),e.jsxs("div",{className:"item relative",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:et,alt:"certificate"})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(B,{className:"text-[3.2rem]"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:"YOUR RECORD"})]})]}),e.jsxs("div",{className:"item relative",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:at,alt:"certificate"})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(B,{className:"text-[3.2rem]"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:"MAX ALLOCATED"})]})]})]})})})})}const it="/assets/google-pay-4fe7f01c.png",st="/assets/apple-pay-7f743952.png",rt="/assets/btc-pay-504fa1c1.png";function nt(){const[t,a]=s.useState(!1),[i,r]=s.useState("John"),[n,l]=s.useState("info@mailaddress.com"),[o,p]=s.useState(""),[u,d]=s.useState([]),f=new Date().getFullYear(),v=[f];for(let m=1;m<18;m++)v.push(f+m);const P=V.getAllCountries();s.useEffect(()=>{d([]),P.forEach(m=>{m.name===o&&d(oe.getStatesOfCountry(m.isoCode))})},[o]);const S=m=>{m.preventDefault(),a(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsxs("section",{className:"py-32 lg:py-44 relative purple-shadow",children:[e.jsxs("div",{className:"container z-10 relative",children:[e.jsx("div",{className:"wrapper flex justify-center items-center",children:e.jsx("div",{className:"heading",children:e.jsx("h1",{className:"text-3xl xs:text-[2rem] xs:leading-[0.95] md:text-[2.2rem] font-codePro tracking-tighter",children:"CheckOut"})})}),e.jsxs("div",{className:"checkout-form grid gap-8",children:[e.jsx("div",{className:"top mt-10",children:e.jsxs("div",{className:"head flex flex-col xs:flex-row justify-between items-center gap-5 bg-main-bg/50 py-4 px-6 rounded-xl",children:[e.jsx("div",{className:"left",children:e.jsxs("span",{className:"text-[0.9rem] xs:text-base font-codePro",children:["1 X Challenge $100,000 ",e.jsx("br",{})," Evaluation Program"]})}),e.jsx("div",{className:"right",children:e.jsx("span",{className:"price sm:text-xl text-[0.9rem] xs:text-base  font-codePro",children:"$ 527,00"})})]})}),e.jsxs("form",{onSubmit:m=>S(m),className:"forms grid gap-10 md:gap-0 md:grid-cols-12 bg-main-bg/50 p-6 md:p-8 lg:p-10  rounded-2xl",children:[e.jsxs("div",{className:"md:col-span-6 grid  gap-8 justify-start items-center",children:[e.jsxs("div",{className:"payment grid justify-center gap-2 w-full",children:[e.jsx("div",{className:"head flex justify-center",children:e.jsx("h4",{children:"Express Payment"})}),e.jsxs("div",{className:"methonds flex justify-center items-center gap-2",children:[e.jsx("div",{className:"method",children:e.jsx("img",{className:"max-w-[6rem] w-full cursor-pointer",src:st,alt:"pay-with-apple"})}),e.jsx("div",{className:"method",children:e.jsx("img",{className:"max-w-[6rem] w-full cursor-pointer",src:it,alt:"pay-with-google"})}),e.jsx("div",{className:"method",children:e.jsx("img",{className:"max-w-[6rem] w-full cursor-pointer",src:rt,alt:"pay-with-btc"})})]})]}),e.jsx("div",{className:"billings mt-3",children:e.jsxs("div",{className:"head",children:[e.jsx("h2",{className:"text-lg xs:text-[1.2rem] xs:leading-[0.95] md:text-[1.35rem] font-codePro tracking-tighter",children:"Billing Details"}),e.jsxs("div",{className:"inputs grid gap-6 mt-4 sm:mt-8",children:[e.jsxs("div",{className:"name grid xs:grid-cols-2 gap-4",children:[e.jsx("div",{className:"fname",children:e.jsx("input",{name:"fname",className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"Name",required:!0})}),e.jsx("div",{className:"surname",children:e.jsx("input",{name:"surname",onChange:m=>r(m.target.value),className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"Surname",required:!0})})]}),e.jsx("div",{className:"email",children:e.jsx("input",{name:"email",onChange:m=>l(m.target.value),className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"email",placeholder:"Email",required:!0})}),e.jsx("div",{className:"address",children:e.jsx("input",{name:"address",className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"Address",required:!0})}),e.jsx("div",{className:"city",children:e.jsx("input",{name:"city",className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"City",required:!0})}),e.jsxs("div",{className:"country-info flex flex-col sm:flex-row gap-4",children:[e.jsxs("select",{id:"country",name:"country",onChange:m=>p(m.target.value),className:"form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 px-4 transition-all duration-200 bg-light/20 rounded-xl",children:[e.jsx("option",{defaultChecked:!0,children:"Country"}),P.map((m,h)=>e.jsx("option",{value:m.name,children:m.name},h))]}),e.jsxs("select",{id:"state",name:"state",disabled:!u.length,className:"form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 px-4 transition-all duration-200 bg-main-bg/20 rounded-xl",children:[e.jsx("option",{defaultChecked:!0,children:"State"}),u.map((m,h)=>e.jsx("option",{value:m.name,children:m.name},h))]}),e.jsx("input",{name:"zip",className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"number",placeholder:"ZIP",required:!0})]})]})]})})]}),e.jsx("div",{className:"wrapper col-span-1 flex justify-center",children:e.jsx("div",{className:"line h-[3px] md:h-full bg-primary/10 w-full md:w-[0.1rem] rounded-full"})}),e.jsxs("div",{className:"md:col-span-5",children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"text-xl",children:"Card Details"})}),e.jsxs("div",{className:"inputs grid gap-6 mt-8",children:[e.jsx("div",{className:"name-holder",children:e.jsx("input",{name:"Cardholder",className:"Cardholder w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"Cardholder Name",required:!0})}),e.jsx("div",{className:"card-number",children:e.jsx("input",{name:"card-number",className:"name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"8593 - 8292 - 0493 - 9483",required:!0})}),e.jsxs("div",{className:"date-code grid grid-cols-3 sm:grid-cols-4 gap-4 mt-2",children:[e.jsxs("select",{id:"month",name:"month",className:"month w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",required:!0,children:[e.jsx("option",{defaultValue:"month",children:"Month"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"4",children:"4"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"6",children:"6"}),e.jsx("option",{value:"7",children:"7"}),e.jsx("option",{value:"8",children:"8"}),e.jsx("option",{value:"9",children:"9"}),e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"11",children:"11"}),e.jsx("option",{value:"12",children:"12"})]}),e.jsxs("select",{id:"year",name:"year",className:"month w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",required:!0,children:[e.jsx("option",{defaultValue:"Year",children:"Year"}),v.map(m=>e.jsx("option",{value:m,children:m},m))]}),e.jsx("div",{className:"hidden sm:inline-block"}),e.jsx("div",{className:"code",children:e.jsx("input",{name:"month",className:"month w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200 placeholder:text-center ",type:"text",placeholder:"CVC",required:!0})})]}),e.jsxs("div",{className:"coupon-code mt-10 relative",children:[e.jsx("input",{name:"coupon",className:"coupon w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200",type:"text",placeholder:"Coupon Code",required:!0}),e.jsx("div",{className:"arrow",children:e.jsx(Oe,{className:"text-primary/50 text-[1.6rem] absolute top-1/2 transform -translate-y-1/2 right-4"})})]}),e.jsxs("div",{className:"fees flex gap-3 text-base sm:text-[1.2rem] md:text-[1.3rem]",children:[e.jsx("h4",{className:"title",children:"Refundable Fee:"}),e.jsx("h4",{className:"price",children:" $ 527,00"})]}),e.jsx("div",{className:"btn flex",children:e.jsx("div",{className:"wrap grd-btn-wht rounded-3xl",children:e.jsx("button",{type:"submit",className:" flex px-6 py-2 rounded-3xl",children:"Confirm and Proceed"})})})]})]})]})]})]}),e.jsxs("div",{className:`modal fixed inset-0 z-[99] flex justify-center items-center overflow-hidden ${t?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:`bg absolute inset-0 w-full h-full ${t?"opacity-100 backdrop-blur-xl ":"opacity-0 backdrop-blur-none"}`,onClick:()=>a(!1)}),e.jsxs("div",{className:`box relative m-6 min-h-[300px] max-w-[600px] w-full text-main dark:text-white bg-light-gray dark:bg-main-bg transition-all duration-300 rounded-3xl z-[999] px-6 ${t?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:"tick pt-5 sm:pt-8 pb-5 sm:pb-8 md:pb-12 flex justify-center items-center",children:e.jsx("img",{className:`max-w-[3.5rem] exs:max-w-[4rem] sm:max-w-[5rem] md:max-w-[5.5rem] transition-all duration-500 opacity-50 ${t?"scale-100":"scale-0"}`,src:ra,alt:"tick"})}),e.jsxs("div",{className:"content grid justify-center items-center text-center gap-4 sm:gap-6 md:gap-8",children:[e.jsxs("h2",{className:"name text-xl exs:text-2xl sm:text-3xl md:text-4xl",children:["Welcome to the Hub, ",i,"!"]}),e.jsx("em",{className:"text-base font-Montserrat",children:"You are in our Hub and you'll receive soon your Metatrader 5 Credentials via Email"}),e.jsxs("div",{className:"registerd rounded-xl mb-6  py-2 px-5 w-full max-w-[30rem] m-auto",children:[e.jsxs("div",{className:"usermail text-white rounded-lg border-2 border-primary/40 px-4 py-3 flex justify-center items-center gap-4",children:[e.jsx(ze,{className:"h-6 w-6"}),e.jsx("div",{className:"mail",children:e.jsx("em",{className:"font-Montserrat break-all text-[0.9rem] xs:text-base",children:n})})]}),e.jsx("div",{className:"mt-6 grid gap-0 text-main dark:text-white",children:e.jsx(c,{to:"/",className:"underline font-Montserrat",children:"Back to HomePage"})})]})]}),e.jsx("div",{className:"cross",onClick:()=>a(!1),children:e.jsx(G,{className:"absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8"})})]})]})]}),e.jsx(I,{})]})}function ot(t,a){const[i,r]=s.useState(1),n=Math.ceil(t.length/a);function l(){const d=(i-1)*a,f=d+a;return t.slice(d,f)}function o(){r(d=>Math.min(d+1,n))}function p(){r(d=>Math.max(d-1,1))}function u(d){const f=Math.max(1,d);r(v=>Math.min(f,n))}return{next:o,prev:p,jump:u,currentData:l,currentPage:i,maxPage:n}}const se=[{link:"blog-1",title:"Leveraging Leverage: A Guide for Forex Traders",date:"26 August 2023",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,data:`<div className="des">
                  <span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.
                </div>

                <div className="txt">
                  <h4>Understanding Leverage in Forex Trading</h4>
                  <p>
                    Leverage enables traders to control a larger position size
                    with a smaller amount of capital. For instance, with a
                    leverage of 1:100, you can control a $10,000 position with
                    just $100 of your own capital. This amplifies both potential
                    profits and potential losses.
                  </p>
                </div>

                <div className="para">
                  <h4>Advantages of Leverage</h4>
                  <ul>
                    <li>
                      <span>Maximized Exposure:</span> Leverage allows traders
                      to access larger positions than their initial investment,
                      potentially leading to higher returns when correctly used.
                    </li>
                    <li>
                      <span>Lower Capital Requirement: </span>
                      Leverage makes forex trading accessible to traders with
                      limited capital, enabling them to participate in the
                      market.
                    </li>
                    <li>
                      <span>Diversification: </span>
                      With leverage, you can diversify your trading portfolio
                      and explore different currency pairs without needing
                      significant capital.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Risks of Leverage</h4>

                  <ul>
                    <li>
                      <span> Amplified Losses: </span>While leverage enhances
                      potential profits, it equally amplifies potential losses.
                      Unwise use of leverage can quickly deplete your trading
                      account.
                    </li>
                    <li>
                      <span>Margin Calls:</span> If your losses exceed the
                      margin requirements, you may receive a margin call,
                      requiring you to deposit additional funds to cover the
                      losses.
                    </li>
                    <li>
                      <span>Emotional Impact: </span>High leverage can induce
                      emotional trading, leading to impulsive decisions and poor
                      risk management.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Using Leverage Wisely</h4>

                  <ul>
                    <li>
                      <span>Risk Management:</span> Always use proper risk
                      management techniques to protect your capital. Determine
                      your stop-loss and take-profit levels before entering a
                      trade.
                    </li>
                    <li>
                      <span> Leverage Levels: </span>Consider starting with
                      lower leverage levels until you gain experience and
                      confidence in your trading strategy.
                    </li>
                    <li>
                      <span> Education: </span> Invest time in educating
                      yourself about leverage, risk, and how to implement
                      effective risk management strategies.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>The Funded Hub: A Partner in Your Trading Journey</h4>
                  <p>
                    Navigating leverage requires not only knowledge but also
                    practical experience. The Funded Hub, a leading prop trading
                    firm, provides traders with the opportunity to showcase
                    their skills while minimizing personal financial risk.
                    Here&apos;s how The Funded Hub can support you:
                  </p>
                  <ul>
                    <li>
                      <span>Challenge Evaluation: </span>Prove your trading
                      abilities by passing our evaluation challenge.
                    </li>
                    <li>
                      <span>Trading Capital: </span>Gain access to our trading
                      capital and keep a substantial portion of the profits you
                      generate.
                    </li>
                    <li>
                      <span>Risk Management: </span>Benefit from risk management
                      guidelines, ongoing support, and a community of traders
                      dedicated to success.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Leverage can be a powerful tool in the hands of skilled
                    traders, offering the potential for significant gains.
                    However, it&apos;s essential to approach leverage with
                    caution, prioritizing risk management and ongoing education.
                    The Funded Hub is here to provide you with the resources and
                    support you need to leverage your trading potential and
                    succeed in the dynamic world of forex trading. Elevate your
                    trading journey with the wisdom of leverage and the backing
                    of The Funded Hub.
                  </p>
              </div>`},{link:"blog-2",title:`Exploring the World of Forex Market Hours: A Guide to
                  Optimizing Your Trading Strategy`,para:`<span>Meta Description: </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.`,date:"23 August 2023",data:`<div className="des">
                  <span>Meta Description: </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.
                  <br />
                  <p>
                    Forex trading is a 24-hour endeavor that spans the globe,
                    offering traders around-the-clock opportunities to
                    capitalize on price movements. Understanding the different
                    trading sessions and their characteristics is vital for
                    crafting a winning trading strategy. In this guide,
                    we&apos;ll delve into the intricacies of forex market hours
                    and showcase how The Funded Hub can provide trading capital
                    to qualified traders for optimal trading success.
                  </p>
                </div>

                <div className="para">
                  <h4>Navigating Forex Market Hours</h4>
                  <p>
                    The forex market is divided into distinct trading sessions,
                    each characterized by unique market dynamics:
                  </p>
                  <ul>
                    <li>
                      <span>Sydney Session: </span>
                      Kicking off the trading week, the Sydney session sets the
                      tone with relatively lower volatility and liquidity.
                    </li>
                    <li>
                      <span>Tokyo Session: </span>The Tokyo session witnesses
                      increased activity as it overlaps with the Sydney and
                      London sessions, offering potential trading opportunities.
                    </li>
                    <li>
                      <span>London Session: </span>The London session is
                      renowned for its high volatility and liquidity, with
                      significant price movements in major currency pairs.
                    </li>
                    <li>
                      <span>New York Session: </span>The New York session adds
                      to the excitement, especially when it overlaps with the
                      London session. This period often experiences strong
                      volatility.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Tailoring Your Trading Strategy</h4>
                  <p>
                    Adapting your trading strategy to different market hours can
                    be the key to success:
                  </p>
                  <ul>
                    <li>
                      <span>Session Overlaps: </span>During overlapping
                      sessions, such as the London-New York overlap, market
                      volatility and liquidity tend to spike. These periods
                      present prime opportunities for active traders.
                    </li>
                    <li>
                      <span>Economic Events:</span> Stay informed about major
                      economic news releases, which frequently occur during the
                      London and New York sessions. Adjust your strategy based
                      on the anticipated impact of these releases.
                    </li>
                    <li>
                      <span>Time Zone Advantage: </span>If your time zone
                      doesn&apos;t align with your preferred trading session,
                      consider adjusting your schedule to participate during
                      peak activity times.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>The Funded Hub: Your Path to Success</h4>
                  <p>
                    The Funded Hub stands out as a prop trading firm dedicated
                    to empowering traders with trading capital and
                    opportunities. Our unique approach involves providing
                    talented traders with the capital they need to trade
                    profitably in the forex market. Here&apos;s how it works:
                  </p>
                  <ul>
                    <li>
                      <span>Challenge Evaluation:</span> Pass our trading
                      challenge by showcasing your trading skills and risk
                      management abilities.
                    </li>
                    <li>
                      <span>Trading Capital: </span>Upon successful completion
                      of the challenge, gain access to our trading capital and
                      keep a substantial share of the profits you generate.
                    </li>
                    <li>
                      <span>Ongoing Support: </span>Benefit from ongoing
                      support, risk management guidelines, and a community of
                      fellow traders, all aimed at helping you succeed.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Empower Your Trading Journey with The Funded Hub</h5>
                  <p>
                    The Funded Hub offers traders the chance to trade with
                    significant capital without the burden of personal financial
                    risk. We understand that success in the forex market
                    requires more than just theoretical knowledge; it demands
                    practical experience and the ability to navigate real market
                    conditions. That&apos;s why we provide aspiring traders with
                    the resources they need to thrive in this challenging yet
                    rewarding arena.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Mastering forex market hours and aligning your strategy with
                    different trading sessions can significantly enhance your
                    trading results. The Funded Hub takes your trading journey a
                    step further by offering the capital you need to succeed.
                    Join us today, prove your skills, and embark on a journey of
                    trading excellence with The Funded Hub by your side.
                  </p>
                </div>
`},{link:"blog-3",title:"Understanding Major, Minor, and Exotic Currency Pairs in Forex Trading",para:`<span>Meta Description:</span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.`,date:"19 August 2023",data:`<div className="des">
                  <span>Meta Description:</span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.
                  <br />
                  <p>
                    In the vast realm of forex trading, understanding the
                    various types of currency pairs is crucial to navigating the
                    markets effectively. Currency pairs are the backbone of
                    forex trading, allowing traders to speculate on the exchange
                    rate between two different currencies. These pairs are
                    categorized into three main groups: major, minor, and exotic
                    currency pairs.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Major Currency Pairs: The Cornerstone of Forex Trading
                  </h5>
                  <p>
                    Major currency pairs consist of the most traded currencies
                    globally and are paired with the US dollar (USD). They
                    include EUR/USD, GBP/USD, USD/JPY, USD/CHF, and USD/CAD.
                    These pairs offer high liquidity, tighter spreads, and are
                    known for their lower volatility compared to other pairs.
                    Traders are often drawn to major pairs due to their
                    stability and the availability of extensive market analysis
                    resources.
                  </p>
                </div>

                <div className="des">
                  <h5>Minor Currency Pairs: Broadening Your Options</h5>
                  <p>
                    Minor currency pairs, also known as cross currency pairs,
                    exclude the US dollar. They involve other major currencies
                    such as EUR, GBP, JPY, and AUD. Examples of minor pairs are
                    EUR/GBP, GBP/JPY, and AUD/JPY. Trading minors can provide
                    diversification in your trading portfolio and offer unique
                    trading opportunities. While they may exhibit slightly wider
                    spreads and lower liquidity, skilled traders can capitalize
                    on their price movements and trends.
                  </p>
                </div>

                <div className="des">
                  <h5>Exotic Currency Pairs: Unveiling Unique Opportunities</h5>
                  <p>
                    Exotic currency pairs involve one major currency and one
                    currency from a developing or emerging economy. Examples
                    include USD/SGD, EUR/TRY, and GBP/MXN. Exotic pairs offer
                    higher spreads and increased volatility, making them
                    appealing to traders seeking potentially larger profits.
                    However, due to their lower liquidity and increased risk,
                    they require a deep understanding of the economic and
                    geopolitical factors affecting the involved countries.
                  </p>
                </div>

                <div className="des">
                  <h5>Navigating the Market with Precision</h5>
                  <p>
                    To effectively trade these currency pairs, it&apos;s
                    essential to understand their characteristics and monitor
                    the factors that influence their movements. Market trends,
                    economic indicators, geopolitical events, and interest rate
                    differentials all play a role in determining currency pair
                    fluctuations. As you explore the forex market, remember that
                    each currency pair has its unique dynamics and risk factors.
                    Engaging in thorough research and analysis is key to making
                    informed trading decisions. And that&apos;s where
                    experienced firms like The Funded Hub come into play.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Elevate Your Forex Trading Experience with The Funded Hub
                  </h5>
                  <p>
                    The Funded Hub offers aspiring traders the opportunity to
                    trade with proprietary capital, advanced trading platforms,
                    and expert support. Our platform empowers you to access
                    major, minor, and exotic currency pairs while managing risk
                    effectively. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub provides a supportive
                    environment to enhance your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>In Conclusion</h5>
                  <p>
                    Understanding major, minor, and exotic currency pairs is a
                    fundamental step in becoming a successful forex trader. Each
                    pair comes with its own set of characteristics, offering
                    various trading opportunities and challenges. The Funded Hub
                    is your partner in exploring these pairs and harnessing
                    their potential for profitable trading. Begin your forex
                    journey today with The Funded Hub and unlock the world of
                    currency trading possibilities.
                  </p>
                </div>`},{link:"blog-4",title:"How Does Forex Trading Work? A Comprehensive Guide",para:`<span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!`,date:"18 August 2023",data:`<div className="des">
                  <span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!
                </div>

                <div className="des">
                  <h5>Introduction</h5>
                  <p>
                    If you&apos;ve ever wondered how the world of forex trading
                    operates, you&apos;re in the right place. Forex trading,
                    also known as foreign exchange trading, is a dynamic and
                    exciting financial market that allows individuals and
                    institutions to trade currencies and potentially profit from
                    the fluctuations in exchange rates. In this guide, brought
                    to you by The Funded Hub, we&apos;ll take you through the
                    basics of how forex trading works, the key players involved,
                    and how you can get started on your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>Understanding Forex Trading</h5>
                  <p>
                    Forex trading involves the exchange of one currency for
                    another at an agreed-upon price. The aim is to buy a
                    currency at a lower price and sell it at a higher price,
                    thus generating a profit. Unlike traditional stock markets,
                    the forex market operates 24 hours a day, five days a week,
                    due to its global nature and the involvement of major
                    financial centers around the world.
                  </p>
                </div>

                
                <div className="para">
                  <h4>Key Players in the Forex Market</h4>
                  <ul>
                    <li>
                      <span>Banks and Financial Institutions: </span>
                      Major banks and financial institutions participate in
                      forex trading to facilitate international trade, manage
                      foreign exchange reserves, and speculate on currency
                      movements.
                    </li>
                    <li>
                      <span>Central Banks: </span>Central banks play a
                      significant role by implementing monetary policies that
                      impact their country&apos;s currency. Interest rate
                      decisions and interventions are examples of tools they use
                      to influence exchange rates.
                    </li>
                    <li>
                      <span>Corporations: </span>Multinational corporations
                      engage in forex trading to manage currency risk associated
                      with their international operations and trade.
                    </li>
                    <li>
                      <span>Retail Traders: </span>Individual traders, like you,
                      participate in the forex market through online platforms
                      provided by brokers. These traders aim to profit from
                      price movements by speculating on currency pairs.
                    </li>
                    <li>
                      <span>Brokers and Proprietary Firms: </span>Forex brokers,
                      such as The Funded Hub, provide traders with access to the
                      market by offering trading platforms, market analysis, and
                      leverage. Proprietary firms like ours allocate trading
                      capital to traders, enabling them to trade with our
                      resources and share profits.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>How Forex Trading Works</h4>

                  <ul>
                    <li>
                      <span>Currency Pairs: </span>In forex trading, currencies
                      are quoted in pairs, such as EUR/USD, GBP/JPY, and
                      USD/JPY. The first currency in the pair is the base
                      currency, while the second is the quote currency. The
                      exchange rate indicates how much of the quote currency is
                      needed to purchase one unit of the base currency.
                    </li>
                    <li>
                      <span>Bid and Ask Price: </span>The bid price is the price
                      at which you can sell the base currency, and the ask price
                      is the price at which you can buy the base currency. The
                      difference between the bid and ask price is known as the
                      spread.
                    </li>
                    <li>
                      <span>Going Long and Going Short: </span>Going long means
                      buying the base currency and selling the quote currency in
                      anticipation of the base currency&apos;s value increasing.
                      Going short involves selling the base currency and buying
                      the quote currency, expecting the base currency&apos;s
                      value to decrease.
                    </li>
                    <li>
                      <span>Leverage: </span>Leverage allows traders to control
                      a larger position with a smaller amount of capital. While
                      it amplifies potential profits, it also increases the risk
                      of losses. The Funded Hub offers competitive leverage
                      options to suit different trading styles.
                    </li>
                    <li>
                      <span>Pips and Lots: </span>A pip is the smallest price
                      movement in a currency pair. Lot sizes determine the
                      volume of a trade. Standard lots are typically 100,000
                      units of the base currency, while mini and micro lots
                      offer smaller trading sizes.
                    </li>
                  </ul>
                </div>

                
                <div className="para">
                  <h4>Getting Started with The Funded Hub</h4>
                  <p>
                    At The Funded Hub, we&apos;re dedicated to empowering
                    traders of all experience levels to succeed in the forex
                    market. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <span>Capital Allocation: </span>Trade with our
                      proprietary capital and share profits based on
                      performance.
                    </li>
                    <li>
                      <span>Advanced Trading Platforms: </span>Access
                      user-friendly and powerful trading platforms to execute
                      your trades.
                    </li>
                    <li>
                      <span>Educational Resources: </span>Benefit from training,
                      webinars, and market analysis to enhance your trading
                      skills.
                    </li>
                    <li>
                      <span>Risk Management: </span>Our risk management
                      guidelines help you navigate the market responsibly.
                    </li>
                    <li>
                      <span>Professional Support: </span>Count on our
                      experienced team for guidance and support throughout your
                      trading journey.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Forex trading offers immense potential for individuals to
                    participate in a global market and capitalize on currency
                    fluctuations. Understanding the basics, key players, and
                    trading mechanics is essential for success. The Funded Hub
                    provides a unique opportunity to trade with a prop
                    firm&apos;s resources, giving you the edge you need to excel
                    in the forex world. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub is here to support your
                    forex trading aspirations. Join us today and embark on an
                    exciting journey towards financial success in the dynamic
                    world of forex trading.
                  </p>
                </div>
`},{link:"blog-5",title:"Introduction to Forex Trading with The Funded Hub: A Beginner&apos;s Guide",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"12 August 2023",data:`<div className="des">
                  <span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!
                </div>

                <div className="des">
                  <h5>Introduction</h5>
                  <p>
                    If you&apos;ve ever wondered how the world of forex trading
                    operates, you&apos;re in the right place. Forex trading,
                    also known as foreign exchange trading, is a dynamic and
                    exciting financial market that allows individuals and
                    institutions to trade currencies and potentially profit from
                    the fluctuations in exchange rates. In this guide, brought
                    to you by The Funded Hub, we&apos;ll take you through the
                    basics of how forex trading works, the key players involved,
                    and how you can get started on your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>Understanding Forex Trading</h5>
                  <p>
                    Forex trading involves the exchange of one currency for
                    another at an agreed-upon price. The aim is to buy a
                    currency at a lower price and sell it at a higher price,
                    thus generating a profit. Unlike traditional stock markets,
                    the forex market operates 24 hours a day, five days a week,
                    due to its global nature and the involvement of major
                    financial centers around the world.
                  </p>
                </div>

                <div className="para">
                  <h4>Key Players in the Forex Market</h4>

                  <ul>
                    <li>
                      <span>Banks and Financial Institutions: </span>Major banks
                      and financial institutions participate in forex trading to
                      facilitate international trade, manage foreign exchange
                      reserves, and speculate on currency movements.
                    </li>
                    <li>
                      <span>Central Banks: </span>Central banks play a
                      significant role by implementing monetary policies that
                      impact their country&apos;s currency. Interest rate
                      decisions and interventions are examples of tools they use
                      to influence exchange rates.
                    </li>
                    <li>
                      <span>Corporations: </span>Multinational corporations
                      engage in forex trading to manage currency risk associated
                      with their international operations and trade.
                    </li>
                    <li>
                      <span>Retail Traders: </span>Individual traders, like you,
                      participate in the forex market through online platforms
                      provided by brokers. These traders aim to profit from
                      price movements by speculating on currency pairs.
                    </li>
                    <li>
                      <span>Brokers and Proprietary Firms: </span>Forex brokers,
                      such as The Funded Hub, provide traders with access to the
                      market by offering trading platforms, market analysis, and
                      leverage. Proprietary firms like ours allocate trading
                      capital to traders, enabling them to trade with our
                      resources and share profits.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>How Forex Trading Works</h4>
                  <p></p>
                  <ul>
                    <li>
                      <span>Currency Pairs: </span>In forex trading, currencies
                      are quoted in pairs, such as EUR/USD, GBP/JPY, and
                      USD/JPY. The first currency in the pair is the base
                      currency, while the second is the quote currency. The
                      exchange rate indicates how much of the quote currency is
                      needed to purchase one unit of the base currency.
                    </li>
                    <li>
                      <span>Bid and Ask Price: </span>The bid price is the price
                      at which you can sell the base currency, and the ask price
                      is the price at which you can buy the base currency. The
                      difference between the bid and ask price is known as the
                      spread.
                    </li>
                    <li>
                      <span>Going Long and Going Short: </span>Going long means
                      buying the base currency and selling the quote currency in
                      anticipation of the base currency&apos;s value increasing.
                      Going short involves selling the base currency and buying
                      the quote currency, expecting the base currency&apos;s
                      value to decrease.
                    </li>
                    <li>
                      <span>Leverage: </span>Leverage allows traders to control
                      a larger position with a smaller amount of capital. While
                      it amplifies potential profits, it also increases the risk
                      of losses. The Funded Hub offers competitive leverage
                      options to suit different trading styles.
                    </li>
                    <li>
                      <span>Pips and Lots: </span>A pip is the smallest price
                      movement in a currency pair. Lot sizes determine the
                      volume of a trade. Standard lots are typically 100,000
                      units of the base currency, while mini and micro lots
                      offer smaller trading sizes.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Getting Started with The Funded Hub</h4>
                  <p>
                    At The Funded Hub, we&apos;re dedicated to empowering
                    traders of all experience levels to succeed in the forex
                    market. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <span>Capital Allocation: </span>Trade with our
                      proprietary capital and share profits based on
                      performance.
                    </li>
                    <li>
                      <span>Advanced Trading Platforms: </span>Access
                      user-friendly and powerful trading platforms to execute
                      your trades.
                    </li>
                    <li>
                      <span>Educational Resources: </span>Benefit from training,
                      webinars, and market analysis to enhance your trading
                      skills.
                    </li>
                    <li>
                      <span>Risk Management: </span>Our risk management
                      guidelines help you navigate the market responsibly.
                    </li>
                    <li>
                      <span>Professional Support: </span>Count on our
                      experienced team for guidance and support throughout your
                      trading journey.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Forex trading offers immense potential for individuals to
                    participate in a global market and capitalize on currency
                    fluctuations. Understanding the basics, key players, and
                    trading mechanics is essential for success. The Funded Hub
                    provides a unique opportunity to trade with a prop
                    firm&apos;s resources, giving you the edge you need to excel
                    in the forex world. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub is here to support your
                    forex trading aspirations. Join us today and embark on an
                    exciting journey towards financial success in the dynamic
                    world of forex trading.
                  </p>
                </div>`},{link:"blog-6",title:"The Role of Central Banks in Forex Markets",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"9 August 2023",data:`<p>
                    Central banks play a pivotal role in the complex world of
                    forex markets, exerting significant influence on global
                    economies and currency values. Understanding the functions
                    and strategies of central banks is crucial for forex traders
                    seeking to navigate this dynamic landscape. In this article,
                    we delve into the key role central banks play in shaping the
                    forex markets and explore their impact on traders and
                    investors.
                  </p>

                <div className="des">
                  <h5>Introduction: Central Banks and Forex Markets</h5>
                  <p>
                    Central banks are the primary authorities responsible for
                    overseeing monetary policy within their respective
                    countries. Their decisions and actions can have far-reaching
                    consequences for economies and, consequently, the forex
                    markets. The strategies employed by central banks, such as
                    interest rate adjustments and currency interventions, are
                    designed to achieve various objectives, including price
                    stability, economic growth, and balance of trade.
                  </p>
                </div>

                <div className="des">
                  <h5>Interest Rates and Their Impact</h5>
                  <p>
                    One of the most potent tools in a central bank's arsenal is
                    its ability to set and adjust interest rates. By raising or
                    lowering interest rates, central banks can influence
                    borrowing costs, consumer spending, and investment levels.
                    Changes in interest rates can cause significant shifts in
                    currency values, as higher interest rates tend to attract
                    foreign capital seeking better returns.
                  </p>
                  <br />

                  <p>
                    For instance, if a central bank decides to increase interest
                    rates, the country's currency might strengthen as investors
                    are drawn by the higher yield. This can lead to increased
                    demand for the currency, driving its value higher in the
                    forex markets. On the other hand, a central bank's decision
                    to lower interest rates can have the opposite effect,
                    weakening the currency's value.
                  </p>
                </div>

                <div className="para">
                  <h4>Conclusion: Navigating the Central Bank Landscape</h4>
                  <p>
                    The actions and decisions of central banks have a profound
                    impact on forex markets, shaping trends and influencing
                    trading strategies. Forex traders need to stay informed
                    about central bank policies, economic data releases, and
                    market sentiment to make well-informed decisions.
                  </p>
                  <br />
                  <p>
                    As central banks continuously adapt their strategies to
                    economic conditions, forex traders must be prepared to
                    adjust their trading strategies accordingly. By
                    understanding the role of central banks and their influence
                    on currency values, traders can better navigate the
                    ever-evolving forex markets and seize opportunities for
                    profitable trades.
                  </p>

                  <br />
                  <b>
                    Disclaimer: This article is for informational purposes only
                    and does not constitute financial advice. Trading in forex
                    markets involves risks and should be undertaken with proper
                    understanding and risk management.
                  </b>

                  <br />
                  <br />
                  <p>
                    Stay informed about central bank actions and economic trends
                    to navigate the forex markets effectively. Learn more at The
                    Funded Hub
                  </p>
            </div>`},{link:"blog-7",title:"Economic Indicators and Their Impact on Forex",para:`Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.`,date:"5 August 2023",data:`
              <div className="data">
                  <p>
                    Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.
                  </p>

                <div className="des">
                  <h5>Introduction: Economic Indicators and Forex Markets</h5>
                  <p>
                    Economic indicators are statistical data points that provide
                    information about various economic factors, such as
                    employment levels, inflation rates, and consumer spending.
                    These indicators offer a snapshot of an economy&apos;s
                    performance and can offer clues about its future direction.
                    For forex traders, economic indicators serve as crucial
                    pieces of information that help assess the health of
                    economies and predict potential market movements.
                  </p>
                </div>

                <div className="des">
                  <h5>Unemployment Rate and Nonfarm Payrolls</h5>
                  <p>
                    The unemployment rate is a key economic indicator that
                    measures the percentage of the workforce that is unemployed
                    and actively seeking employment. A rising unemployment rate
                    can indicate economic weakness, while a declining rate
                    suggests economic growth. Forex traders closely monitor this
                    indicator as it can influence currency values.
                  </p>
                  <br />
                  <p>
                    Additionally, the nonfarm payrolls report provides insights
                    into job creation in the non-agricultural sector. Strong
                    nonfarm payroll numbers often correlate with a robust
                    economy and may lead to currency appreciation. Conversely,
                    weak nonfarm payroll figures could lead to currency
                    depreciation.
                  </p>
                </div>

                <div className="des">
                  <h5>Consumer Price Index (CPI) and Inflation</h5>
                  <p>
                    The Consumer Price Index (CPI) measures changes in the
                    average prices paid by consumers for goods and services.
                    Inflation, which is the rate at which prices rise, can have
                    a significant impact on an economy and its currency. Central
                    banks often use CPI data to determine whether to adjust
                    interest rates.
                  </p>
                  <br />
                  <p>
                    High inflation can erode purchasing power and decrease
                    currency values. Conversely, low inflation may lead to
                    currency appreciation. Forex traders pay close attention to
                    CPI releases to gauge potential shifts in currency values
                    based on inflation trends.
                  </p>
                </div>

                <div className="des">
                  <h5>Gross Domestic Product (GDP)</h5>
                  <p>
                    Gross Domestic Product (GDP) is a comprehensive measure of
                    economic activity within a country. It represents the total
                    value of all goods and services produced in a specific
                    period. Strong GDP growth can lead to currency appreciation,
                    while weak GDP growth may lead to currency depreciation.
                  </p>
                  <br />
                  <p>
                    Forex traders analyze GDP reports to assess the overall
                    health and direction of an economy. Countries with strong
                    GDP growth are often considered more attractive for
                    investment, potentially leading to increased demand for
                    their currency.
                  </p>
                </div>

                <div className="des">
                  <h5>Trade Balance and Current Account</h5>
                  <p>
                    The trade balance measures the difference between a
                    country&apos;s exports and imports. A positive trade balance
                    (surplus) indicates that a country is exporting more than it
                    is importing, which can lead to currency appreciation.
                    Conversely, a negative trade balance (deficit) may lead to
                    currency depreciation.
                  </p>
                  <br />
                  <p>
                    The current account, which includes trade balance as well as
                    other financial transactions, also influences currency
                    values. A strong current account can attract foreign
                    investment and potentially lead to currency appreciation.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Economic Indicators for Forex Success
                  </h5>

                  <p>
                    Economic indicators provide forex traders with valuable
                    insights into economic trends and potential market
                    movements. By staying informed about key economic releases,
                    traders can make informed decisions and better predict
                    potential shifts in currency values.
                  </p>
                  <br />
                  <p>
                    It&apos;s important for forex traders to have a solid
                    understanding of the impact of economic indicators on the
                    forex markets. By analyzing data releases and considering
                    their potential effects, traders can develop effective
                    trading strategies and seize opportunities for profitable
                    trades.
                  </p>
                </div>

                <b>
                  Disclaimer: This article is for informational purposes only
                  and does not constitute financial advice. Trading in forex
                  markets involves risks and should be undertaken with proper
                  understanding and risk management.
                </b>
           
                <p>
                  Stay ahead in the forex markets by mastering economic
                  indicators and their impact. Learn more at The Funded Hub.
                </p>
            </div>`},{link:"blog-8",title:"The Art of Technical Analysis in Forex Trading",para:` Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.`,date:"1 August 2023",data:`
              <div className="data">
                  <p>
                    Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.
                  </p>

                <div className="des">
                  <h5>
                    Introduction: Unveiling the Power of Technical Analysis
                  </h5>
                  <p>
                    Technical analysis involves studying historical price data
                    to predict future price movements. Unlike fundamental
                    analysis, which focuses on economic indicators and news
                    events, technical analysis relies on charts, patterns, and
                    mathematical tools to forecast market trends. Traders use
                    technical analysis to recognize patterns, trends, and
                    reversals, helping them make well-informed trading choices.
                  </p>
                </div>

                <div className="des">
                  <h4>Candlestick Patterns and Chart Analysis</h4>
                  <p>
                    Candlestick patterns are a cornerstone of technical
                    analysis. These patterns form on price charts and provide
                    valuable insights into market sentiment. Patterns like Doji,
                    Hammer, and Shooting Star offer clues about potential trend
                    reversals or continuations. By understanding candlestick
                    patterns, traders can better anticipate market shifts and
                    potential price movements.
                  </p>
                  <br />
                  <p>
                    Price charts, such as line, bar, and candlestick charts,
                    visualize historical price data. Traders analyze chart
                    patterns to identify trends, support and resistance levels,
                    and potential breakout points. These visual representations
                    help traders make decisions based on historical price
                    behavior.
                  </p>
                </div>

                <div className="des">
                  <h4>Indicators and Oscillators</h4>
                  <p>
                    Technical indicators and oscillators are mathematical
                    calculations applied to price data to generate trading
                    signals. Moving averages, Relative Strength Index (RSI), and
                    Moving Average Convergence Divergence (MACD) are examples of
                    popular technical indicators. Traders use these tools to
                    confirm trends, identify overbought or oversold conditions,
                    and predict potential reversals.
                  </p>
                  <br />
                  <p>
                    Oscillators, like RSI and Stochastic Oscillator, measure the
                    speed and magnitude of price movements. These indicators
                    help traders identify potential market turning points by
                    highlighting periods of divergence between price and
                    oscillator readings.
                  </p>
                </div>

                <div className="des">
                  <h4>Support and Resistance Levels</h4>
                  <p>
                    Support and resistance levels are crucial concepts in
                    technical analysis. Support is a price level at which a
                    currency pair tends to stop falling and may reverse, while
                    resistance is a level at which a pair tends to stop rising
                    and reverse. Traders use these levels to identify potential
                    entry and exit points and set stop-loss orders.
                  </p>
                  <br />
                  <p>
                    Breakouts occur when a price breaches a support or
                    resistance level, signaling a potential trend continuation
                    or reversal. By identifying these levels, traders can
                    anticipate significant price movements and adapt their
                    strategies accordingly.
                  </p>
                </div>

                <div className="des">
                  <h5>Applying Technical Analysis to Forex Trading</h5>
                  <p>
                    Integrating technical analysis into forex trading involves a
                    combination of chart analysis, pattern recognition, and
                    indicator interpretation. Traders develop a systematic
                    approach to identify opportunities and manage risks. The
                    ability to read charts, spot patterns, and analyze
                    indicators empowers traders to make decisions based on data
                    rather than emotions.
                  </p>
                  <br />
                  <p>
                    It&apos;s important to note that while technical analysis can be
                    a powerful tool, it&apos;s not foolproof. Traders should exercise
                    caution and consider using multiple analysis techniques to
                    confirm their trading decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion: The Art and Science of Technical Analysis</h5>
                  <p>
                    Technical analysis is both an art and a science. Mastering
                    the skill of interpreting charts, recognizing patterns, and
                    using indicators requires practice and dedication. By
                    incorporating technical analysis into their trading
                    strategies, forex traders can enhance their decision-making
                    process and increase their chances of success in the dynamic
                    forex markets.
                  </p>
                  <br />
                  <p>
                    Unlock the potential of technical analysis and refine your
                    trading strategies. Join The Funded Hub and gain access to a
                    community dedicated to advancing your forex trading journey.
                  </p>
                </div>
              </div>
            </div>`},{link:"blog-9",title:"Using Moving Averages to Identify Trends",para:` Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.`,date:"28 July 2023",data:`<div className="data">
                  <p>
                    Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.
                  </p>

                <div className="des">
                  <h5>Introduction: Unraveling the Power of Moving Averages</h5>
                  <p>
                    Moving averages are statistical calculations that smooth out
                    price data by creating a continuously updated average. They
                    help traders filter out noise and visualize the underlying
                    trend within a currency pair&apos;s price movement. By plotting
                    moving averages on price charts, traders can gain a clearer
                    understanding of market direction and momentum.
                  </p>
                </div>

                <div className="des">
                  <h5>Types of Moving Averages</h5>
                  <p>
                    Two common types of moving averages are the Simple Moving
                    Average (SMA) and the Exponential Moving Average (EMA). The
                    SMA calculates the average price over a specific number of
                    periods, while the EMA gives more weight to recent price
                    data, making it more responsive to recent market
                    developments.
                  </p>
                </div>

                <div className="des">
                  <h5>Identifying Trends with Moving Averages</h5>
                  <p>
                    Moving averages are used primarily to identify trends and
                    potential trend reversals. When the price is above a moving
                    average, it suggests an uptrend, and when the price is below
                    a moving average, it suggests a downtrend. Traders often
                    look for crossovers between short-term and long-term moving
                    averages to confirm trend changes.
                  </p>

                  <br />
                  <p>
                    A golden cross occurs when a short-term moving average
                    crosses above a long-term moving average, indicating a
                    potential uptrend. Conversely, a death cross occurs when a
                    short-term moving average crosses below a long-term moving
                    average, signaling a potential downtrend.
                  </p>
                </div>

                <div className="des">
                  <h5>Support and Resistance Levels</h5>
                  <p>
                    Moving averages also serve as dynamic support and resistance
                    levels. During an uptrend, the moving average can act as a
                    support level, while in a downtrend, it can serve as a
                    resistance level. These levels help traders identify
                    potential entry and exit points and set stop-loss orders.
                  </p>
                </div>
                <div className="des">
                  <h5>Moving Averages and Trading Strategies</h5>
                  <p>
                    Moving averages can be integrated into various trading
                    strategies. For instance, traders may use moving average
                    crossovers as entry or exit signals. Others may use moving
                    averages to identify the overall trend and trade in the
                    direction of that trend.
                  </p>
                  <br />
                  <p>
                    It&apos;s essential to note that while moving averages are
                    powerful tools, they are not foolproof. Traders should
                    consider using them in conjunction with other indicators and
                    analysis techniques to confirm their trading decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating the Forex Market with Moving Averages
                  </h5>
                  <p>
                    Moving averages are versatile indicators that empower forex
                    traders to identify trends, anticipate reversals, and make
                    informed trading choices. By understanding how moving
                    averages work and applying them to price charts, traders can
                    gain a competitive edge in the dynamic forex markets.
                  </p>
                  <br />
                  <p>
                    Elevate your forex trading journey by incorporating moving
                    averages into your strategy. Join The Funded Hub and access
                    a supportive community dedicated to enhancing your trading
                    skills and knowledge.
                  </p>
                </div>
            </div>`},{link:"blog-10",title:"Diversification in Forex Trading: Balancing Risk and Reward",para:` Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.`,date:"23 July 2023",data:`<p>
                  Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.
                </p>

                <div className="des">
                  <h5>Introduction: The Power of Diversification</h5>
                  <p>
                    Diversification is the practice of allocating investments
                    among various assets to reduce the impact of any single
                    asset&apos;s poor performance on the overall portfolio. In
                    the forex market, diversification involves trading multiple
                    currency pairs rather than concentrating all trading
                    activities on a single pair.
                  </p>
                </div>

                
                <div className="para">
                  <h4>Benefits of Diversification</h4>
                  <ol>
                    <li>
                      <span>Risk Mitigation: </span>
                      Diversification helps spread risk across different
                      currency pairs, reducing the potential impact of a
                      significant loss on the entire trading portfolio. When one
                      currency pair underperforms, others may compensate for the
                      loss.
                    </li>
                    <li>
                      <span>Steady Performance: </span>By trading multiple
                      currency pairs with different correlations, traders can
                      achieve more consistent performance over time. This
                      steadiness can help smooth out the impact of market
                      volatility.
                    </li>
                    <li>
                      <span>Reduced Emotional Impact: </span>Diversification
                      minimizes the emotional toll of significant losses on a
                      single trade. Traders are less likely to make impulsive
                      decisions based on emotional reactions when their
                      portfolio is well-diversified.
                    </li>
                    <li>
                      <span>Opportunity for Profit: </span>Different currency
                      pairs offer various opportunities for profit, as market
                      conditions may be favorable for one pair while unfavorable
                      for another. Diversification increases the chances of
                      capitalizing on these opportunities.
                    </li>
                  </ol>
                </div>

                
                <div className="para">
                  <h4>Strategies for Diversification</h4>

                  <ol>
                    <li>
                      <span>Cross-Currency Pairs: </span>Trading pairs that do
                      not include the US dollar can provide diversification.
                      These pairs are influenced by different economic factors
                      and geopolitical events, offering unique trading
                      opportunities.
                    </li>
                    <li>
                      <span>Mix of Timeframes: </span>Combining short-term and
                      long-term trading strategies can offer balance. While
                      short-term trading aims for quick gains, long-term trading
                      takes advantage of broader market trends.
                    </li>
                    <li>
                      <span>Incorporating Other Markets: </span>Diversification
                      can extend beyond forex by including commodities, stocks,
                      or cryptocurrencies. Different markets may exhibit diverse
                      behavior, enhancing portfolio stability.
                    </li>
                  </ol>
                </div>
                
                <div className="para">
                  <h4>Challenges and Considerations</h4>

                  <ol>
                    <li>
                      <span>Research: </span>Diversification requires in-depth
                      research on different currency pairs and market dynamics.
                      Traders must understand the unique factors affecting each
                      pair.
                    </li>
                    <li>
                      <span>Over-Diversification: </span>Too much
                      diversification can lead to diluted returns. Finding the
                      right balance between diversification and focus is
                      crucial.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Conclusion: Crafting a Balanced Forex Portfolio</h5>
                  <p>
                    Diversification is a key strategy for managing risk and
                    optimizing trading outcomes in the forex market. By
                    spreading investments across various currency pairs and
                    trading strategies, traders can achieve a harmonious balance
                    between risk and reward.
                  </p>
                  <br />
                  <p>
                    Elevate your trading journey by mastering the art of
                    diversification. Join The Funded Hub and gain access to a
                    supportive trading community committed to enhancing your
                    trading skills and knowledge.
                  </p>
            </div>`},{link:"blog-11",title:"High-Frequency Trading: Pros, Cons, and Risks",para:` High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.`,date:"17 July 2023",data:`<p>
                  High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.
                </p>

                <div className="des">
                  <h5>
                    Introduction: Unveiling the World of High-Frequency Trading
                  </h5>
                  <p>
                    High-frequency trading is a sophisticated trading approach
                    that relies on advanced algorithms and cutting-edge
                    technology to execute a vast number of trades in the
                    shortest possible time frame. It has gained prominence due
                    to its ability to capitalize on minuscule price fluctuations
                    and market inefficiencies.
                  </p>
                </div>

                <div className="para">
                  <h4>Pros of High-Frequency Trading</h4>
                  <ol>
                    <li>
                      <span>Speed Advantage: </span>HFT systems can analyze
                      market data and execute trades within microseconds, giving
                      them a competitive edge in capturing fleeting market
                      opportunities.
                    </li>
                    <li>
                      <span>Market Liquidity: </span>HFT contributes to overall
                      market liquidity by facilitating rapid trade execution.
                      This benefits traders by narrowing bid-ask spreads and
                      reducing slippage.
                    </li>
                    <li>
                      <span>Arbitrage Opportunities: </span>HFT thrives on
                      exploiting price disparities between different markets or
                      assets, known as arbitrage. This strategy helps in
                      eliminating price inefficiencies.
                    </li>
                    <li>
                      <span>Efficient Price Discovery: </span>HFT aids in
                      quickly reflecting new information in asset prices,
                      leading to more accurate price discovery.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Cons of High-Frequency Trading</h4>

                  <ol>
                    <li>
                      <span>Technological Costs: </span>Implementing HFT
                      requires substantial investment in cutting-edge
                      technology, data feeds, and low-latency infrastructure.
                    </li>
                    <li>
                      <span>Market Fragmentation: </span>HFT can contribute to
                      market fragmentation, where trades occur across multiple
                      platforms, potentially causing complexity and reduced
                      transparency.
                    </li>
                    <li>
                      <span>Risk of Glitches: </span>Technical glitches can lead
                      to substantial losses in the blink of an eye, as seen in
                      flash crashes where prices plummet momentarily.
                    </li>
                    <li>
                      <span>Regulatory Scrutiny: </span>HFT practices have drawn
                      regulatory attention due to concerns over market
                      manipulation and unfair advantages.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Risks of High-Frequency Trading</h4>

                  <ol>
                    <li>
                      <span>Over-Optimization: </span>Excessive optimization of
                      algorithms can lead to strategies that perform well
                      historically but fail in changing market conditions.
                    </li>
                    <li>
                      <span>Competition: </span>The competitive nature of HFT
                      means traders must constantly update and refine their
                      strategies to remain profitable.
                    </li>
                    <li>
                      <span>Liquidity Risk: </span>In times of extreme
                      volatility, HFT strategies can contribute to liquidity
                      dry-ups, exacerbating market turbulence.
                    </li>
                  </ol>
                </div>
                <div className="para">
                  <h4>Navigating the World of HFT</h4>

                  <ol>
                    <li>
                      <span>Educational Foundation: </span>Understanding the
                      intricacies of high-frequency trading requires a solid
                      grasp of financial markets, algorithmic trading, and
                      programming.
                    </li>
                    <li>
                      <span>Risk Management: </span>Effective risk management is
                      paramount in HFT, as a single glitch can lead to
                      catastrophic losses. Rigorous testing and monitoring are
                      crucial.
                    </li>
                    <li>
                      <span>Technological Infrastructure: </span>Investing in
                      cutting-edge technology and low-latency connections is
                      essential for successful high-frequency trading.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Harnessing the Potential of High-Frequency
                    Trading
                  </h5>
                  <p>
                    High-frequency trading offers unparalleled speed and the
                    potential for significant profits. However, its complex
                    nature, coupled with regulatory scrutiny and potential
                    risks, demands a comprehensive understanding and approach.
                    As traders explore the realm of high-frequency trading,
                    staying informed about its pros, cons, and risks is key to
                    navigating this dynamic landscape.
                  </p>
                  <br />
                  <i>
                    Ready to explore the exciting world of high-frequency
                    trading? Join The Funded Hub and gain access to cutting-edge
                    technology, expert guidance, and a vibrant community of
                    traders dedicated to mastering the art of HFT.
                  </i>
                </div>

                <h6>
                  Please note that The Funded Hub strictly prohibits the use of
                  High-Frequency Trading (HFT) strategies. Any violation of this
                  policy will result in the deactivation of the trader&apos;s
                  account, and the associated challenge will be marked as
                  unsuccessful. At The Funded Hub, we prioritize ethical and
                  responsible trading practices to ensure a fair and supportive
                  trading environment for all our traders.
                </h6>
          `},{link:"blog-12",title:"Breakout Trading: Identifying and Riding Trends",para:`In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.`,date:"11 July 2023",data:`<p>
                  In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.
                </p>

                <div className="des">
                  <h5>Understanding Breakout Trading</h5>
                  <p>
                    Breakout trading is a strategy that focuses on identifying
                    and capitalizing on significant price movements, often
                    occurring after periods of consolidation or range-bound
                    trading. The idea is to enter the market when prices
                    &quot;break out&quot; from a well-defined range or pattern,
                    signaling the potential start of a new trend.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Breakout Opportunities</h4>
                  <p>
                    To effectively identify breakout opportunities, traders need
                    to be skilled at recognizing chart patterns and price levels
                    that indicate potential breakouts. Some commonly used
                    patterns include:
                  </p>
                  <ol>
                    <li>
                      <span>Triangles: </span>Ascending, descending, and
                      symmetrical triangles can indicate impending breakouts as
                      prices near the apex of the triangle.
                    </li>
                    <li>
                      <span>Rectangles: </span>These patterns are characterized
                      by horizontal support and resistance levels, indicating a
                      potential breakout when prices breach these boundaries.
                    </li>
                    <li>
                      <span>Channels: </span>Trading channels consist of
                      parallel lines that define a price range. A breakout
                      occurs when prices breach the channel&apos;s boundaries.
                    </li>
                    <li>
                      <span>Head and Shoulders: </span>This pattern includes a
                      left shoulder, head, and right shoulder, with a breakout
                      occurring when the neckline is breached.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Breakout Trading</h4>
                  <p>
                    There are several strategies traders employ to take
                    advantage of breakout opportunities:
                  </p>
                  <ol>
                    <li>
                      <span>Retracement Entries: </span>Traders enter the market
                      on a pullback after the initial breakout, aiming to catch
                      a more favorable entry point.
                    </li>
                    <li>
                      <span>Momentum Breakouts: </span>Traders enter as soon as
                      the breakout occurs, banking on strong momentum to
                      continue driving prices in the breakout direction.
                    </li>
                    <li>
                      <span>False Breakouts: </span>Also known as
                      &quot;fakeouts,&quot; this strategy involves entering the
                      market when a breakout occurs but quickly reverses.
                      Traders aim to catch the subsequent price movement.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Timing</h5>
                  <p>
                    As with any trading strategy, risk management is crucial in
                    breakout trading. False breakouts can occur, leading to
                    losses if not managed properly. Traders often use stop-loss
                    orders to protect against adverse price movements.
                  </p>
                  <br />
                  <p>
                    Additionally, timing is essential. Breakouts can occur
                    during periods of high volatility, often influenced by
                    economic releases or news events. Traders need to be aware
                    of these factors and consider the timing of their trades.
                  </p>
                </div>

                <div className="des">
                  <h5>Breakout Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we empower traders to explore various
                    trading strategies, including breakout trading, within a
                    supportive and regulated environment. Our comprehensive
                    approach to risk management and educational resources equips
                    traders with the tools they need to make informed decisions
                    and maximize their trading potential.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion: Riding the Wave of Breakout Trading</h5>
                  <p>
                    Breakout trading offers traders the opportunity to capture
                    significant price movements and ride emerging trends. By
                    understanding chart patterns, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can harness the potential of breakout trading in the
                    forex market. Whether you&apos;re a novice or experienced
                    trader, mastering the art of identifying and riding trends
                    can open the door to exciting trading opportunities.
                  </p>
                  <br />
                  <i>
                    Are you ready to dive into the world of breakout trading?
                    Join The Funded Hub and experience the thrill of discovering
                    breakout opportunities and navigating the dynamic forex
                    market with confidence.
                  </i>
            </div>`},{link:"blog-13",title:"Range Trading: Capitalizing on Sideways Markets",para:`In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"8 July 2023",data:`<p>
                  In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.
                </p>

                <div className="des">
                  <h5>Understanding Range Trading</h5>
                  <p>
                    Range trading, also known as trading in a sideways or
                    consolidating market, involves identifying specific price
                    ranges where an asset&apos;s price oscillates between defined
                    support and resistance levels. Instead of relying on
                    directional trends, range traders aim to profit from price
                    fluctuations within these boundaries.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Range-Bound Markets</h4>
                  <p>
                    Recognizing range-bound markets is crucial for successful
                    range trading. Traders often look for the following
                    characteristics:
                  </p>

                  <ol>
                    <li>
                      <span>Horizontal Boundaries: </span>Prices move within
                      well-defined horizontal levels of support and resistance.
                    </li>
                    <li>
                      <span>Limited Volatility: </span>Market volatility is
                      relatively low, resulting in smaller price movements.
                    </li>
                    <li>
                      <span>Consolidation Patterns: </span>Chart patterns such
                      as rectangles, flags, and pennants indicate a
                      consolidation phase.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Range Trading</h4>
                  <p>
                    Range traders employ various strategies to capitalize on
                    sideways markets:
                  </p>
                  <ol>
                    <li>
                      <span>Support and Resistance Trading: </span>Traders buy
                      near support and sell near resistance, taking advantage of
                      price reversals within the range.
                    </li>
                    <li>
                      <span>Swing Trading: </span>Traders enter positions based
                      on price swings within the range, aiming to profit from
                      repetitive price movements.
                    </li>
                    <li>
                      <span>Bollinger Bands Strategy: </span>Bollinger Bands
                      help identify overbought and oversold conditions within a
                      range, guiding traders to enter and exit trades.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Considerations</h5>
                  <p>
                    While range trading may seem less risky than trend trading,
                    it still requires disciplined risk management. Breakouts
                    from the range can occur suddenly, leading to losses if not
                    anticipated. Traders should set stop-loss orders to protect
                    against unexpected price movements.
                  </p>
                  <br />
                  <p>
                    Moreover, patience is key. Range-bound markets can persist
                    for extended periods, requiring traders to wait for clear
                    signals before entering or exiting positions.
                  </p>
                </div>

                <div className="des">
                  <h5>Range Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we support traders in exploring diverse
                    trading strategies, including range trading, within a
                    regulated and collaborative environment. Our commitment to
                    education and risk management empowers traders to navigate
                    sideways markets with confidence and make informed
                    decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Sideways Markets with Range Trading
                  </h5>
                  <p>
                    Range trading offers traders a unique opportunity to profit
                    from price fluctuations within well-defined boundaries, even
                    when markets aren&apos;t experiencing strong trends. By
                    identifying range-bound markets, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can unlock the potential of range trading in the
                    forex market. Whether you&apos;re a beginner or experienced
                    trader, mastering the art of capitalizing on sideways
                    markets can enhance your trading toolkit.
                  </p>

                  <br />
                  <i>
                    Are you ready to excel in range trading? Join The Funded Hub
                    and embark on a journey to navigate sideways markets and
                    make the most of every trading opportunity.
                  </i>
            </div>`},{link:"blog-14",title:"MetaTrader 5: Advanced Features for Forex Traders",para:` In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"5 July 2023",data:`<p>
                  In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.
                </p>

                <div className="des">
                  <h5>Understanding Range Trading</h5>
                  <p>
                    Range trading, also known as trading in a sideways or
                    consolidating market, involves identifying specific price
                    ranges where an asset&apos;s price oscillates between defined
                    support and resistance levels. Instead of relying on
                    directional trends, range traders aim to profit from price
                    fluctuations within these boundaries.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Range-Bound Markets</h4>
                  <p>
                    Recognizing range-bound markets is crucial for successful
                    range trading. Traders often look for the following
                    characteristics:
                  </p>
                  <ol>
                    <li>
                      <span>Horizontal Boundaries: </span>Prices move within
                      well-defined horizontal levels of support and resistance.
                    </li>
                    <li>
                      <span>Limited Volatility: </span>Market volatility is
                      relatively low, resulting in smaller price movements.
                    </li>
                    <li>
                      <span>Consolidation Patterns: </span>Chart patterns such
                      as rectangles, flags, and pennants indicate a
                      consolidation phase.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Range Trading</h4>
                  <p>
                    Range traders employ various strategies to capitalize on
                    sideways markets:
                  </p>
                  <ol>
                    <li>
                      <span>Support and Resistance Trading: </span>Traders buy
                      near support and sell near resistance, taking advantage of
                      price reversals within the range.
                    </li>
                    <li>
                      <span>Swing Trading: </span>Traders enter positions based
                      on price swings within the range, aiming to profit from
                      repetitive price movements.
                    </li>
                    <li>
                      <span>Bollinger Bands Strategy: </span>Bollinger Bands
                      help identify overbought and oversold conditions within a
                      range, guiding traders to enter and exit trades.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Considerations</h5>
                  <p>
                    While range trading may seem less risky than trend trading,
                    it still requires disciplined risk management. Breakouts
                    from the range can occur suddenly, leading to losses if not
                    anticipated. Traders should set stop-loss orders to protect
                    against unexpected price movements.
                  </p>
                  <br />
                  <p>
                    Moreover, patience is key. Range-bound markets can persist
                    for extended periods, requiring traders to wait for clear
                    signals before entering or exiting positions.
                  </p>
                </div>

                <div className="des">
                  <h5>Range Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we support traders in exploring diverse
                    trading strategies, including range trading, within a
                    regulated and collaborative environment. Our commitment to
                    education and risk management empowers traders to navigate
                    sideways markets with confidence and make informed
                    decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Sideways Markets with Range Trading
                  </h5>
                  <p>
                    Range trading offers traders a unique opportunity to profit
                    from price fluctuations within well-defined boundaries, even
                    when markets aren&apos;t experiencing strong trends. By
                    identifying range-bound markets, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can unlock the potential of range trading in the
                    forex market. Whether you&apos;re a beginner or experienced
                    trader, mastering the art of capitalizing on sideways
                    markets can enhance your trading toolkit.
                  </p>
                  <br />
                  <i>
                    Are you ready to excel in range trading? Join The Funded Hub
                    and embark on a journey to navigate sideways markets and
                    make the most of every trading opportunity.
                  </i>
            </div>`}];function lt(){let[t,a]=s.useState(1);const i=6,r=Math.ceil(se.length/i),n=ot(se,i),l=(p,u)=>{a(u),n.jump(u)},o=ea({palette:{mode:"dark"}});return e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("section",{className:"blog relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper max-w-[75rem] m-auto w-full",children:[e.jsx("div",{className:"header flex justify-between w-full",children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Blog"})}),e.jsx("div",{className:"blogs mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative",children:n.currentData().map((p,u)=>e.jsxs(c,{to:`/blog/${p.link}`,className:"single-blog p-[0.9rem] bg-light/20 backdrop-blur-3xl rounded-xl !relative",children:[e.jsx("div",{className:"blog-img rounded-md",children:e.jsx("img",{className:"rounded-md w-full h-full leading-none",src:J,alt:""})}),e.jsxs("div",{className:"texts mt-6 grid gap-3 pb-8",children:[e.jsx("h3",{className:"font-semibold",children:p.title}),e.jsx("div",{className:"blog-para-slice",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:p.para.slice(0,140)+"...."}})}),e.jsx("div",{className:"date text-sm absolute bottom-3",children:p.date})]})]},p.title+u))}),e.jsx("div",{className:"pagination mt-10 flex justify-center",children:e.jsx(aa,{theme:o,children:e.jsx(ta,{spacing:2,children:e.jsx(ia,{count:r,page:t,shape:"rounded",variant:"outlined",color:"secondary",onChange:l})})})})]})})}),e.jsx(I,{})]})}const dt=[{link:"blog-1",title:"Leveraging Leverage: A Guide for Forex Traders",date:"26 August 2023",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,data:`<div className="des">
                  <span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.
                </div>

                <div className="txt">
                  <h4>Understanding Leverage in Forex Trading</h4>
                  <p>
                    Leverage enables traders to control a larger position size
                    with a smaller amount of capital. For instance, with a
                    leverage of 1:100, you can control a $10,000 position with
                    just $100 of your own capital. This amplifies both potential
                    profits and potential losses.
                  </p>
                </div>

                <div className="para">
                  <h4>Advantages of Leverage</h4>
                  <ul>
                    <li>
                      <span>Maximized Exposure:</span> Leverage allows traders
                      to access larger positions than their initial investment,
                      potentially leading to higher returns when correctly used.
                    </li>
                    <li>
                      <span>Lower Capital Requirement: </span>
                      Leverage makes forex trading accessible to traders with
                      limited capital, enabling them to participate in the
                      market.
                    </li>
                    <li>
                      <span>Diversification: </span>
                      With leverage, you can diversify your trading portfolio
                      and explore different currency pairs without needing
                      significant capital.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Risks of Leverage</h4>

                  <ul>
                    <li>
                      <span> Amplified Losses: </span>While leverage enhances
                      potential profits, it equally amplifies potential losses.
                      Unwise use of leverage can quickly deplete your trading
                      account.
                    </li>
                    <li>
                      <span>Margin Calls:</span> If your losses exceed the
                      margin requirements, you may receive a margin call,
                      requiring you to deposit additional funds to cover the
                      losses.
                    </li>
                    <li>
                      <span>Emotional Impact: </span>High leverage can induce
                      emotional trading, leading to impulsive decisions and poor
                      risk management.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Using Leverage Wisely</h4>

                  <ul>
                    <li>
                      <span>Risk Management:</span> Always use proper risk
                      management techniques to protect your capital. Determine
                      your stop-loss and take-profit levels before entering a
                      trade.
                    </li>
                    <li>
                      <span> Leverage Levels: </span>Consider starting with
                      lower leverage levels until you gain experience and
                      confidence in your trading strategy.
                    </li>
                    <li>
                      <span> Education: </span> Invest time in educating
                      yourself about leverage, risk, and how to implement
                      effective risk management strategies.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>The Funded Hub: A Partner in Your Trading Journey</h4>
                  <p>
                    Navigating leverage requires not only knowledge but also
                    practical experience. The Funded Hub, a leading prop trading
                    firm, provides traders with the opportunity to showcase
                    their skills while minimizing personal financial risk.
                    Here&apos;s how The Funded Hub can support you:
                  </p>
                  <ul>
                    <li>
                      <span>Challenge Evaluation: </span>Prove your trading
                      abilities by passing our evaluation challenge.
                    </li>
                    <li>
                      <span>Trading Capital: </span>Gain access to our trading
                      capital and keep a substantial portion of the profits you
                      generate.
                    </li>
                    <li>
                      <span>Risk Management: </span>Benefit from risk management
                      guidelines, ongoing support, and a community of traders
                      dedicated to success.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Leverage can be a powerful tool in the hands of skilled
                    traders, offering the potential for significant gains.
                    However, it&apos;s essential to approach leverage with
                    caution, prioritizing risk management and ongoing education.
                    The Funded Hub is here to provide you with the resources and
                    support you need to leverage your trading potential and
                    succeed in the dynamic world of forex trading. Elevate your
                    trading journey with the wisdom of leverage and the backing
                    of The Funded Hub.
                  </p>
              </div>`},{link:"blog-2",title:`Exploring the World of Forex Market Hours: A Guide to
                  Optimizing Your Trading Strategy`,para:`<span>Meta Description: </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.`,date:"23 August 2023",data:`<div className="des">
                  <span>Meta Description: </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.
                  <br />
                  <p>
                    Forex trading is a 24-hour endeavor that spans the globe,
                    offering traders around-the-clock opportunities to
                    capitalize on price movements. Understanding the different
                    trading sessions and their characteristics is vital for
                    crafting a winning trading strategy. In this guide,
                    we&apos;ll delve into the intricacies of forex market hours
                    and showcase how The Funded Hub can provide trading capital
                    to qualified traders for optimal trading success.
                  </p>
                </div>

                <div className="para">
                  <h4>Navigating Forex Market Hours</h4>
                  <p>
                    The forex market is divided into distinct trading sessions,
                    each characterized by unique market dynamics:
                  </p>
                  <ul>
                    <li>
                      <span>Sydney Session: </span>
                      Kicking off the trading week, the Sydney session sets the
                      tone with relatively lower volatility and liquidity.
                    </li>
                    <li>
                      <span>Tokyo Session: </span>The Tokyo session witnesses
                      increased activity as it overlaps with the Sydney and
                      London sessions, offering potential trading opportunities.
                    </li>
                    <li>
                      <span>London Session: </span>The London session is
                      renowned for its high volatility and liquidity, with
                      significant price movements in major currency pairs.
                    </li>
                    <li>
                      <span>New York Session: </span>The New York session adds
                      to the excitement, especially when it overlaps with the
                      London session. This period often experiences strong
                      volatility.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Tailoring Your Trading Strategy</h4>
                  <p>
                    Adapting your trading strategy to different market hours can
                    be the key to success:
                  </p>
                  <ul>
                    <li>
                      <span>Session Overlaps: </span>During overlapping
                      sessions, such as the London-New York overlap, market
                      volatility and liquidity tend to spike. These periods
                      present prime opportunities for active traders.
                    </li>
                    <li>
                      <span>Economic Events:</span> Stay informed about major
                      economic news releases, which frequently occur during the
                      London and New York sessions. Adjust your strategy based
                      on the anticipated impact of these releases.
                    </li>
                    <li>
                      <span>Time Zone Advantage: </span>If your time zone
                      doesn&apos;t align with your preferred trading session,
                      consider adjusting your schedule to participate during
                      peak activity times.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>The Funded Hub: Your Path to Success</h4>
                  <p>
                    The Funded Hub stands out as a prop trading firm dedicated
                    to empowering traders with trading capital and
                    opportunities. Our unique approach involves providing
                    talented traders with the capital they need to trade
                    profitably in the forex market. Here&apos;s how it works:
                  </p>
                  <ul>
                    <li>
                      <span>Challenge Evaluation:</span> Pass our trading
                      challenge by showcasing your trading skills and risk
                      management abilities.
                    </li>
                    <li>
                      <span>Trading Capital: </span>Upon successful completion
                      of the challenge, gain access to our trading capital and
                      keep a substantial share of the profits you generate.
                    </li>
                    <li>
                      <span>Ongoing Support: </span>Benefit from ongoing
                      support, risk management guidelines, and a community of
                      fellow traders, all aimed at helping you succeed.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Empower Your Trading Journey with The Funded Hub</h5>
                  <p>
                    The Funded Hub offers traders the chance to trade with
                    significant capital without the burden of personal financial
                    risk. We understand that success in the forex market
                    requires more than just theoretical knowledge; it demands
                    practical experience and the ability to navigate real market
                    conditions. That&apos;s why we provide aspiring traders with
                    the resources they need to thrive in this challenging yet
                    rewarding arena.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Mastering forex market hours and aligning your strategy with
                    different trading sessions can significantly enhance your
                    trading results. The Funded Hub takes your trading journey a
                    step further by offering the capital you need to succeed.
                    Join us today, prove your skills, and embark on a journey of
                    trading excellence with The Funded Hub by your side.
                  </p>
                </div>
`},{link:"blog-3",title:"Understanding Major, Minor, and Exotic Currency Pairs in Forex Trading",para:`<span>Meta Description:</span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.`,date:"19 August 2023",data:`<div className="des">
                  <span>Meta Description:</span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.
                  <br />
                  <p>
                    In the vast realm of forex trading, understanding the
                    various types of currency pairs is crucial to navigating the
                    markets effectively. Currency pairs are the backbone of
                    forex trading, allowing traders to speculate on the exchange
                    rate between two different currencies. These pairs are
                    categorized into three main groups: major, minor, and exotic
                    currency pairs.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Major Currency Pairs: The Cornerstone of Forex Trading
                  </h5>
                  <p>
                    Major currency pairs consist of the most traded currencies
                    globally and are paired with the US dollar (USD). They
                    include EUR/USD, GBP/USD, USD/JPY, USD/CHF, and USD/CAD.
                    These pairs offer high liquidity, tighter spreads, and are
                    known for their lower volatility compared to other pairs.
                    Traders are often drawn to major pairs due to their
                    stability and the availability of extensive market analysis
                    resources.
                  </p>
                </div>

                <div className="des">
                  <h5>Minor Currency Pairs: Broadening Your Options</h5>
                  <p>
                    Minor currency pairs, also known as cross currency pairs,
                    exclude the US dollar. They involve other major currencies
                    such as EUR, GBP, JPY, and AUD. Examples of minor pairs are
                    EUR/GBP, GBP/JPY, and AUD/JPY. Trading minors can provide
                    diversification in your trading portfolio and offer unique
                    trading opportunities. While they may exhibit slightly wider
                    spreads and lower liquidity, skilled traders can capitalize
                    on their price movements and trends.
                  </p>
                </div>

                <div className="des">
                  <h5>Exotic Currency Pairs: Unveiling Unique Opportunities</h5>
                  <p>
                    Exotic currency pairs involve one major currency and one
                    currency from a developing or emerging economy. Examples
                    include USD/SGD, EUR/TRY, and GBP/MXN. Exotic pairs offer
                    higher spreads and increased volatility, making them
                    appealing to traders seeking potentially larger profits.
                    However, due to their lower liquidity and increased risk,
                    they require a deep understanding of the economic and
                    geopolitical factors affecting the involved countries.
                  </p>
                </div>

                <div className="des">
                  <h5>Navigating the Market with Precision</h5>
                  <p>
                    To effectively trade these currency pairs, it&apos;s
                    essential to understand their characteristics and monitor
                    the factors that influence their movements. Market trends,
                    economic indicators, geopolitical events, and interest rate
                    differentials all play a role in determining currency pair
                    fluctuations. As you explore the forex market, remember that
                    each currency pair has its unique dynamics and risk factors.
                    Engaging in thorough research and analysis is key to making
                    informed trading decisions. And that&apos;s where
                    experienced firms like The Funded Hub come into play.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Elevate Your Forex Trading Experience with The Funded Hub
                  </h5>
                  <p>
                    The Funded Hub offers aspiring traders the opportunity to
                    trade with proprietary capital, advanced trading platforms,
                    and expert support. Our platform empowers you to access
                    major, minor, and exotic currency pairs while managing risk
                    effectively. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub provides a supportive
                    environment to enhance your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>In Conclusion</h5>
                  <p>
                    Understanding major, minor, and exotic currency pairs is a
                    fundamental step in becoming a successful forex trader. Each
                    pair comes with its own set of characteristics, offering
                    various trading opportunities and challenges. The Funded Hub
                    is your partner in exploring these pairs and harnessing
                    their potential for profitable trading. Begin your forex
                    journey today with The Funded Hub and unlock the world of
                    currency trading possibilities.
                  </p>
                </div>`},{link:"blog-4",title:"How Does Forex Trading Work? A Comprehensive Guide",para:`<span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!`,date:"18 August 2023",data:`<div className="des">
                  <span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!
                </div>

                <div className="des">
                  <h5>Introduction</h5>
                  <p>
                    If you&apos;ve ever wondered how the world of forex trading
                    operates, you&apos;re in the right place. Forex trading,
                    also known as foreign exchange trading, is a dynamic and
                    exciting financial market that allows individuals and
                    institutions to trade currencies and potentially profit from
                    the fluctuations in exchange rates. In this guide, brought
                    to you by The Funded Hub, we&apos;ll take you through the
                    basics of how forex trading works, the key players involved,
                    and how you can get started on your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>Understanding Forex Trading</h5>
                  <p>
                    Forex trading involves the exchange of one currency for
                    another at an agreed-upon price. The aim is to buy a
                    currency at a lower price and sell it at a higher price,
                    thus generating a profit. Unlike traditional stock markets,
                    the forex market operates 24 hours a day, five days a week,
                    due to its global nature and the involvement of major
                    financial centers around the world.
                  </p>
                </div>

                
                <div className="para">
                  <h4>Key Players in the Forex Market</h4>
                  <ul>
                    <li>
                      <span>Banks and Financial Institutions: </span>
                      Major banks and financial institutions participate in
                      forex trading to facilitate international trade, manage
                      foreign exchange reserves, and speculate on currency
                      movements.
                    </li>
                    <li>
                      <span>Central Banks: </span>Central banks play a
                      significant role by implementing monetary policies that
                      impact their country&apos;s currency. Interest rate
                      decisions and interventions are examples of tools they use
                      to influence exchange rates.
                    </li>
                    <li>
                      <span>Corporations: </span>Multinational corporations
                      engage in forex trading to manage currency risk associated
                      with their international operations and trade.
                    </li>
                    <li>
                      <span>Retail Traders: </span>Individual traders, like you,
                      participate in the forex market through online platforms
                      provided by brokers. These traders aim to profit from
                      price movements by speculating on currency pairs.
                    </li>
                    <li>
                      <span>Brokers and Proprietary Firms: </span>Forex brokers,
                      such as The Funded Hub, provide traders with access to the
                      market by offering trading platforms, market analysis, and
                      leverage. Proprietary firms like ours allocate trading
                      capital to traders, enabling them to trade with our
                      resources and share profits.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>How Forex Trading Works</h4>

                  <ul>
                    <li>
                      <span>Currency Pairs: </span>In forex trading, currencies
                      are quoted in pairs, such as EUR/USD, GBP/JPY, and
                      USD/JPY. The first currency in the pair is the base
                      currency, while the second is the quote currency. The
                      exchange rate indicates how much of the quote currency is
                      needed to purchase one unit of the base currency.
                    </li>
                    <li>
                      <span>Bid and Ask Price: </span>The bid price is the price
                      at which you can sell the base currency, and the ask price
                      is the price at which you can buy the base currency. The
                      difference between the bid and ask price is known as the
                      spread.
                    </li>
                    <li>
                      <span>Going Long and Going Short: </span>Going long means
                      buying the base currency and selling the quote currency in
                      anticipation of the base currency&apos;s value increasing.
                      Going short involves selling the base currency and buying
                      the quote currency, expecting the base currency&apos;s
                      value to decrease.
                    </li>
                    <li>
                      <span>Leverage: </span>Leverage allows traders to control
                      a larger position with a smaller amount of capital. While
                      it amplifies potential profits, it also increases the risk
                      of losses. The Funded Hub offers competitive leverage
                      options to suit different trading styles.
                    </li>
                    <li>
                      <span>Pips and Lots: </span>A pip is the smallest price
                      movement in a currency pair. Lot sizes determine the
                      volume of a trade. Standard lots are typically 100,000
                      units of the base currency, while mini and micro lots
                      offer smaller trading sizes.
                    </li>
                  </ul>
                </div>

                
                <div className="para">
                  <h4>Getting Started with The Funded Hub</h4>
                  <p>
                    At The Funded Hub, we&apos;re dedicated to empowering
                    traders of all experience levels to succeed in the forex
                    market. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <span>Capital Allocation: </span>Trade with our
                      proprietary capital and share profits based on
                      performance.
                    </li>
                    <li>
                      <span>Advanced Trading Platforms: </span>Access
                      user-friendly and powerful trading platforms to execute
                      your trades.
                    </li>
                    <li>
                      <span>Educational Resources: </span>Benefit from training,
                      webinars, and market analysis to enhance your trading
                      skills.
                    </li>
                    <li>
                      <span>Risk Management: </span>Our risk management
                      guidelines help you navigate the market responsibly.
                    </li>
                    <li>
                      <span>Professional Support: </span>Count on our
                      experienced team for guidance and support throughout your
                      trading journey.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Forex trading offers immense potential for individuals to
                    participate in a global market and capitalize on currency
                    fluctuations. Understanding the basics, key players, and
                    trading mechanics is essential for success. The Funded Hub
                    provides a unique opportunity to trade with a prop
                    firm&apos;s resources, giving you the edge you need to excel
                    in the forex world. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub is here to support your
                    forex trading aspirations. Join us today and embark on an
                    exciting journey towards financial success in the dynamic
                    world of forex trading.
                  </p>
                </div>
`},{link:"blog-5",title:"Introduction to Forex Trading with The Funded Hub: A Beginner&apos;s Guide",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"12 August 2023",data:`<div className="des">
                  <span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!
                </div>

                <div className="des">
                  <h5>Introduction</h5>
                  <p>
                    If you&apos;ve ever wondered how the world of forex trading
                    operates, you&apos;re in the right place. Forex trading,
                    also known as foreign exchange trading, is a dynamic and
                    exciting financial market that allows individuals and
                    institutions to trade currencies and potentially profit from
                    the fluctuations in exchange rates. In this guide, brought
                    to you by The Funded Hub, we&apos;ll take you through the
                    basics of how forex trading works, the key players involved,
                    and how you can get started on your forex trading journey.
                  </p>
                </div>

                <div className="des">
                  <h5>Understanding Forex Trading</h5>
                  <p>
                    Forex trading involves the exchange of one currency for
                    another at an agreed-upon price. The aim is to buy a
                    currency at a lower price and sell it at a higher price,
                    thus generating a profit. Unlike traditional stock markets,
                    the forex market operates 24 hours a day, five days a week,
                    due to its global nature and the involvement of major
                    financial centers around the world.
                  </p>
                </div>

                <div className="para">
                  <h4>Key Players in the Forex Market</h4>

                  <ul>
                    <li>
                      <span>Banks and Financial Institutions: </span>Major banks
                      and financial institutions participate in forex trading to
                      facilitate international trade, manage foreign exchange
                      reserves, and speculate on currency movements.
                    </li>
                    <li>
                      <span>Central Banks: </span>Central banks play a
                      significant role by implementing monetary policies that
                      impact their country&apos;s currency. Interest rate
                      decisions and interventions are examples of tools they use
                      to influence exchange rates.
                    </li>
                    <li>
                      <span>Corporations: </span>Multinational corporations
                      engage in forex trading to manage currency risk associated
                      with their international operations and trade.
                    </li>
                    <li>
                      <span>Retail Traders: </span>Individual traders, like you,
                      participate in the forex market through online platforms
                      provided by brokers. These traders aim to profit from
                      price movements by speculating on currency pairs.
                    </li>
                    <li>
                      <span>Brokers and Proprietary Firms: </span>Forex brokers,
                      such as The Funded Hub, provide traders with access to the
                      market by offering trading platforms, market analysis, and
                      leverage. Proprietary firms like ours allocate trading
                      capital to traders, enabling them to trade with our
                      resources and share profits.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>How Forex Trading Works</h4>
                  <p></p>
                  <ul>
                    <li>
                      <span>Currency Pairs: </span>In forex trading, currencies
                      are quoted in pairs, such as EUR/USD, GBP/JPY, and
                      USD/JPY. The first currency in the pair is the base
                      currency, while the second is the quote currency. The
                      exchange rate indicates how much of the quote currency is
                      needed to purchase one unit of the base currency.
                    </li>
                    <li>
                      <span>Bid and Ask Price: </span>The bid price is the price
                      at which you can sell the base currency, and the ask price
                      is the price at which you can buy the base currency. The
                      difference between the bid and ask price is known as the
                      spread.
                    </li>
                    <li>
                      <span>Going Long and Going Short: </span>Going long means
                      buying the base currency and selling the quote currency in
                      anticipation of the base currency&apos;s value increasing.
                      Going short involves selling the base currency and buying
                      the quote currency, expecting the base currency&apos;s
                      value to decrease.
                    </li>
                    <li>
                      <span>Leverage: </span>Leverage allows traders to control
                      a larger position with a smaller amount of capital. While
                      it amplifies potential profits, it also increases the risk
                      of losses. The Funded Hub offers competitive leverage
                      options to suit different trading styles.
                    </li>
                    <li>
                      <span>Pips and Lots: </span>A pip is the smallest price
                      movement in a currency pair. Lot sizes determine the
                      volume of a trade. Standard lots are typically 100,000
                      units of the base currency, while mini and micro lots
                      offer smaller trading sizes.
                    </li>
                  </ul>
                </div>

                <div className="para">
                  <h4>Getting Started with The Funded Hub</h4>
                  <p>
                    At The Funded Hub, we&apos;re dedicated to empowering
                    traders of all experience levels to succeed in the forex
                    market. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <span>Capital Allocation: </span>Trade with our
                      proprietary capital and share profits based on
                      performance.
                    </li>
                    <li>
                      <span>Advanced Trading Platforms: </span>Access
                      user-friendly and powerful trading platforms to execute
                      your trades.
                    </li>
                    <li>
                      <span>Educational Resources: </span>Benefit from training,
                      webinars, and market analysis to enhance your trading
                      skills.
                    </li>
                    <li>
                      <span>Risk Management: </span>Our risk management
                      guidelines help you navigate the market responsibly.
                    </li>
                    <li>
                      <span>Professional Support: </span>Count on our
                      experienced team for guidance and support throughout your
                      trading journey.
                    </li>
                  </ul>
                </div>

                <div className="des">
                  <h5>Conclusion</h5>
                  <p>
                    Forex trading offers immense potential for individuals to
                    participate in a global market and capitalize on currency
                    fluctuations. Understanding the basics, key players, and
                    trading mechanics is essential for success. The Funded Hub
                    provides a unique opportunity to trade with a prop
                    firm&apos;s resources, giving you the edge you need to excel
                    in the forex world. Whether you&apos;re a beginner or an
                    experienced trader, The Funded Hub is here to support your
                    forex trading aspirations. Join us today and embark on an
                    exciting journey towards financial success in the dynamic
                    world of forex trading.
                  </p>
                </div>`},{link:"blog-6",title:"The Role of Central Banks in Forex Markets",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"9 August 2023",data:`<p>
                    Central banks play a pivotal role in the complex world of
                    forex markets, exerting significant influence on global
                    economies and currency values. Understanding the functions
                    and strategies of central banks is crucial for forex traders
                    seeking to navigate this dynamic landscape. In this article,
                    we delve into the key role central banks play in shaping the
                    forex markets and explore their impact on traders and
                    investors.
                  </p>

                <div className="des">
                  <h5>Introduction: Central Banks and Forex Markets</h5>
                  <p>
                    Central banks are the primary authorities responsible for
                    overseeing monetary policy within their respective
                    countries. Their decisions and actions can have far-reaching
                    consequences for economies and, consequently, the forex
                    markets. The strategies employed by central banks, such as
                    interest rate adjustments and currency interventions, are
                    designed to achieve various objectives, including price
                    stability, economic growth, and balance of trade.
                  </p>
                </div>

                <div className="des">
                  <h5>Interest Rates and Their Impact</h5>
                  <p>
                    One of the most potent tools in a central bank's arsenal is
                    its ability to set and adjust interest rates. By raising or
                    lowering interest rates, central banks can influence
                    borrowing costs, consumer spending, and investment levels.
                    Changes in interest rates can cause significant shifts in
                    currency values, as higher interest rates tend to attract
                    foreign capital seeking better returns.
                  </p>
                  <br />

                  <p>
                    For instance, if a central bank decides to increase interest
                    rates, the country's currency might strengthen as investors
                    are drawn by the higher yield. This can lead to increased
                    demand for the currency, driving its value higher in the
                    forex markets. On the other hand, a central bank's decision
                    to lower interest rates can have the opposite effect,
                    weakening the currency's value.
                  </p>
                </div>

                <div className="para">
                  <h4>Conclusion: Navigating the Central Bank Landscape</h4>
                  <p>
                    The actions and decisions of central banks have a profound
                    impact on forex markets, shaping trends and influencing
                    trading strategies. Forex traders need to stay informed
                    about central bank policies, economic data releases, and
                    market sentiment to make well-informed decisions.
                  </p>
                  <br />
                  <p>
                    As central banks continuously adapt their strategies to
                    economic conditions, forex traders must be prepared to
                    adjust their trading strategies accordingly. By
                    understanding the role of central banks and their influence
                    on currency values, traders can better navigate the
                    ever-evolving forex markets and seize opportunities for
                    profitable trades.
                  </p>

                  <br />
                  <b>
                    Disclaimer: This article is for informational purposes only
                    and does not constitute financial advice. Trading in forex
                    markets involves risks and should be undertaken with proper
                    understanding and risk management.
                  </b>

                  <br />
                  <br />
                  <p>
                    Stay informed about central bank actions and economic trends
                    to navigate the forex markets effectively. Learn more at The
                    Funded Hub
                  </p>
            </div>`},{link:"blog-7",title:"Economic Indicators and Their Impact on Forex",para:`Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.`,date:"5 August 2023",data:`
              <div className="data">
                  <p>
                    Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.
                  </p>

                <div className="des">
                  <h5>Introduction: Economic Indicators and Forex Markets</h5>
                  <p>
                    Economic indicators are statistical data points that provide
                    information about various economic factors, such as
                    employment levels, inflation rates, and consumer spending.
                    These indicators offer a snapshot of an economy&apos;s
                    performance and can offer clues about its future direction.
                    For forex traders, economic indicators serve as crucial
                    pieces of information that help assess the health of
                    economies and predict potential market movements.
                  </p>
                </div>

                <div className="des">
                  <h5>Unemployment Rate and Nonfarm Payrolls</h5>
                  <p>
                    The unemployment rate is a key economic indicator that
                    measures the percentage of the workforce that is unemployed
                    and actively seeking employment. A rising unemployment rate
                    can indicate economic weakness, while a declining rate
                    suggests economic growth. Forex traders closely monitor this
                    indicator as it can influence currency values.
                  </p>
                  <br />
                  <p>
                    Additionally, the nonfarm payrolls report provides insights
                    into job creation in the non-agricultural sector. Strong
                    nonfarm payroll numbers often correlate with a robust
                    economy and may lead to currency appreciation. Conversely,
                    weak nonfarm payroll figures could lead to currency
                    depreciation.
                  </p>
                </div>

                <div className="des">
                  <h5>Consumer Price Index (CPI) and Inflation</h5>
                  <p>
                    The Consumer Price Index (CPI) measures changes in the
                    average prices paid by consumers for goods and services.
                    Inflation, which is the rate at which prices rise, can have
                    a significant impact on an economy and its currency. Central
                    banks often use CPI data to determine whether to adjust
                    interest rates.
                  </p>
                  <br />
                  <p>
                    High inflation can erode purchasing power and decrease
                    currency values. Conversely, low inflation may lead to
                    currency appreciation. Forex traders pay close attention to
                    CPI releases to gauge potential shifts in currency values
                    based on inflation trends.
                  </p>
                </div>

                <div className="des">
                  <h5>Gross Domestic Product (GDP)</h5>
                  <p>
                    Gross Domestic Product (GDP) is a comprehensive measure of
                    economic activity within a country. It represents the total
                    value of all goods and services produced in a specific
                    period. Strong GDP growth can lead to currency appreciation,
                    while weak GDP growth may lead to currency depreciation.
                  </p>
                  <br />
                  <p>
                    Forex traders analyze GDP reports to assess the overall
                    health and direction of an economy. Countries with strong
                    GDP growth are often considered more attractive for
                    investment, potentially leading to increased demand for
                    their currency.
                  </p>
                </div>

                <div className="des">
                  <h5>Trade Balance and Current Account</h5>
                  <p>
                    The trade balance measures the difference between a
                    country&apos;s exports and imports. A positive trade balance
                    (surplus) indicates that a country is exporting more than it
                    is importing, which can lead to currency appreciation.
                    Conversely, a negative trade balance (deficit) may lead to
                    currency depreciation.
                  </p>
                  <br />
                  <p>
                    The current account, which includes trade balance as well as
                    other financial transactions, also influences currency
                    values. A strong current account can attract foreign
                    investment and potentially lead to currency appreciation.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Economic Indicators for Forex Success
                  </h5>

                  <p>
                    Economic indicators provide forex traders with valuable
                    insights into economic trends and potential market
                    movements. By staying informed about key economic releases,
                    traders can make informed decisions and better predict
                    potential shifts in currency values.
                  </p>
                  <br />
                  <p>
                    It&apos;s important for forex traders to have a solid
                    understanding of the impact of economic indicators on the
                    forex markets. By analyzing data releases and considering
                    their potential effects, traders can develop effective
                    trading strategies and seize opportunities for profitable
                    trades.
                  </p>
                </div>

                <b>
                  Disclaimer: This article is for informational purposes only
                  and does not constitute financial advice. Trading in forex
                  markets involves risks and should be undertaken with proper
                  understanding and risk management.
                </b>
           
                <p>
                  Stay ahead in the forex markets by mastering economic
                  indicators and their impact. Learn more at The Funded Hub.
                </p>
            </div>`},{link:"blog-8",title:"The Art of Technical Analysis in Forex Trading",para:` Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.`,date:"1 August 2023",data:`
              <div className="data">
                  <p>
                    Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.
                  </p>

                <div className="des">
                  <h5>
                    Introduction: Unveiling the Power of Technical Analysis
                  </h5>
                  <p>
                    Technical analysis involves studying historical price data
                    to predict future price movements. Unlike fundamental
                    analysis, which focuses on economic indicators and news
                    events, technical analysis relies on charts, patterns, and
                    mathematical tools to forecast market trends. Traders use
                    technical analysis to recognize patterns, trends, and
                    reversals, helping them make well-informed trading choices.
                  </p>
                </div>

                <div className="des">
                  <h4>Candlestick Patterns and Chart Analysis</h4>
                  <p>
                    Candlestick patterns are a cornerstone of technical
                    analysis. These patterns form on price charts and provide
                    valuable insights into market sentiment. Patterns like Doji,
                    Hammer, and Shooting Star offer clues about potential trend
                    reversals or continuations. By understanding candlestick
                    patterns, traders can better anticipate market shifts and
                    potential price movements.
                  </p>
                  <br />
                  <p>
                    Price charts, such as line, bar, and candlestick charts,
                    visualize historical price data. Traders analyze chart
                    patterns to identify trends, support and resistance levels,
                    and potential breakout points. These visual representations
                    help traders make decisions based on historical price
                    behavior.
                  </p>
                </div>

                <div className="des">
                  <h4>Indicators and Oscillators</h4>
                  <p>
                    Technical indicators and oscillators are mathematical
                    calculations applied to price data to generate trading
                    signals. Moving averages, Relative Strength Index (RSI), and
                    Moving Average Convergence Divergence (MACD) are examples of
                    popular technical indicators. Traders use these tools to
                    confirm trends, identify overbought or oversold conditions,
                    and predict potential reversals.
                  </p>
                  <br />
                  <p>
                    Oscillators, like RSI and Stochastic Oscillator, measure the
                    speed and magnitude of price movements. These indicators
                    help traders identify potential market turning points by
                    highlighting periods of divergence between price and
                    oscillator readings.
                  </p>
                </div>

                <div className="des">
                  <h4>Support and Resistance Levels</h4>
                  <p>
                    Support and resistance levels are crucial concepts in
                    technical analysis. Support is a price level at which a
                    currency pair tends to stop falling and may reverse, while
                    resistance is a level at which a pair tends to stop rising
                    and reverse. Traders use these levels to identify potential
                    entry and exit points and set stop-loss orders.
                  </p>
                  <br />
                  <p>
                    Breakouts occur when a price breaches a support or
                    resistance level, signaling a potential trend continuation
                    or reversal. By identifying these levels, traders can
                    anticipate significant price movements and adapt their
                    strategies accordingly.
                  </p>
                </div>

                <div className="des">
                  <h5>Applying Technical Analysis to Forex Trading</h5>
                  <p>
                    Integrating technical analysis into forex trading involves a
                    combination of chart analysis, pattern recognition, and
                    indicator interpretation. Traders develop a systematic
                    approach to identify opportunities and manage risks. The
                    ability to read charts, spot patterns, and analyze
                    indicators empowers traders to make decisions based on data
                    rather than emotions.
                  </p>
                  <br />
                  <p>
                    It&apos;s important to note that while technical analysis can be
                    a powerful tool, it&apos;s not foolproof. Traders should exercise
                    caution and consider using multiple analysis techniques to
                    confirm their trading decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion: The Art and Science of Technical Analysis</h5>
                  <p>
                    Technical analysis is both an art and a science. Mastering
                    the skill of interpreting charts, recognizing patterns, and
                    using indicators requires practice and dedication. By
                    incorporating technical analysis into their trading
                    strategies, forex traders can enhance their decision-making
                    process and increase their chances of success in the dynamic
                    forex markets.
                  </p>
                  <br />
                  <p>
                    Unlock the potential of technical analysis and refine your
                    trading strategies. Join The Funded Hub and gain access to a
                    community dedicated to advancing your forex trading journey.
                  </p>
                </div>
              </div>
            </div>`},{link:"blog-9",title:"Using Moving Averages to Identify Trends",para:` Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.`,date:"28 July 2023",data:`<div className="data">
                  <p>
                    Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.
                  </p>

                <div className="des">
                  <h5>Introduction: Unraveling the Power of Moving Averages</h5>
                  <p>
                    Moving averages are statistical calculations that smooth out
                    price data by creating a continuously updated average. They
                    help traders filter out noise and visualize the underlying
                    trend within a currency pair&apos;s price movement. By plotting
                    moving averages on price charts, traders can gain a clearer
                    understanding of market direction and momentum.
                  </p>
                </div>

                <div className="des">
                  <h5>Types of Moving Averages</h5>
                  <p>
                    Two common types of moving averages are the Simple Moving
                    Average (SMA) and the Exponential Moving Average (EMA). The
                    SMA calculates the average price over a specific number of
                    periods, while the EMA gives more weight to recent price
                    data, making it more responsive to recent market
                    developments.
                  </p>
                </div>

                <div className="des">
                  <h5>Identifying Trends with Moving Averages</h5>
                  <p>
                    Moving averages are used primarily to identify trends and
                    potential trend reversals. When the price is above a moving
                    average, it suggests an uptrend, and when the price is below
                    a moving average, it suggests a downtrend. Traders often
                    look for crossovers between short-term and long-term moving
                    averages to confirm trend changes.
                  </p>

                  <br />
                  <p>
                    A golden cross occurs when a short-term moving average
                    crosses above a long-term moving average, indicating a
                    potential uptrend. Conversely, a death cross occurs when a
                    short-term moving average crosses below a long-term moving
                    average, signaling a potential downtrend.
                  </p>
                </div>

                <div className="des">
                  <h5>Support and Resistance Levels</h5>
                  <p>
                    Moving averages also serve as dynamic support and resistance
                    levels. During an uptrend, the moving average can act as a
                    support level, while in a downtrend, it can serve as a
                    resistance level. These levels help traders identify
                    potential entry and exit points and set stop-loss orders.
                  </p>
                </div>
                <div className="des">
                  <h5>Moving Averages and Trading Strategies</h5>
                  <p>
                    Moving averages can be integrated into various trading
                    strategies. For instance, traders may use moving average
                    crossovers as entry or exit signals. Others may use moving
                    averages to identify the overall trend and trade in the
                    direction of that trend.
                  </p>
                  <br />
                  <p>
                    It&apos;s essential to note that while moving averages are
                    powerful tools, they are not foolproof. Traders should
                    consider using them in conjunction with other indicators and
                    analysis techniques to confirm their trading decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating the Forex Market with Moving Averages
                  </h5>
                  <p>
                    Moving averages are versatile indicators that empower forex
                    traders to identify trends, anticipate reversals, and make
                    informed trading choices. By understanding how moving
                    averages work and applying them to price charts, traders can
                    gain a competitive edge in the dynamic forex markets.
                  </p>
                  <br />
                  <p>
                    Elevate your forex trading journey by incorporating moving
                    averages into your strategy. Join The Funded Hub and access
                    a supportive community dedicated to enhancing your trading
                    skills and knowledge.
                  </p>
                </div>
            </div>`},{link:"blog-10",title:"Diversification in Forex Trading: Balancing Risk and Reward",para:` Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.`,date:"23 July 2023",data:`<p>
                  Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.
                </p>

                <div className="des">
                  <h5>Introduction: The Power of Diversification</h5>
                  <p>
                    Diversification is the practice of allocating investments
                    among various assets to reduce the impact of any single
                    asset&apos;s poor performance on the overall portfolio. In
                    the forex market, diversification involves trading multiple
                    currency pairs rather than concentrating all trading
                    activities on a single pair.
                  </p>
                </div>

                
                <div className="para">
                  <h4>Benefits of Diversification</h4>
                  <ol>
                    <li>
                      <span>Risk Mitigation: </span>
                      Diversification helps spread risk across different
                      currency pairs, reducing the potential impact of a
                      significant loss on the entire trading portfolio. When one
                      currency pair underperforms, others may compensate for the
                      loss.
                    </li>
                    <li>
                      <span>Steady Performance: </span>By trading multiple
                      currency pairs with different correlations, traders can
                      achieve more consistent performance over time. This
                      steadiness can help smooth out the impact of market
                      volatility.
                    </li>
                    <li>
                      <span>Reduced Emotional Impact: </span>Diversification
                      minimizes the emotional toll of significant losses on a
                      single trade. Traders are less likely to make impulsive
                      decisions based on emotional reactions when their
                      portfolio is well-diversified.
                    </li>
                    <li>
                      <span>Opportunity for Profit: </span>Different currency
                      pairs offer various opportunities for profit, as market
                      conditions may be favorable for one pair while unfavorable
                      for another. Diversification increases the chances of
                      capitalizing on these opportunities.
                    </li>
                  </ol>
                </div>

                
                <div className="para">
                  <h4>Strategies for Diversification</h4>

                  <ol>
                    <li>
                      <span>Cross-Currency Pairs: </span>Trading pairs that do
                      not include the US dollar can provide diversification.
                      These pairs are influenced by different economic factors
                      and geopolitical events, offering unique trading
                      opportunities.
                    </li>
                    <li>
                      <span>Mix of Timeframes: </span>Combining short-term and
                      long-term trading strategies can offer balance. While
                      short-term trading aims for quick gains, long-term trading
                      takes advantage of broader market trends.
                    </li>
                    <li>
                      <span>Incorporating Other Markets: </span>Diversification
                      can extend beyond forex by including commodities, stocks,
                      or cryptocurrencies. Different markets may exhibit diverse
                      behavior, enhancing portfolio stability.
                    </li>
                  </ol>
                </div>
                
                <div className="para">
                  <h4>Challenges and Considerations</h4>

                  <ol>
                    <li>
                      <span>Research: </span>Diversification requires in-depth
                      research on different currency pairs and market dynamics.
                      Traders must understand the unique factors affecting each
                      pair.
                    </li>
                    <li>
                      <span>Over-Diversification: </span>Too much
                      diversification can lead to diluted returns. Finding the
                      right balance between diversification and focus is
                      crucial.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Conclusion: Crafting a Balanced Forex Portfolio</h5>
                  <p>
                    Diversification is a key strategy for managing risk and
                    optimizing trading outcomes in the forex market. By
                    spreading investments across various currency pairs and
                    trading strategies, traders can achieve a harmonious balance
                    between risk and reward.
                  </p>
                  <br />
                  <p>
                    Elevate your trading journey by mastering the art of
                    diversification. Join The Funded Hub and gain access to a
                    supportive trading community committed to enhancing your
                    trading skills and knowledge.
                  </p>
            </div>`},{link:"blog-11",title:"High-Frequency Trading: Pros, Cons, and Risks",para:` High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.`,date:"17 July 2023",data:`<p>
                  High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.
                </p>

                <div className="des">
                  <h5>
                    Introduction: Unveiling the World of High-Frequency Trading
                  </h5>
                  <p>
                    High-frequency trading is a sophisticated trading approach
                    that relies on advanced algorithms and cutting-edge
                    technology to execute a vast number of trades in the
                    shortest possible time frame. It has gained prominence due
                    to its ability to capitalize on minuscule price fluctuations
                    and market inefficiencies.
                  </p>
                </div>

                <div className="para">
                  <h4>Pros of High-Frequency Trading</h4>
                  <ol>
                    <li>
                      <span>Speed Advantage: </span>HFT systems can analyze
                      market data and execute trades within microseconds, giving
                      them a competitive edge in capturing fleeting market
                      opportunities.
                    </li>
                    <li>
                      <span>Market Liquidity: </span>HFT contributes to overall
                      market liquidity by facilitating rapid trade execution.
                      This benefits traders by narrowing bid-ask spreads and
                      reducing slippage.
                    </li>
                    <li>
                      <span>Arbitrage Opportunities: </span>HFT thrives on
                      exploiting price disparities between different markets or
                      assets, known as arbitrage. This strategy helps in
                      eliminating price inefficiencies.
                    </li>
                    <li>
                      <span>Efficient Price Discovery: </span>HFT aids in
                      quickly reflecting new information in asset prices,
                      leading to more accurate price discovery.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Cons of High-Frequency Trading</h4>

                  <ol>
                    <li>
                      <span>Technological Costs: </span>Implementing HFT
                      requires substantial investment in cutting-edge
                      technology, data feeds, and low-latency infrastructure.
                    </li>
                    <li>
                      <span>Market Fragmentation: </span>HFT can contribute to
                      market fragmentation, where trades occur across multiple
                      platforms, potentially causing complexity and reduced
                      transparency.
                    </li>
                    <li>
                      <span>Risk of Glitches: </span>Technical glitches can lead
                      to substantial losses in the blink of an eye, as seen in
                      flash crashes where prices plummet momentarily.
                    </li>
                    <li>
                      <span>Regulatory Scrutiny: </span>HFT practices have drawn
                      regulatory attention due to concerns over market
                      manipulation and unfair advantages.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Risks of High-Frequency Trading</h4>

                  <ol>
                    <li>
                      <span>Over-Optimization: </span>Excessive optimization of
                      algorithms can lead to strategies that perform well
                      historically but fail in changing market conditions.
                    </li>
                    <li>
                      <span>Competition: </span>The competitive nature of HFT
                      means traders must constantly update and refine their
                      strategies to remain profitable.
                    </li>
                    <li>
                      <span>Liquidity Risk: </span>In times of extreme
                      volatility, HFT strategies can contribute to liquidity
                      dry-ups, exacerbating market turbulence.
                    </li>
                  </ol>
                </div>
                <div className="para">
                  <h4>Navigating the World of HFT</h4>

                  <ol>
                    <li>
                      <span>Educational Foundation: </span>Understanding the
                      intricacies of high-frequency trading requires a solid
                      grasp of financial markets, algorithmic trading, and
                      programming.
                    </li>
                    <li>
                      <span>Risk Management: </span>Effective risk management is
                      paramount in HFT, as a single glitch can lead to
                      catastrophic losses. Rigorous testing and monitoring are
                      crucial.
                    </li>
                    <li>
                      <span>Technological Infrastructure: </span>Investing in
                      cutting-edge technology and low-latency connections is
                      essential for successful high-frequency trading.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Harnessing the Potential of High-Frequency
                    Trading
                  </h5>
                  <p>
                    High-frequency trading offers unparalleled speed and the
                    potential for significant profits. However, its complex
                    nature, coupled with regulatory scrutiny and potential
                    risks, demands a comprehensive understanding and approach.
                    As traders explore the realm of high-frequency trading,
                    staying informed about its pros, cons, and risks is key to
                    navigating this dynamic landscape.
                  </p>
                  <br />
                  <i>
                    Ready to explore the exciting world of high-frequency
                    trading? Join The Funded Hub and gain access to cutting-edge
                    technology, expert guidance, and a vibrant community of
                    traders dedicated to mastering the art of HFT.
                  </i>
                </div>

                <h6>
                  Please note that The Funded Hub strictly prohibits the use of
                  High-Frequency Trading (HFT) strategies. Any violation of this
                  policy will result in the deactivation of the trader&apos;s
                  account, and the associated challenge will be marked as
                  unsuccessful. At The Funded Hub, we prioritize ethical and
                  responsible trading practices to ensure a fair and supportive
                  trading environment for all our traders.
                </h6>
          `},{link:"blog-12",title:"Breakout Trading: Identifying and Riding Trends",para:`In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.`,date:"11 July 2023",data:`<p>
                  In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.
                </p>

                <div className="des">
                  <h5>Understanding Breakout Trading</h5>
                  <p>
                    Breakout trading is a strategy that focuses on identifying
                    and capitalizing on significant price movements, often
                    occurring after periods of consolidation or range-bound
                    trading. The idea is to enter the market when prices
                    &quot;break out&quot; from a well-defined range or pattern,
                    signaling the potential start of a new trend.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Breakout Opportunities</h4>
                  <p>
                    To effectively identify breakout opportunities, traders need
                    to be skilled at recognizing chart patterns and price levels
                    that indicate potential breakouts. Some commonly used
                    patterns include:
                  </p>
                  <ol>
                    <li>
                      <span>Triangles: </span>Ascending, descending, and
                      symmetrical triangles can indicate impending breakouts as
                      prices near the apex of the triangle.
                    </li>
                    <li>
                      <span>Rectangles: </span>These patterns are characterized
                      by horizontal support and resistance levels, indicating a
                      potential breakout when prices breach these boundaries.
                    </li>
                    <li>
                      <span>Channels: </span>Trading channels consist of
                      parallel lines that define a price range. A breakout
                      occurs when prices breach the channel&apos;s boundaries.
                    </li>
                    <li>
                      <span>Head and Shoulders: </span>This pattern includes a
                      left shoulder, head, and right shoulder, with a breakout
                      occurring when the neckline is breached.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Breakout Trading</h4>
                  <p>
                    There are several strategies traders employ to take
                    advantage of breakout opportunities:
                  </p>
                  <ol>
                    <li>
                      <span>Retracement Entries: </span>Traders enter the market
                      on a pullback after the initial breakout, aiming to catch
                      a more favorable entry point.
                    </li>
                    <li>
                      <span>Momentum Breakouts: </span>Traders enter as soon as
                      the breakout occurs, banking on strong momentum to
                      continue driving prices in the breakout direction.
                    </li>
                    <li>
                      <span>False Breakouts: </span>Also known as
                      &quot;fakeouts,&quot; this strategy involves entering the
                      market when a breakout occurs but quickly reverses.
                      Traders aim to catch the subsequent price movement.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Timing</h5>
                  <p>
                    As with any trading strategy, risk management is crucial in
                    breakout trading. False breakouts can occur, leading to
                    losses if not managed properly. Traders often use stop-loss
                    orders to protect against adverse price movements.
                  </p>
                  <br />
                  <p>
                    Additionally, timing is essential. Breakouts can occur
                    during periods of high volatility, often influenced by
                    economic releases or news events. Traders need to be aware
                    of these factors and consider the timing of their trades.
                  </p>
                </div>

                <div className="des">
                  <h5>Breakout Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we empower traders to explore various
                    trading strategies, including breakout trading, within a
                    supportive and regulated environment. Our comprehensive
                    approach to risk management and educational resources equips
                    traders with the tools they need to make informed decisions
                    and maximize their trading potential.
                  </p>
                </div>

                <div className="des">
                  <h5>Conclusion: Riding the Wave of Breakout Trading</h5>
                  <p>
                    Breakout trading offers traders the opportunity to capture
                    significant price movements and ride emerging trends. By
                    understanding chart patterns, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can harness the potential of breakout trading in the
                    forex market. Whether you&apos;re a novice or experienced
                    trader, mastering the art of identifying and riding trends
                    can open the door to exciting trading opportunities.
                  </p>
                  <br />
                  <i>
                    Are you ready to dive into the world of breakout trading?
                    Join The Funded Hub and experience the thrill of discovering
                    breakout opportunities and navigating the dynamic forex
                    market with confidence.
                  </i>
            </div>`},{link:"blog-13",title:"Range Trading: Capitalizing on Sideways Markets",para:`In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"8 July 2023",data:`<p>
                  In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.
                </p>

                <div className="des">
                  <h5>Understanding Range Trading</h5>
                  <p>
                    Range trading, also known as trading in a sideways or
                    consolidating market, involves identifying specific price
                    ranges where an asset&apos;s price oscillates between defined
                    support and resistance levels. Instead of relying on
                    directional trends, range traders aim to profit from price
                    fluctuations within these boundaries.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Range-Bound Markets</h4>
                  <p>
                    Recognizing range-bound markets is crucial for successful
                    range trading. Traders often look for the following
                    characteristics:
                  </p>

                  <ol>
                    <li>
                      <span>Horizontal Boundaries: </span>Prices move within
                      well-defined horizontal levels of support and resistance.
                    </li>
                    <li>
                      <span>Limited Volatility: </span>Market volatility is
                      relatively low, resulting in smaller price movements.
                    </li>
                    <li>
                      <span>Consolidation Patterns: </span>Chart patterns such
                      as rectangles, flags, and pennants indicate a
                      consolidation phase.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Range Trading</h4>
                  <p>
                    Range traders employ various strategies to capitalize on
                    sideways markets:
                  </p>
                  <ol>
                    <li>
                      <span>Support and Resistance Trading: </span>Traders buy
                      near support and sell near resistance, taking advantage of
                      price reversals within the range.
                    </li>
                    <li>
                      <span>Swing Trading: </span>Traders enter positions based
                      on price swings within the range, aiming to profit from
                      repetitive price movements.
                    </li>
                    <li>
                      <span>Bollinger Bands Strategy: </span>Bollinger Bands
                      help identify overbought and oversold conditions within a
                      range, guiding traders to enter and exit trades.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Considerations</h5>
                  <p>
                    While range trading may seem less risky than trend trading,
                    it still requires disciplined risk management. Breakouts
                    from the range can occur suddenly, leading to losses if not
                    anticipated. Traders should set stop-loss orders to protect
                    against unexpected price movements.
                  </p>
                  <br />
                  <p>
                    Moreover, patience is key. Range-bound markets can persist
                    for extended periods, requiring traders to wait for clear
                    signals before entering or exiting positions.
                  </p>
                </div>

                <div className="des">
                  <h5>Range Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we support traders in exploring diverse
                    trading strategies, including range trading, within a
                    regulated and collaborative environment. Our commitment to
                    education and risk management empowers traders to navigate
                    sideways markets with confidence and make informed
                    decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Sideways Markets with Range Trading
                  </h5>
                  <p>
                    Range trading offers traders a unique opportunity to profit
                    from price fluctuations within well-defined boundaries, even
                    when markets aren&apos;t experiencing strong trends. By
                    identifying range-bound markets, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can unlock the potential of range trading in the
                    forex market. Whether you&apos;re a beginner or experienced
                    trader, mastering the art of capitalizing on sideways
                    markets can enhance your trading toolkit.
                  </p>

                  <br />
                  <i>
                    Are you ready to excel in range trading? Join The Funded Hub
                    and embark on a journey to navigate sideways markets and
                    make the most of every trading opportunity.
                  </i>
            </div>`},{link:"blog-14",title:"MetaTrader 5: Advanced Features for Forex Traders",para:` In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"5 July 2023",data:`<p>
                  In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.
                </p>

                <div className="des">
                  <h5>Understanding Range Trading</h5>
                  <p>
                    Range trading, also known as trading in a sideways or
                    consolidating market, involves identifying specific price
                    ranges where an asset&apos;s price oscillates between defined
                    support and resistance levels. Instead of relying on
                    directional trends, range traders aim to profit from price
                    fluctuations within these boundaries.
                  </p>
                </div>

                <div className="para">
                  <h4>Identifying Range-Bound Markets</h4>
                  <p>
                    Recognizing range-bound markets is crucial for successful
                    range trading. Traders often look for the following
                    characteristics:
                  </p>
                  <ol>
                    <li>
                      <span>Horizontal Boundaries: </span>Prices move within
                      well-defined horizontal levels of support and resistance.
                    </li>
                    <li>
                      <span>Limited Volatility: </span>Market volatility is
                      relatively low, resulting in smaller price movements.
                    </li>
                    <li>
                      <span>Consolidation Patterns: </span>Chart patterns such
                      as rectangles, flags, and pennants indicate a
                      consolidation phase.
                    </li>
                  </ol>
                </div>

                <div className="para">
                  <h4>Strategies for Range Trading</h4>
                  <p>
                    Range traders employ various strategies to capitalize on
                    sideways markets:
                  </p>
                  <ol>
                    <li>
                      <span>Support and Resistance Trading: </span>Traders buy
                      near support and sell near resistance, taking advantage of
                      price reversals within the range.
                    </li>
                    <li>
                      <span>Swing Trading: </span>Traders enter positions based
                      on price swings within the range, aiming to profit from
                      repetitive price movements.
                    </li>
                    <li>
                      <span>Bollinger Bands Strategy: </span>Bollinger Bands
                      help identify overbought and oversold conditions within a
                      range, guiding traders to enter and exit trades.
                    </li>
                  </ol>
                </div>

                <div className="des">
                  <h5>Risk Management and Considerations</h5>
                  <p>
                    While range trading may seem less risky than trend trading,
                    it still requires disciplined risk management. Breakouts
                    from the range can occur suddenly, leading to losses if not
                    anticipated. Traders should set stop-loss orders to protect
                    against unexpected price movements.
                  </p>
                  <br />
                  <p>
                    Moreover, patience is key. Range-bound markets can persist
                    for extended periods, requiring traders to wait for clear
                    signals before entering or exiting positions.
                  </p>
                </div>

                <div className="des">
                  <h5>Range Trading with The Funded Hub</h5>
                  <p>
                    At The Funded Hub, we support traders in exploring diverse
                    trading strategies, including range trading, within a
                    regulated and collaborative environment. Our commitment to
                    education and risk management empowers traders to navigate
                    sideways markets with confidence and make informed
                    decisions.
                  </p>
                </div>

                <div className="des">
                  <h5>
                    Conclusion: Navigating Sideways Markets with Range Trading
                  </h5>
                  <p>
                    Range trading offers traders a unique opportunity to profit
                    from price fluctuations within well-defined boundaries, even
                    when markets aren&apos;t experiencing strong trends. By
                    identifying range-bound markets, employing effective
                    strategies, and practicing disciplined risk management,
                    traders can unlock the potential of range trading in the
                    forex market. Whether you&apos;re a beginner or experienced
                    trader, mastering the art of capitalizing on sideways
                    markets can enhance your trading toolkit.
                  </p>
                  <br />
                  <i>
                    Are you ready to excel in range trading? Join The Funded Hub
                    and embark on a journey to navigate sideways markets and
                    make the most of every trading opportunity.
                  </i>
            </div>`}];function ct(){const{pathname:t}=w(),a=dt.filter(({link:i})=>i===t.slice(6));return e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("section",{className:"single-blog relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper max-w-[75rem] m-auto w-full",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:"blog-img p-[0.03rem] rounded-md",children:e.jsx("img",{className:"rounded-md",src:J,alt:""})})}),e.jsxs("div",{className:"blog-content",children:[e.jsx("div",{className:"heading",children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.9rem] tracking-tight text-wht-gradient",children:a[0].title})}),e.jsxs("div",{className:"blog-wrap-data",children:[e.jsx("div",{className:"data",dangerouslySetInnerHTML:{__html:a[0].data}}),e.jsx("div",{className:"btn mt-10 m-auto max-w-[17rem]",children:e.jsx(c,{to:"/",className:"uppercase font-Montserrat text-sm font-semibold  transition-all duration-200 glowing-btn",children:"Get Funded now"})})]})]})]})})}),e.jsx(I,{})]})}function ht(){return e.jsx("div",{className:"App",children:e.jsx(xe,{children:e.jsxs(be,{children:[e.jsx(y,{path:"/",element:e.jsx(ka,{})}),e.jsx(y,{path:"login",element:e.jsx(Sa,{})}),e.jsx(y,{path:"contact",element:e.jsx(Ca,{})}),e.jsx(y,{path:"faq",element:e.jsx(Pa,{})}),e.jsx(y,{path:"checkout",element:e.jsx(nt,{})}),e.jsx(y,{path:"cookie-policy",element:e.jsx(Aa,{})}),e.jsx(y,{path:"privacy-policy",element:e.jsx(Fa,{})}),e.jsx(y,{path:"terms-condition",element:e.jsx(Ma,{})}),e.jsx(y,{path:"risk-disclosure",element:e.jsx(Ea,{})}),e.jsx(y,{path:"report-problem",element:e.jsx(Ia,{})}),e.jsx(y,{path:"blog",element:e.jsx(lt,{})}),e.jsx(y,{path:"blog/:blog",element:e.jsx(ct,{})}),e.jsxs(y,{path:"dashboard",element:e.jsx(qa,{}),children:[e.jsx(y,{path:"Profile",element:e.jsx(Ga,{})}),e.jsx(y,{path:"billing",element:e.jsx(_a,{})}),e.jsx(y,{path:"start-new-challenge",element:e.jsx(Ja,{})}),e.jsx(y,{path:"withdraw",element:e.jsx(Wa,{})}),e.jsx(y,{path:"top-up-reset",element:e.jsx($a,{})}),e.jsx(y,{path:"help",element:e.jsx(Ya,{})}),e.jsx(y,{path:"dashboard-contact",element:e.jsx(Va,{})}),e.jsx(y,{path:"certificate",element:e.jsx(tt,{})})]})]})})})}ge.createRoot(document.getElementById("root")).render(e.jsx(fe.StrictMode,{children:e.jsx(ht,{})}));
