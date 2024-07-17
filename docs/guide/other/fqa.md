---
title: 常见问题
sidebar_position: 4
---

### 常见问题

1. Q: 库安装了, 程序报找不到库

   设置 `LD_LIBRARY_PATH` 环境, 放在调用程序的前面

   ```shell:no-line-numbers
   export LD_LIBRARY_PATH=$HOME/lib64:$LD_LIBRARY_PATH
   ```
