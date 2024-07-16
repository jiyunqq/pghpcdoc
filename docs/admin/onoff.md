---
sidebar_position: 3
---

# hpc集群开关机

## hpc集群开机

1. 管理登录节点加电 - 等待 5-10 分钟 完全启动

1. 其它节点加电

   ```:no-line-numbers
   rpower all on
   ```
## hpc集群关机

1. 停应用软件, 作业等
1. 所有节点卸载存储

   ```:no-line-numbers
   psh all "umount /share"
   ```

   :::tip
   卸载不掉, 可以使用 ``umount -l /share``
   :::

1. 关闭计算节点

   ```:no-line-numbers
   psh all "shutdown -h now"
   ```

1. 管理节点关机

   ```:no-line-numbers
   shutdown -h now
   ```
