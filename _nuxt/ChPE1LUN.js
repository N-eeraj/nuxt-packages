import{_ as p}from"./CucqMbMf.js";import{_ as f}from"./BSi_58HT.js";import{_ as k}from"./B4X8Ad5w.js";import{N as b,c as x}from"./B0zDXpjV.js";import{y as i,D as h,B as a,C as s,u as g,a6 as c,A as r,z as S}from"./C-D7RAXM.js";import{_ as B}from"./KFFx0LwD.js";import"./Cx6GQR7a.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./CyUEWEuS.js";import"./CWMk71ul.js";const C=r("h2",null," Demo ",-1),N={__name:"Snackbar",setup(l){const m=b(),_=()=>{const o=Math.random();let e,t;o<.25?(e="error",t="Error Text"):o<.5?(e="warning",t="Warning Text"):o<.75?(e="info",t="Info Text"):(e="success",t="Success Text"),m.add({type:e,text:t})},{snackbarDemo:n}=x();return(o,e)=>{const t=f,u=p,d=k;return i(),h("section",null,[a(t,{to:"#demo",class:"package-subtitle"},{default:s(()=>[C]),_:1}),a(u,{code:g(n),"file-name":"Snackbar.vue",class:"mb-4"},null,8,["code"]),a(d,{class:"bg-primary",onClick:_},{default:s(()=>[c(" Show Snackbar ")]),_:1})])}}},w=r("span",{class:"text-light"},[c(" Add the following component to the "),r("code",{class:"py-1 px-2 bg-background-code text-sm rounded"},"app.vue"),c(" file ")],-1),y="npm i nuxt-snackbar",D=`modules: ['nuxt-snackbar']
snackbar: {
  bottom: true,
  right: true,
  duration: 3000
},`,T=`<template>
  <NuxtSnackbar />
</template>`,W={__name:"snackbar",setup(l){return(m,_)=>{const n=p,o=N,e=B;return i(),S(e,{"installation-code":y,"set-up-code":D},{default:s(()=>[w,a(n,{"file-name":"app.vue",code:T,class:"mb-4"}),a(o)]),_:1})}}};export{W as default};
