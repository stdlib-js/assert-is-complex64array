// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,d,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,y,"e-0$1"),e.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,x=isNaN,A=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,l,c,s,p;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function B(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){return"string"==typeof e}function R(e){var r,t,n;if(!L(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=B(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var F,O=Object.prototype,N=O.toString,C=O.__defineGetter__,M=O.__defineSetter__,P=O.__lookupGetter__,I=O.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||I.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var Y=F;function $(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=J(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},H=Number,K=H.prototype.toString,Q=Z();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return W(e)||ee(e)}$(re,"isPrimitive",W),$(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return e<te&&e>ne&&oe(e)}function ue(e){return W(e)&&ae(e)}function fe(e){return ee(e)&&ae(e.valueOf())}function le(e){return ue(e)||fe(e)}function ce(e){return ue(e)&&e>=0}function se(e){return fe(e)&&e.valueOf()>=0}function pe(e){return ce(e)||se(e)}function he(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=4294967295}function ye(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}$(le,"isPrimitive",ue),$(le,"isObject",fe),$(pe,"isPrimitive",ce),$(pe,"isObject",se);var ge="function"==typeof ArrayBuffer;function me(e){return ge&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}var be=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function we(e){return"object"==typeof e&&null!==e&&!be(e)}var de=/./;function ve(e){return"boolean"==typeof e}var Ee=Boolean,_e=Boolean.prototype.toString,Te=Z();function xe(e){return"object"==typeof e&&(e instanceof Ee||(Te?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function Ae(e){return ve(e)||xe(e)}function je(){return new Function("return this;")()}$(Ae,"isPrimitive",ve),$(Ae,"isObject",xe);var Se="object"==typeof self?self:null,ke="object"==typeof window?window:null,Ve="object"==typeof globalThis?globalThis:null,Be=function(e){if(arguments.length){if(!ve(e))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return je()}if(Ve)return Ve;if(Se)return Se;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Le=Be.document&&Be.document.childNodes,Re=Int8Array;function Fe(){return/^\s*function\s*([^(]*)/i}var Oe=/^\s*function\s*([^(]*)/i;function Ne(e){return null!==e&&"object"==typeof e}function Ce(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Oe.exec(n.toString()))return r[1]}return Ne(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(Fe,"REGEXP",Oe),$(Ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ne));var Me="function"==typeof de||"object"==typeof Re||"function"==typeof Le?function(e){return Ce(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ce(e).toLowerCase():r};function Pe(e){return"function"===Me(e)}function Ie(e,r){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}$(Ie,"BYTES_PER_ELEMENT",8),$(Ie.prototype,"BYTES_PER_ELEMENT",8),$(Ie.prototype,"byteLength",16),$(Ie.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(Ie.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ye="function"==typeof Math.fround?Math.fround:null,$e="function"==typeof Float32Array,We="function"==typeof Float32Array?Float32Array:null,Ge="function"==typeof Float32Array?Float32Array:void 0,Ze=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,5e40]),t=r,e=($e&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?Ge:function(){throw new Error("not implemented")},Ue=new Ze(1),Xe="function"==typeof Ye?Ye:function(e){return Ue[0]=e,Ue[0]};function Je(e,r){if(!(this instanceof Je))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Xe(e)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Xe(r)}),this}function ze(e){return e instanceof Ie||e instanceof Je||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function qe(e){return oe(e/2)}function De(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}$(Je,"BYTES_PER_ELEMENT",4),$(Je.prototype,"BYTES_PER_ELEMENT",4),$(Je.prototype,"byteLength",8),$(Je.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(Je.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var He=De()?Symbol.iterator:null;function Ke(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,get:t})}function Qe(e){return e.re}function er(e){return e.im}function rr(e,r){return new Ze(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var tr="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,ir="function"==typeof Float64Array?Float64Array:void 0,or=function(){var e,r,t;if("function"!=typeof nr)return!1;try{r=new nr([1,3.14,-3.14,NaN]),t=r,e=(tr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ir:function(){throw new Error("not implemented")};function ar(e,r){return new or(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var ur={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function fr(e){var r=ur[e];return"function"==typeof r?r:ur.default}var lr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function cr(e){var r=lr[e];return"function"==typeof r?r:lr.default}function sr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(he(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!ze(n))return new TypeError(R("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Qe(n),er(n))}return r}function pr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,he(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ze(o))return new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),er(o))}return n}function hr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!ze(n=r[i]))return null;e[o]=Qe(n),e[o+1]=er(n),o+=2}return e}var yr=2*Ze.BYTES_PER_ELEMENT,gr=De();function mr(e){return e instanceof vr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function br(e){return e===vr||"Complex128Array"===e.name}function wr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===yr}function dr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*yr}function vr(){var e,r,t,n;if(r=arguments.length,!(this instanceof vr))return 0===r?new vr:1===r?new vr(arguments[0]):2===r?new vr(arguments[0],arguments[1]):new vr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ze(0);else if(1===r)if(ce(arguments[0]))t=new Ze(2*arguments[0]);else if(ye(arguments[0]))if((n=(t=arguments[0]).length)&&be(t)&&ze(t[0])){if(null===(t=hr(new Ze(2*n),t))){if(!qe(n))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ze(arguments[0])}}else{if(wr(t))t=rr(t,0);else if(dr(t))t=ar(t,0);else if(!qe(n))throw new RangeError(R("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ze(t)}else if(me(arguments[0])){if(!oe((t=arguments[0]).byteLength/yr))throw new RangeError(R("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",yr,t.byteLength));t=new Ze(t)}else{if(!we(arguments[0]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===gr)throw new TypeError(R("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Pe(t[He]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Pe((t=t[He]()).next))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=sr(t))instanceof Error)throw t;t=new Ze(t)}else{if(!me(t=arguments[0]))throw new TypeError(R("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(e=arguments[1]))throw new TypeError(R("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/yr))throw new RangeError(R("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",yr,e));if(2===r){if(!oe((n=t.byteLength-e)/yr))throw new RangeError(R("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",yr,n));t=new Ze(t,e)}else{if(!ce(n=arguments[2]))throw new TypeError(R("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*yr>t.byteLength-e)throw new RangeError(R("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*yr));t=new Ze(t,e,2*n)}}return $(this,"_buffer",t),$(this,"_length",t.length/2),this}return $(vr,"BYTES_PER_ELEMENT",yr),$(vr,"name","Complex64Array"),$(vr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,p;if(!Pe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Pe(n=arguments[1]))throw new TypeError(R("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(mr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,p=0,s=0;s<f;s++){if(ze(c=n.call(r,e.get(s),s)))o[p]=Qe(c),o[p+1]=er(c);else{if(!(he(c)&&c.length>=2))throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(ye(e)){if(n){for(f=e.length,u=e.get&&e.set?cr("default"):fr("default"),s=0;s<f;s++)if(!ze(u(e,s))){l=!0;break}if(l){if(!qe(f))throw new RangeError(R("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,p=0,s=0;s<f;s++){if(ze(c=n.call(r,u(e,s),s)))o[p]=Qe(c),o[p+1]=er(c);else{if(!(he(c)&&c.length>=2))throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(we(e)&&gr&&Pe(e[He])){if(!Pe((o=e[He]()).next))throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?pr(o,n,r):sr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),$(vr,"of",(function(){var e,r;if(!Pe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ke(vr.prototype,"buffer",(function(){return this._buffer.buffer})),Ke(vr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ke(vr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),$(vr.prototype,"BYTES_PER_ELEMENT",vr.BYTES_PER_ELEMENT),$(vr.prototype,"copyWithin",(function(e,r){if(!mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),$(vr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,$(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Je(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),$(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),He&&$(t,He,(function(){return r.entries()})),t})),$(vr.prototype,"get",(function(e){var r;if(!mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(e))throw new TypeError(R("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Je((r=this._buffer)[e*=2],r[e+1])})),Ke(vr.prototype,"length",(function(){return this._length})),$(vr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(R("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(ze(e)){if(t>=this._length)throw new RangeError(R("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qe(e),void(n[t+1]=er(e))}if(mr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*yr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ze(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ye(e))throw new TypeError(R("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!ze(e[f])){o=!0;break}if(o){if(!qe(a))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*yr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ze(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Qe(u),n[t+1]=er(u),t+=2}})),function(e){return e instanceof vr||"Complex64Array"===Ce(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplex64Array=r();
//# sourceMappingURL=browser.js.map
