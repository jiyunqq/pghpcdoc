---
title: conda 环境
sidebar_position: 2
---

## 通过 conda 安装软件

Conda 是一个开源的软件包管理系统和环境管理系统，用于安装多个版本的软件包及其依赖关系，并在它们之间轻松切换，
Conda支持Python、R、 Ruby、 Lua、 Scala、 Java、 JavaScript、 C/ C++、 FORTRAN等多种语言

### Conda安装

```sh:no-line-numbers
# 获得最新的miniconda安装包；
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

# 安装到自己的HOME目录下software/miniconda3中，这个目录在安装前不能存在；
sh Miniconda3-latest-Linux-x86_64.sh -b -p ${HOME}/software/miniconda3

# 安装成功后删除安装包
rm -f Miniconda3-latest-Linux-x86_64.sh

# 将环境变量写入~/.bashrc文件中；
echo "export PATH=${HOME}/software/miniconda3/bin:\$PATH" >> ~/.bashrc

# 退出重新登录或者执行以下命令
source ~/.bashrc
```

### Conda使用

#### Conda创建虚拟环境

```shell:no-line-numbers
conda info -e # 查看已有的conda环境；

source activate env_name # 进入指定的conda环境；

conda deactivate # 退出当前的conda环境；

conda create -n env_name [python=] # 创建环境，并指定python版本，或者安装包等；

conda remove -n env_name --all # 删除指定环境；
```

#### Conda安装软件

```shell
conda list [-n env_name] # 查看当前环境(指定环境)下安装的包；

conda search pkg_name # 查看安装包；

conda update pkg_name # 更新指定的安装包；

conda remove pkg_name # 卸载指定的安装包

```
