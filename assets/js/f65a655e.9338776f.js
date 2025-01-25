"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[404],{8057:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});const l=JSON.parse('{"id":"guide/job/salloc","title":"salloc \u4ea4\u4e92\u8fd0\u884c\u4f5c\u4e1a","description":"salloc","source":"@site/docs/guide/job/salloc.md","sourceDirName":"guide/job","slug":"/guide/job/salloc","permalink":"/doc/docs/guide/job/salloc","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/job/salloc.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"salloc \u4ea4\u4e92\u8fd0\u884c\u4f5c\u4e1a","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"sinfo \u67e5\u770b\u5206\u533a\u72b6\u6001","permalink":"/doc/docs/guide/job/sinfo"},"next":{"title":"scontrol \u67e5\u770b\u4f5c\u4e1a\u5177\u4f53\u4fe1\u606f","permalink":"/doc/docs/guide/job/scontrol"}}');var o=s(4848),t=s(8453);const c={title:"salloc \u4ea4\u4e92\u8fd0\u884c\u4f5c\u4e1a",sidebar_position:6},r=void 0,a={},i=[{value:"salloc",id:"salloc",level:3}];function u(n){const e={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"salloc",children:"salloc"}),"\n",(0,o.jsx)(e.p,{children:"\u5148\u5360\u7528\u8d44\u6e90\uff0c\u7136\u540e\u518d\u8fd0\u884c\u6216\u8005\u8c03\u5f0f\u4f5c\u4e1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"\u7533\u8bf7\u5355\u8282\u70b9\uff0c\u8df3\u8f6c\u5230\u8282\u70b9\u4e0a\u8fd0\u884c\u7a0b\u5e8f"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell:no-line-numbers",children:"salloc -p C032M0128G -N1 -n6 -q low -t 2:00:00\n# salloc \u7533\u8bf7\u6210\u529f\u540e\u4f1a\u8fd4\u56de\u7533\u8bf7\u5230\u7684\u8282\u70b9\u548c\u4f5c\u4e1aID\u7b49\u4fe1\u606f\uff0c\u5047\u8bbe\u7533\u8bf7\u5230\u7684\u662fa4u03n07\u8282\u70b9\uff0c\u4f5c\u4e1aID\u4e3a1078858\nssh a4u03n07      # \u76f4\u63a5\u767b\u5f55\u5230\u521a\u521a\u7533\u8bf7\u5230\u7684\u8282\u70b9a4u03n07\u8c03\u5f0f\u4f5c\u4e1a\nscancel 1078858   # \u8ba1\u7b97\u8d44\u6e90\u4f7f\u7528\u5b8c\u540e\u53d6\u6d88\u4f5c\u4e1a\nsqueue -j 1078858 # \u67e5\u770b\u4f5c\u4e1a\u662f\u5426\u8fd8\u5728\u8fd0\u884c\uff0c\u786e\u4fdd\u4f5c\u4e1a\u5df2\u7ecf\u9000\u51fa\n\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"\u7533\u8bf7GPU\u8282\u70b9\uff0c\u5e76\u8df3\u8f6c\u5230GPU\u8282\u70b9\u4e0a\u8fd0\u884c\u7a0b\u5e8f"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell:no-line-numbers",children:"salloc -p GPU -N1 -n6 --gres=gpu:1 -q low -t 24:00:00\n# \u5047\u8bbe\u7533\u8bf7\u6210\u529f\u540e\u8fd4\u56de\u7684\u4f5c\u4e1a\u53f7\u4e3a1078858\uff0c\u7533\u8bf7\u5230\u7684\u8282\u70b9\u662fgpu05\nssh gpu05 # \u767b\u5f55\u5230gpu05\u4e0a\u8c03\u5f0f\u4f5c\u4e1a\nscancel 1078858  # \u8ba1\u7b97\u7ed3\u675f\u540e\u7ed3\u675f\u4efb\u52a1\nsqueue -j 1078858 # \u786e\u4fdd\u4f5c\u4e1a\u5df2\u7ecf\u9000\u51fa\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"\u7533\u8bf7\u591a\u8282\u70b9\uff0c\u8fd0\u884cMPI\u7a0b\u5e8f"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell:no-line-numbers",children:"salloc -p C032M0128G -N2 --ntasks-per-node=12 -q low -t 2:00:00\n# salloc \u7533\u8bf7\u6210\u529f\u540e\u4f1a\u8fd4\u56de\u7533\u8bf7\u5230\u7684\u8282\u70b9\u548c\u4f5c\u4e1aID\u7b49\u4fe1\u606f\uff0c\u5047\u8bbe\u7533\u8bf7\u5230\u7684\u662fa8u03n[05-06]\u8282\u70b9\uff0c\u4f5c\u4e1aID\u4e3a1078858\n# \u8fd9\u91cc\u7533\u8bf7\u4e24\u4e2a\u8282\u70b9\uff0c\u6bcf\u4e2a\u8282\u70b912\u4e2a\u8fdb\u7a0b\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u4e00\u4e2a\u6838\u5fc3\n\n# \u6839\u636e\u9700\u6c42\u5bfc\u5165MPI\u73af\u5883\nmodule load intel/2018.0\n\n# \u6839\u636e\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210MPI\u9700\u8981\u7684machine file\nsrun hostname -s | sort -n > slurm.hosts\n\n# \u8df3\u8f6c\u5230\u7533\u8bf7\u5230\u7684\u5934\u8282\u70b9(\u7b2c\u4e00\u4e2a\u8282\u70b9)\uff0c\u5982a8u03n05\nssh a8u03n05\n\n# \u5bfc\u5165\u8ba1\u7b97\u73af\u5883\u5e76\u6267\u884c\u7a0b\u5e8f\nmodule load intel/2018.0\nmpirun -np 24 -machinefile slurm.hosts hostname\n\n# \u7ed3\u675f\u540e\u9000\u51fa\u6216\u8005\u7ed3\u675f\u4efb\u52a1\nscancel 1078858\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u5f53\u8fd0\u884c\u8c03\u8bd5\u5b8c\u7a0b\u5e8f\u540e\u5207\u8bb0\u4f7f\u7528scancel\u91ca\u653e\u8d44\u6e90\uff0c\u5e76\u6267\u884csqueue -j xxx\u53ef\u67e5\u770b\u4f5c\u4e1a\u65f6\u5019\u8fd8\u5728\u8fd0\u884c\uff0c\u907f\u514d\u5360\u7528\u8d44\u6e90\u5374\u672a\u8fd0\u884c\u4f5c\u4e1a\u9020\u6210\u610f\u6599\u4e4b\u5916\u7684\u6536\u8d39\u3002"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"\u5e38\u7528\u53c2\u6570"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell:no-line-numbers",children:"--help                # \u663e\u793a\u5e2e\u52a9\u4fe1\u606f\uff1b\n-A <account>          # \u6307\u5b9a\u8ba1\u8d39\u8d26\u6237\uff1b\n-D, --chdir=<directory>        # \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\uff1b\n--get-user-env          # \u83b7\u53d6\u5f53\u524d\u7684\u73af\u5883\u53d8\u91cf\uff1b\n--gres=<list>          # \u4f7f\u7528gpu\u8fd9\u7c7b\u8d44\u6e90\uff0c\u5982\u7533\u8bf7\u4e24\u5757gpu\u5219--gres=gpu:2\n-J, --job-name=<jobname>  # \u6307\u5b9a\u8be5\u4f5c\u4e1a\u7684\u4f5c\u4e1a\u540d\uff1b\n--mail-type=<type>      # \u6307\u5b9a\u72b6\u6001\u53d1\u751f\u65f6\uff0c\u53d1\u9001\u90ae\u4ef6\u901a\u77e5\uff0c\u6709\u6548\u79cd\u7c7b\u4e3a\uff08NONE, BEGIN, END, FAIL, REQUEUE, ALL\uff09\uff1b\n--mail-user=<user>      # \u53d1\u9001\u7ed9\u6307\u5b9a\u90ae\u7bb1\uff1b\n-n, --ntasks=<number>      # sbatch\u5e76\u4e0d\u4f1a\u6267\u884c\u4efb\u52a1\uff0c\u5f53\u9700\u8981\u7533\u8bf7\u76f8\u5e94\u7684\u8d44\u6e90\u6765\u8fd0\u884c\u811a\u672c\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e00\u4e2a\u4efb\u52a1\u4e00\u4e2a\u6838\u5fc3\uff0c--cpus-per-task\u53c2\u6570\u53ef\u4ee5\u4fee\u6539\u8be5\u9ed8\u8ba4\u503c\uff1b\n-c, --cpus-per-task=<ncpus>      # \u6bcf\u4e2a\u4efb\u52a1\u6240\u9700\u8981\u7684\u6838\u5fc3\u6570\uff0c\u9ed8\u8ba4\u4e3a1\uff1b\n--ntasks-per-node=<ntasks>      # \u6bcf\u4e2a\u8282\u70b9\u7684\u4efb\u52a1\u6570\uff0c--ntasks\u53c2\u6570\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u8be5\u53c2\u6570\uff0c\u5982\u679c\u4f7f\u7528--ntasks\u8fd9\u4e2a\u53c2\u6570\uff0c\u90a3\u4e48\u5c06\u4f1a\u53d8\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6700\u591a\u8fd0\u884c\u7684\u4efb\u52a1\u6570\uff1b\n-o, --output=<filename pattern>    # \u8f93\u51fa\u6587\u4ef6\uff0c\u4f5c\u4e1a\u811a\u672c\u4e2d\u7684\u8f93\u51fa\u5c06\u4f1a\u8f93\u51fa\u5230\u8be5\u6587\u4ef6\uff1b\n-p, --partition=<partition_names>    # \u5c06\u4f5c\u4e1a\u63d0\u4ea4\u5230\u5bf9\u5e94\u5206\u533a\uff1b\n-q, --qos=<qos>        # \u6307\u5b9aQOS\uff1b\n-t, --time=<time>    # \u8bbe\u7f6e\u9650\u5b9a\u65f6\u95f4\uff1b\n-w, --nodelist=<node name list>  # \u6307\u5b9a\u7533\u8bf7\u7684\u8282\u70b9\uff1b\n-x, --exclude=<node name list>   # \u6392\u9664\u6307\u5b9a\u7684\u8282\u70b9\uff1b\n\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://slurm.schedmd.com/salloc.html",children:"\u66f4\u591a\u4f7f\u7528\u8be6\u60c5"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var l=s(6540);const o={},t=l.createContext(o);function c(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);