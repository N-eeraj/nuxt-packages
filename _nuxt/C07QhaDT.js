import{_ as d}from"./Db9g3-zM.js";import{_ as f}from"./Bo9PdBMa.js";import{q as x,s as C,c as g}from"./B8Gy0lQ2.js";import{a as k,y as m,D,B as s,C as p,A as r,u as o,R as S,z as w}from"./C-D7RAXM.js";import{_ as B}from"./CDmlD0lP.js";import"./BTQe6Kjf.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./DHF2ucQf.js";import"./CWMk71ul.js";const b=x("demo",()=>{const e=k(0);return{counter:e,updateCount:()=>e.value++}}),h=`import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const counter = ref(0)
  const updateCount = () => counter.value++

  return { counter, updateCount }
})
`,v=r("h2",null," Demo ",-1),y={class:"flex gap-x-5 flex-wrap"},P={__name:"Pinia",setup(e){const t=b(),{counter:c}=C(t),{updateCount:n}=t,{piniaDemo:a}=g();return(j,i)=>{const l=d,u=f;return m(),D("section",null,[s(l,{to:"#demo",class:"package-subtitle"},{default:p(()=>[v]),_:1}),r("div",y,[s(u,{code:o(h),lang:"js","file-name":"store.js",class:"flex-1 w-full md:w-5/12"},null,8,["code"]),s(u,{code:o(a),"file-name":"Counter.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),r("button",{class:"w-32 mt-8 p-2 bg-primary hover:bg-primary/75 text-background rounded",onClick:i[0]||(i[0]=(..._)=>o(n)&&o(n)(..._))}," Count is: "+S(o(c)),1)])}}},N="npm i @pinia/nuxt",$="modules: ['@pinia/nuxt']",G={__name:"pinia",setup(e){return(t,c)=>{const n=P,a=B;return m(),w(a,{"installation-code":N,"set-up-code":$},{default:p(()=>[s(n)]),_:1})}}};export{G as default};
