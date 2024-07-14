import{_}from"./BSi_58HT.js";import{_ as u}from"./CucqMbMf.js";import{c as l}from"./B0zDXpjV.js";import{y as c,D as f,B as n,C as p,A as o,u as a,z as d}from"./C-D7RAXM.js";import{_ as g}from"./KFFx0LwD.js";import"./Cx6GQR7a.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./CyUEWEuS.js";import"./CWMk71ul.js";const C=`import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      background: {
        DEFAULT: '#020420',
        grey: '#0F172A',
        code: '#292D3E',
      },
      primary: '#00DC82',
      light: {
        DEFAULT: '#CBD5E1',
        extra: '#CBD5E199',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})`,x=o("h2",null," Demo ",-1),y={class:"flex gap-x-5 flex-wrap mb-4"},D=o("h1",{class:"p-4 bg-background-grey text-primary border border-primary rounded"}," UnoCSS: Instant On-demand Atomic CSS Engine ",-1),S={__name:"UnoCSS",setup(i){const{unoCSSDemo:t}=l();return(m,s)=>{const e=_,r=u;return c(),f("section",null,[n(e,{to:"#demo",class:"package-subtitle"},{default:p(()=>[x]),_:1}),o("div",y,[n(r,{code:a(C),lang:"ts","file-name":"uno.config.ts",class:"flex-1 w-full md:w-5/12"},null,8,["code"]),n(r,{code:a(t),"file-name":"UnoCSS.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),D])}}},h="npm i @unocss/nuxt",b="modules: ['@unocss/nuxt']",V={__name:"uno-css",setup(i){return(t,m)=>{const s=S,e=g;return c(),d(e,{"installation-code":h,"set-up-code":b},{default:p(()=>[n(s)]),_:1})}}};export{V as default};
