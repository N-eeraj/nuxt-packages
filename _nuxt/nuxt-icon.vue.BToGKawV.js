import{_ as l}from"./entry.BBVaCfD-.js";import{l as u,a as f,m as p,n as d,o as h,c as v,q as x,u as m}from"./swiper-vue.BUXlJbNq.js";const I=["innerHTML"],k=u({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(_){let n,o;const a=_,c=f("");let i=!1;async function r(){try{const t=await Object.assign({"/assets/icons/home.svg":()=>l(()=>import("./home.BgmQ7tQ2.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default),"/assets/icons/tech/html.svg":()=>l(()=>import("./html.SCCXh-_l.js"),__vite__mapDeps([]),import.meta.url).then(s=>s.default)})[`/assets/icons/${a.name}.svg`]();t.includes("stroke")&&(i=!0),c.value=t}catch{console.error(`[nuxt-icons] Icon '${a.name}' doesn't exist in 'assets/icons'`)}}return[n,o]=p(()=>r()),await n,o(),d(r),(e,t)=>(h(),v("span",{class:x(["nuxt-icon",{"nuxt-icon--fill":!e.filled,"nuxt-icon--stroke":m(i)&&!e.filled}]),innerHTML:m(c)},null,10,I))}});export{k as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
