import{K as b,z as x,H as w,_ as E,P as M,a5 as S,a7 as n,T as t,R as s,J as e,bn as v,bo as y,a9 as C,a0 as D,an as T,bm as V}from"./.pnpm-D59sYBvj.js";import"./Icon.vue_vue_type_script_lang-EAei3ndZ.js";import{useConditionVerifyEdit as B}from"./useConditionVerifyEdit-gv8804qk.js";import{_ as L}from"./SoTable.vue_vue_type_script_setup_true_lang-qrQb5wIx.js";import{u as P}from"./useTable-sBuL47Bf.js";import"./useIcon-CCOGsOky.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-vltj-xWI.js";const R={class:"flex-1 flex overflow-hidden"},g={class:"w-60 h-full mr-4"},k=n("span",{class:"text-red"},"*",-1),q=b({__name:"ConditionVerifyEdit",setup(H){const l=x([]),{tableMethods:r,tableMount:i}=P({immediate:!1}),{setProps:c,refresh:m}=r,{columnProp:a}=B(),d=o=>{c({rowKey:"userId",columnList:o.columns,tableData:o.data}),l.value=o.data},f=w(()=>a.columns.map(o=>{if(o.prop)return o.prop+"Header"}));return E(()=>{d(a)}),(o,K)=>{const u=T,_=V;return M(),S("div",R,[n("div",g,[t(u,null,{default:s(()=>[t(e(v),{data:e(e(l)),showLine:!1,showDoubleQuotes:!1},null,8,["data"])]),_:1})]),t(_,{class:"flex-1",model:e(a)},{default:s(()=>[t(e(L),{height:"100%",tableTool:!1,onRefresh:e(m),onMount:e(i)},y({_:2},[C(e(f),p=>({name:p,fn:s(({column:h})=>[k,n("span",null,D(h.label),1)])}))]),1032,["onRefresh","onMount"])]),_:1},8,["model"])])}}});export{q as default};
