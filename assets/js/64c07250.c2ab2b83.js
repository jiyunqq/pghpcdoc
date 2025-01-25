"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[500],{6649:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"guide/login/file","title":"\u6587\u4ef6\u4f20\u8f93","description":"windows\u7528\u6237\u53ef\u4ee5\u4f7f\u7528xftp, \u6216\u8005 winscp \u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6\u3001Linux/Mac\u7528\u6237\u53ef\u4ee5\u4f7f\u7528scp\u3001\u6216\u8005rsync\u8fdb\u884c\u4e0a\u4f20\u6216\u4e0b\u8f7d\u6587\u4ef6","source":"@site/docs/guide/login/file.md","sourceDirName":"guide/login","slug":"/guide/login/file","permalink":"/doc/docs/guide/login/file","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/login/file.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u56fe\u5f62\u754c\u9762\u4f7f\u7528","permalink":"/doc/docs/guide/login/gui"},"next":{"title":"module \u73af\u5883","permalink":"/doc/docs/guide/env/module"}}');var r=i(4848),d=i(8453);const l={sidebar_position:3},c="\u6587\u4ef6\u4f20\u8f93",o={},t=[{value:"Linux/Mac",id:"linuxmac",level:3},{value:"Windows",id:"windows",level:3},{value:"\u670d\u52a1\u7aef\u5de5\u5177 lrzsz",id:"\u670d\u52a1\u7aef\u5de5\u5177-lrzsz",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6587\u4ef6\u4f20\u8f93",children:"\u6587\u4ef6\u4f20\u8f93"})}),"\n",(0,r.jsx)(n.p,{children:"windows\u7528\u6237\u53ef\u4ee5\u4f7f\u7528xftp, \u6216\u8005 winscp \u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6\u3001Linux/Mac\u7528\u6237\u53ef\u4ee5\u4f7f\u7528scp\u3001\u6216\u8005rsync\u8fdb\u884c\u4e0a\u4f20\u6216\u4e0b\u8f7d\u6587\u4ef6"}),"\n",(0,r.jsx)(n.h3,{id:"linuxmac",children:"Linux/Mac"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u901a\u8fc7scp\u6307\u4ee4\u8fdb\u884c\u4e0a\u4f20\u548c\u4e0b\u8f7d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"scp [-rp] -P port file username@ip_address:~/\n# \u628a\u672c\u5730\u7684\u540d\u4e3afile\u7684\u6587\u4ef6\u4e0a\u4f20\u5230\u96c6\u7fa4\u7684home\u76ee\u5f55\u4e0b,\u5982\u679cfile\u662f\u4e00\u4e2a\u76ee\u5f55\u7684\u8bdd\u8fd8\u9700\u8981\u52a0\u4e0a\u53c2\u6570r\n\nscp [-rp] -P port username@ip_address:~/file ./\n# \u8be5\u547d\u4ee4\u5c06\u4f1a\u628a\u670d\u52a1\u5668\u4e0ahome\u76ee\u5f55\u4e0b\u540d\u4e3afile\u7684\u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u901a\u8fc7rsync\u6307\u4ee4\u8fdb\u884c\u4e0a\u4f20\u548c\u4e0b\u8f7d:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'rsync [-Pr] file username@ip_address:~/\n# \u628a\u672c\u5730\u7684\u540d\u4e3afile\u7684\u6587\u4ef6\u540c\u6b65\u5230\u96c6\u7fa4\u7684home\u76ee\u5f55\u4e0b,\u5982\u679cfile\u662f\u4e00\u4e2a\u76ee\u5f55\u7684\u8bdd\u8fd8\u9700\u8981\u52a0\u4e0a\u53c2\u6570r\n\n\u5982\u679c\u5e26\u7aef\u53e3\u53f7, \u5199\u6cd5\u4e3a:\nrsync [-Pr] -e "ssh -p port" file username@ip_address:~/\n\nrsync [-Pr] username@ip_address:~/file ./\n# \u8be5\u547d\u4ee4\u5c06\u4f1a\u628a\u670d\u52a1\u5668\u4e0ahome\u76ee\u5f55\u4e0b\u540d\u4e3afile\u7684\u6587\u4ef6\u540c\u6b65\u5230\u672c\u5730\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\n\n\u5982\u679c\u5e26\u7aef\u53e3\u53f7, \u5199\u6cd5\u4e3a:\nrsync [-Pr] -e "ssh -p port" username@ip_address:~/file ./\n'})}),"\n",(0,r.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,r.jsx)(n.p,{children:"Windows\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u76f8\u5173\u7684\u6587\u4ef6\u4f20\u8f93\u8f6f\u4ef6\uff0c\u5982\u4f7f\u7528xshell\u8fdb\u884c\u7684\u767b\u5f55\u7684\u7528\u6237\u53ef\u4ee5\u642d\u914dxftp\u6765\u8fdb\u884c\u6587\u4ef6\u7684\u4e0a\u4f20\u4e0b\u8f7d\uff0c\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5xftp\u65f6\uff0c\u9700\u8981\u9009\u62e9\u201c\u5bb6\u5ead\u548c\u5b66\u6821\u7528\u6237\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1\u201d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5355\u72ec\u5b89\u88c5 winscp \u6765\u8fdb\u884c\u4e0a\u4f20\u4e0b\u8f7d"}),"\n",(0,r.jsx)(n.h3,{id:"\u670d\u52a1\u7aef\u5de5\u5177-lrzsz",children:"\u670d\u52a1\u7aef\u5de5\u5177 lrzsz"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u96c6\u7fa4\u7684\u767b\u5f55\u8282\u70b9\u5b89\u88c5\u5feb\u6377\u6587\u4ef6\u4f20\u8f93\u5de5\u5177 ",(0,r.jsx)(n.code,{children:"lrzsz"})," \uff0c\u5176\u4f18\u70b9\u662f\u4e0d\u7528\u518d\u6253\u5f00\u4e00\u4e2a sftp \u5de5\u5177\u767b\u5f55\u4e0a\u53bb\u4e0a\u4f20\n\u548c\u4e0b\u8f7d\u6587\u4ef6\uff0c\u800c\u662f\u901a\u8fc7\u4e24\u4e2a\u7b80\u5355\u7684\u547d\u4ee4 ",(0,r.jsx)(n.code,{children:"rz"})," \u548c ",(0,r.jsx)(n.code,{children:"sz"})," \u8fdb\u884c\u6587\u4ef6\u4f20\u8f93 . ",(0,r.jsx)(n.code,{children:"rz"})," \u548c ",(0,r.jsx)(n.code,{children:"sz"})," \u662f Linux/Unix\n\u540c windows \u8fdb\u884c ZModem \u6587\u4ef6\u4f20\u8f93\u7684\u547d\u4ee4\u884c\u5de5\u5177."]}),"\n",(0,r.jsx)(n.p,{children:"sz\uff1a\u5c06\u9009\u5b9a\u7684\u6587\u4ef6\u53d1\u9001\u5230\u672c\u5730\u673a\u5668\nrz\uff1a\u8fd0\u884c\u8be5\u547d\u4ee4\u4f1a\u5f39\u51fa\u4e00\u4e2a\u6587\u4ef6\u9009\u62e9\u7a97\u53e3\uff0c\u4ece\u672c\u5730\u9009\u62e9\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f\uff1a",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5355\u72ec\u7528 rz \u4f1a\u6709\u4e24\u4e2a\u95ee\u9898\uff1a\u4e0a\u4f20\u4e2d\u65ad\u3001\u4e0a\u4f20\u6587\u4ef6\u53d8\u5316\uff08 md5 \u4e0d\u540c\uff09\uff0c\u89e3\u51b3\u529e\u6cd5\u662f\u4e0a\u4f20\u662f\n\u7528 rz be \uff0c\u5e76\u4e14\u53bb\u6389\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d Upload files as ASCII \u201d\u524d\u7684\u52fe\u9009\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"b binary \u7528 binary \u7684\u65b9\u5f0f\u4e0a\u4f20\u4e0b\u8f7d\uff0c\u4e0d\u89e3\u91ca\u5b57\u7b26\u4e3a ascii \u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"e \u5f3a\u5236 escape \u6240\u6709\u63a7\u5236\u5b57\u7b26\uff0c\u6bd4\u5982 Ctrl+x DEL \u7b49\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u547d\u4ee4 sz file1 file2 \u5c31\u662f\u53d1\u6587\u4ef6\u5230 windows \u4e0a\uff08\u4fdd\u5b58\u7684\u76ee\u5f55\u662f\u53ef\u4ee5\u914d\u7f6e\uff09 \u6bd4 ftp \u547d\n\u4ee4\u65b9\u4fbf\u591a\u4e86\uff0c\u800c\u4e14\u670d\u52a1\u5668\u4e0d\u7528\u518d\u5f00 FTP \u670d\u52a1\u4e86\u3002"}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const r={},d=s.createContext(r);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);