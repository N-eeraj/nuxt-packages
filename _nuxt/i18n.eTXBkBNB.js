import{_ as p}from"./nuxt-link.DHe424kz.js";import{u as r,_ as f,a as x}from"./Layout.DMCaMVM-.js";import{k as g}from"./entry.BBVaCfD-.js";import{o as _,c as h,d as t,w as c,b as e,u as a,h as w,B as v,C as k,t as C,j as B,e as D}from"./swiper-vue.BUXlJbNq.js";import"./Icon.B1k7kTRp.js";import"./index.CzCfPO9Z.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./toast.DSNorivi.js";const b=`export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      welcome: 'Bienvenue'
    }
  }
}))
`,j=e("h2",null," Demo ",-1),I={class:"flex gap-x-5 flex-wrap mb-4"},N=e("option",{value:"en"}," English ",-1),V=e("option",{value:"fr"}," French ",-1),y=[N,V],S={class:"text-white"},$={__name:"I18n",setup(m){const{locale:n}=g(),{i18nDemo:l}=r();return(s,o)=>{const u=p,i=f;return _(),h("section",null,[t(u,{to:"#demo",class:"package-subtitle"},{default:c(()=>[j]),_:1}),e("div",I,[t(i,{code:a(b),lang:"ts","file-name":"i18n.config.ts",class:"flex-1 w-full md:w-5/12"},null,8,["code"]),t(i,{code:a(l),"file-name":"Heading.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),w(e("select",{"onUpdate:modelValue":o[0]||(o[0]=d=>k(n)?n.value=d:null)},y,512),[[v,a(n)]]),e("p",S,C(s.$t("welcome")),1)])}}},E="bun i @nuxtjs/i18n --save-dev",L="modules: ['@nuxtjs/i18n']",W={__name:"i18n",setup(m){return(n,l)=>{const s=$,o=x;return _(),B(o,{"installation-code":E,"set-up-code":L},{"setup-description":c(()=>[D(" Add the following line to the modules section of nuxt.config.{ts,js} ")]),default:c(()=>[t(s)]),_:1})}}};export{W as default};
