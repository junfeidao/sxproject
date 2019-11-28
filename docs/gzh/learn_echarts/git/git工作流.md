```
1. 在本地的一个路径下，创建一个文件夹（mkdir xx）

2：初始化这个文件夹，让他变成一个仓库（git init）

3：在这里面仓库下可以随便操作。比如传一些代码，加一些东西啥的

4：git add xxx（xxx代表你要提交的到暂存区的东西）

5：添加后，可以查看一些仓库的状态，git status

            1：有改动状态：no changes added to commit (use "git add" and/or "git commit -a")

            2：无改动状态：修改了后add的状态。绿色的

            3：什么都东西都没有：nothing to commit, working tree clean



6：add 提交到暂存区的文件如果不要了，想恢复上一次更改的状态

           1：git reset head  xxx   （xxx代表你要撤回的东西，代码文件等等）

           2：git checkout -- test_wendang  清除一下暂存区

7：git commit的代码怎么撤回呢？

           1：git log 查看一下提交日志，把里面的commit值取出来

           2：git reset --hard commitid

8：怎么把本地仓库清干净？

          1：git rm xxx

          2：git commit am“dd”

          3：git status看下就没有了
```