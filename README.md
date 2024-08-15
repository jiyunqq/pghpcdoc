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

#### 仓库常用操作

```bash
git status
git add .
git commit -m "pghpc 文档"
git push
```

### 导出 pdf

```bash
export PATH=/cygdrive/e/tmp/2024/tmp/prince-15.3-win64/bin:$PATH
pnpx docusaurus-prince-pdf -u http://localhost:3000/doc

pnpm config set registry https://registry.npm.taobao.org/
pnpm config get registry
pnpm config set registry https://registry.npmjs.org/
NODE_OPTIONS=--no-warnings npx docusaurus-prince-pdf -u http://localhost:3000/doc/docs
NODE_OPTIONS=--no-warnings npx docusaurus-prince-pdf -u http://localhost:3000/doc/docs --include-index pdf/localhost-doc-docs.txt
```

### 配置到 github pages

```bash
cd build
git init
git add .
git commit -m "添加 pghpcdoc 到 GitHub Pages 页面"
git remote add origin git@github.com:jiyunqq/pghpcdoc.git
git push -f origin master
```