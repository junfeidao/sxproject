# 知识点记录

## 第一天

### git相关复习

#### 先回忆一下自己记得的知识点

* git add xxx  将文件提交到暂存区
* git branch -d 分支名  删除分支
* git branch -D 分支名   删除一个未合并过的分支
* git commit -m'提交备注'  提交文件到当前分支   注意-m和''之间没有空格
* git push    推送到远程仓库
* git checkout 分支名    切换分支
* git remote  对远程主机进行操作，具体记不太清楚了
* git rebase  把本地未push的分叉提交历史整理成直线。查看历史提交的变化更容易
* git fetch   之前面试有被问到过git fetch和git pull的区别，git pull可以认为是git merge与git fetch的结合。结合的一些命令更容易理解。
>* git fetch origin master:temp

在本地新建一个temp分支，并将远程origin仓库的master分支代码下载到本地temp分支

>* git pull origin master:dev

取回远程origin仓库的master分支的更新，再与本地的dev分支合并。

>* git fetch

更新所有分支，可以加远程主机名指定主机，也可以再具体指定分支,注意只是取回更新的文件，还要合并后才可以在本地分支上。

>* git pull

当前分支自动与唯一一个追踪分支进行合并

* 最重要就是要理解pull的过程是分两步的。第一步是获取更改内容，这些更改内容可以独立的存在于一个临时分支，然后git fetch可以选择合并

* git status 查看状态
* git diff 查看修改内容
* git log 查看历史记录
* git log --pretty=oneline 查看简化后的历史记录信息
* git log --graph 可以看到分支合并图
* git log --graph --pretty=oneline --abbrev-commit 参数是可以添加的
* git reset --hard HEAD^ 回到上一个版本每一个^表示一个版本，两个^就是回退两个版本 也可以用数字HEAD~1，HEAD~2。HEAD表示当前版本
* git checkout -- 文件名  撤销未add过的（工作区）修改
* git rm 文件名 删除版本库中的文件  删除后可以直接commit
* git stash  把当前工作区的修改隐藏。
* git stash list 查看隐藏的工作现场。
* git stash apply 恢复隐藏的工作但是没有删除stash的内容
* git stash drop 删除stash的内容
* git stash pop 是恢复的同时把stash的内容也删了
* git merge 分支名  把“分支名”合并到当前分支
* git merge --no-ff git默认是采用快速合并，没有合并记录。--no-ff可以设置为普通合并，有记录
* git remove -v 查看远程主机信息
* git tag v1.0  在当前分支创建一个标签，默认绑定在最新的commit上。
* git tag 查看所有标签
* git tag v0.9 commit-id  对指定的commit-id添加标签
* git show v1.0 查看标签信息
* git tag -a v1.0 -m'version 0.1 released' commit-id   创建带有说明的标签，用-a指定标签名，-m指定说明文字
* git tag -d v1.0  删除标签  
* git push origin :refs/tags/v0.9  从远程删除标签。如果标签推送到远程，本地和远程都要删除一遍
* 关于“把当前分支合并到XX分支”，理解了之后这句话听起来怪怪的。其实是先切换到XX分支（当然可以顺手再pull一下别人的代码），然后在XX分支上合并你的分支，比如把dev合并到master分支，其实是先git checkout master,再git merge dev.我觉得说成在master分支上把dev合并更容易理解一些。
* 从远程仓库克隆时，Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。

### git flow复习

#### 当前的了解，从master（发布版本）分支上切出develop（测试）分支，然后每个开发人员从develop分支上切出一个分支，完成一个功能后提交。

>>* 在一个新项目开发需要的git操作
>>* git clone ssh://user@host/path/to/repo.git  克隆仓库
>>* git checkout -b develop origin/develop    建立develope分支的跟踪分支
>>* git checkout -b some-feature develop   基于develope创建分支
>>* git status  完成部分功能后进行提交操作
>>* git add
>>* git commit
>>* 如果团队使用Pull Requests,就发合并请求，如果没有就合并到本地develope然后push到中央仓库
>>* git pull origin develop  先把最新的内容拉下来，如果有冲突，解决
>>* git checkout develop   切换分支
>>* git merge some-feature   合并分支
>>* git push        推送分支
>>* git branch -d some-feature   删除分支
>>* git checkout -b release-0.1 develop  
>>* 基于develop建立发布分支，这个分支是清理发布、执行所有测试、更新文档和其它为下个发布做准备操作的地方，像是一个专门用于改善发布的功能分支
>>* git checkout master
>>* git merge release-0.1    把发布分支合并到master分支
>>* git push                   推送
>>* git checkout develop
>>* git merge release-0.1        把发布分支合并到develope分支
>>* git push                  推送
>>* git branch -d release-0.1   删除发布分支
>>* 发布分支是作为功能开发（develop分支）和对外发布（master分支）间的缓冲。只要有合并到master分支，就应该打好Tag以方便跟踪。
>>* git tag -a 0.1 -m "Initial public release" master
>>* git push --tags
>>* 发布后，用户发现当前版本的一个Bug。为了处理Bug，要从master分支上拉出一个维护分支，提交修改以解决问题，然后直接合并回master分支：
>>* git checkout -b issue-#001 master
>>* git checkout master
>>* git merge issue-#001
>>* git push
>>* 发布分支，维护分支中新加这些重要修改需要包含到develop分支中，所以要执行一个合并操作。然后就可以安全地删除这个分支了
>>* git checkout develop
>>* git merge issue-#001
>>* git push
>>* git branch -d issue-#001

### commitzen学习

* 前天装完了nodejs但是今天在cmd里用node -v查看版本发现node不是命令什么的错误，卸载重装之后，还是不行，于是关闭重新启动cmd好了。
* commitizen init cz-conventional-changelog --save --save-exact这个命令在项目目录下运行（.git文件夹下），该项目就会支持
* 使用git cz命令后会进入插入模式，会用到几个linux命令来操作。i是编辑命令。编辑好之后按esc退出插入模式，然后按冒号":",再“wq”然后回车就可以了。
  
#### Commit message 的格式

>每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

1. `<type>(<scope>): <subject>`
2. // 空一行
3. `<body>`
4. // 空一行
5. `<footer>`

>其中，Header 是必需的，Body 和 Footer 可以省略。
>不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

* type type用于说明Commit的类型，包含一下7种类型
* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

#### scope

scope用于说明本次Commit所影响的范围，比如controller、user或者README，视项目的不同而不同

#### subject

subject是本次Commit目的的简短描述，一般不要超过50个字符

    以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    第一个字母小写
    结尾不加句号（.）

## git-cz的全局安装配置过程记录

之前是局部安装，但是小组内其它成员都是全局安装的，提交的时候会有影响，全局安装的出现了一些"蜜汁"错误.这里记录一下

1. 执行命令 npm install -g commitizen
2. 执行命令 npm install -g conventional-changelog
3. 执行命令 npm install -g conventional-changelog-cli

然后，问题就出现了。看了下小组内其他成员的。有些这个时候已经可以使用了？！但是我的还是很混乱
执行```npm ls -g -depth=0```输出完全正常
执行```echo '{"path":"cz-conventional-changelog"}'>~/.czrc```提示找不到路径或者command not found.
多次尝试后，我在全局安装的路径下执行了这个命令。。。。```commitizen init cz-conventional-changelog --save --save-exact```,这是在一个项目使用git-cz的命令。然后多次尝试还是不行。。。很绝望。这个时候随缘在桌面打开了git bash，再次执行echo '{"path":"cz-conventional-changelog"}'>~/.czrc。然后没有消息了。一切都好了。