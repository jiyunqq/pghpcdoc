---
title: salloc 交互运行作业
sidebar_position: 6
---

### salloc

先占用资源，然后再运行或者调式作业

- **申请单节点，跳转到节点上运行程序**

```shell:no-line-numbers
salloc -p C032M0128G -N1 -n6 -q low -t 2:00:00
# salloc 申请成功后会返回申请到的节点和作业ID等信息，假设申请到的是a4u03n07节点，作业ID为1078858
ssh a4u03n07      # 直接登录到刚刚申请到的节点a4u03n07调式作业
scancel 1078858   # 计算资源使用完后取消作业
squeue -j 1078858 # 查看作业是否还在运行，确保作业已经退出

```

- **申请GPU节点，并跳转到GPU节点上运行程序**

```shell:no-line-numbers
salloc -p GPU -N1 -n6 --gres=gpu:1 -q low -t 24:00:00
# 假设申请成功后返回的作业号为1078858，申请到的节点是gpu05
ssh gpu05 # 登录到gpu05上调式作业
scancel 1078858  # 计算结束后结束任务
squeue -j 1078858 # 确保作业已经退出
```
- **申请多节点，运行MPI程序**

```shell:no-line-numbers
salloc -p C032M0128G -N2 --ntasks-per-node=12 -q low -t 2:00:00
# salloc 申请成功后会返回申请到的节点和作业ID等信息，假设申请到的是a8u03n[05-06]节点，作业ID为1078858
# 这里申请两个节点，每个节点12个进程，每个进程一个核心

# 根据需求导入MPI环境
module load intel/2018.0

# 根据以下命令生成MPI需要的machine file
srun hostname -s | sort -n > slurm.hosts

# 跳转到申请到的头节点(第一个节点)，如a8u03n05
ssh a8u03n05

# 导入计算环境并执行程序
module load intel/2018.0
mpirun -np 24 -machinefile slurm.hosts hostname

# 结束后退出或者结束任务
scancel 1078858

```

当运行调试完程序后切记使用scancel释放资源，并执行squeue -j xxx可查看作业时候还在运行，避免占用资源却未运行作业造成意料之外的收费。

- **常用参数**

```shell:no-line-numbers
--help                # 显示帮助信息；
-A <account>          # 指定计费账户；
-D, --chdir=<directory>        # 指定工作目录；
--get-user-env          # 获取当前的环境变量；
--gres=<list>          # 使用gpu这类资源，如申请两块gpu则--gres=gpu:2
-J, --job-name=<jobname>  # 指定该作业的作业名；
--mail-type=<type>      # 指定状态发生时，发送邮件通知，有效种类为（NONE, BEGIN, END, FAIL, REQUEUE, ALL）；
--mail-user=<user>      # 发送给指定邮箱；
-n, --ntasks=<number>      # sbatch并不会执行任务，当需要申请相应的资源来运行脚本，默认情况下一个任务一个核心，--cpus-per-task参数可以修改该默认值；
-c, --cpus-per-task=<ncpus>      # 每个任务所需要的核心数，默认为1；
--ntasks-per-node=<ntasks>      # 每个节点的任务数，--ntasks参数的优先级高于该参数，如果使用--ntasks这个参数，那么将会变为每个节点最多运行的任务数；
-o, --output=<filename pattern>    # 输出文件，作业脚本中的输出将会输出到该文件；
-p, --partition=<partition_names>    # 将作业提交到对应分区；
-q, --qos=<qos>        # 指定QOS；
-t, --time=<time>    # 设置限定时间；
-w, --nodelist=<node name list>  # 指定申请的节点；
-x, --exclude=<node name list>   # 排除指定的节点；

```

[更多使用详情](https://slurm.schedmd.com/salloc.html)
