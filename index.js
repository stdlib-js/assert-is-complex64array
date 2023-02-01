// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplex64Array=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,s,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),s="get"in t,y="set"in t,c&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,r,t.get),y&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e){return"number"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return y&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function b(e,r){return null!=e&&p.call(e,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=h()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[g],r=b(e,g);try{e[g]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[g]=t:delete e[g],n}:function(e){return m.call(e)},v=Number,E=v.prototype.toString;var d=h();function _(e){return"object"==typeof e&&(e instanceof v||(d?function(e){try{return E.call(e),!0}catch(e){return!1}}(e):"[object Number]"===w(e)))}function T(e){return s(e)||_(e)}c(T,"isPrimitive",s),c(T,"isObject",_);var j=Number.POSITIVE_INFINITY,A=v.NEGATIVE_INFINITY,S=Math.floor;function x(e){return S(e)===e}function B(e){return e<j&&e>A&&x(e)}function L(e){return s(e)&&B(e)}function O(e){return _(e)&&B(e.valueOf())}function V(e){return L(e)||O(e)}function R(e){return L(e)&&e>=0}function N(e){return O(e)&&e.valueOf()>=0}function k(e){return R(e)||N(e)}c(V,"isPrimitive",L),c(V,"isObject",O),c(k,"isPrimitive",R),c(k,"isObject",N);function F(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&x(e.length)&&e.length>=0&&e.length<=4294967295}function M(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&x(e.length)&&e.length>=0&&e.length<=9007199254740991}var P="function"==typeof ArrayBuffer;function C(e){return P&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===w(e)}var I=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function Y(e){return"object"==typeof e&&null!==e&&!I(e)}var G=/./;function W(e){return"boolean"==typeof e}var J=Boolean.prototype.toString;var U=h();function X(e){return"object"==typeof e&&(e instanceof Boolean||(U?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function q(e){return W(e)||X(e)}function z(){return new Function("return this;")()}c(q,"isPrimitive",W),c(q,"isObject",X);var D="object"==typeof self?self:null,H="object"==typeof window?window:null,K="object"==typeof global?global:null;var Q=function(e){if(arguments.length){if(!W(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return z()}if(D)return D;if(H)return H;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")}(),Z=Q.document&&Q.document.childNodes,$=Int8Array;function ee(){return/^\s*function\s*([^(]*)/i}var re=/^\s*function\s*([^(]*)/i;function te(e){return null!==e&&"object"==typeof e}function ne(e){var r,t,n,o;if(("Object"===(t=w(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=re.exec(n.toString()))return r[1]}return te(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(ee,"REGEXP",re),c(te,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!I(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(te));var oe="function"==typeof G||"object"==typeof $||"function"==typeof Z?function(e){return ne(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ne(e).toLowerCase():r};function ie(e){return"function"===oe(e)}function ae(e,r){if(!(this instanceof ae))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!s(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(ae,"BYTES_PER_ELEMENT",8),c(ae.prototype,"BYTES_PER_ELEMENT",8),c(ae.prototype,"byteLength",16),c(ae.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(ae.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ue="function"==typeof Math.fround?Math.fround:null,fe="function"==typeof Float32Array;var le="function"==typeof Float32Array?Float32Array:null;var ce="function"==typeof Float32Array?Float32Array:void 0;var se=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,5e40]),t=r,e=(fe&&t instanceof Float32Array||"[object Float32Array]"===w(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===j}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},ye=new se(1);var he="function"==typeof ue?ue:function(e){return ye[0]=e,ye[0]};function me(e,r){if(!(this instanceof me))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!s(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:he(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:he(r)}),this}function pe(e){return e instanceof ae||e instanceof me||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function be(e){return x(e/2)}function ge(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(me,"BYTES_PER_ELEMENT",4),c(me.prototype,"BYTES_PER_ELEMENT",4),c(me.prototype,"byteLength",8),c(me.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(me.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var we=ge()?Symbol.iterator:null;function ve(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function Ee(e){return e.re}function de(e){return e.im}function _e(e,r){return new se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Te="function"==typeof Float64Array;var je="function"==typeof Float64Array?Float64Array:null;var Ae="function"==typeof Float64Array?Float64Array:void 0;var Se=function(){var e,r,t;if("function"!=typeof je)return!1;try{r=new je([1,3.14,-3.14,NaN]),t=r,e=(Te&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")};function xe(e,r){return new Se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Be(e,r){return e[r]}function Le(e,r){return e.get(r)}function Oe(e,r,t){e[r]=t}function Ve(e,r,t){e.set(t,r)}function Re(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?Le:Be,setter:r?Ve:Oe}}function Ne(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(F(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!pe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Ee(n),de(n))}return r}function ke(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,F(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!pe(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Ee(i),de(i))}return n}function Fe(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!pe(n=r[o]))return null;e[i]=Ee(n),e[i+1]=de(n),i+=2}return e}var Me=2*se.BYTES_PER_ELEMENT,Pe=ge();function Ce(e){return e instanceof We||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ie(e){return e===We||"Complex128Array"===e.name}function Ye(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Me}function Ge(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Me}function We(){var e,r,t,n;if(r=arguments.length,!(this instanceof We))return 0===r?new We:1===r?new We(arguments[0]):2===r?new We(arguments[0],arguments[1]):new We(arguments[0],arguments[1],arguments[2]);if(0===r)t=new se(0);else if(1===r)if(R(arguments[0]))t=new se(2*arguments[0]);else if(M(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&pe(t[0])){if(null===(t=Fe(new se(2*n),t))){if(!be(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new se(arguments[0])}}else{if(Ye(t))t=_e(t,0);else if(Ge(t))t=xe(t,0);else if(!be(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new se(t)}else if(C(arguments[0])){if(!x((t=arguments[0]).byteLength/Me))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Me+". Byte length: `"+t.byteLength+"`.");t=new se(t)}else{if(!Y(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Pe)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!ie(t[we]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!ie((t=t[we]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ne(t))instanceof Error)throw t;t=new se(t)}else{if(!C(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!R(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!x(e/Me))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Me+". Value: `"+e+"`.");if(2===r){if(!x((n=t.byteLength-e)/Me))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Me+". View byte length: `"+n+"`.");t=new se(t,e)}else{if(!R(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Me>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Me+"`.");t=new se(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}return c(We,"BYTES_PER_ELEMENT",Me),c(We,"name","Complex64Array"),c(We,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,s;if(!ie(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ie(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Ce(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(pe(l=n.call(r,e.get(c),c)))i[s]=Ee(l),i[s+1]=de(l);else{if(!(F(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(M(e)){if(n){for(u=e.length,a=Re(e),c=0;c<u;c++)if(!pe(a.getter(e,c))){f=!0;break}if(f){if(!be(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(pe(l=n.call(r,a.getter(e,c),c)))i[s]=Ee(l),i[s+1]=de(l);else{if(!(F(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(Y(e)&&Pe&&ie(e[we])){if(!ie((i=e[we]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?ke(i,n,r):Ne(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(We,"of",(function(){var e,r;if(!ie(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),ve(We.prototype,"buffer",(function(){return this._buffer.buffer})),ve(We.prototype,"byteLength",(function(){return this._buffer.byteLength})),ve(We.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(We.prototype,"BYTES_PER_ELEMENT",We.BYTES_PER_ELEMENT),c(We.prototype,"copyWithin",(function(e,r){if(!Ce(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(We.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Ce(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new me(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),we&&c(t,we,(function(){return r.entries()})),t})),c(We.prototype,"get",(function(e){var r;if(!Ce(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new me((r=this._buffer)[e*=2],r[e+1])})),ve(We.prototype,"length",(function(){return this._length})),c(We.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Ce(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!R(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(pe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ee(e),void(n[t+1]=de(e))}if(Ce(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Me,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new se(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!M(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!pe(e[f])){i=!0;break}if(i){if(!be(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Me,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new se(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ee(u),n[t+1]=de(u),t+=2}})),function(e){return e instanceof We||"Complex64Array"===ne(e)}}));
//# sourceMappingURL=index.js.map