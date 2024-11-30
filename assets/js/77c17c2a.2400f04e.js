"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7372],{7106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453),r=t(8774);const c={sidebar_position:8},o="Finite State Machine",a={id:"toy-computer/logic/finite-state-machine",title:"Finite State Machine",description:"What is FSM?",source:"@site/docs/toy-computer/logic/finite-state-machine.mdx",sourceDirName:"toy-computer/logic",slug:"/toy-computer/logic/finite-state-machine",permalink:"/docs/toy-computer/logic/finite-state-machine",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"toyComputerSiderbar",previous:{title:"PLA",permalink:"/docs/toy-computer/logic/pla"}},l={},d=[{value:"What is FSM?",id:"what-is-fsm",level:2},{value:"Synchronous VS Asynchronous FSM",id:"synchronous-vs-asynchronous-fsm",level:2},{value:"Storage",id:"storage",level:2},{value:"Abstract Layer Happen!",id:"abstract-layer-happen",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"finite-state-machine",children:"Finite State Machine"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-fsm",children:"What is FSM?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"a finite number of states"}),"\n",(0,i.jsx)(n.li,{children:"a finite number of external inputs"}),"\n",(0,i.jsx)(n.li,{children:"a finite number of external outputs"}),"\n",(0,i.jsx)(n.li,{children:"an explicit specification of all state transitions"}),"\n",(0,i.jsx)(n.li,{children:"an explicit specification of what determines each external output value."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50:"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e2a\u65f6\u7528\u65cb\u8f6c\u6309\u94ae\u7684\u5bc6\u7801\u9501\uff0c\u53ea\u6709\u6309\u7167\u6b63\u786e\u7684\u65b9\u5411\u8fde\u7eed\u8f6c\u5230\u6307\u5b9a\u7684\u6570\u503c\u90e8\u5206\uff0c\u9501\u624d\u80fd\u6253\u5f00\u3002\u5176\u5bc6\u7801\u662f: R13(\u987a\u65f6\u9488\u8f6c\u5230 13) -> L22(\u9006\u65f6\u9488\u8f6c\u5230 22) -> R3(\u987a\u65f6\u9488\u8f6c\u5230 3)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"i21",src:t(4926).A+"",width:"630",height:"495"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"4 \u4e2a State"}),"\n",(0,i.jsx)(n.li,{children:"6 \u4e2a external inputs: R13, L22, R3, R-other-then-L3, L-other-than-22, and R-other-than-3."}),"\n",(0,i.jsx)(n.li,{children:"external outputs: opened, locked"}),"\n",(0,i.jsx)(n.li,{children:"8 \u4e2a state transitions"}),"\n",(0,i.jsx)(n.li,{children:"current state + external inputs \u51b3\u5b9a next state \u7684\u8f93\u51fa"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"synchronous-vs-asynchronous-fsm",children:"Synchronous VS Asynchronous FSM"}),"\n",(0,i.jsx)(n.p,{children:"FSM \u72b6\u6001\u8f6c\u53d8\u53d1\u751f\u5728\u56fa\u5b9a\u7684\u95f4\u9694\u65f6\uff0c\u79f0\u4e4b\u4e3a\u540c\u6b65\u6709\u9650\u72b6\u6001\u673a. \u5426\u5219\u79f0\u4e4b\u4e3a\u5f02\u6b65\u6709\u9650\u72b6\u6001\u673a."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Synchronous FSM"})," \u7684\u65f6\u5e8f\u90fd\u662f\u7531 ",(0,i.jsx)(n.code,{children:"Clock Signal"})," \u7535\u8def\u6765\u9a71\u52a8\u7684! \u5b83\u4eec\u4ea7\u751f\u5982\u4e0b\u56fa\u5b9a\u9891\u7387\u7684 Signal:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"i22",src:t(7029).A+"",width:"1106",height:"337"})}),"\n",(0,i.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u65f6\u5e8f\u7535\u8def\u4e2d\u4e3a\u4e86\u786e\u4fdd\u5b58\u50a8\u5143\u4ef6\u5728 ",(0,i.jsx)(n.code,{children:"ONE CLOCK CYCLE"})," \u4fdd\u6301\u4e0d\u53d8\uff0c\u9700\u8981\u4f7f\u7528 ",(0,i.jsxs)(r.A,{to:"/docs/toy-computer/circuits/storage#flip-flop",children:["Storage \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"Flip-Flop"})]}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"abstract-layer-happen",children:"Abstract Layer Happen!"}),"\n",(0,i.jsxs)(n.p,{children:["\u7ec4\u5408\u7535\u8def\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Boolean Expression"})," \u6765\u8868\u793a\uff0c\u800c\u65f6\u5e8f\u7535\u8def\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Finite State Machine"})," \u6216\u66f4\u52a0\u590d\u6742\u7684\u5e03\u5c14\u8868\u8fbe\u5f0f\u6765\u8868\u793a."]}),"\n",(0,i.jsxs)(n.p,{children:["\u7535\u8def\u7684 ",(0,i.jsx)(n.code,{children:"clock digram"})," \u592a\u96be\u770b\u4e86\uff0c\u4e3b\u8981\u7528\u4e8e\u9488\u5bf9\u5173\u952e\u7535\u8def\u8fdb\u884c\u5206\u6790\uff0c\u800c ",(0,i.jsx)(n.code,{children:"FSM"})," \u53ef\u4ece\u4e1a\u52a1\u7684\u89d2\u5ea6(\u66f4\u52a0\u62bd\u8c61\uff0c\u8131\u79bb\u7535\u8def\u7ec6\u8282)\u6765\u5206\u6790\u7535\u8def\u6574\u4f53\u903b\u8f91."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4926:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/i21-24f47152d615f8bb1963ac38b60efe74.png"},7029:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/i22-2af8ffad3fad60db910c1ddbd3378b9e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);