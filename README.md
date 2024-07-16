# 说明

- 帮助 [Docusaurus](https://docusaurus.io/zh-CN/docs)
- 项目 [pghpcdoc](https://gitee.com/jiyunqq/pghpcdoc.git)

### 依赖

- node.js >= 18.0
- pnpm

### 启动

```bash
pnpm start       # 开发
pnpm build       # 生成
pnpm serve       # 启动 build 后的文档项目
```

### 仓库配置

```bash
git init
git config --global user.name
git config --global user.email
git remote add origin https://gitee.com/jiyunqq/pghpcdoc.git
git remote
git branch -a
git add .
git commit -m "Initial commit"   # 提交后就创建了 master 本地分支
git branch -a -vv
git branch --set-upstream-to=origin/master master  # 设置本地分支关联到远程分支
git branch                # 查看当前所在分支, 当前分支会在前面带有 * 标志
git checkout master       # 切换到 master 分支
git push origin master    # 将本地的 master 分支推送到远程仓库 origin
git push -u origin master # 使用 -u 选项设置上游分支, 下回可以直接使用 git push 推送
git push --force origin master    # 强制推送覆盖远程分支
git status                        # 检查推送是否成功
```

### Deployment

