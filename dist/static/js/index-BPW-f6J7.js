var h=(v,_,s)=>new Promise((y,p)=>{var m=t=>{try{u(s.next(t))}catch(a){p(a)}},f=t=>{try{u(s.throw(t))}catch(a){p(a)}},u=t=>t.done?y(t.value):Promise.resolve(t.value).then(m,f);u((s=s.apply(v,_)).next())});import{K as V,W as g,T as l,X as r,Y as c,Z as $,z as C,C as b,_ as E,P as w,Q as z,R as d,$ as N,J as e,a0 as B,a1 as D,a2 as U}from"./.pnpm-D59sYBvj.js";import{_ as F}from"./SoCard-D_n_23RH.js";import{_ as A}from"./SoTable.vue_vue_type_script_setup_true_lang-qrQb5wIx.js";import{g as K}from"./index-DvL1AnUh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon.vue_vue_type_script_lang-EAei3ndZ.js";import"./useIcon-CCOGsOky.js";import"./use-vltj-xWI.js";const Z=V({name:"BasicTable",__name:"index",setup(v){const _=g([{dictLabel:"男",dictValue:"male"},{dictLabel:"女",dictValue:"female"}]),s=g([{dictLabel:"正常",dictValue:0},{dictLabel:"禁用",dictValue:1}]),y=g([{type:"selection",width:"55"},{type:"index",label:"序号",width:"55"},{prop:"username",label:"用户名",overflowConfig:{initiate:!0}},{prop:"nickname",label:"昵称",renderer:({row:n})=>l(r,{type:"primary",link:!0,onClick:()=>f("内容")},{default:()=>[n.nickname]}),headerRenderer:()=>l(r,{type:"primary",onClick:()=>f("表头")},{default:()=>[c("昵称")]})},{prop:"sex",label:"性别",dictConfig:{options:()=>_}},{prop:"phone",label:"手机号"},{prop:"email",label:"邮箱"},{prop:"status",label:"状态",tagConfig:{initiate:!0},dictConfig:{options:()=>s}},{prop:"operation",label:"操作",renderer:()=>l($,null,[l(r,{type:"primary",link:!0,onClick:u},{default:()=>[c("修改")]}),l(r,{type:"primary",link:!0,onClick:t},{default:()=>[c("删除")]})])}]),p=C([]),m=n=>{b.success(`我是作用域插槽渲染的${n}`)},f=n=>{b.success(`我是TSX渲染的${n}`)},u=()=>{b.success("仅供预览展示")},t=()=>{b.success("仅供预览展示")},a=g({pageNum:1,pageSize:10}),x=C(0),k=C(!1),S=()=>h(this,null,function*(){k.value=!0;const n=yield K(a);p.value=n.data,x.value=n.total,k.value=!1});return E(()=>{S()}),(n,o)=>{const L=D,T=A,P=F,R=U;return w(),z(P,{title:"基础表格示例",class:"h-full"},{default:d(()=>[l(L,{closable:!1,title:"基于el-table表格的二次封装",type:"info",description:"采用h函数或tsx语法对列渲染进行封装，兼容el-table全部属性及API，并进行了一定自定义拓展，具有完整类型提示， 列配置可选择插槽方式或tsx渲染，高度灵活，表格都默认设置rowKey，优化表格渲染。"}),N((w(),z(T,{ref:"soTableRef",height:"100%",currentPage:e(a).pageNum,"onUpdate:currentPage":o[2]||(o[2]=i=>e(a).pageNum=i),pageSize:e(a).pageSize,"onUpdate:pageSize":o[3]||(o[3]=i=>e(a).pageSize=i),"column-list":e(y),"table-data":e(p),"table-tool":!1,"page-props":{total:e(x)},onRefresh:S},{usernameHeader:d(()=>[l(e(r),{type:"primary",onClick:o[0]||(o[0]=i=>m("表头"))},{default:d(()=>[c("用户名")]),_:1})]),username:d(({row:i})=>[l(e(r),{type:"primary",link:"",onClick:o[1]||(o[1]=M=>m("内容"))},{default:d(()=>[c(B(i.username),1)]),_:2},1024)]),_:1},8,["currentPage","pageSize","column-list","table-data","page-props"])),[[R,e(k)]])]),_:1})}}});export{Z as default};
