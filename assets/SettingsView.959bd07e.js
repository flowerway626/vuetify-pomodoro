import{p as L,I as k,d as Q,m as W,a as X,b as P,u as x,g as $,c as d,e as Y,f as Z,t as c,h as p,i as a,j as ee,R as le,r as A,k as N,w as te,l as ae,V as oe,n as I,o as j,q as ne,s as ue,v as se,x as w,y as ie,S as D,z as re,A as ce,B as de,F as M,C as ve,D as fe,E as me,G as B,H as Ve,J as S,K as ye,L as O,M as be,N as v,O as U,P as ge,Q as E,T as Ce,U as Se}from"./index.f91b572e.js";const q=Symbol.for("vuetify:selection-control-group"),F=L({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:k,trueIcon:k,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Q},...W(),...X()},"v-selection-control-group"),Ie=P({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...F()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:s}=o;const l=x(e,"modelValue"),i=$(),n=d(()=>e.id||`v-selection-control-group-${i}`),t=d(()=>e.name||n.value);return Y(q,{modelValue:l}),Z({[e.defaultsTarget]:{color:c(e,"color"),disabled:c(e,"disabled"),density:c(e,"density"),error:c(e,"error"),inline:c(e,"inline"),modelValue:l,multiple:d(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:t,falseIcon:c(e,"falseIcon"),trueIcon:c(e,"trueIcon"),readonly:c(e,"readonly"),ripple:c(e,"ripple"),type:c(e,"type"),valueComparator:c(e,"valueComparator")}}),p(()=>{var u;return a("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?n.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(u=s.default)==null?void 0:u.call(s)])}),{}}}),z=L({label:String,trueValue:null,falseValue:null,value:null,...F()},"v-selection-control");function _e(e){const o=ue(q,void 0),{densityClasses:s}=se(e),l=x(e,"modelValue"),i=d(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),n=d(()=>e.falseValue!==void 0?e.falseValue:!1),t=d(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),u=d({get(){const r=o?o.modelValue.value:l.value;return t.value?r.some(f=>e.valueComparator(f,i.value)):e.valueComparator(r,i.value)},set(r){if(e.readonly)return;const f=r?i.value:n.value;let m=f;t.value&&(m=r?[...w(l.value),f]:w(l.value).filter(V=>!e.valueComparator(V,i.value))),o?o.modelValue.value=m:l.value=m}}),{textColorClasses:b,textColorStyles:g}=ie(d(()=>u.value&&!e.error&&!e.disabled?e.color:void 0)),_=d(()=>u.value?e.trueIcon:e.falseIcon);return{group:o,densityClasses:s,trueValue:i,falseValue:n,model:u,textColorClasses:b,textColorStyles:g,icon:_}}const H=ee()({name:"VSelectionControl",directives:{Ripple:le},inheritAttrs:!1,props:z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:s,slots:l}=o;const{densityClasses:i,icon:n,model:t,textColorClasses:u,textColorStyles:b,trueValue:g}=_e(e),_=$(),r=d(()=>e.id||`input-${_}`),f=A(!1),m=A(!1),V=A();function C(y){f.value=!0,(!D||D&&y.target.matches(":focus-visible"))&&(m.value=!0)}function h(){f.value=!1,m.value=!1}function R(y){t.value=y.target.checked}return p(()=>{var y,G;const T=l.label?l.label({label:e.label,props:{for:r.value}}):e.label,[J,K]=N(s);return a("div",I({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},i.value]},J),[a("div",{class:["v-selection-control__wrapper",u.value],style:b.value},[(y=l.default)==null?void 0:y.call(l),te(a("div",{class:["v-selection-control__input"]},[n.value&&a(oe,{key:"icon",icon:n.value},null),a("input",I({ref:V,checked:t.value,disabled:e.disabled,id:r.value,onBlur:h,onFocus:C,onInput:R,"aria-readonly":e.readonly,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},K),null),(G=l.input)==null?void 0:G.call(l,{model:t,textColorClasses:u,textColorStyles:b,props:{onFocus:C,onBlur:h,id:r.value}})]),[[ae("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),T&&a(j,{for:r.value,clickable:!0},{default:()=>[T]})])}),{isFocused:f,input:V}}});function he(e){return ne(e,Object.keys(H.props))}const ke=P({name:"VRadio",props:{...z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,o){let{slots:s}=o;return p(()=>a(H,I(e,{class:"v-radio",type:"radio"}),s)),{}}});const pe=P({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...re(),...ce(F(),["multiple"]),trueIcon:{type:k,default:"$radioOn"},falseIcon:{type:k,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:s,slots:l}=o;const i=$(),n=d(()=>e.id||`radio-group-${i}`),t=x(e,"modelValue");return p(()=>{const[u,b]=N(s),[g,_]=de(e),[r,f]=he({...e,multiple:!1}),m=l.label?l.label({label:e.label,props:{for:n.value}}):e.label;return a(ve,I({class:"v-radio-group"},u,g,{modelValue:t.value,"onUpdate:modelValue":V=>t.value=V,id:n.value}),{...l,default:V=>{let{id:C,isDisabled:h,isReadonly:R}=V;return a(M,null,[m&&a(j,{for:C.value},{default:()=>[m]}),a(Ie,I(r,{id:C.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:h.value,readonly:R.value},b,{modelValue:t.value,"onUpdate:modelValue":y=>t.value=y}),l)])}})}),{}}}),Re=v("h1",{class:"text-center"},"\u8A2D\u5B9A",-1),Ae=v("thead",null,[v("tr",null,[v("th",null,"\u540D\u7A31"),v("th",null,"\u8A66\u807D"),v("th",null,"\u9078\u64C7")])],-1),Be=["src"],xe={__name:"SettingsView",setup(e){const o=fe(),{alarms:s,selectedAlarms:l}=me(o);return(i,n)=>(B(),Ve(ye,{id:"settings"},{default:S(()=>[a(O,{cols:"12"},{default:S(()=>[Re]),_:1}),a(O,{cols:"12"},{default:S(()=>[a(be,{class:"text-center"},{default:S(()=>[Ae,v("tbody",null,[(B(!0),U(M,null,ge(E(s),t=>(B(),U("tr",{key:t.id},[v("td",null,Ce(t.name),1),v("td",null,[v("audio",{src:t.file,controls:""},null,8,Be)]),v("td",null,[a(pe,{modelValue:E(l),"onUpdate:modelValue":n[0]||(n[0]=u=>Se(l)?l.value=u:null)},{default:S(()=>[a(ke,{value:t.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}))}};export{xe as default};
