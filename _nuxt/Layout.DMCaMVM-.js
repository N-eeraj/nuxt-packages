import b from"./Icon.B1k7kTRp.js";import{_ as y}from"./nuxt-link.DHe424kz.js";import{_,t as k,m as w}from"./entry.BBVaCfD-.js";import{C as S,a as h,J as D,n as C,l as I,N as T,D as $,y as N,o as d,c as g,b as a,r as p,t as f,R as q,d as c,u as m,j as R,w as r,e as x,F as E}from"./swiper-vue.BUXlJbNq.js";import{u as M}from"./toast.DSNorivi.js";import{_ as V}from"./_plugin-vue_export-helper.DlAUqK2U.js";const L=`<script setup>
const items = ref([])

const setItems = () => items.value = [
  'React',
  'Vue',
  'Svelte',
  'Angular',
  'Next',
  'Nuxt',
  'SvelteKit',
]

const randomize = () => items.value.sort(() => Math.random() > 0.5 ? 1 : -1)
const removeItem = item => items.value = items.value.filter(i => item !== i)

setItems()
<\/script>

<template>
  <template v-if="items.length">
    <ul v-auto-animate class="grid md:grid-cols-4 gap-4">
      <li v-for="item in items" class="p-2 bg-background text-primary border border-primary rounded cursor-pointer"
        :key="item" @click="removeItem(item)">
        {{ item }}
      </li>
    </ul>
    <button class="w-32 mt-4 p-2 bg-primary text-dark rounded cursor-pointer" @click="randomize">
      Randomize
    </button>
  </template>
  <button v-else class="w-32 p-2 bg-primary text-dark rounded cursor-pointer" @click="setItems">
    Reset
  </button>
</template>`,F=`<template>
  <h1 class="demo-text">
    Color mode: {{ $colorMode.value }}
  </h1>
  <select v-model="$colorMode.preference" class="demo-select">
    <option value="system">
      System
    </option>
    <option value="light">
      Light
    </option>
    <option value="dark">
      Dark
    </option>
    <option value="sepia">
      Sepia
    </option>
  </select>
</template>

<style scoped>
.dark-mode .demo-text, .dark-mode .demo-select {
  background-color: black;
  color: white;
}
.light-mode .demo-text, .dark-mode .demo-select {
  background-color: white;
  color: black;
}
.sepia-mode .demo-text, .sepia-mode .demo-select {
  background-color: #FED;
  color: #300;
}
</style>`,P=`<template>
  <div>
    <template v-if="$device.isDesktop">
      Desktop
    </template>
    <template v-else-if="$device.isTablet">
      Tablet
    </template>
    <template v-else>
      Mobile
    </template>
  </div>
</template>`,A=`<template>
  <p class="text-white font-['Montserrat']">
    Montserrat
  </p>
  <p class="text-white font-['Lato'] font-thin">
    Lato: 100
  </p>
  <p class="text-white font-['Lato'] font-black">
    Lato: 900
  </p>
  <p class="text-white font-['Protest_Revolution'] italic">
    Protest Revolution
  </p>
</template>`,z=`<script setup>
const enabled = ref(false)
<\/script>

<template>
  <HeadlessSwitch v-model="enabled" :class="enabled ? 'bg-gradient-to-r from-[#62D1F5] to-[#6E6CF6]' : 'bg-white/25'" class="relative inline-flex h-7 w-14 items-center rounded-full">
    <span :class="enabled ? 'translate-x-8' : 'translate-x-1'" class="inline-block w-5 aspect-square transform rounded-full bg-white duration-400 ease-in-out" />
  </HeadlessSwitch>
</template>`,H=`<script setup>
  const { locale } = useI18n()
<\/script>

<template>
  <select v-model="locale">
    <option value="en">
      English
    </option>
    <option value="fr">
      French
    </option>
  </select>

  <p class="text-white">
    {{ $t('welcome') }}
  </p>
</template>`,O=`<template>
  <NuxtImg format="webp" src="/images/nuxt-image-demo.jpg" width="128" quality="50" />
</template>`,B=`<template>
  <NuxtMarquee :speed="240" pause-on-hover>
    <div v-for="i of 5" :key="i">
      {{ i }}
    </div>
  </NuxtMarquee>
</template>`,j=`<template>
  <Icon name="uil:github" color="white" size="36" />
  <Icon name="🚀" size="36" />
</template>`,U=`<template>
  <NuxtIcon name="home" />
  <NuxtIcon name="tech/html" filled />
</template>`,J=`<script setup>
import { storeToRefs } from 'pinia'
const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
const { updateCount } = demoStore
<\/script>

<template>
  <button @click="updateCount">
    Count is:
    {{ counter }}
  </button>
</template>`,K=`<template>
  <Swipe>
    :modules="[ SwiperAutoplay ]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 2000 }">
    <SwiperSlid>
      v-for="index in 5"
      :key="index">
      {{ index }}
    </SwiperSlide>
  </Swiper>
</template>`,W=`<template>
  <h1 class="p-4 bg-tailwind-dark text-tailwind-primary border border-tailwind-primary rounded">
    A utility-first CSS framework packed with classes.
  </h1>
</template>`,G=`<template>
  <h1 class="p-4 bg-background-grey text-primary border border-primary rounded">
    UnoCSS: Instant On-demand Atomic CSS Engine
  </h1>
</template>`,Q=`<script setup>
const isRequired = value => {
  if (!value?.trim())
    return 'This field is required'
  return true
}
<\/script>

<template>
  <VeeForm>
    <VeeField name="field" placeholder="Enter value" :rules="isRequired" />
    <VeeErrorMessage name="field" />
  </VeeForm>
</template>`,ye=()=>({autoAnimateDemo:L,colorModeDemo:F,deviceDemo:P,googleFontsDemo:A,headlessUIDemo:z,i18nDemo:H,imageDemo:O,marqueeDemo:B,nuxtIconDemo:j,nuxtIconsDemo:U,piniaDemo:J,swiperDemo:K,tailwindDemo:W,unoCSSDemo:G,veeValidateDemo:Q});async function X(){return globalThis.__nuxt_shiki__||(globalThis.__nuxt_shiki__=Y(),globalThis.__nuxt_shiki__=await globalThis.__nuxt_shiki__),globalThis.__nuxt_shiki__}async function Y(){const[{loadWasm:e,getHighlighterCore:t},{loadShikiConfig:s}]=await Promise.all([_(()=>import("./core.6SLy6dUf.js"),__vite__mapDeps([]),import.meta.url),_(()=>import("./shiki-config.C2qGMfEt.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)]),[n]=await Promise.all([s(),e(_(()=>import("./wasm.6jbqBfHj.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url))]);return await t(n).then(o=>({$config:n,$defaults:n.defaults,...o}))}async function Z(e,t={}){const s=S(e)?e:h(e);"themes"in t&&!t.themes&&delete t.themes;const n=h(t.highlighted||"");if(n.value){const o=D(s,()=>{o(),i()})}else await i();function i(){X().then(o=>{C(()=>{n.value=o.codeToHtml(s.value,{...o.$defaults,...t})})})}return n}const ee=I({props:{code:{type:String,required:!0},lang:{type:String,required:!0},as:{type:String,default:"div"},theme:{type:String},themes:{type:Object},options:{type:Object}},async setup(e){var i,o,l;const t=h(),s=(l=(o=(i=T())==null?void 0:i.vnode)==null?void 0:o.el)==null?void 0:l.innerHTML,n=await Z($(e,"code"),{lang:e.lang,highlighted:s,theme:e.theme,themes:e.themes||void 0,...e.options});return{el:t,highlighted:n}},render(){return N(this.as,{innerHTML:this.highlighted,ref:"el"})}}),te={class:"flex flex-col gap-y-2"},ne={class:"text-light-extra"},oe={class:"relative flex flex-col min-w-50 rounded-md overflow-hidden"},se={key:0,class:"w-full p-3 bg-background-grey text-light text-sm"},ae={__name:"CodeSnippet",props:{code:{type:String,required:!0},fileName:{type:String,required:!1},lang:{type:String,required:!1,default:"vue"}},setup(e){const t=e,{setToast:s}=M(),n=h("ph:copy"),i=()=>{n.value="ph:check-square-duotone",navigator.clipboard.writeText(t.code),s(!0,"Copied to clipboard"),setTimeout(()=>{n.value="ph:copy"},2e3)};return(o,l)=>{const u=ee,v=b;return d(),g("section",te,[a("h2",null,[p(o.$slots,"title",{},void 0,!0)]),a("p",ne,[p(o.$slots,"description",{},void 0,!0)]),a("div",oe,[e.fileName?(d(),g("code",se,f(e.fileName),1)):q("",!0),c(u,{code:e.code||"",lang:e.lang,theme:"material-theme-palenight",class:"custom-shiki block max-h-72 overflow-y-auto"},null,8,["code","lang"]),c(v,{name:m(n),class:"absolute top-4 right-4 text-light cursor-pointer",onClick:i},null,8,["name"])])])}}},ie=V(ae,[["__scopeId","data-v-5061cbfc"]]),le={class:"flex flex-col gap-y-2 h-30"},re={class:"flex items-center gap-x-4"},ce=["alt"],me={class:"text-white text-3xl font-bold"},de={class:"text-light-extra text-base"},pe={class:"mb-5"},ue={class:"mb-5"},he={class:"pb-5"},ke={__name:"Layout",props:{installationCode:{type:String,required:!1,default:""},setUpCode:{type:String,required:!1,default:""}},setup(e){const{meta:t}=k(),s=`/images/logos/${t.logo}`;return w({pageTitle:`${t.name} | Nuxt Packages`,pageDescription:t.description,pageImage:s}),(n,i)=>{const o=b,l=y,u=ie;return d(),g(E,null,[a("div",le,[a("div",re,[m(t).logo?(d(),g("img",{key:0,src:s,alt:m(t).name,class:"w-12"},null,8,ce)):(d(),R(o,{key:1,name:"ph:puzzle-piece-duotone",class:"box-content w-6 h-6 p-3 bg-gray-800 text-gray-400 rounded-lg"})),a("h1",me,f(m(t).name),1)]),a("p",de,f(m(t).description),1)]),a("section",pe,[c(u,{code:e.installationCode,lang:"bash"},{title:r(()=>[c(l,{to:"#installation",class:"package-subtitle"},{default:r(()=>[x(" Installation ")]),_:1})]),_:1},8,["code"])]),a("section",ue,[c(u,{code:e.setUpCode,lang:"ts"},{title:r(()=>[c(l,{to:"#setup",class:"package-subtitle"},{default:r(()=>[x(" Setup ")]),_:1})]),description:r(()=>[p(n.$slots,"setup-description")]),default:r(()=>[p(n.$slots,"setup")]),_:3},8,["code"])]),a("section",he,[p(n.$slots,"default")])],64)}}};export{ie as _,ke as a,ye as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./shiki-config.C2qGMfEt.js","./entry.BBVaCfD-.js","./swiper-vue.BUXlJbNq.js","./swiper-vue.rU4brWEg.css","./entry.yW0i-53G.css","./wasm.6jbqBfHj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
