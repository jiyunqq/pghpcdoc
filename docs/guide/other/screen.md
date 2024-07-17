---
title: screen 解决连接中断问题
sidebar_position: 3
---

### Screen

Screen是一款由GNU开发的用于命令行终端切换的自由软件。
用户在连接Shell后，经常会遇到长时间未交互而导致Shell中断，
进而导致Shell中运行中的命令中断的情况，可以使用Screen解决该问题。

### Screen基本使用

```shell:no-line-numbers
# 新建一个会话
screen -S session_name

# 退出但不关闭当前会话
crtl+a+d

# 退出并关闭当前会话
exit
## 或者
ctrl+d

# 列出所有的会话
screen -ls
## 会话的状态有'Detached','Attached', 前者为后台挂起状态，后者为连接状态

# 远程挂起会话，会话状态为'Attached'时表示有窗口正在连接该会话，远程挂起指定会话后，连接该会话的窗口将被退出
screen -d session_name

# 连接指定的会话
screen -r session_name
## 如果需要连接的会话状态为'Attached'
## 则会返回There is no screen to be resumed matching xxx
## 这时候需要先远程挂起该会话后再连接
screen -d -r session_name

```
