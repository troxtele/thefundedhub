import{g as Re}from"./@babel-9fdae976.js";import{c as Se}from"./css-unit-converter-9e08bb2c.js";var ce={exports:{}},se="(".charCodeAt(0),ae=")".charCodeAt(0),te="'".charCodeAt(0),ne='"'.charCodeAt(0),le="\\".charCodeAt(0),re="/".charCodeAt(0),oe=",".charCodeAt(0),ue=":".charCodeAt(0),ge="*".charCodeAt(0),we=function(t){for(var f=[],h=t,a,c,m,l,o,b,g,y=0,p=h.charCodeAt(y),v=h.length,_=[{nodes:f}],r=0,e,n="",s="",u="";y<v;)if(p<=32){a=y;do a+=1,p=h.charCodeAt(a);while(p<=32);l=h.slice(y,a),m=f[f.length-1],p===ae&&r?u=l:m&&m.type==="div"?m.after=l:p===oe||p===ue||p===re&&h.charCodeAt(a+1)!==ge?s=l:f.push({type:"space",sourceIndex:y,value:l}),y=a}else if(p===te||p===ne){a=y,c=p===te?"'":'"',l={type:"string",sourceIndex:y,quote:c};do if(o=!1,a=h.indexOf(c,a+1),~a)for(b=a;h.charCodeAt(b-1)===le;)b-=1,o=!o;else h+=c,a=h.length-1,l.unclosed=!0;while(o);l.value=h.slice(y+1,a),f.push(l),y=a+1,p=h.charCodeAt(y)}else if(p===re&&h.charCodeAt(y+1)===ge)l={type:"comment",sourceIndex:y},a=h.indexOf("*/",y),a===-1&&(l.unclosed=!0,a=h.length),l.value=h.slice(y+2,a),f.push(l),y=a+2,p=h.charCodeAt(y);else if(p===re||p===oe||p===ue)l=h[y],f.push({type:"div",sourceIndex:y-s.length,value:l,before:s,after:""}),s="",y+=1,p=h.charCodeAt(y);else if(se===p){a=y;do a+=1,p=h.charCodeAt(a);while(p<=32);if(l={type:"function",sourceIndex:y-n.length,value:n,before:h.slice(y+1,a)},y=a,n==="url"&&p!==te&&p!==ne){a-=1;do if(o=!1,a=h.indexOf(")",a+1),~a)for(b=a;h.charCodeAt(b-1)===le;)b-=1,o=!o;else h+=")",a=h.length-1,l.unclosed=!0;while(o);g=a;do g-=1,p=h.charCodeAt(g);while(p<=32);y!==g+1?l.nodes=[{type:"word",sourceIndex:y,value:h.slice(y,g+1)}]:l.nodes=[],l.unclosed&&g+1!==a?(l.after="",l.nodes.push({type:"space",sourceIndex:g+1,value:h.slice(g+1,a)})):l.after=h.slice(g+1,a),y=a+1,p=h.charCodeAt(y),f.push(l)}else r+=1,l.after="",f.push(l),_.push(l),f=l.nodes=[],e=l;n=""}else if(ae===p&&r)y+=1,p=h.charCodeAt(y),e.after=u,u="",r-=1,_.pop(),e=_[r],f=e.nodes;else{a=y;do p===le&&(a+=1),a+=1,p=h.charCodeAt(a);while(a<v&&!(p<=32||p===te||p===ne||p===oe||p===ue||p===re||p===se||p===ae&&r));l=h.slice(y,a),se===p?n=l:f.push({type:"word",sourceIndex:y,value:l}),y=a}for(y=_.length-1;y;y-=1)_[y].unclosed=!0;return _[0].nodes},Oe=function t(f,h,a){var c,m,l,o;for(c=0,m=f.length;c<m;c+=1)l=f[c],a||(o=h(l,c,f)),o!==!1&&l.type==="function"&&Array.isArray(l.nodes)&&t(l.nodes,h,a),a&&h(l,c,f)};function me(t,f){var h=t.type,a=t.value,c,m;return f&&(m=f(t))!==void 0?m:h==="word"||h==="space"?a:h==="string"?(c=t.quote||"",c+a+(t.unclosed?"":c)):h==="comment"?"/*"+a+(t.unclosed?"":"*/"):h==="div"?(t.before||"")+a+(t.after||""):Array.isArray(t.nodes)?(c=Ee(t.nodes),h!=="function"?c:a+"("+(t.before||"")+c+(t.after||"")+(t.unclosed?"":")")):a}function Ee(t,f){var h,a;if(Array.isArray(t)){for(h="",a=t.length-1;~a;a-=1)h=me(t[a],f)+h;return h}return me(t,f)}var Ce=Ee,fe,xe;function Ie(){if(xe)return fe;xe=1;var t="-".charCodeAt(0),f="+".charCodeAt(0),h=".".charCodeAt(0),a="e".charCodeAt(0),c="E".charCodeAt(0);return fe=function(m){for(var l=0,o=m.length,b=!1,g=-1,y=!1,p;l<o;){if(p=m.charCodeAt(l),p>=48&&p<=57)y=!0;else if(p===a||p===c){if(g>-1)break;g=l}else if(p===h){if(b)break;b=!0}else if(p===f||p===t){if(l!==0)break}else break;l+=1}return g+1===l&&l--,y?{number:m.slice(0,l),unit:m.slice(l)}:!1},fe}var Ve=we,Ae=Oe,ke=Ce;function H(t){return this instanceof H?(this.nodes=Ve(t),this):new H(t)}H.prototype.toString=function(){return Array.isArray(this.nodes)?ke(this.nodes):""};H.prototype.walk=function(t,f){return Ae(this.nodes,t,f),this};H.unit=Ie();H.walk=Ae;H.stringify=ke;var Me=H;function Le(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Pe={};(function(t){var f=function(){function h(v,_){Object.defineProperty(this,"name",{enumerable:!1,writable:!1,value:"JisonParserError"}),v==null&&(v="???"),Object.defineProperty(this,"message",{enumerable:!1,writable:!0,value:v}),this.hash=_;var r;if(_&&_.exception instanceof Error){var e=_.exception;this.message=e.message||v,r=e.stack}r||(Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(this,this.constructor):r=new Error(v).stack),r&&Object.defineProperty(this,"stack",{enumerable:!1,writable:!1,value:r})}typeof Object.setPrototypeOf=="function"?Object.setPrototypeOf(h.prototype,Error.prototype):h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h.prototype.name="JisonParserError";function a(v){for(var _=[],r=v.pop,e=v.rule,n=0,s=r.length;n<s;n++)_.push([r[n],e[n]]);return _}function c(v){for(var _={},r=v.idx,e=v.goto,n=0,s=r.length;n<s;n++){var u=r[n];_[u]=e[n]}return _}function m(v){for(var _=[],r=v.len,e=v.symbol,n=v.type,s=v.state,u=v.mode,i=v.goto,x=0,A=r.length;x<A;x++){for(var R=r[x],d={},E=0;E<R;E++){var P=e.shift();switch(n.shift()){case 2:d[P]=[u.shift(),i.shift()];break;case 0:d[P]=s.shift();break;default:d[P]=[3]}}_.push(d)}return _}function l(v,_,r){r=r||0;for(var e=0;e<_;e++)this.push(v),v+=r}function o(v,_){for(v=this.length-v,_+=v;v<_;v++)this.push(this[v])}function b(v){for(var _=[],r=0,e=v.length;r<e;r++){var n=v[r];typeof n=="function"?(r++,n.apply(_,v[r])):_.push(n)}return _}var g={trace:function(){},JisonParserError:h,yy:{},options:{type:"lalr",hasPartialLrUpgradeOnConflict:!0,errorRecoveryTokenDiscardCount:3},symbols_:{$accept:0,$end:1,ADD:3,ANGLE:16,CHS:22,COMMA:14,CSS_CPROP:13,CSS_VAR:12,DIV:6,EMS:20,EOF:1,EXS:21,FREQ:18,LENGTH:15,LPAREN:7,MUL:5,NESTED_CALC:9,NUMBER:11,PERCENTAGE:28,PREFIX:10,REMS:23,RES:19,RPAREN:8,SUB:4,TIME:17,VHS:24,VMAXS:27,VMINS:26,VWS:25,css_value:33,css_variable:32,error:2,expression:29,math_expression:30,value:31},terminals_:{1:"EOF",2:"error",3:"ADD",4:"SUB",5:"MUL",6:"DIV",7:"LPAREN",8:"RPAREN",9:"NESTED_CALC",10:"PREFIX",11:"NUMBER",12:"CSS_VAR",13:"CSS_CPROP",14:"COMMA",15:"LENGTH",16:"ANGLE",17:"TIME",18:"FREQ",19:"RES",20:"EMS",21:"EXS",22:"CHS",23:"REMS",24:"VHS",25:"VWS",26:"VMINS",27:"VMAXS",28:"PERCENTAGE"},TERROR:2,EOF:1,originalQuoteName:null,originalParseError:null,cleanupAfterParse:null,constructParseErrorInfo:null,yyMergeLocationInfo:null,__reentrant_call_depth:0,__error_infos:[],__error_recovery_infos:[],quoteName:function(_){return'"'+_+'"'},getSymbolName:function(_){if(this.terminals_[_])return this.terminals_[_];var r=this.symbols_;for(var e in r)if(r[e]===_)return e;return null},describeSymbol:function(_){if(_!==this.EOF&&this.terminal_descriptions_&&this.terminal_descriptions_[_])return this.terminal_descriptions_[_];if(_===this.EOF)return"end of input";var r=this.getSymbolName(_);return r?this.quoteName(r):null},collect_expected_token_set:function(_,r){var e=this.TERROR,n=[],s={};if(!r&&this.state_descriptions_&&this.state_descriptions_[_])return[this.state_descriptions_[_]];for(var u in this.table[_])if(u=+u,u!==e){var i=r?u:this.describeSymbol(u);i&&!s[i]&&(n.push(i),s[i]=!0)}return n},productions_:a({pop:b([29,l,[30,10],31,31,32,32,l,[33,15]]),rule:b([2,l,[3,5],4,7,l,[1,4],2,4,6,l,[1,14],2])}),performAction:function(_,r,e){var n=this.yy;switch(n.parser,n.lexer,_){case 0:this.$=e[r-1];break;case 1:return this.$=e[r-1],e[r-1];case 2:case 3:case 4:case 5:this.$={type:"MathExpression",operator:e[r-1],left:e[r-2],right:e[r]};break;case 6:this.$=e[r-1];break;case 7:this.$={type:"Calc",value:e[r-1]};break;case 8:this.$={type:"Calc",value:e[r-1],prefix:e[r-5]};break;case 9:case 10:case 11:this.$=e[r];break;case 12:this.$={type:"Value",value:parseFloat(e[r])};break;case 13:this.$={type:"Value",value:parseFloat(e[r])*-1};break;case 14:this.$={type:"CssVariable",value:e[r-1]};break;case 15:this.$={type:"CssVariable",value:e[r-3],fallback:e[r-1]};break;case 16:this.$={type:"LengthValue",value:parseFloat(e[r]),unit:/[a-z]+/.exec(e[r])[0]};break;case 17:this.$={type:"AngleValue",value:parseFloat(e[r]),unit:/[a-z]+/.exec(e[r])[0]};break;case 18:this.$={type:"TimeValue",value:parseFloat(e[r]),unit:/[a-z]+/.exec(e[r])[0]};break;case 19:this.$={type:"FrequencyValue",value:parseFloat(e[r]),unit:/[a-z]+/.exec(e[r])[0]};break;case 20:this.$={type:"ResolutionValue",value:parseFloat(e[r]),unit:/[a-z]+/.exec(e[r])[0]};break;case 21:this.$={type:"EmValue",value:parseFloat(e[r]),unit:"em"};break;case 22:this.$={type:"ExValue",value:parseFloat(e[r]),unit:"ex"};break;case 23:this.$={type:"ChValue",value:parseFloat(e[r]),unit:"ch"};break;case 24:this.$={type:"RemValue",value:parseFloat(e[r]),unit:"rem"};break;case 25:this.$={type:"VhValue",value:parseFloat(e[r]),unit:"vh"};break;case 26:this.$={type:"VwValue",value:parseFloat(e[r]),unit:"vw"};break;case 27:this.$={type:"VminValue",value:parseFloat(e[r]),unit:"vmin"};break;case 28:this.$={type:"VmaxValue",value:parseFloat(e[r]),unit:"vmax"};break;case 29:this.$={type:"PercentageValue",value:parseFloat(e[r]),unit:"%"};break;case 30:var s=e[r];s.value*=-1,this.$=s;break}},table:m({len:b([24,1,5,23,1,18,l,[0,3],1,l,[0,16],l,[23,4],o,[28,3],0,0,16,1,6,6,l,[0,3],5,1,2,o,[37,3],o,[20,3],5,0,0]),symbol:b([4,7,9,11,12,l,[15,19,1],1,1,l,[3,4,1],o,[30,19],o,[29,4],7,4,10,11,o,[22,14],o,[19,3],o,[43,22],o,[23,69],o,[139,4],8,o,[51,24],4,o,[138,15],13,o,[186,5],8,o,[6,6],o,[5,5],9,8,14,o,[159,47],o,[60,10]]),type:b([l,[2,19],l,[0,5],1,l,[2,24],l,[0,4],o,[22,19],o,[43,42],o,[23,70],o,[28,25],o,[45,25],o,[113,54]]),state:b([1,2,8,6,7,30,o,[4,3],33,37,o,[5,3],38,o,[4,3],39,o,[4,3],40,o,[4,3],42,o,[21,4],50,o,[5,3],51,o,[4,3]]),mode:b([l,[1,179],l,[2,3],o,[5,5],o,[6,4],l,[1,57]]),goto:b([5,3,4,24,l,[9,15,1],l,[25,5,1],o,[24,19],31,35,32,34,o,[18,14],36,o,[38,19],o,[19,57],o,[118,4],41,o,[24,19],43,35,o,[16,14],44,l,[2,3],28,29,2,l,[3,3],28,29,3,o,[53,4],l,[45,5,1],o,[100,42],52,o,[5,4],53])}),defaultActions:c({idx:b([6,7,8,l,[10,16,1],33,34,39,40,41,45,47,52,53]),goto:b([9,10,11,l,[16,14,1],12,1,30,13,l,[4,4,1],14,15,8])}),parseError:function(_,r,e){if(r.recoverable)typeof this.trace=="function"&&this.trace(_),r.destroy();else throw typeof this.trace=="function"&&this.trace(_),e||(e=this.JisonParserError),new e(_,r)},parse:function(_){var r=this,e=new Array(128),n=new Array(128),s=new Array(128),u=this.table,i=0,x=0;this.TERROR;var A=this.EOF;this.options.errorRecoveryTokenDiscardCount|0;var R=[0,54],d;this.__lexer__?d=this.__lexer__:d=this.__lexer__=Object.create(this.lexer);var E={parseError:void 0,quoteName:void 0,lexer:void 0,parser:void 0,pre_parse:void 0,post_parse:void 0,pre_lex:void 0,post_lex:void 0};typeof assert!="function"||assert,this.yyGetSharedState=function(){return E};function P(k,w){for(var $ in w)typeof k[$]>"u"&&Object.prototype.hasOwnProperty.call(w,$)&&(k[$]=w[$])}P(E,this.yy),E.lexer=d,E.parser=this,typeof E.parseError=="function"?this.parseError=function(w,$,U){return U||(U=this.JisonParserError),E.parseError.call(this,w,$,U)}:this.parseError=this.originalParseError,typeof E.quoteName=="function"?this.quoteName=function(w){return E.quoteName.call(this,w)}:this.quoteName=this.originalQuoteName,this.cleanupAfterParse=function(w,$,U){var D;if($){var F;(E.post_parse||this.post_parse)&&(F=this.constructParseErrorInfo(null,null,null,!1)),E.post_parse&&(D=E.post_parse.call(this,E,w,F),typeof D<"u"&&(w=D)),this.post_parse&&(D=this.post_parse.call(this,E,w,F),typeof D<"u"&&(w=D)),F&&F.destroy&&F.destroy()}if(this.__reentrant_call_depth>1)return w;if(d.cleanupAfterLex&&d.cleanupAfterLex(U),E&&(E.lexer=void 0,E.parser=void 0,d.yy===E&&(d.yy=void 0)),E=void 0,this.parseError=this.originalParseError,this.quoteName=this.originalQuoteName,e.length=0,n.length=0,s.length=0,i=0,!U){for(var ee=this.__error_infos.length-1;ee>=0;ee--){var B=this.__error_infos[ee];B&&typeof B.destroy=="function"&&B.destroy()}this.__error_infos.length=0}return w},this.constructParseErrorInfo=function(w,$,U,D){var F={errStr:w,exception:$,text:d.match,value:d.yytext,token:this.describeSymbol(x)||x,token_id:x,line:d.yylineno,expected:U,recoverable:D,state:T,action:J,new_state:I,symbol_stack:e,state_stack:n,value_stack:s,stack_pointer:i,yy:E,lexer:d,parser:this,destroy:function(){var B=!!this.recoverable;for(var ie in this)this.hasOwnProperty(ie)&&typeof ie=="object"&&(this[ie]=void 0);this.recoverable=B}};return this.__error_infos.push(F),F};function q(){var k=d.lex();return typeof k!="number"&&(k=r.symbols_[k]||k),k||A}function M(){var k=d.fastLex();return typeof k!="number"&&(k=r.symbols_[k]||k),k||A}var X=q,T,J,S,Z,G={$:!0,_$:void 0,yy:E},C,j,Q,I,L=!1;try{if(this.__reentrant_call_depth++,d.setInput(_,E),typeof d.canIUse=="function"){var K=d.canIUse();K.fastLex&&typeof M=="function"&&(X=M)}for(s[i]=null,n[i]=0,e[i]=0,++i,this.pre_parse&&this.pre_parse.call(this,E),E.pre_parse&&E.pre_parse.call(this,E),I=n[i-1];;){if(T=I,this.defaultActions[T])J=2,I=this.defaultActions[T];else if(x||(x=X()),Z=u[T]&&u[T][x]||R,I=Z[1],J=Z[0],!J){var N,z=this.describeSymbol(x)||x,Y=this.collect_expected_token_set(T);typeof d.yylineno=="number"?N="Parse error on line "+(d.yylineno+1)+": ":N="Parse error: ",typeof d.showPosition=="function"&&(N+=`
`+d.showPosition(79-10,10)+`
`),Y.length?N+="Expecting "+Y.join(", ")+", got unexpected "+z:N+="Unexpected "+z,C=this.constructParseErrorInfo(N,null,Y,!1),S=this.parseError(C.errStr,C,this.JisonParserError),typeof S<"u"&&(L=S);break}switch(J){default:if(J instanceof Array){C=this.constructParseErrorInfo("Parse Error: multiple actions possible at state: "+T+", token: "+x,null,null,!1),S=this.parseError(C.errStr,C,this.JisonParserError),typeof S<"u"&&(L=S);break}C=this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.",null,null,!1),S=this.parseError(C.errStr,C,this.JisonParserError),typeof S<"u"&&(L=S);break;case 1:e[i]=x,s[i]=d.yytext,n[i]=I,++i,x=0;continue;case 2:if(Q=this.productions_[I-1],j=Q[1],S=this.performAction.call(G,I,i-1,s),typeof S<"u"){L=S;break}i-=j;var de=Q[0];e[i]=de,s[i]=G.$,I=u[n[i-1]][de],n[i]=I,++i;continue;case 3:i!==-2&&(L=!0,i--,typeof s[i]<"u"&&(L=s[i]));break}break}}catch(k){if(k instanceof this.JisonParserError)throw k;if(d&&typeof d.JisonLexerError=="function"&&k instanceof d.JisonLexerError)throw k;C=this.constructParseErrorInfo("Parsing aborted due to exception.",k,null,!1),L=!1,S=this.parseError(C.errStr,C,this.JisonParserError),typeof S<"u"&&(L=S)}finally{L=this.cleanupAfterParse(L,!0,!0),this.__reentrant_call_depth--}return L}};g.originalParseError=g.parseError,g.originalQuoteName=g.quoteName;var y=function(){function v(r,e){Object.defineProperty(this,"name",{enumerable:!1,writable:!1,value:"JisonLexerError"}),r==null&&(r="???"),Object.defineProperty(this,"message",{enumerable:!1,writable:!0,value:r}),this.hash=e;var n;if(e&&e.exception instanceof Error){var s=e.exception;this.message=s.message||r,n=s.stack}n||(Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(this,this.constructor):n=new Error(r).stack),n&&Object.defineProperty(this,"stack",{enumerable:!1,writable:!1,value:n})}typeof Object.setPrototypeOf=="function"?Object.setPrototypeOf(v.prototype,Error.prototype):v.prototype=Object.create(Error.prototype),v.prototype.constructor=v,v.prototype.name="JisonLexerError";var _={EOF:1,ERROR:2,__currentRuleSet__:null,__error_infos:[],__decompressed:!1,done:!1,_backtrack:!1,_input:"",_more:!1,_signaled_error_token:!1,conditionStack:[],match:"",matched:"",matches:!1,yytext:"",offset:0,yyleng:0,yylineno:0,yylloc:null,constructLexErrorInfo:function(e,n,s){if(e=""+e,s==null&&(s=!(e.indexOf(`
`)>0&&e.indexOf("^")>0)),this.yylloc&&s){if(typeof this.prettyPrintRange=="function")this.prettyPrintRange(this.yylloc),/\n\s*$/.test(e)||(e+=`
`),e+=`
  Erroneous area:
`+this.prettyPrintRange(this.yylloc);else if(typeof this.showPosition=="function"){var u=this.showPosition();u&&(e.length&&e[e.length-1]!==`
`&&u[0]!==`
`?e+=`
`+u:e+=u)}}var i={errStr:e,recoverable:!!n,text:this.match,token:null,line:this.yylineno,loc:this.yylloc,yy:this.yy,lexer:this,destroy:function(){var A=!!this.recoverable;for(var R in this)this.hasOwnProperty(R)&&typeof R=="object"&&(this[R]=void 0);this.recoverable=A}};return this.__error_infos.push(i),i},parseError:function(e,n,s){if(s||(s=this.JisonLexerError),this.yy){if(this.yy.parser&&typeof this.yy.parser.parseError=="function")return this.yy.parser.parseError.call(this,e,n,s)||this.ERROR;if(typeof this.yy.parseError=="function")return this.yy.parseError.call(this,e,n,s)||this.ERROR}throw new s(e,n)},yyerror:function(e){var n="";this.yylloc&&(n=" on line "+(this.yylineno+1));var s=this.constructLexErrorInfo("Lexical error"+n+": "+e,this.options.lexerErrorsAreRecoverable),u=Array.prototype.slice.call(arguments,1);return u.length&&(s.extra_error_attributes=u),this.parseError(s.errStr,s,this.JisonLexerError)||this.ERROR},cleanupAfterLex:function(e){if(this.setInput("",{}),!e){for(var n=this.__error_infos.length-1;n>=0;n--){var s=this.__error_infos[n];s&&typeof s.destroy=="function"&&s.destroy()}this.__error_infos.length=0}return this},clear:function(){this.yytext="",this.yyleng=0,this.match="",this.matches=!1,this._more=!1,this._backtrack=!1;var e=this.yylloc?this.yylloc.last_column:0;this.yylloc={first_line:this.yylineno+1,first_column:e,last_line:this.yylineno+1,last_column:e,range:[this.offset,this.offset]}},setInput:function(e,n){if(this.yy=n||this.yy||{},!this.__decompressed){for(var s=this.rules,u=0,i=s.length;u<i;u++){var x=s[u];typeof x=="number"&&(s[u]=s[x])}var A=this.conditions;for(var R in A){for(var d=A[R],E=d.rules,i=E.length,P=new Array(i+1),q=new Array(i+1),u=0;u<i;u++){var M=E[u],x=s[M];P[u+1]=x,q[u+1]=M}d.rules=q,d.__rule_regexes=P,d.__rule_count=i}this.__decompressed=!0}return this._input=e||"",this.clear(),this._signaled_error_token=!1,this.done=!1,this.yylineno=0,this.matched="",this.conditionStack=["INITIAL"],this.__currentRuleSet__=null,this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0,range:[0,0]},this.offset=0,this},editRemainingInput:function(e,n){var s=e.call(this,this._input,n);return typeof s!="string"?s&&(this._input=""+s):this._input=s,this},input:function(){if(!this._input)return null;var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var n=1,s=!1;if(e===`
`)s=!0;else if(e==="\r"){s=!0;var u=this._input[1];u===`
`&&(n++,e+=u,this.yytext+=u,this.yyleng++,this.offset++,this.match+=u,this.matched+=u,this.yylloc.range[1]++)}return s?(this.yylineno++,this.yylloc.last_line++,this.yylloc.last_column=0):this.yylloc.last_column++,this.yylloc.range[1]++,this._input=this._input.slice(n),e},unput:function(e){var n=e.length,s=e.split(/(?:\r\n?|\n)/g);if(this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.yyleng=this.yytext.length,this.offset-=n,this.match=this.match.substr(0,this.match.length-n),this.matched=this.matched.substr(0,this.matched.length-n),s.length>1){this.yylineno-=s.length-1,this.yylloc.last_line=this.yylineno+1;var u=this.match,i=u.split(/(?:\r\n?|\n)/g);i.length===1&&(u=this.matched,i=u.split(/(?:\r\n?|\n)/g)),this.yylloc.last_column=i[i.length-1].length}else this.yylloc.last_column-=n;return this.yylloc.range[1]=this.yylloc.range[0]+this.yyleng,this.done=!1,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else{var e="";this.yylloc&&(e=" on line "+(this.yylineno+1));var n=this.constructLexErrorInfo("Lexical error"+e+": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",!1);this._signaled_error_token=this.parseError(n.errStr,n,this.JisonLexerError)||this.ERROR}return this},less:function(e){return this.unput(this.match.slice(e))},pastInput:function(e,n){var s=this.matched.substring(0,this.matched.length-this.match.length);e<0?e=s.length:e||(e=20),n<0?n=s.length:n||(n=1),s=s.substr(-e*2-2);var u=s.replace(/\r\n|\r/g,`
`).split(`
`);return u=u.slice(-n),s=u.join(`
`),s.length>e&&(s="..."+s.substr(-e)),s},upcomingInput:function(e,n){var s=this.match;e<0?e=s.length+this._input.length:e||(e=20),n<0?n=e:n||(n=1),s.length<e*2+2&&(s+=this._input.substring(0,e*2+2));var u=s.replace(/\r\n|\r/g,`
`).split(`
`);return u=u.slice(0,n),s=u.join(`
`),s.length>e&&(s=s.substring(0,e)+"..."),s},showPosition:function(e,n){var s=this.pastInput(e).replace(/\s/g," "),u=new Array(s.length+1).join("-");return s+this.upcomingInput(n).replace(/\s/g," ")+`
`+u+"^"},deriveLocationInfo:function(e,n,s,u){var i={first_line:1,first_column:0,last_line:1,last_column:0,range:[0,0]};return e&&(i.first_line=e.first_line|0,i.last_line=e.last_line|0,i.first_column=e.first_column|0,i.last_column=e.last_column|0,e.range&&(i.range[0]=e.range[0]|0,i.range[1]=e.range[1]|0)),(i.first_line<=0||i.last_line<i.first_line)&&(i.first_line<=0&&n&&(i.first_line=n.last_line|0,i.first_column=n.last_column|0,n.range&&(i.range[0]=e.range[1]|0)),(i.last_line<=0||i.last_line<i.first_line)&&s&&(i.last_line=s.first_line|0,i.last_column=s.first_column|0,s.range&&(i.range[1]=e.range[0]|0)),i.first_line<=0&&u&&(i.last_line<=0||u.last_line<=i.last_line)&&(i.first_line=u.first_line|0,i.first_column=u.first_column|0,u.range&&(i.range[0]=u.range[0]|0)),i.last_line<=0&&u&&(i.first_line<=0||u.first_line>=i.first_line)&&(i.last_line=u.last_line|0,i.last_column=u.last_column|0,u.range&&(i.range[1]=u.range[1]|0))),i.last_line<=0&&(i.first_line<=0?(i.first_line=this.yylloc.first_line,i.last_line=this.yylloc.last_line,i.first_column=this.yylloc.first_column,i.last_column=this.yylloc.last_column,i.range[0]=this.yylloc.range[0],i.range[1]=this.yylloc.range[1]):(i.last_line=this.yylloc.last_line,i.last_column=this.yylloc.last_column,i.range[1]=this.yylloc.range[1])),i.first_line<=0&&(i.first_line=i.last_line,i.first_column=0,i.range[1]=i.range[0]),i.first_column<0&&(i.first_column=0),i.last_column<0&&(i.last_column=i.first_column>0?i.first_column:80),i},prettyPrintRange:function(e,n,s){e=this.deriveLocationInfo(e,n,s);const u=3,i=1,x=2;var A=this.matched+this._input,R=A.split(`
`),d=Math.max(1,n?n.first_line:e.first_line-u),E=Math.max(1,s?s.last_line:e.last_line+i),P=1+Math.log10(E|1)|0,q=new Array(P).join(" "),M=[],X=R.slice(d-1,E+1).map(function(G,C){var j=C+d,Q=(q+j).substr(-P),I=Q+": "+G,L=new Array(P+1).join("^"),K=2+1,N=0;if(j===e.first_line?(K+=e.first_column,N=Math.max(2,(j===e.last_line?e.last_column:G.length)-e.first_column+1)):j===e.last_line?N=Math.max(2,e.last_column+1):j>e.first_line&&j<e.last_line&&(N=Math.max(2,G.length+1)),N){var z=new Array(K).join("."),Y=new Array(N).join("^");I+=`
`+L+z+Y,G.trim().length>0&&M.push(C)}return I=I.replace(/\t/g," "),I});if(M.length>2*x){var T=M[x-1]+1,J=M[M.length-x]-1,S=new Array(P+1).join(" ")+"  (...continued...)";S+=`
`+new Array(P+1).join("-")+"  (---------------)",X.splice(T,J-T+1,S)}return X.join(`
`)},describeYYLLOC:function(e,n){var s=e.first_line,u=e.last_line,i=e.first_column,x=e.last_column,A=u-s,R=x-i,d;if(A===0?(d="line "+s+", ",R<=1?d+="column "+i:d+="columns "+i+" .. "+x):d="lines "+s+"(column "+i+") .. "+u+"(column "+x+")",e.range&&n){var E=e.range[0],P=e.range[1]-1;P<=E?d+=" {String Offset: "+E+"}":d+=" {String Offset range: "+E+" .. "+P+"}"}return d},test_match:function(e,n){var s,u,i,x,A;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.yylloc.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column,range:this.yylloc.range.slice(0)},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done}),x=e[0],A=x.length,u=x.split(/(?:\r\n?|\n)/g),u.length>1?(this.yylineno+=u.length-1,this.yylloc.last_line=this.yylineno+1,this.yylloc.last_column=u[u.length-1].length):this.yylloc.last_column+=A,this.yytext+=x,this.match+=x,this.matched+=x,this.matches=e,this.yyleng=this.yytext.length,this.yylloc.range[1]+=A,this.offset+=A,this._more=!1,this._backtrack=!1,this._input=this._input.slice(A),s=this.performAction.call(this,this.yy,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var R in i)this[R]=i[R];return this.__currentRuleSet__=null,!1}else if(this._signaled_error_token)return s=this._signaled_error_token,this._signaled_error_token=!1,s;return!1},next:function(){if(this.done)return this.clear(),this.EOF;this._input||(this.done=!0);var e,n,s,u;this._more||this.clear();var i=this.__currentRuleSet__;if(!i&&(i=this.__currentRuleSet__=this._currentRules(),!i||!i.rules)){var x="";this.options.trackPosition&&(x=" on line "+(this.yylineno+1));var A=this.constructLexErrorInfo("Internal lexer engine error"+x+': The lex grammar programmer pushed a non-existing condition name "'+this.topState()+'"; this is a fatal error and should be reported to the application programmer team!',!1);return this.parseError(A.errStr,A,this.JisonLexerError)||this.ERROR}for(var R=i.rules,d=i.__rule_regexes,E=i.__rule_count,P=1;P<=E;P++)if(s=this._input.match(d[P]),s&&(!n||s[0].length>n[0].length)){if(n=s,u=P,this.options.backtrack_lexer){if(e=this.test_match(s,R[P]),e!==!1)return e;if(this._backtrack){n=void 0;continue}else return!1}else if(!this.options.flex)break}if(n)return e=this.test_match(n,R[u]),e!==!1?e:!1;if(this._input){var x="";this.options.trackPosition&&(x=" on line "+(this.yylineno+1));var A=this.constructLexErrorInfo("Lexical error"+x+": Unrecognized text.",this.options.lexerErrorsAreRecoverable),q=this._input,M=this.topState(),X=this.conditionStack.length;return e=this.parseError(A.errStr,A,this.JisonLexerError)||this.ERROR,e===this.ERROR&&!this.matches&&q===this._input&&M===this.topState()&&X===this.conditionStack.length&&this.input(),e}else return this.done=!0,this.clear(),this.EOF},lex:function(){var e;for(typeof this.pre_lex=="function"&&(e=this.pre_lex.call(this,0)),typeof this.options.pre_lex=="function"&&(e=this.options.pre_lex.call(this,e)||e),this.yy&&typeof this.yy.pre_lex=="function"&&(e=this.yy.pre_lex.call(this,e)||e);!e;)e=this.next();return this.yy&&typeof this.yy.post_lex=="function"&&(e=this.yy.post_lex.call(this,e)||e),typeof this.options.post_lex=="function"&&(e=this.options.post_lex.call(this,e)||e),typeof this.post_lex=="function"&&(e=this.post_lex.call(this,e)||e),e},fastLex:function(){for(var e;!e;)e=this.next();return e},canIUse:function(){var e={fastLex:!(typeof this.pre_lex=="function"||typeof this.options.pre_lex=="function"||this.yy&&typeof this.yy.pre_lex=="function"||this.yy&&typeof this.yy.post_lex=="function"||typeof this.options.post_lex=="function"||typeof this.post_lex=="function")&&typeof this.fastLex=="function"};return e},begin:function(e){return this.pushState(e)},pushState:function(e){return this.conditionStack.push(e),this.__currentRuleSet__=null,this},popState:function(){var e=this.conditionStack.length-1;return e>0?(this.__currentRuleSet__=null,this.conditionStack.pop()):this.conditionStack[0]},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]]:this.conditions.INITIAL},stateStackSize:function(){return this.conditionStack.length},options:{trackPosition:!0},JisonLexerError:v,performAction:function(e,n,s){switch(n){case 1:break;default:return this.simpleCaseActionClusters[n]}},simpleCaseActionClusters:{0:13,2:5,3:6,4:3,5:4,6:15,7:15,8:15,9:15,10:15,11:15,12:16,13:16,14:16,15:16,16:17,17:17,18:18,19:18,20:19,21:19,22:19,23:20,24:21,25:22,26:23,27:25,28:24,29:26,30:27,31:28,32:11,33:9,34:12,35:10,36:7,37:8,38:14,39:1},rules:[/^(?:(--[\d\-A-Za-z]*))/,/^(?:\s+)/,/^(?:\*)/,/^(?:\/)/,/^(?:\+)/,/^(?:-)/,/^(?:(\d+(\.\d*)?|\.\d+)px\b)/,/^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,/^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,/^(?:(\d+(\.\d*)?|\.\d+)in\b)/,/^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,/^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,/^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,/^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,/^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,/^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,/^(?:(\d+(\.\d*)?|\.\d+)s\b)/,/^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,/^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,/^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,/^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,/^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,/^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,/^(?:(\d+(\.\d*)?|\.\d+)em\b)/,/^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,/^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,/^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,/^(?:(\d+(\.\d*)?|\.\d+)%)/,/^(?:(\d+(\.\d*)?|\.\d+)\b)/,/^(?:(calc))/,/^(?:(var))/,/^(?:([a-z]+))/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],inclusive:!0}}};return _}();g.lexer=y;function p(){this.yy={}}return p.prototype=g,g.Parser=p,new p}();typeof Le<"u"&&(t.parser=f,t.Parser=f.Parser,t.parse=function(){return f.parse.apply(f,arguments)})})(Pe);var W={},pe={exports:{}};(function(t,f){Object.defineProperty(f,"__esModule",{value:!0});var h=Se,a=c(h);function c(o){return o&&o.__esModule?o:{default:o}}function m(o,b,g){switch(o.type){case"LengthValue":case"AngleValue":case"TimeValue":case"FrequencyValue":case"ResolutionValue":return l(o,b,g);default:return{left:o,right:b}}}function l(o,b,g){return b.type===o.type&&(b={type:o.type,value:(0,a.default)(b.value,b.unit,o.unit,g),unit:o.unit}),{left:o,right:b}}f.default=m,t.exports=f.default})(pe,pe.exports);var Ne=pe.exports;Object.defineProperty(W,"__esModule",{value:!0});W.flip=_e;var Te=Ne,he=$e(Te);function $e(t){return t&&t.__esModule?t:{default:t}}function O(t,f){return t.type==="MathExpression"?Ue(t,f):t.type==="Calc"?O(t.value,f):t}function be(t,f){return t.type===f.type&&t.value===f.value}function V(t){switch(t){case"LengthValue":case"AngleValue":case"TimeValue":case"FrequencyValue":case"ResolutionValue":case"EmValue":case"ExValue":case"ChValue":case"RemValue":case"VhValue":case"VwValue":case"VminValue":case"VmaxValue":case"PercentageValue":case"Value":return!0}return!1}function je(t,f){var h=(0,he.default)(t.left,t.right,f),a=O(h.left,f),c=O(h.right,f);return a.type==="MathExpression"&&c.type==="MathExpression"&&(a.operator==="/"&&c.operator==="*"||a.operator==="-"&&c.operator==="+"||a.operator==="*"&&c.operator==="/"||a.operator==="+"&&c.operator==="-")&&(be(a.right,c.right)?h=(0,he.default)(a.left,c.left,f):be(a.right,c.left)&&(h=(0,he.default)(a.left,c.right,f)),a=O(h.left,f),c=O(h.right,f)),t.left=a,t.right=c,t}function _e(t){return t==="+"?"-":"+"}function ve(t){return V(t.type)?t.value=-t.value:t.type=="MathExpression"&&(t.left=ve(t.left),t.right=ve(t.right)),t}function Fe(t,f){var h=t,a=h.left,c=h.right,m=h.operator;if(a.type==="CssVariable"||c.type==="CssVariable")return t;if(c.value===0)return a;if(a.value===0&&m==="+")return c;if(a.value===0&&m==="-")return ve(c);if(a.type===c.type&&V(a.type)&&(t=Object.assign({},a),m==="+"?t.value=a.value+c.value:t.value=a.value-c.value),V(a.type)&&(c.operator==="+"||c.operator==="-")&&c.type==="MathExpression"){if(a.type===c.left.type)return t=Object.assign({},t),t.left=O({type:"MathExpression",operator:m,left:a,right:c.left},f),t.right=c.right,t.operator=m==="-"?_e(c.operator):c.operator,O(t,f);if(a.type===c.right.type)return t=Object.assign({},t),t.left=O({type:"MathExpression",operator:m==="-"?_e(c.operator):c.operator,left:a,right:c.right},f),t.right=c.left,O(t,f)}if(a.type==="MathExpression"&&(a.operator==="+"||a.operator==="-")&&V(c.type)){if(c.type===a.left.type)return t=Object.assign({},a),t.left=O({type:"MathExpression",operator:m,left:a.left,right:c},f),O(t,f);if(c.type===a.right.type)return t=Object.assign({},a),a.operator==="-"?(t.right=O({type:"MathExpression",operator:m==="-"?"+":"-",left:c,right:a.right},f),t.operator=m==="-"?"-":"+"):t.right=O({type:"MathExpression",operator:m,left:a.right,right:c},f),t.right.value<0&&(t.right.value*=-1,t.operator=t.operator==="-"?"+":"-"),O(t,f)}return t}function qe(t,f){if(!V(t.right.type))return t;if(t.right.type!=="Value")throw new Error('Cannot divide by "'+t.right.unit+'", number expected');if(t.right.value===0)throw new Error("Cannot divide by zero");return t.left.type==="MathExpression"?V(t.left.left.type)&&V(t.left.right.type)?(t.left.left.value/=t.right.value,t.left.right.value/=t.right.value,O(t.left,f)):t:V(t.left.type)?(t.left.value/=t.right.value,t.left):t}function Je(t){if(t.left.type==="MathExpression"&&t.right.type==="Value"){if(V(t.left.left.type)&&V(t.left.right.type))return t.left.left.value*=t.right.value,t.left.right.value*=t.right.value,t.left}else{if(V(t.left.type)&&t.right.type==="Value")return t.left.value*=t.right.value,t.left;if(t.left.type==="Value"&&t.right.type==="MathExpression"){if(V(t.right.left.type)&&V(t.right.right.type))return t.right.left.value*=t.left.value,t.right.right.value*=t.left.value,t.right}else if(t.left.type==="Value"&&V(t.right.type))return t.right.value*=t.left.value,t.right}return t}function Ue(t,f){switch(t=je(t,f),t.operator){case"+":case"-":return Fe(t,f);case"/":return qe(t,f);case"*":return Je(t)}return t}W.default=O;var ye={exports:{}};(function(t,f){Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(l,o,b){var g=m(o,b);return o.type==="MathExpression"&&(g=l+"("+g+")"),g};var h=W,a={"*":0,"/":0,"+":1,"-":1};function c(l,o){if(o!==!1){var b=Math.pow(10,o);return Math.round(l*b)/b}return l}function m(l,o){switch(l.type){case"MathExpression":{var b=l.left,g=l.right,y=l.operator,p="";return b.type==="MathExpression"&&a[y]<a[b.operator]?p+="("+m(b,o)+")":p+=m(b,o),p+=" "+l.operator+" ",g.type==="MathExpression"&&a[y]<a[g.operator]?p+="("+m(g,o)+")":(g.type==="MathExpression"&&y==="-"&&["+","-"].includes(g.operator)&&(g.operator=(0,h.flip)(g.operator)),p+=m(g,o)),p}case"Value":return c(l.value,o);case"CssVariable":return l.fallback?"var("+l.value+", "+m(l.fallback,o)+")":"var("+l.value+")";case"Calc":return l.prefix?"-"+l.prefix+"-calc("+m(l.value,o)+")":"calc("+m(l.value,o)+")";default:return c(l.value,o)+l.unit}}t.exports=f.default})(ye,ye.exports);var De=ye.exports;(function(t,f){Object.defineProperty(f,"__esModule",{value:!0});var h=Me,a=g(h),c=Pe,m=W,l=g(m),o=De,b=g(o);function g(p){return p&&p.__esModule?p:{default:p}}var y=/((?:\-[a-z]+\-)?calc)/;f.default=function(p){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;return(0,a.default)(p).walk(function(_){if(!(_.type!=="function"||!y.test(_.value))){var r=a.default.stringify(_.nodes);if(!(r.indexOf("constant")>=0||r.indexOf("env")>=0)){var e=c.parser.parse(r),n=(0,l.default)(e,v);_.type="word",_.value=(0,b.default)(_.value,n,v)}}},!0).toString()},t.exports=f.default})(ce,ce.exports);var He=ce.exports;const Qe=Re(He);export{Qe as r};
