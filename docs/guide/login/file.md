---
sidebar_position: 3
---

# 文件传输

windows用户可以使用xftp, 或者 winscp 上传和下载文件、Linux/Mac用户可以使用scp、或者rsync进行上传或下载文件

### Linux/Mac

以下为通过scp指令进行上传和下载

```
scp [-rp] -P port file username@ip_address:~/
# 把本地的名为file的文件上传到集群的home目录下,如果file是一个目录的话还需要加上参数r

scp [-rp] -P port username@ip_address:~/file ./
# 该命令将会把服务器上home目录下名为file的文件下载到本地当前文件夹下
```

以下为通过rsync指令进行上传和下载:

```
rsync [-Pr] file username@ip_address:~/
# 把本地的名为file的文件同步到集群的home目录下,如果file是一个目录的话还需要加上参数r

如果带端口号, 写法为:
rsync [-Pr] -e "ssh -p port" file username@ip_address:~/

rsync [-Pr] username@ip_address:~/file ./
# 该命令将会把服务器上home目录下名为file的文件同步到本地当前文件夹下

如果带端口号, 写法为:
rsync [-Pr] -e "ssh -p port" username@ip_address:~/file ./
```

### Windows

Windows用户可以使用相关的文件传输软件，如使用xshell进行的登录的用户可以搭配xftp来进行文件的上传下载，
需要注意的是，在官网下载安装xftp时，需要选择“家庭和学校用户的免费许可证”。

也可以单独安装 winscp 来进行上传下载

### 服务端工具 lrzsz

在集群的登录节点安装快捷文件传输工具 ``lrzsz`` ，其优点是不用再打开一个 sftp 工具登录上去上传
和下载文件，而是通过两个简单的命令 `rz` 和 `sz` 进行文件传输 . `rz` 和 `sz` 是 Linux/Unix
同 windows 进行 ZModem 文件传输的命令行工具.

sz：将选定的文件发送到本地机器
rz：运行该命令会弹出一个文件选择窗口，从本地选择文件上传到服务器。

:::tip 注意：

- 单独用 rz 会有两个问题：上传中断、上传文件变化（ md5 不同），解决办法是上传是
  用 rz be ，并且去掉弹出的对话框中 Upload files as ASCII ”前的勾选。

- b binary 用 binary 的方式上传下载，不解释字符为 ascii 。

- e 强制 escape 所有控制字符，比如 Ctrl+x DEL 等。

- 运行命令 sz file1 file2 就是发文件到 windows 上（保存的目录是可以配置） 比 ftp 命
  令方便多了，而且服务器不用再开 FTP 服务了。
:::

