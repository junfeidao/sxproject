# git学习笔记
### 工作区、版本库和暂存区的概念
```
工作区：.git目录所在的文件夹就是工作区
版本库：.git文件夹就是git的版本库
暂存区：暂存区和分支都在版本库里面。把修改往版本库里面添加的时候是分为两步的，第一步git add把修改添加到暂存区，第二部git commit把暂存区的修改提交到当前分支
```
---
### git常用命令
- **git init** 初始化git仓库
- **git add** 将修改添加到暂存区
- **git commit -m "提交说明"** 把修改提交到仓库
- **git status** 查看暂存区当前的状态
- **git diff** 查看还未提交的文件做了什么修改（这个命令是对比工作区的文件和当前分支的最新提交有什么不同）
- **git log** 查看提交记录，显示从最近到最远的提交日志，在命令后加 --pretty=oneline可以让显示的历史记录更简洁
- **git reset --hard head^** 回退到上一版本，head表示当前最新的版本，head^表示上一版本，head^^表示上上个一个版本，如果要表示前100个版本可以使用head~100
- **git reset --hard 版本号** 每次提交都会产生一个版本号，可以使用版本号回退到任何一个版本，如果想恢复到未来某个版本却又不知道未来那个版本的版本号，可以使用 **git reflog** 查看每一次命令
- **撤销修改**
```
git checkout -- <file> 可以撤销工作区的修改（实际上是用当前分支的最新修改替换工作区的修改）
git reset head <file> 可以撤销暂存区的修改改
```
- **git rm \<file>** 删除文件
- **git tag** 打标签或者查看标签，可以用-a指定标签名，-m指定标签说明，例如
```
$ git tag -a v0.1 -m "version 0.1 released" 1094adb
```
- **git show <tagname>** 查看标签的详细信息
- **git push origin <tagname>** 把某个标签推送到远程仓库，用 **git push origin --tags** 可以一次性把所有标签推送到远程仓库
- 删除标签
```
1. 删除本地标签：git tag -d <tagname>
2. 删除远程仓库的标签：分两步，第一步先删除本地的标签，第二步git push origin :refs/tags/<tagname>
```
---
### 分支管理
- **git branch dev** 创建dev分支
- **git checkout dev** 切换到dev分支
- **git checkout -b dev** 合并前两步，意思是创建并切换到dev
- **git branch** 列出当前所有分支，前面有符号 * 的表示当前分支
- **git merge** 合并指定分支到当前分支
```
1.这种合并采用的Fast forward模式，删除分支后会丢掉分支信息，可以用--no-ff强制禁用Fast forward模式
2.当git无法合并分支时首先要解决冲突，手动把文件改成需要的内容再进行提交，合并完成
```
- **git branch -d** 删除指定分支
- **git stash** 可以把当前工作现场存储起来，**git stash list** 可以查看存储起来的工作现场
##### 恢复工作现场的两种方法:
```
1. **git stash apply** 恢复后stash内容并没有删除，要使用git stash drop来删除
2. **git stash pop** 恢复的同时也删除了stash里的内容
```
```
git stash使用场景，如果接到一个修复bug的任务，可以先把当前的工作现场存储起来，然后在哪个分支上修复就在哪个分支上创建临时分支，修复完之后切换会临时分支的父分支，然后合并临时分支并删除临时分支，最后恢复工作现场继续工作
```



