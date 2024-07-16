---
title: scontrol 查看作业具体信息
sidebar_position: 7
---

### scontrol 查看作业详细信息

可以通过 ``scontrol`` 或者 ``sacct`` 查询正常运行或者已经执行完的作业的相关信息

- **scontrol**

  通过 ``scontrol`` 可以查询仍在运行的作业详细信息，如下所示

  ```shell:no-line-numbers
  # 查看作业7454119的详细信息
  scontrol show job 7454119
  ```

- **sacct**

  通过 ``sacct`` 查询已经结束作业的相关信息，如下所示

  ```shell:no-line-numbers
  sacct -j 7454119
  ```

  还可以通过format指定输出格式:

  ```shell:no-line-numbers
  format=jobid,jobname,partition,nodelist,alloccpus,state,end
  sacct --format=$format -j 7454119
  ```

[更多关于sacct的使用](https://slurm.schedmd.com/sacct.html)
