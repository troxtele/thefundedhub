import{r as Re}from"./react-36fe5531.js";var E={};Object.defineProperty(E,"__esModule",{value:!0});var Z=Re;function Ne(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var n=Ne(Z);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return o=Object.assign||function(i){for(var l,t=1,s=arguments.length;t<s;t++){l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(i[r]=l[r])}return i},o.apply(this,arguments)};function L(e,i){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(l[t[s]]=e[t[s]]);return l}var Fe=function(e){for(var i="",l="abcdef0123456789",t=l.length,s=0;s<e;s++)i+=l.charAt(Math.floor(Math.random()*t));return i},M=function(e){var i=e.href,l=e.spanText,t=e.text,s=t===void 0?"By TradingView":t,r=e.copyrightStyles,c={parent:{fontSize:"13px",lineHeight:"32px",textAlign:"center",verticalAlign:"center",fontFamily:"Trebuchet MS, Arial, sans-serif",color:"#9db2bd"},link:{textDecoration:"none",color:"#9db2bd"},span:{color:"#2962FF"}};return n.default.createElement("div",{style:Object.assign({},c.parent,r==null?void 0:r.parent)},n.default.createElement("a",{style:Object.assign({},c.link,r==null?void 0:r.link),href:i,target:"_blank"},n.default.createElement("span",{style:Object.assign({},c.span,r==null?void 0:r.span)},l," ")),s)},k=function(e){var i=e.scriptHTML,l=e.scriptSRC,t=e.containerId,s=e.type,r=Z.createRef();return Z.useEffect(function(){var c;if(r.current){var a=document.createElement("script");a.setAttribute("data-nscript","afterInteractive"),a.src=l,a.async=!0,a.type="text/javascript",s==="Widget"||s==="MediumWidget"?a.onload=function(){typeof TradingView!==void 0&&(a.innerHTML=JSON.stringify(s==="Widget"?new TradingView.widget(i):s==="MediumWidget"?new TradingView.MediumWidget(i):void 0))}:a.innerHTML=JSON.stringify(i),r.current.appendChild(a),c=r.current}return function(){if(c)for(;c.firstChild;)c.removeChild(c.firstChild)}},[r,i,s,l]),n.default.createElement("div",{ref:r,id:t})},Be=function(e){var i=e.width,l=i===void 0?980:i,t=e.height,s=t===void 0?610:t,r=e.autosize,c=r===void 0?!1:r,a=e.symbol,m=a===void 0?"NASDAQ:AAPL":a,d=e.interval,u=d===void 0?"1":d,h=e.range,v=h===void 0?void 0:h,g=e.timezone,y=g===void 0?"UTC":g,p=e.theme,f=p===void 0?"light":p,w=e.style,C=w===void 0?"1":w,b=e.locale,T=b===void 0?"en":b,S=e.toolbar_bg,_=S===void 0?"#f1f3f6":S,U=e.enable_publishing,R=U===void 0?!1:U,x=e.hide_top_toolbar,j=x===void 0?!1:x,F=e.hide_legend,A=F===void 0?!1:F,N=e.withdateranges,D=N===void 0?!0:N,B=e.hide_side_toolbar,W=B===void 0?!1:B,z=e.allow_symbol_change,H=z===void 0?!0:z,O=e.save_image,Y=O===void 0?!0:O,G=e.details,q=G===void 0?!1:G,X=e.hotlist,V=X===void 0?!1:X,P=e.calendar,J=P===void 0?!1:P,K=e.show_popup_button,Q=K===void 0?!1:K,$=e.popup_width,ce=$===void 0?"600":$,ee=e.popup_height,I=ee===void 0?"400":ee,oe=e.watchlist,ne=oe===void 0?void 0:oe,te=e.studies,he=te===void 0?void 0:te,re=e.disabled_features,ge=re===void 0?void 0:re,ie=e.enabled_features,se=ie===void 0?void 0:ie,le=e.container_id,ae=le===void 0?"tradingview_".concat(Fe(5)):le,de=e.copyrightStyles,pe=L(e,["width","height","autosize","symbol","interval","range","timezone","theme","style","locale","toolbar_bg","enable_publishing","hide_top_toolbar","hide_legend","withdateranges","hide_side_toolbar","allow_symbol_change","save_image","details","hotlist","calendar","show_popup_button","popup_width","popup_height","watchlist","studies","disabled_features","enabled_features","container_id","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o(o(o(o(o({},c?{width:"100%"}:{width:l}),c?{height:"100%"}:{height:s}),{autosize:c,symbol:m}),v?{range:v}:{interval:u}),{timezone:y,theme:f,style:C,locale:T,toolbar_bg:_,enable_publishing:R,hide_top_toolbar:j,hide_legend:A,withdateranges:D,hide_side_toolbar:W,allow_symbol_change:H,save_image:Y,details:q,hotlist:V,calendar:J}),Q&&{show_popup_button:Q,popup_width:ce,popup_height:I}),{watchlist:ne,studies:he,disabled_features:ge,enabled_features:se,container_id:ae}),pe),scriptSRC:"https://s3.tradingview.com/tv.js",containerId:ae,type:"Widget"}),n.default.createElement(M,{copyrightStyles:de,href:"https://www.tradingview.com/symbols/".concat(m),spanText:"".concat(m," Chart")}))},ze=function(e){var i=e.symbol,l=i===void 0?"NASDAQ:AAPL":i,t=e.width,s=t===void 0?480:t,r=e.height,c=r===void 0?650:r,a=e.autosize,m=a===void 0?!1:a,d=e.colorTheme,u=d===void 0?"light":d,h=e.isTransparent,v=h===void 0?!1:h,g=e.locale,y=g===void 0?"en":g,p=e.largeChartUrl,f=p===void 0?void 0:p,w=e.copyrightStyles,C=L(e,["symbol","width","height","autosize","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},m?{width:"100%"}:{width:s}),m?{height:"100%"}:{height:c}),{symbol:l,colorTheme:u,isTransparent:v,locale:y,largeChartUrl:f}),C),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"}),n.default.createElement(M,{copyrightStyles:w,href:"https://www.tradingview.com/symbols/".concat(l,"/"),spanText:"".concat(l," Profile")}))},Oe=function(e){var i=e.width,l=i===void 0?1e3:i,t=e.height,s=t===void 0?490:t,r=e.autosize,c=r===void 0?!1:r,a=e.defaultColumn,m=a===void 0?"overview":a,d=e.screener_type,u=d===void 0?"crypto_mkt":d,h=e.displayCurrency,v=h===void 0?"USD":h,g=e.colorTheme,y=g===void 0?"light":g,p=e.locale,f=p===void 0?"en":p,w=e.isTransparent,C=w===void 0?!1:w,b=e.copyrightStyles,T=L(e,["width","height","autosize","defaultColumn","screener_type","displayCurrency","colorTheme","locale","isTransparent","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},c?{width:"100%"}:{width:l}),c?{height:"100%"}:{height:s}),{defaultColumn:m,screener_type:u,displayCurrency:v,colorTheme:y,locale:f,isTransparent:C}),T),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}),n.default.createElement(M,{copyrightStyles:b,href:"https://www.tradingview.com/markets/cryptocurrencies/prices-all/",spanText:"Cryptocurrency Markets"}))},Ge=function(e){var i=e.colorTheme,l=i===void 0?"light":i,t=e.isTransparent,s=t===void 0?!1:t,r=e.width,c=r===void 0?510:r,a=e.height,m=a===void 0?600:a,d=e.autosize,u=d===void 0?!1:d,h=e.locale,v=h===void 0?"en":h,g=e.importanceFilter,y=g===void 0?"-1,0,1":g,p=e.currencyFilter,f=p===void 0?void 0:p,w=e.copyrightStyles,C=L(e,["colorTheme","isTransparent","width","height","autosize","locale","importanceFilter","currencyFilter","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({colorTheme:l,isTransparent:s},u?{width:"100%"}:{width:c}),u?{height:"100%"}:{height:m}),{locale:v,importanceFilter:y,currencyFilter:f}),C),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-events.js"}),n.default.createElement(M,{copyrightStyles:w,href:"https://www.tradingview.com/markets/currencies/economic-calendar/",spanText:"Economic Calendar"}))},Xe=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],Ae=function(e){var i=e.width,l=i===void 0?770:i,t=e.height,s=t===void 0?400:t,r=e.autosize,c=r===void 0?!1:r,a=e.currencies,m=a===void 0?Xe:a,d=e.isTransparent,u=d===void 0?!1:d,h=e.colorTheme,v=h===void 0?"light":h,g=e.locale,y=g===void 0?"en":g,p=e.largeChartUrl,f=p===void 0?void 0:p,w=e.copyrightStyles,C=L(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},c?{width:"100%"}:{width:l}),c?{height:"100%"}:{height:s}),{currencies:m,isTransparent:u,colorTheme:v,locale:y,largeChartUrl:f}),C),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"}),n.default.createElement(M,{copyrightStyles:w,href:"https://www.tradingview.com/markets/currencies/forex-cross-rates/",spanText:"Exchange Rates"}))},Pe=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],je=function(e){var i=e.width,l=i===void 0?700:i,t=e.height,s=t===void 0?400:t,r=e.autosize,c=r===void 0?!1:r,a=e.currencies,m=a===void 0?Pe:a,d=e.isTransparent,u=d===void 0?!1:d,h=e.colorTheme,v=h===void 0?"light":h,g=e.locale,y=g===void 0?"en":g,p=e.largeChartUrl,f=p===void 0?void 0:p,w=e.copyrightStyles,C=L(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},c?{width:"100%"}:{width:l}),c?{height:"100%"}:{height:s}),{currencies:m,isTransparent:u,colorTheme:v,locale:y,largeChartUrl:f}),C),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js"}),n.default.createElement(M,{copyrightStyles:w,href:"https://www.tradingview.com/markets/currencies/forex-heat-map/",spanText:"Forex Heat Map"}))},He=function(e){var i=e.symbol,l=i===void 0?"NASDAQ:AAPL":i,t=e.colorTheme,s=t===void 0?"light":t,r=e.isTransparent,c=r===void 0?!1:r,a=e.largeChartUrl,m=a===void 0?void 0:a,d=e.displayMode,u=d===void 0?"regular":d,h=e.width,v=h===void 0?480:h,g=e.height,y=g===void 0?830:g,p=e.autosize,f=p===void 0?!1:p,w=e.locale,C=w===void 0?"en":w,b=e.copyrightStyles,T=L(e,["symbol","colorTheme","isTransparent","largeChartUrl","displayMode","width","height","autosize","locale","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},f?{width:"100%"}:{width:v}),f?{height:"100%"}:{height:y}),{symbol:l,colorTheme:s,isTransparent:c,largeChartUrl:m,displayMode:u,locale:C}),T),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-financials.js"}),n.default.createElement(M,{copyrightStyles:b,href:"https://www.tradingview.com/symbols/".concat(l.replace(":","-"),"/financials-overview/"),spanText:"".concat(l," Fundamental Data")}))},Ie=[{name:"Indices",originalName:"Indices",symbols:[{name:"FOREXCOM:SPXUSD",displayName:"S&P 500"},{name:"FOREXCOM:NSXUSD",displayName:"Nasdaq 100"},{name:"FOREXCOM:DJI",displayName:"Dow 30"},{name:"INDEX:NKY",displayName:"Nikkei 225"},{name:"INDEX:DEU30",displayName:"DAX Index"},{name:"FOREXCOM:UKXGBP",displayName:"UK 100"}]},{name:"Commodities",originalName:"Commodities",symbols:[{name:"CME_MINI:ES1!",displayName:"S&P 500"},{name:"CME:6E1!",displayName:"Euro"},{name:"COMEX:GC1!",displayName:"Gold"},{name:"NYMEX:CL1!",displayName:"Crude Oil"},{name:"NYMEX:NG1!",displayName:"Natural Gas"},{name:"CBOT:ZC1!",displayName:"Corn"}]},{name:"Bonds",originalName:"Bonds",symbols:[{name:"CME:GE1!",displayName:"Eurodollar"},{name:"CBOT:ZB1!",displayName:"T-Bond"},{name:"CBOT:UB1!",displayName:"Ultra T-Bond"},{name:"EUREX:FGBL1!",displayName:"Euro Bund"},{name:"EUREX:FBTP1!",displayName:"Euro BTP"},{name:"EUREX:FGBM1!",displayName:"Euro BOBL"}]},{name:"Forex",originalName:"Forex",symbols:[{name:"FX:EURUSD"},{name:"FX:GBPUSD"},{name:"FX:USDJPY"},{name:"FX:USDCHF"},{name:"FX:AUDUSD"},{name:"FX:USDCAD"}]}],We=function(e){var i=e.width,l=i===void 0?770:i,t=e.height,s=t===void 0?450:t,r=e.autosize,c=r===void 0?!1:r,a=e.symbolsGroups,m=a===void 0?Ie:a,d=e.showSymbolLogo,u=d===void 0?!0:d,h=e.colorTheme,v=h===void 0?"light":h,g=e.isTransparent,y=g===void 0?!1:g,p=e.locale,f=p===void 0?"en":p,w=e.largeChartUrl,C=w===void 0?void 0:w,b=e.copyrightStyles,T=L(e,["width","height","autosize","symbolsGroups","showSymbolLogo","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},c?{width:"100%"}:{width:l}),c?{height:"100%"}:{height:s}),{symbolsGroups:m,showSymbolLogo:u,colorTheme:v,isTransparent:y,locale:f,largeChartUrl:C}),T),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"}),n.default.createElement(M,{copyrightStyles:b,spanText:"Financial Markets",href:"https://www.tradingview.com/markets/"}))},Ye=[{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DEU30",d:"DAX Index"},{s:"FOREXCOM:UKXGBP",d:"UK 100"}],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"S&P 500"},{s:"CME:6E1!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"}],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UB1!",d:"Ultra T-Bond"},{s:"EUREX:FGBL1!",d:"Euro Bund"},{s:"EUREX:FBTP1!",d:"Euro BTP"},{s:"EUREX:FGBM1!",d:"Euro BOBL"}],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"}],originalTitle:"Forex"}],qe=function(e){var i=e.colorTheme,l=i===void 0?"light":i,t=e.dateRange,s=t===void 0?"12M":t,r=e.showChart,c=r===void 0?!0:r,a=e.locale,m=a===void 0?"en":a,d=e.largeChartUrl,u=d===void 0?void 0:d,h=e.isTransparent,v=h===void 0?!1:h,g=e.showSymbolLogo,y=g===void 0?!0:g,p=e.showFloatingTooltip,f=p===void 0?!1:p,w=e.width,C=w===void 0?400:w,b=e.height,T=b===void 0?660:b,S=e.autosize,_=S===void 0?!1:S,U=e.plotLineColorGrowing,R=U===void 0?"rgba(33, 150, 243, 1)":U,x=e.plotLineColorFalling,j=x===void 0?"rgba(33, 150, 243, 1)":x,F=e.gridLineColor,A=F===void 0?"rgba(240, 243, 250, 1)":F,N=e.scaleFontColor,D=N===void 0?"rgba(120, 123, 134, 1)":N,B=e.belowLineFillColorGrowing,W=B===void 0?"rgba(33, 150, 243, 0.12)":B,z=e.belowLineFillColorFalling,H=z===void 0?"rgba(33, 150, 243, 0.12)":z,O=e.belowLineFillColorGrowingBottom,Y=O===void 0?"rgba(41, 98, 255, 0)":O,G=e.belowLineFillColorFallingBottom,q=G===void 0?"rgba(41, 98, 255, 0)":G,X=e.symbolActiveColor,V=X===void 0?"rgba(33, 150, 243, 0.12)":X,P=e.tabs,J=P===void 0?Ye:P,K=e.copyrightStyles,Q=L(e,["colorTheme","dateRange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","tabs","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o(o({colorTheme:l,dateRange:s,showChart:c,locale:m,largeChartUrl:u,isTransparent:v,showSymbolLogo:y,showFloatingTooltip:f},_?{width:"100%"}:{width:C}),_?{height:"100%"}:{height:T}),c&&{plotLineColorGrowing:R,plotLineColorFalling:j,gridLineColor:A,scaleFontColor:D,belowLineFillColorGrowing:W,belowLineFillColorFalling:H,belowLineFillColorGrowingBottom:Y,belowLineFillColorFallingBottom:q,symbolActiveColor:V}),{tabs:J}),Q),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"}),n.default.createElement(M,{copyrightStyles:K,spanText:"Financial Markets",href:"https://www.tradingview.com/markets/"}))},Ve=function(e){var i=e.symbol,l=i===void 0?"FX:EURUSD":i,t=e.width,s=t===void 0?350:t,r=e.height,c=r===void 0?220:r,a=e.locale,m=a===void 0?"en":a,d=e.dateRange,u=d===void 0?"12M":d,h=e.colorTheme,v=h===void 0?"light":h,g=e.trendLineColor,y=g===void 0?"rgba(41, 98, 255, 1)":g,p=e.underLineColor,f=p===void 0?"rgba(41, 98, 255, 0.3)":p;e.underLineBottomColor;var w=e.isTransparent,C=w===void 0?!1:w,b=e.autosize,T=b===void 0?!1:b,S=e.largeChartUrl,_=S===void 0?void 0:S,U=e.copyrightStyles,R=L(e,["symbol","width","height","locale","dateRange","colorTheme","trendLineColor","underLineColor","underLineBottomColor","isTransparent","autosize","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({symbol:l},T?{width:"100%"}:{width:s}),T?{height:"100%"}:{height:c}),{locale:m,dateRange:u,colorTheme:v,trendLineColor:y,underLineColor:f,isTransparent:C,autosize:T,largeChartUrl:_}),R),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"}),n.default.createElement(M,{copyrightStyles:U,href:"https://www.tradingview.com/symbols/".concat(l,"/"),spanText:"".concat(l," Rates")}))},Je=function(e){var i=e.width,l=i===void 0?1100:i,t=e.height,s=t===void 0?512:t,r=e.autosize,c=r===void 0?!1:r,a=e.defaultColumn,m=a===void 0?"overview":a,d=e.defaultScreen,u=d===void 0?"general":d,h=e.market,v=h===void 0?"forex":h,g=e.showToolbar,y=g===void 0?!0:g,p=e.colorTheme,f=p===void 0?"light":p,w=e.locale,C=w===void 0?"en":w,b=e.isTransparent,T=b===void 0?!1:b,S=e.largeChartUrl,_=S===void 0?void 0:S,U=e.copyrightStyles,R=L(e,["width","height","autosize","defaultColumn","defaultScreen","market","showToolbar","colorTheme","locale","isTransparent","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({},c?{width:"100%"}:{width:l}),c?{height:"100%"}:{height:s}),{defaultColumn:m,defaultScreen:u,market:v,showToolbar:y,colorTheme:f,locale:C,isTransparent:T,largeChartUrl:_}),R),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}),n.default.createElement(M,{copyrightStyles:U,href:"https://www.tradingview.com/forex-screener/",spanText:"Forex Screener"}))},Ke=function(e){var i=e.symbol,l=i===void 0?"FX:EURUSD":i,t=e.width,s=t===void 0?350:t,r=e.autosize,c=r===void 0?!1:r,a=e.colorTheme,m=a===void 0?"light":a,d=e.isTransparent,u=d===void 0?!1:d,h=e.locale,v=h===void 0?"en":h,g=e.largeChartUrl,y=g===void 0?void 0:g,p=e.copyrightStyles,f=L(e,["symbol","width","autosize","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o({symbol:l},c?{width:"100%"}:{width:s}),{colorTheme:m,isTransparent:u,locale:v,largeChartUrl:y}),f),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"}),n.default.createElement(M,{copyrightStyles:p,href:"https://www.tradingview.com/symbols/".concat(l,"/"),spanText:"".concat(l," Rates")}))},Qe=function(e){var i=e.colorTheme,l=i===void 0?"light":i,t=e.dateRange,s=t===void 0?"12M":t,r=e.exchange,c=r===void 0?"US":r,a=e.showChart,m=a===void 0?!0:a,d=e.locale,u=d===void 0?"en":d,h=e.largeChartUrl,v=h===void 0?void 0:h,g=e.isTransparent,y=g===void 0?!1:g,p=e.showSymbolLogo,f=p===void 0?!0:p;e.showFloatingTooltip;var w=e.width,C=w===void 0?400:w,b=e.height,T=b===void 0?600:b,S=e.autosize,_=S===void 0?!1:S,U=e.plotLineColorGrowing,R=U===void 0?"rgba(33, 150, 243, 1)":U,x=e.plotLineColorFalling,j=x===void 0?"rgba(33, 150, 243, 1)":x,F=e.gridLineColor,A=F===void 0?"rgba(240, 243, 250, 1)":F,N=e.scaleFontColor,D=N===void 0?"rgba(120, 123, 134, 1)":N,B=e.belowLineFillColorGrowing,W=B===void 0?"rgba(33, 150, 243, 0.12)":B,z=e.belowLineFillColorFalling,H=z===void 0?"rgba(33, 150, 243, 0.12)":z,O=e.belowLineFillColorGrowingBottom,Y=O===void 0?"rgba(41, 98, 255, 0)":O,G=e.belowLineFillColorFallingBottom,q=G===void 0?"rgba(41, 98, 255, 0)":G,X=e.symbolActiveColor,V=X===void 0?"rgba(33, 150, 243, 0.12)":X,P=e.copyrightStyles,J=L(e,["colorTheme","dateRange","exchange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({colorTheme:l,dateRange:s,exchange:c,showChart:m,locale:u,largeChartUrl:v,isTransparent:y,showSymbolLogo:f},_?{width:"100%"}:{width:C}),_?{height:"100%"}:{height:T}),m&&{plotLineColorGrowing:R,plotLineColorFalling:j,gridLineColor:A,scaleFontColor:D,belowLineFillColorGrowing:W,belowLineFillColorFalling:H,belowLineFillColorGrowingBottom:Y,belowLineFillColorFallingBottom:q,symbolActiveColor:V}),J),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"}),n.default.createElement(M,{copyrightStyles:P,href:"https://www.tradingview.com/markets/stocks-usa/",spanText:"Stock market Today"}))},Ze=function(e){var i=e.symbol,l=i===void 0?"NASDAQ:AAPL":i,t=e.width,s=t===void 0?1e3:t,r=e.autosize,c=r===void 0?!1:r,a=e.locale,m=a===void 0?"en":a,d=e.colorTheme,u=d===void 0?"light":d,h=e.isTransparent,v=h===void 0?!1:h,g=e.largeChartUrl,y=g===void 0?void 0:g,p=e.copyrightStyles,f=L(e,["symbol","width","autosize","locale","colorTheme","isTransparent","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o({symbol:l},c?{width:"100%"}:{width:s}),{locale:m,colorTheme:u,isTransparent:v,largeChartUrl:y}),f),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"}),n.default.createElement(M,{copyrightStyles:p,href:"https://www.tradingview.com/symbols/".concat(l,"/"),spanText:"".concat(l," Price Today")}))},$e=[["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"]],eo=function(e){var i=e.symbols,l=i===void 0?$e:i,t=e.chartOnly,s=t===void 0?!1:t,r=e.width,c=r===void 0?1e3:r,a=e.height,m=a===void 0?400:a,d=e.locale,u=d===void 0?"en":d,h=e.colorTheme,v=h===void 0?"light":h,g=e.fontColor,y=g===void 0?"#787B86":g,p=e.fontSize,f=p===void 0?"10":p,w=e.isTransparent,C=w===void 0?!1:w,b=e.showFloatingTooltip,T=b===void 0?!0:b,S=e.scalePosition,_=S===void 0?"no":S,U=e.scaleMode,R=U===void 0?"Normal":U,x=e.fontFamily,j=x===void 0?"Trebuchet MS, sans-serif":x,F=e.noTimeScale,A=F===void 0?!1:F,N=e.valuesTracking,D=N===void 0?"1":N,B=e.lineWidth,W=B===void 0?3:B,z=e.showVolume,H=z===void 0?!1:z,O=e.volumeUpColor,Y=O===void 0?"rgba(34, 171, 148, 0.5)":O,G=e.volumeDownColor,q=G===void 0?"rgba(247, 82, 95, 0.5)":G,X=e.dateFormat,V=X===void 0?"dd MMM 'yy":X,P=e.timeHoursFormat,J=P===void 0?"24-hours":P,K=e.hideMarketStatus,Q=K===void 0?!1:K,$=e.hideDateRanges,ce=$===void 0?!1:$,ee=e.chartType,I=ee===void 0?"area":ee,oe=e.lineColor,ne=oe===void 0?"#2962FF":oe,te=e.bottomColor,he=te===void 0?"rgba(41, 98, 255, 0)":te,re=e.topColor,ge=re===void 0?"rgba(41, 98, 255, 0.3)":re,ie=e.upColor,se=ie===void 0?"#26a69a":ie,le=e.downColor,ae=le===void 0?"#ef5350":le,de=e.borderUpColor,pe=de===void 0?"#26a69a":de,ve=e.borderDownColor,Ee=ve===void 0?"#ef5350":ve,we=e.wickUpColor,Ue=we===void 0?"#26a69a":we,ue=e.wickDownColor,Le=ue===void 0?"#ef5350":ue,ye=e.backGroundColor,Me=ye===void 0?"rgba(19, 23, 34, 0)":ye,fe=e.gridLineColor,ke=fe===void 0?"rgba(42, 46, 57, 0)":fe,Ce=e.widgetFontColor,_e=Ce===void 0?"rgba(216, 216, 216, 1)":Ce,be=e.autosize,me=be===void 0?!1:be,Te=e.container_id,Se=Te===void 0?"tradingview_".concat(Fe(5)):Te,De=e.copyrightStyles,xe=L(e,["symbols","chartOnly","width","height","locale","colorTheme","fontColor","fontSize","isTransparent","showFloatingTooltip","scalePosition","scaleMode","fontFamily","noTimeScale","valuesTracking","lineWidth","showVolume","volumeUpColor","volumeDownColor","dateFormat","timeHoursFormat","hideMarketStatus","hideDateRanges","chartType","lineColor","bottomColor","topColor","upColor","downColor","borderUpColor","borderDownColor","wickUpColor","wickDownColor","backGroundColor","gridLineColor","widgetFontColor","autosize","container_id","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o(o(o(o(o(o(o(o({symbols:l,chartOnly:s},me?{width:"100%"}:{width:c}),me?{height:"100%"}:{height:m}),{locale:u,colorTheme:v,fontColor:y,fontSize:f,isTransparent:C,showFloatingTooltip:T,scalePosition:_,scaleMode:R,fontFamily:j,noTimeScale:A,hideDateRanges:ce,hideMarketStatus:Q,valuesTracking:D,lineWidth:W,showVolume:H}),H&&{volumeUpColor:Y,volumeDownColor:q}),{dateFormat:V,timeHoursFormat:J,chartType:I}),I==="line"&&{lineColor:ne}),I==="area"&&{lineColor:ne,bottomColor:he,topColor:ge}),(I==="bars"||I==="candlesticks")&&{upColor:se,downColor:ae}),I==="candlesticks"&&{upColor:se,downColor:ae,borderUpColor:pe,borderDownColor:Ee,wickUpColor:Ue,wickDownColor:Le}),{backGroundColor:Me,widgetFontColor:_e,gridLineColor:ke,autosize:me,container_id:Se}),xe),scriptSRC:"https://s3.tradingview.com/tv.js",containerId:Se,type:"MediumWidget"}),n.default.createElement(M,{copyrightStyles:De,href:"https://www.tradingview.com/symbols/".concat(l[0][1]),spanText:"".concat(l[0][1])}))},oo=function(e){var i=e.interval,l=i===void 0?"1m":i,t=e.width,s=t===void 0?425:t,r=e.height,c=r===void 0?450:r,a=e.autosize,m=a===void 0?!1:a,d=e.isTransparent,u=d===void 0?!1:d,h=e.symbol,v=h===void 0?"NASDAQ:AAPL":h,g=e.showIntervalTabs,y=g===void 0?!0:g,p=e.locale,f=p===void 0?"en":p,w=e.colorTheme,C=w===void 0?"light":w,b=e.largeChartUrl,T=b===void 0?void 0:b,S=e.copyrightStyles,_=L(e,["interval","width","height","autosize","isTransparent","symbol","showIntervalTabs","locale","colorTheme","largeChartUrl","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o({interval:l},m?{width:"100%"}:{width:s}),m?{height:"100%"}:{height:c}),{isTransparent:u,symbol:v,showIntervalTabs:y,locale:f,colorTheme:C,largeChartUrl:T}),_),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"}),n.default.createElement(M,{copyrightStyles:S,href:"https://www.tradingview.com/symbols/".concat(v.replace(":","-"),"/technicals/"),spanText:"Technical Analysis for ".concat(v)}))},to=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],ro=function(e){var i=e.colorTheme,l=i===void 0?"light":i,t=e.isTransparent,s=t===void 0?!1:t,r=e.showSymbolLogo,c=r===void 0?!0:r,a=e.locale,m=a===void 0?"en":a,d=e.symbols,u=d===void 0?to:d,h=e.copyrightStyles,v=L(e,["colorTheme","isTransparent","showSymbolLogo","locale","symbols","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o({colorTheme:l,isTransparent:s,showSymbolLogo:c,locale:m,symbols:u},v),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"}),n.default.createElement(M,{copyrightStyles:h,href:"https://www.tradingview.com/",spanText:"Qoutes"}))},io=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],lo=function(e){var i=e.symbols,l=i===void 0?io:i,t=e.showSymbolLogo,s=t===void 0?!0:t,r=e.colorTheme,c=r===void 0?"light":r,a=e.isTransparent,m=a===void 0?!1:a,d=e.largeChartUrl,u=d===void 0?void 0:d,h=e.displayMode,v=h===void 0?"adaptive":h,g=e.locale,y=g===void 0?"en":g,p=e.copyrightStyles,f=L(e,["symbols","showSymbolLogo","colorTheme","isTransparent","largeChartUrl","displayMode","locale","copyrightStyles"]);return n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o({symbols:l,showSymbolLogo:s,colorTheme:c,isTransparent:m,largeChartUrl:u,displayMode:v,locale:y},f),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"}),n.default.createElement(M,{copyrightStyles:p,href:"https://www.tradingview.com/markets/",spanText:"Markets"}))},ao=function(e){var i=e.feedMode,l=i===void 0?"all_symbols":i,t=e.colorTheme,s=t===void 0?"light":t,r=e.isTransparent,c=r===void 0?!1:r,a=e.displayMode,m=a===void 0?"regular":a,d=e.width,u=d===void 0?480:d,h=e.height,v=h===void 0?830:h,g=e.autosize,y=g===void 0?!1:g,p=e.locale,f=p===void 0?"en":p,w=e.largeChartUrl,C=w===void 0?void 0:w,b=e.copyrightStyles,T=e.symbol,S=T===void 0?"BTCUSD":T,_=e.market,U=_===void 0?"crypto":_,R=L(e,["feedMode","colorTheme","isTransparent","displayMode","width","height","autosize","locale","largeChartUrl","copyrightStyles","symbol","market"]),x=Z.useState(""),j=x[0],F=x[1],A=Z.useState(""),N=A[0],D=A[1];return Z.useEffect(function(){if(l=="all_symbols")F("key_events"),D("Daily news roundup");else if(l=="market")switch(U){case"crypto":F("markets/cryptocurrencies/key-events/"),D("Daily cryptocurrency news");break;case"forex":F("markets/currencies/key-events/"),D("Daily currency news");break;case"stock":F("markets/stocks-usa/key-events/"),D("Daily stock news");break;case"index":F("markets/indices/key-events/"),D("Daily index news");break;case"futures":F("markets/futures/key-events/"),D("Daily futures news");break;case"cfd":F("markets/bonds/key-events/"),D("Daily bonds news");break}else l=="symbol"&&(F("symbols/".concat(S,"/history-timeline/")),D("".concat(S," History")))},[l,S,U]),n.default.createElement("div",{id:"tradingview_widget_wrapper"},n.default.createElement(k,{scriptHTML:o(o(o(o(o(o({},y?{width:"100%"}:{width:u}),y?{height:"100%"}:{height:v}),{feedMode:l}),l=="market"?{market:U}:l=="symbol"?{symbol:S}:{}),{colorTheme:s,isTransparent:c,displayMode:m,locale:f,largeChartUrl:C}),R),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"}),n.default.createElement(M,{copyrightStyles:b,href:"https://www.tradingview.com/".concat(j),spanText:N}))};E.AdvancedRealTimeChart=Be;E.CompanyProfile=ze;E.CryptoCurrencyMarket=Oe;E.EconomicCalendar=Ge;E.ForexCrossRates=Ae;E.ForexHeatMap=je;E.FundamentalData=He;E.MarketData=We;E.MarketOverview=qe;E.MiniChart=Ve;E.Screener=Je;E.SingleTicker=Ke;E.StockMarket=Qe;E.SymbolInfo=Ze;E.SymbolOverview=eo;E.TechnicalAnalysis=oo;E.Ticker=ro;var so=E.TickerTape=lo;E.Timeline=ao;export{so as T};
