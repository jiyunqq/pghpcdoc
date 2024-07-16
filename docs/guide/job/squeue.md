---
title: squeue 查看已经提交的作业
sidebar_position: 4
---

### squeue

查看作业队列信息

- **查看作业调度系统中所有的作业**

```:no-line-numbers
squeue
```

- **查看自己提交的作业**

```:no-line-numbers
# 注意whoami前后不是单引号
squeue -u `whoami`
```

- **按照一定格式显示自己的作业信息**

```:no-line-numbers
squeue -o "%.18i %.9P %.12j %.12u %.12T %.12M %.16l %.6D %R" -u $USER
```

执行以下操作:

```:no-line-numbers
echo "alias sq='squeue -o \"%.18i %.9P %.12j %.12u %.12T %.12M %.16l %.6D %R\" -u $USER'" >> ~/.bashrc
```

随后执行 ``source ~./bashrc`` 或者重新登录, 然后执行 ``sq`` 就可以安装指定格式显示自己的作业信息

- **常用参数**

```shell
--help    # 显示squeue命令的使用帮助信息；
-A <account_list>    # 显示指定账户下所有用户的作业，如果是多个账户的话用逗号隔开；
-i <seconds>     # 每隔相应的秒数，对输出的作业信息进行刷新
-j <job_id_list> # 显示指定作业号的作业信息，如果是多个作业号的话用逗号隔开；
-n <name_list>     # 显示指定节点上的作业信息，如果指定多个节点的话用逗号隔开；
-t <state_list>     # 显示指定状态的作业信息，如果指定多个状态的话用逗号隔开；
-u <user_list>     # 显示指定用户的作业信息，如果是多个用户的话用逗号隔开；
-w <hostlist>     # 显示指定节点上运行的作业，如果是多个节点的话用逗号隔开；

```

按照指定输出格式输出:

```shell
-o <output_format>    显示指定的输出信息，指定的方式为%[[.]size]type，size表示输出项的显示长度，type为需要显示的信息。可以指定显示的常见信息如下；
%a 账户信息
%C 核心数
%D 节点数
%i 作业ID
%j 作业名
%l 作业时限
%P 分区
%q 优先级
%R 状态PD作业显示原因，状态R的作业显示节点
%T 状态
%u 用户
%M 已运行时间
# 例:squeue -o “%.18i %.9P %.12j %.12u %.12T %.12M %.16l %.6D %R”

```

[更多使用详情](https://slurm.schedmd.com/squeue.html)
