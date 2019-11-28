 **开发常用git指令：** 

```
git init  # 初始化本地git环境

git clone xxx  # 克隆一份代码到本地

git config --globa user.name/user.email  # 修改全局的用户名称和邮箱

git checkout -b xxx  # 基于当前分支创建xxx分支并切换到xxx分支

git checkout xxx  # 切换到xxx分支

git checkout -d xxx  # 删除本地xxx分支

git push origin --delete xxx  # 删除远端xxx分支

git push origin xxx:xxx  # 将本地xxx分支推送到远端

git branch -a/-r  # 查看全部分支/查看远端分支

git branch -d  # 删除本地分支

git remote prune origin #删除远端不存在的分支

git pull origin xxx   # 将远端xxx分支拉取到当前分支（将git fetch 和 git merge 合并为一步）

git fetch origin xxx  # 将远端分支更新到当前分支（单独进行下载和合并是一个好的做法，你可以先看看下载的是什么，然后再决定是否和本地代码合并。git diff xxx xxx，  git merge xxx）

git add xxx  # 将本地文件xxx添加到stage中

git commit -m "xxx"  # 将stage中文件提交到本地仓库，备注为xxx

git commit --amend  # 将stage中的文件追加到上一次提交中

git merge xxx  # 将xxx分支合并到当前分支，可能会出现冲突，修改冲突后 git commit

git push origin xxx   # 将分支推送到远端xxx分支

git stash  # 把未完成的修改缓存到栈容器中

git stash list  # 查看所有的缓存

git stash pop  # 恢复最近一次缓存到当前分支

git stash drop file  # 删除缓存的stash

git stash clear  # 清空栈内所有缓存

git status  # 查看当前分支有哪些修改

git log  # 查看当前分支上面的日志信息

git diff  # 查看当前没有add的内容

git diff --cache  # 查看已经add但没有commit的内容

git diff xxx xxx  # 对比两条分支之间不同的代码（可在向远端提交代码之前或合并分支之前看自己做了哪些更改）

git show xxx  # 查看某次提交的具体内容

git resert --hard HEAD  # 撤销本地修改
```

