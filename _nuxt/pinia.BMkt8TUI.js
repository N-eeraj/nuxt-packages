import{_}from"./nuxt-link.DHe424kz.js";import{u as f,_ as x,a as C}from"./Layout.DMCaMVM-.js";import{d as g,s as k}from"./entry.BBVaCfD-.js";import{a as w,o as l,c as S,d as s,w as c,b as r,u as e,t as b,j as h,e as D}from"./swiper-vue.BUXlJbNq.js";import"./Icon.B1k7kTRp.js";import"./index.CzCfPO9Z.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./toast.DSNorivi.js";const v=g("demo",()=>{const o=w(0);return{counter:o,updateCount:()=>o.value++}}),B=`import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const counter = ref(0)
  const updateCount = () => counter.value++

  return { counter, updateCount }
})
`,j=r("h2",null," Demo ",-1),y={class:"flex gap-x-5 flex-wrap"},N={__name:"Pinia",setup(o){const t=v(),{counter:u}=k(t),{updateCount:n}=t,{piniaDemo:a}=f();return(L,i)=>{const m=_,p=x;return l(),S("section",null,[s(m,{to:"#demo",class:"package-subtitle"},{default:c(()=>[j]),_:1}),r("div",y,[s(p,{code:e(B),lang:"js","file-name":"store.js",class:"flex-1 w-full md:w-5/12"},null,8,["code"]),s(p,{code:e(a),"file-name":"Counter.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),r("button",{class:"w-32 mt-8 p-2 bg-primary hover:bg-primary/75 text-background rounded",onClick:i[0]||(i[0]=(...d)=>e(n)&&e(n)(...d))}," Count is: "+b(e(u)),1)])}}},P="bun i @pinia/nuxt",V="modules: ['@pinia/nuxt']",F={__name:"pinia",setup(o){return(t,u)=>{const n=N,a=C;return l(),h(a,{"installation-code":P,"set-up-code":V},{"setup-description":c(()=>[D(" Add the following line to the modules section of nuxt.config.{ts,js} ")]),default:c(()=>[s(n)]),_:1})}}};export{F as default};
