import{c as q,f as I,h as G,i as W,m as H,w as K,u as V}from"../index-CBSi0O3n.js";import{E as U,a as J}from"../col/col.DkJxuSoL.js";/* empty css                             */import{p as M,D as Q,ae as X,r as _,s as h,ap as g,R as l,ah as A,aH as Y,av as y,ao as C,aq as e,aw as $,C as b,F as L,z as P,ad as Z,b7 as ee,aD as te,b5 as se,I as t,as as i,G as ae,aK as oe}from"../.pnpm/.pnpm.BAJQU3fl.js";import{u as le}from"../index/index.DGrO33MT.js";import{_ as ne}from"../SoCard/SoCard.IvyB526y.js";import{_ as ie}from"../Icon.vue_vue_type_script_lang/Icon.vue_vue_type_script_lang.Bg9ZeC0o.js";import{f as z}from"../index/index.CuSw0IIQ.js";import{E as re}from"../index/index.DF_-0bUr.js";import"../card/card.BWDGv4Ub.js";import"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";const ue=q({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:I([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:I([String,Object,Array])}}),ce=M({name:"ElStatistic"}),de=M({...ce,props:ue,setup(u,{expose:x}){const o=u,r=G("statistic"),a=Q(()=>{const{value:s,formatter:p,precision:f,decimalSeparator:v,groupSeparator:n}=o;if(X(p))return p(s);if(!W(s)||Number.isNaN(s))return s;let[c,m=""]=String(s).split(".");return m=m.padEnd(f,"0").slice(0,f>0?f:0),c=c.replace(/\B(?=(\d{3})+(?!\d))/g,n),[c,m].join(m?v:"")});return x({displayValue:a}),(s,p)=>(_(),h("div",{class:g(l(r).b())},[s.$slots.title||s.title?(_(),h("div",{key:0,class:g(l(r).e("head"))},[A(s.$slots,"title",{},()=>[Y(y(s.title),1)])],2)):C("v-if",!0),e("div",{class:g(l(r).e("content"))},[s.$slots.prefix||s.prefix?(_(),h("div",{key:0,class:g(l(r).e("prefix"))},[A(s.$slots,"prefix",{},()=>[e("span",null,y(s.prefix),1)])],2)):C("v-if",!0),e("span",{class:g(l(r).e("number")),style:$(s.valueStyle)},y(l(a)),7),s.$slots.suffix||s.suffix?(_(),h("div",{key:1,class:g(l(r).e("suffix"))},[A(s.$slots,"suffix",{},()=>[e("span",null,y(s.suffix),1)])],2)):C("v-if",!0)],2)],2))}});var pe=H(de,[["__file","statistic.vue"]]);const fe=K(pe),me=M({__name:"Echarts",props:{option:{},width:{default:"100%"},height:{},theme:{default:V().colorMode},loading:{type:Boolean,default:!1},onMouseover:{},onMouseout:{}},setup(u,{expose:x}){const o=u,r=b(),a=b(),s=()=>{a.value&&a.value.setOption({...o.option,backgroundColor:"transparent"},{notMerge:!0})},p=()=>{r.value&&(a.value=ee(r.value),a.value||(a.value=te(se(r.value,o.theme)),o.onMouseover&&a.value.on("mouseover",n=>{o.onMouseover&&o.onMouseover(n,a.value,o.option)}),o.onMouseout&&a.value.on("mouseout",n=>{o.onMouseout&&o.onMouseout(n,a.value,o.option)}),s()))},f=()=>{a.value&&a.value.resize({animation:{duration:300}})},v=le(f,200,{maxWait:500});return x({instance:()=>a.value,resize:f,draw:s}),L(o,()=>{s()}),L(()=>o.loading,n=>{var c,m;n?(c=a.value)==null||c.showLoading():(m=a.value)==null||m.hideLoading()}),L(()=>V().colorMode,()=>{a.value&&(a.value.dispose(),p())}),P(()=>{p(),window.addEventListener("resize",v)}),Z(()=>{var n;(n=a.value)==null||n.dispose(),window.removeEventListener("resize",v)}),(n,c)=>(_(),h("div",{ref_key:"echartRef",ref:r,style:$({width:n.width,height:n.height})},null,4))}}),_e=()=>({option01:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,left:"78%",top:"8%",data:["实际","计划"]},xAxis:{data:["钢筋","混泥土","水泥","沙浆","玻璃","模板","铝板","石材","砂石料","型钢","其他"]},yAxis:{type:"value",splitLine:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitArea:{show:!1}},series:[{name:"实际",type:"bar",stack:"总量",barMaxWidth:35,barGap:"10%",itemStyle:{color:"#68BBC4"},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484]},{name:"计划",type:"bar",stack:"总量",itemStyle:{color:"#5087EC"},data:[327,1776,507,1200,800,482,204,1390,1001,951,381]}]}}),he=()=>{const u=[{value:2154,name:"零星物质"},{value:3854,name:"资产"},{value:3515,name:"专业分包"},{value:3515,name:"钢筋"},{value:3854,name:"混泥土"},{value:2154,name:"劳务分包"},{value:2154,name:"其他材料"}];return{option02:{legend:{show:!0,bottom:0,left:"center",data:u.map(o=>o.name)},tooltip:{show:!0},series:[{type:"pie",radius:["42%","50%"],color:["#c487ee","#deb140","#49dff0","#034079","#6f81da","#00ffb4","#f565b4"],data:u}]}}},ve=()=>({option03:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,left:"78%",top:"8%",data:["实际","计划"]},xAxis:{data:["1月","2月","3月","4月","5月","6月"]},yAxis:{type:"value",splitLine:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitArea:{show:!1}},series:[{name:"实际",type:"bar",stack:"总量",barMaxWidth:35,barGap:"10%",itemStyle:{color:"#5087EC"},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484]},{name:"计划",type:"line",symbolSize:10,symbol:"circle",itemStyle:{color:"#68BBC4"},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865]}]}}),ge=()=>({option04:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,left:"78%",top:"8%",data:["数量"]},xAxis:{data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value",splitLine:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitArea:{show:!1}},series:[{name:"数量",type:"line",symbolSize:10,symbol:"circle",itemStyle:{color:"#68BBC4"},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865]}]}}),be={class:"pb-4"},ye={class:"w-full grid <xl:grid-cols-3 <sm:grid-cols-1 grid-cols-5 gap-4"},xe={class:"p-3 rounded-1.5 text-background bg-sky-300"},we={class:"flex flex-justify-start items-center"},ke=e("span",{class:"block pl-1"},"在线评标率(%)",-1),Se={class:"flex flex-justify-between items-end"},ze={class:"relative"},Ee=e("div",{class:"absolute-lt w-full h-full bg-gradient-to-b from-transparent to-sky-300"},null,-1),Me={class:"p-3 rounded-1.5 text-background bg-teal-300"},je={class:"flex flex-justify-start items-center"},Be=e("span",{class:"block pl-1"},"进场金额(￥)",-1),Ae={class:"flex flex-justify-between items-end"},Ce={class:"relative"},Le=e("div",{class:"absolute-lt w-full h-full bg-gradient-to-b from-transparent to-teal-300"},null,-1),Ne={class:"p-3 rounded-1.5 text-background bg-sky-300"},Ie={class:"flex flex-justify-start items-center"},Ve=e("span",{class:"block pl-1"},"结算金额(￥)",-1),$e={class:"flex flex-justify-between items-end"},Pe={class:"relative"},De=e("div",{class:"absolute-lt w-full h-full bg-gradient-to-b from-transparent to-sky-300"},null,-1),Re={class:"p-3 rounded-1.5 text-background bg-indigo-300"},Te={class:"flex flex-justify-start items-center"},Fe=e("span",{class:"block pl-1"},"开累消耗",-1),Oe={class:"flex flex-justify-between items-end"},qe={class:"relative"},Ge=e("div",{class:"absolute-lt w-full h-full bg-gradient-to-b from-transparent to-indigo-300"},null,-1),We={class:"p-3 rounded-1.5 text-background bg-teal-300"},He={class:"flex flex-justify-start items-center"},Ke=e("span",{class:"block pl-1"},"现有库存",-1),Ue={class:"flex flex-justify-between items-end"},Je={class:"relative"},Qe=e("div",{class:"absolute-lt w-full h-full bg-gradient-to-b from-transparent to-teal-300"},null,-1),Xe={class:"ml-3 text-sm"},Ye={class:"text-sm"},pt=M({name:"Analysis",__name:"index",setup(u){const{option01:x}=_e(),{option02:o}=he(),{option03:r}=ve(),{option04:a}=ge(),s=new Array(20).fill({name:"南京物资运输管理有限公司",unique:"PO.265432",phone:"12345678901",status:"已出库",time:"2021-01-01"}),p=b(0),f=b(0),v=b(0),n=b(0),c=b(0),m=z(p,{duration:1500}),D=z(f,{duration:1500}),R=z(v,{duration:1500}),T=z(n,{duration:1500}),F=z(c,{duration:1500});return P(()=>{p.value=78,f.value=9204,v.value=10273.4,n.value=6480,c.value=9204}),(Ze,et)=>{const d=ie,k=fe,w=ne,E=me,S=U,O=re,j=J;return _(),h("div",be,[t(w,{title:"数据统计",underline:!1},{default:i(()=>[e("div",ye,[e("div",xe,[e("div",we,[t(d,{name:"ep:trend-charts",size:16}),ke]),e("div",Se,[t(k,{value:l(m),"value-style":"color: var(--el-bg-color)"},null,8,["value"]),e("div",ze,[t(d,{name:"ep:trend-charts",size:40}),Ee])])]),e("div",Me,[e("div",je,[t(d,{name:"ant-design:property-safety-filled",size:16}),Be]),e("div",Ae,[t(k,{value:l(D),precision:2,"value-style":"color: var(--el-bg-color)"},null,8,["value"]),e("div",Ce,[t(d,{name:"ant-design:property-safety-filled",size:40}),Le])])]),e("div",Ne,[e("div",Ie,[t(d,{name:"ant-design:account-book-filled",size:16}),Ve]),e("div",$e,[t(k,{value:l(R),precision:2,"value-style":"color: var(--el-bg-color)"},null,8,["value"]),e("div",Pe,[t(d,{name:"ant-design:account-book-filled",size:40}),De])])]),e("div",Re,[e("div",Te,[t(d,{name:"ant-design:database-filled",size:16}),Fe]),e("div",Oe,[t(k,{value:l(T),"value-style":"color: var(--el-bg-color)"},null,8,["value"]),e("div",qe,[t(d,{name:"ant-design:database-filled",size:40}),Ge])])]),e("div",We,[e("div",He,[t(d,{name:"ant-design:golden-filled",size:16}),Ke]),e("div",Ue,[t(k,{value:l(F),"value-style":"color: var(--el-bg-color)"},null,8,["value"]),e("div",Je,[t(d,{name:"ant-design:golden-filled",size:40}),Qe])])])])]),_:1}),t(j,{gutter:16},{default:i(()=>[t(S,{xs:24,lg:16,class:"mt-4 h-90"},{default:i(()=>[t(w,{title:"货物支出统计",underline:!1,class:"h-full"},{default:i(()=>[t(E,{option:l(x),height:"100%"},null,8,["option"])]),_:1})]),_:1}),t(S,{xs:24,lg:8,class:"mt-4 h-90"},{default:i(()=>[t(w,{title:"待出门订单",underline:!1,class:"h-full"},{default:i(()=>[t(O,null,{default:i(()=>[(_(!0),h(ae,null,oe(l(s),(N,B)=>(_(),h("div",{key:B,class:"py-1 flex-between"},[e("span",null,[e("span",{class:g(["p-1 text-size-12px bg-[var(--el-bg-color-page)]",B<3&&"bg-red text-background"])},y(B+1),3),e("span",Xe,y(N.name),1)]),e("span",Ye,y(N.unique),1)]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),t(j,{gutter:16},{default:i(()=>[t(S,{xs:24,sm:24,md:12,class:"mt-4 h-80"},{default:i(()=>[t(w,{title:"资产分类占比",underline:!1,class:"h-full"},{default:i(()=>[t(E,{option:l(o),height:"100%"},null,8,["option"])]),_:1})]),_:1}),t(S,{xs:24,sm:24,md:12,class:"mt-4 h-80"},{default:i(()=>[t(w,{title:"货物处理率",underline:!1,class:"h-full"},{default:i(()=>[t(E,{option:l(r),height:"100%"},null,8,["option"])]),_:1})]),_:1})]),_:1}),t(j,{gutter:16},{default:i(()=>[t(S,{xs:24,sm:24,md:24,class:"mt-4 h-100"},{default:i(()=>[t(w,{title:"每月物质统计",underline:!1,class:"h-full"},{default:i(()=>[t(E,{option:l(a),height:"100%"},null,8,["option"])]),_:1})]),_:1})]),_:1})])}}});export{pt as default};
