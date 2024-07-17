---
title: 磁盘配额
sidebar_position: 2
---
### storage 关于存储

#### gpfs 存储用量查询

```shell:no-line-numbers
mmlsquota --block-size auto
```

#### xfs 存储用量查询

```shell:no-line-numbers
# /share 要改成真实的存储的挂载点

xfs_quota -c "quota -uh $USER" /share


```
