"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[824],{8438:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"guide/env/r","title":"R \u73af\u5883","description":"R \u4f7f\u7528","source":"@site/docs/guide/env/r.md","sourceDirName":"guide/env","slug":"/guide/env/r","permalink":"/pghpcdoc/docs/guide/env/r","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/env/r.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"R \u73af\u5883","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"python \u73af\u5883","permalink":"/pghpcdoc/docs/guide/env/python"},"next":{"title":"\u4f5c\u4e1a\u8c03\u5ea6","permalink":"/pghpcdoc/docs/guide/job/"}}');var t=s(4848),c=s(8453);const i={title:"R \u73af\u5883",sidebar_position:4},o=void 0,d={},a=[{value:"R \u4f7f\u7528",id:"r-\u4f7f\u7528",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"r-\u4f7f\u7528",children:"R \u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"R\u662f\u7528\u4e8e\u7edf\u8ba1\u5206\u6790\u3001\u7ed8\u56fe\u7684\u8bed\u8a00\u548c\u64cd\u4f5c\u73af\u5883\u3002R\u662f\u5c5e\u4e8eGNU\u7cfb\u7edf\u7684\u4e00\u4e2a\u81ea\u7531\u3001\u514d\u8d39\u3001\u6e90\u4ee3\u7801\u5f00\u653e\u7684\u8f6f\u4ef6\uff0c\u5b83\u662f\u4e00\u4e2a\u7528\u4e8e\u7edf\u8ba1\u8ba1\u7b97\u548c\u7edf\u8ba1\u5236\u56fe\u7684\u4f18\u79c0\u5de5\u5177\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528R\u7684\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u7528conda\u6765\u7ba1\u7406\u81ea\u5df1\u7684R\u8fd0\u884c\u73af\u5883\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 1. \u5bfc\u5165Conda\u73af\u5883"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u81ea\u5df1\u7684HOME\u76ee\u5f55\u5b89\u88c5Conda\uff0c\u5177\u4f53\u67e5\u770b ",(0,t.jsx)(n.a,{href:"/pghpcdoc/docs/guide/env/conda",children:"conda\u5b89\u88c5"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 2. \u521b\u5efaR\u7684\u865a\u62df\u73af\u5883"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh:no-line-numbers",children:"# \u521b\u5efa\u865a\u62df\u73af\u5883\uff0c\u5e76\u5728\u521b\u5efa\u7684\u65f6\u5019\u6307\u5b9a\u5b89\u88c5R 3.6.0\u7248\u672c;\nconda create -n myEnvR r=3.6.0 -y\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 3. \u8fdb\u5165\u4e0a\u4e00\u6b65\u521b\u5efa\u597d\u7684\u73af\u5883"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh:no-line-numbers",children:"source activate myEnvR\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 4. \u5b89\u88c5\u76f8\u5e94\u7684\u5e93"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh:no-line-numbers",children:"conda install r-stringi     # \u5b89\u88c5R\u8bed\u8a00\u5e93stringi\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 5. \u5b89\u88c5RStudio"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u9009\uff0c\u5982\u679c\u8981\u4f7f\u7528\u5230R\u7684\u56fe\u5f62\u754c\u9762\u53ef\u4ee5\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh:no-line-numbers",children:"conda install rstudio\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 6. \u9000\u51fa\u73af\u5883"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u540e\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528R\u6765\u8fd0\u884c\u4ee3\u7801\u4e86\uff0c\u5982\u679c\u9000\u51fa\u5f53\u524dConda\u865a\u62df\u73af\u5883\uff0c\u5728\u5f53\u524dConda\u73af\u5883\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh:no-line-numbers",children:"conda deactivate\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);