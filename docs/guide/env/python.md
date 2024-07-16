---
title: python 环境
sidebar_position: 3
---

### python 使用

Python是一种跨平台的计算机程序设计语言。 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。
最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发。

使用Python的用户可以直接用Conda来管理自己的Python运行环境。

**Step 1. 导入Conda环境**

在自己的HOME目录安装Conda，具体查看[conda安装](conda.md)

**Step 2. 创建Python的虚拟环境**

创建时可以指定Python版本，不指定的话会使用默认的版本(miniconda自带的Python版本)

```sh:no-line-numbers
conda create -n TensorFlow-1.14.0 -y
```
**Step 3. 进入上一步创建好的环境**

```sh:no-line-numbers
source activate TensorFlow-1.14.0
```
**Step 4. 安装相应的库**

```sh:no-line-numbers
conda install tensorflow-gpu=1.14.0 # 根据自己的需要安装相应的库；
```

**Step 5. 安装 pip 管理库**

```sh:no-line-numbers
conda install pip     # 环境中需要先安装pip
pip install numpy     # 根据自己的需要安装相应的库
```

**Step 6. 运行完后退出当前虚拟环境**

```sh:no-line-numbers
conda deactivate
```
