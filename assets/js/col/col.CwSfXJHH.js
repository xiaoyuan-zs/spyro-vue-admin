import{c as g,h as _,m as $,w as h,f as r,Z as u,i as b}from"../index-CTfRuDWM.js";import{d as f,k as o,ag as O,o as w,ar as v,as as j,ah as N,ap as x,R as c,aw as C,at as E,i as S,$ as K}from"../.pnpm/.pnpm.DllKR9sa.js";const R=Symbol("rowContextKey"),k=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],B=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:k,default:"start"},align:{type:String,values:P}}),L=f({name:"ElRow"}),A=f({...L,props:B,setup(p){const e=p,l=_("row"),a=o(()=>e.gutter);O(R,{gutter:a});const i=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=o(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>(w(),v(E(t.tag),{class:x(c(d)),style:C(c(i))},{default:j(()=>[N(t.$slots,"default")]),_:3},8,["class","style"]))}});var D=$(A,[["__file","row.vue"]]);const H=h(D),I=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),J=f({name:"ElCol"}),T=f({...J,props:I,setup(p){const e=p,{gutter:l}=S(R,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=o(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const n=e[s];b(n)&&(s==="span"?t.push(a.b(`${e[s]}`)):n>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([n,y])=>{t.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>(w(),v(E(t.tag),{class:x(c(d)),style:C(c(i))},{default:j(()=>[N(t.$slots,"default")]),_:3},8,["class","style"]))}});var Z=$(T,[["__file","col.vue"]]);const M=h(Z);export{M as E,H as a};
