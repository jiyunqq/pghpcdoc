### storage 关于存储

- **存储用量查询**

```shell 
# 注意 ` 符号不是单引号 

export PATH=$PATH:/usr/lpp/mmfs/bin mmlsquota -g `id -g` --block-size auto 

```

- **集群存储使用情况查询**

```
export PATH=$PATH:/usr/lpp/mmfs/bin
mmlsquota --block-size auto

```
