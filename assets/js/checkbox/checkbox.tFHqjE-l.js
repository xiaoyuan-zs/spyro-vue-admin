import{I as H,a2 as N,a0 as p,G as Y,F as Z,v as _,w as P,_ as $,O as ke,t as W,bb as pe,a7 as L,af as ee,a9 as y,am as le,an as ae,al as J,ak as x,C as t,at as z,aa as S,a3 as w,aq as G,bm as D,a8 as R,aj as he,aF as te,ar as ne,ai as O,ao as oe,as as ge,a6 as Ce,a5 as xe,aC as ye}from"../.pnpm/.pnpm.BC4ss2vt.js";import{q as se,r as ue,U,i as Q,H as T,ae as A,y as Se,v as j,F as ie,as as M,x as X,z as re,B as F,u as K,k as q,c as Ve,f as Le,w as Be,o as de}from"../index-rMf0NY0l.js";const be={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:se,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ue(["ariaControls"])},ce={[U]:e=>H(e)||Q(e)||T(e),change:e=>H(e)||Q(e)||T(e)},B=Symbol("checkboxGroupContextKey"),Ee=({model:e,isChecked:c})=>{const d=N(B,void 0),n=p(()=>{var b,v;const o=(b=d==null?void 0:d.max)==null?void 0:b.value,f=(v=d==null?void 0:d.min)==null?void 0:v.value;return!A(o)&&e.value.length>=o&&!c.value||!A(f)&&e.value.length<=f&&c.value});return{isDisabled:Se(p(()=>(d==null?void 0:d.disabled.value)||n.value)),isLimitDisabled:n}},Ie=(e,{model:c,isLimitExceeded:d,hasOwnLabel:n,isDisabled:m,isLabeledByFormItem:b})=>{const v=N(B,void 0),{formItem:o}=j(),{emit:f}=Y();function r(l){var u,h,i,a;return[!0,e.trueValue,e.trueLabel].includes(l)?(h=(u=e.trueValue)!=null?u:e.trueLabel)!=null?h:!0:(a=(i=e.falseValue)!=null?i:e.falseLabel)!=null?a:!1}function s(l,u){f("change",r(l),u)}function k(l){if(d.value)return;const u=l.target;f("change",r(u.checked),l)}async function g(l){d.value||!n.value&&!m.value&&b.value&&(l.composedPath().some(i=>i.tagName==="LABEL")||(c.value=r([!1,e.falseValue,e.falseLabel].includes(c.value)),await _(),s(c.value,l)))}const V=p(()=>(v==null?void 0:v.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{V.value&&(o==null||o.validate("change").catch(l=>ie()))}),{handleChange:k,onClickRoot:g}},Fe=e=>{const c=P(!1),{emit:d}=Y(),n=N(B,void 0),m=p(()=>A(n)===!1),b=P(!1),v=p({get(){var o,f;return m.value?(o=n==null?void 0:n.modelValue)==null?void 0:o.value:(f=e.modelValue)!=null?f:c.value},set(o){var f,r;m.value&&$(o)?(b.value=((f=n==null?void 0:n.max)==null?void 0:f.value)!==void 0&&o.length>(n==null?void 0:n.max.value)&&o.length>v.value.length,b.value===!1&&((r=n==null?void 0:n.changeEvent)==null||r.call(n,o))):(d(U,o),c.value=o)}});return{model:v,isGroup:m,isLimitExceeded:b}},$e=(e,c,{model:d})=>{const n=N(B,void 0),m=P(!1),b=p(()=>M(e.value)?e.label:e.value),v=p(()=>{const s=d.value;return T(s)?s:$(s)?ke(b.value)?s.map(W).some(k=>pe(k,b.value)):s.map(W).includes(b.value):s!=null?s===e.trueValue||s===e.trueLabel:!!s}),o=X(p(()=>{var s;return(s=n==null?void 0:n.size)==null?void 0:s.value}),{prop:!0}),f=X(p(()=>{var s;return(s=n==null?void 0:n.size)==null?void 0:s.value})),r=p(()=>!!c.default||!M(b.value));return{checkboxButtonSize:o,isChecked:v,isFocused:m,checkboxSize:f,hasOwnLabel:r,actualValue:b}},ve=(e,c)=>{const{formItem:d}=j(),{model:n,isGroup:m,isLimitExceeded:b}=Fe(e),{isFocused:v,isChecked:o,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:s,actualValue:k}=$e(e,c,{model:n}),{isDisabled:g}=Ee({model:n,isChecked:o}),{inputId:V,isLabeledByFormItem:l}=re(e,{formItemContext:d,disableIdGeneration:s,disableIdManagement:m}),{handleChange:u,onClickRoot:h}=Ie(e,{model:n,isLimitExceeded:b,hasOwnLabel:s,isDisabled:g,isLabeledByFormItem:l});return(()=>{function a(){var E,I;$(n.value)&&!n.value.includes(k.value)?n.value.push(k.value):n.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&a()})(),F({from:"controls",replacement:"aria-controls",version:"2.8.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>!!e.controls)),F({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>m.value&&M(e.value))),F({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>!!e.trueLabel)),F({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:l,isChecked:o,isDisabled:g,isFocused:v,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:s,model:n,actualValue:k,handleChange:u,onClickRoot:h}},Ne=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],ze=["id","indeterminate","disabled","value","name","tabindex"],we=L({name:"ElCheckbox"}),Ge=L({...we,props:be,emits:ce,setup(e){const c=e,d=ee(),{inputId:n,isLabeledByFormItem:m,isChecked:b,isDisabled:v,isFocused:o,checkboxSize:f,hasOwnLabel:r,model:s,actualValue:k,handleChange:g,onClickRoot:V}=ve(c,d),l=K("checkbox"),u=p(()=>[l.b(),l.m(f.value),l.is("disabled",v.value),l.is("bordered",c.border),l.is("checked",b.value)]),h=p(()=>[l.e("input"),l.is("disabled",v.value),l.is("checked",b.value),l.is("indeterminate",c.indeterminate),l.is("focus",o.value)]);return(i,a)=>(y(),le(oe(!t(r)&&t(m)?"span":"label"),{class:x(t(u)),"aria-controls":i.indeterminate?i.controls||i.ariaControls:null,onClick:t(V)},{default:ae(()=>{var E,I;return[J("span",{class:x(t(h))},[i.trueValue||i.falseValue||i.trueLabel||i.falseLabel?z((y(),S("input",{key:0,id:t(n),"onUpdate:modelValue":a[0]||(a[0]=C=>w(s)?s.value=C:null),class:x(t(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,name:i.name,tabindex:i.tabindex,disabled:t(v),"true-value":(E=i.trueValue)!=null?E:i.trueLabel,"false-value":(I=i.falseValue)!=null?I:i.falseLabel,onChange:a[1]||(a[1]=(...C)=>t(g)&&t(g)(...C)),onFocus:a[2]||(a[2]=C=>o.value=!0),onBlur:a[3]||(a[3]=C=>o.value=!1),onClick:a[4]||(a[4]=G(()=>{},["stop"]))},null,42,Ne)),[[D,t(s)]]):z((y(),S("input",{key:1,id:t(n),"onUpdate:modelValue":a[5]||(a[5]=C=>w(s)?s.value=C:null),class:x(t(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,disabled:t(v),value:t(k),name:i.name,tabindex:i.tabindex,onChange:a[6]||(a[6]=(...C)=>t(g)&&t(g)(...C)),onFocus:a[7]||(a[7]=C=>o.value=!0),onBlur:a[8]||(a[8]=C=>o.value=!1),onClick:a[9]||(a[9]=G(()=>{},["stop"]))},null,42,ze)),[[D,t(s)]]),J("span",{class:x(t(l).e("inner"))},null,2)],2),t(r)?(y(),S("span",{key:0,class:x(t(l).e("label"))},[R(i.$slots,"default"),i.$slots.default?O("v-if",!0):(y(),S(he,{key:0},[te(ne(i.label),1)],64))],2)):O("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var De=q(Ge,[["__file","checkbox.vue"]]);const Ue=["name","tabindex","disabled","true-value","false-value"],Pe=["name","tabindex","disabled","value"],Oe=L({name:"ElCheckboxButton"}),Te=L({...Oe,props:be,emits:ce,setup(e){const c=e,d=ee(),{isFocused:n,isChecked:m,isDisabled:b,checkboxButtonSize:v,model:o,actualValue:f,handleChange:r}=ve(c,d),s=N(B,void 0),k=K("checkbox"),g=p(()=>{var l,u,h,i;const a=(u=(l=s==null?void 0:s.fill)==null?void 0:l.value)!=null?u:"";return{backgroundColor:a,borderColor:a,color:(i=(h=s==null?void 0:s.textColor)==null?void 0:h.value)!=null?i:"",boxShadow:a?`-1px 0 0 0 ${a}`:void 0}}),V=p(()=>[k.b("button"),k.bm("button",v.value),k.is("disabled",b.value),k.is("checked",m.value),k.is("focus",n.value)]);return(l,u)=>{var h,i;return y(),S("label",{class:x(t(V))},[l.trueValue||l.falseValue||l.trueLabel||l.falseLabel?z((y(),S("input",{key:0,"onUpdate:modelValue":u[0]||(u[0]=a=>w(o)?o.value=a:null),class:x(t(k).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:t(b),"true-value":(h=l.trueValue)!=null?h:l.trueLabel,"false-value":(i=l.falseValue)!=null?i:l.falseLabel,onChange:u[1]||(u[1]=(...a)=>t(r)&&t(r)(...a)),onFocus:u[2]||(u[2]=a=>n.value=!0),onBlur:u[3]||(u[3]=a=>n.value=!1),onClick:u[4]||(u[4]=G(()=>{},["stop"]))},null,42,Ue)),[[D,t(o)]]):z((y(),S("input",{key:1,"onUpdate:modelValue":u[5]||(u[5]=a=>w(o)?o.value=a:null),class:x(t(k).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:t(b),value:t(f),onChange:u[6]||(u[6]=(...a)=>t(r)&&t(r)(...a)),onFocus:u[7]||(u[7]=a=>n.value=!0),onBlur:u[8]||(u[8]=a=>n.value=!1),onClick:u[9]||(u[9]=G(()=>{},["stop"]))},null,42,Pe)),[[D,t(o)]]),l.$slots.default||l.label?(y(),S("span",{key:2,class:x(t(k).be("button","inner")),style:ge(t(m)?t(g):void 0)},[R(l.$slots,"default",{},()=>[te(ne(l.label),1)])],6)):O("v-if",!0)],2)}}});var me=q(Te,[["__file","checkbox-button.vue"]]);const Ae=Ve({modelValue:{type:Le(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:se,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ue(["ariaLabel"])}),Me={[U]:e=>$(e),change:e=>$(e)},Re=L({name:"ElCheckboxGroup"}),je=L({...Re,props:Ae,emits:Me,setup(e,{emit:c}){const d=e,n=K("checkbox"),{formItem:m}=j(),{inputId:b,isLabeledByFormItem:v}=re(d,{formItemContext:m}),o=async r=>{c(U,r),await _(),c("change",r)},f=p({get(){return d.modelValue},set(r){o(r)}});return Ce(B,{...xe(ye(d),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:o}),F({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-checkbox-group",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>!!d.label)),Z(()=>d.modelValue,()=>{d.validateEvent&&(m==null||m.validate("change").catch(r=>ie()))}),(r,s)=>{var k;return y(),le(oe(r.tag),{id:t(b),class:x(t(n).b("group")),role:"group","aria-label":t(v)?void 0:r.label||r.ariaLabel||"checkbox-group","aria-labelledby":t(v)?(k=t(m))==null?void 0:k.labelId:void 0},{default:ae(()=>[R(r.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var fe=q(je,[["__file","checkbox-group.vue"]]);const He=Be(De,{CheckboxButton:me,CheckboxGroup:fe});de(me);de(fe);export{He as E};
