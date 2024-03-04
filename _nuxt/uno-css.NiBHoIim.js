import{_ as u}from"./nuxt-link.DHe424kz.js";import{u as l,_,a as d}from"./Layout.DMCaMVM-.js";import{o as i,c as f,d as n,w as o,b as t,u as c,j as g,e as x}from"./swiper-vue.BUXlJbNq.js";import"./entry.BBVaCfD-.js";import"./Icon.B1k7kTRp.js";import"./index.CzCfPO9Z.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./toast.DSNorivi.js";const C=`import {
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
})`,h=t("h2",null," Demo ",-1),b={class:"flex gap-x-5 flex-wrap mb-4"},S=t("h1",{class:"p-4 bg-background-grey text-primary border border-primary rounded"}," UnoCSS: Instant On-demand Atomic CSS Engine ",-1),y={__name:"UnoCSS",setup(p){const{unoCSSDemo:s}=l();return(m,r)=>{const e=u,a=_;return i(),f("section",null,[n(e,{to:"#demo",class:"package-subtitle"},{default:o(()=>[h]),_:1}),t("div",b,[n(a,{code:c(C),lang:"ts","file-name":"uno.config.ts",class:"flex-1 w-full md:w-5/12"},null,8,["code"]),n(a,{code:c(s),"file-name":"UnoCSS.vue",class:"flex-1 w-full md:w-5/12"},null,8,["code"])]),S])}}},D="bun i @unocss/nuxt",k="modules: ['@unocss/nuxt']",v={__name:"uno-css",setup(p){return(s,m)=>{const r=y,e=d;return i(),g(e,{"installation-code":D,"set-up-code":k},{"setup-description":o(()=>[x(" Add the following line to the modules section of nuxt.config.{ts,js} ")]),default:o(()=>[n(r)]),_:1})}}};export{v as default};
