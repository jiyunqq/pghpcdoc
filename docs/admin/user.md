---
sidebar_position: 2
---

# 用户管理

### 普通用户改密码

```:no-line-numbers
yppasswd
```

### 管理员操作

1. 添加用户

   ```
   [root@mgt ~]# ypadduser
   Usage: ypadduser first-arg is: user's Name.
                second-arg is: user's Password. default is: pgnis123
   ```

   - 例子一: 添加 `test1` 用户, 用户家目录 `/share/home/test1`,
     默认密码: `pgnis123` :

     ```:no-line-numbers
     ypadduser test1
     ```

   - 例子二: 添加 `test2` 用户, 用户家目录 `/share/home/test2`,
     默认密码: `123456` :

     ```:no-line-numbers
     ypadduser test2 123456
     ```
2. 删除用户

   用户被删除, 用户家目录由 `/share/home/test1` 变为
   `/share/home/test1+时间` :

   ```:no-line-numbers
   [root@mgt01 ~]# ypdeluser test1
   ```
   确定用户家目录没有数据后, 可以手动删除用户家目录.

3. 其它方式添加用户

   1. 采用系统自带的命令添加用户:

      ```:no-line-numbers
      useradd test3 -d /share/home/test3
      ```

   2. 节点间无密码访问 :

      ```:no-line-numbers
      ypsync test3
      ```
4. 改普通用户密码 ( 例: 改 test1 用户密码 ) :

   ```:no-line-numbers
   yppasswd test1
   ```

   :::tip 注意事项
   - 用系统命令加用户时, 一定要指定用户的家目录到 `/share/home/username`,
   - 这是集群的共享家目录. 我们创建的用户也属于集群用户,
   - 即属于每一个节点. 所以必须是共享的.
   :::

5. 多个用户属于同一个组的创建方法 ( 例 test2 用户属于 test 组 ) :

   linux系统命令加用户:

   ```:no-line-numbers
   groupadd -g 1500 test
   adduser -g 1500 -d /public/home/test2 test2
   ```

   改密码:

   ```:no-line-numbers
   passwd test2
   ```
   节点间无密码访问:

   ```:no-line-numbers
   ypsync test2
   ```

6. nis 节点间同步的命令 :

   ```:no-line-numbers
   cd /var/yp
   make
   ```
