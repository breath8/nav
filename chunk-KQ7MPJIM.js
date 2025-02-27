import{a as $,b as O,d as ee}from"./chunk-6FIOWHNY.js";import{o as q,p as J,r as K}from"./chunk-YRJ4XS4I.js";import{Da as W,Ea as Z,S as U,d as R,db as Q,eb as X,fb as Y}from"./chunk-GSFQREVP.js";import{Ca as d,Cb as B,Da as u,Db as M,Eb as x,Fa as b,Fb as w,Gb as C,Ib as c,Ka as S,Ob as s,Pc as L,Qb as f,Rb as E,Sb as I,Wc as G,Xb as V,a as h,ac as v,bc as z,cc as F,dc as _,ec as P,gc as j,jc as H,lc as m,na as T,qb as l,vb as A,w as D,x as y,xc as g,yc as k}from"./chunk-UORSKR4T.js";var te=class e{constructor(i){this.sanitized=i}transform(i){return this.sanitized.bypassSecurityTrustHtml(i)}static \u0275fac=function(t){return new(t||e)(A(R,16))};static \u0275pipe=w({name:"safeHtml",type:e,pure:!0})};function ie(e,i){if(e&1&&(_(0),g(1),P()),e&2){let t=m(3);l(),k(t.nzTitle)}}function re(e,i){if(e&1&&(v(0,"div",7),c(1,ie,2,1,"ng-container",9),z()),e&2){let t=m(2);l(),s("nzStringTemplateOutlet",t.nzTitle)}}function ae(e,i){if(e&1&&(_(0),g(1),P()),e&2){let t=m(2);l(),k(t.nzContent)}}function pe(e,i){if(e&1&&(v(0,"div",2)(1,"div",3)(2,"div",4),F(3,"span",5),z(),v(4,"div",6)(5,"div"),c(6,re,2,1,"div",7),v(7,"div",8),c(8,ae,2,1,"ng-container",9),z()()()()()),e&2){let t=m();E(t.nzOverlayStyle),I(t._classMap),f("ant-popover-rtl",t.dir==="rtl"),s("@.disabled",!!(t.noAnimation!=null&&t.noAnimation.nzNoAnimation))("nzNoAnimation",t.noAnimation==null?null:t.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),l(6),V(t.nzTitle?6:-1),l(2),s("nzStringTemplateOutlet",t.nzContent)}}var le="popover",Ae=(()=>{let e=$,i,t=[],a=[];return class N extends e{static{let r=typeof Symbol=="function"&&Symbol.metadata?Object.create(e[Symbol.metadata]??null):void 0;i=[U()],D(null,null,i,{kind:"field",name:"nzPopoverBackdrop",static:!1,private:!1,access:{has:o=>"nzPopoverBackdrop"in o,get:o=>o.nzPopoverBackdrop,set:(o,p)=>{o.nzPopoverBackdrop=p}},metadata:r},t,a),r&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r})}_nzModuleName=le;arrowPointAtCenter;title;content;directiveTitle;trigger="hover";placement="top";origin;visible;mouseEnterDelay;mouseLeaveDelay;overlayClassName;overlayStyle;overlayClickable;directiveContent=null;nzPopoverBackdrop=y(this,t,!1);visibleChange=(y(this,a),new S);getProxyPropertyMap(){return h({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}constructor(){super(oe)}static \u0275fac=function(o){return new(o||N)};static \u0275dir=x({type:N,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(o,p){o&2&&f("ant-popover-open",p.visible)},inputs:{arrowPointAtCenter:[2,"nzPopoverArrowPointAtCenter","arrowPointAtCenter",G],title:[0,"nzPopoverTitle","title"],content:[0,"nzPopoverContent","content"],directiveTitle:[0,"nz-popover","directiveTitle"],trigger:[0,"nzPopoverTrigger","trigger"],placement:[0,"nzPopoverPlacement","placement"],origin:[0,"nzPopoverOrigin","origin"],visible:[0,"nzPopoverVisible","visible"],mouseEnterDelay:[0,"nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:[0,"nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:[0,"nzPopoverOverlayClassName","overlayClassName"],overlayStyle:[0,"nzPopoverOverlayStyle","overlayStyle"],overlayClickable:[0,"nzPopoverOverlayClickable","overlayClickable"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[C]})}})(),oe=(()=>{class e extends ee{_prefix="ant-popover";get hasBackdrop(){return this.nzTrigger==="click"?this.nzBackdrop:!1}isEmpty(){return O(this.nzTitle)&&O(this.nzContent)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=B({type:e,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[C],decls:2,vars:6,consts:[["overlay","cdkConnectedOverlay"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"overlayOutsideClick","detach","positionChange","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter"],[1,"ant-popover",3,"nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],[1,"ant-popover-title"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"]],template:function(a,n){if(a&1){let r=j();c(0,pe,9,11,"ng-template",1,0,L),H("overlayOutsideClick",function(p){return d(r),u(n.onClickOutside(p))})("detach",function(){return d(r),u(n.hide())})("positionChange",function(p){return d(r),u(n.onPositionChange(p))})}a&2&&s("cdkConnectedOverlayHasBackdrop",n.hasBackdrop)("cdkConnectedOverlayOrigin",n.origin)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayOpen",n._visible)("cdkConnectedOverlayPush",n.cdkConnectedOverlayPush)("nzArrowPointAtCenter",n.nzArrowPointAtCenter)},dependencies:[Z,W,J,q,K,Y,X],encapsulation:2,data:{animation:[Q]},changeDetection:0})}return e})(),Be=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=M({type:e});static \u0275inj=T({imports:[oe]})}return e})();export{te as a,Ae as b,Be as c};
