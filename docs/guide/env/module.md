---
title: module 环境
sidebar_position: 1
---

## 通过 module 安装软件

module是一款环境变量管理工具，集群平台安装了很多公共软件，并通过module进行环境变量的管理，
通过 ``module avail`` 即可查看已安装的软件环境

### 常见指令

``` shell
module help       # 显示帮助信息
module avail      # 显示已经安装的软件环境
module load       # 导入相应的软件环境
module unload     # 删除相应的软件环境
module list       # 列出已经导入的软件环境
module purge      # 清除所有已经导入的软件环境
module switch [mod1] mod2 # 删除mod1并导入mod2
```

:::tip
建议不要同时 ``module load`` 多个软件，因为不同软件间可能是有冲突的。
比较好的方式是 ``module load`` 一个或一组相互依赖的软件，软件运行完后运行 ``module purge`` 清除导入的环境，
然后再导入另外一个或一组相互依赖的软件
:::

### 使用例子

查看集群现有软件环境

```:no-line-numbers
module avail
```
查看matlab软件环境

```:no-line-numbers
module avail matlab
```
导入matlab/R2017a软件环境

```:no-line-numbers
module load matlab/R2017a
```

清除已导入的环境

```:no-line-numbers
module purge
```

### 编写自己的modulefile

部分用户可能会希望将自己的软件环境加到module中进行管理，可以按以下方法操作

**Step 1：创建目录来存放modulefile**

```bash
mkdir ${HOME}/mymodulefiles   # 创建目录用于放自己的module file
echo "export MODULEPATH=${HOME}/mymodulefiles:\$MODULEPATH" >> ~/.bashrc
source ~/.bashrc # 或者退出重新登录即可

# 以下开始编写自己的第一个module file
cd ${HOME}/mymodulefiles
vim myfirstmodulefile
```

**Step 2：编写modulefile，以安装在自己目录下的gcc@7.2.0为例**

```shell
#%Module1.0
##
##
module-whatis "my first modulefile"

set topdir "/gpfs/share/home/xxxxxxxxx/gcc/7.2.0"
prepend-path PATH "${topdir}/bin"
prepend-path LIBRARY_PATH "${topdir}/lib"
prepend-path LD_LIBRARY_PATH "${topdir}/lib"
prepend-path LIBRARY_PATH "${topdir}/lib64"
prepend-path LD_LIBRARY_PATH "${topdir}/lib64"
prepend-path CPATH "${topdir}/include"
prepend-path CMAKE_PREFIX_PATH "${topdir}"
setenv CC "${topdir}/bin/gcc"
setenv CXX "${topdir}/bin/g++"
setenv FC "${topdir}/bin/gfortran"
setenv F77 "${topdir}/bin/gfortran"
setenv F90 "${topdir}/bin/gfortran"
```

编写好后执行 ``module avail`` 即可查看到刚刚写好的 modulefile 了

### modulefile 常见语法

```sh:no-line-numbers
set           # 设置modulefile内部的变量
setenv        # 设置环境变量
prepend-path  # 效果类似于export PATH=xxx:$PATH
append-path   # 效果类似export PATH=$PATH:xxx
```
