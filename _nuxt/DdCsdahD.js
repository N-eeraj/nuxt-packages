import b from"./Cx6GQR7a.js";import{n as C,o as q,a as D,b as L}from"./B0zDXpjV.js";import{_ as $}from"./CWMk71ul.js";import{k as h,y as o,D as i,A as s,B as f,u as d,R as v,L as B,a as E,O as N,o as z,z as k,C as R,F as w,E as S,ab as A,aa as F,P as M}from"./C-D7RAXM.js";import{_ as V}from"./BSi_58HT.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";const j={__name:"Category",props:{category:{type:String,required:!0}},setup(e){const t=C(),{replace:u}=q(),a=h(()=>t.query.category),n=r=>{u({query:{...t.query,category:r===a.value?null:r},...t})};return(r,g)=>{const p=b;return o(),i("li",null,[s("button",{class:B(["flex items-center gap-x-1 w-full py-1 pl-3 text-start border-l duration-400",e.category===d(a)?"text-primary border-l-primary":"text-light-extra hover:text-light border-l-light-extra/20 hover:border-l-light"]),onClick:g[0]||(g[0]=m=>n(e.category))},[f(p,{name:("packageCategoriesIcons"in r?r.packageCategoriesIcons:d($))[e.category]},null,8,["name"]),s("span",null,v(e.category),1)],2)])}}},O={class:"relative w-full sm:w-3/5 max-w-66 sm:max-w-56"},Q=["value"],T={class:"absolute position-center-y right-3"},U={__name:"Search",setup(e){const t=C(),{replace:u}=q(),a=E(null),n=()=>u({query:{...t.query,q:a.value.value},...t}),r=m=>{m.key==="/"&&(a.value!==document.activeElement&&m.preventDefault(),a.value.focus()),n()},g=()=>{a.value.value=null,n()},p=()=>a.value.focus();return N(()=>{document.addEventListener("keyup",r)}),z(()=>{document.removeEventListener("keyup",r)}),(m,c)=>{var _,x;const l=b;return o(),i("div",O,[f(l,{name:"ph:magnifying-glass-duotone",size:"20",class:"absolute position-center-y left-3 text-light-extra",onClick:p}),s("input",{ref_key:"searchInput",ref:a,value:(_=d(t).query)==null?void 0:_.q,placeholder:"Search...",class:"w-full pl-10 py-2 bg-gray-900 text-white placeholder:text-light-extra/30 text-sm border border-light-extra/30 focus:border-primary rounded-md focus:rounded-md focus:outline-none",onInput:r},null,40,Q),s("div",T,[(x=d(t).query)!=null&&x.q?(o(),i("button",{key:0,onClick:g},[f(l,{name:"ph:x",size:"16",class:"text-light-extra"})])):(o(),i("kbd",{key:1,class:"flex-center w-5 aspect-square bg-gray-800 text-light text-xs rounded border border-light-extra/30",onClick:p},"/"))])])}}},W=["src","alt"],G={class:"text-light text-lg"},H={class:"text-light-extra line-clamp-2"},J={__name:"Card",props:{name:{type:String,required:!0},path:{type:String,required:!0},description:{type:String,required:!0},logo:{type:String,required:!0},category:{type:String,required:!0}},setup(e){return(t,u)=>{const a=b,n=V;return o(),k(n,{to:e.path,class:"flex flex-col gap-y-3 max-h-60 p-5 bg-gray-900 hover:bg-transparent ring ring-gray-800 hover:ring-primary rounded duration-400"},{default:R(()=>[e.logo?(o(),i("img",{key:0,src:`/images/logos/${e.logo}`,alt:e.name,class:"w-12 aspect-square object-contain"},null,8,W)):(o(),k(a,{key:1,name:("packageCategoriesIcons"in t?t.packageCategoriesIcons:d($))[e.category],class:"box-content w-6 h-6 p-3 bg-gray-800 text-gray-400 rounded-lg"},null,8,["name"])),s("strong",G,v(e.name),1),s("p",H,v(e.description),1)]),_:1},8,["to"])}}},K={class:"flex flex-col gap-y-5 w-full"},X=s("h1",{class:"text-white text-3xl font-medium"}," Nuxt Packages ",-1),Y={class:"flex gap-x-2 w-full"},Z={class:"flex-shrink-0 max-lg:hidden w-60"},ee=s("span",{class:"text-white"}," Categories ",-1),te={class:"mt-3"},ae={class:"flex flex-col gap-8 w-full"},oe={class:"col-span-1 sm:col-span-2 xl:col-span-3"},se={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},de={__name:"index",setup(e){const{packagesDescription:t}=L(),u=C(),{options:a}=q(),n=h(()=>{const c=[];return a.routes.forEach(({path:l,meta:_})=>{l.startsWith("/packages/")&&l.split("/").length===3&&c.push({path:l,..._})}),c}),r=h(()=>Array.from(new Set(n.value.map(({category:c})=>c))).toSorted()),g=h(()=>u.query.category),p=h(()=>n.value.filter(({category:c})=>g.value===c)),m=h(()=>(g.value?p.value:n.value).filter(({name:c})=>{var l;return c.toLowerCase().includes(((l=u.query.q)==null?void 0:l.toLowerCase())||"")}));return D({pageTitle:"Nuxt Packages: Packages",pageDescription:t}),(c,l)=>{const _=j,x=U,I=J,P=F("auto-animate");return o(),i("div",K,[X,s("div",Y,[s("div",Z,[ee,s("ul",te,[(o(!0),i(w,null,S(d(r),y=>(o(),k(_,{category:y,key:y},null,8,["category"]))),128))])]),s("div",ae,[s("div",oe,[f(x)]),A((o(),i("div",se,[(o(!0),i(w,null,S(d(m),y=>(o(),k(I,M({ref_for:!0},y,{key:y.name}),null,16))),128))])),[[P]])])])])}}};export{de as default};