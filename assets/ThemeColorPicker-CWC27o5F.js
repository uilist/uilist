import{u as l}from"./entry/index-DCZJCnfP.js";import{e as p}from"./index-CQvgicZp.js";import{aw as u}from"./antd-Dz33zz-s.js";import{d,U as n,V as s,F as f,a8 as k,Y as m,u as t,ad as C,k as _}from"./vue-_5sGGDGJ.js";import"./useContentViewHeight-DN_2idH9.js";import"./useWindowSizeFn-CYkgqGuZ.js";import"./useSortable-DEC047Qu.js";const h=["onClick"],F=d({name:"ThemeColorPicker",__name:"ThemeColorPicker",props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(r){const i=r,{prefixCls:a}=l("setting-theme-picker");function c(o){i.event&&p(i.event,o)}return(o,y)=>(n(),s("div",{class:m(t(a))},[(n(!0),s(f,null,k(r.colorList||[],e=>(n(),s("span",{key:e,onClick:v=>c(e),class:m([`${t(a)}__item`,{[`${t(a)}__item--active`]:r.def===e}]),style:C({background:e})},[_(t(u))],14,h))),128))],2))}});export{F as default};
