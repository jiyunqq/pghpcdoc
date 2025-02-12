---
title: sinfo 查看分区状态
sidebar_position: 5
---

### sinfo

查看集群分区状态

- **查看集群分区状态**

```:no-line-numbers
sinfo
```

以上指令将显示集群的所有分区节点的空闲状态，``idel`` 为空闲，``mix`` 为节点部分核心可以使用，``alloc`` 为已被占用;

- **查看指定分区的空闲状态**

```:no-line-numbers
sinfo -p compute
```

以上命令将显示 compute 分区的空闲状态。

- **常用参数**

```shell
--help    # 显示sinfo命令的使用帮助信息；
-d        # 查看集群中没有响应的节点；
-i <seconds>    # 每隔相应的秒数，对输出的分区节点信息进行刷新
-n <name_list>    # 显示指定节点的信息，如果指定多个节点的话用逗号隔开；
-N    # 按每个节点一行的格式来显示信息；
-p  # <partition> 显示指定分区的信息，如果指定多个分区的话用逗号隔开；
-r    # 只显示响应的节点；
-R    # 显示节点不正常工作的原因；
```
按照指定格式输出:

```shell
-o #<output_format>    显示指定的输出信息，指定的方式为%[[.]size]type，“.”表示右对齐,不加的话表示左对齐；
                       size表示输出项的显示长度；type为需要显示的信息。可以指定显示的常见信息如下:
%a 是否可用状态
%A 以"allocated/idle"的格式来显示节点数，不要和"%t" or "%T"一起使用
%c 节点的核心数
%C “allocated/idle/other/total”格式显示核心总数
%D 节点总数
%E 节点不可用的原因
%m 每个节点的内存大小（单位为M）
%N 节点名
%O CPU负载
%P 分区名,作业默认分区带“*”
%r 只有root可以提交作业（yes/no）
%R 分区名
%t 节点状态（紧凑形式）
%T 节点的状态（扩展形式）
例：sinfo -o "%.15P %.5a %.10l %.6D %.6t %N"

```

[更多使用详情](https://slurm.schedmd.com/sinfo.html)
