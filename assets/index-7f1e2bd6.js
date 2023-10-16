import{r as i,j as e,a as ce}from"./react-530ba4e7.js";import{c as he}from"./react-dom-0ad81d1b.js";import{L as m,N as F,B as me}from"./react-router-dom-63c2ca8f.js";import{a as K}from"./axios-21b846bc.js";import{S as U,N as z,a as v,E as $}from"./swiper-0597d310.js";import{m as te}from"./framer-motion-62786b97.js";import{b as w,c as pe,O as ue,d as xe,e as y}from"./react-router-9fe743ea.js";import{T as fe}from"./react-ts-tradingview-widgets-353631ef.js";import{R as V,F as ge,a as ye,H as ve,b as be,C as je,B as we,P as Ne,c as ke,d as Te,A as Se,e as Ae,f as Pe,g as Ce,M as Me,h as Ee,i as Fe,j as Y,k as De}from"./react-icons-880c3b08.js";import{C as se,S as Oe}from"./country-state-city-7cb9a309.js";import{R,A as Ie,X as ie,Y as re,T as ne,a as Be,B as Le,C as He,b as Re,c as Ue,d as oe,e as ze,P as We,f as $e,L as le,g as qe,h as Ve,S as Ye}from"./recharts-ec943048.js";import{u as Ge,t as Xe}from"./react-timezone-select-c58820ac.js";import{c as Je,T as Ke,S as Qe,P as _e}from"./@mui-5f31fee6.js";import"./@babel-15fe5a24.js";import"./scheduler-765c72db.js";import"./@remix-run-d753ad9e.js";import"./ssr-window-c9202916.js";import"./classnames-ba74963b.js";import"./react-resize-detector-40b59716.js";import"./lodash-6ea61103.js";import"./react-smooth-def4a408.js";import"./prop-types-77cd915a.js";import"./fast-equals-a0711cdd.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./reduce-css-calc-1b1f81b2.js";import"./css-unit-converter-9e08bb2c.js";import"./eventemitter3-16d8dc20.js";import"./spacetime-5ab9584c.js";import"./timezone-soft-f8ea18f8.js";import"./clsx-1229b3e0.js";import"./@emotion-903f1ee5.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./stylis-79144faa.js";import"./react-transition-group-12af8031.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const B="/assets/logo-f6759efc.webp",Ze="/assets/dashboard-9de69831.webp",g="/assets/arrow-cfc95aca.svg",L="/assets/circle-11e6800b.png",ea="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAg4KEgvy8yhPAAAGc0lEQVR42u2de2wURRzHv7NQKFCCVIT6ALlHeYgkBtKCUCDxUdsYbTEgqBCEiBjF+CQ2RIwxEYWEh8GGEI3GB2pKBBswYrFChFaggNFYFbm9K5ZQUoOPYukDu+MfO1eud9Sbdufudwvz/Wce+d3k9/3cze7t7O0cg6SCM/ly5GEEDNlXJEQt+NxY6vlL3YBMJmhv31Gb8Bip8UjVGPnqEEi9nyM3pJB9IMeqCF2lajCJT0BoivWt3CcliVL2KegbP8RaJux38I2oZBfITK/CzM56jlURUoJAAgCmiXKL/3ky8wDMR7s0FSGQOAawYaJygNL+JaTkWCABgIsY9i+1Y6EanFOHgPas3iux73gBmjoRVNZnXmEAAH81L+xEMKl9jxMErgSgEoFLAahD4FoAqhC4GIAaBK4GIBCET4q9QuByAIC/mhc4QeB6AE4RXAYAnCG4LAA4QeAiALxVlEO7QRB5ONwte43gIgDGSVEpPHHTJRFURSCQvkySWQ9IEbFd/EUAQIZxJPANa7pUDD/FxkcgkFgvcBEAz6Hgbl4AABjA7uoGUmQjh7+BRfFGddEUANhihHoSz++MH+MqAJ4zfCor78EL0uOHuGgKAIC/EcUnJvQpxCj07z6Ke3GH7IguAwAA2bWo/f+I4FwuDcBVUyAR0gCoE6CWBkCdALU0AOoEqKUBUCdALUXfBH++uv98fisy0YBK69PsNmpbSQZgLsYGPkQ0lhivmgt9qXYrvVspmAKBJ/EOhkR0jEZlcGavh3MbgOBYtj6msx/fWj+A2pqcnE+BZ8Nj8IPsGPLhBwDccOEhvN018ESRMU69Ad8aYgA8X1S2+eYxfnrg+SP2qhzPjwZgLMAc9QDgEIDzY8C1ovyEceC689gh2tcnwGwC5BxAeHX2ZrtgE0X7b2prcnJ+DDiMuwEAJYEWXtNnNr9H9B+KiTRxjNpuAgBYbxk2gAFsLQMPd7cZ70VH+kpQQm03Vo6nQHY5PovtZa946qitJQkAMGgBdnbp4FjjeY3aWBIBZDV7i9g8fI02AE3Ybk33lTDueNgkScm1AOMoQxlwZlBWM7Whnkrp5bD77Ov1AA1AA6BOgFoaAHUC1FJ2ezw4omMqG4ozbQcm/ENtKukAQqOtdbzYMAAgvdXccmHVuHNOx0yWFEyB0C1WDe7rHCkdT6VVHR/maEg3AajNsMoRbXdi2gfUxmTleAqkL8coUbVwFtfYVV5g3u6r7BoZGG5lqDcwJkgMAHNFedwo8NQFprEvkSH6owCw0j6JWBR1+FCv82PAGLvgqz11gL+avSvyGpsAswmQuu8B4p2wUu0x64QDOC78r6zzAGYee9hu81+orcnJ+Y2RMjYZADCmwzTPXjwf8LKYyCesF6jtJgBARmnz47gRAMAiTodf+PdGR/ob0UhtN1aOp0BWMyuKMfZD+0JqY0kDAHi/Rw62oUM0W7C+dfr4s9TGZKXkWsD3G+4PDDemWJlGw8Aqd60MKrsa9DdG3R1wia749QANgDoBamkA1AlQSwNQOVhtAhY8XAGAs8D8wD6zLf2c2WTuMPOoTSUZQG1GcCf7mM1CPwCDUYz9wbXcNasCCgD03yp+JtUpviK0ktpY0gAEitm9sb38pToPtTU5Ob4WYI+ISgtb1XHUKMLTAIB+HYvwctdI83VIPMvbU/kmEwPAFLvgq33rAOwLeMUnIjc2V0xSD8CpnB8DBtsF+0m0fxTlkN4M5kYAp0X5AGfA6YGYbTf5KWprcnI+BSqwDAAwJ3jQPNqSz3x2t1ERHWh9aByhtpsIAOuxBGkAgNyIeV+f9lF0YHY5evLsf5LkeAr4fmXPxHS24cGRLdTWkgQA8JbyRfjzYpsF+W3ueWhKyZqg//36Xe3zMA2ZaOBftW6f0E5tK8kAgJF/YDM2U5vpjfR6AHUC1NIAqBOglgZAnQC1rngAev8AFYPo/QP0/gFR0vsH6P0D9P4Bev8AvX9ATKTeP0DvH5CC0vsHOB9C7x+g9w8Iy3329XqABqABUCdALQ2AOgFqyfzlpmWX3DVb8YczDWfuEAD/XVRmUBuT1iy7sCQe05N5V6thL2UtM1v5HsK/3ZUST2P5WCoaVfHjJX7TG8zlB1Puj5elWCDXF/dnWRJTwHuYbaL20ittjG9f8ixw8jmUUrvpqdgm7wqpONkBzTy23JrBslL+xGmhAfv5m36J+Q8A/wHDzAv/plmRIQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xNFQxMDoxODoxMSswMDowMBkc9m8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTRUMTA6MTg6MTErMDA6MDBoQU7TAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",Q="/assets/meta-trader-5-ec51858e.webp",_="/assets/meta-trader-4-873c0a4f.webp";function de({clr:t}){const[a,s]=i.useState("200000"),[r,o]=i.useState("0-0"),[l,d]=i.useState("0-0"),[c,p]=i.useState("5"),[n,u]=i.useState("12"),[N,C]=i.useState("10-5"),[M,E]=i.useState(0),[T,j]=i.useState("meta-5"),h={5e3:{maxDailyLossVal:["$ 250 (5%)","$ 200 (4%)"],maxOverallLossVal:["$ 600 (12%)","$ 500 (10%)","$ 400 (8%)"],profitTargetVal:["$ 500 (10%)","$ 400 (8%)","$ 250 (5%)"],monthlySalaryVal:["$ 50.00/Month"]},1e4:{maxDailyLossVal:["$ 500 (5%)","$ 400 (4%)"],maxOverallLossVal:["$ 1,200 (12%)","$ 1,000 (10%)","$ 800 (8%)"],profitTargetVal:["$ 1,000 (10%)","$ 800 (8%)","$ 500 (5%)"],monthlySalaryVal:["$ 100.00/Month"]},25e3:{maxDailyLossVal:["$ 1,250 (5%)","$ 1,000 (4%)"],maxOverallLossVal:["$ 3,000 (12%)","$ 2,500 (10%)","$ 2,000 (8%)"],profitTargetVal:["$ 2,500 (10%)","$ 2,000 (8%)","$ 1,250 (5%)"],monthlySalaryVal:["$ 250.00/Month"]},5e4:{maxDailyLossVal:["$ 2,500 (5%)","$ 2,000 (4%)"],maxOverallLossVal:["$ 6,000 (12%)","$ 5,000 (10%)","$ 4,000 (8%)"],profitTargetVal:["$ 5,000 (10%)","$ 4,000 (8%)","$ 2,500 (5%)"],monthlySalaryVal:["$ 500.00/Month"]},1e5:{maxDailyLossVal:["$ 5,000 (5%)","$ 4,000 (4%)"],maxOverallLossVal:["$ 12,000 (12%)","$ 10,000 (10%)","$ 8,000 (8%)"],profitTargetVal:["$ 10,000 (10%)","$ 8,000 (8%)","$ 5,000 (5%)"],monthlySalaryVal:["$ 1000.00/Month"]},2e5:{maxDailyLossVal:["$ 10,000 (5%)","$ 8,000 (4%)"],maxOverallLossVal:["$ 24,000 (12%)","$ 20,000 (10%)","$ 16,000 (8%)"],profitTargetVal:["$ 20,000 (10%)","$ 16,000 (8%)","$ 10,000 (5%)"],monthlySalaryVal:["$ 2000.00/Month"]}};i.useEffect(()=>{const x=`https://development-api.thefundedhub.com/v1/website/prices?phaseCount=2&startingCapital=${a}&minimumTradingDays=${l}&maximumTradingDays=${r}&profitTargetPercentage=${N}&maximumDailyLossPercentage=${c}&maximumTotalLossPercentage=${n}`;K.get(x).then(O=>{E(O.data.totalPrice)}).catch(O=>{console.error("There was an error!",O)})},[a,c,n,N,l,r]);const S=()=>{K.post("https://development-api.thefundedhub.com/v1/website/purchases",{email:"johndoe@mail.com",firstName:"John",lastName:"doe",paymentProvider:"STRIPE",platform:"MT5",phaseCount:"2",startingCapital:a,minimumTradingDays:l,maximumTradingDays:r,profitTargetPercentage:N,maximumDailyLossPercentage:c,maximumTotalLossPercentage:n}).then(x=>{window.location.replace(x.data.data.paymentUrl)})};return e.jsxs("div",{id:"price-table",className:"price-table",children:[e.jsxs("div",{className:"desktop-content relative z-[999] hidden lg:grid gap-2 w-full backdrop-blur-3xl rounded-2xl font-Montserrat",children:[e.jsxs("div",{className:"left grid grid-cols-5 items-center justify-start gap-2  font-medium",children:[e.jsxs("div",{className:`heading grid col-span-3 gap-5 p-5 h-full rounded-3xl ${t}`,children:[e.jsxs("h3",{className:"font-light",children:[e.jsx("b",{className:"font-bold",children:"Step 1: "})," Choose your Balance"]}),e.jsxs("div",{className:"prices flex flex-wrap gap-4",children:[e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a==="5000"?"border-primary":"border-primary/10"}`,onClick:()=>s("5000"),children:"$ 5,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a==="10000"?"border-primary":"border-primary/10"}`,onClick:()=>s("10000"),children:"$ 10,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a==="25000"?"border-primary":"border-primary/10"}`,onClick:()=>s("25000"),children:"$ 25,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a==="50000"?"border-primary":"border-primary/10"}`,onClick:()=>s("50000"),children:"$ 50,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a==="100000"?"border-primary":"border-primary/10"}`,onClick:()=>s("100000"),children:"$ 100,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${a==="200000"?"border-primary":"border-primary/10"}`,onClick:()=>s("200000"),children:"$ 200,000"})})]})]}),e.jsxs("div",{className:`right-inside p-5 rounded-3xl col-span-2 h-full ${t}`,children:[e.jsx("div",{className:"heading",children:e.jsxs("h3",{className:"font-light",children:[e.jsx("b",{className:"font-bold",children:"Step 2: "})," Choose your Platform"]})}),e.jsxs("div",{className:"tranders flex gap-3 items-center w-full mt-2 relative z-30",children:[e.jsxs("div",{className:`img scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative group ${T==="meta-4"?"border-primary":"border-transparent "}`,children:[e.jsx("img",{className:"max-w-[7rem] w-full relative opacity-20",src:_,alt:"scop-markets"}),e.jsx("div",{className:"coming-soon absolute transition-all duration-200 opacity-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 whitespace-nowrap -bottom-[1rem]",children:e.jsx("h6",{className:"text-[0.65rem]",children:"Available Soon!"})})]}),e.jsx("div",{className:`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary cursor-pointer ${T==="meta-5"?"border-primary":"border-transparent "}`,onClick:()=>j("meta-5"),children:e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]",src:Q,alt:"meta-trader-5"})})]})]})]}),e.jsxs("div",{className:`grid rounded-3xl w-full p-7 ${t}`,children:[e.jsx("div",{className:"heading mb-8",children:e.jsxs("h3",{children:[e.jsx("b",{className:"font-bold",children:"Step 3:"})," Customize your Challenge"]})}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[50]",children:[e.jsxs("span",{className:"col-span-4 text-start flex items-center gap-1",children:["Trading ",e.jsx("b",{className:"font-bold",children:" Period "}),":"]}),e.jsx("div",{className:"col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] flex justify-center before:-top-10 before:text-[0.9rem] whitespace-nowrap !font-normal",children:e.jsxs("div",{className:"wrap relative",children:[e.jsxs("select",{id:"treading-period",name:"treading-period",onChange:x=>o(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"0-0",children:"Unlimited"}),e.jsx("option",{value:"45-45",children:"45 Days"}),e.jsx("option",{value:"30-60",children:"30 Days"})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})}),e.jsx("div",{className:"col-span-2 flex justify-center",children:e.jsx("div",{className:"relative before:absolute before:font-bold before:content-['Phase_2'] flex justify-center before:-top-10 before:text-[0.9rem] font-normal whitespace-nowrap",children:e.jsx("div",{className:"col-span-2 flex justify-center items-center",children:e.jsx("span",{className:"priceVal",children:r==="0-0"?"Unlimited":r==="45-45"?"45 Days":"60 Days"})})})}),e.jsx("span",{className:"col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10 flex justify-center items-center",children:"Unlimited"})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-40",children:[e.jsxs("span",{className:"col-span-4 text-start flex items-center gap-1",children:["Minimum Trading ",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx("span",{className:"col-span-2 flex justify-center ",children:e.jsxs("div",{className:"wrap relative",children:[e.jsxs("select",{id:"treading-period",name:"treading-period",onChange:x=>d(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"0-0",children:"0 Days"}),e.jsx("option",{value:"3-3",children:"3 Days"}),e.jsx("option",{value:"5-5",children:"5 Days"})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})}),e.jsx("span",{className:"col-span-2 flex justify-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:l==="0-0"?"0 Days":l==="3-3"?"3 Days":"5 Days"})}),e.jsx("span",{className:"col-span-2 flex justify-center items-center",children:"-"})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-30",children:[e.jsxs("span",{className:"col-span-4 text-start mt-[0.13rem] flex items-center gap-1",children:["Max ",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{className:"col-span-2 ",children:e.jsxs("span",{className:"priceVal inline-flex justify-center items-center relative",children:[e.jsxs("select",{id:"daily-loss",name:"daily-loss",onChange:x=>p(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"5",children:h[a].maxDailyLossVal[0]}),e.jsx("option",{value:"4",children:h[a].maxDailyLossVal[1]})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:c==="5"?h[a].maxDailyLossVal[0]:h[a].maxDailyLossVal[1]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center gap-1",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:c==="5"?h[a].maxDailyLossVal[0]:h[a].maxDailyLossVal[1]})})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-20 ",children:[e.jsxs("span",{className:"col-span-4 text-start pt-[0.1rem] flex items-center gap-1",children:["Max ",e.jsx("b",{className:"font-bold",children:"Overall "})," Loss:"]}),e.jsx("div",{className:"col-span-2",children:e.jsxs("span",{className:"priceVal inline-flex justify-center items-center relative",children:[e.jsxs("select",{id:"daily-loss",name:"daily-loss",onChange:x=>u(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"12",children:h[a].maxOverallLossVal[0]}),e.jsx("option",{value:"10",children:h[a].maxOverallLossVal[1]}),e.jsx("option",{value:"8",children:h[a].maxOverallLossVal[2]})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:e.jsx("span",{children:n==="12"?h[a].maxOverallLossVal[0]:n==="10"?h[a].maxOverallLossVal[1]:h[a].maxOverallLossVal[2]})})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center gap-1",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:n==="12"?h[a].maxOverallLossVal[0]:n==="10"?h[a].maxOverallLossVal[1]:h[a].maxOverallLossVal[2]})})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-10",children:[e.jsxs("span",{className:"col-span-4 text-start mt-[0.13rem] flex items-center gap-1",children:["Profit ",e.jsx("b",{className:"font-bold",children:"Target"}),":"]}),e.jsx("div",{className:"col-span-2",children:e.jsxs("span",{className:"priceVal inline-flex justify-center items-center relative",children:[e.jsxs("select",{id:"daily-loss",name:"daily-loss",onChange:x=>C(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"10-5",children:h[a].profitTargetVal[0]}),e.jsx("option",{value:"8-5",children:h[a].profitTargetVal[1]})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center gap-1",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:h[a].profitTargetVal[2]})}),e.jsx("span",{className:"col-span-2 flex justify-center items-center",children:"-"})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[5]",children:[e.jsx("span",{className:"col-span-4 text-start mt-[0.13rem]",children:"Leverage:"}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"1:100"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"1:100"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"1:100"})})]}),e.jsxs("div",{className:"item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[0]",children:[e.jsxs("span",{className:"col-span-4 text-start mt-[0.13rem]",children:["Monthly ",e.jsx("b",{className:"font-bold",children:"Salary"}),":"]}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"-"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:"-"})}),e.jsx("div",{className:"col-span-2",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:h[a].monthlySalaryVal[0]})})]})]}),e.jsxs("div",{className:`bottom flex justify-between py-7 px-12 rounded-3xl ${t}`,children:[e.jsxs("div",{className:"wrap grid gap-1",children:[e.jsxs("div",{className:"refund flex items-center",children:[e.jsx("b",{className:"text-lg font-codePro",children:"Refundable fee:"}),e.jsxs("h4",{className:"text-[1.4rem] font-extrabold ml-4 w-28",children:["$ ",M]})]}),e.jsxs("div",{className:" font-Montserrat text-sm",children:["Or pay in 4 installments from"," ",e.jsxs("span",{className:"font-bold",children:["$",M/4]})," / Month"]})]}),e.jsx("div",{className:"btn flex justify-start items-center",children:e.jsx("div",{onClick:S,className:"glowing-btn",children:"Get Funded Now"})})]})]}),e.jsxs("div",{className:"mobile-content relative z-20 lg:hidden flex flex-wrap justify-start items-center mt-2",children:[e.jsx("div",{className:"top font-medium w-full",children:e.jsx("div",{className:"heading flex justify-center",children:e.jsxs("div",{className:"prices grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${a==="5000"?"border-primary":"border-primary/10"}`,onClick:()=>s("5000"),children:"$ 5,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${a==="10000"?"border-primary":"border-primary/10"}`,onClick:()=>s("10000"),children:"$ 10,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${a==="25000"?"border-primary":"border-primary/10"}`,onClick:()=>s("25000"),children:"$ 25,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${a==="50000"?"border-primary":"border-primary/10"}`,onClick:()=>s("50000"),children:"$ 50,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${a==="100000"?"border-primary":"border-primary/10"}`,onClick:()=>s("100000"),children:"$ 100,000"})}),e.jsx("div",{className:"price",children:e.jsx("button",{className:`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${a==="200000"?"border-primary":"border-primary/10"}`,onClick:()=>s("200000"),children:"$ 200,000"})})]})})}),e.jsxs("div",{className:"tranders grid items-center w-full relative z-30",children:[e.jsxs("p",{className:"mt-7 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 2:"})," ","  ","Customize your Platform:"]}),e.jsxs("div",{className:"wrap flex justify-center gap-3 mt-4",children:[e.jsxs("div",{className:`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative price-btn-shadow  ${T==="meta-4"?"border-primary":"border-transparent "}`,children:[e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]f opacity-60 price-btn-shadow",src:_,alt:"scop-markets"}),e.jsx("div",{className:"absolute transition-all duration-200  left-1/2 transform -translate-x-1/2 whitespace-nowrap -bottom-[1rem]",children:e.jsx("h6",{className:"text-[0.65rem]",children:"Available Soon!"})})]}),e.jsx("div",{className:`img transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary price-btn-shadow ${T==="meta-5"?"border-primary":"border-transparent"}`,onClick:()=>j("meta-5"),children:e.jsx("img",{className:"max-w-[7rem] w-full opacity-[0.87]",src:Q,alt:"meta-trader-5"})})]})]}),e.jsx("div",{className:"step w-full",children:e.jsxs("p",{className:"mt-10 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 3:"})," ","  ","Customize your Challenge:"]})}),e.jsx("div",{className:"flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-screen sm:w-[70vw] sm:m-auto relative z-20",children:e.jsxs(U,{navigation:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",modules:[z],spaceBetween:30,className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-3 xs:px-6 mt-4 text-white",children:[e.jsx(v,{children:e.jsxs("div",{className:"phase1 pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl home-item-bg-clr h-full card-shadow",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:"Phase 1"})}),e.jsxs("div",{className:"items grid gap-4 px-4",children:[e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Trading",e.jsx("b",{className:"font-bold",children:" Period"}),":"]}),e.jsx("div",{children:e.jsx("div",{className:"wrap flex gap-2 justify-center items-center relative z-[10]",children:e.jsxs("div",{className:"wrap relative",children:[e.jsxs("select",{id:"treading-period",name:"treading-period",onChange:x=>o(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"0-0",children:"Unlimited"}),e.jsx("option",{value:"45-45",children:"45 Days"}),e.jsx("option",{value:"30-60",children:"30 Days"})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[9]",children:[e.jsxs("span",{children:["Min. Trading",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsxs("div",{className:"wrap relative",children:[e.jsxs("select",{id:"treading-period",name:"treading-period",onChange:x=>d(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"0-0",children:"0 Days"}),e.jsx("option",{value:"3-3",children:"3 Days"}),e.jsx("option",{value:"5-5",children:"5 Days"})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[8]",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{children:e.jsxs("span",{className:"priceVal inline-flex justify-center items-center relative",children:[e.jsxs("select",{id:"daily-loss",name:"daily-loss",onChange:x=>p(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"5",children:h[a].maxDailyLossVal[0]}),e.jsx("option",{value:"4",children:h[a].maxDailyLossVal[1]})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[7]",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Overall "})," Loss:"]}),e.jsx("div",{children:e.jsxs("span",{className:"priceVal inline-flex justify-center items-center relative",children:[e.jsxs("select",{id:"daily-loss",name:"daily-loss",onChange:x=>u(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"12",children:h[a].maxOverallLossVal[0]}),e.jsx("option",{value:"10",children:h[a].maxOverallLossVal[1]}),e.jsx("option",{value:"8",children:h[a].maxOverallLossVal[2]})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[6]",children:[e.jsxs("span",{children:["Profit ",e.jsx("b",{className:"font-bold",children:" Target "}),":"]}),e.jsx("div",{children:e.jsxs("span",{className:"priceVal inline-flex justify-center items-center relative",children:[e.jsxs("select",{id:"daily-loss",name:"daily-loss",onChange:x=>C(x.target.value),className:"price-table-select",children:[e.jsx("option",{value:"10-5",children:h[a].profitTargetVal[0]}),e.jsx("option",{value:"8-5",children:h[a].profitTargetVal[1]})]}),e.jsx("div",{className:"arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2",children:e.jsx("img",{className:"w-[0.9rem]",src:g,alt:"arrow"})})]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsx("span",{children:"Leverage:"}),e.jsx("div",{children:e.jsx("span",{className:"sm:w-[136px] flex justify-center",children:"1:100"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Monthly ",e.jsx("b",{className:"font-bold",children:" Salary "}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"sm:w-[136px] flex justify-center",children:"-"})})]})]})]})}),e.jsx(v,{children:e.jsxs("div",{className:"phase-2 pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl home-item-bg-clr h-full card-shadow",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:"Phase 2"})}),e.jsxs("div",{className:"items grid gap-6 px-4",children:[e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Trading",e.jsx("b",{className:"font-bold",children:" Period"}),":"]}),e.jsx("div",{children:e.jsx("div",{className:"wrap flex gap-2 justify-center items-center relative z-[10]",children:e.jsx("div",{className:"col-span-2 flex justify-center items-center sm:w-[136px]",children:e.jsx("span",{className:"priceVal",children:r==="0-0"?"Unlimited":r==="45-45"?"45 Days":"60 Days"})})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center relative z-[9]",children:[e.jsxs("span",{children:["Min. Trading",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx("span",{className:"priceVal inline-flex justify-center items-center sm:w-[136px]",children:l==="0-0"?"0 Days":l==="3-3"?"3 Days":"5 Days"})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{children:e.jsx("span",{className:"priceVal sm:w-[136px] flex justify-center",children:e.jsx("span",{className:"priceVal inline-flex justify-center items-center",children:c==="5"?h[a].maxDailyLossVal[0]:h[a].maxDailyLossVal[1]})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Overall "})," Loss:"]}),e.jsx("div",{children:e.jsx("span",{className:"priceVal sm:w-[136px] flex justify-center",children:e.jsx("span",{children:n==="12"?h[a].maxOverallLossVal[0]:n==="10"?h[a].maxOverallLossVal[1]:h[a].maxOverallLossVal[2]})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Profit",e.jsx("b",{className:"font-bold",children:" target "}),":"]}),e.jsx("span",{className:"priceVal sm:w-[136px] flex justify-center",children:h[a].profitTargetVal[2]})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsx("span",{children:"Leverage:"}),e.jsx("div",{children:e.jsx("span",{className:"sm:w-[136px] flex justify-center",children:"1:100"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Monthly ",e.jsx("b",{className:"font-bold",children:" Salary "}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"sm:w-[136px] flex justify-center",children:"-"})})]})]})]})}),e.jsx(v,{children:e.jsxs("div",{className:"funded pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl home-item-bg-clr h-full card-shadow",children:[e.jsx("div",{className:"heading pb-3 mt-2 ",children:e.jsx("h3",{className:"px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold",children:"Funded"})}),e.jsxs("div",{className:"items grid gap-6 px-4",children:[e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Trading",e.jsx("b",{className:"font-bold",children:" Period"}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:"Unlimited"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Min. Trading",e.jsx("b",{className:"font-bold",children:" Days"}),":"]}),e.jsx("span",{className:"w-[122px] flex justify-center",children:"-"})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Daily "})," Loss:"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:c==="5"?h[a].maxDailyLossVal[0]:h[a].maxDailyLossVal[1]})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Max",e.jsx("b",{className:"font-bold",children:" Overall "})," Loss:"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:e.jsx("span",{children:n==="12"?h[a].maxOverallLossVal[0]:n==="10"?h[a].maxOverallLossVal[1]:h[a].maxOverallLossVal[2]})})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Profit",e.jsx("b",{className:"font-bold",children:" Target "}),":"]}),e.jsx("span",{className:"w-[122px] flex justify-center",children:"-"})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsx("span",{children:"Leverage:"}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] flex justify-center",children:"1:100"})})]}),e.jsxs("div",{className:"item flex justify-between gap-6 items-center",children:[e.jsxs("span",{children:["Monthly ",e.jsx("b",{className:"font-bold",children:" Salary "}),":"]}),e.jsx("div",{children:e.jsx("span",{className:"w-[122px] whitespace-nowrap flex justify-center",children:h[a].monthlySalaryVal[0]})})]})]})]})})]})}),e.jsxs("div",{className:"wrap mt-6 grid sm:grid-cols-2 justify-center items-center gap-4 w-full",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"refund flex items-center justify-center",children:[e.jsx("span",{className:"!text-lg",children:"Refundable fee: "}),e.jsxs("h4",{className:"text-[1.5rem] font-Montserrat font-extrabold ml-4",children:["$ ",M]})]})}),e.jsx("div",{className:"btn flex w-full justify-center",children:e.jsx(m,{to:"/login",className:"font-Montserrat text-xs font-bold py-4 px-12  rounded-3xl glowing-btn uppercase",children:"Get Funded Now"})})]})]})]})}function I({delay:t,cls:a,children:s}){return e.jsx(te.div,{className:a||"",whileInView:{opacity:1,y:0,transition:{duration:.3,delay:t,bounce:.5,ease:"easeOut"}},viewport:{once:!0},initial:{opacity:0,y:-200},children:s})}function aa(){return e.jsx("section",{className:"prices relative pt-20 sm:pt-32",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-20 grid 2xl:px-36",children:[e.jsxs("div",{className:"heading flex flex-col sm:text-center",children:[e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] text-wht-gradient",children:"Get Funded Now"}),e.jsx("p",{className:"mt-2 hidden sm:block",children:"Choose your favorite account size, start trading, earn profit-splits and scale."}),e.jsxs("p",{className:"sm:hidden mt-2 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2",children:[" ",e.jsx("b",{className:"font-bold",children:"Step 1:"})," Choose your balance:"]})]}),e.jsx("div",{className:"wrap sm:max-w-[70rem] sm:w-full sm:m-auto sm:pt-4",children:e.jsx(I,{children:e.jsx(de,{clr:"home-bg-clr-shadow"})})})]})})})}function A(){const[t,a]=i.useState(!1),{pathname:s}=w();return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"transition-all duration-300 border-b border-transparent py-3 sm:py-6 bg-transparent z-[9999] absolute left-0 right-0 top-0",children:[e.jsx("div",{className:"text-xl text-all bg-all/10 py-4 px-4 mb-6 text-center hidden",children:"We do NOT give out any real capital for management. All accounts are DEMO."}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper flex justify-between z-[999]",children:[e.jsx(m,{to:"/",className:"main-logo",children:e.jsx("img",{className:"max-w-[8rem] sm:max-w-[10rem]",src:B,alt:"TheFundedHub"})}),e.jsxs("nav",{className:"nav-links text-wht font-light flex justify-center items-center",children:[e.jsxs("ul",{className:"hidden md:flex gap-6 justify-center items-center text-sm",children:[e.jsx("li",{children:e.jsx(m,{to:"/blog",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${s==="/blog"?"text-white":"text-white/40"}`,children:"Blog"})}),e.jsx("li",{children:e.jsx(m,{to:"/faq",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${s==="/faq"?"text-white":"text-white/40"}`,children:"FAQ"})}),e.jsx("li",{children:e.jsx(m,{to:"/contact",className:`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${s==="/contact"?"text-white":"text-white/40"}`,children:"Contact us"})}),e.jsx("li",{className:"relative",children:e.jsx(m,{to:"/login",className:"bg-primary/20 md:bg-transparent flex justify-center items-center py-2.5 px-7 sm:px-12 hover:text-white/70 text-white transition-all duration-200 rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.9rem] w-full glowing-btn capitalize pb-[0.725rem]",children:"Personal Hub"})})]}),e.jsx("div",{className:"menu-bar md:hidden",children:e.jsx("svg",{onClick:()=>a(!t),stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1.8em",width:"1.8em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})})})]})]})})]}),e.jsxs("div",{className:"mobile-nav z-[9999] relative",children:[e.jsx("svg",{onClick:()=>a(!1),className:`text-wht fixed right-[5%] top-8 z-[88] transition-all duration-500 ${t?"opacity-100 rotate-180 visible":"opacity-0 invisible"}`,stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 15 15",height:"2.2em",width:"2.2em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"})}),e.jsx("div",{onClick:()=>a(!1),className:`darkbg fixed inset-0 bg-main-bg/20 bottom-0  backdrop-blur-xl z-[77] transition-all duration-500 ${t?"opacity-100 visible":"opacity-0 invisible"}`}),e.jsx("nav",{className:`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-main-bg/30 z-[99] transition-all duration-500 ${t?"left-0 opacity-100":"-left-full opacity-0"}`,children:e.jsxs("div",{className:"wrapper",children:[e.jsx(m,{to:"/",className:"logo block pt-6 px-6",children:e.jsx("img",{className:"max-w-[10rem] w-full md:hidden",src:B,alt:"TheFundedHub"})}),e.jsxs("ul",{className:"flex flex-col justify-start text-sm mt-6",children:[e.jsx("li",{children:e.jsx(m,{to:"/blog",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-y border-light/30 transition-all duration-300",children:"Blog"})}),e.jsx("li",{children:e.jsx(m,{to:"/faq",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300",children:"FAQ"})}),e.jsx("li",{children:e.jsx(m,{to:"/contact",className:"flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300",children:"Contact Us"})}),e.jsx("li",{className:"flex mt-4 pl-6",children:e.jsx(m,{to:"/login",className:"flex justify-center items-center font-Montserrat font-semibold rounded-3xl w-44 h-10 glowing-btn capitalize text-base",children:"Personal Hub"})})]})]})})]})]})}function ta(){return e.jsxs("section",{className:"evaluation relative pt-12 sm:pt-16",children:[e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-40",children:[e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Evaluation Program"}),e.jsx("div",{className:"paras mt-2",children:e.jsxs("p",{children:["Prove your trading skills by passing our two phases Evaluation Program. ",e.jsx("br",{})," Configure your own target profits and drawdown limits, follow simple rules and start trading with our capital."," ",e.jsx("br",{})," You earn up to 90% of the profits."]})})]}),e.jsxs("div",{className:"cards relative z-30 hidden lg:flex gap-8 md:gap-12 justify-center items-center mt-10",children:[e.jsx("div",{className:"img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]",children:e.jsxs(I,{delay:.4,cls:"card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] social-shadow border-all/20 border w-full max-w-[20rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 1"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"Starting your Evaluation process"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"8%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx("a",{href:"#price-table",className:"uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn",children:"Customize Challenge"})})]})}),e.jsx("div",{className:"img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]",children:e.jsxs(I,{delay:.5,cls:"card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] social-shadow border-all/20 border w-full max-w-[20rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 2"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"One step away to be a TFH Funded Trader"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"5%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"-"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx("a",{href:"#price-table",className:"uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn",children:"Customize Challenge"})})]})}),e.jsx("div",{className:"img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]",children:e.jsxs(I,{delay:.6,cls:"card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] social-shadow border-all/20 border w-full max-w-[20rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Funded"}),e.jsxs("span",{className:"text-sm flex font-codePro font-light",children:["Trade with our ",e.jsx("br",{})," funds in the Hub"]})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end relative before:absolute before:content-['up_to'] before:font-codePro before:-top-1/2 before:text-xs",children:"90/10"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Profit Share"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Refundable registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx("a",{href:"#price-table",className:"uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn",children:"Customize Challenge"})})]})})]}),e.jsx("div",{className:"cards lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-6",children:e.jsxs(U,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[$,z],className:"evaluation-slider flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full",children:[e.jsx(v,{className:"flex justify-center items-center max-w-[27.125rem]",children:e.jsxs("div",{className:"card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 1"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"Starting your Evaluation process"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"8%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx("a",{href:"#price-table",className:"uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn",children:"Customize Challenge"})})]})}),e.jsx(v,{className:"flex justify-center items-center max-w-[27.125rem]",children:e.jsxs("div",{className:"card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Phase 2"}),e.jsx("span",{className:"text-sm flex font-codePro font-light",children:"One step away to be our Funded Trader"})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"5%"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Target Profit"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Maximum Overall Loss"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"-"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx("a",{href:"#price-table",className:"uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn",children:"Customize Challenge"})})]})}),e.jsx(v,{className:"flex justify-center items-center max-w-[27.125rem]",children:e.jsxs("div",{className:"card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]",children:[e.jsxs("div",{className:"card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black",children:[e.jsxs("div",{className:"left max-w-[10rem]",children:[e.jsx("h4",{className:"font-codeProBold",children:"Funded"}),e.jsxs("span",{className:"text-sm flex font-codePro font-light",children:["Trade with our ",e.jsx("br",{})," funds in the Hub"]})]}),e.jsx("div",{className:"right grid",children:e.jsxs("div",{className:"percent",children:[e.jsx("h3",{className:"font-codeProBold text-3xl text-end",children:"90/10"}),e.jsx("span",{className:"flex justify-end text-[0.7rem] font-codePro text-end",children:"Profit Share"})]})})]}),e.jsxs("div",{className:"card-middle grid gap-5 px-4 font-light",children:[e.jsxs("p",{className:"text-base font-light font-Montserrat",children:["Trading Period",e.jsx("span",{className:"text-base font-bold",children:" Unlimited"})]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"NO"})," Minimum Trading Days"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"5%"})," Maximum Daily Loss"]}),e.jsxs("p",{className:"text-base font-light font-Montserrat",children:[e.jsx("span",{className:"text-base font-bold",children:"12%"})," Minimum Trading Days"]}),e.jsx("p",{className:"text-base font-light font-Montserrat",children:"Refundable registration fee"})]}),e.jsx("div",{className:"card-bottom mt-4 flex justify-center items-center text-center",children:e.jsx("a",{href:"#price-table",className:"uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn",children:"Customize Challenge"})})]})})]})})]})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute opacity-100 top-[10%] w-full h-full min-w-[100rem]",children:e.jsx("img",{src:L,alt:"circle-shadow"})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute opacity-50 top-[-60%] -left-[80%] w-full h-full min-w-[50rem]",children:e.jsx("img",{src:L,alt:"circle-shadow"})})]})}function sa(){return e.jsx("section",{className:"dashboard relative pt-20 sm:pt-28",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper relative z-20 grid gap-6 sm:gap-12 justify-center items-center",children:[e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center md:text-center",children:[e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium",children:"Personal trading Hub"}),e.jsx("p",{className:"max-w-[55rem] mt-2",children:"To easily track your performance, you will have access to your own personal trading Hub to monitor your trading data and stats in real-time. This helps you to avoid breaching the trading rules during the challenge and while you’re a TFH funded trader."})]}),e.jsx(I,{delay:.4,cls:"dashboard-img z-10 relative ",children:e.jsx("img",{className:"md:max-w-[80%] m-auto rounded-2xl social-shadow",src:Ze,alt:"dashboard"})})]})})})}function b({delay:t,children:a,right:s,cls:r}){const o=s?150:-150;return e.jsx(te.div,{className:r||"",whileInView:{opacity:1,x:0,transition:{duration:.5,delay:t,bounce:.5,ease:"easeOut"}},viewport:{once:!0},initial:{opacity:0,x:o},children:a})}const ia="/assets/x-de5c4fb2.png",ra="/assets/instagram-ce072b26.png",na="/assets/discord-ee47c7ba.png";function oa(){return e.jsx("section",{className:"discord pt-24 relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsx("div",{className:"heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center",children:e.jsxs("div",{className:"heading flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Let’s Connect!"}),e.jsx("div",{className:"paras mt-2 max-w-[60rem]",children:e.jsx("p",{children:"To ensure you're always in the know about TFH's official updates and news, don't forget to follow us on our social pages! Stay tuned for the latest developments."})})]})}),e.jsxs("div",{className:"items relative grid md:grid-cols-2 lg:grid-cols-3f gap-7 justify-center max-w-[50rem] fmax-w-[74rem] w-full m-auto items-center md:px-6 mt-8",children:[e.jsxs(b,{delay:.5,cls:"grid gap-2 px-6 py-8 rounded-3xl discord-bg h-full social-shadow max-w-[360px]",children:[e.jsx("div",{className:"img flex justify-center items-center relative h-[150px]",children:e.jsx("img",{className:`w-full absolute top-[2rem] left-0\r
                  `,src:na,alt:"discord"})}),e.jsxs("div",{className:"w-full flex flex-col justify-between gap-8",children:[e.jsx("p",{className:"text-center",children:"Trading is a challenge! Join our Discord for market discussions, strategies, and Friday night gaming sessions!"}),e.jsx("div",{className:"wrap flex justify-center",children:e.jsx("div",{className:"mt-4 btn uppercase flex justify-center self-end",children:e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] discglow-btn",children:"Join our Discord"})})})]})]}),e.jsxs(b,{delay:.5,right:!0,cls:"grid gap-4 px-6 py-8 rounded-3xl x-bg h-full social-shadow max-w-[360px]",children:[e.jsx("div",{className:"img flex justify-center items-center relative h-[150px]",children:e.jsx("img",{className:`w-full absolute top-[0.5rem] left-0\r
                  `,src:ia,alt:"x"})}),e.jsxs("div",{className:"w-full flex flex-col justify-between gap-8",children:[e.jsx("p",{className:"text-center",children:"To ensure you're always in the know about TFH's official updates and news, don't forget to follow us on Twitter! Stay tuned for the latest developments."}),e.jsx("div",{className:" btn uppercase flex justify-center",children:e.jsx("a",{target:"__blank",href:"https://twitter.com/TheFundedHub",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] twtglow-btn",children:"Join us on Twitter"})})]})]}),e.jsxs(b,{delay:.5,right:!0,cls:"gridf hidden gap-4 px-6 pt-2 pb-8 rounded-3xl h-full insta-bg social-shadow max-w-[360px]",children:[e.jsx("div",{className:"img flex justify-center items-center",children:e.jsx("img",{className:`sm:max-w-[12rem] md:max-w-[12rem] w-full opacity-80\r
                  `,src:ra,alt:"instagram"})}),e.jsxs("div",{className:"w-full grid justify-center gap-3",children:[e.jsx("p",{className:"text-center",children:"Trading is certainly not easy! Interact with other traders and discuss about the markets, strategies and stay up to date with all the TFH official announcements."}),e.jsx("div",{className:"mt-4 btn uppercase flex justify-center",children:e.jsx("a",{target:"__blank",href:"https://www.instagram.com/fundedhub/",className:"uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] max-w-[228px] insta-glowing-btn",children:"Join us on Instagram"})})]})]})]})]})})}const la="/assets/x-a3a9855d.webp",da="/assets/discord-b0b80765.webp",ca="/assets/instagram-3e95cfc6.webp";function H(){return e.jsxs("div",{className:"logos flex gap-4",children:[e.jsx("a",{target:"__blank",href:"https://www.instagram.com/fundedhub/",className:"w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:ca,alt:"Instagram"})}),e.jsx("a",{target:"__blank",href:"https://twitter.com/TheFundedHub",className:"logo w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:la,alt:"X"})}),e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"logo w-[1.9rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center",children:e.jsx("img",{className:"w-full",src:da,alt:"discord"})})]})}function P(){const[t,a]=i.useState(""),{pathname:s}=w();return i.useEffect(()=>{a(s)},[]),e.jsx("footer",{className:"footer relative bg-black sm:bg-main-bg pt-12 pb-5 z-40",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsxs("div",{className:"footer-desktop hidden lg:grid gap-10",children:[e.jsxs("div",{className:"top flex justify-between",children:[e.jsx("div",{className:"left ",children:e.jsx(m,{to:"/",className:"main-logo flex gap-1",children:e.jsx("img",{className:"max-w-[10rem]",src:B,alt:"TheFundedHub"})})}),e.jsxs("div",{className:"middle grid gap-6 justify-end items-center",children:[e.jsx("div",{className:"item flex justify-center items-center",children:e.jsxs("ul",{className:"flex font-Montserrat font-medium gap-4 flex-wrap md:flex-nowrap",children:[e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/terms-condition"),to:"/terms-condition",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/terms-condition"?"text-white":"text-white/40"}`,children:"Terms and Condition"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/privacy-policy"),to:"/privacy-policy",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/privacy-policy"?"text-white":"text-white/40"}`,children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/cookie-policy"),to:"/cookie-policy",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/cookie-policy"?"text-white":"text-white/40"}`,children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/risk-disclosure"),to:"/risk-disclosure",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/risk-disclosure"?"text-white":"text-white/40"}`,children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/report-problem"),to:"/report-problem",className:`text-sm  hover:text-white transition-all duration-300 ${t==="/report-problem"?"text-white":"text-white/40"}`,children:"Report a problem"})})]})}),e.jsx("div",{className:"item",children:e.jsxs("div",{className:"info grid text-center",children:[e.jsx("span",{className:"uppercase text-sm font-codePro",children:"THE FUNDED HUB GLOBAL LLP"}),e.jsx("span",{className:"text-sm",children:"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX"})]})})]}),e.jsx("div",{className:"right",children:e.jsx(H,{})})]}),e.jsx("div",{className:"bottom",children:e.jsxs("div",{className:"hidden sm:block bottom-content text-center",children:[e.jsx("p",{className:"text-[0.65rem] font-light",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP (Company number: OC448629)"}),e.jsx("p",{className:"text-[0.65rem] font-light mt-2",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP. All information available on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! THE FUNDED HUB GLOBAL LLP does not provide any of the investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Either The Funded Hub and THE FUNDED HUB GLOBAL LLP is not a broker and do not accept deposits. The offered technical solution for the The Funded Hub MT5 platforms and data feed are powered by our institutional liquidity providers."})]})})]}),e.jsxs("div",{className:"footer-mobile grid gap-6 lg:hidden",children:[e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"logo flex justify-center items-center",children:e.jsx(m,{to:"/",className:"main-logo flex gap-1",children:e.jsx("img",{className:"max-w-[8rem]",src:B,alt:"TheFundedHub"})})}),e.jsx(H,{})]}),e.jsxs("div",{className:"content grid gap-8 mt-4",children:[e.jsx("div",{className:"top",children:e.jsxs("div",{className:"items gap-4",children:[e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/terms-condition"),to:"/terms-condition",className:` ${t==="/terms-condition"?"text-white":"text-white/40"} hover:text-white`,children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/privacy-policy"),to:"/privacy-policy",className:` ${t==="/privacy-policy"?"text-white":"text-white/40"} hover:text-white`,children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/ookie-policy"),to:"/cookie-policy",className:` ${t==="/cookie-policy"?"text-white":"text-white/40"} hover:text-white`,children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/risk-disclosure"),to:"/risk-disclosure",className:` ${t==="/risk-disclosure"?"text-white":"text-white/40"} hover:text-white`,children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(m,{onClick:()=>a("/report-problem"),to:"/report-problem",className:` ${t==="/report-problem"?"text-white":"text-white/40"} hover:text-white`,children:"Report a problem"})})]})}),e.jsx("div",{className:"item mt-12 text-center col-span-full",children:e.jsxs("div",{className:"info grid",children:[e.jsx("span",{className:"uppercase text-[0.9rem] font-codePro",children:"THE FUNDED HUB GLOBAL LLP"}),e.jsx("span",{className:"text-sm font-Montserrat",children:"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX"})]})})]})}),e.jsxs("div",{className:"bottom text-center",children:[e.jsx("p",{className:"text-[0.65rem] font-light",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP (Company number: OC448629)"}),e.jsx("p",{className:"text-[0.65rem] font-light mt-2",children:"The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP. All information available on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! THE FUNDED HUB GLOBAL LLP does not provide any of the investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Either The Funded Hub and THE FUNDED HUB GLOBAL LLP is not a broker and do not accept deposits. The offered technical solution for the The Funded Hub MT5 platforms and data feed are powered by our institutional liquidity providers."})]})]})]})]})})}const Z="/assets/BlackBull-logo-2e877bd6.png";function ha(){return e.jsxs("div",{className:"content-bottom w-full relative z-10 grid gap-6 pt-20",children:[e.jsxs("div",{className:"top text-start 2xl:px-36 relative z-10",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Earn a monthly Salary"}),e.jsx("div",{className:"paras grid gap-5 mt-2",children:e.jsx("p",{children:"Earn a monthly salary as soon as you qualify for the scaling plan, bringing you closer to your dream of becoming a full-time trader. All the funded traders who successfully complete Challenge Phases 1 & 2 and receive a live funded account are eligible for a Monthly Salary, provided they meet certain conditions."})})]}),e.jsxs("div",{className:"bottom relative z-10 text-lg font-black  lg:flex justify-center items-center gap-5 w-full",children:[e.jsxs("div",{className:"items hidden md:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center text-[0.9rem] text-center",children:[e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200",children:e.jsxs(b,{delay:.25,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$5,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$50.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 ",children:e.jsxs(b,{delay:.5,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$10,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$100.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 ",children:e.jsxs(b,{delay:.75,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$25,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$250.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 ",children:e.jsxs(b,{right:!0,delay:.75,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4  md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$50,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$500.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 ",children:e.jsxs(b,{right:!0,delay:.5,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$100,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$1000.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 ",children:e.jsxs(b,{right:!0,delay:.25,cls:"item flex flex-col gap-5 justify-center items-center text-base sm:text-lg home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none relative",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-xs font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold",children:"$200,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold",children:["$2000.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})})]}),e.jsx("div",{className:"salary-slider md:hidden flex flex-wrap gap-8 lg:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-[calc(100vw-1.5rem)] m-auto",children:e.jsxs(U,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[$,z],className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full",children:[e.jsxs(v,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$5,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$50.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(v,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$10,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$100.00 /"," ",e.jsx("span",{className:" font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(v,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$25,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$250.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(v,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$50,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$500.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(v,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$100,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$1000.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]}),e.jsxs(v,{className:"item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow",children:[e.jsxs("div",{className:"top text-center",children:[e.jsx("h6",{className:"text-sm font-extralight",children:"Balance"}),e.jsx("h5",{className:"font-codeProBold text-[1.1rem] mt-1",children:"$200,000"})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("h5",{className:"font-codeProBold text-[1.1rem]",children:["$2000.00 /"," ",e.jsx("span",{className:"font-codePro font-extralight text-base",children:"Month"})]}),e.jsx("h6",{className:"text-sm font-codePro font-extralight text-center",children:"Salary"})]})]})]})})]}),e.jsx("div",{className:"circle-shadow sm:hidden absolute opacity-30 top-[-30%] -left-[80%] w-full h-full min-w-[50rem]",children:e.jsx("img",{src:L,alt:"circle-shadow"})})]})}function ma(){return e.jsx("section",{className:"benefits relative md:m-auto pt-20 sm:pt-24",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper grid gap-6 relative z-30",children:[e.jsxs("div",{className:"heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"The Funded Hub Benefits"}),e.jsx("div",{className:"paras mt-2",children:e.jsxs("p",{children:["We are partnering up directly with a regulated liquidity provider to offer you unbeatable trading conditions. ",e.jsx("br",{})," Our accounts will let you trade in an excellent environment with tight spreads and lighting-fast execution."]})})]}),e.jsxs("div",{className:"Contents w-full grid",children:[e.jsxs("div",{className:"w-full max-w-screen hidden md:flex justify-center items-center relative",children:[e.jsxs("div",{className:"items grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10",children:[e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow ",children:e.jsxs(b,{delay:.5,cls:"item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Craft"})," ","your challenge"]})}),e.jsx("p",{className:"text-sm mt-3",children:"All other prop firms with the same rules? With us you can customize basically everything; from the trading period to the target profits to the max drawdown."})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(b,{delay:.75,cls:"item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:["Earn a fixed"," ",e.jsx("div",{className:"font-codeProBold inline-block",children:"salary"})]})}),e.jsx("p",{className:"text-sm mt-3",children:"You're investing time trading for us and we want to reward your skills and efforts! Earn a fixed monthly salary based on your account balance."})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(b,{delay:1,cls:"item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Lightning-fast"})," ","Payouts"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Various payment methods, including Bank transfer, PayPal, and Crypto. Once your payout is approved, get your money in a flash!"})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(b,{right:!0,delay:.5,cls:"item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Regulated"})," ","brokers only"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Our traders deserve the best, only! We're thrilled to be partnering with BlackBull to offer you the best trading conditions in the market."})]})}),e.jsx("div",{className:"wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow",children:e.jsxs(b,{right:!0,delay:.75,cls:"item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[" ",e.jsx("div",{className:"font-codeProBold inline-block",children:"24/5"})," ","dedicated support"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Any question or concern? We got you! Our team of traders and engineers is available 24/5 to help you with anything you might need."})]})})]}),e.jsx("img",{className:"cirlce sm:hidden absolute -top-[200%] -left-[18%]  w-[70rem] rotate-[80deg] opacity-[0.1]",src:L,alt:"circle"}),e.jsx("img",{className:"cirlce sm:hidden absolute -top-[100%] -right-[20%]  w-[50rem] rotate-[20deg] opacity-[0.05]",src:L,alt:"circle"})]}),e.jsx("div",{className:"md:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] sm:-mx-[3rem] sm:px-[3rem] w-screen relative ",children:e.jsxs(U,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[$,z],className:"flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full",children:[e.jsxs(v,{className:"item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Craft"})," ","your challenge"]})}),e.jsx("p",{className:"text-sm mt-3",children:"All other prop firms with the same rules? With us you can customize basically everything; from the trading period to the target profits to the max drawdown."})]}),e.jsxs(v,{className:"item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:["Earn a fixed"," ",e.jsx("div",{className:"font-codeProBold inline-block",children:"salary"})]})}),e.jsx("p",{className:"text-sm mt-3",children:"You're investing time trading for us and we want to reward your skills and efforts! Earn a fixed monthly salary based on your account balance."})]}),e.jsxs(v,{className:"item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Lightning-fast"})," ","Payouts"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Various payment methods, including Bank transfer, PayPal, and Crypto. Once your payout is approved, get your money in a flash!"})]}),e.jsxs(v,{className:"item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"Regulated"})," ","brokers only"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Our traders deserve the best, only! We're thrilled to be partnering with BlackBull to offer you the best trading conditions in the market."})]}),e.jsxs(v,{className:"item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow",children:[e.jsx("div",{className:"head text-base",children:e.jsxs("h5",{children:[e.jsx("div",{className:"font-codeProBold inline-block",children:"24/5"})," ","dedicated support"]})}),e.jsx("p",{className:"text-sm mt-3",children:"Any question or concern? We got you! Our team of traders and engineers is available 24/5 to help you with anything you might need, even on Whatsapp!"})]})]})}),e.jsxs("div",{className:"trade mt-20 sm:mt-12",children:[e.jsxs("div",{className:"hidden sm:grid gap-6 md:grid-cols-7 rounded-3xl p-6 justify-center items-center max-w-[64rem] m-auto bottom-shadow text-center sm:text-start scale-100 hover:scale-[1.02] transition-all duration-300",children:[e.jsxs("div",{className:"left md:col-span-5",children:[e.jsx("h4",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Regulated Broker"}),e.jsx("p",{className:"pt-2",children:"Trade with lightning fast execution speed on a trusted & regulated broker Ranked #1 forex broker in execution speed by CompareForexBrokers.com"})]}),e.jsx("div",{className:"right md:col-span-2  flex flex-col justify-center items-center md:mt-4",children:e.jsx("img",{className:"max-w-[16rem] w-full ",src:Z,alt:"black-bull"})})]}),e.jsxs("div",{className:"sm:hidden grid gap-2.5 md:grid-cols-7 items-center ",children:[e.jsxs("div",{className:"left",children:[e.jsx("h4",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Regulated Broker"}),e.jsx("p",{className:"pt-2",children:"Trade with lightning fast execution speed on a trusted & regulated broker Ranked #1 forex broker in execution speed by CompareForexBrokers.com"})]}),e.jsx("div",{className:"right",children:e.jsx("img",{className:"max-w-[13rem] w-full opacity-70",src:Z,alt:"black-bull"})})]})]}),e.jsx(ha,{})]})]})})})}const ee="/assets/desktop-d5cae63b.webp";function pa(){return e.jsxs("main",{className:"main relative pt-16 md:pt-36 md:pb-14",children:[e.jsxs("div",{className:"container relative",children:[e.jsxs("div",{className:"wrapper z-10 relative grid lg:grid-cols-2 md:gap-12 sm:pt-12",children:[e.jsx("div",{className:"left-content hidden lg:block w-full relative",children:e.jsx("div",{className:"desktop-img absolute inset-0 h-full w-full",children:e.jsx(b,{delay:.5,children:e.jsx("img",{className:"absolute -top-[5.5rem] -right-[2rem] min-w-[35rem] xl:min-w-[40rem] globe-rotate z-0",src:ee,alt:"mobile"})})})}),e.jsxs("div",{className:"right-content flex flex-col sm:gap-5 relative z-1 mt-1.5",children:[e.jsx(b,{delay:.75,right:!0,className:"heading grid gap-2 justify-end items-center lg:text-center font-medium text-wht-gradient",children:e.jsxs("h1",{className:"xs:leading-[0.95] text-3xl exs:text-[1.8rem] xs:text-[2.1rem] sm:text-[3rem] md:text-[3.2rem] xl:text-[4rem] font-codeProLight tracking-tighter text-center w-full md:text-start z-10 relative mt-6 md:m-0",children:[e.jsx("b",{className:"font-codePro",children:"Empowering"})," Traders, One"," ",e.jsx("b",{className:"font-codePro",children:"Step"})," at a Time."]})}),e.jsx("div",{className:"mbl-img flex justify-center sm:-mt-2.5 lg:hidden relative",children:e.jsx("img",{className:"max-w-[50rem] w-[120%]  sm:w-full globe-rotate z-0 sm:-ml-10",src:ee,alt:"mobile"})}),e.jsx("div",{className:"botton-content font-Montserrat grid w-full gap-5 max-w-4xl md:text-left z-10 relative -mt-2",children:e.jsx(b,{right:!0,delay:1,children:e.jsx("p",{className:"font-light font-Montserrat  text-[1.05rem] max-w-[30rem]",children:"Customize your challenge, get funded with our capital and earn up to 90% profit split plus a fixed monthly salary. We take all the trading risks."})})}),e.jsx("div",{className:"wrap flex relative z-20 mt-6 sm:mt-1",children:e.jsxs("div",{className:"btns grid sm:grid-cols-2 gap-6 sm:gap-6 sm:justify-start items-end",children:[e.jsx("div",{className:"btn flex font-extrabold flex-shrink-0 h-[55px] sm:h-[45px] w-[230px] sm:w-[240px]",children:e.jsx(m,{to:"/login",className:"glowing-btn",children:"Get Funded Now"})}),e.jsx("div",{className:"btn flex font-extrabold flex-shrink-0",children:e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"uppercase font-base flex justify-center items-center h-[55px] sm:h-[45px] w-[210px] sm:w-[230px] text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] discglow-btn",children:"Join our Discord"})})]})})]})]}),e.jsx("div",{className:"wrap hidden fflex sm:justify-center mt-6 sm:mt-10 md:mt-24 relative z-20",children:e.jsxs("div",{className:"btns grid sm:grid-cols-2 gap-4 sm:gap-6 justify-start items-end",children:[e.jsx("div",{className:"btn flex font-extrabold flex-shrink-0 h-[55px] sm:h-[45px] w-[230px] sm:w-[265px]",children:e.jsx(m,{to:"/login",className:"glowing-btn",children:"Get Funded Now"})}),e.jsx("div",{className:"btn flex font-extrabold flex-shrink-0",children:e.jsx("a",{target:"__blank",href:"https://discord.gg/thefundedhub",className:"uppercase font-base flex justify-center items-center h-[55px] sm:h-[45px] w-[210px] sm:w-[240px] text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] discglow-btn",children:"Join our Discord"})})]})})]}),e.jsx("div",{className:"circle-shadow sm:hidden absolute opacity-50 top-[1%] -right-[40%] w-full h-full min-w-[50rem]",children:e.jsx("img",{src:L,alt:"circle-shadow"})})]})}function ua({heading:t,para:a}){const[s,r]=i.useState(0),[o,l]=i.useState(!1),d=i.useRef(null);return i.useEffect(()=>{r(d.current.clientHeight)},[o]),e.jsxs("article",{className:"border border-primary/[15%] rounded-2xl",children:[e.jsxs("header",{onClick:()=>l(!o),className:"flex justify-between cursor-pointer py-3 px-4",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base",children:t}),e.jsx("div",{className:"arrow flex justify-center items-center ml-3",children:e.jsx("img",{className:`max-w-[1.2rem] transform-gpu transition-all duration-300 ${o?"rotate-180":""}`,src:g,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:o?s+"px":"0"},className:"content transition-all duration-300 overflow-hidden",children:e.jsx("div",{ref:d,className:"peraH mt-2 text-[0.9rem] xs:text-base pb-6 px-4 grid gap-4",dangerouslySetInnerHTML:{__html:a}})})]})}function xa(){const t=["Empowering Traders, one step at a time","What's the broker and what are the conditions?"],a=[`<p>
        The Funded Hub is a Fintech Startup headquartered in London, United
        Kingdom. Our team comprises individuals with diverse expertise in
        various fields, but a common passion unites us all: Trading.
      </p>
      <p>
        With a collective experience spanning a decade in the world of trading,
        we aimed to introduce a platform that could empower traders by providing
        them with the essential support and capital needed to succeed.
      </p>`,`<p>
        The Funded Hub is a Fintech Startup headquartered in London, United
        Kingdom. Our team comprises individuals with diverse expertise in
        various fields, but a common passion unites us all: Trading.
      </p>
      <p>
        With a collective experience spanning a decade in the world of trading,
        we aimed to introduce a platform that could empower traders by providing
        them with the essential support and capital needed to succeed.
      </p>`,` <p>
              We&apos;ve forged a robust partnership with BlackBull Markets, a
              globally recognized and rigorously regulated broker in the trading
              industry.
            </p>
            <p>
              Our trading accounts come with highly competitive conditions,
              featuring some of the industry&apos;s narrowest spreads, starting
              at an impressive 0.0 pips, and minimal slippage.
            </p>
            <p>
              For a comprehensive breakdown of commission details, please
              consult the article directly following this one.
            </p>`];return e.jsx("section",{className:"hoem-faq relative pt-28",children:e.jsx("div",{className:"container relative z-10",children:e.jsxs("div",{className:"wrapper grid gap-8 justify-center items-center",children:[e.jsxs("div",{className:"heading flex flex-col gap-2 justify-center items-center text-center",children:[e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"FAQ"}),e.jsx("div",{className:"paras",children:e.jsxs("p",{children:["If you don't find an answer in the frequently asked questions don't hesitate to"," ",e.jsx(m,{to:"/contact",className:"underline font-semibold",children:"contact us"})]})})]}),e.jsx("div",{className:"articles md:max-w-[60rem] m-auto grid gap-5",children:t.map((s,r)=>e.jsx(I,{delay:r/10+.3,cls:"",children:e.jsx(ua,{heading:s,para:a[r]})},r))}),e.jsx("div",{className:"readmore flex justify-center mb-12 xs:mb-24 md:mb-32",children:e.jsx(m,{to:"faq",className:"text-xs x:text-sm font-bold py-2 px-10 border-2 border-primary/20 rounded-3xl faq-btn-shadow",children:"Visit FAQ Page"})})]})})})}const fa={parent:{display:"none"}};function ga(){const t=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"US 100"},{proName:"BITSTAMP:BTCUSD",title:"Bitcoin"},{proName:"BITSTAMP:ETHUSD",title:"Ethereum"},{description:"EURUSD",proName:"FX:EURUSD"},{description:"GBPUSD",proName:"FX:GBPUSD"},{description:"AUDUSD",proName:"FX:AUDUSD"}];return e.jsx("div",{className:"ticker-widget pt-12 sm:pt-16 relative z-10",children:e.jsx("div",{className:"lg:container sm:px-6 lg:px-0 m-auto",children:e.jsx("div",{className:"wrapper backdrop-blur-3xl widget bg-main-bg/30",children:e.jsx(fe,{colorTheme:"dark",copyrightStyles:fa,displayMode:"regular",isTransparent:!0,symbols:t})})})})}function ya(){const[t,a]=i.useState("FTMO"),s={FTMO:["100K Evaluation","5% Daily | 10% Total","4 Day","Unlimited","10% - 5%","Only in Swing Acc.","No","$600"],"SKILLED FUNDED TRADERS":["100K Evaluation","5% Daily | 10% Total","3 Day","Unlimited","8% - 5%","No","No","$549"],"TRUE FOREX FUNDS":["100K Evaluation","5% Daily | 10% Total","5 Day","Unlimited","8% - 5%","Yes","No","$660"],FUNDEDNEXT:["100K Evaluation","5% Daily | 10% Total","5 Day","30-60 days","10% - 5%","Yes","No","$549"]};return e.jsxs("section",{className:"compare relative pt-20 sm:pt-28",children:[e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative z-20 grid gap-6 sm:gap-12",children:[e.jsxs("div",{className:"heading relative z-20 flex flex-col justify-center sm:items-center md:text-center gap-3 md:gap-8",children:[e.jsx("h2",{className:"text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium",children:"Compare your options"}),e.jsx(I,{delay:.5,children:e.jsxs("div",{className:"buttons grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center justify-center items-center max-w-[20rem] m-auto sm:max-w-none",children:[e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="FTMO"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("FTMO"),children:"FTMO"}),e.jsxs("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="SKILLED FUNDED TRADERS"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("SKILLED FUNDED TRADERS"),children:["SKILLED FUNDED"," ",e.jsx("div",{className:"hidden sm:inline-block",children:"TRADERS"})]}),e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="TRUE FOREX FUNDS"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("TRUE FOREX FUNDS"),children:"TRUE FOREX FUNDS"}),e.jsx("button",{className:`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${t==="FUNDEDNEXT"?"border-primary":"border-primary/30"}
              `,onClick:()=>a("FUNDEDNEXT"),children:"FUNDEDNEXT"})]})})]}),e.jsxs("div",{className:"content relative z-10 hidden md:grid sm:grid-cols-2 m-auto gap-10 max-w-[55rem] w-full",children:[e.jsx("div",{className:"wrap scale-100 hover:scale-[1.03] transition-all duration-200 relative z-10",children:e.jsx(b,{delay:.25,children:e.jsxs("div",{className:"item bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10",children:[e.jsx("div",{className:"head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]",children:e.jsx("img",{className:"w-40",src:B,alt:"main-logo"})}),e.jsx("b",{}),e.jsxs("div",{className:"paras grid gap-3 py-8 pb-3",children:[e.jsx("span",{children:e.jsx("b",{children:"100K Evaluation"})}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:"5% Daily | 12% Total"})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:"Up to 0 Days"})]}),e.jsxs("span",{children:["Trading Period - ",e.jsx("b",{children:"Up to Unlimited"})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:" 8% & 5%"})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:"Yes"})]}),e.jsxs("span",{children:["Monthly Salary - ",e.jsx("b",{children:"$1,000"})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:"$569"})]})]})]})})}),e.jsx("div",{className:"wrap scale-100 hover:scale-[1.03] transition-all duration-200 relative z-10",children:e.jsx(b,{right:!0,delay:.25,children:e.jsxs("div",{className:"item bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10",children:[e.jsx("div",{className:"head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]",children:t}),e.jsxs("div",{className:"paras grid gap-3 py-8 pb-3",children:[e.jsx("span",{children:e.jsx("b",{children:"100K Evaluation"})}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:s[t][1]})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:s[t][2]})]}),e.jsxs("span",{children:["Trading Period - ",e.jsx("b",{children:s[t][3]})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:s[t][4]})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:s[t][5]})]}),e.jsxs("span",{children:["Monthly Salary - ",e.jsx("b",{children:s[t][6]})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:s[t][7]})]})]})]})})})]}),e.jsxs(U,{navigation:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[$,z],className:"content relative z-10 grid md:hidden md:grid-cols-2 m-auto gap-10 w-full max-w-[100vw]",children:[e.jsxs(v,{className:"item relative z-10 bg-main-bg/90 sm:bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[30rem]",children:[e.jsx("div",{className:"head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]",children:e.jsx("img",{className:"w-40",src:B,alt:"main-logo"})}),e.jsxs("div",{className:"paras grid gap-3 py-8 pb-3",children:[e.jsx("span",{children:e.jsx("b",{children:"100K Evaluation"})}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:"4% Daily | 8% Total"})]}),e.jsxs("span",{children:["Payout Split - ",e.jsx("b",{children:"80/20"})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:"5 Day"})]}),e.jsxs("span",{children:["Time Period For Evaluation - ",e.jsx("b",{children:"45 & 45 Days"})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:" 8% & 5%"})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:"Yes"})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:"$475"})]})]})]}),e.jsxs(v,{className:"item relative z-10 bg-main-bg/90 sm:bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[30rem]",children:[e.jsx("div",{className:"head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]",children:t}),e.jsxs("div",{className:"paras grid gap-3 py-8 pb-3",children:[e.jsxs("span",{children:["Account Size & Model - ",e.jsx("b",{children:s[t][0]})]}),e.jsxs("span",{children:["Price - ",e.jsx("b",{children:s[t][1]})]}),e.jsxs("span",{children:["Maximum Drawdown - ",e.jsx("b",{children:s[t][2]})]}),e.jsxs("span",{children:["Payout Split - ",e.jsxs("b",{children:[" ",s[t][3]]})]}),e.jsxs("span",{children:["Minimum Trading Days - ",e.jsx("b",{children:s[t][4]})]}),e.jsxs("span",{children:["Time Period For Evaluation - ",e.jsx("b",{children:s[t][5]})]}),e.jsxs("span",{children:["Targets Profit - ",e.jsx("b",{children:s[t][6]})]}),e.jsxs("span",{children:["Hold Trade On Weekends - ",e.jsx("b",{children:s[t][7]})]})]})]})]})]})}),e.jsx("div",{className:"circle-shadow sm:hidden absolute opacity-30 top-[30%] -right-[80%] w-full h-full min-w-[50rem]",children:e.jsx("img",{src:L,alt:"circle-shadow"})})]})}function va(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs("div",{className:"purple-shadow font-light",children:[e.jsx(A,{}),e.jsx(pa,{}),e.jsx(ga,{}),e.jsx(ta,{}),e.jsx(ma,{}),e.jsx(ya,{}),e.jsx(sa,{}),e.jsx(aa,{}),e.jsx(oa,{}),e.jsx(xa,{}),e.jsx(P,{}),e.jsx("div",{className:"hidden h-0 w-0 opacity-0 left-0 visible md:invisible"}),e.jsx("script",{src:"./js/script.js"})]})}function ba({props:t}){const[a,s]=t,[r,o]=i.useState(""),[l,d]=i.useState(""),[c,p]=i.useState(""),[n,u]=i.useState(""),[N,C]=i.useState(""),[M,E]=i.useState(""),[T,j]=i.useState(!1),[h,S]=i.useState(!1),x=se.getAllCountries(),[O,f]=i.useState(!1);i.useEffect(()=>{r&&l&&c&&n.includes("@")&&N&&M&&h&&T?f(!0):f(!1)},[r,l,c,n,N,M,h,T]);const D=pe();function X(k){document.querySelector("html").classList.remove("stop-scrolling"),D(k)}return e.jsxs("div",{className:`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center ${a?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${a?"opacity-100 ":"opacity-0"}`,onClick:()=>s(!1)}),e.jsx("div",{className:"scroll h-screen",children:e.jsx("div",{className:"wrap overflow-hidden rounded-3xl h-full  sm:h-unset p-6 overflow-y-scroll sm:overflow-y-auto sm:flex justify-center items-center",children:e.jsxs("div",{className:`box relative max-w-[42rem] w-full text-main text-wht bg-light-gra transition-all bg-main-bg/80 duration-300 rounded-3xl z-[999] py-6 my-3 px-6 ${a?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsxs("form",{className:"grid gap-6 relative z-10 rounded-xl border-primary",children:[e.jsxs("div",{className:"heading grid gap-3 justify-start items-center",children:[e.jsx("div",{className:"wrap",children:e.jsx("h1",{className:"text-start text-xl xs:text-[1.8rem] font-medium text-wht-gradient pb-[0.2rem]",children:"Register"})}),e.jsx("div",{className:"register font-normal",children:e.jsxs("span",{children:["Already have an account?"," ",e.jsx("span",{onClick:()=>s(!1),className:"underline sm:cursor-pointer text-all",children:"Login"})]})})]}),e.jsxs("div",{className:"input-fields grid sm:grid-cols-2 gap-6 sm:gap-8 mt-2",children:[e.jsxs("div",{className:"left grid gap-5",children:[e.jsxs("div",{className:"same-line grid grid-cols-6 gap-4",children:[e.jsx("div",{className:"selecte-title col-span-2",children:e.jsxs("div",{className:"wrapper relative",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:g,alt:"arrow"}),e.jsxs("select",{id:"title",name:"title",autoFocus:!0,className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent",children:[e.jsx("option",{value:"Mr.",children:"Mr."}),e.jsx("option",{value:"Mr.",children:"Ms."}),e.jsx("option",{value:"Mr.",children:"Mrs."}),e.jsx("option",{value:"Mr.",children:"Mx."})]})]})}),e.jsx("div",{className:"first-name col-span-4",children:e.jsx("input",{onChange:k=>o(k.target.value),value:r,name:"first-name",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"text",placeholder:"First Name"})})]}),e.jsx("div",{className:"last-name",children:e.jsx("input",{onChange:k=>d(k.target.value),value:l,name:"last-name",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"text",placeholder:"Last Name"})}),e.jsx("div",{className:"email",children:e.jsx("input",{onChange:k=>u(k.target.value),value:n,name:"email",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"email",placeholder:"Email"})})]}),e.jsxs("div",{className:"right grid gap-5",children:[e.jsx("div",{className:"country-residence",children:e.jsxs("div",{className:"wrapper relative",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:g,alt:"arrow"}),e.jsxs("select",{onChange:k=>p(k.target.value),value:c,id:"country",name:"country",className:"form-control relative w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent",children:[e.jsx("option",{defaultChecked:!0,children:"Choose a country"}),x.map((k,J)=>e.jsx("option",{value:k.name,children:k.name},J))]})]})}),e.jsx("div",{className:"password",children:e.jsx("input",{onChange:k=>C(k.target.value),value:N,name:"password",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"password",placeholder:"Password"})}),e.jsx("div",{className:"confirm-pass",children:e.jsx("input",{onChange:k=>E(k.target.value),value:M,name:"confirm-pass",className:"email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"password",placeholder:"Confirm Password"})})]})]}),e.jsxs("div",{className:"wrap grid sm:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"checkboxs grid gap-3 justify-start max-w-[35rem] mt-2",children:[e.jsxs("div",{className:"checkbox flex gap-3 justify-start items-center",children:[e.jsx("input",{onInput:()=>j(!T),type:"checkbox",id:"checkbox1",className:"custom-checkbox"}),e.jsxs("label",{htmlFor:"checkbox1",className:"sm:cursor-pointer font-Montserrat font-medium text-sm",children:["I agree to the"," ",e.jsx("span",{onClick:()=>X("/terms-condition"),className:"underline text-all cursor-pointer",children:"terms and conditions"})]})]}),e.jsxs("div",{className:"checkbox flex gap-3 justify-start items-center",children:[e.jsx("input",{onInput:()=>S(!h),type:"checkbox",id:"checkbox2",className:"custom-checkbox"}),e.jsxs("label",{htmlFor:"checkbox2",className:"sm:cursor-pointer font-Montserrat font-medium text-sm",children:["I accept the"," ",e.jsx("span",{onClick:()=>X("/privacy-policy"),className:"underline text-all cursor-pointer",children:"privacy policy"})]})]}),e.jsxs("div",{className:"checkbox flex gap-3 justify-start items-center",children:[e.jsx("input",{type:"checkbox",id:"checkbox3",className:"custom-checkbox"}),e.jsx("label",{htmlFor:"checkbox3",className:"sm:cursor-pointer font-Montserrat font-medium text-sm",children:"Subscribe to our newsletter"})]})]}),e.jsx("div",{className:"login-btn mt-6 grid justify-center items-center w-full",children:e.jsx("button",{onClick:()=>O?s(!1):"",className:`py-2.5 sm:py-3 px-16 sm:px-20 transition-all duration-300 rounded-3xl font-Montserrat font-semibold ${O?"bg-blu hover:opacity-70":" !cursor-default bg-blu/20"}`,children:"Sign Up"})})]})]}),e.jsx("div",{className:"wrap",onClick:()=>s(!1),children:e.jsx("div",{className:"cross p-2 absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 top-4 z-50",children:e.jsx(V,{})})})]})})})]})}function ja(){const[t,a]=i.useState(""),[s,r]=i.useState(""),[o,l]=i.useState(!1),[d,c]=i.useState(!1);i.useEffect(()=>{const u=document.querySelector("html");o||d?u.classList.add("stop-scrolling"):u.classList.remove("stop-scrolling")},[o,d]);const{pathname:p}=w();i.useEffect(()=>{window.scrollTo(0,0)},[p]);const n=u=>{u.preventDefault()};return e.jsxs("main",{className:"login min-h-screen purple-shadow pt-32 md:py-32",children:[e.jsx("header",{className:"z-50 left-0 right-0 transition-all duration-300 border-b border-transparent py-2 sm:py-6 absolute top-0",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper flex mt-4 md:mt-0 justify-start md:justify-between",children:[e.jsx(m,{to:"/",className:"main-logo",children:e.jsx("img",{className:"max-w-[8rem] sm:max-w-[10rem]",src:B,alt:"TheFundedHub"})}),e.jsx("nav",{className:"nav-links hidden md:flex text-wht font-light justify-center items-center",children:e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(m,{to:"/terms-condition",className:"text-[0.8rem]",children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(m,{to:"/privacy-policy",className:"text-[0.8rem]",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(m,{to:"/cookie-policy",className:"text-[0.8rem]",children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(m,{to:"/risk-disclosure",className:"text-[0.8rem]",children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(m,{to:"/report-problem",className:"text-[0.8rem]",children:"Report a problem"})})]})})})]})})}),e.jsx("section",{className:"relative",children:e.jsx("div",{className:"container relative",children:e.jsx("div",{className:"wrapper z-10 relative flex justify-center items-center min-h-[40vh] md:pt-20 pb-24 sm:pb-36",children:e.jsxs("form",{className:"grid gap-3 p-7 relative z-10 rounded-2xl bg-main-bg/[60%] border-primary max-w-[30rem] w-full global-shadow ",onSubmit:u=>n(u),children:[e.jsxs("div",{className:"heading grid gap-3 justify-start items-center",children:[e.jsx("div",{className:"wrap",children:e.jsx("h1",{className:"text-start text-xl xs:text-[1.8rem] font-medium text-wht-gradient pb-[0.2rem]",children:"Sign in"})}),e.jsx("div",{className:"register font-normal",children:e.jsxs("span",{children:["New user?"," ",e.jsx("span",{onClick:()=>c(!0),className:"underline sm:cursor-pointer text-all",children:"Register now"})]})})]}),e.jsx("div",{className:"email mt-3",children:e.jsx("input",{name:"email",value:t,onChange:u=>a(u.target.value),className:"email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"email",placeholder:"Email"})}),e.jsx("div",{className:"forget-pass text-end",children:e.jsx("a",{onClick:()=>l(!0),href:"#",className:"underline font-Montserrat font-medium text-sm",children:"Forgot Password"})}),e.jsx("div",{className:"Passwopasswordrd",children:e.jsx("input",{name:"password",value:s,onChange:u=>r(u.target.value),className:"email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"password",placeholder:"Password"})}),e.jsx("div",{className:"wrapper flex gap-3 flex-col sm:flex-row justify-between items-start sm:items-center mt-1",children:e.jsxs("div",{className:"remember flex gap-3 justify-center items-center",children:[e.jsx("input",{type:"checkbox",id:"remeber",className:"custom-checkbox"}),e.jsx("label",{htmlFor:"remeber",className:"sm:cursor-pointer text-sm font-Montserrat font-medium",children:"Remember me"})]})}),e.jsx("div",{className:"login-btn mt-10 flex justify-center items-center",children:e.jsx("div",{onClick:n,className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold grd-btn-wht pink-glowing-btn",children:"Login"})}),e.jsxs("div",{className:"signup grid gap-4 mt-2",children:[e.jsx("div",{className:"heading flex justify-center items-cente font-Montserrat font-semiboldr",children:e.jsx("h5",{children:"Or sign in with:"})}),e.jsxs("div",{className:"logos flex justify-center items-center gap-3",children:[e.jsx("a",{href:"#",className:"logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center",children:e.jsx(ge,{className:" w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]"})}),e.jsx("a",{href:"#",className:"logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center",children:e.jsx(ye,{className:"w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]"})})]})]})]})})})}),e.jsxs("div",{className:`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center overflow-hidden ${o?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsx("div",{className:`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${o?"opacity-100 ":"opacity-0"}`,onClick:()=>l(!1)}),e.jsxs("div",{className:`box relative m-6 max-w-[500px] w-full text-main text-wht bg-light-gray bg-main-bg/90 transition-all duration-300 rounded-3xl z-[999] py-10 px-6 ${o?"visible opacity-100":"invisible opacity-0"}`,children:[e.jsxs("form",{className:"content grid w-full text-center gap-4 font-semibold",children:[e.jsx("div",{className:"heading text-2xl",children:e.jsx("h3",{children:"Password Recovery"})}),e.jsxs("p",{className:"font-light font-Montserrat text-[1.05rem]",children:["We will send a password recovery link to ",e.jsx("br",{})," your e-mail"]}),e.jsxs("div",{className:"email w-full relative mt-4",children:[e.jsx("input",{name:"email",className:"email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200",type:"email",placeholder:"Email"}),e.jsx("div",{className:"arrow absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx(ve,{className:"text-3xl text-thin text-primary/[78%]"})})]}),e.jsx("div",{className:"confirm-btn mt-8 flex justify-center items-center",children:e.jsx("button",{className:"py-2 sm:py-2.5 px-12 sm:px-16 grd-btn-wht rounded-3xl font-Montserrat font-semibold",children:"Confirm"})})]}),e.jsx("div",{className:"cross",onClick:()=>l(!1),children:e.jsx(V,{className:"absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 md:right-6 top-4 md:top-6"})})]})]}),e.jsx(ba,{props:[d,c]}),e.jsx("footer",{className:"z-50 relative md:hidden left-0 right-0 transition-all duration-300 border-b border-transparent py-4 pb-10",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"wrapper flex flex-col md:flex-row justify-between gap-8",children:e.jsx("nav",{className:"nav-links text-wht font-light flex justify-center items-center",children:e.jsx("div",{className:"item grid justify-center items-center",children:e.jsxs("ul",{className:"flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("li",{children:e.jsx(m,{to:"/terms-condition",className:"text-[0.8rem]",children:"Term and Condition"})}),e.jsx("li",{children:e.jsx(m,{to:"/privacy-policy",className:"text-[0.8rem]",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(m,{to:"/cookie-policy",className:"text-[0.8rem]",children:"Cookie Policy"})}),e.jsx("li",{children:e.jsx(m,{to:"/risk-disclosure",className:"text-[0.8rem]",children:"Risk Disclosure"})}),e.jsx("li",{children:e.jsx(m,{to:"/report-problem",className:"text-[0.8rem]",children:"Report a problem"})})]})})})})})})]})}function G({clr:t,header:a}){return e.jsxs("form",{className:`grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-3xl border-primary backdrop-blur-3xl global-shadow  ${t==="dash-bar-clr"?"contact-clr":"bg-main-bg/30"}`,children:[e.jsx("div",{className:"head",children:e.jsx("h3",{className:"text-xl",children:a||"Have questions?"})}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6",children:[e.jsx("div",{className:"name",children:e.jsx("input",{name:"name",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Name"})}),e.jsx("div",{className:"surname",children:e.jsx("input",{name:"surname",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Surname"})}),e.jsx("div",{className:"email",children:e.jsx("input",{name:"email",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"email",placeholder:"Email"})}),e.jsx("div",{className:"subject",children:e.jsx("input",{name:"subject",className:"name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Subject"})})]}),e.jsx("div",{className:"textarea",children:e.jsx("textarea",{className:"focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]",name:"comment",id:"comment",placeholder:"Comment"})}),e.jsx("div",{className:"login-btn flex justify-center items-center",children:e.jsx("button",{className:"py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold glowing-btn max-w-[12rem]",children:"Send"})})]})}function wa(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"contact bg-dark relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsx("div",{className:"wrapper flex items-center justify-center w-full",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full",children:[e.jsxs("div",{className:"left md:col-span-1",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("div",{className:"wrap",children:e.jsx("h3",{className:"text-3xl text-wht-gradient",children:"Contact Us"})}),e.jsxs("p",{children:["Questions? Doubts? ",e.jsx("br",{})," Please contact us anytime and our team will take care of you!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(H,{})})]}),e.jsx("div",{className:"right md:col-span-2",children:e.jsx(G,{})})]})})})}),e.jsx(P,{})]})}function Na({heading:t,para:a,fls:s}){const[r,o]=i.useState(0),[l,d]=i.useState(s),c=i.useRef(null);return i.useEffect(()=>{o(c.current.clientHeight)},[l]),e.jsxs("article",{className:"dash-home-bg rounded-xl global-shadow ",children:[e.jsxs("header",{onClick:()=>d(!l),className:"flex justify-between cursor-pointer py-3 px-4",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base font-Montserrat font-semibold",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t}})}),e.jsx("div",{className:"arrow flex justify-center items-center ml-3",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${l?"rotate-180":""}`,src:g,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:l?r+"px":"0"},className:"faq-content transition-all duration-300 overflow-hidden",children:e.jsx("div",{ref:c,className:"wrapper",children:e.jsx("div",{className:"text-[0.9rem] xs:text-base px-4 pb-5 pt-4 border-t border-primary/20",children:e.jsx("div",{className:"faq-collaps",dangerouslySetInnerHTML:{__html:a}})})})})]})}function ka(){const[t,a]=i.useState("Started"),{pathname:s}=w(),r={Started:[["Trading instruments",`<div className="paras">
                <ul>
                  <li>
                    <h5>Tradable Instruments and Commission: </h5> You have the
                    opportunity to trade a variety of instruments, including
                    Forex, Crypto, Indices, Metals, and Energies, all with RAW
                    spreads. For each standard lot round turn, there is a $3
                    commission fee. It&apos;s worth noting that trading Indices
                    does not incur any commission fees.
                  </li>
                  <li>
                    <h5>Trading Equities on the Master Account: </h5>
                    Trading equities is strictly prohibited on the Master
                    account, also known as the Funded account. Engaging in
                    equity trading on this account type will result in a direct
                    violation of the account's terms.
                  </li>
                </ul>
              </div>`],["Inactivity",`<div className="paras">
                <ul>
                  <li>
                    Any trading account inactive for 30 days will be
                    automatically suspended.
                  </li>
                </ul>
              </div>`],["What happens if I breach a trading objective?",`<div className="paras">
                <ul>
                  <li>
                    If you breach any trading objective or you commit an hard
                    breach, all your open trades will be closed, your limit &
                    stop orders will be cancelled and the account is switched to
                    view-only mode. In your account dashboard on our website,
                    you will see which trading objective(s) you have breached
                    with the exact time. Also, we will notify you by E-mail if
                    we detect a breach of a trading objective.
                  </li>
                </ul>
              </div>`],["Executing trades",`<div className="paras">
                <ul>
                  <li>
                    Ensure you use the correct executable trading pair for the
                    instrument you intend to trade.
                  </li>
                  <li>
                    Executable Forex and Metals pairs are denoted with a "p" at
                    the end, such as XAUUSDp and EURUSDp.
                  </li>
                  <li>
                    In contrast, Indices and Crypto pairs do not include the "p"
                    at the end, for example, BTCUSD and US30.
                  </li>
                </ul>
              </div>`],["Commissions",`<div className="paras">
                <ul>
                  <li>
                    Trading opportunities encompass Forex, Crypto, Indices,
                    Metals, and Energies, all with RAW spreads. A standard lot
                    round turn (open-close) incurs a $3 commission. Notably,
                    trading Indices is commission-free.
                  </li>
                </ul>
              </div>`],["Tradable instruments",`<div className="paras">
                <ul>
                  <li>
                    Trading opportunities encompass Forex, Crypto, Indices,
                    Metals, and Energies, all with RAW spreads. A standard lot
                    round turn (open-close) incurs a $3 commission. Notably,
                    trading Indices is commission-free.
                  </li>
                  <li>
                    However, it&rsquo;s essential to note that trading equities,
                    also referred to as stocks, is strictly prohibited on the
                    Funded account.
                  </li>
                  <li>
                    Engaging in such trading activities will directly contravene
                    the terms of the account and result in account violations.
                  </li>
                </ul>
              </div>`]],Evaluation:[["Evaluation (Challenge) Phases 1 & 2",`<div className="paras">
                <ul>
                  <li>
                    We offer The Funded Hub Evaluation Course, consisting of two
                    phases: Student and Practitioner. Successfully completing
                    these phases will elevate you to the status of a Funded
                    Trader (formerly known as a Master Trader). It is imperative
                    to possess a dynamic trading system and a robust risk
                    management profile to excel in the evaluation course. After
                    achieving your profit target in Phase 2, our Risk Team will
                    conduct a thorough manual review of your entire evaluation
                    period, which will be completed within two working days.
                  </li>
                  <li>
                    <h5>2.1. The Student Phase (Phase I):</h5>The Student Phase
                    assesses your trading skills while establishing your
                    identity as a trader. In this phase, you must attain a
                    profit target of 8% without any rule violations. Upon
                    passing, you will receive access to your Phase 2 account
                    within 24 hours.
                  </li>
                  <li>
                    <h5>2.2. The Practitioner Phase (Phase II):</h5>The
                    Practitioner Phase serves to confirm the results and
                    outcomes of the Student Phase. During this phase, you must
                    achieve a profit target of 5% without violating any rules.
                  </li>
                  <li>
                    <h5>2.3. Weekend and News Trading Allowed:</h5>
                    You are permitted to hold trades over the weekend and engage
                    in trading during news events during the evaluation stage.
                  </li>
                  <li>
                    <h5>2.4. 5% Maximum Daily Loss Limit:</h5>
                    The Maximum Daily Loss Limit is the maximum amount a trader
                    is allowed to lose in a single day. For calculation
                    purposes, the higher value between equity and balance is
                    considered. This limit is set at 5% of the initial equity or
                    balance each day. It is important to note that the daily
                    maximum loss resets at 00:00 CEST/server time every day.
                  </li>
                  <li>
                    <h5>2.5. 10% Maximum Loss Limit:</h5>
                    The Maximum Loss Limit specifies the minimum level to which
                    equity or balance cannot fall. This limit is set at 10% of
                    the initial account size. For example, if a trader holds a
                    $100,000 account, the equity or balance cannot dip below
                    $90,000 at any given time.
                  </li>
                  <li>
                    <h5>2.6. Trading Strategy:</h5>
                    You have the freedom to trade as you see fit. You can employ
                    Expert Advisors (EAs), hold positions during news events,
                    keep trades open over the weekend, and utilize lot sizes in
                    accordance with the leverage provided. However, it's
                    essential to refrain from any trading activities aimed at
                    exploiting MetaTrader inefficiencies, such as Gap trading,
                    high-frequency trading, martingale trading, toxic trading
                    flow, layering, server spamming, latency arbitrage, grid
                    trading, hedging, long short arbitrage, reverse arbitrage,
                    tick scalping, server execution, opposite account trading.
                    Copy trading or third-party account management will also
                    result in account termination when associated with Funding
                    Pips. Remember, success is achieved through genuine trading
                    skills, and attempting to circumvent the rules is not
                    permissible.
                  </li>
                  <li>
                    <h5>Note Regarding Layering/Grid (Guideline):</h5>
                    You are allowed to have a maximum of 3 positions while in a
                    Drawdown. Adding a fourth position while the other entries
                    are in drawdown will be considered Grid/Layering, leading to
                    a violation of your account, a decline in your evaluation,
                    or forfeiture of your payout.
                  </li>
                </ul>
              </div>`],['Is there a second chance, aka "Free Retry"?',`    <div className="paras">
                <ul>
                  <li>
                    We want to clarify that a free retry option is available
                    exclusively for those who have chosen to purchase a
                    challenge with specific time limits, such as the 30-day
                    Phase 1 or 60-day Phase 2, or the 45-day combined Phase 1
                    and 2.
                  </li>
                  <li>
                    To be eligible for a free retry, your trading account must
                    show a profit of at least 1% total, e.g. On a $100.000
                    challenge account, it should be in profit of at least $1.000
                    at the moment of the breach to be eligible for a free retry.
                  </li>
                  <li>
                    Please note that, if you choose a no time limit
                    configuration, we do not offer free retries. You have the
                    flexibility to trade and reach your profit target at your
                    own pace without the stress or pressure of a deadline.
                  </li>
                  <li>
                    We encourage you to take your time and trade comfortably,
                    ensuring that your trading decisions are well thought out
                    and strategic.
                  </li>
                </ul>
              </div>`]],TFH:[["Merging Accounts",`<div className="paras">
                <ul>
                  <li>
                    The initial trading account you will manage will be the size
                    you originally enrolled for, which could be $5.000, $10.000,
                    $25.000, $50.000, $100.000 or $200.000. You will have the
                    opportunity to trade up to a combined total of $400,000.
                  </li>
                  <li>
                    <h5>1.5.1 Individual Evaluation (Phase 1 and 2) Trading</h5>
                    It is important to note that each Challenge phase, whether
                    Phase 1 or Phase 2, must be traded individually. You cannot
                    duplicate or mirror trades (whether through an EA or manual
                    trading) from a master account to an evaluation account or
                    from one Evaluation account to another. This is to ensure
                    that each phase is passed based on its unique trades and
                    trade ideas.
                  </li>
                  <li>
                    <h5>1.5.2 Master Account Merging</h5>
                    Following successful completion of the evaluation process,
                    you have the option to either combine your Master/Funded
                    accounts into a single account or keep them separate, based
                    on your personal preference. To merge your Master/Funded
                    accounts into one consolidated account, kindly contact our
                    team at
                    <a href="https://help@thefundedhub.com/">
                      help@thefundedhub.com
                    </a>
                    or open a ticket through the helpdesk. We are here to assist
                    you with the process.
                  </li>
                </ul>
              </div>`]],TradingRules:[["Trading Behaviour and rules applicable on the Master account",`<div className="paras">
                <ul>
                  <li>
                    The following trading behavior rules are designed to ensure
                    that once you are funded, you maintain your funding status.
                  </li>
                  <li>
                    In the event of a breach of any rules mentioned in this
                    section, all positions on the broker&rsquo;s platform will
                    be closed immediately, and the Customer&rsquo;s Trading
                    Account will be blocked.
                  </li>
                  <li>
                    <h5>5% Maximum Daily Loss Limit:</h5>The Maximum Daily Loss
                    Limit represents the maximum amount a trader is allowed to
                    lose each day. For calculation purposes, the higher value
                    between equity and balance is considered.
                  </li>
                  <li>
                    This limit is set at 5% of the starting equity or balance
                    every day. The rule stipulates that the equity of the day,
                    derived from the currently floating Profit and Loss (PnL)
                    combined with all closed positions of that day, must not
                    exceed the Maximum Daily Loss Limit. This limit resets daily
                    at 00:00 CEST/server time.
                  </li>
                  <li>
                    <h5>10% Maximum Loss Limit:</h5>
                    The Maximum Loss Limit signifies the minimum level to which
                    equity or balance cannot fall. This rule is set at 10% of
                    the initial account size. For instance, if a trader
                    possesses a $100,000 account, the equity or balance cannot
                    drop below $90,000 at any given moment.
                  </li>
                  <li>
                    <h5>Required Stop Loss Rule On Master Accounts:</h5>This
                    rule specifically applies to Master accounts. It mandates
                    the placement of a Stop Loss on every trade within 60
                    seconds after opening the trade. If a Stop Loss is not set
                    within this timeframe, the trade will be automatically
                    closed. <br />
                    Traders are allowed two instances of not adhering to this
                    rule; a third instance will result in a violation of trading
                    rules, leading to the closure of the Master account. The
                    Stop Loss count resets every week.
                  </li>
                  <li>
                    <h5>
                      Allowed to Hold Trades During News and Over the Weekend:
                    </h5>
                    Traders are permitted to maintain trades during news events
                    and over the weekend. Profits from trades initiated 2
                    minutes before and after a high-impact news event affecting
                    the currency will not be counted. Our system will
                    automatically close trades opened within the prohibited time
                    window.
                  </li>
                  <li>
                    Engaging in high-impact news event trading will result in
                    the deduction of profits made from trades executed within
                    the restricted 4-minute window. <br />
                    We source our news calendar data from Forex Factory. If
                    deductions result in a breach of the daily loss limit or
                    maximum loss limit, the trader is accountable for the
                    violation.
                    <br />
                    Please refer to our FAQ &ldquo;Can I hold trades during news
                    and over the weekend?&ldquo; for more information.
                  </li>
                  <li>
                    <i>
                      Note: If a trade is opened before the prohibited time
                      window and closed within that window, the trade will be
                      counted.
                    </i>
                  </li>
                  <li>
                    <h5>Trading Strategy:</h5>
                    Traders have the freedom to adopt their preferred trading
                    strategies. Whether utilizing Expert Advisors (EAs), holding
                    positions during news events, maintaining trades over the
                    weekend, or trading with lot sizes as large as the leverage
                    permits, you have the flexibility to trade according to your
                    strategy. <br />
                    However, trading activities exploiting MetaTrader
                    inefficiencies (such as Gap trading, high-frequency trading,
                    martingale trading, toxic trading flow, layering, server
                    spamming, latency arbitrage, grid trading, hedging, long
                    short arbitrage, reverse arbitrage, tick scalping, server
                    execution, opposite account trading) are strictly
                    prohibited. <br />
                    Additionally, copy trading or account management by a
                    third-party vendor will lead to account termination.
                    Remember, your ideas come with our risk.
                  </li>
                  <li>
                    To secure funding and thrive as a trader, you must possess
                    genuine trading skills. There are no shortcuts.
                  </li>
                  <li>
                    <i>
                      Note: To avoid confusion, we adhere to the following
                      guideline for Layering/Grid: Traders are allowed a maximum
                      of 3 positions in Drawdown. Introducing a fourth position
                      while existing entries are in drawdown will be considered
                      Grid/Layering, leading to account violation, evaluation
                      decline, or forfeiture of payout.
                    </i>
                  </li>
                </ul>
              </div>`],["IP Addresses",`  <div className="paras">
                <ul>
                  <li>
                    <h5>IP Address matching Challenge Stages and Funded</h5>
                    The region of your IP address(es) used to purchase the
                    Evaluation, log in to our
                    <a href="https://thefundedhub.com/login">
                      thefundedhub.com/login
                    </a>
                    , Phase 1 trading account , Phase 2 trading account and the
                    Funded trading account should match. If our Risk Team
                    detects a change in region, they may reach out to you to
                    confirm and request proof.
                  </li>
                  <li>
                    <h5>IP Address Funded Account</h5>
                    The region of your IP address(es) used to log into the
                    Funded account must remain consistent. If our Risk Team
                    detects a change in region, they may reach out to you to
                    confirm and request proof, such as a plane ticket, passport
                    stamp, or live video from the location. This measure is in
                    place to protect you from third-party vendors. If you
                    anticipate traveling, kindly notify our support team
                    beforehand to keep us informed and prevent interference from
                    our end.
                  </li>
                </ul>
              </div>`],["Trading Style Restrictions",`<div className="paras">
                <ul>
                  <li>
                    <span>Layering / Grid:</span>
                    You are allowed to enter into positions - We define
                    layering/grid as having three positions and entering into a
                    fourth. If we see this your account will be terminated up to
                    and including profits
                  </li>
                  <li>
                    <span>Martingale:</span>
                    You cannot martingale trading. Maven defines martinadle as
                    after a losing trade you increase the trade sizina hobina to
                    win back your losses. Adding multiple positions of the same
                    size will also count towards being martingale. You cannot
                    increase your total margin(on a pair) on the account after a
                    loss. If we see martingale three times. the account will be
                    terminated
                  </li>
                  <li>
                    <span>Cheating: </span>
                    Taking advantage of the Meta Trader inefficiencies such as
                    High Frequency Trading. Toxic Trading Order Flow. Lona/Short
                    arbitrage. reverse arbitrage. tick scalping. server
                    execution is strictly prohibited and your account will be
                    terminated up to and including profits.
                  </li>
                  <li>
                    <span>Reverse / Group Hedging:</span> Using your account to
                    bet in one direction on a singular trade against another
                    account is not allowed. As this is an attempt at reversing
                    the trade of another account, for a 100% chance of winning
                  </li>
                  <li>
                    <span>Hedging:</span> here are numerous malicious A hedging
                    bots that aim to exploit the demo-trading environment, you
                    cannot exclusively hedge your way through a challenge or
                    live account. We cannot accurately copy your trading onto a
                    live server. If over 50% of your trades are hedging trades
                    you will be asked to retake the challenge or have your
                    profits denied and asked to alter your strategy. Hedging may
                    be defined as true if any time you are betting on the same
                    pair in two different directions.
                  </li>
                  <li>
                    <span>Gambling: </span>You cannot gamble your way through a
                    challenge phase. We define gambling as:
                    <ul>
                      <li>
                        Greater than 75% of your trades being placed without a
                        stow loss(this includes if your stop loss is further
                        than the breachable limit)
                      </li>
                      <li>
                        More than 50% of your profit coming from a news event
                      </li>
                      <li>
                        More than 50% of your trades being taken under 1 minute
                        hold time
                      </li>
                      <li> Passing a challenge in one or two trades</li>
                      <li>
                        Having more than 75% of your trades maximizing the lot
                        size restrictions
                      </li>
                      <li>
                        If we see this we will ask you to alter your trading
                        strategy and make you rerun the challenge phase. This
                        rule is in place as we cannot accurately coo your
                        trading over to our live servers with this type of
                        trading.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>**Lot size Restrictions: </span>We limit each trader
                    to having a maximum of 25 lots per pair at any given time.
                    However you can have as many assets running at once as you
                    like. For accounts under 100k in size, we limit to 10 lots.
                  </li>
                  <li>
                    <span>EA:</span>EAs are permitted so long as they do not
                    break any of the above rules. We may ask for proof of your
                    EA to ensure that the EA you are using is not malicious.
                    HFT, hedge zone etc are not permitted at Maven and will
                    result in a termination of your account.if you cannot
                    provide the code to your EA, your account will be terminated
                  </li>
                  <li>
                    <span>NOTE:</span>A &apos;trade&apos; can be determined as a
                    position held by the trader on a specific pair. A
                    &apos;Trade&apos; may be one entry or multiple entries with
                    similar timings and lot sizes. A trade could be determined
                    by multiple entries on the same pair at the same time.Trades
                    with vastly smaller lot sizes, will NOT count as a trade.
                  </li>
                </ul>
              </div>`],["Expert Advisor (EA) usage on Challenge and Funded Account",`<div className="paras">
                <p>
                  We strictly prohibit the execution of trades through Expert
                  Advisors (EAs) on both Challenge and Funded accounts.
                </p>
                <p>
                  Our system is designed to disable EA trade execution at the
                  server level.
                </p>
                <p>
                  However, should our risk management system detect any attempts
                  to open trades using an Expert Advisor, this will be
                  considered a direct violation of our rules, constituting an
                  attempt to bypass our security features.
                </p>
                <p>
                  As a result, this breach will lead to the immediate
                  termination of your account.
                </p>
                <p>
                  Once you&rsquo;ve demonstrated your trading proficiency and
                  successfully completed Phase 1, your account status will be
                  marked as &rsquo;Passed&rsquo; on your Personal Hub dashboard.
                </p>
                <p>
                  In addition, you will receive a confirmation email notifying
                  you of your Phase 1 success.
                </p>
                <p>
                  Right after this, you will promptly receive the credentials
                  for your Phase 2 trading account.
                </p>
                <p>
                  You&rsquo;ll find this new account listed in your Personal Hub
                  on our website, and you will also receive a notification email
                  regarding Phase 2.
                </p>
              </div>`],["Maximum Daily Loss Explained",`   <div className="paras">
                <ul>
                  <li>
                    The Maximum Daily Loss represents the maximum allowable
                    daily loss for your account. <br />
                    This rule calculates the daily loss limit based on the
                    higher value between your equity and balance.
                    <br />
                    The limit is expressed as a percentage of your initial
                    equity or balance and applies each day. <br />
                    The rule dictates that your daily equity, which combines
                    your current floating Profit and Loss (PnL) and all closed
                    positions for that day, must not breach the Maximum Daily
                    Loss Limit. The daily loss limit resets at 00:00 CEST/server
                    every day.
                  </li>
                  <li>
                    <h5>Example 1: Higher Equity at the Start of the Day</h5>
                  </li>
                  <li>
                    Let&apos;s consider day 5, where your account balance is
                    $105,000, and your equity stands at $107,000. In this case,
                    the Daily Loss Limit is calculated at 5% of the equity
                    because it is the higher value:
                  </li>
                  <li>
                    <i>Daily loss = $107,000 * 5% = $5,350 Daily Loss Limit.</i>
                  </li>
                  <li>
                    This signifies that your equity cannot drop below $101,650
                    on day 5. If, at any moment on that day, your equity falls
                    below $101,650, your account will be closed.
                  </li>
                  <li>
                    <h5>Example 2: Higher Balance at the Start of the Day</h5>
                  </li>
                  <li>
                    Now, let&apos;s examine day 7, where your account balance is
                    $100,000, and your equity is $99,000. In this scenario, the
                    Daily Loss Limit is calculated as 5% of the balance because
                    it is the higher value:
                  </li>
                  <li>
                    <i>Daily loss = $100,000 * 5% = $5,000 Daily Loss Limit.</i>
                  </li>
                  <li>
                    This means your equity must not fall below $95,000 on day 7.
                    Should your equity dip below $95,000 at any point during
                    that day, your account will be closed.
                  </li>
                </ul>
              </div>`],["Maximum Total Loss Explained",`<div className="paras">
                <ul>
                  <li>
                    The Maximum Loss Limit is the threshold that your equity or
                    balance must not fall below. <br />
                    This rule is configured at 10% of your initial account size.
                    <br />
                    To illustrate, if your account balance is $100,000 and the
                    Maximum Loss Limit is set at 10%, your equity or balance
                    should never drop below $90,000 under any circumstances.
                  </li>
                  <li>
                    <i>Example:</i>
                  </li>
                  <li>
                    Let&apos;s consider you have opted for a $100,000 account.
                    <br />
                    In this example, the Maximum Loss Limit is calculated as 10%
                    of the initial balance, which amounts to $100,000.
                  </li>
                  <li>
                    <h5>
                      Maximum Loss = $100,000 * 10% = $10,000 (Maximum Loss
                      Limit).
                    </h5>
                  </li>
                  <li>
                    This indicates that your equity or balance must always
                    remain above $90,000.
                    <br />
                    Should your equity or balance dip below $90,000 at any
                    point, your account will be subject to closure.
                  </li>
                </ul>
              </div>`]],Billing:[["Payouts & Profit Splits",`    <div className="paras">
                <ul>
                  <li>
                    <h5>First Payout after 30 Days + 80% Profit Split:</h5>
                    Following the execution of the first trade on the funded
                    account, the initial payout becomes available after 30
                    calendar days. Subsequently, traders are eligible to request
                    payouts with an 80% profit split applied.
                  </li>
                  <li>
                    <h5>Bi-Weekly Payouts + 85% Profit Split:</h5>
                    After the first payout, traders can request bi-weekly
                    payouts, which can be made every 14 calendar days.
                    Additionally, the profit split for these payouts increases
                    to 85%.
                  </li>
                  <li>
                    <h5>Weekly Payouts + 90% Profit Split:</h5>* After the 4th
                    payout, the payout schedule transitions to weekly payouts,
                    which can be requested every 7 calendar days. Additionally,
                    the profit split for these payouts increases to 90%.
                  </li>
                  <li>
                    We provide you with four convenient withdrawal options: Wire
                    transfer, Wise, PayPal, and Crypto. Among these, Crypto
                    stands out as the most favored choice due to its
                    cost-effectiveness and speed.
                  </li>
                  <li>
                    If you wish to withdraw funds directly to your bank account,
                    we can certainly accommodate that. However, kindly note that
                    we require a minimum of $1000 in available profit split to
                    initiate this method; failing to meet this threshold may
                    result in additional charges.
                  </li>
                  <li>
                    Requesting a withdrawal is a straightforward process. You
                    can simply submit your Withdrawal Request through the
                    Dashboard, and our system will automatically compute the
                    withdrawal amount based on your account type and ranking.
                    Once the withdrawal is successfully processed, your account
                    will be reset accordingly.
                  </li>
                  <li>
                    <h5>
                      Note: The minimum amount for a payout is 1% of the initial
                      balance, including our split.
                    </h5>
                  </li>
                </ul>
              </div>`]]};return i.useEffect(()=>{window.scrollTo(0,0)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"faq bg-dark relative purple-shadow pt-16 sm:pt-28",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper relative pb-24 sm:pb-36 md:pb-44 w-full grid gap-16 xs:gap-20 md:gap-32 max-w-[75rem] m-auto",children:[e.jsxs("div",{className:"top-content py-10 md:py-20 relative",children:[e.jsx("div",{className:"header grid relative",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2 text-wht-gradient",children:"Frequently asked questions"})})}),e.jsxs("div",{className:"content grid md:grid-cols-12 gap-12 mt-10 relative faq-content",children:[e.jsx("div",{className:"left md:col-span-3 relative",children:e.jsxs("div",{className:"options sm:mr-[1rem] flex flex-wrap xs:grid grid-cols-2 md:grid-cols-1 gap-3 relative",children:[e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Started"?"border-primary/30 before:opacity-40":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("Started"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"General"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Evaluation"?"border-primary/30 before:opacity-40":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("Evaluation"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Evaluation Program"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="TFH"?"border-primary/30 before:opacity-40":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("TFH"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"TFH Funded"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="TradingRules"?"border-primary/30 before:opacity-40":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("TradingRules"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Trading Rules"})}),e.jsx("div",{className:`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${t==="Billing"?"border-primary/30 before:opacity-40":"border-transparent before:opacity-0 hover:border-primary/40"}`,onClick:()=>a("Billing"),children:e.jsx("h5",{className:"px-3 sm:px-5",children:"Order and Billing"})})]})}),e.jsx("div",{className:"right faq-collaps md:col-span-9 flex flex-col gap-4 relative",children:r[t].map((o,l)=>e.jsx(Na,{heading:o[0],para:o[1]},l+t))})]})]}),e.jsx("div",{className:"flex items-center relative",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10  w-full",children:[e.jsxs("div",{className:"left md:col-span-1 break-all relative",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("div",{className:"wrap",children:e.jsx("h3",{className:"text-3xl text-wht-gradient",children:"Contact Us"})}),e.jsxs("p",{children:["Questions? Doubts? ",e.jsx("br",{})," Please contact us anytime and our team will take care of you!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(H,{})})]}),e.jsx("div",{className:"right md:col-span-2 relative",children:e.jsx(G,{})})]})})]})})}),e.jsx(P,{})]})}function Ta(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("main",{className:"cookie bg-dark pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Cookie Policy"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsxs("p",{children:["When displaying content, advertisements and other functionalities on the"," ",e.jsx(m,{to:"/",className:"underline",children:"www.thefundedhub.com"})," ","website (the “Website”) various technologies are used to collect and process personal data, including cookies. You will find details concerning this method of processing in this Cookie Policy."]}),e.jsxs("ul",{className:"",children:[e.jsx("span",{children:"In this Cookie Policy, you will find information regarding the following:"}),e.jsx("li",{children:"1) Who is the operator of the Website and whom to contact?"}),e.jsx("li",{children:"2) What technologies do we use and what are cookies?"}),e.jsx("li",{children:"3) How to set up the use of cookies on the Website?"}),e.jsx("li",{children:"4) How to set up cookies in the web browser?"}),e.jsx("li",{children:"5) What cookies do we use on the Website?"}),e.jsx("li",{children:"6) What are your rights and how can you exercise them"}),e.jsx("li",{})]}),e.jsxs("p",{children:["If you have any questions relating to the processing of your personal data, including cookies in connection with the operation of the Website, and to exercise your rights, you can contact us at"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})]}),e.jsx("span",{children:"We and some third parties process personal data using cookies and other technologies on the Website"}),e.jsxs("p",{children:[e.jsx("div",{children:"WHAT TECHNOLOGIES DO WE USE AND WHAT ARE COOKIES?"}),"Cookies are small files that are stored on your device and that help us collect information about your activities. In particular, cookies allow us to remember your settings, preferences, and your access data, provide targeted content and marketing communications, and analyses the operation of the Website. Cookies may come from us or from third parties whose services we use. In addition to cookies, we may also process your IP address, which is a unique number assigned to a computer or other device communicating via the internet protocol, and analytical scripts, which are small pieces of a computer code through which users and their behavior on websites can be tracked."]}),e.jsxs("p",{children:[e.jsx("div",{children:"HOW TO SET UP THE USE OF COOKIES ON THE WEBSITE?"}),"You can set up your preferences in your web browser and also in your operating system. Some parts of the Website are designed to work with the use of cookies. If you reject some cookies, it may affect the use of some features on the Website or parts of it."]}),e.jsxs("p",{children:[e.jsx("div",{children:"HOW TO SET UP COOKIES IN THE WEB BROWSER?"}),"You can set up the storage of cookies on your device in your web browser. You can set up your browser to accept all cookies, reject them, or indicate when a cookie is being sent, at any time. For more information and options, see the operating system settings of your device."]}),e.jsxs("ul",{children:[e.jsx("span",{children:"Most browsers automatically accept cookies by default. You can get more information about setting up cookies for the most common browsers here:"}),e.jsx("li",{children:"Google Chrome"}),e.jsx("li",{children:"Internet Explorer"}),e.jsx("li",{children:"Microsoft Edge"}),e.jsx("li",{children:"Mozilla Firefox"}),e.jsx("li",{children:"Opera"}),e.jsx("li",{children:"Safari"})]}),e.jsx("span",{children:"You can also delete cookies from your device’s memory at any time. For more information, access your browser or operating system."}),e.jsxs("p",{children:[e.jsx("div",{children:"WHAT COOKIES DO WE USE ON THE WEBSITE?"}),e.jsx("span",{children:"We use the following types of cookies on the Website:"}),e.jsxs("ul",{className:"grid gap-5 mt-5",children:[e.jsxs("li",{children:[e.jsx("div",{children:"➔ Necessary basic cookies:"}),"These cookies allow you to browse the Website and use its functionalities. Through these cookies, we also ensure the security and administration of the Website. Enabling these cookies is automatic and cannot be turned off, as they are necessary for the operation of the Website. We only keep the necessary basic cookies for the duration of your current session."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Functional cookies:"})," Thanks to these cookies, we are able to provide you with a better user experience when using the Website and services. For example, this type of cookie will ensure that the information displayed when you visit the Website corresponds to your preferences and your previous settings. We store functional cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Analytical cookies:"})," Thanks to these cookies, we obtain information on how our Website and services are used. These cookies allow us, for example, to find out that you have visited the Website before, or to monitor which parts of the Website you use most often. We use third-party tools for analytics. We store analytical cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent."]}),e.jsxs("li",{children:[e.jsx("div",{children:"➔ Advertising cookies: "}),"Through these cookies, we and our partners can offer you targeted advertising, for example, based on the collection of information about the services that you have viewed or ordered on the Website or other websites. The Website may also display content from third-party websites or services, and third-party cookies may be stored on your device. The storage and use of those cookies is administered by third parties based on their own rules, which you will find in their privacy policies. We store advertising cookies for the period specified for individual cookies in the list under the link below or until the withdrawal of consent. A list of all cookies that we use is available here."]}),e.jsxs("li",{children:[e.jsx("div",{children:"What are your rights and how can you exercise them?"}),"You can withdraw your consent to the processing of certain cookies by deleting them in the settings of your web browser. You can exercise other rights specified below by sending a request to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})]})]})]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right of access to personal data"}),"You can ask us at any time to send you a confirmation as to whether or not your personal data are being processed. If we process your data, we will provide you with further details on the processing. If you request it, we will also provide you with a copy of the personal data processed. Please note that the first copy is free of charge, but any following copy will be provided for a small fee."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to rectification of personal data"}),"If we process your personal data inaccurately, you can notify us of this fact, and we will rectify the inaccurate personal data without undue delay. If you register on the Website, you will be able to rectify and amend your personal data yourself by editing your user account"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to erasure of personal data (“right to be forgotten”)"}),"You have the right to obtain from us erasure of personal data concerning you without undue delay in the following cases: If the data are no longer necessary in relation to the purposes for which we have collected or otherwise processed them; If you withdraw your consent to their processing and, at the same time, there will be no other legal ground for their processing (this only applies in the cases where we process personal data on the basis of your consent);",e.jsx("br",{}),"If you object and there are no overriding legitimate grounds for the processing, or if you object to the processing for direct marketing purposes; or",e.jsx("br",{}),"If your personal data are processed unlawfully."]}),e.jsx("p",{children:"We will not be able to act on the request for erasure of personal data if their processing is necessary for exercising the right of freedom of expression and information, for compliance with any of our legal obligations, for the performance of a task carried out in the public interest, for the establishment, exercise, or defense of our legal claims, or for other reasons provided for by law."}),e.jsxs("p",{children:[e.jsx("div",{children:"Right to restriction of processing"}),"In cases stated in article 18 of the GDPR, you have the right to obtain from us restriction of processing of your personal data for a certain period."]}),e.jsxs("p",{children:["Right to data portability and to the provision of data in a machine-readable format In the case of automated processing based on your consent or performance of the contract, you have the right to receive the data in a structured, commonly used and machine-readable format and to have them transmitted by us to another personal data controller. ",e.jsx("br",{})," Right to object ",e.jsx("br",{})," ","If we process personal data on the basis of our legitimate interest, you have the right to object to such processing. If you file such an objection, we will not be able to process your personal data unless we demonstrate compelling legitimate grounds for the processing, which override your interests or rights and freedoms, or for the establishment, exercise or defense of our legal claims. In case we process your personal data for marketing purposes about our products and services, we will terminate the processing without undue delay upon receipt of the objection. In such a case, we will no longer be able to send you offers of our products and services."]}),e.jsx("p",{children:"If processing is based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on the consent given before its withdrawal."}),e.jsxs("p",{children:[e.jsx("div",{children:"Right not to be the subject of automated decision-making"}),"Except where processing is necessary for entering into, or performance of, a contract, where this is permitted by applicable law, or based on your express consent, you have the right not to be the subject of any decision which is based solely on automated processing, including profiling, which produces legal effects concerning you or similarly affects you to a significant extent."]}),e.jsxs("p",{children:[e.jsxs("div",{children:["Right to lodge a complaint with the supervisory authority"," "]}),"If you believe that we are processing your data in violation of the relevant legal regulations, you can lodge a complaint with the relevant supervisory authority."]})]})]})})}),e.jsx(P,{})]})}function Sa(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("main",{className:"privacy bg-dark pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Privacy Policy"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsxs("p",{children:["When you use our services, we collect and store personal data about you. This Privacy Statement (the 'Policy') informs you of the methods used to handle your personal data.",e.jsx("br",{}),"Information about the following is included in this Privacy Policy:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"How do you get in touch with the person in charge of your personal data?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"In what ways do we obtain and what information do we gather about you?"}),e.jsx("li",{children:"How do we make use of the information you provide about yourself?"}),e.jsx("li",{children:"How do we keep our customers' personal information safe and secure?"}),e.jsx("li",{children:"We share your personal information with whom?"}),e.jsx("li",{children:"What about international organizations and third countries?"}),e.jsx("li",{children:"When it comes to enforcing your rights, how do you go about it?"})]})]}),e.jsxs("p",{children:[e.jsx("div",{children:"Who is the controller of your personal data and whom to contact?"}),"The controller of personal data is THE FUNDED HUB GLOBAL LLP with its registered office at 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX you can contact AC THE FUNDED HUB GLOBAL LLP at"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","regarding any questions and the exercise of rights relating to the processing of your personal data."]}),e.jsxs("p",{children:[e.jsx("div",{children:"What and how do we collect personal information about you?"}),"The information in this part is meant to give you a broad overview of how and what types of personal data we acquire from you. Personal data includes any information that can be used to identify or connect you to a specific individual."]}),e.jsx("p",{children:"When you use our services, you provide us with much of the information we need to know about you. In particular, this includes:"}),e.jsx("p",{children:"Specifically, whether you sign up for an account, provide personal information, place an order, participate in an event or project, or connect with us via customer service or social media. Identification and contact data include your name; surname; phone number; e-mail; postal address; date of birth; username and password; and any warranty claims you may have made. Payment data include your bank account information; and other data, such as records of communication between you and our company or information about any warranty claims."}),e.jsx("p",{children:"Your personal information that we automatically gather when you utilize our products or services. Among these are information about your device (such as your IP address), information about how you use a website (such as the time and date of your visit and the country from which you accessed the website), and information about how you use a service (such as the login and logout information, your account settings, the value of your fictitious capital, your account currency, business strategy)"}),e.jsx("p",{children:"If you choose to link your social networking accounts to your account on the website, third parties may give us information about you. Examples of these third parties include the providers of trading platforms on which you choose to trade using our services. Financial data (such as kind of instrument, time of starting and closing a trade), as well as data from social networks (such as profit or loss), are included (user name, profile picture, e-mail address associated with the account on the social network). For details on how trading platform providers and social network operators use your personal information for their own purposes, please refer to their privacy policies."}),e.jsxs("p",{children:[e.jsx("div",{children:"Do you know what we do with the information you provide us?"}),"This is how we make use of personally identifiable information:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Creating a user account and signing up:"}),"In order to utilize the services, you must register on the website and create an account, and we use your personal data for this purpose"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Your name, email address, and phone number are required to identify you and get in touch with you."]}),e.jsx("p",{children:e.jsx("div",{children:"The legal justification for the processing of personal data:"})}),e.jsxs("p",{children:["You must provide your personal data to us in order for us to register your user account, as we cannot do so without it.",e.jsx("br",{}),"Providing services, exercising contractual rights and responsibilities, and so on:",e.jsx("br",{}),"We need to process your personal data in order to offer you our services, i.e. to give you appropriate access, tools, and assistance, and to conduct transactions. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:["Personal data includes name, address, phone number, email address, payment information, information about how the service is used, information about simulated transactions, and information from social media profiles that you choose to link to your account on the website. ",e.jsx("br",{}),"Legitimate interest or fulfillment of a contract under which we provide our services are both sufficient legal grounds for processing. We retain your personal information for a short amount of time after we no longer provide you with services. The processing is necessary to preserve and defend our rights, which are based on our legitimate interests."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Promotion of our products and services or participation in events:"}),"The marketing messages we send to our existing and former customers will be based on our products and services. Commercial communications may also be sent to you, to the extent to which you have given us your permission. To make it easy for you to discontinue receiving business communications, each email received will be clearly labelled as business communication and include a link that allows you to do so. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information"}),e.jsx("div",{children:"Contact information and identification:"}),"The legal justification for the processing of personal data:",e.jsx("br",{}),"If you have used our services, we may occasionally contact you with marketing materials because we have a genuine interest in staying in touch with those who have used our services. If you agree to allow us to use your personal data for marketing reasons, we will do so."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"If you contact us via social media, we collect your name, email address, phone number, and other personal information."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to keep our customers happy and to make our services more useful to them. Your personal data may be processed in order for us to create, test, improve, and secure some of our services if you utilise them. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Personal information, such as your name, address, phone number, and email address, as well as information about your device, the website, and your use of the services."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to make our services better."]}),e.jsxs("p",{children:[e.jsx("div",{children:"Analytics:"}),"We employ consumer behavior analysis to learn more about how our website and services are being used. As a rule of thumb, the following should be followed:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Personal information:"}),"Personal information, such as your name, address, phone number, and email address, as well as information about your device, your use of the website, and the results of your simulated trades."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The legal justification for the processing of personal data:"}),"Our legitimate interest in processing data is to learn more about our customers' buying habits and preferences."]}),e.jsxs("p",{children:[e.jsx("div",{children:"How do we keep our personal information safe?"}),"Personal data is stored on computers and other devices in an encrypted database. Organizational and technical safeguards have been put in place to protect the data that we collect and handle from unauthorized access, modification, disclosure, or destruction."]}),e.jsxs("p",{children:[e.jsx("div",{children:"How long does it take us to process your information?"}),"As stated above, personal data are only processed as necessary to accomplish the stated goals and for as long as is required by law. It is then destroyed or anonymized after that. For the following periods of time, we collect and use personal information:",e.jsx("br",{}),"The processing of personal data is limited to the duration necessary to carry out the agreement and to execute the parties' rights and obligations under it, such as handling complaints, resolving damage claims, or engaging in legal action.",e.jsx("br",{}),"if you don't give us permission to send you business communications, we keep your personal data for a maximum of 5 years from the end of your last contract with us or until you object or unsubscribe from the business communications; if we need to fulfill our legal obligations, we keep your personal data for the period set out by the relevant law;"]}),e.jsxs("p",{children:[e.jsx("div",{children:"Third parties use of your information:"}),"In order to deliver our services, we make your data available or transmit it to the following people:"]}),e.jsx("p",{children:"Simulated trades are made possible by your trading platform provider Website and service providers (such as other companies in the group, cloud service providers, payment system operators, financial institutions, service and support providers, IT companies, marketing and communication agencies, consultants, and postal service providers), as well as other third parties"}),e.jsx("p",{children:"In addition, we may send your personal information to parties for whom you have given your permission, as well as in circumstances where we are legally required to do so. The recipients of your personal data are contractually required to protect your information in accordance with applicable laws and to use it only in line with our instructions in accordance with the terms of their contract with us."}),e.jsx("p",{children:"As data controllers, third parties gather personal information for their own ends. Personal data will be processed in accordance with their own guidelines in this situation."}),e.jsxs("p",{children:[e.jsx("div",{children:"Your rights:"}),"Send a request to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","to exercise all of your rights, including the right to withdraw your permission. As a user, you have the following rights when it comes to personal data:"]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to access personal information:"}),"Whenever you want to know if your personal information is being used, you can ask us to give you a confirmation letter. If we do anything with your data, we'll let you know about it. The personal data we collect and use will be made available to you if you request it. The first copy is free, however, subsequent copies can be purchased for a nominal cost. ",e.jsx("br",{}),"Individuals have the right to have their personal information corrected. Please contact us if your personal data is incorrectly processed and we will correct it as soon as possible. If you sign up for an account on the Website, you will be able to edit and correct your personal information."]}),e.jsxs("p",{children:["The 'right to be forgotten' (right to deletion of personal data)",e.jsx("br",{}),"In the following circumstances, you have the right to have your personal data deleted from our systems immediately: As soon as the data gathered or otherwise processed is no longer required for the stated purposes, Your consent to their processing will be revoked if you do so and there is no other legal basis for their processing (this only applies in circumstances where we treat personal data on your consent). Processing for direct marketing reasons, if you object to the processing and there are no overriding legal grounds;",e.jsx("br",{}),"Please contact us if your personal data is incorrectly processed and we will correct it as soon as possible. If you sign up for an account on the Website, you will be able to edit and correct your personal information."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The 'right to be forgotten' (right to deletion of personal data):"}),"In the following circumstances, you have the right to have your personal data deleted from our systems immediately: As soon as the data gathered or otherwise processed is no longer required for the stated purposes, Your consent to their processing will be revoked if you do so and there is no other legal basis for their processing (this only applies in circumstances where we treat personal data on your consent). Processing for direct marketing reasons, if you object to the processing and there are no overriding legal grounds; ",e.jsx("br",{}),"If you believe that your personal data has been improperly processed, please contact us. ",e.jsx("br",{}),"When a request is made for personal data to be erased, we will not be able to do so if their processing is necessary for exercising the right to freedom of expression and information; compliance with any of our legal obligations; performance of a task carried out in the public interest; establishment, exercise or defense of our legal claims; or other reasons permitted by law."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to limit the use of data:"}),"Article 18 of the GDPR gives you the right to request a temporary halt to the processing of your personal data. Possession and use of information in a machine-readable format, as well as the right to access to such data When we process your personal information through automatic means, you have the right to receive the data in a structured, commonly used, and machine-readable format and to have it transferred to another personal data controller."]}),e.jsxs("p",{children:[e.jsx("div",{children:"The right to express one's views:"}),"You have the right to object to the processing of your personal data if we do so because it is in our legitimate interests to do so. Our ability to process your personal data is restricted if you raise an objection, and we must show that the processing is necessary to establish, exercise, or defend our legal claims and we have a compelling legitimate interest in doing so."]}),e.jsx("p",{children:"If you object to our use of your personal data for marketing purposes, we shall immediately stop doing so. Our ability to send you offers for our products and services will be terminated if you do this."}),e.jsx("span",{children:"The ability to revoke consent"}),e.jsx("p",{children:"You have the right to revoke your consent at any time if the processing is based on that consent. The lawfulness of processing based on prior consent is unaffected by the withdrawal of consent."}),e.jsxs("p",{children:[e.jsx("div",{children:"The right not to be subjected to automated decision-making processes:"}),"You have the right not to be the subject of any decision based purely on automated processing, including profiling, that generates legal effects concerning you or otherwise affects you to a significant extent, unless this is permitted by relevant legislation or based on your express consent."]}),e.jsx("p",{children:"The right to file a complaint with the governmental agency responsible for investigating complaints."}),e.jsx("p",{children:"You can file a complaint with the relevant supervisory authority if you believe that we are misusing your personal information. Our headquarters are located at this location."}),e.jsxs("p",{children:[e.jsx("div",{children:"Requirements to be met:"}),"We reserve the right to amend this policy at any time, but we will notify you of any such change. A copy of this policy can be found in your Client Section. Use of your own affiliate link shall not count as affiliate commission."]})]})]})})}),e.jsx(P,{})]})}function Aa(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("main",{className:"terms-condition bg-dark pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Terms of Service"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsx("h4",{className:"text-xl",children:"Overview"}),e.jsx("p",{children:"By using our site and/or purchasing something from us, you participate in our 'Service' and agree to be bound by the following terms and conditions ('Terms of Service', 'Terms'), as well as any other terms and conditions and policies linked herein and/or accessible through a hyperlink. These Terms of Service apply to all users of the site, including but not limited to browsers, vendors, consumers, merchants, and/or content creators."}),e.jsxs("p",{children:["Please carefully read these Terms of Service before accessing or using our website. You agree to be bound by these Terms of Service by accessing or using any portion of the site. You may not visit the website or use any services if you do not agree to all of the terms and conditions of this agreement. Acceptance is solely restricted to these Terms of Service if these Terms of Service are deemed an offer. The Services are only available to those over the age of 18 who live in the countries where the Services are provided.",e.jsx("br",{}),"Any additional features or tools added to the existing site (within the given accounts area) will be subject to the Terms of Service as well. The most recent version of the Terms of Service will be seen on this page at any time. By making updates and/or modifications to our website, we retain the right to update, amend, or replace any portion of these Terms of Service. It is your right and obligation to check this page for updates on a regular basis. Your continued use or access to the website after such modifications are posted implies acceptance of those changes."]}),e.jsx("p",{children:"IN ACCORDANCE WITH APPLICABLE LAWS, NONE OF THE SERVICES PROVIDED TO YOU BY THE PROVIDER CAN BE CONSIDERED INVESTMENT SERVICES. THE PROVIDER DOES NOT GIVE OR PROVIDE TO YOU ANY GUIDANCE, INSTRUCTIONS, OR INFORMATION ABOUT HOW OR IN WHAT MANNER YOU SHOULD PERFORM TRANSACTIONS WHEN USING THE SERVICES OR OTHERWISE, OR ANY OTHER SIMILAR INFORMATION ABOUT THE INVESTMENT TOOLS TRADED, AND THE PROVIDER DOES NOT ACCEPT ANY SUCH GUIDANCE, INSTRUCTIONS, OR INFORMATION FROM YOU. NEITHER THE SERVICES NOR THE RECOMMENDATIONS CONSTITUTE INVESTMENT ADVICE.THE PROVIDER'S EMPLOYEES, STAFF, AND REPRESENTATIVES ARE NOT AUTHORIZED TO GIVE INVESTMENT ADVICE OR RECOMMENDATIONS. IF ANY INFORMATION OR STATEMENT OF THE PROVIDER'S EMPLOYEES, STAFF, OR REPRESENTATIVES IS INTERPRETED AS INVESTMENT ADVICE OR RECOMMENDATIONS, THE PROVIDER EXPLICITLY DISCLAIMS THAT SUCH INFORMATION OR STATEMENT IS INVESTMENT ADVICE OR RECOMMENDATIONS AND SHALL NOT BE RESPONSIBLE FOR THEM."}),e.jsx("p",{children:"We may give third parties access to our website in order to debug and/or maintain issues with our website, database, or infrastructure. After the scope of work is undertaken, these accesses are monitored and restricted. ALL PAYMENTS ARE FINAL AND ONLY FOR THE PURPOSE OF EVALUATION."}),e.jsx("p",{children:"You must pay registration fees in order to have access to the TheFundedHub (THE FUNDED HUB GLOBAL LLP) platform, models, and services. If the service has begun (i.e the client has started trading and/or the client has not successfully completed the Evaluation, the customer is not entitled to a refund of the registration fee, Evaluation Program that are part of the TheFundedHub offer are not due a refund."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 1 - Terms of Online Registration"}),"In signing these Terms of Service, you officially confirm that you are of legal age in your state or province of residence, or that you are of legal age and have given us your permission to allow any of your minor children to use this site. As a condition of using the Service, you agree that you will not engage in any illegal or unauthorized activity (including but not limited to copyright laws). Your Services will be terminated immediately if you violate any of the Terms."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 2 – General Conditions"}),"We have the right to refuse service to anyone at any time for any reason. You acknowledge that your content (except credit card information) may be conveyed unencrypted and may entail (a) transmissions across different networks, and (b) modifications to conform and adapt to the technical requirements of connecting networks or devices. Whenever credit card information is sent over a network, it is always encrypted. Without our explicit written consent, you undertake not to replicate, duplicate, copy, sell, resell, or exploit any component of the Service, use of the Service, or access to the Service or any contact on the website through which the service is offered. The titles in this agreement are given solely for convenience and have no bearing on the Terms."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 3 – Information Accuracy, Completeness, and Timeliness"}),"We make every effort to assure that the information we give is reliable; nevertheless, the information is also provided by third parties, and we are not responsible if the material on this site is not accurate, full, or up to date. This site's content is intended for general information purposes only and should not be relied on or used as the only basis for making choices without contacting primary, more accurate, more complete, or more current sources of information. Any reliance on the information on this site is entirely at your own risk. To reduce your risk, you may always send an email to",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","with your inquiries. This website may contain historical information. Historical material is, by definition, out of date and is given only for your convenience. We retain the right to change the contents of this site at any time, but we are under no obligation to update any of the material on our site. You acknowledge that it is your obligation to keep track of changes to our website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 4 – Changes to the Service and Prices"}),"Our product prices are subject to change without notice. We retain the right to alter or discontinue the Service (accounts offered) (or any part or content thereof) at any time and without notice. We will not be accountable to you or any third person if the Service is modified, priced, suspended, or discontinued."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 5 – Products or Services (if applicable)"}),"We retain the right, but not the obligation, to limit our product or service sales to any individual, geographic location, or jurisdiction. On a case-by-case basis, we may exercise this power. We have the right to limit the number of products or services we offer at any time. All product descriptions and prices are subject to change at our sole discretion at any time without notice. At any moment, we have the right to discontinue any product. Any offer made on this site for a product or service is invalid where prohibited. We don't promise that the quality of any items, services, information, or other material you buy or get from us will match your expectations, or that any flaws in the Service will be rectified."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 6 – Account Information and Billing Accuracy"}),"We have the right to reject any order placed with us. We reserve the right, in our sole discretion, to limit or cancel the number of items purchased per person, per household, or per order. Orders placed by or under the same customer account, the same payment card, and/or orders using the same billing and/or delivery address may be subject to these limitations. If we alter or cancel an order, we may attempt to tell you by contacting the e-mail address and/or billing address/phone number supplied at the time the transaction was placed. We have the right to limit or prohibit orders that appear to be placed by dealers, resellers, or unlicensed distributors at our sole discretion. For any purchases made at our site, you agree to provide current, complete, and accurate purchase and account information. You agree to keep your account and other information up to date, including your email address, credit card numbers, and expiry dates so that we can process transactions and contact you as required."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 7 – Additional Resources"}),"We may offer you access to third-party tools over which we have no control or involvement. You understand and agree that we provide access to such tools 'as is' and 'as available,' with no warranties, representations, or obligations of any kind, and without any endorsement. We accept no liability originating from or related to your use of optional third-party tools. Any use of optional tools made available through the site is solely at your own risk and discretion, and you should ensure that you are acquainted with and approve of the conditions under which the tools are made available by the relevant third-party source (s). We may also provide new services and/or features on the website in the future (including, the release of new tools and resources). These Terms of Service will apply to any additional features and/or services."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 8 – External Links"}),"Third-party materials may be included in certain content, products, and services offered via our Service. Third-party links on our site may take you to websites that are not associated with us. We are not responsible for reviewing or assessing the content or accuracy, and we make no warranty and accept no liability or obligation for any third-party materials or websites, or for any other materials, products, or services provided by third parties. We are not responsible for any risk or damages resulting from the purchase or use of goods, services, resources, materials, or other transactions conducted in connection with any third-party websites. Please carefully research and understand the third-rules parties and procedures before engaging in any transaction. Third-party product complaints, claims, concerns, or inquiries should be directed to the third party."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 9 – Comments, Feedback, and Other Submissions from Users"}),"If you send us creative ideas, suggestions, proposals, plans, or other materials (collectively, 'comments'), whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use any comments that you forward to us in any medium. We are not and will not be obligated to (1) keep any comments confidential; (2) compensate for any remarks; or (3) reply to any comments."]}),e.jsx("p",{children:"We may, but are under no obligation to, monitor, edit, or delete material that we consider to be illegal, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable, or that infringes any party's intellectual property or these Terms of Service."}),e.jsx("p",{children:"You agree that your comments will not infringe on any third rights, parties including copyright, trademark, privacy, personality, or any other personal or property right. You further agree that your comments will not contain libelous or otherwise illegal, abusive, or obscene content, nor will they contain any computer virus or other malware that might interfere with the functioning of the Service or any connected website. You may not use a fraudulent e-mail address, pose as someone other than yourself, or otherwise mislead us or third parties about the origin of any remarks. Any comments you make, as well as their correctness, are completely your responsibility. We accept no responsibility or liability for any remarks posted by you or any other party."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 10 – Personal Information"}),"Our Privacy Policy governs the submission of personal data through the website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 11 – Errors, Inaccuracies, and Omissions"}),"On rare occasions, information on our site or in the Service may contain typographical errors, inaccuracies, or omissions relating to product descriptions, price, promotions, offers, product shipping charges, transit times, or availability. If any information in the Service or on any connected website is erroneous, we have the right to remedy any mistakes, inaccuracies, or omissions, and to modify or update information or cancel orders at any time without prior notice (including after you have submitted your order). Except as required by law, we make no commitment to update, revise, or clarify anything in the Service or on any connected website, including, without limitation, price information. There is no specific update or refresh date applied in the Service or on any associated website to indicate that all information in the Service or on any related website has been edited or updated."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 12 – Restricted Uses"}),"You are prohibited from using the site or its content: (a) for any illegal purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any regional and global, federal, provincial, or state regulations, rules, laws, or state regulations; (d) to infringe upon or violate our intellectual rights or the intellectual property rights of others; and (e) to infringe upon or infringe our intellectual rights or the intellectual property rights of others.(e) to harass, misuse, insult, harm, besmirch, slander, disparage, intimidate, or discriminate due to gender, sexual orientation, faith, ethnic background, race, age, national or ethnic origin, or incapacity; (f) to submit misinformation; (g) to upload or transmit viruses or any other type of malicious code that will or may be used to affect the functionality or operation of the Service or any related website, other websites, or the Internet; (h) to submit false or misleadingFor breaching any of the prohibited uses, we retain the right to suspend your usage of the Service or any connected website."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 13 - Unauthorized trading practices"}),e.jsxs("ul",{className:" list-disc ml-8 grid gap-5",children:[e.jsx("li",{children:"It is prohibited for the Customer to intentionally or unintentionally use trading strategies that take advantage of errors in the Services, such as inaccuracies in displayed prices or delays in their updates."}),e.jsx("li",{children:"The Customer is not permitted to execute trades using an external or slow data feed."}),e.jsx("li",{children:"The Customer is prohibited from engaging, either alone or in cooperation with others, in any trades or combination of trades across connected accounts or accounts held with different TheFundedHub entities, if the purpose of such trades is to manipulate trading. Examples of such manipulation include entering into opposite positions simultaneous"}),e.jsx("li",{children:"The Customer is prohibited from conducting trades that violate the terms and conditions of TheFundedHub. Any trades that go against these terms and conditions are not allowed. The Customer must comply with the rules set by TheFundedHub and the Trading Platform when using the Services"}),e.jsx("li",{children:"Do not use any software, artificial intelligence, ultra-high speed, or mass data entry that could manipulate or abuse our systems or services, or give you an unfair advantage."}),e.jsx("li",{children:"The Customer is prohibited from performing gap trading by opening trades during scheduled major global news, macroeconomic events, or corporate reports or earnings that may affect the relevant financial market for trading financial instruments."}),e.jsx("li",{children:"The customer is not allowed to perform trades that are inconsistent with the way trading is typically carried out in the forex or any other financial market. They should also avoid any activities that may cause financial or other harm to TheFundedHub Trading, such as over-leveraging, over-exposure, making one-sided bets, or account rolling. If the customer engages in any of these activities, it may raise valid concerns that they are intentionally harming TheFundedHub Trading."}),e.jsxs("li",{children:["As one of our customers, you should be aware of this and acknowledge that all of our services are intended solely for personal use by the customer. As a result, only you may access your TheFundedHub Account and execute transactions. Hence, you should not, and you therefore do not,",e.jsxs("ul",{className:"inner-li mt-5 grid gap-5 ml-5",children:[e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"Neither you nor any third party shall participate in or collaborate with any third party to have such third party execute trades for you, whether such third party is a private individual or a professional, or permit access to or trading on your TheFundedHub Account by any third party;"}),e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"Access any third-party TheFundedHub Account, trade on behalf of any third-party, or conduct any account management or similar services where you commit to trade, run, or manage the TheFundedHub Account on behalf of another user, whether professionally or otherwise."})]})]}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"Additionally, you agree not to abuse the Services by engaging in trades that do not adhere to market-accepted risk management guidelines for trading on financial markets. This includes, among other things, the following actions: (i)opening positions with sizes that are noticeably larger than those of your other trades, whether on this account or another one of yours; (ii) opening positions with numbers that are noticeably smaller or larger than those of your other trades, whether on this account or another one of yours.(iii) Using high level of margin."}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"TheFundedHub reserves the right to determine, at its own discretion, whether certain trades, practices, strategies or situations are Forbidden Trading Practices."}),e.jsxs("li",{className:"marker:text-transparent ml-5",children:["It is advised that all TheFundedHub clients adhere to the following trading guidelines also. Otherwise, TheFundedHub won't be held responsible for whatever repercussions it chooses to have.",e.jsx("ul",{className:"mt-5 ml-5 text-wht inner-li",children:e.jsx("li",{className:"relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border",children:"During KYC it’s strictly recommended to provide right information and not to manipulate or try to impersonate others. It is also advised not to use any VPS/VPN during KYC verification."})})]}),e.jsx("li",{className:"marker:text-transparent ml-5",children:"If the Customer engages in any of the prohibited trading practices mentioned above or does not follow the guidelines, TheFundedHub may pause or terminate payout. TheFundedHub may also remove any trades that violate the prohibition from the Customer's trading history and not count their results in the profits and losses achieved by the demo trading. Furthermore, TheFundedHub Trading reserves the right to cancel the Customer's TheFundedHub Account immediately and terminate this Agreement, and/or reduce the offered leverage on products to 1:5 or lower on any or all of the Customer's accounts. If any or all of the prohibited trading practices are performed on one or more TheFundedHub Accounts of one Customer or multiple Customers, or by combining trading on TheFundedHub Account and trading through Evaluation Services (i.e. TheFundedHub Demo phase-1 or Phase-2), then TheFundedHub Trading has the right to cancel all TheFundedHub Accounts and terminate respective agreements, used for or involved in the prohibited trading practices."})]})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 14 – Limitation of Liability; Disclaimer of Warranties"}),e.jsx("p",{children:"TheFundedHub does not promise, represent, or assure that your use of our service will be error-free, speedy, secure, or uninterrupted. We do not represent that the results that may be achieved from the use of the service will be accurate or trustworthy. You accept that we may suspend the service for an extended amount of time or terminate it at any moment, with or without notice to you. You expressly acknowledge that your use of the service, or inability to utilize it, is at your own risk. The service and all products and services delivered to you via the service are provided 'as is' and 'as available for your use, without any express or implied representation, warranties, or conditions of any kind, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.TheFundedHub, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors shall in no event be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because certain states or countries do not allow the exclusion or limitation of responsibility for consequential or incidental damages, our liability shall be limited to the fullest extent permissible by law in such states or jurisdictions."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 15 – Indemnification"}),e.jsx("p",{children:"You indemnify and hold, uphold, and retain Intellimeter and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees harmless from any claim or demand made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference or your violation of any law or regulation."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 16 – Severability"}),e.jsx("p",{children:"If any provision of these Terms of Service is found to be unlawful, void, or unenforceable, that provision shall be enforced to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed severed from these Terms of Service; however, such determination shall have no bearing on the validity and enforceability of the remaining provisions."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 17 – Termination"}),"For all reasons, the parties' responsibilities and liabilities accrued prior to the termination date will survive the termination of this agreement. Unless and until either you or us terminate these Terms of Service, they will remain in force. You may terminate these Terms of Service at any time by telling us that you no longer want to utilize our Services or by discontinuing your usage of our website."]}),e.jsx("p",{children:"We may also terminate this agreement at any time without notice if you fail, or we suspect you have failed, to comply with any term or provision of these Terms of Service, and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly deny you access to our Services (or any part thereof)."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 18 – Refund Policy"}),"By sending an e-mail to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"}),", the Customer may request the termination of the Client Section at any time. Sending a request to cancel the Client Section is regarded as a request by the Customer to terminate the contract, with the Customer losing access to the Services, including the Client Section and Trading Platform. The Provider will send an email to the Customer to confirm receipt of the request, at which point the contractual relationship between the Customer and the Provider will be dissolved. The Customer is not entitled to a refund of any fees previously paid or other expenditures spent in this situation."]}),e.jsxs("p",{children:["If the Customer engages in any of the forbidden practices repeatedly, and the Provider has previously notified the Customer thereof, the Provider may prevent the Customer from accessing all Services or their parts, including access to the Client Section and Trading Platform, without any compensation. In such a case, the Customer is not entitled to a refund of the fees paid. After paying the fee for the selected option of the TheFundedHub program, the Customer will receive the relevant login data for the Trading Platform at the e-mail address provided by the Customer or in the Client Section. The Customer activates the account by receiving the account credential. IF YOU ARE A CONSUMER, YOU ACKNOWLEDGE THAT, BY OPENING THE FIRST TRADE, YOU EXPRESSLY DEMAND THE PROVIDER TO COMPLETE THE SERVICES BEFORE THE EXPIRY OF THE PERIOD FOR WITHDRAWAL FROM THE CONTRACT, WHICH AFFECTS YOUR RIGHT TO WITHDRAW FROM THE CONTRACT. If you do not activate the TheFundedHub account within 30 calendar days of the date on which it was made available to you, your access to it will be suspended. You can request the renewal of access by sending an e-mail to"," ",e.jsx("a",{href:"mailto: info@thefundedhub.com",className:"underline",children:"info@thefundedhub.com"})," ","within 3 days of the initial suspension, otherwise, we will terminate the provision of the Services without any right to a refund of the fee."]}),e.jsx("p",{children:"If the Customer files an unjustifiable complaint about the paid fee or disputes the paid fee with the Customer's bank or payment service provider (e.g., through chargeback services, dispute services, or other similar services), on the basis of which an annulment, cancellation, or refund of the fee or any part thereof is requested, the Provider reserves the right, at its sole discretion, to stop providing any services to the Customer and refuse any future provision of any services."}),e.jsx("p",{children:"Both the Customer and TheFundedHub mutually commit to conducting their dealings and interactions with fairness and respect. They shall refrain from causing harm to each other's reputation or legitimate interests, both during and after the trading period. Any disagreements or disputes that may arise between them will be resolved in accordance with the terms of this Agreement and the applicable legal framework."}),e.jsx("p",{children:"If you do not begin trading within 7 days after registering, you may request a refund. It should be noted that after the trader has begun trading on the account, the fees are non-refundable. This includes both full and partial refunds."}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 19 – Entire Agreement"}),"We shall not be deemed to have waived any right or provision of these Terms of Service if we fail to exert or enforce such right or provision. These Terms of Service, as well as any policies or operating rules posted by us on this site or in relation to The Service, represent the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguity in the interpretation of these Terms of Service should not be interpreted against the party who drafted them."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 20 – Governing Law"}),e.jsx("p",{children:"These Terms of Service, as well as any additional agreements under which we give you Services, are regulated and construed in accordance with the user's legal jurisdiction."})]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 21 – Local Law"}),"It's recommended to know your local regulations if there are any. You're taking service as per your own risk and responsibilities. By declaring that you are over 18 years old and thereby TheFundedHub isn't responsible for any action taken by its customer. If there is any violation of local law, you are solely responsible for this."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 22– Changes to Terms of Service"}),"The user's legal jurisdiction governs and is construed in line with these Terms of Service and any other agreements whereby we provide you Services."]}),e.jsxs("p",{children:[e.jsx("div",{className:"font-semibold",children:"Section 23 – Contact Information"}),"27 Old Gloucester Street, London, United Kingdom, WC1N 3AX."]}),e.jsx("p",{children:e.jsx("div",{})})]})]})})}),e.jsx(P,{})]})}function Pa(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("main",{className:"privacy bg-dark pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow",children:e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto",children:[e.jsx("div",{className:"heading text-center",children:e.jsx("h2",{className:"text-3xl font-codeProBold",children:"Risk Disclosure"})}),e.jsxs("div",{className:"content grid gap-5",children:[e.jsx("p",{children:"The Funded Hub's content is intended to be generic in nature. A recommendation, endorsement, or sponsorship of any security, company, or fund is not intended by the Company`'s information. Lesser-known clients or consumers may not be represented in testimonials on the Company's websites. The Company, its partners, representatives, agents, employees, and contractors accept no responsibility or liability for any use or misuse of such information."}),e.jsxs("p",{children:[e.jsx("div",{children:"Futures and FX trading are not suitable for all investors."}),"An investor may lose all or part of their initial investment. Trading should only be done with risk capital—money that can be lost without endangering one's financial stability or lifestyle. This is not a solicitation or offer to buy or sell futures, options, or forex. Past performance does not guarantee future results."]}),e.jsx("p",{children:"There are some restrictions under CFTC Rule 4.41 - Hypothetical or simulated performance outcomes Simulated outcomes do not represent actual trading. Because the deals were not actually performed, the outcomes may have under-or over-compensated for market conditions like lack of liquidity. Simulated trading programs are generally created with the advantage of hindsight. Notification that any account will or is likely to generate such profit or loss is made."}),e.jsxs("p",{children:[e.jsx("div",{children:"Risky Warning:"}),"Margin trading CFDs include a high level of risk and are not suited for all investors. Before trading CFDs, you should carefully assess your trading objectives, experience, and risk appetite. You could lose more than your initial investment, so don't deposit anything you can't afford to lose. Understand the hazards and take precautions to manage them."]}),e.jsx("p",{children:"The site may contain links to third-party websites. Information or materials posted on sites connected to our site have not been reviewed by our company and are not our responsibility. By linking to a third-party website, the Company is not endorsing or recommending any of the third-product parties or This site's content is solely for informational purposes. It should not be construed as an offer or solicitation in any area where such action is prohibited or as a suggestion to purchase, sell, or otherwise deal with any particular currency or precious metal trade. You should exit this site immediately if you are unsure about your local currency and spot metal trading laws."}),e.jsx("p",{children:"It is advised to be aware of any local laws. Before trading currencies or metals, you should seek independent financial, legal, and tax counsel. This site does not constitute advice from the Company or any of its affiliates, directors, officers, or employees."}),e.jsx("p",{children:"Any person in any nation or territory where such distribution or usage would be contrary to local law or regulation is prohibited from using the Company's services."}),e.jsx("p",{children:"We want to sharpen your trading style more than ever. We believe that you will perform the best when you are within your comfort zone. So you’re allowed to trade with any trading style that you like most. We aim to get the best out of you and once you trade freely. We all will grow together. So choose your trading plan wisely."})]})]})})}),e.jsx(P,{})]})}function Ca(){const{pathname:t}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"contact bg-dark relative pb-28 pt-32 sm:pt-44 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsx("div",{className:"wrapper flex items-center w-full",children:e.jsxs("div",{className:"content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full m-auto",children:[e.jsxs("div",{className:"left md:col-span-1 break-all ",children:[e.jsxs("div",{className:"heading grid gap-2",children:[e.jsx("h3",{className:"text-3xl",children:"Report a Problem"}),e.jsxs("p",{children:["Did you notice any bug or technical error? ",e.jsx("br",{})," Please let us know!"]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(H,{})})]}),e.jsx("div",{className:"right md:col-span-2",children:e.jsx(G,{header:"Contact Us"})})]})})})}),e.jsx(P,{})]})}function Ma({props:t}){const[a,s]=i.useState(!1),[r,o]=i.useState("John Doe"),[l,d]=i.useState(""),[c,p]=i.useState(!1),[n,u]=i.useState(!1),N=i.useRef(null);i.useEffect(()=>{d(r.split(" ").slice(0,2).map(D=>D.charAt(0)).join(""))},[]);const[C,M]=t,{pathname:E}=w();i.useEffect(()=>{window.scrollTo(0,0),s(!1),p(!1),u(!1)},[E]);const T=D=>{p(!1),s(!1),D==="notification"&&p(!c),D==="account"&&s(!a)},[j,h]=i.useState("Funded - 7382691"),[S,x]=i.useState(!1),[O,f]=i.useState(0);return i.useEffect(()=>{window.scrollTo(0,0)},[E]),e.jsxs("header",{className:"header-area px-[20px] z-[9999] fixed dash-nav floating-bars",children:[e.jsx("div",{className:"header-left",children:e.jsx("div",{className:"accounts relative h-[1.875rem] z-50",children:e.jsxs("div",{className:"grid gap-2 absolute inset-0 min-w-[12rem]",children:[e.jsxs("div",{className:"border border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg floating-bars w-full relative",children:[e.jsxs("header",{onClick:()=>x(!S),className:"select-account flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base",children:j}),e.jsx("div",{className:"arrow flex justify-center items-center",children:e.jsx("img",{className:`max-w-[1rem] transform-gpu transition-all duration-300 ${S?"rotate-180":""}`,src:g,alt:"arrow"})})]}),e.jsx("div",{className:`select-account-options dash-bar-clr border border-primary/20 content overflow-hidden absolute border border-primary/0 transition-all duration-300 py-[0.26rem] w-full mt-2 rounded-lg font-Montserrat floating-bars ${S?"max-h-[81px] opacity-100 visible":"max-h-0 opacity-0 invisible"}`,children:e.jsxs("div",{ref:N,className:"grid gap-1 text-center text-[0.9rem] xs:text-base",children:[e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${j==="Phase 1 - 6180217"?"hidden":""}`,onClick:()=>(h("Phase 1 - 6180217"),x(!1)),children:"Phase 1 - 6180217"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${j==="Phase 2 - 9584654"?"hidden":""}`,onClick:()=>(h("Phase 2 - 9584654"),x(!1)),children:"Phase 2 - 9584654"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${j==="Funded - 7382691"?"hidden":""}`,onClick:()=>(h("Funded - 7382691"),x(!1)),children:"Funded - 7382691"})]})})]}),e.jsxs("div",{className:"border-2 hidden border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg floating-bars w-full",children:[e.jsxs("header",{onClick:()=>x(!S),className:"flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5",children:[e.jsx("h3",{className:"text-[0.9rem] xs:text-base",children:j}),e.jsx("div",{className:"arrow flex justify-center items-center",children:e.jsx("img",{className:`max-w-[1.2rem] transform-gpu transition-all duration-300 ${S?"rotate-180":""}`,src:g,alt:"arrow"})})]}),e.jsx("div",{style:{maxHeight:S?O+"px":"0"},className:"content transition-all duration-300 overflow-hidden",children:e.jsxs("div",{ref:N,className:"grid gap-1 mt-1 text-[0.9rem] xs:text-base pb-4 px-4",children:[e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${j==="Phase - 1"?"hidden":""}`,onClick:()=>(h("Phase - 1"),x(!1)),children:"Phase - 1"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${j==="Phase - 2"?"hidden":""}`,onClick:()=>(h("Phase - 2"),x(!1)),children:"Phase - 2"}),e.jsx("h5",{className:`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${j==="Funded"?"hidden":""}`,onClick:()=>(h("Funded"),x(!1)),children:"Funded"})]})})]})]})})}),e.jsxs("div",{className:"header-right relative",children:[e.jsxs("div",{className:"navigate relative font-Montserrat font-medium text-wht/90 hidden sm:inline-block",children:[e.jsxs("div",{className:"wrap flex gap-3 items-center cursor-pointer",onClick:()=>u(!n),children:[e.jsx("h4",{className:"user-name",children:r}),e.jsx("div",{className:"short-name uppercase border bg-blu/20 border-blu h-10 w-10 rounded-full flex justify-center items-center",children:l}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:"w-5",src:g,alt:""})})]}),e.jsx("div",{className:`floating absolute dash-bar-clr z-50 -bottom-[7rem] text-wht rounded-xl border border-primary/20 transition-all duration-300 transform ${n?"opacity-100 scale-100 -right-[1rem] visible":"opacity-0 scale-75 -right-[3rem] invisible"}`,children:e.jsx("div",{className:"wrap",children:e.jsxs("ul",{children:[e.jsx("li",{className:"group",children:e.jsx(m,{to:"profile",className:"flex items-center  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 hover:bg-primary/10 ease-linear pl-4 pr-10",onClick:()=>u(!1),children:"My Profile"})}),e.jsx("li",{className:"group",children:e.jsx(m,{to:"/login",className:"flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 hover:bg-primary/10 ease-linear pl-4 pr-10",onClick:()=>u(!1),children:"Logout"})})]})})})]}),e.jsxs("div",{className:"author-wrapper relative lg:!flexf !hidden",children:[e.jsxs("div",{className:"author-wrap cursor-pointer",onClick:()=>T("account"),children:[e.jsx("div",{className:"thumb h-10 w-10 bg-primary/50 rounded-lg flex justify-center items-center",children:e.jsx(be,{className:"text-xl"})}),e.jsxs("div",{className:"name ml-[15px]",children:["James",e.jsx("svg",{className:"inline-block w-[24px] h-[24px] fill-white",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M7 10l5 5 5-5z"})})]})]}),e.jsx("div",{className:`user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] rounded-[10px] shadow-[0_1px_15px_rgba(199,179,252,0.13)] lg:origin-center origin-right floating-bars z-[99999] transition-all duration-500 ${a?" scale-100 opacity-100 visible":"scale-50 opacity-0 invisible"}`,children:e.jsxs("ul",{children:[e.jsx("li",{className:"border-b border-primary/20",children:e.jsx("a",{href:"#",className:"block text-primary text-base leading-[1.5] tracking-[-0.05px] py-[10px] group-hover:!fill-primary",children:"fundedhub@mail.com"})}),e.jsx("li",{className:"border-b border-primary/20 group",children:e.jsx(m,{to:"profile",className:"flex items-center   leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary",children:"My Profile"})}),e.jsx("li",{className:"group",children:e.jsx(m,{to:"/login",className:"flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear  text-wht group-hover:text-primary",children:"Logout"})})]})})]}),e.jsx("div",{className:"mobile-bar lg:hidden group",onClick:()=>(C(!M),p(!1)),children:e.jsx("div",{className:"h-10 w-10 bg-primary/50 rounded-full cursor-pointer flex justify-center items-center",children:e.jsx(je,{className:"text-2xl"})})})]})]})}const Ea="/assets/dashboard-logo-137f35b9.png";function Fa(){const[t,a]=i.useState(!1),{pathname:s}=w();return i.useEffect(()=>{window.scrollTo(0,0),a(s==="/dashboard")},[s]),e.jsxs("aside",{className:"sidebar floating-bars",children:[e.jsx("div",{className:"logo text-center h-[80px] flex items-center justify-center cursor-pointer relative z-[9999]",children:e.jsx(m,{to:"/dashboard",children:e.jsx("img",{className:"inline-block w-36",src:Ea,alt:"logo"})})}),e.jsx("div",{className:"main-menu z-30 relative",children:e.jsxs("ul",{className:"nav grid gap-2 overflow-y-scroll md:overflow-auto",children:[e.jsx(F,{to:"/dashboard",onClick:()=>a(!0),className:t?"active-side-nav":"",children:e.jsx("li",{className:"nav-item group",children:e.jsx("div",{className:"nav-link",children:e.jsx("span",{className:"",children:"Dashboard"})})})}),e.jsx(F,{to:"withdraw",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Withdraw"})})})}),e.jsx(F,{to:"top-up-reset",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Reset & Free Retry"})})})}),e.jsx(F,{to:"billing",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Billing"})})})}),e.jsx(F,{to:"certificate",className:({isActive:r})=>r?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"",children:"Certificate"})})})})]})}),e.jsxs("div",{className:"absolute grid gap-4 justify-center items-center bottom-[1.5rem] w-full z-30 font-Montserrat",children:[e.jsx("div",{className:"wrap flex justify-center",children:e.jsx(H,{})}),e.jsx(m,{to:"/dashboard/start-new-challenge",className:"capitalize whitespace-nowrap font-Montserrat text-xs font-bold py-3 px-5 dash-btn rounded-3xl text-center max-w-[12rem]",children:"START NEW CHALLENGE"})]})]})}function Da(){const[t,a]=i.useState("Per Trade"),s=[{XAUUSD:"0",date:"20 Sep 2023",Balance:"195.000"},{XAUUSD:"29",date:"21 Sep 2023",Balance:"217.336"},{XAUUSD:"51",date:"22 Sep 2023",Balance:"196.724"},{XAUUSD:"65",date:"23 Sep 2023",Balance:"221.533"},{XAUUSD:"87",date:"24 Sep 2023",Balance:"193.716"},{XAUUSD:"97",date:"25 Sep 2023",Balance:"196.444"},{XAUUSD:"110",date:"26 Sep 2023",Balance:"203.723"},{XAUUSD:"999",date:"20 Oct 2023",Balance:"201.075"},{XAUUSD:"1010",date:"27 Oct 2023",Balance:"209.012"},{XAUUSD:"1011",date:"28 Oct 2023",Balance:"211.507"},{XAUUSD:"1012",date:"29 Oct 2023",Balance:"217.470"}],r=[{XAUUSD:"0",date:"20 Sep 2023",Balance:"195.000"},{XAUUSD:"29",date:"21 Sep 2023",Balance:"217.336"},{XAUUSD:"920",date:"6 Oct 2023",Balance:"211.414"},{XAUUSD:"921",date:"7 Oct 2023",Balance:"193.438"},{XAUUSD:"97",date:"25 Sep 2023",Balance:"196.444"},{XAUUSD:"110",date:"26 Sep 2023",Balance:"203.723"},{XAUUSD:"232",date:"27 Sep 2023",Balance:"200.487"},{XAUUSD:"375",date:"28 Sep 2023",Balance:"209.204"},{XAUUSD:"443",date:"29 Sep 2023",Balance:"223.989"},{XAUUSD:"575",date:"30 Sep 2023",Balance:"210.055"},{XAUUSD:"1010",date:"27 Oct 2023",Balance:"209.012"},{XAUUSD:"1011",date:"28 Oct 2023",Balance:"211.507"},{XAUUSD:"1012",date:"29 Oct 2023",Balance:"217.470"}],o=({active:l,payload:d,label:c})=>{var p,n;return l&&d&&d.length?e.jsxs("div",{className:"customTooltip",children:[e.jsx("p",{className:"intro pb-4",children:(n=(p=d[0])==null?void 0:p.payload)==null?void 0:n.date}),e.jsxs("p",{className:" pb-4 text-white",children:["XAUUSD : ",c]}),e.jsx("p",{className:"label",children:`${d[0].name} : ${d[0].value}`})]}):null};return e.jsx("div",{className:"lineChart h-full w-full",children:e.jsxs("div",{className:"charts-wrapper",children:[e.jsx("div",{className:"buttons",children:e.jsxs("div",{children:[e.jsx("h3",{className:t==="Per Trade"?"active":"",onClick:()=>a("Per Trade"),children:"Per Trade"}),e.jsx("h3",{className:t==="Daily"?"active":"",onClick:()=>a("Daily"),children:"Daily"})]})}),e.jsx(R,{width:"100%",height:"100%",children:e.jsxs(Ie,{data:t==="Per Trade"?s:r,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorTrade",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#C7B3FC",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"#C7B3FC",stopOpacity:0})]})}),e.jsx(ie,{axisLine:!0,tickLine:!0,dataKey:"XAUUSD"}),e.jsx(re,{axisLine:!1,tickLine:!1,domain:[190,225],type:"number"}),e.jsx(ne,{cursor:{opacity:"0.4",stroke:"#C7B3FC"},content:e.jsx(o,{})}),e.jsx(Be,{type:"monotone",dataKey:"Balance",stroke:"#C7B3FC",strokeWidth:2,fillOpacity:1,fill:"url(#colorTrade)"})]})})]})})}function W({data:t,percent:a}){const s=({active:r,payload:o,label:l})=>r&&o&&o.length?e.jsxs("div",{className:"customTooltip",children:[e.jsx("div",{style:{position:"absolute",width:"100%",height:"100%",opacity:"0.9",zIndex:"-1",top:"0",left:"0",borderRadius:"10px",padding:"10px 20px 10px 20px"}}),e.jsx("p",{className:"intro pt-2 pb-6",children:l}),e.jsxs("p",{className:"label",children:[`${o[0].name} : `,e.jsx("span",{style:{color:o[0].value>=0?"green":"red"},children:o[0].value})]})]}):null;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"barChart w-full",children:e.jsx("div",{className:"charts-wrapper",children:e.jsx(R,{width:"100%",height:"100%",children:e.jsxs(Le,{data:t,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"positive",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#C7B3FC",stopOpacity:.9}),e.jsx("stop",{offset:"95%",stopColor:"#C7B3FC",stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"negative",x1:"0",x2:"0",y1:"1",y2:"0",children:[e.jsx("stop",{offset:"5%",stopColor:"#C7B3FC",stopOpacity:.9}),e.jsx("stop",{offset:"95%",stopColor:"#C7B3FC",stopOpacity:.1})]})]}),e.jsx(He,{strokeDasharray:"10 10",vertical:!1}),e.jsx(ie,{dataKey:"name",type:"category",axisLine:!1,tickLine:!1}),e.jsx(re,{axisLine:!1,tickLine:!1,domain:[-3,5],tickFormatter:r=>`${r} ${a===1?"%":""}`}),e.jsx(ne,{cursor:{fill:"transparent"},labelStyle:{color:"gray"},itemStyle:{color:"white",fontWeight:"500"},content:e.jsx(s,{})}),e.jsx(Re,{y:0,stroke:"#fff"}),e.jsx(Ue,{dataKey:"return",children:t.map((r,o)=>e.jsx(oe,{fill:(r==null?void 0:r.return)>=0?"url(#positive)":"url(#negative)"},`cell-${o}`))})]})})})})})}function Oa(){let t=[{name:"Sunday",wins:1,losses:13,fill:"purple"},{name:"Saturday",wins:0,losses:0,fill:"blue"},{name:"Friday",wins:94,losses:76,fill:"orange"},{name:"Thursday",wins:118,losses:52,fill:"pink"},{name:"Wednesday",wins:131,losses:86,fill:"purple"},{name:"Tuesday",wins:166,losses:136,fill:"yellow"},{name:"Monday",wins:61,losses:78,fill:"green"}];return t=t==null?void 0:t.map(a=>({...a,winRate:(a==null?void 0:a.wins)/((a==null?void 0:a.wins)+(a==null?void 0:a.losses))*100||0})),e.jsx("div",{className:"radialChart h-full w-full",children:e.jsx("div",{className:"charts-wrapper",children:e.jsx(R,{width:"100%",height:"100%",children:e.jsx(R,{width:"100%",height:"100%",children:e.jsxs(ze,{innerRadius:"30%",outerRadius:window.innerWidth<=480?"100%":"140%",data:t,startAngle:90,endAngle:window.innerWidth<=820?450:360,barSize:5,children:[e.jsx(We,{type:"number",domain:[0,100],tick:!1}),e.jsx($e,{minAngle:15,background:{fill:"#424242"},dataKey:"winRate",cornerRadius:30,legendType:"circle"}),e.jsx(le,{iconSize:10,width:120,height:140,layout:"vertical",verticalAlign:"top",align:"center",content:a=>{const{payload:s}=a,r=(s==null?void 0:s.length)-1;return e.jsx("table",{className:"recharts-default-legend",style:{padding:"0px",margin:"0px",textAlign:"left"},children:e.jsx("tbody",{children:s==null?void 0:s.map((o,l)=>{var d,c,p,n,u,N,C;return e.jsxs("tr",{className:"recharts-legend-item legend-item-0",children:[e.jsxs("td",{children:[e.jsxs("svg",{className:"recharts-surface",width:"10",height:"10",viewBox:"0 0 32 32",style:{display:"inline-block",verticalAlign:"middle",marginRight:"4px"},children:[e.jsx("title",{}),e.jsx("desc",{}),e.jsx("path",{fill:(d=s[r-l])==null?void 0:d.color,cx:"16",cy:"16",className:"recharts-symbols",transform:"translate(16, 16)",d:"M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"})]}),e.jsx("span",{className:"recharts-legend-item-text",style:{color:(c=s[r-l])==null?void 0:c.color},children:`${(p=s[r-l])==null?void 0:p.value}: `})]}),e.jsx("td",{children:e.jsxs("span",{style:{marginLeft:"10px"},children:["Wins: ",(u=(n=s[r-l])==null?void 0:n.payload)==null?void 0:u.wins]})}),e.jsx("td",{children:e.jsxs("span",{style:{marginLeft:"10px"},children:["Losses: ",(C=(N=s[r-l])==null?void 0:N.payload)==null?void 0:C.losses]})})]},l)})})})}})]})})})})})}const Ia=t=>{const{cx:a,cy:s,innerRadius:r,outerRadius:o,startAngle:l,endAngle:d,fill:c,payload:p,percent:n}=t;return e.jsxs("g",{children:[e.jsx("rect",{x:a-65,y:s-35,rx:"20",ry:"20",width:"130",height:"70",style:{fill:"none",stroke:c,strokeDasharray:"6"}}),e.jsxs("text",{x:a,y:s,dy:8,textAnchor:"middle",fill:c,children:[e.jsx("tspan",{x:a,dy:"-0.2em",fill:"white",children:p.name}),e.jsxs("tspan",{x:a,dy:"1.4em",children:["("," ",parseFloat(n*100).toFixed(2)," ","% )"]})]}),e.jsx(Ye,{cx:a,cy:s,innerRadius:r,outerRadius:o,startAngle:l,endAngle:d,cornerRadius:10,fill:c})]})};function ae({pieData:t}){const{data:a,color:s}=t,[r,o]=i.useState(-1),l=i.useCallback((c,p)=>{o(p)},[o]),d=i.useCallback((c,p)=>{o(-1)},[o]);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"pieChart max-h-[450px] h-full",children:e.jsx("div",{className:"charts-wrapper",children:e.jsx(R,{width:"100%",height:"100%",children:e.jsxs(qe,{children:[e.jsx("defs",{children:a==null?void 0:a.map((c,p)=>e.jsxs("linearGradient",{id:`myGradient${p+c.name}`,children:[e.jsx("stop",{offset:"0%",stopColor:s[p%(s==null?void 0:s.length)].start,stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:s[p%(s==null?void 0:s.length)].end,stopOpacity:.9})]},c+p))}),e.jsx(le,{iconType:"circle",layout:"horizontal",verticalAlign:"top",align:"center"}),e.jsx(Ve,{activeIndex:r,activeShape:Ia,data:a,innerRadius:80,outerRadius:120,fill:"#8884d8",cornerRadius:10,paddingAngle:6,dataKey:"value",stroke:"none",label:!0,onMouseEnter:l,onMouseLeave:d,children:a==null?void 0:a.map((c,p)=>e.jsx(oe,{style:{outline:"none",opacity:r<0?"1":"0.5"},fill:`url(#myGradient${p+c.name})`},`cell-${p}`))})]})})})})})}function Ba(){const{pathname:t}=w(),a=[{name:"Mon",return:-1.75},{name:"Tue",return:2.9},{name:"Wed",return:3.2},{name:"Thu",return:.7},{name:"Fri",return:4.8},{name:"Sat",return:0},{name:"Sun",return:-2.1}],s=[{name:"00:00-00:05",return:540},{name:"00:05-00:15",return:-125},{name:"00:60-00:75",return:-300},{name:"00:75-00:90",return:200}],r=[{name:"Sell",return:-50},{name:"Buy",return:505}],o={data:[{name:"US30.cash",value:30.3},{name:"US100.cash",value:34.6},{name:"GER30.cash",value:33.7},{name:"BTC",value:1.4}],color:[{start:"#be185d",end:"#ec4899"},{start:"#6b21a8",end:"#a855f7"},{start:"#1e40af",end:"#6366f1"},{start:"#0e7490",end:"#22d3ee"}]},l={data:[{name:"Sell",value:30},{name:"Buy",value:70}],color:[{start:"#ef4444",end:"#b91c1c"},{start:"#84cc16",end:"#15803d"}]},d=[{name:"GBPUSD.tff",return:800},{name:"XAUUSD",return:95},{name:"XAGUSD",return:-40}],c=[{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"£94.10 "},{time:"Sep 12, 2023 ",trade:"18 ",lots:"0.90 ",result:"-£94.10 "}],p=[{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"sell",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"-£8.01",Pip:"-207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"},{open:" Sep 12, 2023, 8:49:31 PM",Action:"buy",Symbol:"XAUUSD",Volume:"0.05",OpenPrice:"1912.6400",Close:"Sep 12, 2023, 10:14:08 PM",ClosePrice:"1914.7100",Duration:"01:24:37",Swap:"£0.00",Commission:"-£0.28",Profit:"£8.01",Pip:"207.0"}];return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsx("main",{className:"new-dashboard relative pt-16 sm:pb-6 sm:pt-24 bg-black",children:e.jsx("div",{className:"content-wrapper relative",children:e.jsxs("div",{className:"inner-content px-6 relative",children:[e.jsx("div",{className:"flex flex-col xs:flex-row gap-5 relative mb-10 md:hidden",children:e.jsxs("div",{className:"inline-flex justify-start text-[22px] leading-[1.5] font-medium tracking-[-0.06px] ",children:[e.jsx("svg",{className:"breadcrumb-icon mt-1",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})}),"Dashboard"]})}),e.jsxs("div",{className:"dashboard-wrapper z-10 grid gap-6 font-Montserrat font-normal text-sm",children:[e.jsxs("div",{className:"head flexf flex-col xs:flex-row gap-6 justify-between hidden",children:[e.jsxs("div",{className:"left flex  items-center gap-4",children:[e.jsx("div",{className:"symbol bg-blu p-2.5 sm:p-3 rounded-full",children:e.jsx(we,{className:"text-2xl"})}),e.jsx("h2",{className:"relative text-wht-gradient text-2xl sm:text-3xl",children:"Account"})]}),e.jsx("div",{className:"right flex items-center",children:e.jsxs("span",{children:[e.jsx("span",{className:"text-gry",children:"Created"}),": Aug 30, 2023"]})})]}),e.jsxs("div",{className:"wrap grid md:grid-cols-3 gap-6",children:[e.jsx("div",{className:"balance-chart col-span-2 hidden",children:e.jsx("div",{className:"ApexChart relative z-10 grid gap-4 dash-home-bg rounded-xl mt-6 md:mt-0",children:e.jsx("div",{className:"min-h-[300px] sm:h-[280px] md:min-h-[420px] rounded-xl py-4 md:p-6 pr-4 md:mt-4"})})}),e.jsxs("div",{className:"chart-wrap md:col-span-2 grid gap-4 mt-1",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Balance Chart"})}),e.jsx("div",{className:"dash-home-bg overflow-hidden w-full max-h-full",children:e.jsx(Da,{})})]}),e.jsxs("div",{className:"right md:col-span-1 grid gap-4",children:[e.jsxs("div",{className:"top flex gap-4 justify-between items-center",children:[e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Account Details"}),e.jsx("div",{className:"pas bg-grn p-1 px-2.5 rounded-2xl text-white",children:"passed"})]}),e.jsxs("div",{className:"wrap text-sm h-full grid gap-6",children:[e.jsxs("div",{className:"dash-home-bg grid gap-6 py-6 px-4",children:[e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Deposit:"}),e.jsx("div",{className:"value",children:"£10,000.00"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Start date:"}),e.jsx("div",{className:"value",children:"Aug 11, 2023, 6:20:20 PM"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Broker:"}),e.jsx("div",{className:"value",children:"BlackBull"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Platform:"}),e.jsx("div",{className:"value",children:"MetaTrader 5"})]})]}),e.jsxs("div",{className:"dash-home-bg grid gap-6 py-6 px-4",children:[e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Balance:"}),e.jsx("div",{className:"value",children:"£10,425.05"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Equity:"}),e.jsx("div",{className:"value",children:"£10,425.05"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Last update:"}),e.jsx("div",{className:"value",children:"Sep 10, 2023, 5:06:47 PM"})]}),e.jsxs("div",{className:"txt flex gap-4 justify-between",children:[e.jsx("div",{className:"name text-gry",children:"Created:"}),e.jsx("div",{className:"value",children:"Sep 10, 2023"})]})]})]})]})]}),e.jsxs("div",{className:"wrap grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 text-sm pt-2 text-center",children:[e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-center gap-2",children:e.jsx("div",{className:"text-gry",children:"Balance"})}),e.jsx("div",{className:"val font-bold",children:"£10,425.05"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-center gap-2",children:e.jsx("div",{className:"text-gry",children:"Equity"})}),e.jsx("div",{className:"val font-bold",children:"£10,425.05"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-center gap-2",children:e.jsx("div",{className:"text-gry",children:"Today’s Permitted Loss"})}),e.jsx("div",{className:"val font-bold",children:"Not available"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-center gap-2",children:e.jsx("div",{className:"text-gry",children:"Max. Permitted Loss"})}),e.jsx("div",{className:"val font-bold",children:"Not available"})]}),e.jsxs("div",{className:"dash-home-bg p-4",children:[e.jsx("div",{className:"top text-[0.8rem] flex justify-center gap-2",children:e.jsx("div",{className:"text-gry",children:"Today's Profit"})}),e.jsx("div",{className:"val font-bold",children:"£0.00"})]})]}),e.jsxs("div",{className:"wrap mt-8",children:[e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Objectives"}),e.jsxs("div",{className:"items mt-4 grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"item dash-home-bg p-5",children:[e.jsxs("div",{className:"top flex justify-between items-center border-b border-primary/10 pb-4",children:[e.jsxs("div",{className:"txt flex gap-4 items-center",children:[e.jsx("div",{className:"pas bg-grn p-1.5 px-2.5 rounded-2xl text-white",children:"passed"}),e.jsx("div",{children:"Max Daily Loss"})]}),e.jsx("div",{className:"val",children:"£500.00"})]}),e.jsxs("div",{className:"bottom flex gap-4 justify-between pt-3",children:[e.jsx("div",{className:"text-gry",children:"Result:"}),e.jsx("div",{children:" -£237.76"})]})]}),e.jsxs("div",{className:"item dash-home-bg p-5",children:[e.jsxs("div",{className:"top flex justify-between items-center border-b border-primary/10 pb-4",children:[e.jsxs("div",{className:"txt flex gap-4 items-center",children:[e.jsx("div",{className:"pas bg-grn p-1.5 px-2.5 rounded-2xl text-white",children:"passed"}),e.jsx("div",{children:"Max Loss"})]}),e.jsx("div",{className:"val",children:"£1,000.00"})]}),e.jsxs("div",{className:"bottom flex gap-4 justify-between pt-3",children:[e.jsx("div",{className:"text-gry",children:"Result:"}),e.jsx("div",{children:" -£223.76"})]})]})]})]}),e.jsx("div",{className:"middle mt-8 text-xs",children:e.jsxs("div",{className:"wrap grid md:grid-cols-5 gap-6 ",children:[e.jsxs("div",{className:"left md:col-span-2 flex flex-col gap-4",children:[e.jsx("div",{className:"wrap flex ",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Daily Summary"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4 h-full",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-primary",children:[e.jsx("th",{align:"left",children:"Time"}),e.jsx("th",{align:"left",children:"Trades"}),e.jsx("th",{align:"left",children:"Lots"}),e.jsx("th",{align:"left",children:"Result"})]})}),e.jsx("tbody",{className:"text-gry",children:c.map((n,u)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("span",{children:[" ",n.time," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.trade," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.lots," "]})}),e.jsx("td",{children:e.jsxs("span",{className:`${n.result.indexOf("-")===-1?"text-grn":"text-danger"}`,children:[" ",n.result," "]})})]},n.trade+u))})]})})]}),e.jsxs("div",{className:"right md:col-span-3 grid gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Daily Returns"})}),e.jsx("div",{className:"chart dash-home-bg py-4 max-h-full",children:e.jsx(W,{data:a,percent:1})})]})]})}),e.jsx("div",{className:"win-loss mt-8 text-xs",children:e.jsxs("div",{className:"wrap flex flex-col md:grid md:grid-cols-2 gap-6 ",children:[e.jsxs("div",{className:"left flex flex-col gap-4",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Wins & Losses"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4 h-[580px]  sm:h-full w-full",children:e.jsx(Oa,{})})]}),e.jsxs("div",{className:"right  grid gap-4",children:[e.jsx("div",{className:"wrap flex",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Profit by Holding time"})}),e.jsx("div",{className:"chart dash-home-bg py-4",children:e.jsx(W,{data:s})})]})]})}),e.jsxs("div",{className:"statistics mt-8",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Statistics"})}),e.jsx("div",{className:"wrap mt-4",children:e.jsxs("div",{className:"items grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:[e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Best trade"}),e.jsx("span",{children:"£27.17"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Ne,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Worst trade"}),e.jsx("span",{children:"-£26.27"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(ke,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"No. of trades"}),e.jsx("span",{children:"158"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Te,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Lots"}),e.jsx("span",{children:"7.57"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Se,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Win rate"}),e.jsx("span",{children:"75%"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Ae,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Average win"}),e.jsx("span",{children:"£8.70"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Pe,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Average loss"}),e.jsx("span",{children:"-£8.78"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Ce,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Average RRR"}),e.jsx("span",{children:"0.99"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Me,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Expectancy"}),e.jsx("span",{children:"£4.44"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Ee,{})})})]}),e.jsxs("div",{className:"item dash-home-bg p-4 flex gap-4 justify-center items-center text-center",children:[e.jsxs("div",{className:"left",children:[e.jsx("h5",{className:"text-gry",children:"Profit factor"}),e.jsx("span",{children:"3.10"})]}),e.jsx("div",{className:"right hidden",children:e.jsx("div",{className:"icon",children:e.jsx(Fe,{})})})]})]})})]}),e.jsx("div",{className:"buy-sell mt-8 text-xs",children:e.jsxs("div",{className:"wrap grid md:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"left flex flex-col gap-4 col-span-7",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Buy / Sell"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4  h-full ",children:e.jsx(W,{data:r})})]}),e.jsxs("div",{className:"right flex flex-col gap-4 col-span-5",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Direction Allocation"})}),e.jsx("div",{className:"chart dash-home-bg py-4 h-full",children:e.jsx(ae,{pieData:l})})]})]})}),e.jsx("div",{className:"symbol mt-8 text-xs",children:e.jsxs("div",{className:"wrap grid md:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"left flex flex-col gap-4 col-span-7",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Symbol"})}),e.jsx("div",{className:"dash-home-bg px-3 py-4  h-full w-full",children:e.jsx(W,{data:d})})]}),e.jsxs("div",{className:"right flex flex-col gap-4 col-span-5",children:[e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"Symbol Allocation"})}),e.jsx("div",{className:"chart dash-home-bg py-4 h-full",children:e.jsx(ae,{pieData:o})})]})]})}),e.jsxs("div",{className:"history mt-8",children:[e.jsx("div",{className:"head text-[1.4rem] leading-6 text-wht-gradient",children:"History"}),e.jsx("div",{className:"wrap mt-4 dash-home-bg px-3 py-4 h-[400px] overflow-y-scroll",children:e.jsx("div",{className:"w-full m-auto max-w-[80vw] md:max-w-[70vw] overflow-x-scroll pr-10 pb-10",children:e.jsxs("table",{className:"",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-primary",children:[e.jsx("th",{align:"left",children:"Open"}),e.jsx("th",{align:"left",children:"Action"}),e.jsx("th",{align:"left",children:"Symbol"}),e.jsx("th",{align:"left",children:"Volume"}),e.jsx("th",{align:"left",children:"Open price"}),e.jsx("th",{align:"left",children:"Close"}),e.jsx("th",{align:"left",children:"Close price"}),e.jsx("th",{align:"left",children:"Duration"}),e.jsx("th",{align:"left",children:"Swap"}),e.jsx("th",{align:"left",children:"Commission"}),e.jsx("th",{align:"left",children:"Profit"}),e.jsx("th",{align:"left",children:"Pip"})]})}),e.jsx("tbody",{children:p.map((n,u)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("span",{children:[" ",n.open," "]})}),e.jsx("td",{children:e.jsxs("span",{className:`${n.Action==="buy"?"text-grn":"text-danger"} capitalize`,children:[" ",n.Action," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.Symbol," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.Volume]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.OpenPrice," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.Close]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.ClosePrice," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.Duration," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.Swap," "]})}),e.jsx("td",{children:e.jsxs("span",{children:[" ",n.Commission," "]})}),e.jsx("td",{children:e.jsxs("span",{className:`${n.Profit.indexOf("-")===-1?"text-grn":"text-danger"} capitalize`,children:[" ",n.Profit]})}),e.jsx("td",{children:e.jsxs("span",{className:`${n.Pip.indexOf("-")===-1?"text-grn":"text-danger"} capitalize`,children:[" ",n.Pip," "]})})]},n.open+u))})]})})})]})]})]})})})}function La({props:t}){const[a,s]=i.useState(!1),[r,o]=t,{pathname:l}=w();return i.useEffect(()=>{window.scrollTo(0,0),r(!1),s(l==="/dashboard")},[l]),e.jsx("div",{className:"wrapper relative left-0 right-0 top-0 bottom-0 z-[999] overflow-hidden",children:e.jsxs("aside",{className:`mobile-nav pt-[70px] h-screen overflow-y-scroll lg:hidden w-[80%] sm:w-[60%] fixed z-[999] top-0 bottom-0 transition-all duration-500 o  ${o?"left-0":"-left-full"}
    `,children:[e.jsx("div",{className:`bg-main-bg/70 fixed z-[90] left-0 right-0 top-0 bottom-0 transition-all duration-200 ${o?"visible opacity-100":"invisible opacity-0 -z-[100]"}`,onClick:()=>r(!1)}),e.jsxs("ul",{className:"pl-12 w-full font-Montserrat relative z-[999]",children:[e.jsx("li",{className:"border-b border-primary/20 group mt-4",children:e.jsx(m,{to:"profile",className:"flex items-center  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary",children:"My Profile"})}),e.jsx("li",{className:"group",children:e.jsx(m,{to:"/login",className:"flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear  text-wht group-hover:text-primary",children:"Logout"})})]}),e.jsx("div",{className:"main-menu relative z-[999] ml-5",children:e.jsxs("ul",{className:"nav grid gap-2 h-full",children:[e.jsx(F,{to:"/dashboard",onClick:()=>s(!0),className:a?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link",children:e.jsx("span",{children:"Dashboard"})})})}),e.jsx(F,{to:"trading-overview",className:({isActive:d})=>d?"active-side-nav hidden":"hidden",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Trading Overview"})})})}),e.jsx(F,{to:"withdraw",className:({isActive:d})=>d?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Withdraw"})})})}),e.jsx(F,{to:"top-up-reset",className:({isActive:d})=>d?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Top-up & Reset"})})})}),e.jsx(F,{to:"./billing",className:({isActive:d})=>d?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{children:"Billing"})})})}),e.jsx(F,{to:"certificate",className:({isActive:d})=>d?"active-side-nav":"",children:e.jsx("li",{className:"nav-item",children:e.jsx("div",{className:"nav-link group",children:e.jsx("span",{className:"text group-hover:text-main-bg/70",children:"Certificate"})})})}),e.jsxs("div",{className:"ml-14 mt-8 mb-12 grid gap-8",children:[e.jsx(H,{}),e.jsx(m,{to:"/dashboard/start-new-challenge",className:"capitalize  whitespace-nowrap font-Montserrat text-xs font-bold py-3 px-5 dash-btn rounded-3xl text-center max-w-[12rem]",children:"START NEW CHALLENGE"})]})]})})]})})}function Ha(){const[t,a]=i.useState(!0),[s,r]=i.useState(!1),[o,l]=i.useState({top:30,right:30,left:-20,bottom:-5});i.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[s]);const{pathname:d}=w();return i.useEffect(()=>{window.scrollTo(0,0)},[d]),i.useEffect(()=>{screen.width>560&&l({top:30,right:30,left:15,bottom:10})},[]),e.jsxs(e.Fragment,{children:[e.jsx(Ma,{props:[r,s]}),e.jsx(Fa,{sideOpen:t}),e.jsx(La,{props:[r,s]}),e.jsx("div",{className:"wrapper purple-shadow  fh-screen",children:d==="/dashboard"?e.jsx(Ba,{}):e.jsx(ue,{})})]})}function Ra(){const[t,a]=i.useState(0),[s,r]=i.useState(!1),[o,l]=i.useState(0),d=i.useRef(null);i.useEffect(()=>{a(d.current.clientHeight)},[s]);const c=[{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"}],p=n=>{if(n>2832)return l(2832);if(n<0)return l(0);l(n)};return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadow-dash min-h-screen",children:e.jsx("div",{className:"inner-content px-6",children:e.jsxs("div",{className:"dashboard-wrapper relative",children:[e.jsx("div",{className:"flex flex-wrap relative",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"flex flex-wrap",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"content relative mb-[30px]",children:e.jsxs("div",{className:"flex relative z-10 flex-wrap justify-center mx-[-15px]",children:[e.jsx("div",{className:"xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]",children:e.jsxs("div",{className:"p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr",children:[e.jsx("h3",{className:"text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht",children:"Account Profit"}),e.jsx("p",{className:"xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"Your account profit from your current trading cycle."}),e.jsx("p",{className:"text-blu text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]",children:"$1000.00"})]})}),e.jsx("div",{className:"xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]",children:e.jsxs("div",{className:"p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr",children:[e.jsx("h3",{className:" text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px]",children:"Withdrawable Profit"}),e.jsx("p",{className:"xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"Withdrawable profit at the end of your trading cycle."}),e.jsx("p",{className:"text-primary text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]",children:"$2832.00"})]})}),e.jsx("div",{className:"xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]",children:e.jsxs("div",{className:"p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr",children:[e.jsx("h3",{className:"text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht",children:"Withdraw Request"}),e.jsx("p",{className:"xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"Total Account Growth Percentage You've Reached"}),e.jsxs("div",{className:"wrap flex justify-between items-center gap-2",children:[e.jsxs("div",{className:"left flex items-center border border-primary/10 text-white rounded-3xl py-2 px-3 text-[1.4rem]",children:["$",e.jsx("input",{type:"number",onChange:n=>p(n.target.value),value:o,className:"bg-transparent w-16 focus:outline-none"}),e.jsx("div",{className:"static-value font-bold text-primary",children:"/ $2832"})]}),e.jsx("div",{className:"btn ",children:e.jsx("a",{className:"uppercase hidden sm:inline-block font-Montserrat text-sm font-bold py-3 px-7 dash-btn rounded-3xl",href:"/dashboard/billing",children:"Get your payout"})})]})]})})]})})})})})}),e.jsx("div",{className:"flex flex-wrap relative",children:e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"card-wrap dash-bar-clr rounded-[2rem]",children:[e.jsxs("div",{className:"card-heading flex items-center justify-between cursor-pointer",onClick:()=>r(!s),children:[e.jsx("h3",{className:"text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]",children:"Withdraw History"}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${s?"rotate-180":""}`,src:g,alt:"arrow"})})]}),e.jsx("article",{className:"dash-home-bg rounded-xl",children:e.jsx("div",{style:{maxHeight:s?t+"px":"0"},className:"width-content transition-all duration-300 overflow-hidden",children:e.jsx("div",{ref:d,className:"wrapper",children:e.jsx("div",{className:"billing-data bg-transparent px-3 py-4 overflow-y-scroll",children:e.jsx("div",{className:"m-auto max-w-[1200px] overflow-x-scroll whitespace-nowrap pb-6",children:e.jsxs("table",{className:"font-Montserrat w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("th",{align:"left",children:"Funded challenge"}),e.jsx("th",{align:"left",children:"Dates"}),e.jsx("th",{align:"left",children:"Amount"}),e.jsx("th",{align:"left",children:"Account"}),e.jsx("th",{align:"left",children:"status"}),e.jsx("th",{align:"left",children:"Invoice"})]})}),e.jsx("tbody",{children:c.map((n,u)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("div",{className:"nm text-all",children:"Funded challenge"}),e.jsxs("div",{className:"acnt-sizes flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Account size:"}),n.accountSize]}),e.jsxs("div",{className:"perf flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Proforma no.:"}),n.ProformaNo]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dates",children:[e.jsx("div",{className:"date1",children:n.date1}),e.jsx("div",{className:"date2",children:n.date2})]})}),e.jsx("td",{children:e.jsx("div",{className:"amount",children:n.amount})}),e.jsxs("td",{children:[e.jsx("div",{children:"Funded"}),e.jsx("div",{children:"MT5"})]}),e.jsx("td",{children:e.jsx("div",{className:"paid py-2 text-center rounded-xl bg-grn text-white",children:"paid"})}),e.jsx("td",{children:e.jsx("div",{className:"invoice flex justify-center items-center",children:e.jsx(Y,{className:" cursor-pointer"})})})]},n.open+u))})]})})})})})})]})})})]})})})}function Ua(){const[t,a]=i.useState(0),[s,r]=i.useState(!1),o=i.useRef(null);i.useEffect(()=>{a(o.current.clientHeight)},[s]);const l=[{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"}];return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash",children:e.jsx("div",{className:"inner-content px-6 min-h-screen",children:e.jsx("div",{className:"dashboard-wrapper",children:e.jsx("div",{className:"flex flex-wrap",children:e.jsxs("div",{className:"w-full grid sm:grid-cols-2 !gap-4",children:[e.jsxs("div",{className:"flex flex-col justify-between h-full p-5 rounded-3xl relative z-10 overflow-hidden dash-home-bg backdrop-blur-3xl dash-home-bg",children:[e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"card-heading flex items-center justify-between mb-[20px]",children:e.jsx("h3",{className:"card-title text-xl",children:"Funded Reset"})}),e.jsxs("p",{className:"xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70",children:["Traders will get an opportunity to bring back their account balance to the initial amount. Applicable if you have not violated any of the drawdown rules. Once you top up your account, your trading cycle will also reset. To know more"," ",e.jsx("a",{href:"#",className:"underline",children:"click"})]}),e.jsx("p",{className:"xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px]",children:"*** You must close the running trades if you have any***"})]}),e.jsx("div",{className:"btn flex justify-center",children:e.jsx("a",{href:"#",className:"capitalize font-Montserrat text-sm font-bold py-4 px-12 dash-btn rounded-3xl",children:"Reset Request"})})]}),e.jsxs("div",{className:"flex flex-col justify-between h-full p-5 rounded-3xl relative z-10 overflow-hidden dash-home-bg backdrop-blur-3xl dash-home-bg",children:[e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"card-heading flex items-center justify-between mb-[20px]",children:e.jsx("h3",{className:"card-title text-xl",children:"Free Retry"})}),e.jsxs("p",{className:"text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70",children:['If a trader violates the rules his/her account will be suspended. Prop dashboard will give him/her the opportunity to continue with the program at a discounted price/cost. This re-registration cost is also known as the "Reset" fee since the trader will be provided with a new account and his trading cycle will be reset. To know more'," ",e.jsx("a",{href:"#",className:"underline",children:"click here"})]}),e.jsx("p",{className:"text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70",children:"*** You must close the running trades if you have any***"})]}),e.jsx("div",{className:"btn flex justify-center",children:e.jsx("a",{href:"#",className:"capitalize font-Montserrat text-sm font-bold py-4 px-12 dash-btn rounded-3xl",children:"Free Retry Request"})})]}),e.jsx("div",{className:"h-full col-span-full mt-6",children:e.jsx("div",{className:"flex flex-wrap relative",children:e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"card-wrap dash-bar-clr rounded-3xl",children:[e.jsxs("div",{className:"card-heading flex items-center justify-between cursor-pointer",onClick:()=>r(!s),children:[e.jsx("h3",{className:"text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]",children:"Reset & Free Retry History"}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${s?"rotate-180":""}`,src:g,alt:"arrow"})})]}),l.length!==0?e.jsx("article",{className:"rounded-xl",children:e.jsx("div",{style:{maxHeight:s?t+"px":"0"},className:"width-content transition-all duration-300 overflow-hidden",children:e.jsx("div",{ref:o,className:"wrapper pt-4",children:e.jsx("div",{className:"billing-data bg-transparent px-3 py-4 overflow-y-scroll",children:e.jsx("div",{className:"m-auto max-w-[1200px] overflow-x-scroll whitespace-nowrap pb-6",children:e.jsxs("table",{className:"font-Montserrat w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("th",{align:"left",children:"Funded challenge"}),e.jsx("th",{align:"left",children:"Dates"}),e.jsx("th",{align:"left",children:"Amount"}),e.jsx("th",{align:"left",children:"Account"}),e.jsx("th",{align:"left",children:"status"}),e.jsx("th",{align:"left",children:"Invoice"})]})}),e.jsx("tbody",{children:l.map((d,c)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("div",{className:"nm text-all",children:"Funded challenge"}),e.jsxs("div",{className:"acnt-sizes flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Account size:"}),d.accountSize]}),e.jsxs("div",{className:"perf flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Proforma no.:"}),d.ProformaNo]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dates",children:[e.jsx("div",{className:"date1",children:d.date1}),e.jsx("div",{className:"date2",children:d.date2})]})}),e.jsx("td",{children:e.jsx("div",{className:"amount",children:d.amount})}),e.jsxs("td",{children:[e.jsx("div",{children:"Funded"}),e.jsx("div",{children:"MT5"})]}),e.jsx("td",{children:e.jsx("div",{className:"paid py-2 text-center rounded-xl bg-grn text-white",children:"paid"})}),e.jsx("td",{children:e.jsx("div",{className:"invoice flex justify-center items-center",children:e.jsx(Y,{className:" cursor-pointer"})})})]},d.open+c))})]})})})})})}):e.jsx("div",{className:"content h-full flex justify-center items-center",children:e.jsxs("div",{className:"withdraw-history text-center py-[40px]",children:[e.jsx("div",{className:"thumb inline-block mb-[24px]",children:e.jsx("img",{src:ea,alt:"thumb"})}),e.jsx("p",{children:"No history found!"})]})})]})})})})]})})})})})}function za(){const[t,a]=i.useState(""),[s,r]=i.useState([]),[o,l]=i.useState("John Doe"),[d,c]=i.useState([]),p=se.getAllCountries(),[n,u]=i.useState("personal"),N=o.split(" ").map(f=>f.charAt(0)).join(""),[C,M]=i.useState(0),[E,T]=i.useState(!1),j=i.useRef(null);i.useEffect(()=>{var f;M((f=j==null?void 0:j.current)==null?void 0:f.clientHeight)},[E]),i.useEffect(()=>{r([]),p.forEach(f=>{f.name===t&&r(Oe.getStatesOfCountry(f.isoCode))})},[t]);const h="original",S={...Xe,"Europe/Berlin":"Frankfurt"},{options:x,parseTimezone:O}=Ge({labelStyle:h,timezones:S});return e.jsx(e.Fragment,{children:e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash min-h-[100vh] font-Montserrat",children:e.jsx("div",{className:"inner-content px-6",children:e.jsx("div",{className:"dashboard-wrapper",children:e.jsxs("div",{className:"grid gap-4  mb-20",children:[e.jsx("div",{className:"py-8 rounded-xl relative  min-h-full",children:e.jsxs("div",{className:"grid grid-cols-2 sm:flex gap-4 w-full max-w-[40rem]",children:[e.jsx("button",{className:`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${n==="personal"?"border-primary":"border-primary/10"}`,onClick:()=>u("personal"),children:"Personal Information"}),e.jsx("button",{className:`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${n==="account"?"border-primary":"border-primary/10"}`,onClick:()=>u("account"),children:"Account Information"}),e.jsx("button",{className:`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${n==="Security"?"border-primary":"border-primary/10"}`,onClick:()=>u("Security"),children:"Security"})]})}),n==="personal"?e.jsxs("div",{className:"personal grid gap-8",children:[e.jsx("div",{className:"top dash-bar-clr p-6 rounded-3xl",children:e.jsxs("div",{className:"user flex gap-4 items-center max-w-[20rem]",children:[e.jsxs("div",{className:"img grid gap-2 justify-center items-center relative",children:[e.jsx("img",{className:"h-[6rem] w-[6rem] rounded-full hidden",src:userImg,alt:"user-img"}),e.jsx("div",{className:"short-name uppercase border bg-blu/20 border-blu h-24 w-24 rounded-full flex justify-center items-center text-2xl",children:N})]}),e.jsxs("div",{className:"info flex flex-col gap-2",children:[e.jsx("div",{className:"name font-medium",children:"John Doe"}),e.jsx("div",{className:"user-name",children:"info@johndoe.com"})]})]})}),e.jsxs("div",{className:"client font-normal",children:[e.jsx("div",{className:"head text-xl font-semibold",children:"Client"}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl pb-8",children:[e.jsxs("div",{className:"first-name grid gap-2",children:[e.jsx("label",{htmlFor:"first-name",className:"font-medium",children:"First Name"}),e.jsx("input",{id:"first-name",name:"first-name",className:"last-name w-full focus:outline-primary/70 bg-dark  backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"John"})]}),e.jsxs("div",{className:"last-name grid gap-2",children:[e.jsx("label",{htmlFor:"last-name",className:"font-medium",children:"Last name"}),e.jsx("input",{id:"last-name",name:"last-name",className:"last-name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Doe"})]}),e.jsxs("div",{className:"selecte-title grid gap-2",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsxs("div",{className:"wrapper relative bg-dark rounded-2xl",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:g,alt:"arrow"}),e.jsxs("select",{id:"title",name:"title",autoFocus:!0,className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent",children:[e.jsx("option",{value:"Mr.",children:"Mr."}),e.jsx("option",{value:"Mr.",children:"Ms."}),e.jsx("option",{value:"Mr.",children:"Mrs."}),e.jsx("option",{value:"Mr.",children:"Mx."})]})]})]})]})]}),e.jsxs("div",{className:"client font-normal",children:[e.jsx("div",{className:"head text-xl font-semibold",children:"Contact Info"}),e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl pb-8",children:[e.jsxs("div",{className:"phone grid gap-2",children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx("input",{id:"phone",name:"phone",className:"phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"number",placeholder:"1234567890"})]}),e.jsxs("div",{className:"email grid gap-2",children:[e.jsx("label",{htmlFor:"email",children:"E-mail address"}),e.jsx("input",{id:"email",name:"email",className:"phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"email",placeholder:"example@mail.com"})]}),e.jsxs("div",{className:"country grid gap-2",children:[e.jsx("label",{htmlFor:"country",children:"Country"}),e.jsxs("div",{className:"wrapper relative bg-dark rounded-2xl",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:g,alt:"arrow"}),e.jsx("select",{id:"country",name:"country",onChange:f=>a(f.target.value),className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent",children:p.map((f,D)=>e.jsx("option",{value:f.name,children:f.name},D))})]})]}),e.jsxs("div",{className:"City grid gap-2",children:[e.jsx("label",{htmlFor:"city",children:"City"}),e.jsxs("select",{id:"city",name:"city",disabled:!s.length,className:"form-control w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",children:[e.jsx("option",{defaultChecked:!0,children:"City"}),s.map((f,D)=>e.jsx("option",{value:f.name,children:f.name},D))]})]}),e.jsxs("div",{className:"street grid gap-2",children:[e.jsx("label",{htmlFor:"street",children:"Street"}),e.jsx("input",{id:"street",name:"street",className:"name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"Vila Safi 13A",required:!0})]}),e.jsxs("div",{className:"zip grid gap-2",children:[e.jsx("label",{htmlFor:"zip",children:"Zip"}),e.jsx("input",{id:"zip",name:"zip",className:"name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200",type:"text",placeholder:"4042",required:!0})]})]})]}),e.jsx("div",{className:"save flex justify-center w-full mt-3",children:e.jsx("button",{className:"capitalize hidden sm:inline-block font-Montserrat text-lg font-bol2 py-3 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto font-semibold",children:"Save"})})]}):n==="account"?e.jsxs("div",{className:"account font-normal",children:[e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl ",children:[e.jsxs("div",{className:"email-readonly grid gap-2",children:[e.jsx("label",{htmlFor:"email-readonly",children:"Username"}),e.jsx("input",{id:"email-readonly",name:"email-readonly",className:"phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none text-gry",type:"email",readOnly:!0,value:"johndoe@mail.com",placeholder:"johndoe@mail.com"})]}),e.jsxs("div",{className:"time-zone grid gap-2",children:[e.jsx("label",{htmlFor:"time-zone",children:"Time Zone"}),e.jsxs("div",{className:"wrapper relative bg-dark rounded-2xl",children:[e.jsx("img",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]",src:g,alt:"arrow"}),e.jsx("select",{id:"time-zone",name:"time-zone",onChange:f=>c(f.target.value),className:"form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent",children:x.map(f=>e.jsx("option",{value:f.value,children:f.label},f))})]})]})]}),e.jsx("div",{className:"save flex justify-center w-full mt-4",children:e.jsx("button",{className:"capitalize hidden sm:inline-block font-Montserrat text-lg font-bol2 py-3 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto",children:"Save"})})]}):e.jsx("div",{className:"security",children:e.jsxs("div",{className:"dash-bar-clr rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>T(!E),children:[e.jsx("h3",{className:"text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]",children:"Password Change"}),e.jsx("div",{className:"arrow",children:e.jsx("img",{className:`max-w-[1.4rem] transform-gpu transition-all duration-300 ${E?"rotate-180":""}`,src:g,alt:"arrow"})})]}),e.jsx("article",{className:"",children:e.jsx("div",{style:{maxHeight:E?C+"px":"0"},className:"width-content transition-all duration-300 overflow-hidden ",children:e.jsxs("div",{ref:j,className:"wrapper py-3 px-2 pt-4",children:[e.jsxs("div",{className:"inputs grid sm:grid-cols-2 gap-6 pt-4",children:[e.jsx("div",{className:"curr-pass",children:e.jsx("input",{name:"current-pass",className:"curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"password",placeholder:"Current Password*"})}),e.jsx("div",{className:"new-pass",children:e.jsx("input",{name:"new-pass",className:"curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"password",placeholder:"New Password*"})}),e.jsx("div",{className:"confirm-pass sm:col-start-2",children:e.jsx("input",{name:"confirm-pass",className:"curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none",type:"password",placeholder:"Confirm Password*"})})]}),e.jsx("div",{className:"save flex justify-center w-full mt-4",children:e.jsx("button",{className:"capitalize hidden sm:inline-block font-Montserrat text-lg font-bold py-2 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto",children:"Save"})})]})})})]})})]})})})})})}function Wa(){const t=[{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"},{accountSize:"£10,000",ProformaNo:"18056525",date1:"6 Mar 2022",date2:"7 Mar 2022",amount:"€155.00"}];return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsxs("div",{className:"inner-content px-6",children:[e.jsx("div",{className:"breadcrumb-wrap relative z-10",children:e.jsxs("div",{className:"breadcrumb-title md:hidden",children:[e.jsx("svg",{className:"breadcrumb-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"})}),"Billing"]})}),e.jsx("div",{className:"dashboard-wrapper relative",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"content",children:e.jsx("div",{className:"tabs-wrap",children:e.jsx("div",{className:"payment-method h-full text-center ",children:t===""?e.jsx("p",{children:"No history found!"}):e.jsx("div",{className:"billing-data dash-home-bg px-8 py-4 ",children:e.jsx("div",{className:"m-auto max-w-[1200px] overflow-x-scroll whitespace-nowrap pb-6",children:e.jsxs("table",{className:"font-Montserrat w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("th",{align:"left",children:"Funded challenge"}),e.jsx("th",{align:"left",children:"Dates"}),e.jsx("th",{align:"left",children:"Amount"}),e.jsx("th",{align:"left",children:"Account"}),e.jsx("th",{align:"left",children:"status"}),e.jsx("th",{align:"left",children:"Invoice"})]})}),e.jsx("tbody",{children:t.map((a,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("div",{className:"nm text-all",children:"Funded challenge"}),e.jsxs("div",{className:"acnt-sizes flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Account size:"}),a.accountSize]}),e.jsxs("div",{className:"perf flex gap-1",children:[e.jsx("div",{className:"text-gry",children:"Proforma no.:"}),a.ProformaNo]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dates",children:[e.jsx("div",{className:"date1",children:a.date1}),e.jsx("div",{className:"date2",children:a.date2})]})}),e.jsx("td",{children:e.jsx("div",{className:"amount",children:a.amount})}),e.jsxs("td",{children:[e.jsx("div",{children:"Funded"}),e.jsx("div",{children:"MT5"})]}),e.jsx("td",{children:e.jsx("div",{className:"paid py-2 text-center rounded-xl bg-grn text-white w-[4.5rem]",children:"paid"})}),e.jsx("td",{children:e.jsx("div",{className:"invoice flex justify-center items-center",children:e.jsx(Y,{className:" cursor-pointer"})})})]},a.open+s))})]})})})})})})})})})})})]})})}function $a(){return e.jsx("main",{className:"content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsxs("div",{className:"inner-content px-6",children:[e.jsx("div",{className:"breadcrumb-wrap relative z-10",children:e.jsxs("div",{className:"breadcrumb-title md:hidden",children:[e.jsx("svg",{className:"breadcrumb-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"})}),"Billing"]})}),e.jsx("div",{className:"dashboard-wrapper relative",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"flex flex-wrap mx-[-15px]",children:e.jsx("div",{className:"w-full px-[15px]",children:e.jsx("div",{className:"content",children:e.jsx("div",{className:"tabs-wrap",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"tab-content tab-space",children:e.jsx("div",{className:`prices relative  
                            }`,children:e.jsx(de,{clr:"dash-bar-clr"})})})})})})})})})})})]})})}const qa="/assets/PHASE1-PASSED-2fea9118.png",Va="/assets/PHASE2-PASSED-b1c1f431.png",Ya="/assets/FIRST-PAYOUT-a491e124.png",Ga="/assets/SECOND-AND-OTHER-PAYOUT-4eb85b75.png",Xa="/assets/PERSONAL-RECORD-5af8f06e.png",Ja="/assets/MAX-ALLOCATED-03f68713.png",Ka=[qa,Va,Ya,Ga,Xa,Ja];function Qa(){return e.jsx("main",{className:"certificate relative pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash",children:e.jsx("div",{className:"content-wrapper relative",children:e.jsx("div",{className:"inner-content px-6 relative",children:e.jsx("div",{className:"certificates grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fmd:mx-w-[80%] 2xl:fmax-w-[70rem]",children:Ka.map((t,a)=>e.jsxs("div",{className:"item relative rounded-2xl border-2 border-primary/40 overflow-hidden",children:[e.jsx("div",{className:"img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full",children:e.jsx("img",{className:"w-full",src:t,alt:"certificate-"+a})}),e.jsxs("div",{className:"lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",children:[e.jsx(De,{className:"text-[3.2rem]"}),e.jsx("div",{className:"btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer",children:a===0||a===1?`PHASE ${a+1}`:a===2?"FIRST PAYOUT":a===3?"NEW PAYOUT":a===4?"YOUR RECORD":"MAX ALLOCATED"})]})]},a))})})})})}function _a(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"py-32 lg:py-44 relative purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper h-full grid gap-3 justify-center items-center text-center text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl ",children:[e.jsx("h1",{children:"Your payment has been successfully processed!"}),e.jsx("h1",{children:"Thank you!"})]})})}),e.jsx(P,{})]})}function Za(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"py-32 lg:py-44 relative purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper grid gap-3 justify-center items-center text-center text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl ",children:[e.jsx("h1",{children:"Sorry, your payment is unsuccessful :("}),e.jsx("h1",{children:"Please try again"})]})})}),e.jsx(P,{})]})}function et(){const[t,a]=i.useState(!0);return e.jsx(e.Fragment,{children:t?e.jsx("div",{className:"cookies fixed bottom-[2rem] z-[99999] w-full left-0 right-0",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"wrapper",children:e.jsxs("div",{className:"content relative p-5 max-w-[450px] bg-light/[17%] backdrop-blur-3xl rounded-3xl border-2 border-light",children:[e.jsx("div",{className:"top text-center sm:text-start",children:e.jsx("h3",{className:"font-medium text-xl sm:text-[1.7rem] tracking-tight text-wht-gradient pr-10",children:"This website uses cookies"})}),e.jsxs("div",{className:"bottom grid gap-6 mt-3 text-center sm:text-start",children:[e.jsx("p",{className:"lg:col-span-2 text-xs sm:text-sm",children:"This website uses cookies to help you navigate, as well as to provide a better user experience and analyze the use of our products and services."}),e.jsxs("div",{className:"btns flex flex-col xs:flex-row justify-center sm:justify-end gap-4",children:[e.jsx("div",{onClick:()=>a(!1),className:"btn flex justify-center sm:justify-end items-center sm:col-span-1 cursor-pointer",children:e.jsx("div",{className:"uppercase font-Montserrat text-sm font-semibold py-2 sm:py-3 w-[9.5rem] sm:w-[11rem] border-wht border text-wht rounded-3xl text-center flex justify-center items-center",children:"Disagree"})}),e.jsx("div",{onClick:()=>a(!1),className:"btn flex justify-center sm:justify-end items-center sm:col-span-1 cursor-pointer",children:e.jsx("div",{className:"uppercase font-Montserrat text-sm font-semibold py-2 sm:py-3 rounded-3xl w-[9.5rem] sm:w-[11rem] text-center bg-white text-main-bg hover:opacity-80 transition-all duration-200",children:"I Agree"})})]})]}),e.jsx("div",{className:"wrap",onClick:()=>a(!1),children:e.jsx("div",{className:"cross p-2 absolute cursor-pointer text-xl sm:text-xl text-dim-gray right-4 top-4 z-50",children:e.jsx(V,{})})})]})})})}):""})}function at(t,a){const[s,r]=i.useState(1),o=Math.ceil(t.length/a);function l(){const n=(s-1)*a,u=n+a;return t.slice(n,u)}function d(){r(n=>Math.min(n+1,o))}function c(){r(n=>Math.max(n-1,1))}function p(n){const u=Math.max(1,n);r(N=>Math.min(u,o))}return{next:d,prev:c,jump:p,currentData:l,currentPage:s,maxPage:o}}let q=[{link:"blog-1",img:"blog1",title:"Leveraging Leverage: A Guide for Forex Traders",date:"26 August 2023",alt:"blog-img",para:`<span>Meta Description:</span> Explore the power of leverage
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
              </div>`},{link:"blog-2",img:"blog2",title:`Exploring the World of Forex Market Hours: A Guide to
                  Optimizing Your Trading Strategy`,para:`<span>Meta Description: </span>
                  Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders, enabling them to excel
                  in the dynamic forex market.`,date:"23 August 2023",alt:"blog-img",data:`<div className="des">
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
`},{link:"blog-3",img:"",title:"Understanding Major, Minor, and Exotic Currency Pairs in Forex Trading",para:`<span>Meta Description:</span> Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.`,date:"19 August 2023",alt:"blog-img",data:`<div className="des">
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
                </div>`},{link:"blog-4",img:"",title:"How Does Forex Trading Work? A Comprehensive Guide",para:`<span>Meta description: </span>Unlock forex trading&apos;s
                  potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital, advanced platforms, and expert support.
                  Start your journey now!`,date:"18 August 2023",alt:"blog-img",data:`<div className="des">
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
`},{link:"blog-5",img:"",title:"Introduction to Forex Trading with The Funded Hub: A Beginner's Guide",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"12 August 2023",alt:"blog-img",data:`<div className="des">
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
                </div>`},{link:"blog-6",img:"",title:"The Role of Central Banks in Forex Markets",para:`<span>Meta Description:</span> Explore the power of leverage
                  in forex trading and how it can magnify your potential gains
                  and losses. Discover how to use leverage wisely with valuable
                  insights throughout the post. Forex trading offers an
                  incredible opportunity for traders to capitalize on currency
                  price movements. One of the tools that magnifies this
                  potential is leverage. In this comprehensive guide,
                  we&apos;ll delve into the concept of leverage, its advantages
                  and risks, and how you can effectively utilize it to your
                  advantage in the dynamic forex market.`,date:"9 August 2023",alt:"blog-img",data:`<p>
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
            </div>`},{link:"blog-7",img:"",title:"Economic Indicators and Their Impact on Forex",para:`Economic indicators are essential tools for forex traders,
                    offering valuable insights into the health of economies and
                    potential market trends. Understanding the significance of
                    key economic indicators and their influence on currency
                    values is crucial for making informed trading decisions. In
                    this article, we delve into the world of economic indicators
                    and explore how they can impact the forex markets.`,date:"5 August 2023",alt:"blog-img",data:`
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
            </div>`},{link:"blog-8",img:"",title:"The Art of Technical Analysis in Forex Trading",para:` Technical analysis is a powerful tool that forex traders use
                    to decipher market trends, identify potential entry and exit
                    points, and make informed trading decisions. By analyzing
                    price charts, patterns, and indicators, traders can gain
                    insights into market psychology and anticipate price
                    movements. In this article, we explore the world of
                    technical analysis and its role in forex trading.`,date:"1 August 2023",alt:"blog-img",data:`
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
            </div>`},{link:"blog-9",img:"",title:"Using Moving Averages to Identify Trends",para:` Moving averages are essential tools in the arsenal of forex
                    traders, helping them navigate the complexities of the
                    market and make informed trading decisions. These versatile
                    indicators provide insights into market trends and can be
                    used to identify potential entry and exit points. In this
                    article, we delve into the world of moving averages and how
                    they play a pivotal role in identifying trends in forex
                    trading.`,date:"28 July 2023",alt:"blog-img",data:`<div className="data">
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
            </div>`},{link:"blog-10",img:"",title:"Diversification in Forex Trading: Balancing Risk and Reward",para:` Diversification is a fundamental concept in forex trading that
                  can significantly impact a trader&apos;s risk exposure and
                  potential for profitability. By spreading investments across
                  different currency pairs and asset classes, traders aim to
                  achieve a balance between risk and reward. In this article, we
                  delve into the importance of diversification in forex trading
                  and how it can enhance your overall trading strategy.`,date:"23 July 2023",alt:"blog-img",data:`<p>
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
            </div>`},{link:"blog-11",img:"",title:"High-Frequency Trading: Pros, Cons, and Risks",para:` High-frequency trading (HFT) has revolutionized the landscape
                  of financial markets, including forex. This lightning-fast
                  trading strategy involves executing a large number of trades
                  within milliseconds. While HFT offers several advantages, it
                  also comes with its share of drawbacks and risks. In this
                  article, we delve into the world of high-frequency trading,
                  exploring its benefits, challenges, and potential risks.`,date:"17 July 2023",alt:"blog-img",data:`<p>
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
          `},{link:"blog-12",img:"",title:"Breakout Trading: Identifying and Riding Trends",para:`In the fast-paced world of forex trading, staying ahead of the
                  curve is essential to success. One strategy that has gained
                  significant attention is breakout trading. This approach
                  allows traders to capitalize on sudden price movements, riding
                  the wave of new trends for potentially substantial profits. In
                  this article, we&apos;ll delve into the world of breakout
                  trading, exploring its principles, strategies, and key
                  considerations.`,date:"11 July 2023",alt:"blog-img",data:`<p>
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
            </div>`},{link:"blog-13",img:"",title:"Range Trading: Capitalizing on Sideways Markets",para:`In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"8 July 2023",alt:"blog-img",data:`<p>
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
            </div>`},{link:"blog-14",img:"",title:"MetaTrader 5: Advanced Features for Forex Traders",para:` In the world of forex trading, there&apos;s more than one way to
                  capture profitable opportunities. While trends and breakouts
                  often steal the spotlight, another strategy that shouldn&apos;t be
                  overlooked is range trading. This approach allows traders to
                  make gains even when markets are moving sideways or
                  consolidating. In this article, we&apos;ll delve into the concept
                  of range trading, exploring its strategies, benefits, and
                  essential considerations.`,date:"5 July 2023",alt:"blog-img",data:`<p>
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
            </div>`}];function tt(){let[t,a]=i.useState(1);const s=6,r=Math.ceil(q.length/s),o=at(q,s),l=(c,p)=>{a(p),o.jump(p)},d=Je({palette:{mode:"dark"}});return e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"blog bg-dark relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper max-w-[75rem] m-auto w-full",children:[e.jsx("div",{className:"header flex justify-between w-full",children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient",children:"Blog"})}),e.jsx("div",{className:"blogs mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative",children:o.currentData().map((c,p)=>e.jsxs(m,{to:`/blog/${c.link}`,className:"single-blog p-[0.9rem] bg-light/20 backdrop-blur-3xl rounded-xl !relative global-shadow grid justify-between items-end gap-4",children:[e.jsx("div",{className:"blog-img rounded-md hidden",children:e.jsx("img",{className:"rounded-md w-full h-full leading-none",src:c.img,alt:c.alt})}),e.jsxs("div",{className:"texts fmt-6 grid gap-3 pb-8",children:[e.jsx("h3",{className:"font-semibold",children:c.title}),e.jsx("div",{className:"blog-para-slice",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:c.para.slice(0,140)+"...."}})}),e.jsx("div",{className:"date text-sm absolute bottom-3",children:c.date})]})]},c.title+p))}),e.jsx("div",{className:"pagination mt-10 flex justify-center",children:e.jsx(Ke,{theme:d,children:e.jsx(Qe,{spacing:2,children:e.jsx(_e,{count:r,page:t,shape:"rounded",variant:"outlined",color:"secondary",onChange:l})})})})]})})}),e.jsx(P,{})]})}function st(){const{pathname:t}=w(),a=q.filter(({link:s})=>s===t.slice(6));return e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx("section",{className:"single-blog bg-dark relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow",children:e.jsx("div",{className:"container z-10 relative",children:e.jsxs("div",{className:"wrapper max-w-[75rem] m-auto w-full",children:[e.jsx("div",{className:"flex justify-center items-center blog-content",children:e.jsx("div",{className:"blog-img p-[0.03rem] rounded-md",children:e.jsx("img",{className:"rounded-md",src:"",alt:a.alt})})}),e.jsxs("div",{className:"blog-content ",children:[e.jsx("div",{className:"heading",children:e.jsx("h2",{className:"font-medium text-2xl xs:text-[1.9rem] tracking-tight text-wht-gradient",children:a[0].title})}),e.jsxs("div",{className:"blog-wrap-data global-shadow",children:[e.jsx("div",{className:"data ",dangerouslySetInnerHTML:{__html:a[0].data}}),e.jsx("div",{className:"btn mt-10 m-auto max-w-[17rem]",children:e.jsx(m,{to:"/",className:"uppercase font-Montserrat text-sm font-semibold  transition-all duration-200 glowing-btn",children:"Get Funded now"})})]})]})]})})}),e.jsx(P,{})]})}function it(){return e.jsxs("div",{className:"App",children:[e.jsx(me,{children:e.jsxs(xe,{children:[e.jsx(y,{path:"/",element:e.jsx(va,{})}),e.jsx(y,{path:"login",element:e.jsx(ja,{})}),e.jsx(y,{path:"contact",element:e.jsx(wa,{})}),e.jsx(y,{path:"faq",element:e.jsx(ka,{})}),e.jsx(y,{path:"cookie-policy",element:e.jsx(Ta,{})}),e.jsx(y,{path:"privacy-policy",element:e.jsx(Sa,{})}),e.jsx(y,{path:"terms-condition",element:e.jsx(Aa,{})}),e.jsx(y,{path:"risk-disclosure",element:e.jsx(Pa,{})}),e.jsx(y,{path:"report-problem",element:e.jsx(Ca,{})}),e.jsx(y,{path:"blog",element:e.jsx(tt,{})}),e.jsx(y,{path:"blog/:blog",element:e.jsx(st,{})}),e.jsxs(y,{path:"dashboard",element:e.jsx(Ha,{}),children:[e.jsx(y,{path:"Profile",element:e.jsx(za,{})}),e.jsx(y,{path:"billing",element:e.jsx(Wa,{})}),e.jsx(y,{path:"start-new-challenge",element:e.jsx($a,{})}),e.jsx(y,{path:"withdraw",element:e.jsx(Ra,{})}),e.jsx(y,{path:"top-up-reset",element:e.jsx(Ua,{})}),e.jsx(y,{path:"certificate",element:e.jsx(Qa,{})})]}),e.jsx(y,{path:"thank-you",element:e.jsx(_a,{})}),e.jsx(y,{path:"payment-error",element:e.jsx(Za,{})})]})}),e.jsx(et,{})]})}he.createRoot(document.getElementById("root")).render(e.jsx(ce.StrictMode,{children:e.jsx(it,{})}));
