var _=Object.defineProperty;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var w=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))y.call(a,t)&&w(e,t,a[t]);if(p)for(var t of p(a))m.call(a,t)&&w(e,t,a[t]);return e};var l=(e,a,t)=>new Promise((n,s)=>{var T=i=>{try{f(t.next(i))}catch(o){s(o)}},b=i=>{try{f(t.throw(i))}catch(o){s(o)}},f=i=>i.done?n(i.value):Promise.resolve(i.value).then(T,b);f((t=t.apply(e,a)).next())});import{a3 as P,u as g,y as S}from"./vue-Bm8JtdxJ.js";import{v as I,A as k,ay as U}from"./entry/index-WJ_LNOed.js";const A="uilist";function E(e){}function L(e){throw new Error(`[${A} error]:${e}`)}function x(e){const a=I();function t(){const{show:r}=a.getMultiTabsSetting;if(!r)throw new Error("The multi-tab page is currently not open, please open it in the settings！");return!!r}const n=k(),s=e||P(),{currentRoute:T}=s;function b(){const r=g(T);return n.getTabList.find(c=>c.fullPath===r.fullPath)}function f(r,c){return l(this,null,function*(){if(!t)return;const u=c||b();yield n.setTabTitle(r,u)})}function i(r,c){return l(this,null,function*(){if(!t)return;const u=c||b();yield n.updateTabPath(r,u)})}function o(r,c){return l(this,null,function*(){if(!t)return;const u=b();switch(r){case 0:yield n.refreshPage(s);break;case 1:yield n.closeAllTab(s);break;case 2:yield n.closeLeftTabs(u,s);break;case 3:yield n.closeRightTabs(u,s);break;case 4:yield n.closeOtherTabs(u,s);break;case 5:case 6:yield n.closeTab(c||u,s);break}})}return{refreshPage:()=>o(0),closeAll:()=>o(1),closeLeft:()=>o(2),closeRight:()=>o(3),closeOther:()=>o(4),closeCurrent:()=>o(5),close:r=>o(6,r),setTitle:(r,c)=>f(r,c),updatePath:(r,c)=>i(r,c)}}function C(e,a){function t(){S(()=>l(this,null,function*(){if(e=g(e),!e)return;(yield U(()=>l(this,null,function*(){const{default:s}=yield import("./sortable.esm-CnNXHMH-.js");return{default:s}}),[])).default.create(e,d({animation:100,delay:400,delayOnTouchOnly:!0},a))}))}return{initSortable:t}}export{C as a,L as e,x as u,E as w};
