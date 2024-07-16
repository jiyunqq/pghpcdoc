---
title: sbatch 提交作业
sidebar_position: 2
---

### sbatch

sbatch用于提交作业到作业调度系统中。先编写作业脚本，然后使用sbatch命令提交。提交后脚本将在分配的计算节点中运行。

- **一个简单的例子**

以下为一个作业脚本内容

```
#!/bin/bash
#SBATCH -o job.%j.out
#SBATCH -p C032M0128G
#SBATCH --qos=low
#SBATCH -J myFirstJob
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1

hostname

```
假设该脚本的文件名为job.sh，那么通过以下命令提交作业

```
sbatch job.sh

```
上面的脚本参数说明如下:

```
#SBATCH -o job.%j.out       # 脚本执行的输出将被保存在job.%j.out文件下，%j表示作业号;
#SBATCH -p C032M0128G       # 作业提交的指定分区为C032M0128G;
#SBATCH --qos=low           # 指定作业的QOS为low;
#SBATCH -J myFirstJob       # 作业在调度系统中的作业名为myFirstJob;
#SBATCH --nodes=1           # 申请节点数为1,如果作业不能跨节点(MPI)运行, 申请的节点数应不超过1;
#SBATCH --ntasks-per-node=1 # 每个节点上运行一个任务，默认一情况下也可理解为每个节点使用一个核心，如果程序不支持多线程(如openmp)，这个数不应该超过1；

```

- **一个gpu作业例子**

该作业脚本提交后，将申请1个节点，6个核心，1块GPU卡，脚本将在分配到的计算节点上执行nvidia-smi

```
#!/bin/bash
#SBATCH -o job.%j.out
#SBATCH --partition=GPU
#SBATCH --qos=low
#SBATCH -J myFirstGPUJob
#SBATCH --nodes=1                 # 申请一个节点
#SBATCH --ntasks-per-node=6
#SBATCH --gres=gpu:1              # 每个节点上申请一块GPU卡

nvidia-smi

```

### 一个MPI并行作业例子

以下作业脚本将申请两个节点，每个节点申请32个核心，随后并行执行vasp作业

```
#!/bin/bash
#SBATCH -o job.%j.out
#SBATCH --partition=C032M0128G
#SBATCH --qos=low
#SBATCH -J myFirstMPIJob
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=32

# 导入MPI运行环境
module load intel/2017.1

# 导入MPI应用程序
module load vasp/5.4.4-intel-2017.1

# 生成 machinefile
srun hostname -s | sort -n >slurm.hosts

# 执行MPI并行计算程序
mpirun -n 64 -machinefile slurm.hosts vasp_std > log

```

- **常用参数**

```
--help    # 显示帮助信息；
-A <account>    # 指定计费账户；
-D, --chdir=<directory>      # 指定工作目录；
--get-user-env    # 获取当前的环境变量；
--gres=<list>    # 使用gpu这类资源，如申请两块gpu则--gres=gpu:2
-J, --job-name=<jobname>    # 指定该作业的作业名；
--mail-type=<type>    # 指定状态发生时，发送邮件通知，有效种类为（NONE, BEGIN, END, FAIL, REQUEUE, ALL）；
--mail-user=<user>    # 发送给指定邮箱；
-n, --ntasks=<number>    # sbatch并不会执行任务，当需要申请相应的资源来运行脚本，默认情况下一个任务一个核心，--cpus-per-task参数可以修改该默认值；
-c, --cpus-per-task=<ncpus>      # 每个任务所需要的核心数，默认为1；
--ntasks-per-node=<ntasks>    # 每个节点的任务数，--ntasks参数的优先级高于该参数，如果使用--ntasks这个参数，那么将会变为每个节点最多运行的任务数；
-o, --output=<filename pattern>    # 输出文件，作业脚本中的输出将会输出到该文件；
-p, --partition=<partition_names>    # 将作业提交到对应分区；
-q, --qos=<qos>    # 指定QOS；
-t, --time=<time>    # 允许作业运行的最大时间，目前未名一号和生科一号为5天，教学一号为两天；
-w, --nodelist=<node name list>  # 指定申请的节点；
-x, --exclude=<node name list>   # 排除指定的节点；

```

[更多使用详情](https://slurm.schedmd.com/sbatch.html)
