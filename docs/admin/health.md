---
sidebar_position: 4
---

# hpc集群健康检查

### 网络连通性检查

```:no-line-numbers
pping all

```

### 时间同步检查

```:no-line-numbers
psh all date
```

### 共享目录状态检查

```:no-line-numbers
psh all "df -h | grep share"
```


### 用户管理检查

```:no-line-numbers
psh all "ypcat passwd | head -1"
```


### 调度系统检查


```:no-line-numbers
sinfo -l
```
