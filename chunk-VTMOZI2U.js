import{a as $}from"./chunk-JI6FWWQU.js";import{b as x}from"./chunk-G3KT4M25.js";import"./chunk-XD34C3HP.js";import{i as q}from"./chunk-FCLZO6JG.js";import"./chunk-6FZUTLL6.js";import{Wb as O}from"./chunk-BGOJAQ5U.js";import{Cb as D,Ob as M,ac as k,bc as A,cc as T,ee as z,jc as B,le as P,mb as _,oe as m,qb as C,vb as S}from"./chunk-7FVRWUVZ.js";var a=z(),b=r=>r.textContent||"",W=r=>r.getAttribute("href")||"",H=r=>r.getAttribute("icon")||"";function E(r){let c=[];return Array.from(r.children).forEach(e=>{if(e.nodeName==="DT"){let n=e.firstElementChild;n?.nodeName==="A"&&c.push({name:b(n),icon:H(n),url:W(n),tags:[],desc:"",rate:5,id:a+=1,breadcrumb:[]})}}),c}function R(r){let c=JSON.parse(JSON.stringify(P)),e=[],n=document.createElement("div");n.innerHTML=r;let g=n.querySelector("dl dl");if(!g)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};try{let f=function(i,s){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("a");o&&s.nav.push({name:b(o),url:W(o),desc:"",tags:[],rate:5,top:!1,icon:H(o),id:a+=1,breadcrumb:[]})}})},h=function(i,s){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let d=b(o),l={id:a+=1,title:d,nav:[],icon:""};s.nav.push(l);let N=t.querySelector("dl");N&&f(N,l)}}})},y=function(i,s){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let d=b(o),l={id:a+=1,title:d,icon:"",nav:[]};s.nav.push(l);let N=t.querySelector("dl");if(N){let L=E(N);L.length>0&&l.nav.push({id:a+=1,title:d,nav:L}),h(N,l)}}}})};var I=f,v=h,F=y;Array.from(g.children).forEach(i=>{if(i.nodeName==="DT"){let s=i.querySelector("h3");if(s){let t=b(s),o={id:a+=1,title:t,icon:"",nav:[]};e.push(o);let d=i.querySelector("dl");if(d){let l=E(d);l.length>0&&o.nav.push({id:a+=1,title:t,nav:[{id:a+=1,title:t,nav:l}]}),y(d,o)}}}});let p=E(g);p.length>0&&e.push({id:a+=1,title:m("_uncategorized"),nav:[{id:a+=1,title:m("_uncategorized"),nav:[{id:a+=1,title:m("_uncategorized"),nav:p}]}]})}catch(f){throw console.log(f),f}function u(f,h){for(let y=0;y<f.length;y++){let p=f[y],i=p.title||p.url,s=h.findIndex(t=>(t.title||t.url)===i);s!==-1?Array.isArray(p.nav)&&u(p.nav,h[s].nav):h.push(p)}}return u(e,c),c}var w=class r{constructor(c,e){this.message=c;this.notification=e}$t=m;websiteList=P;ngOnInit(){}onBookChange(c){let e=this,{files:n}=c.target;if(n.length<=0)return;let g=n[0],u=new FileReader;u.readAsText(g),u.onload=function(){let I=this.result;try{let v=R(I);Array.isArray(v)?(e.message.success(m("_importSuccess")),e.websiteList=v,x(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(m("_errorBookTip"),`${v?.message??""}`)}catch(v){e.notification.error(m("_errorBookTip"),`${v.message}`)}}}static \u0275fac=function(e){return new(e||r)(S(O),S($))};static \u0275cmp=D({type:r,selectors:[["system-bookmark"]],decls:5,vars:1,consts:[[1,"book-wrapper"],[3,"innerHTML"],["id","file"],["src","assets/img/bookmark.svg","draggable","false",1,"logo"],["type","file","name","file","accept","text/html",3,"change"]],template:function(e,n){e&1&&(k(0,"div",0),T(1,"div",1),k(2,"label",2),T(3,"img",3),k(4,"input",4),B("change",function(u){return n.onBookChange(u)}),A()()()),e&2&&(C(),M("innerHTML",n.$t("_importEnter"),_))},dependencies:[q],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.book-wrapper[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%]{cursor:pointer}"]})};export{w as default};
