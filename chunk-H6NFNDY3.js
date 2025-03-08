import{_ as gt}from"./chunk-YAFI4NOQ.js";import{Jd as O,Kd as G,Yd as X,a as q,b as Q,d as mt,f as V,fe as R,ge as z,je as K,le as C,oe as Z}from"./chunk-XWDAZYSE.js";var tt=mt((N,H)=>{"use strict";(function(e,l){typeof N=="object"&&typeof H=="object"?H.exports=l():typeof define=="function"&&define.amd?define([],l):typeof N=="object"?N.ClipboardJS=l():e.ClipboardJS=l()})(N,function(){return function(){var u={686:function(a,s,t){"use strict";t.d(s,{default:function(){return pt}});var c=t(279),n=t.n(c),r=t(370),m=t.n(r),b=t(817),w=t.n(b);function v(g){try{return document.execCommand(g)}catch{return!1}}var f=function(i){var o=w()(i);return v("cut"),o},x=f;function E(g){var i=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[i?"right":"left"]="-9999px";var d=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(d,"px"),o.setAttribute("readonly",""),o.value=g,o}var P=function(i,o){var d=E(i);o.container.appendChild(d);var p=w()(d);return v("copy"),d.remove(),p},J=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},d="";return typeof i=="string"?d=P(i,o):i instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(i?.type)?d=P(i.value,o):(d=w()(i),v("copy")),d},A=J;function S(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(o){return typeof o}:S=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},S(g)}var M=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.action,d=o===void 0?"copy":o,p=i.container,h=i.target,_=i.text;if(d!=="copy"&&d!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(h!==void 0)if(h&&S(h)==="object"&&h.nodeType===1){if(d==="copy"&&h.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(d==="cut"&&(h.hasAttribute("readonly")||h.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return A(_,{container:p});if(h)return d==="cut"?x(h):A(h,{container:p})},W=M;function T(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(o){return typeof o}:T=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},T(g)}function F(g,i){if(!(g instanceof i))throw new TypeError("Cannot call a class as a function")}function y(g,i){for(var o=0;o<i.length;o++){var d=i[o];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(g,d.key,d)}}function I(g,i,o){return i&&y(g.prototype,i),o&&y(g,o),g}function st(g,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(i&&i.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),i&&Y(g,i)}function Y(g,i){return Y=Object.setPrototypeOf||function(d,p){return d.__proto__=p,d},Y(g,i)}function ct(g){var i=lt();return function(){var d=D(g),p;if(i){var h=D(this).constructor;p=Reflect.construct(d,arguments,h)}else p=d.apply(this,arguments);return ut(this,p)}}function ut(g,i){return i&&(T(i)==="object"||typeof i=="function")?i:ft(g)}function ft(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(g){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},D(g)}function B(g,i){var o="data-clipboard-".concat(g);if(i.hasAttribute(o))return i.getAttribute(o)}var dt=function(g){st(o,g);var i=ct(o);function o(d,p){var h;return F(this,o),h=i.call(this),h.resolveOptions(p),h.listenClick(d),h}return I(o,[{key:"resolveOptions",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof p.action=="function"?p.action:this.defaultAction,this.target=typeof p.target=="function"?p.target:this.defaultTarget,this.text=typeof p.text=="function"?p.text:this.defaultText,this.container=T(p.container)==="object"?p.container:document.body}},{key:"listenClick",value:function(p){var h=this;this.listener=m()(p,"click",function(_){return h.onClick(_)})}},{key:"onClick",value:function(p){var h=p.delegateTarget||p.currentTarget,_=this.action(h)||"copy",k=W({action:_,container:this.container,target:this.target(h),text:this.text(h)});this.emit(k?"success":"error",{action:_,text:k,trigger:h,clearSelection:function(){h&&h.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(p){return B("action",p)}},{key:"defaultTarget",value:function(p){var h=B("target",p);if(h)return document.querySelector(h)}},{key:"defaultText",value:function(p){return B("text",p)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(p){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return A(p,h)}},{key:"cut",value:function(p){return x(p)}},{key:"isSupported",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],h=typeof p=="string"?[p]:p,_=!!document.queryCommandSupported;return h.forEach(function(k){_=_&&!!document.queryCommandSupported(k)}),_}}]),o}(n()),pt=dt},828:function(a){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(n,r){for(;n&&n.nodeType!==s;){if(typeof n.matches=="function"&&n.matches(r))return n;n=n.parentNode}}a.exports=c},438:function(a,s,t){var c=t(828);function n(b,w,v,f,x){var E=m.apply(this,arguments);return b.addEventListener(v,E,x),{destroy:function(){b.removeEventListener(v,E,x)}}}function r(b,w,v,f,x){return typeof b.addEventListener=="function"?n.apply(null,arguments):typeof v=="function"?n.bind(null,document).apply(null,arguments):(typeof b=="string"&&(b=document.querySelectorAll(b)),Array.prototype.map.call(b,function(E){return n(E,w,v,f,x)}))}function m(b,w,v,f){return function(x){x.delegateTarget=c(x.target,w),x.delegateTarget&&f.call(b,x)}}a.exports=r},879:function(a,s){s.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},s.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||s.node(t[0]))},s.string=function(t){return typeof t=="string"||t instanceof String},s.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(a,s,t){var c=t(879),n=t(438);function r(v,f,x){if(!v&&!f&&!x)throw new Error("Missing required arguments");if(!c.string(f))throw new TypeError("Second argument must be a String");if(!c.fn(x))throw new TypeError("Third argument must be a Function");if(c.node(v))return m(v,f,x);if(c.nodeList(v))return b(v,f,x);if(c.string(v))return w(v,f,x);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(v,f,x){return v.addEventListener(f,x),{destroy:function(){v.removeEventListener(f,x)}}}function b(v,f,x){return Array.prototype.forEach.call(v,function(E){E.addEventListener(f,x)}),{destroy:function(){Array.prototype.forEach.call(v,function(E){E.removeEventListener(f,x)})}}}function w(v,f,x){return n(document.body,v,f,x)}a.exports=r},817:function(a){function s(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),m=document.createRange();m.selectNodeContents(t),r.removeAllRanges(),r.addRange(m),c=r.toString()}return c}a.exports=s},279:function(a){function s(){}s.prototype={on:function(t,c,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:c,ctx:n}),this},once:function(t,c,n){var r=this;function m(){r.off(t,m),c.apply(n,arguments)}return m._=c,this.on(t,m,n)},emit:function(t){var c=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,m=n.length;for(r;r<m;r++)n[r].fn.apply(n[r].ctx,c);return this},off:function(t,c){var n=this.e||(this.e={}),r=n[t],m=[];if(r&&c)for(var b=0,w=r.length;b<w;b++)r[b].fn!==c&&r[b].fn._!==c&&m.push(r[b]);return m.length?n[t]=m:delete n[t],this}},a.exports=s,a.exports.TinyEmitter=s}},e={};function l(a){if(e[a])return e[a].exports;var s=e[a]={exports:{}};return u[a](s,s.exports,l),s.exports}return function(){l.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return l.d(s,{a:s}),s}}(),function(){l.d=function(a,s){for(var t in s)l.o(s,t)&&!l.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:s[t]})}}(),function(){l.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)}}(),l(686)}().default})});var ot=V(gt(),1),it=V(tt(),1);var et=(r=>(r[r.All=1]="All",r[r.Title=2]="Title",r[r.Desc=3]="Desc",r[r.Url=4]="Url",r[r.Current=5]="Current",r[r.Quick=6]="Quick",r[r.Id=7]="Id",r[r.Tag=8]="Tag",r))(et||{});function ht(u){return Math.floor(Math.random()*u)}function Ct(u,e){if(!e.trim())return[];e=e.toLowerCase();let{type:l,id:a}=U(),{oneIndex:s,twoIndex:t}=at(a),c=Number(l)||1,n=[],r=[{nav:n,id:-1,title:""}],m=new Map;function b(w){w=w||u;t:for(let v=0;v<w.length;v++){let f=w[v];if(Array.isArray(f.nav)&&b(f.nav),f.name){f.name=rt(f.name),f.desc=rt(f.desc);let x=f.name.toLowerCase(),E=f.desc.toLowerCase(),P=f.url.toLowerCase();if(E[0]===G)continue;let A=()=>{if(x.includes(e)){let y=f,I=new RegExp(`(${e})`,"i");if(y.__name__=y.name,y.name=y.name.replace(I,"<b>$1</b>"),!m.has(y.id))return m.set(y.id,!0),n.push(y),!0}return!1},S=()=>{if(P.includes(e)&&!m.has(f.id)||f.tags.some(I=>I.url?.includes(e))&&!m.has(f.id))return m.set(f.id,!0),n.push(f),!0},M=()=>{if(E.includes(e)){let y=f,I=new RegExp(`(${e})`,"i");if(y.__desc__=y.desc,y.desc=y.desc.replace(I,"<b>$1</b>"),!m.has(y.id))return m.set(y.id,!0),n.push(y),!0}return!1},W=()=>{if(f.top&&x.includes(e)){let y=f,I=new RegExp(`(${e})`,"i");if(y.__name__=y.name,y.name=y.name.replace(I,"<b>$1</b>"),!m.has(y.id))return m.set(y.id,!0),n.push(y),!0}return!1},T=()=>f.tags.forEach(y=>{K[y.id]?.name?.toLowerCase()===e&&(m.has(f.id)||(m.set(f.id,!0),n.push(f)))}),F=()=>f.id==e?(n.push(f),!0):!1;try{switch(c){case 4:S();break;case 2:A();break;case 3:M();break;case 6:W();break;case 8:T();break;case 7:if(F())break t;break;default:A(),M(),S()}}catch(y){console.error(y)}}}}return c===5?b(u[s].nav[t].nav):b(),n.length<=0?[]:r}function $(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}var L;function At(){if(nt())return;L&&clearInterval(L);let u="random-light-bg",e=document.getElementById(u)||document.createElement("div"),l=ht(360);e.id=u,e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    transition: 1s linear;
  `,e.style.backgroundImage=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`,document.body.appendChild(e),L=setInterval(()=>{if(nt()){L&&(clearInterval(L),L=null);return}let s=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`;e.style.opacity="0.3",setTimeout(()=>{e.style.backgroundImage=s,e.style.opacity="1"},1e3)},1e4)}function U(){let{href:u}=window.location,e=u.split("?")[1]||"",l=ot.default.parse(e),a=l.id;if(l.id==null)try{let s=window.localStorage.getItem(O.location);s&&(a=JSON.parse(s).id)}catch{}return Q(q({},l),{type:l.type,q:l.q||"",id:a})}function Ot(){let{id:u}=U();window.localStorage.setItem(O.location,JSON.stringify({id:u}))}function Lt(){let u=z[0]||{};try{let e=window.localStorage.getItem(O.engine);if(e){let l=JSON.parse(e),a=z.find(s=>s.name===l.name);a&&(u=a)}}catch{}return u}function Nt(u){window.localStorage.setItem(O.engine,JSON.stringify(u))}function nt(){let u=window.localStorage.getItem(O.isDark),e=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!u&&e?e:!!Number(u)}function Pt(u,e){let l=u.target,a=`copy-${Date.now()}`;return l.id=a,l.setAttribute("data-clipboard-text",e),new Promise(s=>{let t=new it.default(`#${a}`);t.on("success",function(){t.destroy(),s(!0)}),t.on("error",function(){t.destroy(),s(!1)})})}function rt(u=""){return u?u.replace(/<b>|<\/b>/g,""):""}function Mt(){let{id:u}=U(),{oneIndex:e,twoIndex:l}=at(u),a=[];try{C[e]&&C[e]?.nav?.length>0&&(X||!C[e].nav[l].ownVisible)?a=C[e].nav[l].nav:a=[]}catch{a=[]}return a}function j(u){return String(u).padStart(2,"0")}function Dt(u){let e=document.querySelectorAll(u),l=Number.MAX_SAFE_INTEGER;if(e.length<=0)return l;let s=e[0].parentNode.clientWidth,t=0;for(let c=0;c<e.length;c++){let n=e[c];if(t+=n.clientWidth,t>s){l=c-1;break}}return l}function yt(){return"ontouchstart"in window}function kt(){let u=new Date,e=new Date(u.getFullYear(),0,0),l=u-e,a=1e3*60*60*24;return Math.floor(l/a)}function Rt(){let u=Z("_weeks"),e=new Date,l=e.getFullYear(),a=j(e.getHours()),s=j(e.getMinutes()),t=j(e.getSeconds()),c=e.getMonth()+1,n=e.getDate(),r=e.getDay(),m=j(n);return{year:l,hours:a,minutes:s,seconds:t,month:c,date:n,zeroDate:m,dayText:u[r]}}function $t(){let u=yt()?R.appTheme:R.theme;return u==="Current"?R.theme:u}function at(u,e=0){u=Number(u);let l=e,a=e,s=e,t=[];t:for(let c=0;c<C.length;c++){let n=C[c];if(n.title&&n.id===u){l=c,t.push(n.title);break}if(Array.isArray(n.nav))for(let r=0;r<n.nav.length;r++){let m=n.nav[r];if(m.title&&m.id===u){l=c,a=r,t.push(n.title);break t}if(Array.isArray(m.nav)){for(let b=0;b<m.nav.length;b++)if(m.nav[b].id===u){l=c,a=r,s=b,t.push(n.title);break t}}}}return{oneIndex:l,twoIndex:a,threeIndex:s,breadcrumb:t}}export{et as a,Ct as b,$ as c,At as d,U as e,Ot as f,Lt as g,Nt as h,nt as i,Pt as j,rt as k,Mt as l,Dt as m,yt as n,kt as o,Rt as p,$t as q,at as r};
