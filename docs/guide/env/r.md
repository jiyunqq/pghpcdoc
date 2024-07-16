---
title: R 环境
sidebar_position: 4
---

### R 使用

R是用于统计分析、绘图的语言和操作环境。R是属于GNU系统的一个自由、免费、源代码开放的软件，它是一个用于统计计算和统计制图的优秀工具。

使用R的用户可以直接用conda来管理自己的R运行环境。

**Step 1. 导入Conda环境**

在自己的HOME目录安装Conda，具体查看 [conda安装](conda.md)

**Step 2. 创建R的虚拟环境**

```sh:no-line-numbers
# 创建虚拟环境，并在创建的时候指定安装R 3.6.0版本;
conda create -n myEnvR r=3.6.0 -y
```
**Step 3. 进入上一步创建好的环境**

```sh:no-line-numbers
source activate myEnvR
```
**Step 4. 安装相应的库**

```sh:no-line-numbers
conda install r-stringi     # 安装R语言库stringi
```
**Step 5. 安装RStudio**

可选，如果要使用到R的图形界面可以安装

```sh:no-line-numbers
conda install rstudio
```
**Step 6. 退出环境**

安装后后就可以直接使用R来运行代码了，如果退出当前Conda虚拟环境，在当前Conda环境中执行以下指令

```sh:no-line-numbers
conda deactivate
```
