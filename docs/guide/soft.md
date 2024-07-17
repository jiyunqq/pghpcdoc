---
title: 软件加载
sidebar_position: 2
---

### conda 环境加载

#### 加载 conda 2 环境

```shell:no-line-numbers
module load conda/2-5.2.0
source /share/app/conda/conda2/etc/profile.d/conda.sh
which python
conda activate base
conda deactivate
```

#### 加载 conda 3 环境

```shell:no-line-numbers
module load conda/3-2020.07
source /share/app/conda/conda3/etc/profile.d/conda.sh
which python
conda activate base
conda deactivate
```

### oneapi 加载方法

```shell:no-line-numbers
module load mkl mpi compiler
which mpirun
```