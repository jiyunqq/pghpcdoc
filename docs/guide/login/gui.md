---
sidebar_position: 2
---

# 图形界面使用

通常情况下，只需通过命令行即可提交并运行任务，有些情况下，用户会使用到图形界面来进行调试等

### Linux

Linux用户使用图形界面时，只需在登录时加入-X参数即可使用图形界面

```:no-line-numbers
ssh -X user_name@ip_adress -p port
```

### Mac

MacOS 用户使用图形界面时需要安装第三方支持 X11 的软件 Xquartz。安装完后，在登录时加入-X参数即可使用图形界面：

```:no-line-numbers
ssh -X user_name@ip_adress -p port
```

### Windows

Windows用户推荐使用 `MobaXterm` 客户端，在默认情况下 MobaXterm 会自动打开 X11 的转发。

也可使用 `Xshell+Xmanager` 来使用图形界面，但 `Xmanager` 为收费软件。

也可使用 `Putty+Xming` 来使用图形界面。
