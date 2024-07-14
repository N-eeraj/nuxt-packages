import{_ as u}from"./BSi_58HT.js";import{_ as d}from"./CucqMbMf.js";import{e as f,c as x}from"./B0zDXpjV.js";import{y as i,D as g,B as t,C as _,A as e,u as a,ab as h,ac as w,q as v,R as C,z as k}from"./C-D7RAXM.js";import{_ as B}from"./KFFx0LwD.js";import"./Cx6GQR7a.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./CyUEWEuS.js";import"./CWMk71ul.js";const D=`export default defineI18nConfig(() => ({
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
`,y=e("h2",null," Demo ",-1),I={class:"flex gap-x-5 flex-wrap mb-4"},$=e("option",{value:"en"}," English ",-1),b=e("option",{value:"fr"}," French ",-1),N=[$,b],S={class:"text-white"},V={__name:"I18n",setup(m){const{locale:n}=f(),{i18nDemo:c}=x();return(s,o)=>{const r=u,l=d;return i(),g("section",null,[t(r,{to:"#demo",class:"package-subtitle"},{default:_(()=>[y]),_:1}),e("div",I,[t(l,{code:a(D),lang:"ts","file-name":"i18n.config.ts",class:"flex-1 w-full md:w-5/12"},null,8,["code"]),t(l,{code:a(c),"file-name":"Heading.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),h(e("select",{"onUpdate:modelValue":o[0]||(o[0]=p=>v(n)?n.value=p:null)},N,512),[[w,a(n)]]),e("p",S,C(s.$t("welcome")),1)])}}},j="npm i @nuxtjs/i18n --save-dev",E="modules: ['@nuxtjs/i18n']",W={__name:"i18n",setup(m){return(n,c)=>{const s=V,o=B;return i(),k(o,{"installation-code":j,"set-up-code":E},{default:_(()=>[t(s)]),_:1})}}};export{W as default};
