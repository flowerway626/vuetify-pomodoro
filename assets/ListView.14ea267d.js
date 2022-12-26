import{b as $,m as S,W as N,X as w,t as R,c as D,h as E,Y as b,i as n,Z as F,E as L,r as W,G as s,H as p,J as r,K as U,L as i,M as I,N as e,Q as o,O as a,_ as q,P as T,F as B,T as _,$ as H,a0 as h}from"./index.954fb585.js";const P=$({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...S()},setup(l,v){let{attrs:u}=v;const{themeClasses:k}=N(l),{backgroundColorClasses:f,backgroundColorStyles:x}=w(R(l,"color")),g=D(()=>{const c={};return l.length&&(c[l.vertical?"maxHeight":"maxWidth"]=b(l.length)),l.thickness&&(c[l.vertical?"borderRightWidth":"borderTopWidth"]=b(l.thickness)),c});return E(()=>n("hr",{class:[{"v-divider":!0,"v-divider--inset":l.inset,"v-divider--vertical":l.vertical},k.value,f.value],style:[g.value,x.value],"aria-orientation":!u.role||u.role==="separator"?l.vertical?"vertical":"horizontal":void 0,role:`${u.role||"separator"}`},null)),{}}}),z=e("h1",{class:"text-center"},"\u5F85\u5B8C\u6210",-1),G=e("thead",null,[e("tr",null,[e("th",{class:"text-center"},"\u65B0\u589E\u65E5\u671F"),e("th",{class:"text-center"},"\u9805\u76EE\u5167\u5BB9"),e("th",{class:"text-center"},"\u64CD\u4F5C")])],-1),J={key:0},K=e("td",{class:"text-center",colspan:"3"},"\u6C92\u6709\u4E8B\u9805",-1),M=[K],O={class:"text-center"},Q={class:"text-center"},X={key:1},Y={class:"text-center"},Z={key:0},j={key:1},A={class:"text-center"},ee={class:"text-center",colspan:"3"},te=e("h1",{class:"text-center"},"\u5DF2\u5B8C\u6210",-1),ne=e("thead",null,[e("tr",null,[e("th",{class:"text-center w-75"},"\u9805\u76EE\u5167\u5BB9"),e("th",null,"\u64CD\u4F5C")])],-1),le={key:0},se=e("td",{class:"text-center",colspan:"2"},"\u6C92\u6709\u4E8B\u9805",-1),oe=[se],re={class:"text-center",colspan:"2"},de={__name:"ListView",setup(l){const v=F(),{editItem:u,comfirmEditItem:k,delItem:f,undoEditItem:x,delFinishedItem:g}=v,{items:c,finishedItems:C}=L(v),y=W([]),V={required(m){return!!m||"\u6B04\u4F4D\u5FC5\u586B"},length(m){return m.length>=3||"\u9700\u8F38\u5165\u81F3\u5C11 3 \u500B\u5B57\u5143"}};return(m,ae)=>(s(),p(U,{id:"list"},{default:r(()=>[n(i,{class:"v-col-12 v-col-md-6"},{default:r(()=>[n(i,null,{default:r(()=>[z]),_:1}),n(i,null,{default:r(()=>[n(I,null,{default:r(()=>[G,e("tbody",null,[o(c).length===0?(s(),a("tr",J,M)):q("",!0),(s(!0),a(B,null,T(o(c),t=>(s(),a("tr",{key:t.id,ref_for:!0,ref_key:"editInputs",ref:y},[e("td",O,_(t.nowTime),1),e("td",Q,[t.edit?(s(),p(H,{key:0,modelValue:t.model,"onUpdate:modelValue":d=>t.model=d,variant:"underlined",autofocus:"",rules:[V.required,V.length]},null,8,["modelValue","onUpdate:modelValue","rules"])):(s(),a("span",X,_(t.name),1))]),e("td",Y,[t.edit?(s(),a("span",Z,[n(h,{icon:"mdi-check",variant:"text",color:"blue",onClick:d=>o(k)(t.id)},null,8,["onClick"]),n(h,{icon:"mdi-undo",variant:"text",color:"red",onClick:d=>o(x)(t.id)},null,8,["onClick"])])):(s(),a("span",j,[n(h,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:d=>o(u)(t.id)},null,8,["onClick"]),n(h,{icon:"mdi-delete",variant:"text",color:"red",onClick:d=>o(f)(t.id)},null,8,["onClick"])]))])]))),128)),e("tr",A,[e("td",ee,"\u5171 "+_(o(c).length)+" \u9805",1)])])]),_:1})]),_:1}),n(P,{class:"mt-5 d-md-none"})]),_:1}),n(i,{class:"v-col-12 v-col-md-6"},{default:r(()=>[n(i,null,{default:r(()=>[te]),_:1}),n(i,null,{default:r(()=>[n(I,null,{default:r(()=>[ne,e("tbody",null,[o(C).length===0?(s(),a("tr",le,oe)):(s(!0),a(B,{key:1},T(o(C),t=>(s(),a("tr",{key:t.id,ref_for:!0,ref_key:"editInputs",ref:y},[e("td",null,_(t.name),1),e("td",null,[n(h,{icon:"mdi-delete",variant:"text",color:"red",onClick:d=>o(g)(t.id)},null,8,["onClick"])])]))),128)),e("tr",null,[e("td",re,"\u5171 "+_(o(C).length)+" \u9805",1)])])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{de as default};