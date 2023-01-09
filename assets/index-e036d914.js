import{r as hr,b as At,o as Ft,I as It,c as m,N as n,W as gr,a as yr}from"./framework-7e1a102e.js";import{C as Le}from"./app-884820a0.js";var br=typeof global=="object"&&global&&global.Object===Object&&global;const Rt=br;var mr=typeof self=="object"&&self&&self.Object===Object&&self,vr=Rt||mr||Function("return this")();const R=vr;var wr=R.Symbol;const q=wr;var Yt=Object.prototype,kr=Yt.hasOwnProperty,xr=Yt.toString,J=q?q.toStringTag:void 0;function _r(e){var t=kr.call(e,J),r=e[J];try{e[J]=void 0;var s=!0}catch{}var f=xr.call(e);return s&&(t?e[J]=r:delete e[J]),f}var Sr=Object.prototype,Cr=Sr.toString;function Or(e){return Cr.call(e)}var Lr="[object Null]",Tr="[object Undefined]",Ae=q?q.toStringTag:void 0;function re(e){return e==null?e===void 0?Tr:Lr:Ae&&Ae in Object(e)?_r(e):Or(e)}function Y(e){return e!=null&&typeof e=="object"}var jr="[object Symbol]";function Gt(e){return typeof e=="symbol"||Y(e)&&re(e)==jr}function Br(e,t){for(var r=-1,s=e==null?0:e.length,f=Array(s);++r<s;)f[r]=t(e[r],r,e);return f}var zr=Array.isArray;const ie=zr;var Nr=1/0,Fe=q?q.prototype:void 0,Ie=Fe?Fe.toString:void 0;function Ut(e){if(typeof e=="string")return e;if(ie(e))return Br(e,Ut)+"";if(Gt(e))return Ie?Ie.call(e):"";var t=e+"";return t=="0"&&1/e==-Nr?"-0":t}var Pr=/\s/;function Dr(e){for(var t=e.length;t--&&Pr.test(e.charAt(t)););return t}var Er=/^\s+/;function Mr(e){return e&&e.slice(0,Dr(e)+1).replace(Er,"")}function D(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Re=0/0,Ar=/^[-+]0x[0-9a-f]+$/i,Fr=/^0b[01]+$/i,Ir=/^0o[0-7]+$/i,Rr=parseInt;function ye(e){if(typeof e=="number")return e;if(Gt(e))return Re;if(D(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=D(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Mr(e);var r=Fr.test(e);return r||Ir.test(e)?Rr(e.slice(2),r?2:8):Ar.test(e)?Re:+e}var Ye=1/0,Yr=17976931348623157e292;function be(e){if(!e)return e===0?e:0;if(e=ye(e),e===Ye||e===-Ye){var t=e<0?-1:1;return t*Yr}return e===e?e:0}function Gr(e){var t=be(e),r=t%1;return t===t?r?t-r:t:0}function Te(e){return e}var Ur="[object AsyncFunction]",qr="[object Function]",Hr="[object GeneratorFunction]",Wr="[object Proxy]";function je(e){if(!D(e))return!1;var t=re(e);return t==qr||t==Hr||t==Ur||t==Wr}var Vr=R["__core-js_shared__"];const fe=Vr;var Ge=function(){var e=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Xr(e){return!!Ge&&Ge in e}var Qr=Function.prototype,Jr=Qr.toString;function Kr(e){if(e!=null){try{return Jr.call(e)}catch{}try{return e+""}catch{}}return""}var Zr=/[\\^$.*+?()[\]{}|]/g,en=/^\[object .+?Constructor\]$/,tn=Function.prototype,rn=Object.prototype,nn=tn.toString,on=rn.hasOwnProperty,an=RegExp("^"+nn.call(on).replace(Zr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ln(e){if(!D(e)||Xr(e))return!1;var t=je(e)?an:en;return t.test(Kr(e))}function sn(e,t){return e==null?void 0:e[t]}function Be(e,t){var r=sn(e,t);return ln(r)?r:void 0}var Ue=Object.create,un=function(){function e(){}return function(t){if(!D(t))return{};if(Ue)return Ue(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const dn=un;function fn(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function cn(e,t){var r=-1,s=e.length;for(t||(t=Array(s));++r<s;)t[r]=e[r];return t}var pn=800,$n=16,hn=Date.now;function gn(e){var t=0,r=0;return function(){var s=hn(),f=$n-(s-r);if(r=s,f>0){if(++t>=pn)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function yn(e){return function(){return e}}var bn=function(){try{var e=Be(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ae=bn;var mn=ae?function(e,t){return ae(e,"toString",{configurable:!0,enumerable:!1,value:yn(t),writable:!0})}:Te;const vn=mn;var wn=gn(vn);const kn=wn;var xn=9007199254740991,_n=/^(?:0|[1-9]\d*)$/;function qt(e,t){var r=typeof e;return t=t??xn,!!t&&(r=="number"||r!="symbol"&&_n.test(e))&&e>-1&&e%1==0&&e<t}function ze(e,t,r){t=="__proto__"&&ae?ae(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function le(e,t){return e===t||e!==e&&t!==t}var Sn=Object.prototype,Cn=Sn.hasOwnProperty;function On(e,t,r){var s=e[t];(!(Cn.call(e,t)&&le(s,r))||r===void 0&&!(t in e))&&ze(e,t,r)}function Ln(e,t,r,s){var f=!r;r||(r={});for(var c=-1,d=t.length;++c<d;){var u=t[c],l=s?s(r[u],e[u],u,r,e):void 0;l===void 0&&(l=e[u]),f?ze(r,u,l):On(r,u,l)}return r}var qe=Math.max;function Tn(e,t,r){return t=qe(t===void 0?e.length-1:t,0),function(){for(var s=arguments,f=-1,c=qe(s.length-t,0),d=Array(c);++f<c;)d[f]=s[t+f];f=-1;for(var u=Array(t+1);++f<t;)u[f]=s[f];return u[t]=r(d),fn(e,this,u)}}function jn(e,t){return kn(Tn(e,t,Te),e+"")}var Bn=9007199254740991;function Ht(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Bn}function Ne(e){return e!=null&&Ht(e.length)&&!je(e)}function Wt(e,t,r){if(!D(r))return!1;var s=typeof t;return(s=="number"?Ne(r)&&qt(t,r.length):s=="string"&&t in r)?le(r[t],e):!1}function zn(e){return jn(function(t,r){var s=-1,f=r.length,c=f>1?r[f-1]:void 0,d=f>2?r[2]:void 0;for(c=e.length>3&&typeof c=="function"?(f--,c):void 0,d&&Wt(r[0],r[1],d)&&(c=f<3?void 0:c,f=1),t=Object(t);++s<f;){var u=r[s];u&&e(t,u,s,c)}return t})}var Nn=Object.prototype;function Vt(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Nn;return e===r}function Pn(e,t){for(var r=-1,s=Array(e);++r<e;)s[r]=t(r);return s}var Dn="[object Arguments]";function He(e){return Y(e)&&re(e)==Dn}var Xt=Object.prototype,En=Xt.hasOwnProperty,Mn=Xt.propertyIsEnumerable,An=He(function(){return arguments}())?He:function(e){return Y(e)&&En.call(e,"callee")&&!Mn.call(e,"callee")};const me=An;function Fn(){return!1}var Qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,We=Qt&&typeof module=="object"&&module&&!module.nodeType&&module,In=We&&We.exports===Qt,Ve=In?R.Buffer:void 0,Rn=Ve?Ve.isBuffer:void 0,Yn=Rn||Fn;const Jt=Yn;var Gn="[object Arguments]",Un="[object Array]",qn="[object Boolean]",Hn="[object Date]",Wn="[object Error]",Vn="[object Function]",Xn="[object Map]",Qn="[object Number]",Jn="[object Object]",Kn="[object RegExp]",Zn="[object Set]",eo="[object String]",to="[object WeakMap]",ro="[object ArrayBuffer]",no="[object DataView]",oo="[object Float32Array]",io="[object Float64Array]",ao="[object Int8Array]",lo="[object Int16Array]",so="[object Int32Array]",uo="[object Uint8Array]",fo="[object Uint8ClampedArray]",co="[object Uint16Array]",po="[object Uint32Array]",w={};w[oo]=w[io]=w[ao]=w[lo]=w[so]=w[uo]=w[fo]=w[co]=w[po]=!0;w[Gn]=w[Un]=w[ro]=w[qn]=w[no]=w[Hn]=w[Wn]=w[Vn]=w[Xn]=w[Qn]=w[Jn]=w[Kn]=w[Zn]=w[eo]=w[to]=!1;function $o(e){return Y(e)&&Ht(e.length)&&!!w[re(e)]}function ho(e){return function(t){return e(t)}}var Kt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=Kt&&typeof module=="object"&&module&&!module.nodeType&&module,go=ee&&ee.exports===Kt,ce=go&&Rt.process,yo=function(){try{var e=ee&&ee.require&&ee.require("util").types;return e||ce&&ce.binding&&ce.binding("util")}catch{}}();const Xe=yo;var Qe=Xe&&Xe.isTypedArray,bo=Qe?ho(Qe):$o;const Zt=bo;var mo=Object.prototype,vo=mo.hasOwnProperty;function wo(e,t){var r=ie(e),s=!r&&me(e),f=!r&&!s&&Jt(e),c=!r&&!s&&!f&&Zt(e),d=r||s||f||c,u=d?Pn(e.length,String):[],l=u.length;for(var o in e)(t||vo.call(e,o))&&!(d&&(o=="length"||f&&(o=="offset"||o=="parent")||c&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||qt(o,l)))&&u.push(o);return u}function ko(e,t){return function(r){return e(t(r))}}function xo(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var _o=Object.prototype,So=_o.hasOwnProperty;function Co(e){if(!D(e))return xo(e);var t=Vt(e),r=[];for(var s in e)s=="constructor"&&(t||!So.call(e,s))||r.push(s);return r}function er(e){return Ne(e)?wo(e,!0):Co(e)}var Oo=Be(Object,"create");const te=Oo;function Lo(){this.__data__=te?te(null):{},this.size=0}function To(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var jo="__lodash_hash_undefined__",Bo=Object.prototype,zo=Bo.hasOwnProperty;function No(e){var t=this.__data__;if(te){var r=t[e];return r===jo?void 0:r}return zo.call(t,e)?t[e]:void 0}var Po=Object.prototype,Do=Po.hasOwnProperty;function Eo(e){var t=this.__data__;return te?t[e]!==void 0:Do.call(t,e)}var Mo="__lodash_hash_undefined__";function Ao(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=te&&t===void 0?Mo:t,this}function I(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}I.prototype.clear=Lo;I.prototype.delete=To;I.prototype.get=No;I.prototype.has=Eo;I.prototype.set=Ao;function Fo(){this.__data__=[],this.size=0}function se(e,t){for(var r=e.length;r--;)if(le(e[r][0],t))return r;return-1}var Io=Array.prototype,Ro=Io.splice;function Yo(e){var t=this.__data__,r=se(t,e);if(r<0)return!1;var s=t.length-1;return r==s?t.pop():Ro.call(t,r,1),--this.size,!0}function Go(e){var t=this.__data__,r=se(t,e);return r<0?void 0:t[r][1]}function Uo(e){return se(this.__data__,e)>-1}function qo(e,t){var r=this.__data__,s=se(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this}function E(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}E.prototype.clear=Fo;E.prototype.delete=Yo;E.prototype.get=Go;E.prototype.has=Uo;E.prototype.set=qo;var Ho=Be(R,"Map");const tr=Ho;function Wo(){this.size=0,this.__data__={hash:new I,map:new(tr||E),string:new I}}function Vo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ue(e,t){var r=e.__data__;return Vo(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Xo(e){var t=ue(this,e).delete(e);return this.size-=t?1:0,t}function Qo(e){return ue(this,e).get(e)}function Jo(e){return ue(this,e).has(e)}function Ko(e,t){var r=ue(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this}function W(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}W.prototype.clear=Wo;W.prototype.delete=Xo;W.prototype.get=Qo;W.prototype.has=Jo;W.prototype.set=Ko;function Zo(e){return e==null?"":Ut(e)}var ei=ko(Object.getPrototypeOf,Object);const rr=ei;var ti="[object Object]",ri=Function.prototype,ni=Object.prototype,nr=ri.toString,oi=ni.hasOwnProperty,ii=nr.call(Object);function or(e){if(!Y(e)||re(e)!=ti)return!1;var t=rr(e);if(t===null)return!0;var r=oi.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&nr.call(r)==ii}var ai="Expected a function";function li(e,t){var r;if(typeof t!="function")throw new TypeError(ai);return e=Gr(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=void 0),r}}function si(){this.__data__=new E,this.size=0}function ui(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function di(e){return this.__data__.get(e)}function fi(e){return this.__data__.has(e)}var ci=200;function pi(e,t){var r=this.__data__;if(r instanceof E){var s=r.__data__;if(!tr||s.length<ci-1)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new W(s)}return r.set(e,t),this.size=r.size,this}function V(e){var t=this.__data__=new E(e);this.size=t.size}V.prototype.clear=si;V.prototype.delete=ui;V.prototype.get=di;V.prototype.has=fi;V.prototype.set=pi;var ir=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Je=ir&&typeof module=="object"&&module&&!module.nodeType&&module,$i=Je&&Je.exports===ir,Ke=$i?R.Buffer:void 0,Ze=Ke?Ke.allocUnsafe:void 0;function hi(e,t){if(t)return e.slice();var r=e.length,s=Ze?Ze(r):new e.constructor(r);return e.copy(s),s}var gi=R.Uint8Array;const et=gi;function yi(e){var t=new e.constructor(e.byteLength);return new et(t).set(new et(e)),t}function bi(e,t){var r=t?yi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function mi(e){return typeof e.constructor=="function"&&!Vt(e)?dn(rr(e)):{}}function vi(e){return function(t,r,s){for(var f=-1,c=Object(t),d=s(t),u=d.length;u--;){var l=d[e?u:++f];if(r(c[l],l,c)===!1)break}return t}}var wi=vi();const ki=wi;var xi=function(){return R.Date.now()};const pe=xi;var _i="Expected a function",Si=Math.max,Ci=Math.min;function Oi(e,t,r){var s,f,c,d,u,l,o=0,i=!1,a=!1,p=!0;if(typeof e!="function")throw new TypeError(_i);t=ye(t)||0,D(r)&&(i=!!r.leading,a="maxWait"in r,c=a?Si(ye(r.maxWait)||0,t):c,p="trailing"in r?!!r.trailing:p);function $(b){var P=s,Q=f;return s=f=void 0,o=b,d=e.apply(Q,P),d}function h(b){return o=b,u=setTimeout(N,t),i?$(b):d}function x(b){var P=b-l,Q=b-o,Me=t-P;return a?Ci(Me,c-Q):Me}function y(b){var P=b-l,Q=b-o;return l===void 0||P>=t||P<0||a&&Q>=c}function N(){var b=pe();if(y(b))return j(b);u=setTimeout(N,x(b))}function j(b){return u=void 0,p&&s?$(b):(s=f=void 0,d)}function X(){u!==void 0&&clearTimeout(u),o=0,s=l=f=u=void 0}function A(){return u===void 0?d:j(pe())}function F(){var b=pe(),P=y(b);if(s=arguments,f=this,l=b,P){if(u===void 0)return h(l);if(a)return clearTimeout(u),u=setTimeout(N,t),$(l)}return u===void 0&&(u=setTimeout(N,t)),d}return F.cancel=X,F.flush=A,F}function ve(e,t,r){(r!==void 0&&!le(e[t],r)||r===void 0&&!(t in e))&&ze(e,t,r)}function Li(e){return Y(e)&&Ne(e)}function we(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Ti(e){return Ln(e,er(e))}function ji(e,t,r,s,f,c,d){var u=we(e,r),l=we(t,r),o=d.get(l);if(o){ve(e,r,o);return}var i=c?c(u,l,r+"",e,t,d):void 0,a=i===void 0;if(a){var p=ie(l),$=!p&&Jt(l),h=!p&&!$&&Zt(l);i=l,p||$||h?ie(u)?i=u:Li(u)?i=cn(u):$?(a=!1,i=hi(l,!0)):h?(a=!1,i=bi(l,!0)):i=[]:or(l)||me(l)?(i=u,me(u)?i=Ti(u):(!D(u)||je(u))&&(i=mi(l))):a=!1}a&&(d.set(l,i),f(i,l,s,c,d),d.delete(l)),ve(e,r,i)}function ar(e,t,r,s,f){e!==t&&ki(t,function(c,d){if(f||(f=new V),D(c))ji(e,t,d,r,ar,s,f);else{var u=s?s(we(e,d),c,d+"",e,t,f):void 0;u===void 0&&(u=c),ve(e,d,u)}},er)}function tt(e){return Y(e)&&e.nodeType===1&&!or(e)}function Bi(e,t){for(var r,s=-1,f=e.length;++s<f;){var c=t(e[s]);c!==void 0&&(r=r===void 0?c:r+c)}return r}var zi=zn(function(e,t,r){ar(e,t,r)});const lr=zi;function Ni(e){return li(2,e)}var Pi=Math.floor,Di=Math.random;function Ei(e,t){return e+Pi(Di()*(t-e+1))}var Mi=parseFloat,Ai=Math.min,Fi=Math.random;function rt(e,t,r){if(r&&typeof r!="boolean"&&Wt(e,t,r)&&(t=r=void 0),r===void 0&&(typeof t=="boolean"?(r=t,t=void 0):typeof e=="boolean"&&(r=e,e=void 0)),e===void 0&&t===void 0?(e=0,t=1):(e=be(e),t===void 0?(t=e,e=0):t=be(t)),e>t){var s=e;e=t,t=s}if(r||e%1||t%1){var f=Fi();return Ai(e+f*(t-e+Mi("1e-"+((f+"").length-1))),t)}return Ei(e,t)}function nt(e){return e&&e.length?Bi(e,Te):0}var Ii=0;function sr(e){var t=++Ii;return Zo(e)+t}function Ri(e){const t=`[DataV - ${e}]`;return{info(...r){console.log(`${t} ${r.join(" ")}`)},warn(...r){console.warn(`${t} ${r.join(" ")}`)},error(...r){console.error(`${t} ${r.join(" ")}`)}}}const ke=Ri("useResize");function Yi(e,t){const r=new MutationObserver(t);return r.observe(e,{attributes:!0,attributeFilter:["class","style"],attributeOldValue:!0}),r}function Gi(e,t){const{clientWidth:r=0,clientHeight:s=0}=e||{};e?(!r||!s)&&ke.warn("Component width or height is 0px, rendering abnormality may occur!"):ke.warn("Failed to get dom node, component rendering may be abnormal!"),t.width=r,t.height=s}function Ui(e){return tt(e)?e:tt(e.$el)?e.$el:null}function k(){const e=hr(),t=[],r=At({width:0,height:0}),s=()=>{Gi(e.value,r)},f=Oi(s,100),c=Ni(d=>{const u=Ui(d);if(!u){ke.error("Bind Component Dom Ref Failed!");return}e.value=u});return Ft(()=>{s();const d=Yi(e.value,f);window.addEventListener("resize",f),t.push(()=>{d.disconnect()},()=>{window.removeEventListener("resize",f)})}),It(()=>{t.forEach(d=>d())}),{domSize:r,autoBindRef:c,refreshLayoutSize:s}}function v(e){const t=e;return t.install=function(r){r.component(t.displayName||t.name,e)},e}const ur=e=>e,qi=(e,t)=>{const r=Math.abs(e[0]-t[0]),s=Math.abs(e[1]-t[1]);return Math.sqrt(Math.pow(r,2)+Math.pow(s,2))};function B(e,t=[]){return lr(e,t)}function C(){return{color:{type:ur(Array),default:()=>[]},backgroundColor:{type:String,default:"transparent"}}}function O(e,t=[]){return lr(e,t)}function Hi(e){let t=e;const r={},s=a=>{var p;return(p=r[a])!=null?p:0},f=a=>{var p;r[a]=((p=r[a])!=null?p:0)+1},c=a=>{let p=r[a]-1;p<=0&&(p=0),r[a]=p},d=a=>{t=a},u=(a,p=!0)=>`${p?".":""}${t||""}${a}`,l=a=>u(a,!1),o=(a,p)=>{const $=u(p);return`.__STYLED__ {${a.toString()}}`.replaceAll(".__STYLED__",$)};function i(a){return p=>{const $=document.createElement("style"),h=y=>{$.innerHTML=o(p,y),document.querySelector("head").appendChild($)},x=()=>document.querySelector("head").removeChild($);return y=>{const N=a,j=sr("style");return m({setup(X,{slots:A}){Ft(()=>{s(j)===0&&h(y),f(j)}),It(()=>{c(j),s(j)===0&&x()});const F=u(y,!1);return()=>n(N,gr(X,{class:F}),{default:()=>{var b;return[(b=A==null?void 0:A.default)==null?void 0:b.call(A)]}})}})}}}return i.setClassNamePrefix=d,i.getClassNameForBind=l,i.span=i((a,{slots:p})=>n("span",a,[p==null?void 0:p.default()])),i.div=i((a,{slots:p})=>n("div",a,[p==null?void 0:p.default()])),i.img=i(a=>n("img",a,null)),i.svg=i((a,{slots:p})=>n("svg",a,[p==null?void 0:p.default()])),i}const Wi="dv-",g=Hi(Wi),Vi=g.setClassNamePrefix,L=g.div`
  position: relative;
  width: 100%;
  height: 100%;
`("border-box"),T=g.div`
  position: relative;
  width: 100%;
  height: 100%;
`("border-box-content"),Xi=["#4fd2dd","#235fa7"],Qi=["left-top","right-top","left-bottom","right-bottom"],ot=g.svg`
  position: absolute;
  display: block;
}
.__STYLED__.right-top {
  right: 0px;
  transform: rotateY(180deg);
}
.__STYLED__.left-bottom {
  bottom: 0px;
  transform: rotateX(180deg);
}
.__STYLED__.right-bottom {
  right: 0px;
  bottom: 0px;
  transform: rotateX(180deg) rotateY(180deg);
`("border"),Ji=v(m({name:"BorderBox1",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u}=e,{width:l,height:o}=c,i=O(Xi,d);return n(L,{class:g.getClassNameForBind("border-box-1"),ref:s},{default:()=>[n(ot,{width:l,height:o},{default:()=>[n("polygon",{fill:u,points:`10, 27 10, ${o-27} 13, ${o-24} 13, ${o-21} 24, ${o-11} 38, ${o-11}
                41, ${o-8} 73, ${o-8} 75, ${o-10} 81, ${o-10} 85, ${o-6}
                ${l-85}, ${o-6} ${l-81}, ${o-10} ${l-75}, ${o-10}
                ${l-73}, ${o-8} ${l-41}, ${o-8} ${l-38}, ${o-11}
                ${l-24}, ${o-11} ${l-13}, ${o-21} ${l-13}, ${o-24}
                ${l-10}, ${o-27} ${l-10}, 27 ${l-13}, 25 ${l-13}, 21
                ${l-24}, 11 ${l-38}, 11 ${l-41}, 8 ${l-73}, 8 ${l-75}, 10
                ${l-81}, 10 ${l-85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`},null)]}),Qi.map(a=>n(ot,{key:a,width:"150",height:"150",class:a},{default:()=>[n("polygon",{fill:i[0],points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"},[n("animate",{attributeName:"fill",values:`${i[0]};${i[1]};${i[0]}`,dur:"0.5s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{fill:i[1],points:"27.6,4.8 38.4,4.8 35.4,7.8 30.6,7.8"},[n("animate",{attributeName:"fill",values:`${i[1]};${i[0]};${i[1]}`,dur:"0.5s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{fill:i[0],points:"9,54 9,63 7.2,66 7.2,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"},[n("animate",{attributeName:"fill",values:`${i[0]};${i[1]};transparent`,dur:"1s",begin:"0s",repeatCount:"indefinite"},null)])]})),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}})),Ki=["#1d48c4","#d3e1f8"],Zi=["left-top","right-top","left-bottom","right-bottom"],it=g.svg`
  position: absolute;
  display: block;
}
.__STYLED__.right-top {
  right: 0px;
  transform: rotateY(180deg);
}
.__STYLED__.left-bottom {
  bottom: 0px;
  transform: rotateX(180deg);
}
.__STYLED__.right-bottom {
  right: 0px;
  bottom: 0px;
  transform: rotateX(180deg) rotateY(180deg);
`("border-svg-container"),ea=v(m({name:"BorderBox10",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{width:d,height:u}=c,{backgroundColor:l,color:o}=e,i=O(Ki,o);return n(L,{class:g.getClassNameForBind("border-box-10"),ref:s,style:{boxShadow:`inset 0 0 25px 3px ${i[0]}`}},{default:()=>[n(it,{width:d,height:u},{default:()=>[n("polygon",{fill:l,points:`
                  4, 0 ${d-4}, 0 ${d}, 4 ${d}, ${u-4} ${d-4}, ${u}
                  4, ${u} 0, ${u-4} 0, 4
                `},null)]}),Zi.map(a=>n(it,{width:"150px",height:"150px",key:a,class:a},{default:()=>[n("polygon",{fill:i[1],points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"},null)]})),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}}));var dr=(e=>(e.transparent="rgba(0,0,0,0)",e.black="#000000",e.silver="#C0C0C0",e.gray="#808080",e.white="#FFFFFF",e.maroon="#800000",e.red="#FF0000",e.purple="#800080",e.fuchsia="#FF00FF",e.green="#008000",e.lime="#00FF00",e.olive="#808000",e.yellow="#FFFF00",e.navy="#000080",e.blue="#0000FF",e.teal="#008080",e.aqua="#00FFFF",e.aliceblue="#f0f8ff",e.antiquewhite="#faebd7",e.aquamarine="#7fffd4",e.azure="#f0ffff",e.beige="#f5f5dc",e.bisque="#ffe4c4",e.blanchedalmond="#ffebcd",e.blueviolet="#8a2be2",e.brown="#a52a2a",e.burlywood="#deb887",e.cadetblue="#5f9ea0",e.chartreuse="#7fff00",e.chocolate="#d2691e",e.coral="#ff7f50",e.cornflowerblue="#6495ed",e.cornsilk="#fff8dc",e.crimson="#dc143c",e.cyan="#00ffff",e.darkblue="#00008b",e.darkcyan="#008b8b",e.darkgoldenrod="#b8860b",e.darkgray="#a9a9a9",e.darkgreen="#006400",e.darkgrey="#a9a9a9",e.darkkhaki="#bdb76b",e.darkmagenta="#8b008b",e.darkolivegreen="#556b2f",e.darkorange="#ff8c00",e.darkorchid="#9932cc",e.darkred="#8b0000",e.darksalmon="#e9967a",e.darkseagreen="#8fbc8f",e.darkslateblue="#483d8b",e.darkslategray="#2f4f4f",e.darkslategrey="#2f4f4f",e.darkturquoise="#00ced1",e.darkviolet="#9400d3",e.deeppink="#ff1493",e.deepskyblue="#00bfff",e.dimgray="#696969",e.dimgrey="#696969",e.dodgerblue="#1e90ff",e.firebrick="#b22222",e.floralwhite="#fffaf0",e.forestgreen="#228b22",e.gainsboro="#dcdcdc",e.ghostwhite="#f8f8ff",e.gold="#ffd700",e.goldenrod="#daa520",e.greenyellow="#adff2f",e.grey="#808080",e.honeydew="#f0fff0",e.hotpink="#ff69b4",e.indianred="#cd5c5c",e.indigo="#4b0082",e.ivory="#fffff0",e.khaki="#f0e68c",e.lavender="#e6e6fa",e.lavenderblush="#fff0f5",e.lawngreen="#7cfc00",e.lemonchiffon="#fffacd",e.lightblue="#add8e6",e.lightcoral="#f08080",e.lightcyan="#e0ffff",e.lightgoldenrodyellow="#fafad2",e.lightgray="#d3d3d3",e.lightgreen="#90ee90",e.lightgrey="#d3d3d3",e.lightpink="#ffb6c1",e.lightsalmon="#ffa07a",e.lightseagreen="#20b2aa",e.lightskyblue="#87cefa",e.lightslategray="#778899",e.lightslategrey="#778899",e.lightsteelblue="#b0c4de",e.lightyellow="#ffffe0",e.limegreen="#32cd32",e.linen="#faf0e6",e.magenta="#ff00ff",e.mediumaquamarine="#66cdaa",e.mediumblue="#0000cd",e.mediumorchid="#ba55d3",e.mediumpurple="#9370db",e.mediumseagreen="#3cb371",e.mediumslateblue="#7b68ee",e.mediumspringgreen="#00fa9a",e.mediumturquoise="#48d1cc",e.mediumvioletred="#c71585",e.midnightblue="#191970",e.mintcream="#f5fffa",e.mistyrose="#ffe4e1",e.moccasin="#ffe4b5",e.navajowhite="#ffdead",e.oldlace="#fdf5e6",e.olivedrab="#6b8e23",e.orange="#ffa500",e.orangered="#ff4500",e.orchid="#da70d6",e.palegoldenrod="#eee8aa",e.palegreen="#98fb98",e.paleturquoise="#afeeee",e.palevioletred="#db7093",e.papayawhip="#ffefd5",e.peachpuff="#ffdab9",e.peru="#cd853f",e.pink="#ffc0cb",e.plum="#dda0dd",e.powderblue="#b0e0e6",e.rosybrown="#bc8f8f",e.royalblue="#4169e1",e.saddlebrown="#8b4513",e.salmon="#fa8072",e.sandybrown="#f4a460",e.seagreen="#2e8b57",e.seashell="#fff5ee",e.sienna="#a0522d",e.skyblue="#87ceeb",e.slateblue="#6a5acd",e.slategray="#708090",e.snow="#fffafa",e.springgreen="#00ff7f",e.steelblue="#4682b4",e.tan="#d2b48c",e.thistle="#d8bfd8",e.tomato="#ff6347",e.turquoise="#40e0d0",e.violet="#ee82ee",e.wheat="#f5deb3",e.whitesmoke="#f5f5f5",e.yellowgreen="#9acd32",e))(dr||{});function fr(e){return typeof e!="string"?!1:(e=e.toLowerCase(),/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))}function ta(e){return/^(rgb|rgba|RGB|RGBA)/.test(e)}function ra(e){return dr[e]}function na(e){if(fr(e)||ta(e))return e;const t=ra(e);if(!t)throw new Error(`Color: Invalid Input of ${e}`);return t}function oa(e){e=e.replace("#",""),e.length===3&&(e=Array.from(e).map(r=>r+r).join(""));const t=e.split("");return new Array(3).fill(0).map((r,s)=>parseInt(`0x${t[s*2]}${t[s*2+1]}`))}function ia(e){return e.replace(/rgb\(|rgba\(|\)/g,"").split(",").slice(0,3).map(t=>parseInt(t))}function aa(e){const t=na(e).toLowerCase();return fr(t)?oa(t):ia(t)}function la(e){if(!Array.isArray(e))throw new Error(`getColorFromRgbValue: ${e} is not an array`);const{length:t}=e;if(t!==3&&t!==4)throw new Error("getColorFromRgbValue: value length should be 3 or 4");return(t===3?"rgb(":"rgba(")+e.join(",")+")"}function _(e,t=100){const r=aa(e);return la([...r,t/100])}function G(){return yr(At({id:sr("datav_uuid")}))}var sa=Object.defineProperty,ua=Object.defineProperties,da=Object.getOwnPropertyDescriptors,at=Object.getOwnPropertySymbols,fa=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable,lt=(e,t,r)=>t in e?sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pa=(e,t)=>{for(var r in t||(t={}))fa.call(t,r)&&lt(e,r,t[r]);if(at)for(var r of at(t))ca.call(t,r)&&lt(e,r,t[r]);return e},$a=(e,t)=>ua(e,da(t));const st=["#8aaafb","#1f33a2"],ha=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-width: 1;
`("border-svg-container"),ga=()=>$a(pa({},C()),{titleWidth:{type:Number,default:250},title:{type:String,default:""}}),ya=v(m({name:"BorderBox11",props:ga(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();r({refreshLayoutSize:f});const d=G();return()=>{const{color:u,backgroundColor:l,titleWidth:o,title:i}=e,{width:a,height:p}=c,$=O(st,u),h=`border-box-11-filterId-${d}`;return n(L,{class:g.getClassNameForBind("border-box-11"),ref:s},{default:()=>[n(ha,{width:a,height:p},{default:()=>[n("defs",null,[n("filter",{id:h,height:"150%",width:"150%",x:"-25%",y:"-25%"},[n("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null),n("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null),n("feFlood",{"flood-color":$[1],result:"glowColor"},null),n("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null),n("feMerge",null,[n("feMergeNode",{in:"softGlowColored"},null),n("feMergeNode",{in:"SourceGraphic"},null)])])]),n("polygon",{fill:l,points:`
                  20, 32 ${a*.5-o/2}, 32 ${a*.5-o/2+20}, 53
                  ${a*.5+o/2-20}, 53 ${a*.5+o/2}, 32
                  ${a-20}, 32 ${a-8}, 48 ${a-8}, ${p-25} ${a-20}, ${p-8}
                  20, ${p-8} 8, ${p-25} 8, 50
                `},null),n("polyline",{stroke:$[0],filter:`url(#${h})`,points:`
                  ${(a-o)/2}, 30
                  20, 30 7, 50 7, ${50+(p-167)/2}
                  13, ${55+(p-167)/2} 13, ${135+(p-167)/2}
                  7, ${140+(p-167)/2} 7, ${p-27}
                  20, ${p-7} ${a-20}, ${p-7} ${a-7}, ${p-27}
                  ${a-7}, ${140+(p-167)/2} ${a-13}, ${135+(p-167)/2}
                  ${a-13}, ${55+(p-167)/2} ${a-7}, ${50+(p-167)/2}
                  ${a-7}, 50 ${a-20}, 30 ${(a+o)/2}, 30
                  ${(a+o)/2-20}, 7 ${(a-o)/2+20}, 7
                  ${(a-o)/2}, 30 ${(a-o)/2+20}, 52
                  ${(a+o)/2-20}, 52 ${(a+o)/2}, 30
                `},null),n("polygon",{stroke:$[0],fill:"transparent",points:`
                  ${(a+o)/2-5}, 30 ${(a+o)/2-21}, 11
                  ${(a+o)/2-27}, 11 ${(a+o)/2-8}, 34
                `},null),n("polygon",{stroke:$[0],fill:"transparent",points:`
                  ${(a-o)/2+5}, 30 ${(a-o)/2+22}, 49
                  ${(a-o)/2+28}, 49 ${(a-o)/2+8}, 26
                `},null),n("polygon",{stroke:$[0],fill:_($[1]||st[1],30),filter:`url(#${h})`,points:`
                  ${(a+o)/2-11}, 37 ${(a+o)/2-32}, 11
                  ${(a-o)/2+23}, 11 ${(a-o)/2+11}, 23
                  ${(a-o)/2+33}, 49 ${(a+o)/2-22}, 49
                `},null),n("polygon",{filter:`url(#${h})`,fill:$[0],opacity:"1",points:`
                  ${(a-o)/2-10}, 37 ${(a-o)/2-31}, 37
                  ${(a-o)/2-25}, 46 ${(a-o)/2-4}, 46
                `},[n("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{filter:`url(#${h})`,fill:$[0],opacity:"0.7",points:`
                  ${(a-o)/2-40}, 37 ${(a-o)/2-61}, 37
                  ${(a-o)/2-55}, 46 ${(a-o)/2-34}, 46
                `},[n("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{filter:`url(#${h})`,fill:$[0],opacity:"0.5",points:`
                  ${(a-o)/2-70}, 37 ${(a-o)/2-91}, 37
                  ${(a-o)/2-85}, 46 ${(a-o)/2-64}, 46
                `},[n("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{filter:`url(#${h})`,fill:$[0],opacity:"1",points:`
                  ${(a+o)/2+30}, 37 ${(a+o)/2+9}, 37
                  ${(a+o)/2+3}, 46 ${(a+o)/2+24}, 46
                `},[n("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{filter:`url(#${h})`,fill:$[0],opacity:"0.7",points:`
                  ${(a+o)/2+60}, 37 ${(a+o)/2+39}, 37
                  ${(a+o)/2+33}, 46 ${(a+o)/2+54}, 46
                `},[n("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null)]),n("polygon",{filter:`url(#${h})`,fill:$[0],opacity:"0.5",points:`
                  ${(a+o)/2+90}, 37 ${(a+o)/2+69}, 37
                  ${(a+o)/2+63}, 46 ${(a+o)/2+84}, 46
                `},[n("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null)]),n("text",{class:"dv-border-box-11-title",x:`${a/2}`,y:"32",fill:"#fff","font-size":"18","text-anchor":"middle","dominant-baseline":"middle"},[i]),n("polygon",{fill:$[0],filter:`url(#${h})`,points:`
                  7, ${53+(p-167)/2} 11, ${57+(p-167)/2}
                  11, ${133+(p-167)/2} 7, ${137+(p-167)/2}
                `},null),n("polygon",{fill:$[0],filter:`url(#${h})`,points:`
                  ${a-7}, ${53+(p-167)/2} ${a-11}, ${57+(p-167)/2}
                  ${a-11}, ${133+(p-167)/2} ${a-7}, ${137+(p-167)/2}
                `},null)]}),n(T,null,{default:()=>{var x;return[(x=t.default)==null?void 0:x.call(t)]}})]})}}})),K=["#2e6099","#7ce7fd"],ba=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`("border-svg-container"),ma=v(m({name:"BorderBox12",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();r({refreshLayoutSize:f});const d=G();return()=>{const{color:u,backgroundColor:l}=e,{width:o,height:i}=c,a=O(K,u),p=`border-box-12-filterId-${d}`;return n(L,{class:g.getClassNameForBind("border-box-12"),ref:s},{default:()=>[n(ba,{width:o,height:i},{default:()=>[n("defs",null,[n("filter",{id:p,height:"150%",width:"150%",x:"-25%",y:"-25%"},[n("feMorphology",{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"},null),n("feGaussianBlur",{in:"thicken",stdDeviation:"2",result:"blurred"},null),n("feFlood",{"flood-color":_(a[1]||K[1],70),result:"glowColor"},[n("animate",{attributeName:"flood-color",values:`
                        ${_(a[1]||K[1],70)};
                        ${_(a[1]||K[1],30)};
                        ${_(a[1]||K[1],70)};
                      `,dur:"3s",begin:"0s",repeatCount:"indefinite"},null)]),n("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null),n("feMerge",null,[n("feMergeNode",{in:"softGlowColored"},null),n("feMergeNode",{in:"SourceGraphic"},null)])])]),o&&i&&n("path",{fill:l,"stroke-width":"2",stroke:a[0],d:`
                    M15 5 L ${o-15} 5 Q ${o-5} 5, ${o-5} 15
                    L ${o-5} ${i-15} Q ${o-5} ${i-5}, ${o-15} ${i-5}
                    L 15, ${i-5} Q 5 ${i-5} 5 ${i-15} L 5 15
                    Q 5 5 15 5
                  `},null),n("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${p})`,stroke:a[1],d:"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"},null),n("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${p})`,stroke:a[1],d:`M ${o-20} 5 L ${o-15} 5 Q ${o-5} 5 ${o-5} 15 L ${o-5} 20`},null),n("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${p})`,stroke:a[1],d:`
                  M ${o-20} ${i-5} L ${o-15} ${i-5}
                  Q ${o-5} ${i-5} ${o-5} ${i-15}
                  L ${o-5} ${i-20}
                `},null),n("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${p})`,stroke:a[1],d:`
                  M 20 ${i-5} L 15 ${i-5}
                  Q 5 ${i-5} 5 ${i-15}
                  L 5 ${i-20}
                `},null)]}),n(T,null,{default:()=>{var $;return[($=t.default)==null?void 0:$.call(t)]}})]})}}})),va=["#6586ec","#2cf7fe"],wa=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`("border-svg-container"),ka=v(m({name:"BorderBox13",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u}=e,{width:l,height:o}=c,i=O(va,d);return n(L,{class:g.getClassNameForBind("border-box-13"),ref:s},{default:()=>[n(wa,{width:l,height:o},{default:()=>[n("path",{fill:u,stroke:i[0],d:`
                  M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                  L ${l-20} 10 L ${l-5} 25
                  L ${l-5} ${o-5} L 20 ${o-5}
                  L 5 ${o-20} L 5 20
                `},null),n("path",{fill:"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:i[0],d:"M 16 9 L 61 9"},null),n("path",{fill:"transparent",stroke:i[1],d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null),n("path",{fill:"transparent",stroke:i[1],d:`M ${l-5} ${o-30} L ${l-5} ${o-5} L ${l-30} ${o-5}`},null)]}),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}})),xa=["#fff","rgba(255, 255, 255, 0.6)"],_a=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-width: 1;
`("border-svg-container"),Sa=v(m({name:"BorderBox2",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u}=e,{width:l,height:o}=c,i=O(xa,d);return n(L,{class:g.getClassNameForBind("border-box-2"),ref:s},{default:()=>[n(_a,{width:l,height:o},{default:()=>[n("polygon",{fill:u,points:`7, 7 ${l-7}, 7 ${l-7}, ${o-7} 7, ${o-7}`},null),n("polyline",{stroke:i[0],points:`2, 2 ${l-2} ,2 ${l-2}, ${o-2} 2, ${o-2} 2, 2`},null),n("polyline",{stroke:i[1],points:`6, 6 ${l-6}, 6 ${l-6}, ${o-6} 6, ${o-6} 6, 6`},null),n("circle",{fill:i[0],cx:"11",cy:"11",r:"1"},null),n("circle",{fill:i[0],cx:l-11,cy:"11",r:"1"},null),n("circle",{fill:i[0],cx:l-11,cy:o-11,r:"1"},null),n("circle",{fill:i[0],cx:"11",cy:o-11,r:"1"},null)]}),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}})),Ca=["#2862b7","#2862b7"],Oa=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
}
.__STYLED__ .stroke-width-1 {
  stroke-width: 1;
}
.__STYLED__ .stroke-width-3 {
  stroke-width: 3;
`("border-svg-container"),La=v(m({name:"BorderBox3",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u}=e,{width:l,height:o}=c,i=O(Ca,d);return n(L,{class:g.getClassNameForBind("border-box-3"),ref:s},{default:()=>[n(Oa,{width:l,height:o},{default:()=>[n("polygon",{fill:u,points:`23, 23 ${l-24}, 23 ${l-24}, ${o-24} 23, ${o-24}`},null),n("polyline",{class:"stroke-width-3",stroke:i[0],points:`4, 4 ${l-22} ,4 ${l-22}, ${o-22} 4, ${o-22} 4, 4`},null),n("polyline",{class:"stroke-width-1",stroke:i[1],points:`10, 10 ${l-16}, 10 ${l-16}, ${o-16} 10, ${o-16} 10, 10`},null),n("polyline",{class:"stroke-width-1",stroke:i[1],points:`16, 16 ${l-10}, 16 ${l-10}, ${o-10} 16, ${o-10} 16, 16`},null),n("polyline",{class:"stroke-width-1",stroke:i[1],points:`22, 22 ${l-4}, 22 ${l-4}, ${o-4} 22, ${o-4} 22, 22`},null)]}),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}}));var Ta=Object.defineProperty,ja=Object.defineProperties,Ba=Object.getOwnPropertyDescriptors,ut=Object.getOwnPropertySymbols,za=Object.prototype.hasOwnProperty,Na=Object.prototype.propertyIsEnumerable,dt=(e,t,r)=>t in e?Ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pa=(e,t)=>{for(var r in t||(t={}))za.call(t,r)&&dt(e,r,t[r]);if(ut)for(var r of ut(t))Na.call(t,r)&&dt(e,r,t[r]);return e},Da=(e,t)=>ja(e,Ba(t));const Ea=["red","rgba(0,0,255,0.8)"],Ma=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
}
.__STYLED__.reverse {
  transform: rotate(180deg);
}
.__STYLED__ .stroke-width1 {
  stroke-width: 1;
}
.__STYLED__ .stroke-width3 {
  stroke-width: 3px;
  stroke-linecap: round;
`("border-svg-container"),Aa=()=>Da(Pa({},C()),{reverse:{type:Boolean,default:!1}}),Fa=v(m({name:"BorderBox4",props:Aa(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u,reverse:l}=e,{width:o,height:i}=c,a=O(Ea,d);return n(L,{class:g.getClassNameForBind("border-box-4"),ref:s},{default:()=>[n(Ma,{class:Le({reverse:l}),width:o,height:i},{default:()=>[n("polygon",{fill:u,points:`${o-15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                16, 42 16, ${i-32} 41, ${i-7} ${o-15}, ${i-7}`},null),n("polyline",{class:"stroke-width1",stroke:a[0],points:`145, ${i-5} 40, ${i-5} 10, ${i-35} 10, 40 40, 5 150, 5 170, 20 ${o-15}, 20`},null),n("polyline",{stroke:a[1],class:"stroke-width1",points:`245, ${i-1} 36, ${i-1} 14, ${i-23} 14, ${i-100}`},null),n("polyline",{class:"stroke-width3",stroke:a[0],points:`7, ${i-40} 7, ${i-75}`},null),n("polyline",{class:"stroke-width3",stroke:a[0],points:"28, 24 13, 41 13, 64"},null),n("polyline",{class:"stroke-width1",stroke:a[0],points:"5, 45 5, 140"},null),n("polyline",{class:"stroke-width1",stroke:a[1],points:"14, 75 14, 180"},null),n("polyline",{class:"stroke-width1",stroke:a[1],points:"55, 11 147, 11 167, 26 250, 26"},null),n("polyline",{class:"stroke-width3",stroke:a[1],points:"158, 5 173, 16"},null),n("polyline",{class:"stroke-width3",style:{strokeDasharray:"100 250"},stroke:a[0],points:`200, 17 ${o-10}, 17`},null),n("polyline",{class:"stroke-width1",style:{strokeDasharray:"80 270"},stroke:a[1],points:`385, 17 ${o-10}, 17`},null)]}),n(T,null,{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t)]}})]})}}}));var Ia=Object.defineProperty,Ra=Object.defineProperties,Ya=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertySymbols,Ga=Object.prototype.hasOwnProperty,Ua=Object.prototype.propertyIsEnumerable,ct=(e,t,r)=>t in e?Ia(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qa=(e,t)=>{for(var r in t||(t={}))Ga.call(t,r)&&ct(e,r,t[r]);if(ft)for(var r of ft(t))Ua.call(t,r)&&ct(e,r,t[r]);return e},Ha=(e,t)=>Ra(e,Ya(t));const Wa=["rgba(255, 255, 255, 0.35)","rgba(255, 255, 255, 0.20)"],Va=g.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.__STYLED__ > polyline {
  fill: none;
}
.__STYLED__.reverse {
  transform: rotate(180deg);
}
.__STYLED__ .stroke-width1 {
  stroke-width: 1;
}
.__STYLED__ .stroke-width2 {
  stroke-width: 2px;
}
.__STYLED__ .stroke-width5 {
  stroke-width: 5px;
`("border-svg-container"),Xa=()=>Ha(qa({},C()),{reverse:{type:Boolean,default:!1}}),Qa=v(m({name:"BorderBox5",props:Xa(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u,reverse:l}=e,{width:o,height:i}=c,a=O(Wa,d);return n(L,{class:g.getClassNameForBind("border-box-5"),ref:s},{default:()=>[n(Va,{class:Le({reverse:l}),width:o,height:i},{default:()=>[n("polygon",{fill:u,points:`
                  10, 22 ${o-22}, 22 ${o-22}, ${i-86} ${o-84}, ${i-24} 10, ${i-24}`},null),n("polyline",{class:"stroke-width1",stroke:a[0],points:`8, 5 ${o-5}, 5 ${o-5}, ${i-100}
                  ${o-100}, ${i-5} 8, ${i-5} 8, 5`},null),n("polyline",{class:"stroke-width1",stroke:a[1],points:`3, 5 ${o-20}, 5 ${o-20}, ${i-60}
                  ${o-74}, ${i-5} 3, ${i-5} 3, 5`},null),n("polyline",{class:"stroke-width5",stroke:a[1],points:`50, 13 ${o-35}, 13`},null),n("polyline",{class:"stroke-width2",stroke:a[1],points:`15, 20 ${o-35}, 20`},null),n("polyline",{class:"stroke-width2",stroke:a[1],points:`15, ${i-20} ${o-110}, ${i-20}`},null),n("polyline",{class:"stroke-width5",stroke:a[1],points:`15, ${i-13} ${o-110}, ${i-13}`},null)]}),n(T,null,{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t)]}})]})}}})),Ja=["rgba(255, 255, 255, 0.35)","gray"],Ka=g.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-width: 1;
`("border-svg-container"),Za=v(m({name:"BorderBox6",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u}=e,{width:l,height:o}=c,i=O(Ja,d);return n(L,{class:g.getClassNameForBind("border-box-6"),ref:s},{default:()=>[n(Ka,{width:l,height:o},{default:()=>[n("polygon",{fill:u,points:`
              9, 7 ${l-9}, 7 ${l-9}, ${o-7} 9, ${o-7}`},null),n("circle",{fill:i[1],cx:"5",cy:"5",r:"2"},null),n("circle",{fill:i[1],cx:l-5,cy:"5",r:"2"},null),n("circle",{fill:i[1],cx:l-5,cy:o-5,r:"2"},null),n("circle",{fill:i[1],cx:"5",cy:o-5,r:"2"},null),n("polyline",{stroke:i[0],points:`10, 4 ${l-10}, 4`},null),n("polyline",{stroke:i[0],points:`10, ${o-4} ${l-10}, ${o-4}`},null),n("polyline",{stroke:i[0],points:`5, 70 5, ${o-70}`},null),n("polyline",{stroke:i[0],points:`${l-5}, 70 ${l-5}, ${o-70}`},null),n("polyline",{stroke:i[0],points:"3, 10, 3, 50"},null),n("polyline",{stroke:i[0],points:"7, 30 7, 80"},null),n("polyline",{stroke:i[0],points:`${l-3}, 10 ${l-3}, 50`},null),n("polyline",{stroke:i[0],points:`${l-7}, 30 ${l-7}, 80`},null),n("polyline",{stroke:i[0],points:`3, ${o-10} 3, ${o-50}`},null),n("polyline",{stroke:i[0],points:`7, ${o-30} 7, ${o-80}`},null),n("polyline",{stroke:i[0],points:`${l-3}, ${o-10} ${l-3}, ${o-50}`},null),n("polyline",{stroke:i[0],points:`${l-7}, ${o-30} ${l-7}, ${o-80}`},null)]}),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}})),el=["rgba(128,128,128,0.3)","rgba(128,128,128,0.5)"],tl=g.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-linecap: round;
}
.__STYLED__ .stroke-width2 {
  stroke-width: 2px;
}
.__STYLED__ .stroke-width5 {
  stroke-width: 5px;
`("border-svg-container"),rl=v(m({name:"BorderBox7",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{color:d,backgroundColor:u}=e,{width:l,height:o}=c,i=O(el,d);return n(L,{class:g.getClassNameForBind("border-box-7"),ref:s,style:{boxShadow:`inset 0 0 40px ${i[0]}`,border:`1px solid ${i[0]}`,backgroundColor:u}},{default:()=>[n(tl,{width:l,height:o},{default:()=>[n("polyline",{class:"stroke-width2",stroke:i[0],points:"0, 25 0, 0 25, 0"},null),n("polyline",{class:"stroke-width2",stroke:i[0],points:`${l-25}, 0 ${l}, 0 ${l}, 25`},null),n("polyline",{class:"stroke-width2",stroke:i[0],points:`${l-25}, ${o} ${l}, ${o} ${l}, ${o-25}`},null),n("polyline",{class:"stroke-width2",stroke:i[0],points:`0, ${o-25} 0, ${o} 25, ${o}`},null),n("polyline",{class:"stroke-width5",stroke:i[1],points:"0, 10 0, 0 10, 0"},null),n("polyline",{class:"stroke-width5",stroke:i[1],points:`${l-10}, 0 ${l}, 0 ${l}, 10`},null),n("polyline",{class:"stroke-width5",stroke:i[1],points:`${l-10}, ${o} ${l}, ${o} ${l}, ${o-10}`},null),n("polyline",{class:"stroke-width5",stroke:i[1],points:`0, ${o-10} 0, ${o} 10, ${o}`},null)]}),n(T,null,{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})]})}}}));var nl=Object.defineProperty,ol=Object.defineProperties,il=Object.getOwnPropertyDescriptors,pt=Object.getOwnPropertySymbols,al=Object.prototype.hasOwnProperty,ll=Object.prototype.propertyIsEnumerable,$t=(e,t,r)=>t in e?nl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sl=(e,t)=>{for(var r in t||(t={}))al.call(t,r)&&$t(e,r,t[r]);if(pt)for(var r of pt(t))ll.call(t,r)&&$t(e,r,t[r]);return e},ul=(e,t)=>ol(e,il(t));const dl=["#235fa7","#4fd2dd"],fl=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
`("border-svg-container"),cl=()=>ul(sl({},C()),{duration:{type:Number,default:3},reverse:{type:Boolean,default:!1}}),pl=v(m({name:"BorderBox8",props:cl(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();r({refreshLayoutSize:f});const d=G();return()=>{const{color:u,backgroundColor:l,duration:o,reverse:i}=e,{width:a,height:p}=c,$=O(dl,u),h=`border-box-8-path-${d.id}`,x=`border-box-8-gradient-${d.id}`,y=`border-box-8-mask-${d.id}`,N=i?`M 2.5, 2.5 L 2.5, ${p-2.5} L ${a-2.5}, ${p-2.5} L ${a-2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${a-2.5}, 2.5 L${a-2.5}, ${p-2.5} L2.5, ${p-2.5} L2.5, 2.5`;return n(L,{class:g.getClassNameForBind("border-box-8"),ref:s},{default:()=>[n(fl,{width:a,height:p},{default:()=>[n("defs",null,[n("path",{id:h,d:N,fill:"transparent"},null),n("radialGradient",{id:x,cx:"50%",cy:"50%",r:"50%"},[n("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"},null),n("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null)]),n("mask",{id:y},[n("circle",{cx:"0",cy:"0",r:"150",fill:`url(#${x})`},[n("animateMotion",{dur:`${o}s`,path:N,rotate:"auto",repeatCount:"indefinite"},null)])])]),n("polygon",{fill:l,points:`5, 5 ${a-5}, 5 ${a-5} ${p-5} 5, ${p-5}`},null),n("use",{stroke:$[0],"stroke-width":"1","xlink:href":`#${h}`},null),n("use",{stroke:$[1],"stroke-width":"3","xlink:href":`#${h}`,mask:`url(#${y})`},[n("animate",{attributeName:"stroke-dasharray",from:`0, ${length}`,to:`${length}, 0`,dur:`${o}s`,repeatCount:"indefinite"},null)])]}),n(T,null,{default:()=>{var j;return[(j=t.default)==null?void 0:j.call(t)]}})]})}}})),$l=["#11eefd","#0078d2"],hl=g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
`("border-svg-container"),gl=v(m({name:"BorderBox9",props:C(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();r({refreshLayoutSize:f});const d=G();return()=>{const{color:u,backgroundColor:l}=e,{width:o,height:i}=c,a=O($l,u),p=`border-box-9-gradient-${d.id}`,$=`border-box-9-mask-${d.id}`;return n(L,{class:g.getClassNameForBind("border-box-9"),ref:s},{default:()=>[n(hl,{width:o,height:i},{default:()=>[n("defs",null,[n("linearGradient",{id:p,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[n("animate",{attributeName:"x1",values:"0%;100%;0%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null),n("animate",{attributeName:"x2",values:"100%;0%;100%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null),n("stop",{offset:"0%","stop-color":a[0]},[n("animate",{attributeName:"stop-color",values:`${a[0]};${a[1]};${a[0]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null)]),n("stop",{offset:"100%","stop-color":a[1]},[n("animate",{attributeName:"stop-color",values:`${a[1]};${a[0]};${a[1]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null)])]),n("mask",{id:$},[n("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${i*.4} 8, 3, ${o*.4+7}, 3`},null),n("polyline",{fill:"#fff",points:`
                      8, ${i*.15} 8, 3, ${o*.1+7}, 3
                      ${o*.1}, 8 14, 8 14, ${i*.15-7}
                    `},null),n("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${o*.5}, 3 ${o-3}, 3, ${o-3}, ${i*.25}`},null),n("polyline",{fill:"#fff",points:`
                      ${o*.52}, 3 ${o*.58}, 3
                      ${o*.58-7}, 9 ${o*.52+7}, 9
                    `},null),n("polyline",{fill:"#fff",points:`
                      ${o*.9}, 3 ${o-3}, 3 ${o-3}, ${i*.1}
                      ${o-9}, ${i*.1-7} ${o-9}, 9 ${o*.9+7}, 9
                    `},null),n("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${i*.5} 8, ${i-3} ${o*.3+7}, ${i-3}`},null),n("polyline",{fill:"#fff",points:`
                      8, ${i*.55} 8, ${i*.7}
                      2, ${i*.7-7} 2, ${i*.55+7}
                    `},null),n("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${o*.35}, ${i-3} ${o-3}, ${i-3} ${o-3}, ${i*.35}`},null),n("polyline",{fill:"#fff",points:`
                      ${o*.92}, ${i-3} ${o-3}, ${i-3} ${o-3}, ${i*.8} ${o-9}, ${i*.8+7} ${o-9}, ${i-9} ${o*.92+7}, ${i-9}`},null)])]),n("polygon",{fill:l,points:`
                  15, 9 ${o*.1+1}, 9 ${o*.1+4}, 6 ${o*.52+2}, 6
                  ${o*.52+6}, 10 ${o*.58-7}, 10 ${o*.58-2}, 6
                  ${o*.9+2}, 6 ${o*.9+6}, 10 ${o-10}, 10 ${o-10}, ${i*.1-6}
                  ${o-6}, ${i*.1-1} ${o-6}, ${i*.8+1} ${o-10}, ${i*.8+6}
                  ${o-10}, ${i-10} ${o*.92+7}, ${i-10}  ${o*.92+2}, ${i-6}
                  11, ${i-6} 11, ${i*.15-2} 15, ${i*.15-7}
                `},null),n("rect",{x:"0",y:"0",width:o,height:i,fill:`url(#${p})`,mask:`url(#${$})`},null)]}),n(T,null,{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t)]}})]})}}}));function z(){return{color:{type:ur(Array),default:()=>[]}}}function Pe(){return{reverse:{type:Boolean,default:!1}}}function de(e){return{duration:{type:Number,default:e}}}function yl({width:e,height:t,rowPoints:r,rowCount:s}){const f=e/(r+1),c=t/(s+1);return new Array(s).fill(0).map((d,u)=>new Array(r).fill(0).map((l,o)=>[f*(o+1),c*(u+1)])).reduce((d,u)=>[...d,...u],[])}const bl=["#fff","#0de7c2"],xe=200,_e=50,De=20,ml=4,S=2.5,ht=S/2,Ee=yl({width:xe,height:_e,rowPoints:De,rowCount:ml}),U=Ee[De*2-1],Z=Ee[De*2-3],vl=g.div`
  width: 100%;
  height: 100%;
}
.__STYLED__ svg {
  transform-origin: left top;
`("decoration-1"),wl=v(m({name:"Decoration1",props:z(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{color:c}=e,{width:d,height:u}=f,l=B(bl,c),o={transform:`scale(${d/xe},${u/_e})`};return n(vl,{ref:r},{default:()=>[n("svg",{width:xe,height:_e,style:o},[Ee.map(([i,a],p)=>{const $=i-ht,h=a-ht;return Math.random()>.6?n("rect",{key:p,x:$,y:h,width:S,height:S,fill:l[0]},[Math.random()>.6&&n("animate",{attributeName:"fill",values:`${l[0]};transparent`,dur:"1s",begin:Math.random()*2,repeatCount:"indefinite"},null)]):null}),n("rect",{fill:l[1],x:U[0]-S,y:U[1]-S,width:S*2,height:S*2},[n("animate",{attributeName:"width",values:`0;${S*2}`,dur:"2s",repeatCount:"indefinite"},null),n("animate",{attributeName:"height",values:`0;${S*2}`,dur:"2s",repeatCount:"indefinite"},null),n("animate",{attributeName:"x",values:`${U[0]};${U[0]-S}`,dur:"2s",repeatCount:"indefinite"},null),n("animate",{attributeName:"y",values:`${U[1]};${U[1]-S}`,dur:"2s",repeatCount:"indefinite"},null)]),n("rect",{fill:l[1],x:Z[0]-S,y:Z[1]-S,width:S*2,height:S*2},[n("animate",{attributeName:"width",values:"0;40;0",dur:"2s",repeatCount:"indefinite"},null),n("animate",{attributeName:"x",values:`${Z[0]};${Z[0]-40};${Z[0]}`,dur:"2s",repeatCount:"indefinite"},null)])])]})}}})),kl=g.div`
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-10"),xl=["#00c2ff","rgba(0, 194, 255, 0.3)"],_l=v(m({name:"Decoration10",props:z(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();t({refreshLayoutSize:s});const c=G(),d=`d10ani${c.id}1`,u=`d10ani${c.id}2`,l=`d10ani${c.id}3`,o=`d10ani${c.id}4`,i=`d10ani${c.id}5`,a=`d10ani${c.id}6`,p=`d10ani${c.id}7`;return()=>{const{width:$,height:h}=f,{color:x}=e,y=B(xl,x);return n(kl,{ref:r},{default:()=>[n("svg",{width:$,height:h},[n("polyline",{stroke:y[1],"stroke-width":"2",points:`0, ${h/2} ${$}, ${h/2}`},null),n("polyline",{stroke:y[0],"stroke-width":"2",points:`5, ${h/2} ${$*.2-3}, ${h/2}`,"stroke-dasharray":`0, ${$*.2}`,fill:"freeze"},[n("animate",{id:u,attributeName:"stroke-dasharray",values:`0, ${$*.2};${$*.2}, 0;`,dur:"3s",begin:`${d}.end`,fill:"freeze"},null),n("animate",{attributeName:"stroke-dasharray",values:`${$*.2}, 0;0, ${$*.2}`,dur:"0.01s",begin:`${p}.end`,fill:"freeze"},null)]),n("polyline",{stroke:y[0],"stroke-width":"2",points:`${$*.2+3}, ${h/2} ${$*.8-3}, ${h/2}`,"stroke-dasharray":`0, ${$*.6}`},[n("animate",{id:o,attributeName:"stroke-dasharray",values:`0, ${$*.6};${$*.6}, 0`,dur:"3s",begin:`${l}.end + 1s`,fill:"freeze"},null),n("animate",{attributeName:"stroke-dasharray",values:`${$*.6}, 0;0, ${$*.6}`,dur:"0.01s",begin:`${p}.end`,fill:"freeze"},null)]),n("polyline",{stroke:y[0],"stroke-width":"2",points:`${$*.8+3}, ${h/2} ${$-5}, ${h/2}`,"stroke-dasharray":`0, ${$*.2}`},[n("animate",{id:a,attributeName:"stroke-dasharray",values:`0, ${$*.2};${$*.2}, 0`,dur:"3s",begin:`${i}.end + 1s`,fill:"freeze"},null),n("animate",{attributeName:"stroke-dasharray",values:`${$*.2}, 0;0, ${$*.3}`,dur:"0.01s",begin:`${p}.end`,fill:"freeze"},null)]),n("circle",{cx:"2",cy:h/2,r:"2",fill:y[1]},[n("animate",{id:d,attributeName:"fill",values:`${y[1]};${y[0]}`,begin:`0s;${p}.end`,dur:"0.3s",fill:"freeze"},null)]),n("circle",{cx:$*.2,cy:h/2,r:"2",fill:y[1]},[n("animate",{id:l,attributeName:"fill",values:`${y[1]};${y[0]}`,begin:`${u}.end`,dur:"0.3s",fill:"freeze"},null),n("animate",{attributeName:"fill",values:`${y[1]};${y[1]}`,dur:"0.01s",begin:`${p}.end`,fill:"freeze"},null)]),n("circle",{cx:$*.8,cy:h/2,r:"2",fill:y[1]},[n("animate",{id:i,attributeName:"fill",values:`${y[1]};${y[0]}`,begin:`${o}.end`,dur:"0.3s",fill:"freeze"},null),n("animate",{attributeName:"fill",values:`${y[1]};${y[1]}`,dur:"0.01s",begin:`${p}.end`,fill:"freeze"},null)]),n("circle",{cx:$-2,cy:h/2,r:"2",fill:y[1]},[n("animate",{id:p,attributeName:"fill",values:`${y[1]};${y[0]}`,begin:`${a}.end`,dur:"0.3s",fill:"freeze"},null),n("animate",{attributeName:"fill",values:`${y[1]};${y[1]}`,dur:"0.01s",begin:`${p}.end`,fill:"freeze"},null)])])]})}}})),Sl=g.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-11"),Cl=g.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"),M=["#1a98fc","#2cf7fe"],Ol=v(m({name:"Decoration11",props:z(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();return r({refreshLayoutSize:f}),()=>{const{width:d,height:u}=c,{color:l}=e,o=B(M,l);return n(Sl,{ref:s},{default:()=>[n("svg",{width:d,height:u},[n("polygon",{fill:_(o[1]||M[1],10),stroke:o[1],points:"20 10, 25 4, 55 4 60 10"},null),n("polygon",{fill:_(o[1]||M[1],10),stroke:o[1],points:`20 ${u-10}, 25 ${u-4}, 55 ${u-4} 60 ${u-10}`},null),n("polygon",{fill:_(o[1]||M[1],10),stroke:o[1],points:`${d-20} 10, ${d-25} 4, ${d-55} 4 ${d-60} 10`},null),n("polygon",{fill:_(o[1]||M[1],10),stroke:o[1],points:`${d-20} ${u-10}, ${d-25} ${u-4}, ${d-55} ${u-4} ${d-60} ${u-10}`},null),n("polygon",{fill:_(o[0]||M[0],20),stroke:o[0],points:`
        20 10, 5 ${u/2} 20 ${u-10}
        ${d-20} ${u-10} ${d-5} ${u/2} ${d-20} 10
      `},null),n("polyline",{fill:"transparent",stroke:_(o[0]||M[0],70),points:`25 18, 15 ${u/2} 25 ${u-18}`},null),n("polyline",{fill:"transparent",stroke:_(o[0]||M[0],70),points:`${d-25} 18, ${d-15} ${u/2} ${d-25} ${u-18}`},null)]),n(Cl,null,{default:()=>{var i;return[(i=t.default)==null?void 0:i.call(t)]}})]})}}}));var Ll=Object.defineProperty,Tl=Object.defineProperties,jl=Object.getOwnPropertyDescriptors,gt=Object.getOwnPropertySymbols,Bl=Object.prototype.hasOwnProperty,zl=Object.prototype.propertyIsEnumerable,yt=(e,t,r)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Nl=(e,t)=>{for(var r in t||(t={}))Bl.call(t,r)&&yt(e,r,t[r]);if(gt)for(var r of gt(t))zl.call(t,r)&&yt(e,r,t[r]);return e},Pl=(e,t)=>Tl(e,jl(t));const Dl=g.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-12"),El=g.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"),bt=["#2783ce","#2cf7fe"],mt=30,Ml=Math.PI/3,Al=3,Fl=1,Il=(e,t)=>{const r=100/(t-1);return new Array(t).fill(e).map((s,f)=>_(e,100-f*r))};function Rl(){return Pl(Nl({},z()),{scanDuration:{type:Number,default:3},haloDuration:{type:Number,default:2}})}const H=(e,t,r,s)=>[e+Math.cos(s)*r,t+Math.sin(s)*r],Yl=({x:e,y:t,width:r,segment:s,sectorAngle:f})=>{const c=-Math.PI/2,d=f/s,u=r/4;let l=H(e,t,u,c);return new Array(s).fill("").map((o,i)=>{const a=H(e,t,u,c-(i+1)*d).map($=>$.toFixed(5)),p=`M${l.join(",")} A${u}, ${u} 0 0 0 ${a.join(",")}`;return l=a,p})},Gl=({ringNum:e,width:t,ringWidth:r})=>{const s=(t/2-r/2)/e;return new Array(e).fill(0).map((f,c)=>s*(c+1))},Ul=({x:e,y:t,width:r})=>{const s=Math.PI/6,f=r/2;return new Array(6).fill("").map((c,d)=>{const u=s*(d+1),l=u+Math.PI,o=H(e,t,f,u),i=H(e,t,f,l);return`${o.join(",")} ${i.join(",")}`})},ql=({x:e,y:t,width:r})=>{const s=Math.PI/6,f=r/2-1;return new Array(4).fill("").map((c,d)=>{const u=s*(3*d+1),l=u+s,o=H(e,t,f,u),i=H(e,t,f,l);return`M${o.join(",")} A${e}, ${t} 0 0 1 ${i.join(",")}`})},Hl=v(m({name:"Decoration12",props:Rl(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();r({refreshLayoutSize:f});const d=G();return()=>{const{width:u,height:l}=c,o=u/2,i=l/2,{color:a,scanDuration:p,haloDuration:$}=e,h=`decoration-12-g-${d.id}`,x=`decoration-12-gradient-${d.id}`,y=B(bt,a),N=Il(y[0],mt),j=Yl({x:o,y:i,width:u,segment:mt,sectorAngle:Ml}),X=Gl({ringNum:Al,ringWidth:Fl,width:u}),A=Ul({x:o,y:i,width:u}),F=ql({x:o,y:i,width:u});return n(Dl,{ref:s},{default:()=>[n("svg",{width:u,height:l},[n("defs",null,[n("g",{id:h},[j.map((b,P)=>n("path",{stroke:N[P],"stroke-width":u/2,fill:"transparent",key:b,d:b},null))]),n("radialGradient",{id:x,cx:"50%",cy:"50%",r:"50%"},[n("stop",{offset:"0%","stop-color":"transparent","stop-opacity":"1"},null),n("stop",{offset:"100%","stop-color":_(y[1]||bt[1],30),"stop-opacity":"1"},null)])]),X.map(b=>n("circle",{r:b,cx:o,cy:i,stroke:y[1],"stroke-width":"0.5",fill:"transparent"},null)),n("circle",{r:"1",cx:o,cy:i,stroke:"transparent",fill:`url(#${x})`},[n("animate",{attributeName:"r",values:`1;${u/2}`,dur:`${$}s`,repeatCount:"indefinite"},null),n("animate",{attributeName:"opacity",values:"1;0",dur:`${$}s`,repeatCount:"indefinite"},null)]),n("circle",{r:"2",cx:o,cy:i,fill:y[1]},null),n("g",null,[A.map(b=>n("polyline",{key:b,points:b,stroke:y[1],"stroke-width":"0.5",opacity:"0.5"},null))]),F.map(b=>n("path",{key:b,d:b,stroke:y[1],"stroke-width":"2",fill:"transparent"},null)),n("use",{"xlink:href":`#${h}`},[n("animateTransform",{attributeName:"transform",type:"rotate",values:`0, ${o} ${i};360, ${o} ${i}`,dur:`${p}s`,repeatCount:"indefinite"},null)])]),n(El,null,{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t)]}})]})}}}));var Wl=Object.defineProperty,vt=Object.getOwnPropertySymbols,Vl=Object.prototype.hasOwnProperty,Xl=Object.prototype.propertyIsEnumerable,wt=(e,t,r)=>t in e?Wl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$e=(e,t)=>{for(var r in t||(t={}))Vl.call(t,r)&&wt(e,r,t[r]);if(vt)for(var r of vt(t))Xl.call(t,r)&&wt(e,r,t[r]);return e};const Ql=["#3faacb","#fff"];function Jl(){return $e($e($e({},z()),Pe()),de(6))}function Kl(e,t,r){return e?{width:1,height:r,x:t/2,y:0}:{width:t,height:1,x:0,y:r/2}}const Zl=g.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-2"),es=v(m({name:"Decoration2",props:Jl(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{width:c,height:d}=f,{color:u,reverse:l,duration:o}=e,i=B(Ql,u),{x:a,y:p,width:$,height:h}=Kl(l,c,d);return n(Zl,{ref:r},{default:()=>[n("svg",{width:c,height:d},[n("rect",{x:a,y:p,width:$,height:h,fill:i[0]},[n("animate",{attributeName:l?"height":"width",from:"0",to:l?d:c,dur:`${o}s`,calcMode:"spline",keyTimes:"0;1",keySplines:".42,0,.58,1",repeatCount:"indefinite"},null)]),n("rect",{x:a,y:p,width:"1",height:"1",fill:i[1]},[n("animate",{attributeName:l?"y":"x",from:"0",to:l?d:c,dur:`${o}s`,calcMode:"spline",keyTimes:"0;1",keySplines:"0.42,0,0.58,1",repeatCount:"indefinite"},null)])])]})}}}));function ts({width:e,height:t,rowPoints:r,rowCount:s}){const f=e/(r+1),c=t/(s+1);return new Array(s).fill(0).map((d,u)=>new Array(r).fill(0).map((l,o)=>[f*(o+1),c*(u+1)])).reduce((d,u)=>[...d,...u],[])}const rs=["#7acaec","transparent"],Se=300,Ce=35,ns=25,os=2,Oe=7,kt=Oe/2,is=ts({width:Se,height:Ce,rowPoints:ns,rowCount:os}),as=g.div`
  width: 100%;
  height: 100%;
}
.__STYLED__ svg {
  transform-origin: left top;
`("decoration-3"),ls=v(m({name:"Decoration3",props:z(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{width:c,height:d}=f,{color:u}=e,l=B(rs,u);return n(as,{ref:r},{default:()=>[n("svg",{width:Se,height:Ce,style:{transform:`scale(${c/Se},${d/Ce})`}},[is.map(([o,i],a)=>{const p=o-kt,$=i-kt;return Math.random()>.6?n("rect",{key:a,x:p,y:$,width:Oe,height:Oe,fill:l[0]},[Math.random()>.6&&n("animate",{attributeName:"fill",values:l.join(";"),dur:`${Math.random()+1}s`,begin:Math.random()*2,repeatCount:"indefinite"},null)]):null})])]})}}}));var ss=Object.defineProperty,xt=Object.getOwnPropertySymbols,us=Object.prototype.hasOwnProperty,ds=Object.prototype.propertyIsEnumerable,_t=(e,t,r)=>t in e?ss(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))us.call(t,r)&&_t(e,r,t[r]);if(xt)for(var r of xt(t))ds.call(t,r)&&_t(e,r,t[r]);return e};function fs(){return he(he(he({},z()),Pe()),de(3))}const cs=["rgba(255, 255, 255, 0.3)","rgba(255, 255, 255, 0.3)"],ps=g.div`
  position: relative;
  width: 100%;
  height: 100%;
`("decoration-4"),$s=g.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  flex: 1;
}
.__STYLED__.normal {
  animation: ani-height ease-in-out infinite;
  left: 50%;
  margin-left: -2px;
}
.__STYLED__.reverse {
  animation: ani-width ease-in-out infinite;
  top: 50%;
  margin-top: -2px;
}
@keyframes ani-height {
  0% {
    height: 0%;
  }
  70% {
    height: 100%;
  }
  100% {
    height: 100%;
  }
}
@keyframes ani-width {
  0% {
    width: 0%;
  }
  70% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`("decoration-content"),hs=v(m({name:"Decoration4",props:fs(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{width:c,height:d}=f,{color:u,reverse:l,duration:o}=e,i=B(cs,u),a=l?c:5,p=l?5:d,$={width:`${a}px`,height:`${p}px`,animationDuration:`${o}s`},h=l?`0, 2.5 ${c}, 2.5`:`2.5, 0 2.5, ${d}`;return n(ps,{ref:r},{default:()=>[n($s,{class:Le(l?"reverse":"normal"),style:$},{default:()=>[n("svg",{width:a,height:p},[n("polyline",{stroke:i[0],points:h},null),n("polyline",{class:"bold-line",stroke:i[1],"stroke-width":"3","stroke-dasharray":"20, 80","stroke-dashoffset":"-30",points:h},null)])]})]})}}}));var gs=Object.defineProperty,St=Object.getOwnPropertySymbols,ys=Object.prototype.hasOwnProperty,bs=Object.prototype.propertyIsEnumerable,Ct=(e,t,r)=>t in e?gs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ot=(e,t)=>{for(var r in t||(t={}))ys.call(t,r)&&Ct(e,r,t[r]);if(St)for(var r of St(t))bs.call(t,r)&&Ct(e,r,t[r]);return e};const ms=["#3f96a5","#3f96a5"];function vs(){return Ot(Ot({},z()),de(1.2))}function Lt(e){return new Array(e.length-1).fill(0).map((t,r)=>qi(e[r],e[r+1]))}function ws(e,t){const r=[[0,t*.2],[e*.18,t*.2],[e*.2,t*.4],[e*.25,t*.4],[e*.27,t*.6],[e*.72,t*.6],[e*.75,t*.4],[e*.8,t*.4],[e*.82,t*.2],[e,t*.2]],s=[[e*.3,t*.8],[e*.7,t*.8]];return{line1Sum:nt(Lt(r)),line2Sum:nt(Lt(s)),line1Point:r.map(f=>f.join(",")).join(" "),line2Point:s.map(f=>f.join(",")).join(" ")}}const ks=g.div`
  width: 100%;
  height: 100%;
`("decoration-5"),xs=v(m({name:"Decoration5",props:vs(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{width:c,height:d}=f,{color:u,duration:l}=e,o=B(ms,u),{line1Sum:i,line2Sum:a,line1Point:p,line2Point:$}=ws(c,d);return n(ks,{ref:r},{default:()=>[n("svg",{width:c,height:d},[n("polyline",{fill:"transparent",stroke:o[0],"stroke-width":"3",points:p},[n("animate",{attributeName:"stroke-dasharray",attributeType:"XML",from:`0, ${i/2}, 0, ${i/2}`,to:`0, 0, ${i}, 0`,dur:`${l}s`,begin:"0s",calcMode:"spline",keyTimes:"0;1",keySplines:"0.4,1,0.49,0.98",repeatCount:"indefinite"},null)]),n("polyline",{fill:"transparent",stroke:o[1],"stroke-width":"2",points:$},[n("animate",{attributeName:"stroke-dasharray",attributeType:"XML",from:`0, ${a/2}, 0, ${a/2}`,to:`0, 0, ${a}, 0`,dur:`${l}s`,begin:"0s",calcMode:"spline",keyTimes:"0;1",keySplines:".4,1,.49,.98",repeatCount:"indefinite"},null)])])]})}}})),_s=["#7acaec","#7acaec"],cr=300,pr=35,Ss=1,Cs=40,$r=7,Os=$r/2,Ls=g.div`
  width: 100%;
  height: 100%;
}
.__STYLED__ .svg-origin {
  transform-origin: left top;
`("decoration-6");function Ts({width:e,height:t,rowPoints:r,rowCount:s}){const f=e/(r+1),c=t/(s+1),d=new Array(s).fill(0).map((i,a)=>new Array(r).fill(0).map((p,$)=>[f*($+1),c*(a+1)])).reduce((i,a)=>[...i,...a],[]),u=new Array(s*r).fill(0).map(()=>Math.random()>.8?rt(.7*t,t):rt(.2*t,.5*t)),l=new Array(s*r).fill(0).map((i,a)=>u[a]*Math.random()),o=new Array(s*r).fill(0).map(()=>Math.random()+1.5);return{points:d,heights:u,minHeights:l,randoms:o}}const{points:js,heights:ne,minHeights:oe,randoms:Tt}=Ts({width:cr,height:pr,rowPoints:Cs,rowCount:Ss}),Bs=v(m({name:"Decoration6",props:z(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{width:c,height:d}=f,{color:u}=e,l=B(_s,u),o={transform:`scale(${c/cr},${d/pr})`},i=()=>l[Math.random()>.5?0:1];return n(Ls,{ref:r},{default:()=>[n("svg",{class:"svg-origin",width:c,height:d,style:o},[js.map(([a,p],$)=>n("rect",{key:`rect${$}`,fill:i(),x:a-Os,y:p-ne[$],width:$r,height:ne[$]},[n("animate",{attributeName:"y",values:`${p-oe[$]/2};${p-ne[$]/2};${p-oe[$]/2}`,dur:Tt[$],keyTimes:"0;0.5;1",calcMode:"spline",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1",begin:"0s",repeatCount:"indefinite"},null),n("animate",{attributeName:"height",values:`${oe[$]};${ne[$]};${oe[$]}`,dur:Tt[$],keyTimes:"0;0.5;1",calcMode:"spline",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1",begin:"0s",repeatCount:"indefinite"},null)]))])]})}}})),zs=g.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-7"),Ns=["#1dc1f5","#1dc1f5"],Ps=v(m({name:"Decoration7",props:z(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f}=k();return r({refreshLayoutSize:f}),()=>{const{color:c}=e,d=B(Ns,c);return n(zs,{ref:s},{default:()=>{var u;return[n("svg",{width:"21px",height:"20px"},[n("polyline",{"stroke-width":"4",fill:"transparent",stroke:d[0],points:"10, 0 19, 10 10, 20"},null),n("polyline",{"stroke-width":"2",fill:"transparent",stroke:d[1],points:"2, 0 11, 10 2, 20"},null)]),(u=t.default)==null?void 0:u.call(t),n("svg",{width:"21px",height:"20px"},[n("polyline",{"stroke-width":"4",fill:"transparent",stroke:d[0],points:"11, 0 2, 10 11, 20"},null),n("polyline",{"stroke-width":"2",fill:"transparent",stroke:d[1],points:"19, 0 10, 10 19, 20"},null)])]}})}}}));var Ds=Object.defineProperty,jt=Object.getOwnPropertySymbols,Es=Object.prototype.hasOwnProperty,Ms=Object.prototype.propertyIsEnumerable,Bt=(e,t,r)=>t in e?Ds(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,zt=(e,t)=>{for(var r in t||(t={}))Es.call(t,r)&&Bt(e,r,t[r]);if(jt)for(var r of jt(t))Ms.call(t,r)&&Bt(e,r,t[r]);return e};const As=["#3f96a5","#3f96a5"];function Fs(){return zt(zt({},z()),Pe())}const Is=g.div`
  display: flex;
  width: 100%;
  height: 100%;
`("decoration-8"),Rs=v(m({name:"Decoration8",props:Fs(),setup(e,{expose:t}){const{autoBindRef:r,refreshLayoutSize:s,domSize:f}=k();return t({refreshLayoutSize:s}),()=>{const{color:c,reverse:d}=e,{width:u,height:l}=f,o=a=>d?u-a:a,i=B(As,c);return n(Is,{ref:r},{default:()=>[n("svg",{width:u,height:l},[n("polyline",{stroke:i[0],"stroke-width":"2",fill:"transparent",points:`${o(0)}, 0 ${o(30)}, ${l/2}`},null),n("polyline",{stroke:i[0],"stroke-width":"2",fill:"transparent",points:`${o(20)}, 0 ${o(50)}, ${l/2} ${o(u)}, ${l/2}`},null),n("polyline",{stroke:i[1],fill:"transparent","stroke-width":"3",points:`${o(0)}, ${l-3}, ${o(200)}, ${l-3}`},null)])]})}}}));var Ys=Object.defineProperty,Nt=Object.getOwnPropertySymbols,Gs=Object.prototype.hasOwnProperty,Us=Object.prototype.propertyIsEnumerable,Pt=(e,t,r)=>t in e?Ys(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dt=(e,t)=>{for(var r in t||(t={}))Gs.call(t,r)&&Pt(e,r,t[r]);if(Nt)for(var r of Nt(t))Us.call(t,r)&&Pt(e,r,t[r]);return e};function qs(){return Dt(Dt({},z()),de(3))}const ge=["rgba(3, 166, 224, 0.8)","rgba(3, 166, 224, 0.5)"],Et=100,Mt=100,Hs=g.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.__STYLED__ svg.svg-origin {
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: left top;
`("decoration-9"),Ws=v(m({name:"Decoration9",props:qs(),setup(e,{slots:t,expose:r}){const{autoBindRef:s,refreshLayoutSize:f,domSize:c}=k();r({refreshLayoutSize:f});const d=`decoration-9-polygon-${G().id}`;return()=>{const{width:u,height:l}=c,{color:o,duration:i}=e,a=B(ge,o),p={transform:`scale(${u/Et},${l/Mt})`};return n(Hs,{ref:s},{default:()=>{var $;return[n("svg",{class:"svg-origin",width:Et,height:Mt,style:p},[n("defs",null,[n("polygon",{id:d,points:"15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"},null)]),n("circle",{cx:"50",cy:"50",r:"45",fill:"transparent",stroke:a[1],"stroke-width":"10","stroke-dasharray":"80, 100, 30, 100"},[n("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",dur:`${i}s`,repeatCount:"indefinite"},null)]),n("circle",{cx:"50",cy:"50",r:"45",fill:"transparent",stroke:a[0],"stroke-width":"6","stroke-dasharray":"50, 66, 100, 66"},[n("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;-360 50 50",dur:`${i}s`,repeatCount:"indefinite"},null)]),n("circle",{cx:"50",cy:"50",r:"38",fill:"transparent",stroke:_(a[1]||ge[1],30),"stroke-width":"1","stroke-dasharray":"5, 1"},null),new Array(20).fill(0).map((h,x)=>n("use",{key:x,"xlink:href":`#${d}`,stroke:a[1],fill:Math.random()>.4?"transparent":a[0]},[n("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",dur:`${i}s`,begin:`${x*i/20}s`,repeatCount:"indefinite"},null)])),n("circle",{cx:"50",cy:"50",r:"26",fill:"transparent",stroke:_(a[1]||ge[1],30),"stroke-width":"1","stroke-dasharray":"5, 1"},null)]),($=t.default)==null?void 0:$.call(t)]}})}}})),Vs=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.__STYLED__ .loading-tip {
  font-size: 15px;
`("loading"),Xs=v(m({name:"Loading",setup(e,{slots:t}){return()=>n(Vs,null,{default:()=>{var r;return[n("svg",{width:"50px",height:"50px"},[n("circle",{cx:"25",cy:"25",r:"20",fill:"transparent","stroke-width":"3","stroke-dasharray":"31.415, 31.415",stroke:"#02bcfe","stroke-linecap":"round"},[n("animateTransform",{attributeName:"transform",type:"rotate",values:"0, 25 25;360, 25 25",dur:"1.5s",repeatCount:"indefinite"},null),n("animate",{attributeName:"stroke",values:"#02bcfe;#3be6cb;#02bcfe",dur:"3s",repeatCount:"indefinite"},null)]),n("circle",{cx:"25",cy:"25",r:"10",fill:"transparent","stroke-width":"3","stroke-dasharray":"15.7, 15.7",stroke:"#3be6cb","stroke-linecap":"round"},[n("animateTransform",{attributeName:"transform",type:"rotate",values:"360, 25 25;0, 25 25",dur:"1.5s",repeatCount:"indefinite"},null),n("animate",{attributeName:"stroke",values:"#3be6cb;#02bcfe;#3be6cb",dur:"3s",repeatCount:"indefinite"},null)])]),n("div",{class:"loading-tip"},[(r=t.default)==null?void 0:r.call(t)])]}})}}));function Ks(e,{classNamePrefix:t}={}){[Ji,ea,ya,ma,ka,Sa,La,Fa,Qa,Za,rl,pl,gl,wl,es,ls,hs,xs,Bs,Ps,Rs,Ws,_l,Ol,Hl,Xs].forEach(r=>e.component(r.name,r)),t&&Vi(t)}export{Ji as BorderBox1,ea as BorderBox10,ya as BorderBox11,ma as BorderBox12,ka as BorderBox13,Sa as BorderBox2,La as BorderBox3,Fa as BorderBox4,Qa as BorderBox5,Za as BorderBox6,rl as BorderBox7,pl as BorderBox8,gl as BorderBox9,wl as Decoration1,_l as Decoration10,Ol as Decoration11,Hl as Decoration12,es as Decoration2,ls as Decoration3,hs as Decoration4,xs as Decoration5,Bs as Decoration6,Ps as Decoration7,Rs as Decoration8,Ws as Decoration9,Xs as Loading,Ks as default,Vi as setClassNamePrefix};
