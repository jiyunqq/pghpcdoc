---
sidebar_position: 1
---

# 一体机简介

### 一体机系统概述

- 集群管理平台: xcat

- 集群调度系统: slurm

- 集群帐号管理: nis

- 集群监控系统: ganglia

### 一体机详细规划

| 主机名   | ipmi ip         | 1口系统网IP     | 高速网 IB IP    |
| -------- | --------------- | --------------- | --------------- |
| mgt      | 172.16.9.200/23 | 172.16.8.200/23 | 172.16.7.200/24 |
| n01      | 172.16.9.1/23   | 172.16.8.1/23   | 172.16.7.1/24   |
| n02      | 172.16.9.2/23   | 172.16.8.2/23   | 172.16.7.2/24   |
| ...      | ...             | ...             | ...             |
| n11      | 172.16.9.11/23  | 172.16.8.11/23  | 172.16.7.11/24  |
| ...      | ...             | ...             | ...             |

:::tip
- 以详细规划表为准
- 见系统 ``/etc/hosts`` 文件
:::

### 管理员常用批命令

### 批命令, 从管理节点往计算节点发命令

- 查看系统版本

```shell:no-line-numbers
cat /etc/redhat-release

psh all "cat /etc/redhat-release"
```

- 查看网络是否连通

```bash:no-line-numbers
[root@mgt ~]# pping all
n01: ping
n02: ping
...
```
- 查时间

```bash:no-line-numbers
 [root@mgt ~]# psh all date
 n01: Sat Jun  6 22:41:28 CST 2020
 n02: Sat Jun  6 22:41:28 CST 2020
```
- 批拷贝, 把管理节点的 ``/etc/hosts`` 拷贝到计算节点的 ``/etc``

```bash:no-line-numbers
[root@mgt ~]# pscp /etc/hosts all:/etc
n01: done
n02: done
```

- 批关机, 给 n01, n02 节点发关机命令

```bash:no-line-numbers
[root@mgt ~]# psh n[01-02] "shutdown -h now"
```
- 远程开关机

```bash:no-line-numbers
 rpower all stat       # 查看状态
 rpower all on         # 远程开机
 rpower all off        # 远程关机
```
:::warning
- 远程关机属于硬关机, 只有在系统无法登录，死机等情况才采用这种方式关机
:::

### 检查共享目录挂载情况

```bash:no-line-numbers
[root@mgt ~]# psh all "df -h | grep share"
n01: mgt-ib:/share                29G  9.7G   20G  34% /share

```

如果没有挂载,只需要在节点上运行:

```:no-line-numbers
 mount /share
```
### 服务器 ipmi 管理

- 下载安装 ``MobaXterm`` 软件, 登录 mgt 节点, 直接运行 firefox 启动浏览器

- 输入节点的 ipmi 的 ip 地址, 用户名, 密码, 即可访问节点的 ipmi

  - https://ipmi-ip
  - 帐号: ......
  - 密码: ......

:::tip
- 常用于节点故障, 登录 ipmi 管理界面查看硬件日志
- 常用于节点无法登录, 网络不通, 登录 ipmi 管理界面, 启动 ikvm 进行操作
:::

### 调度系统 slurm 管理

- 重启某个节点服务

```:no-line-numbers
systemctl restart slurmd
```
- 重启整个 slurm 调度系统

  - 管理节点:

  ```:no-line-numbers
  systemctl restart slurmctld.service
  ```

  - 计算节点:

  ```:no-line-numbers
  psh all "systemctl restart slurmd"
  ```
- 修改配置队列

  ```:no-line-numbers
  [root@mgt ~]# vim /etc/slurm/slurm.conf

  NodeName=n[01-15] CPUs=52 State=UNKNOWN
  PartitionName=compute Nodes=n[01-15] Default=YES  MaxTime=INFINITE State=UP
  ```

  修改完后, 同步 slurm 配置:

  ```:no-line-numbers
  pscp /etc/slurm/slurm.conf all:/etc/slurm/
  ```
