(this["webpackJsonpsecret-santa"]=this["webpackJsonpsecret-santa"]||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(9),s=n.n(c),l=(n(16),n(17),n(18),n(3)),i=(n(7),n(4)),o=n(1);function a({children:e}){return Object(o.jsx)("span",{className:"validation",role:"alert",children:e})}const d=({usedNames:e,usedGroups:t,onSubmit:n})=>{const{handleSubmit:r,register:c,reset:s,formState:{errors:d}}=Object(l.b)();return Object(o.jsx)("form",{onSubmit:r((e=>{n({name:e["person-name"],group:""===e["person-group"]?void 0:e["person-group"]}),s()})),children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Add a New Person"}),Object(o.jsx)("label",{htmlFor:"person-name",className:"label-required",children:"Name"}),Object(o.jsx)("input",{id:"person-name",...c("person-name",{required:"A name is required",validate:t=>t&&!e.includes(t)||"The name must be unique"}),type:"text","aria-required":!0,"aria-invalid":d["person-name"]?"true":"false"}),Object(o.jsx)(i.a,{errors:d,name:"person-name",as:a}),Object(o.jsx)("label",{htmlFor:"person-group",children:"Group"}),Object(o.jsx)("input",{id:"person-group",...c("person-group"),type:"text",list:"groupOptions",autoComplete:"off"}),Object(o.jsx)("datalist",{id:"groupOptions",children:t.map((e=>Object(o.jsx)("option",{children:e},e)))}),Object(o.jsx)("p",{className:"meta",children:"Use groups for simple exclusions to prevent people in the same group from matching with each other. For example, people in the same family or household."}),Object(o.jsx)("button",{type:"submit",children:"Add Person"})]})})};var u,j,b=n(5);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h({title:e,titleId:t,...n},c){return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",ref:c,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,u||(u=r.createElement("line",{x1:18,y1:6,x2:6,y2:18})),j||(j=r.createElement("line",{x1:6,y1:6,x2:18,y2:18})))}const x=r.forwardRef(h);n.p;function O({onClick:e}){return Object(o.jsxs)("button",{onClick:e,className:"muted",title:"Remove",type:"button",children:[Object(o.jsx)(b.a,{children:"Remove"}),Object(o.jsx)(x,{"aria-hidden":!0})]})}function m({people:e,removePerson:t}){const n=Object(r.useMemo)((()=>function(e){return e.reduce(((e,t)=>{const n=e.find((e=>{var n;return e.group===(null!==(n=t.group)&&void 0!==n?n:null)}));var r;return n?n.people.push(t):e.push({group:null!==(r=t.group)&&void 0!==r?r:null,people:[t]}),e}),[]).sort(((e,t)=>null===e.group||null===t.group?1:e.group.localeCompare(t.group)))}(e)),[e]);return e.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{id:"added-people-heading",children:"Added People"}),Object(o.jsx)("ul",{"aria-labelledby":"added-people-heading",children:n.map((e=>{var n;const r=`person-group-${null!==(n=e.group)&&void 0!==n?n:"fba449b5-deb3-400c-991c-4bac2bb1ad33"}`;return Object(o.jsxs)("li",{children:[Object(o.jsxs)("span",{id:r,children:[Object(o.jsx)(b.a,{children:"Group "}),null===e.group?"No Group":e.group]}),Object(o.jsx)("ul",{"aria-labelledby":r,children:e.people.map((e=>Object(o.jsxs)("li",{children:[e.name," ",Object(o.jsx)(O,{onClick:()=>t(e)})]},e.name)))})]},r)}))})]}):null}var g=n(10);function f({pairs:e,showGroups:t}){return e.length<1?null:Object(o.jsxs)("table",{children:[Object(o.jsx)("caption",{children:"Secret Santa Matches"}),Object(o.jsxs)("thead",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{colSpan:t?2:1,children:"Giver"}),Object(o.jsx)("th",{colSpan:t?2:1,children:"Receiver"})]}),t&&Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Group"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Group"})]})]}),Object(o.jsx)("tbody",{children:e.map((([e,n])=>Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),t&&Object(o.jsx)("td",{children:e.group}),Object(o.jsx)("td",{children:n.name}),t&&Object(o.jsx)("td",{children:n.group})]},e.name)))})]})}var y=function(e,t){return GiftExchange.calculate(e,{exclusions:t,timeout:5e3}).map(((t,n)=>[e[n],t]))};n(22);const v=window.location.origin+"/secret-santa/giftexchange.umd.production.min.js",S="No matches are possible with the given people and exclusions, or there was an error with the matching Worker. Please try again or change your configuration to allow everyone to match with someone.";function w({people:e,exclusions:t}){const[n,c]=Object(r.useState)([]),[s,l]=Object(r.useState)(null),[i,a]=Object(r.useState)(!1);Object(r.useLayoutEffect)((()=>{c([])}),[e,t]);const[d,{status:u,kill:j}]=Object(g.a)(y,{autoTerminate:!1,remoteDependencies:[v]});Object(r.useEffect)((()=>{"ERROR"===u&&l(new Error(S))}),[u]),Object(r.useEffect)((()=>()=>{j()}),[j]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:async()=>{l(null);try{c(await d(e,t))}catch(n){console.error(n),l(new Error(S)),c([])}},type:"button",disabled:e.length<1||"RUNNING"===u,children:"Match"})," ",Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",onChange:()=>a((e=>!e)),checked:i})," ","Show Groups"]}),s&&Object(o.jsx)("p",{className:"error",children:s.message}),Object(o.jsx)(f,{pairs:s?[]:n,showGroups:i})]})}const k=e=>e.type+e.subject+e.excludedType+e.excludedSubject,E=({exclusion:e,removeHandler:t})=>Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:e.subject})," cannot give to"," ","group"===e.excludedType&&"group ",Object(o.jsx)("strong",{children:e.excludedSubject})," ",Object(o.jsx)(O,{onClick:t})]});function N({exclusions:e,removeExclusion:t}){if(!e.length)return null;const n=e.filter((e=>"name"===e.type)),r=e.filter((e=>"group"===e.type));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{id:"added-exclusions-heading",children:"Added Exclusions"}),Object(o.jsxs)("ul",{"aria-labelledby":"added-exclusions-heading",children:[n.length>0&&Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{id:"added-exclusions-person",children:"Person"}),Object(o.jsx)("ul",{"aria-labelledby":"added-exclusions-person",children:n.map((e=>Object(o.jsx)(E,{exclusion:e,removeHandler:()=>t(e.key)},e.key)))})]}),r.length>0&&Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{id:"added-exclusions-group",children:"Group"}),Object(o.jsx)("ul",{"aria-labelledby":"added-exclusions-group",children:r.map((e=>Object(o.jsx)(E,{exclusion:e,removeHandler:()=>t(e.key)},e.key)))})]})]})]})}const G=({usedNames:e,usedGroups:t,usedExclusionKeys:n,onSubmit:r})=>{const{handleSubmit:c,register:s,reset:d,setError:u,watch:j,formState:{errors:b}}=Object(l.b)(),p=j("type","name"),h=j("excludedType","name");return Object(o.jsxs)("form",{onSubmit:c((e=>{n.includes(k(e))?u("excludedSubject",{message:"This exclusion already exists"}):(r(e),d())})),style:{display:"flex",flexWrap:"wrap"},children:[Object(o.jsx)("p",{style:{flex:"1 0 100%"},children:"A Source will not be matched with the Excluded."}),Object(o.jsxs)("fieldset",{style:{flex:"1 0 auto"},children:[Object(o.jsx)("legend",{children:"Source"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",...s("type",{required:"A type is required"}),value:"name",defaultChecked:!0})," ","Name"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",...s("type",{required:"A type is required"}),value:"group"})," ","Group"]}),Object(o.jsx)(i.a,{errors:b,name:"type",as:a}),Object(o.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(o.jsx)("select",{id:"subject",...s("subject",{required:`A ${p} is required`,validate:n=>"name"===p?e.includes(n):t.includes(n)}),disabled:("name"===p?e:t).length<1,children:("name"===p?e:t).map((e=>Object(o.jsx)("option",{children:e},e)))}),Object(o.jsx)(i.a,{errors:b,name:"subject",as:a})]}),Object(o.jsxs)("fieldset",{style:{flex:"1 0 auto"},children:[Object(o.jsx)("legend",{children:"Excluded"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",...s("excludedType",{required:"A type is required"}),value:"name",defaultChecked:!0})," ","Name"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",...s("excludedType",{required:"A type is required"}),value:"group"})," ","Group"]}),Object(o.jsx)(i.a,{errors:b,name:"excludedType",as:a}),Object(o.jsx)("label",{htmlFor:"excludedSubject",children:"Subject"}),Object(o.jsx)("select",{id:"excludedSubject",...s("excludedSubject",{required:`A ${h} is required`,validate:n=>"name"===h?e.includes(n):t.includes(n)}),disabled:("name"===h?e:t).length<1,children:("name"===h?e:t).map((e=>Object(o.jsx)("option",{children:e},e)))}),Object(o.jsx)(i.a,{errors:b,name:"excludedSubject",as:a})]}),Object(o.jsx)("div",{style:{flex:"0 0 100%"},children:Object(o.jsx)("button",{type:"submit",children:"Add Exclusion"})})]})};function q({children:e,heading:t}){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:t}),e]})}var A=n(2);n(23);const C=new Date,M=Array.from(Array(12).keys()).map((e=>(C.setMonth(e),C.toLocaleDateString(void 0,{month:"long"}))));function P({setPeople:e,setExclusions:t,disabled:n}){return Object(o.jsx)("button",{onClick:()=>{e(M.map(((e,t)=>({name:e,group:(Math.floor(t%3)+1).toString()}))));const n=[{type:"group",subject:"1",excludedType:"name",excludedSubject:M[1]},{type:"name",subject:M[5],excludedType:"group",excludedSubject:"2"}];t(n.map((e=>({...e,key:k(e)}))))},type:"button",disabled:n,children:"Fill with Example Data"})}const T=(e,t)=>{const[n,c]=Object(r.useState)((()=>{const n=localStorage.getItem(e);return null!==n?JSON.parse(n):t}));return Object(r.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(n))}),[n,e]),[n,c]},F=e=>"string"===typeof e;function R(){const[e,t]=T("secret-santa-people",[]),[n,c]=T("secret-santa-exclusions",[]),s=Object(r.useMemo)((()=>e.map((e=>e.name))),[e]),l=Object(r.useMemo)((()=>[...new Set(e.map((e=>e.group)).filter(F))]),[e]),i=Object(r.useMemo)((()=>n.map((e=>e.key))),[n]);return Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{children:[Object(o.jsx)("p",{children:"Create a matching of names for your gift exchange or Secret Santa. It supports grouping of people as well as directional exclusions based on the group or individual name to support all of your custom rules."}),Object(o.jsx)(P,{setPeople:t,setExclusions:c,disabled:e.length+n.length!==0})," ",Object(o.jsx)("button",{className:"danger",onClick:()=>{t([]),c([])},children:"Clear"})]}),Object(o.jsxs)(A.e,{children:[Object(o.jsxs)(A.b,{children:[Object(o.jsx)(A.a,{children:"People"}),Object(o.jsx)(A.a,{children:"Exclusions"}),Object(o.jsx)(A.a,{disabled:e.length<1,children:"Matches"})]}),Object(o.jsxs)(A.d,{children:[Object(o.jsx)(A.c,{children:Object(o.jsxs)(q,{heading:"People",children:[Object(o.jsx)(d,{usedNames:s,usedGroups:l,onSubmit:e=>{t((t=>t.concat(e)))}}),Object(o.jsx)(m,{people:e,removePerson:e=>{t((t=>t.filter((t=>t.name!==e.name))))}})]})}),Object(o.jsx)(A.c,{children:Object(o.jsxs)(q,{heading:"Exclusions",children:[Object(o.jsx)(G,{usedNames:s,usedGroups:l,usedExclusionKeys:i,onSubmit:e=>{c((t=>t.concat({...e,key:k(e)})))}}),Object(o.jsx)(N,{exclusions:n,removeExclusion:e=>{c((t=>t.filter((t=>t.key!==e))))}})]})}),Object(o.jsx)(A.c,{children:Object(o.jsx)(q,{heading:"Matches",children:Object(o.jsx)(w,{people:e,exclusions:n})})})]})]})]})}const I=["\ud83c\udf85","\ud83c\udf85\ud83c\udffb","\ud83c\udf85\ud83c\udffc","\ud83c\udf85\ud83c\udffd","\ud83c\udf85\ud83c\udffe","\ud83c\udf85\ud83c\udfff","\ud83e\udd36","\ud83e\udd36\ud83c\udffb","\ud83e\udd36\ud83c\udffc","\ud83e\udd36\ud83c\udffd","\ud83e\udd36\ud83c\udffe","\ud83e\udd36\ud83c\udfff"],B=I[Math.floor(Math.random()*I.length)];var L=function(){return Object(r.useEffect)((()=>{document.title=`Secret Santa ${B}`}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h1",{children:["Secret Santa"," ",Object(o.jsx)("span",{role:"presentation","aria-hidden":"true",children:B})]}),Object(o.jsxs)("p",{children:["By"," ",Object(o.jsx)("a",{href:"https://brianm.me",rel:"noopener noreferrer",children:"Brian Mitchell"}),". View the source on"," ",Object(o.jsx)("a",{href:"https://github.com/BrianMitchL/secret-santa",rel:"noopener noreferrer",children:"GitHub"}),"."]})]}),Object(o.jsx)(R,{})]})};s.a.render(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.35999988.chunk.js.map