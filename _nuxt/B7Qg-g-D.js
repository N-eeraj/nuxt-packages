import{_ as Gt}from"./BSi_58HT.js";import{_ as Kt}from"./CucqMbMf.js";import{j as nt,t as pe,k as j,a3 as rt,l as Pe,i as At,ak as E,u as I,O as Et,p as jt,q as ke,b as Ve,o as Yt,a as ue,r as Be,n as ce,al as Xt,w as Jt,g as Ue,s as Qt,y as Ft,D as Zt,B as ge,C as we,A as Je,a6 as vt,z as en}from"./C-D7RAXM.js";import{c as tn}from"./B0zDXpjV.js";import{_ as nn}from"./KFFx0LwD.js";import"./Cx6GQR7a.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./CyUEWEuS.js";import"./CWMk71ul.js";/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function $(e){return typeof e=="function"}function Ct(e){return e==null}const Oe=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function at(e){return Number(e)>=0}function rn(e){const t=parseFloat(e);return isNaN(t)?e:t}function an(e){return typeof e=="object"&&e!==null}function ln(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function mt(e){if(!an(e)||ln(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function je(e,t){return Object.keys(t).forEach(n=>{if(mt(t[n])&&mt(e[n])){e[n]||(e[n]={}),je(e[n],t[n]);return}e[n]=t[n]}),e}function Ee(e){const t=e.split(".");if(!t.length)return"";let n=String(t[0]);for(let a=1;a<t.length;a++){if(at(t[a])){n+=`[${t[a]}]`;continue}n+=`.${t[a]}`}return n}const un={};function on(e){return un[e]}function ht(e,t,n){typeof n.value=="object"&&(n.value=F(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||t==="__proto__"?Object.defineProperty(e,t,n):e[t]=n.value}function F(e){if(typeof e!="object")return e;var t=0,n,a,l,u=Object.prototype.toString.call(e);if(u==="[object Object]"?l=Object.create(e.__proto__||null):u==="[object Array]"?l=Array(e.length):u==="[object Set]"?(l=new Set,e.forEach(function(s){l.add(F(s))})):u==="[object Map]"?(l=new Map,e.forEach(function(s,f){l.set(F(f),F(s))})):u==="[object Date]"?l=new Date(+e):u==="[object RegExp]"?l=new RegExp(e.source,e.flags):u==="[object DataView]"?l=new e.constructor(F(e.buffer)):u==="[object ArrayBuffer]"?l=e.slice(0):u.slice(-6)==="Array]"&&(l=new e.constructor(e)),l){for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)ht(l,a[t],Object.getOwnPropertyDescriptor(e,a[t]));for(t=0,a=Object.getOwnPropertyNames(e);t<a.length;t++)Object.hasOwnProperty.call(l,n=a[t])&&l[n]===e[n]||ht(l,n,Object.getOwnPropertyDescriptor(e,n))}return l||e}const De=Symbol("vee-validate-form"),sn=Symbol("vee-validate-field-instance"),Ne=Symbol("Default empty value"),dn=typeof window<"u";function Qe(e){return $(e)&&!!e.__locatorRef}function oe(e){return!!e&&$(e.parse)&&e.__type==="VVTypedSchema"}function Te(e){return!!e&&$(e.validate)}function Fe(e){return e==="checkbox"||e==="radio"}function cn(e){return Oe(e)||Array.isArray(e)}function fn(e){return Array.isArray(e)?e.length===0:Oe(e)&&Object.keys(e).length===0}function ze(e){return/^\[.+\]$/i.test(e)}function vn(e){return It(e)&&e.multiple}function It(e){return e.tagName==="SELECT"}function mn(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return e==="select"&&"multiple"in t&&n}function hn(e,t){return!mn(e,t)&&t.type!=="file"&&!Fe(t.type)}function Mt(e){return it(e)&&e.target&&"submit"in e.target}function it(e){return e?!!(typeof Event<"u"&&$(Event)&&e instanceof Event||e&&e.srcElement):!1}function yt(e,t){return t in e&&e[t]!==Ne}function H(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,l;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!H(e[a],t[a]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;for(a of e.entries())if(!H(a[1],t.get(a[0])))return!1;return!0}if(gt(e)&&gt(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(l=Object.keys(e),n=l.length,a=n;a--!==0;){var u=l[a];if(!H(e[u],t[u]))return!1}return!0}return e!==e&&t!==t}function gt(e){return dn?e instanceof File:!1}function lt(e){return ze(e)?e.replace(/\[|\]/gi,""):e}function X(e,t,n){return e?ze(t)?e[lt(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((l,u)=>cn(l)&&u in l?l[u]:n,e):n}function he(e,t,n){if(ze(t)){e[lt(t)]=n;return}const a=t.split(/\.|\[(\d+)\]/).filter(Boolean);let l=e;for(let u=0;u<a.length;u++){if(u===a.length-1){l[a[u]]=n;return}(!(a[u]in l)||Ct(l[a[u]]))&&(l[a[u]]=at(a[u+1])?[]:{}),l=l[a[u]]}}function Ye(e,t){if(Array.isArray(e)&&at(t)){e.splice(Number(t),1);return}Oe(e)&&delete e[t]}function pt(e,t){if(ze(t)){delete e[lt(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let u=0;u<n.length;u++){if(u===n.length-1){Ye(a,n[u]);break}if(!(n[u]in a)||Ct(a[n[u]]))break;a=a[n[u]]}const l=n.map((u,s)=>X(e,n.slice(0,s).join(".")));for(let u=l.length-1;u>=0;u--)if(fn(l[u])){if(u===0){Ye(e,n[0]);continue}Ye(l[u-1],n[u-1])}}function ne(e){return Object.keys(e)}function wt(e,t=void 0){const n=Ue();return(n==null?void 0:n.provides[e])||At(e,t)}function bt(e,t,n){if(Array.isArray(e)){const a=[...e],l=a.findIndex(u=>H(u,t));return l>=0?a.splice(l,1):a.push(t),a}return H(e,t)?n:t}function Vt(e,t=0){let n=null,a=[];return function(...l){return n&&clearTimeout(n),n=setTimeout(()=>{const u=e(...l);a.forEach(s=>s(u)),a=[]},t),new Promise(u=>a.push(u))}}function yn(e,t){return Oe(t)&&t.number?rn(e):e}function Ze(e,t){let n;return async function(...l){const u=e(...l);n=u;const s=await u;return u!==n?s:(n=void 0,t(s,l))}}function et(e){return Array.isArray(e)?e:e?[e]:[]}function Ie(e,t){const n={};for(const a in e)t.includes(a)||(n[a]=e[a]);return n}function gn(e){let t=null,n=[];return function(...a){const l=ce(()=>{if(t!==l)return;const u=e(...a);n.forEach(s=>s(u)),n=[],t=null});return t=l,new Promise(u=>n.push(u))}}function ut(e,t,n){return t.slots.default?typeof e=="string"||!e?t.slots.default(n()):{default:()=>{var a,l;return(l=(a=t.slots).default)===null||l===void 0?void 0:l.call(a,n())}}:t.slots.default}function Xe(e){if(Pt(e))return e._value}function Pt(e){return"_value"in e}function pn(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function Re(e){if(!it(e))return e;const t=e.target;if(Fe(t.type)&&Pt(t))return Xe(t);if(t.type==="file"&&t.files){const n=Array.from(t.files);return t.multiple?n:n[0]}if(vn(t))return Array.from(t.options).filter(n=>n.selected&&!n.disabled).map(Xe);if(It(t)){const n=Array.from(t.options).find(a=>a.selected);return n?Xe(n):t.value}return pn(t)}function kt(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?Oe(e)&&e._$$isNormalized?e:Oe(e)?Object.keys(e).reduce((n,a)=>{const l=bn(e[a]);return e[a]!==!1&&(n[a]=Ot(l)),n},t):typeof e!="string"?t:e.split("|").reduce((n,a)=>{const l=Vn(a);return l.name&&(n[l.name]=Ot(l.params)),n},t):t}function bn(e){return e===!0?[]:Array.isArray(e)||Oe(e)?e:[e]}function Ot(e){const t=n=>typeof n=="string"&&n[0]==="@"?On(n.slice(1)):n;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,a)=>(n[a]=t(e[a]),n),{})}const Vn=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function On(e){const t=n=>X(n,e)||n[e];return t.__locatorRef=e,t}function _n(e){return Array.isArray(e)?e.filter(Qe):ne(e).filter(t=>Qe(e[t])).map(t=>e[t])}const Sn={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let An=Object.assign({},Sn);const be=()=>An;async function Bt(e,t,n={}){const a=n==null?void 0:n.bails,l={name:(n==null?void 0:n.name)||"{field}",rules:t,label:n==null?void 0:n.label,bails:a??!0,formData:(n==null?void 0:n.values)||{}},s=(await En(l,e)).errors;return{errors:s,valid:!s.length}}async function En(e,t){if(oe(e.rules)||Te(e.rules))return Fn(t,e.rules);if($(e.rules)||Array.isArray(e.rules)){const s={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},f=Array.isArray(e.rules)?e.rules:[e.rules],d=f.length,c=[];for(let O=0;O<d;O++){const g=f[O],S=await g(t,s);if(!(typeof S!="string"&&!Array.isArray(S)&&S)){if(Array.isArray(S))c.push(...S);else{const w=typeof S=="string"?S:Tt(s);c.push(w)}if(e.bails)return{errors:c}}}return{errors:c}}const n=Object.assign(Object.assign({},e),{rules:kt(e.rules)}),a=[],l=Object.keys(n.rules),u=l.length;for(let s=0;s<u;s++){const f=l[s],d=await Cn(n,t,{name:f,params:n.rules[f]});if(d.error&&(a.push(d.error),e.bails))return{errors:a}}return{errors:a}}function jn(e){return!!e&&e.name==="ValidationError"}function Nt(e){return{__type:"VVTypedSchema",async parse(n){var a;try{return{output:await e.validate(n,{abortEarly:!1}),errors:[]}}catch(l){if(!jn(l))throw l;if(!(!((a=l.inner)===null||a===void 0)&&a.length)&&l.errors.length)return{errors:[{path:l.path,errors:l.errors}]};const u=l.inner.reduce((s,f)=>{const d=f.path||"";return s[d]||(s[d]={errors:[],path:d}),s[d].errors.push(...f.errors),s},{});return{errors:Object.values(u)}}}}}async function Fn(e,t){const a=await(oe(t)?t:Nt(t)).parse(e),l=[];for(const u of a.errors)u.errors.length&&l.push(...u.errors);return{errors:l}}async function Cn(e,t,n){const a=on(n.name);if(!a)throw new Error(`No such validator '${n.name}' exists.`);const l=In(n.params,e.formData),u={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:l})},s=await a(t,l,u);return typeof s=="string"?{error:s}:{error:s?void 0:Tt(u)}}function Tt(e){const t=be().generateMessage;return t?t(e):"Field is invalid"}function In(e,t){const n=a=>Qe(a)?a(t):a;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((a,l)=>(a[l]=n(e[l]),a),{})}async function Mn(e,t){const a=await(oe(e)?e:Nt(e)).parse(F(t)),l={},u={};for(const s of a.errors){const f=s.errors,d=(s.path||"").replace(/\["(\d+)"\]/g,(c,O)=>`[${O}]`);l[d]={valid:!f.length,errors:f},f.length&&(u[d]=f[0])}return{valid:!a.errors.length,results:l,errors:u,values:a.value}}async function wn(e,t,n){const l=ne(e).map(async c=>{var O,g,S;const p=(O=n==null?void 0:n.names)===null||O===void 0?void 0:O[c],w=await Bt(X(t,c),e[c],{name:(p==null?void 0:p.name)||c,label:p==null?void 0:p.label,values:t,bails:(S=(g=n==null?void 0:n.bailsMap)===null||g===void 0?void 0:g[c])!==null&&S!==void 0?S:!0});return Object.assign(Object.assign({},w),{path:c})});let u=!0;const s=await Promise.all(l),f={},d={};for(const c of s)f[c.path]={valid:c.valid,errors:c.errors},c.valid||(u=!1,d[c.path]=c.errors[0]);return{valid:u,results:f,errors:d}}let _t=0;function Pn(e,t){const{value:n,initialValue:a,setInitialValue:l}=kn(e,t.modelValue,t.form);if(!t.form){let d=function(p){var w;"value"in p&&(n.value=p.value),"errors"in p&&O(p.errors),"touched"in p&&(S.touched=(w=p.touched)!==null&&w!==void 0?w:S.touched),"initialValue"in p&&l(p.initialValue)};const{errors:c,setErrors:O}=Tn(),g=_t>=Number.MAX_SAFE_INTEGER?0:++_t,S=Nn(n,a,c,t.schema);return{id:g,path:e,value:n,initialValue:a,meta:S,flags:{pendingUnmount:{[g]:!1},pendingReset:!1},errors:c,setState:d}}const u=t.form.createPathState(e,{bails:t.bails,label:t.label,type:t.type,validate:t.validate,schema:t.schema}),s=j(()=>u.errors);function f(d){var c,O,g;"value"in d&&(n.value=d.value),"errors"in d&&((c=t.form)===null||c===void 0||c.setFieldError(I(e),d.errors)),"touched"in d&&((O=t.form)===null||O===void 0||O.setFieldTouched(I(e),(g=d.touched)!==null&&g!==void 0?g:!1)),"initialValue"in d&&l(d.initialValue)}return{id:Array.isArray(u.id)?u.id[u.id.length-1]:u.id,path:e,value:n,errors:s,meta:u,initialValue:a,flags:u.__flags,setState:f}}function kn(e,t,n){const a=ue(I(t));function l(){return n?X(n.initialValues.value,I(e),I(a)):I(a)}function u(c){if(!n){a.value=c;return}n.setFieldInitialValue(I(e),c,!0)}const s=j(l);if(!n)return{value:ue(l()),initialValue:s,setInitialValue:u};const f=Bn(t,n,s,e);return n.stageInitialValue(I(e),f,!0),{value:j({get(){return X(n.values,I(e))},set(c){n.setFieldValue(I(e),c,!1)}}),initialValue:s,setInitialValue:u}}function Bn(e,t,n,a){return ke(e)?I(e):e!==void 0?e:X(t.values,I(a),I(n))}function Nn(e,t,n,a){var l,u;const s=(u=(l=a==null?void 0:a.describe)===null||l===void 0?void 0:l.call(a).required)!==null&&u!==void 0?u:!1,f=Be({touched:!1,pending:!1,valid:!0,required:s,validated:!!I(n).length,initialValue:j(()=>I(t)),dirty:j(()=>!H(I(e),I(t)))});return Ve(n,d=>{f.valid=!d.length},{immediate:!0,flush:"sync"}),f}function Tn(){const e=ue([]);return{errors:e,setErrors:t=>{e.value=et(t)}}}function Rn(e,t,n){return Fe(n==null?void 0:n.type)?Dn(e,t,n):Rt(e,t,n)}function Rt(e,t,n){const{initialValue:a,validateOnMount:l,bails:u,type:s,checkedValue:f,label:d,validateOnValueUpdate:c,uncheckedValue:O,controlled:g,keepValueOnUnmount:S,syncVModel:p,form:w}=Un(n),J=g?wt(De):void 0,b=w||J,z=j(()=>Ee(E(e))),U=j(()=>{if(E(b==null?void 0:b.schema))return;const V=I(t);return Te(V)||oe(V)||$(V)||Array.isArray(V)?V:kt(V)}),{id:L,value:Q,initialValue:Z,meta:k,setState:ie,errors:B,flags:D}=Pn(z,{modelValue:a,form:b,bails:u,label:d,type:s,validate:U.value?te:void 0,schema:oe(t)?t:void 0}),R=j(()=>B.value[0]);p&&zn({value:Q,prop:p,handleChange:_,shouldValidate:()=>c&&!D.pendingReset});const se=(m,V=!1)=>{k.touched=!0,V&&ee()};async function fe(m){var V,M;if(b!=null&&b.validateSchema){const{results:C}=await b.validateSchema(m);return(V=C[E(z)])!==null&&V!==void 0?V:{valid:!0,errors:[]}}return U.value?Bt(Q.value,U.value,{name:E(z),label:E(d),values:(M=b==null?void 0:b.values)!==null&&M!==void 0?M:{},bails:u}):{valid:!0,errors:[]}}const ee=Ze(async()=>(k.pending=!0,k.validated=!0,fe("validated-only")),m=>(D.pendingUnmount[q.id]||(ie({errors:m.errors}),k.pending=!1,k.valid=m.valid),m)),G=Ze(async()=>fe("silent"),m=>(k.valid=m.valid,m));function te(m){return(m==null?void 0:m.mode)==="silent"?G():ee()}function _(m,V=!0){const M=Re(m);Se(M,V)}Et(()=>{if(l)return ee();(!b||!b.validateSchema)&&G()});function K(m){k.touched=m}function re(m){var V;const M=m&&"value"in m?m.value:Z.value;ie({value:F(M),initialValue:F(M),touched:(V=m==null?void 0:m.touched)!==null&&V!==void 0?V:!1,errors:(m==null?void 0:m.errors)||[]}),k.pending=!1,k.validated=!1,G()}const me=Ue();function Se(m,V=!0){Q.value=me&&p?yn(m,me.props.modelModifiers):m,(V?ee:G)()}function Ce(m){ie({errors:Array.isArray(m)?m:[m]})}const ot=j({get(){return Q.value},set(m){Se(m,c)}}),q={id:L,name:z,label:d,value:ot,meta:k,errors:B,errorMessage:R,type:s,checkedValue:f,uncheckedValue:O,bails:u,keepValueOnUnmount:S,resetField:re,handleReset:()=>re(),validate:te,handleChange:_,handleBlur:se,setState:ie,setTouched:K,setErrors:Ce,setValue:Se};if(jt(sn,q),ke(t)&&typeof I(t)!="function"&&Ve(t,(m,V)=>{H(m,V)||(k.validated?ee():G())},{deep:!0}),!b)return q;const xe=j(()=>{const m=U.value;return!m||$(m)||Te(m)||oe(m)||Array.isArray(m)?{}:Object.keys(m).reduce((V,M)=>{const C=_n(m[M]).map(ve=>ve.__locatorRef).reduce((ve,de)=>{const ae=X(b.values,de)||b.values[de];return ae!==void 0&&(ve[de]=ae),ve},{});return Object.assign(V,C),V},{})});return Ve(xe,(m,V)=>{if(!Object.keys(m).length)return;!H(m,V)&&(k.validated?ee():G())}),Yt(()=>{var m;const V=(m=E(q.keepValueOnUnmount))!==null&&m!==void 0?m:E(b.keepValuesOnUnmount),M=E(z);if(V||!b||D.pendingUnmount[q.id]){b==null||b.removePathState(M,L);return}D.pendingUnmount[q.id]=!0;const C=b.getPathState(M);if(Array.isArray(C==null?void 0:C.id)&&(C!=null&&C.multiple)?C!=null&&C.id.includes(q.id):(C==null?void 0:C.id)===q.id){if(C!=null&&C.multiple&&Array.isArray(C.value)){const de=C.value.findIndex(ae=>H(ae,E(q.checkedValue)));if(de>-1){const ae=[...C.value];ae.splice(de,1),b.setFieldValue(M,ae)}Array.isArray(C.id)&&C.id.splice(C.id.indexOf(q.id),1)}else b.unsetPathValue(E(z));b.removePathState(M,L)}}),q}function Un(e){const t=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(e!=null&&e.syncVModel),a=typeof(e==null?void 0:e.syncVModel)=="string"?e.syncVModel:(e==null?void 0:e.modelPropName)||"modelValue",l=n&&!("initialValue"in(e||{}))?tt(Ue(),a):e==null?void 0:e.initialValue;if(!e)return Object.assign(Object.assign({},t()),{initialValue:l});const u="valueProp"in e?e.valueProp:e.checkedValue,s="standalone"in e?!e.standalone:e.controlled,f=(e==null?void 0:e.modelPropName)||(e==null?void 0:e.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},t()),e||{}),{initialValue:l,controlled:s??!0,checkedValue:u,syncVModel:f})}function Dn(e,t,n){const a=n!=null&&n.standalone?void 0:wt(De),l=n==null?void 0:n.checkedValue,u=n==null?void 0:n.uncheckedValue;function s(f){const d=f.handleChange,c=j(()=>{const g=E(f.value),S=E(l);return Array.isArray(g)?g.findIndex(p=>H(p,S))>=0:H(S,g)});function O(g,S=!0){var p,w;if(c.value===((p=g==null?void 0:g.target)===null||p===void 0?void 0:p.checked)){S&&f.validate();return}const J=E(e),b=a==null?void 0:a.getPathState(J),z=Re(g);let U=(w=E(l))!==null&&w!==void 0?w:z;a&&(b!=null&&b.multiple)&&b.type==="checkbox"?U=bt(X(a.values,J)||[],U,void 0):(n==null?void 0:n.type)==="checkbox"&&(U=bt(E(f.value),U,E(u))),d(U,S)}return Object.assign(Object.assign({},f),{checked:c,checkedValue:l,uncheckedValue:u,handleChange:O})}return s(Rt(e,t,n))}function zn({prop:e,value:t,handleChange:n,shouldValidate:a}){const l=Ue();if(!l||!e)return;const u=typeof e=="string"?e:"modelValue",s=`update:${u}`;u in l.props&&(Ve(t,f=>{H(f,tt(l,u))||l.emit(s,f)}),Ve(()=>tt(l,u),f=>{if(f===Ne&&t.value===void 0)return;const d=f===Ne?void 0:f;H(d,t.value)||n(d,a())}))}function tt(e,t){if(e)return e.props[t]}const xn=nt({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>be().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Ne},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,t){const n=pe(e,"rules"),a=pe(e,"name"),l=pe(e,"label"),u=pe(e,"uncheckedValue"),s=pe(e,"keepValue"),{errors:f,value:d,errorMessage:c,validate:O,handleChange:g,handleBlur:S,setTouched:p,resetField:w,handleReset:J,meta:b,checked:z,setErrors:U}=Rn(a,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:Ln(e,t),checkedValue:t.attrs.value,uncheckedValue:u,label:l,validateOnValueUpdate:e.validateOnModelUpdate,keepValueOnUnmount:s,syncVModel:!0}),L=function(D,R=!0){g(D,R)},Q=j(()=>{const{validateOnInput:B,validateOnChange:D,validateOnBlur:R,validateOnModelUpdate:se}=$n(e);function fe(_){S(_,R),$(t.attrs.onBlur)&&t.attrs.onBlur(_)}function ee(_){L(_,B),$(t.attrs.onInput)&&t.attrs.onInput(_)}function G(_){L(_,D),$(t.attrs.onChange)&&t.attrs.onChange(_)}const te={name:e.name,onBlur:fe,onInput:ee,onChange:G};return te["onUpdate:modelValue"]=_=>L(_,se),te}),Z=j(()=>{const B=Object.assign({},Q.value);Fe(t.attrs.type)&&z&&(B.checked=z.value);const D=St(e,t);return hn(D,t.attrs)&&(B.value=d.value),B}),k=j(()=>Object.assign(Object.assign({},Q.value),{modelValue:d.value}));function ie(){return{field:Z.value,componentField:k.value,value:d.value,meta:b,errors:f.value,errorMessage:c.value,validate:O,resetField:w,handleChange:L,handleInput:B=>L(B,!1),handleReset:J,handleBlur:Q.value.onBlur,setTouched:p,setErrors:U}}return t.expose({value:d,meta:b,errors:f,errorMessage:c,setErrors:U,setTouched:p,reset:w,validate:O,handleChange:g}),()=>{const B=rt(St(e,t)),D=ut(B,t,ie);return B?Pe(B,Object.assign(Object.assign({},t.attrs),Z.value),D):D}}});function St(e,t){let n=e.as||"";return!e.as&&!t.slots.default&&(n="input"),n}function $n(e){var t,n,a,l;const{validateOnInput:u,validateOnChange:s,validateOnBlur:f,validateOnModelUpdate:d}=be();return{validateOnInput:(t=e.validateOnInput)!==null&&t!==void 0?t:u,validateOnChange:(n=e.validateOnChange)!==null&&n!==void 0?n:s,validateOnBlur:(a=e.validateOnBlur)!==null&&a!==void 0?a:f,validateOnModelUpdate:(l=e.validateOnModelUpdate)!==null&&l!==void 0?l:d}}function Ln(e,t){return Fe(t.attrs.type)?yt(e,"modelValue")?e.modelValue:void 0:yt(e,"modelValue")?e.modelValue:t.attrs.value}const qn=xn;let Wn=0;const Me=["bails","fieldsCount","id","multiple","type","validate"];function Ut(e){const t=Object.assign({},E((e==null?void 0:e.initialValues)||{})),n=I(e==null?void 0:e.validationSchema);return n&&oe(n)&&$(n.cast)?F(n.cast(t)||{}):F(t)}function Hn(e){var t;const n=Wn++;let a=0;const l=ue(!1),u=ue(!1),s=ue(0),f=[],d=Be(Ut(e)),c=ue([]),O=ue({}),g=ue({}),S=gn(()=>{g.value=c.value.reduce((i,r)=>(i[Ee(E(r.path))]=r,i),{})});function p(i,r){const o=_(i);if(!o){typeof i=="string"&&(O.value[Ee(i)]=et(r));return}if(typeof i=="string"){const v=Ee(i);O.value[v]&&delete O.value[v]}o.errors=et(r),o.valid=!o.errors.length}function w(i){ne(i).forEach(r=>{p(r,i[r])})}e!=null&&e.initialErrors&&w(e.initialErrors);const J=j(()=>{const i=c.value.reduce((r,o)=>(o.errors.length&&(r[o.path]=o.errors),r),{});return Object.assign(Object.assign({},O.value),i)}),b=j(()=>ne(J.value).reduce((i,r)=>{const o=J.value[r];return o!=null&&o.length&&(i[r]=o[0]),i},{})),z=j(()=>c.value.reduce((i,r)=>(i[r.path]={name:r.path||"",label:r.label||""},i),{})),U=j(()=>c.value.reduce((i,r)=>{var o;return i[r.path]=(o=r.bails)!==null&&o!==void 0?o:!0,i},{})),L=Object.assign({},(e==null?void 0:e.initialErrors)||{}),Q=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:Z,originalInitialValues:k,setInitialValues:ie}=Kn(c,d,e),B=Gn(c,d,k,b),D=j(()=>c.value.reduce((i,r)=>{const o=X(d,r.path);return he(i,r.path,o),i},{})),R=e==null?void 0:e.validationSchema;function se(i,r){var o,v;const y=j(()=>X(Z.value,E(i))),h=g.value[E(i)],A=(r==null?void 0:r.type)==="checkbox"||(r==null?void 0:r.type)==="radio";if(h&&A){h.multiple=!0;const le=a++;return Array.isArray(h.id)?h.id.push(le):h.id=[h.id,le],h.fieldsCount++,h.__flags.pendingUnmount[le]=!1,h}const N=j(()=>X(d,E(i))),T=E(i),W=re.findIndex(le=>le===T);W!==-1&&re.splice(W,1);const P=j(()=>{var le,Ae,He,ft,Ge,Ke;return oe(R)?(He=(Ae=(le=R).describe)===null||Ae===void 0?void 0:Ae.call(le,E(i)).required)!==null&&He!==void 0?He:!1:oe(r==null?void 0:r.schema)&&(Ke=(Ge=(ft=r==null?void 0:r.schema).describe)===null||Ge===void 0?void 0:Ge.call(ft).required)!==null&&Ke!==void 0?Ke:!1}),x=a++,Y=Be({id:x,path:i,touched:!1,pending:!1,valid:!0,validated:!!(!((o=L[T])===null||o===void 0)&&o.length),required:P,initialValue:y,errors:Qt([]),bails:(v=r==null?void 0:r.bails)!==null&&v!==void 0?v:!1,label:r==null?void 0:r.label,type:(r==null?void 0:r.type)||"default",value:N,multiple:!1,__flags:{pendingUnmount:{[x]:!1},pendingReset:!1},fieldsCount:1,validate:r==null?void 0:r.validate,dirty:j(()=>!H(I(N),I(y)))});return c.value.push(Y),g.value[T]=Y,S(),b.value[T]&&!L[T]&&ce(()=>{ye(T,{mode:"silent"})}),ke(i)&&Ve(i,le=>{S();const Ae=F(N.value);g.value[le]=Y,ce(()=>{he(d,le,Ae)})}),Y}const fe=Vt(ct,5),ee=Vt(ct,5),G=Ze(async i=>await(i==="silent"?fe():ee()),(i,[r])=>{const o=ne(V.errorBag.value),y=[...new Set([...ne(i.results),...c.value.map(h=>h.path),...o])].sort().reduce((h,A)=>{var N;const T=A,W=_(T)||K(T),P=((N=i.results[T])===null||N===void 0?void 0:N.errors)||[],x=E(W==null?void 0:W.path)||T,Y=Yn({errors:P,valid:!P.length},h.results[x]);return h.results[x]=Y,Y.valid||(h.errors[x]=Y.errors[0]),W&&O.value[x]&&delete O.value[x],W?(W.valid=Y.valid,r==="silent"||r==="validated-only"&&!W.validated||p(W,Y.errors),h):(p(x,P),h)},{valid:i.valid,results:{},errors:{}});return i.values&&(y.values=i.values),ne(y.results).forEach(h=>{var A;const N=_(h);N&&r!=="silent"&&(r==="validated-only"&&!N.validated||p(N,(A=y.results[h])===null||A===void 0?void 0:A.errors))}),y});function te(i){c.value.forEach(i)}function _(i){const r=typeof i=="string"?Ee(i):i;return typeof r=="string"?g.value[r]:r}function K(i){return c.value.filter(o=>i.startsWith(o.path)).reduce((o,v)=>o?v.path.length>o.path.length?v:o:v,void 0)}let re=[],me;function Se(i){return re.push(i),me||(me=ce(()=>{[...re].sort().reverse().forEach(o=>{pt(d,o)}),re=[],me=null})),me}function Ce(i){return function(o,v){return function(h){return h instanceof Event&&(h.preventDefault(),h.stopPropagation()),te(A=>A.touched=!0),l.value=!0,s.value++,_e().then(A=>{const N=F(d);if(A.valid&&typeof o=="function"){const T=F(D.value);let W=i?T:N;return A.values&&(W=A.values),o(W,{evt:h,controlledValues:T,setErrors:w,setFieldError:p,setTouched:$e,setFieldTouched:ae,setValues:ve,setFieldValue:M,resetForm:Le,resetField:st})}!A.valid&&typeof v=="function"&&v({values:N,evt:h,errors:A.errors,results:A.results})}).then(A=>(l.value=!1,A),A=>{throw l.value=!1,A})}}}const q=Ce(!1);q.withControlled=Ce(!0);function xe(i,r){const o=c.value.findIndex(y=>y.path===i&&(Array.isArray(y.id)?y.id.includes(r):y.id===r)),v=c.value[o];if(!(o===-1||!v)){if(ce(()=>{ye(i,{mode:"silent",warn:!1})}),v.multiple&&v.fieldsCount&&v.fieldsCount--,Array.isArray(v.id)){const y=v.id.indexOf(r);y>=0&&v.id.splice(y,1),delete v.__flags.pendingUnmount[r]}(!v.multiple||v.fieldsCount<=0)&&(c.value.splice(o,1),dt(i),S(),delete g.value[i])}}function m(i){ne(g.value).forEach(r=>{r.startsWith(i)&&delete g.value[r]}),c.value=c.value.filter(r=>!r.path.startsWith(i)),ce(()=>{S()})}const V={formId:n,values:d,controlledValues:D,errorBag:J,errors:b,schema:R,submitCount:s,meta:B,isSubmitting:l,isValidating:u,fieldArrays:f,keepValuesOnUnmount:Q,validateSchema:I(R)?G:void 0,validate:_e,setFieldError:p,validateField:ye,setFieldValue:M,setValues:ve,setErrors:w,setFieldTouched:ae,setTouched:$e,resetForm:Le,resetField:st,handleSubmit:q,useFieldModel:qt,defineInputBinds:Wt,defineComponentBinds:Ht,defineField:We,stageInitialValue:$t,unsetInitialValue:dt,setFieldInitialValue:qe,createPathState:se,getPathState:_,unsetPathValue:Se,removePathState:xe,initialValues:Z,getAllPathStates:()=>c.value,destroyPath:m,isFieldTouched:Dt,isFieldDirty:zt,isFieldValid:xt};function M(i,r,o=!0){const v=F(r),y=typeof i=="string"?i:i.path;_(y)||se(y),he(d,y,v),o&&ye(y)}function C(i,r=!0){ne(d).forEach(o=>{delete d[o]}),ne(i).forEach(o=>{M(o,i[o],!1)}),r&&_e()}function ve(i,r=!0){je(d,i),f.forEach(o=>o&&o.reset()),r&&_e()}function de(i,r){const o=_(E(i))||se(i);return j({get(){return o.value},set(v){var y;const h=E(i);M(h,v,(y=E(r))!==null&&y!==void 0?y:!1)}})}function ae(i,r){const o=_(i);o&&(o.touched=r)}function Dt(i){const r=_(i);return r?r.touched:c.value.filter(o=>o.path.startsWith(i)).some(o=>o.touched)}function zt(i){const r=_(i);return r?r.dirty:c.value.filter(o=>o.path.startsWith(i)).some(o=>o.dirty)}function xt(i){const r=_(i);return r?r.valid:c.value.filter(o=>o.path.startsWith(i)).every(o=>o.valid)}function $e(i){if(typeof i=="boolean"){te(r=>{r.touched=i});return}ne(i).forEach(r=>{ae(r,!!i[r])})}function st(i,r){var o;const v=r&&"value"in r?r.value:X(Z.value,i),y=_(i);y&&(y.__flags.pendingReset=!0),qe(i,F(v),!0),M(i,v,!1),ae(i,(o=r==null?void 0:r.touched)!==null&&o!==void 0?o:!1),p(i,(r==null?void 0:r.errors)||[]),ce(()=>{y&&(y.__flags.pendingReset=!1)})}function Le(i,r){let o=F(i!=null&&i.values?i.values:k.value);o=r!=null&&r.force?o:je(k.value,o),o=oe(R)&&$(R.cast)?R.cast(o):o,ie(o),te(v=>{var y;v.__flags.pendingReset=!0,v.validated=!1,v.touched=((y=i==null?void 0:i.touched)===null||y===void 0?void 0:y[v.path])||!1,M(v.path,X(o,v.path),!1),p(v.path,void 0)}),r!=null&&r.force?C(o,!1):ve(o,!1),w((i==null?void 0:i.errors)||{}),s.value=(i==null?void 0:i.submitCount)||0,ce(()=>{_e({mode:"silent"}),te(v=>{v.__flags.pendingReset=!1})})}async function _e(i){const r=(i==null?void 0:i.mode)||"force";if(r==="force"&&te(h=>h.validated=!0),V.validateSchema)return V.validateSchema(r);u.value=!0;const o=await Promise.all(c.value.map(h=>h.validate?h.validate(i).then(A=>({key:h.path,valid:A.valid,errors:A.errors})):Promise.resolve({key:h.path,valid:!0,errors:[]})));u.value=!1;const v={},y={};for(const h of o)v[h.key]={valid:h.valid,errors:h.errors},h.errors.length&&(y[h.key]=h.errors[0]);return{valid:o.every(h=>h.valid),results:v,errors:y}}async function ye(i,r){var o;const v=_(i);if(v&&(r==null?void 0:r.mode)!=="silent"&&(v.validated=!0),R){const{results:y}=await G((r==null?void 0:r.mode)||"validated-only");return y[i]||{errors:[],valid:!0}}return v!=null&&v.validate?v.validate(r):(!v&&(o=r==null?void 0:r.warn),Promise.resolve({errors:[],valid:!0}))}function dt(i){pt(Z.value,i)}function $t(i,r,o=!1){qe(i,r),he(d,i,r),o&&!(e!=null&&e.initialValues)&&he(k.value,i,F(r))}function qe(i,r,o=!1){he(Z.value,i,F(r)),o&&he(k.value,i,F(r))}async function ct(){const i=I(R);if(!i)return{valid:!0,results:{},errors:{}};u.value=!0;const r=Te(i)||oe(i)?await Mn(i,d):await wn(i,d,{names:z.value,bailsMap:U.value});return u.value=!1,r}const Lt=q((i,{evt:r})=>{Mt(r)&&r.target.submit()});Et(()=>{if(e!=null&&e.initialErrors&&w(e.initialErrors),e!=null&&e.initialTouched&&$e(e.initialTouched),e!=null&&e.validateOnMount){_e();return}V.validateSchema&&V.validateSchema("silent")}),ke(R)&&Ve(R,()=>{var i;(i=V.validateSchema)===null||i===void 0||i.call(V,"validated-only")}),jt(De,V);function We(i,r){const o=$(r)||r==null?void 0:r.label,v=_(E(i))||se(i,{label:o}),y=()=>$(r)?r(Ie(v,Me)):r||{};function h(){var P;v.touched=!0,((P=y().validateOnBlur)!==null&&P!==void 0?P:be().validateOnBlur)&&ye(v.path)}function A(){var P;((P=y().validateOnInput)!==null&&P!==void 0?P:be().validateOnInput)&&ce(()=>{ye(v.path)})}function N(){var P;((P=y().validateOnChange)!==null&&P!==void 0?P:be().validateOnChange)&&ce(()=>{ye(v.path)})}const T=j(()=>{const P={onChange:N,onInput:A,onBlur:h};return $(r)?Object.assign(Object.assign({},P),r(Ie(v,Me)).props||{}):r!=null&&r.props?Object.assign(Object.assign({},P),r.props(Ie(v,Me))):P});return[de(i,()=>{var P,x,Y;return(Y=(P=y().validateOnModelUpdate)!==null&&P!==void 0?P:(x=be())===null||x===void 0?void 0:x.validateOnModelUpdate)!==null&&Y!==void 0?Y:!0}),T]}function qt(i){return Array.isArray(i)?i.map(r=>de(r,!0)):de(i)}function Wt(i,r){const[o,v]=We(i,r);function y(){v.value.onBlur()}function h(N){const T=Re(N);M(E(i),T,!1),v.value.onInput()}function A(N){const T=Re(N);M(E(i),T,!1),v.value.onChange()}return j(()=>Object.assign(Object.assign({},v.value),{onBlur:y,onInput:h,onChange:A,value:o.value}))}function Ht(i,r){const[o,v]=We(i,r),y=_(E(i));function h(A){o.value=A}return j(()=>{const A=$(r)?r(Ie(y,Me)):r||{};return Object.assign({[A.model||"modelValue"]:o.value,[`onUpdate:${A.model||"modelValue"}`]:h},v.value)})}return Object.assign(Object.assign({},V),{values:Xt(d),handleReset:()=>Le(),submitForm:Lt})}function Gn(e,t,n,a){const l={touched:"some",pending:"some",valid:"every"},u=j(()=>!H(t,I(n)));function s(){const d=e.value;return ne(l).reduce((c,O)=>{const g=l[O];return c[O]=d[g](S=>S[O]),c},{})}const f=Be(s());return Jt(()=>{const d=s();f.touched=d.touched,f.valid=d.valid,f.pending=d.pending}),j(()=>Object.assign(Object.assign({initialValues:I(n)},f),{valid:f.valid&&!ne(a.value).length,dirty:u.value}))}function Kn(e,t,n){const a=Ut(n),l=ue(a),u=ue(F(a));function s(f,d=!1){l.value=je(F(l.value)||{},F(f)),u.value=je(F(u.value)||{},F(f)),d&&e.value.forEach(c=>{if(c.touched)return;const g=X(l.value,c.path);he(t,c.path,F(g))})}return{initialValues:l,originalInitialValues:u,setInitialValues:s}}function Yn(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}const Xn=nt({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,t){const n=pe(e,"validationSchema"),a=pe(e,"keepValues"),{errors:l,errorBag:u,values:s,meta:f,isSubmitting:d,isValidating:c,submitCount:O,controlledValues:g,validate:S,validateField:p,handleReset:w,resetForm:J,handleSubmit:b,setErrors:z,setFieldError:U,setFieldValue:L,setValues:Q,setFieldTouched:Z,setTouched:k,resetField:ie}=Hn({validationSchema:n.value?n:void 0,initialValues:e.initialValues,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:a}),B=b((_,{evt:K})=>{Mt(K)&&K.target.submit()},e.onInvalidSubmit),D=e.onSubmit?b(e.onSubmit,e.onInvalidSubmit):B;function R(_){it(_)&&_.preventDefault(),w(),typeof t.attrs.onReset=="function"&&t.attrs.onReset()}function se(_,K){return b(typeof _=="function"&&!K?_:K,e.onInvalidSubmit)(_)}function fe(){return F(s)}function ee(){return F(f.value)}function G(){return F(l.value)}function te(){return{meta:f.value,errors:l.value,errorBag:u.value,values:s,isSubmitting:d.value,isValidating:c.value,submitCount:O.value,controlledValues:g.value,validate:S,validateField:p,handleSubmit:se,handleReset:w,submitForm:B,setErrors:z,setFieldError:U,setFieldValue:L,setValues:Q,setFieldTouched:Z,setTouched:k,resetForm:J,resetField:ie,getValues:fe,getMeta:ee,getErrors:G}}return t.expose({setFieldError:U,setErrors:z,setFieldValue:L,setValues:Q,setFieldTouched:Z,setTouched:k,resetForm:J,validate:S,validateField:p,resetField:ie,getValues:fe,getMeta:ee,getErrors:G,values:s,meta:f,errors:l}),function(){const K=e.as==="form"?e.as:e.as?rt(e.as):null,re=ut(K,t,te);return K?Pe(K,Object.assign(Object.assign(Object.assign({},K==="form"?{novalidate:!0}:{}),t.attrs),{onSubmit:D,onReset:R}),re):re}}}),Jn=Xn,Qn=nt({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=At(De,void 0),a=j(()=>n==null?void 0:n.errors.value[e.name]);function l(){return{message:a.value}}return()=>{if(!a.value)return;const u=e.as?rt(e.as):e.as,s=ut(u,t,l),f=Object.assign({role:"alert"},t.attrs);return!u&&(Array.isArray(s)||!s)&&(s!=null&&s.length)?s:(Array.isArray(s)||!s)&&!(s!=null&&s.length)?Pe(u||"span",f,a.value):Pe(u,f,s)}}}),Zn=Qn,er=Je("h2",null," Demo ",-1),tr={class:"flex gap-x-5 flex-wrap mb-4"},nr={class:"text-light mt-4"},rr={__name:"VeeValidate",setup(e){const t=l=>l!=null&&l.trim()?!0:"This field is required",n=({input:l})=>alert(`You entered ${l}`),{veeValidateDemo:a}=tn();return(l,u)=>{const s=Gt,f=Kt,d=qn,c=Zn,O=Jn;return Ft(),Zt("section",null,[ge(s,{to:"#demo",class:"package-subtitle"},{default:we(()=>[er]),_:1}),Je("div",tr,[ge(f,{code:I(a),"file-name":"Form.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),ge(O,{class:"max-w-xs flex flex-col",onSubmit:n},{default:we(()=>[ge(d,{name:"input",placeholder:"Enter value",rules:t,class:"p-1"}),ge(c,{name:"input",class:"text-red-500"})]),_:1}),Je("p",nr,[vt(" To learn more visit the "),ge(s,{to:"https://vee-validate.logaretm.com/v4/guide/overview/",target:"_blank",rel:"nofollow",class:"text-primary"},{default:we(()=>[vt(" vee-validate website ")]),_:1})])])}}},ar="npm i @vee-validate/nuxt",ir=`modules: ['@vee-validate/nuxt']
veeValidate: {
  // disable or enable auto imports
  autoImports: true,
  // Use different names for components
  componentNames: {
    Form: 'VeeForm',
    Field: 'VeeField',
    FieldArray: 'VeeFieldArray',
    ErrorMessage: 'VeeErrorMessage',
  },
},`,yr={__name:"vee-validate",setup(e){return(t,n)=>{const a=rr,l=nn;return Ft(),en(l,{"installation-code":ar,"set-up-code":ir},{default:we(()=>[ge(a)]),_:1})}}};export{yr as default};