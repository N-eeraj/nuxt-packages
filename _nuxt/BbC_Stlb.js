import{C as m}from"./B0zDXpjV.js";import{j as f,ao as I,k as a,y as d,D as x,M as v}from"./C-D7RAXM.js";import{r as _}from"./CvPl5tTm.js";import{_ as S}from"./DlAUqK2U.js";const y=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){I(e=>({efdb04fa:p.value}));const o=m(),t=u,l=a(()=>{var e,n;return(n=(e=o.nuxtIcon)==null?void 0:e.aliases)!=null&&n[t.name]?o.nuxtIcon.aliases[t.name]:t.name}),c=a(()=>_(l.value)),p=a(()=>{var s,r;const e=(r=(s=o.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,s,r;if(!t.size&&typeof((n=o.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=o.nuxtIcon)!=null&&s.size))return;const e=t.size||((r=o.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),x("span",{style:v({width:i.value,height:i.value})},null,4))}}),b=S(y,[["__scopeId","data-v-41e8d397"]]);export{b as default};
