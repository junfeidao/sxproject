## gitflow主要是一种工作流：使用Git时的一种工作方式，包含分支的建立与合并
* 开分支
`git branch` 新分支名字
* 切换到新分支
`git checkout` 新分支名字
* 创建新分支并切换到新分支
`git checkout -b` 新分支名字
* 切换回原分支
`git checkout` 原分支名字
* 合并分支
`git merge` 需要合并的分支名
* 查看本地分支列表
`git branch -a`
* 查看远程分支列表
`git branch -r`
* 想远程提交新开的分支
`git push origin` 新分支名字
* 删除远程分支
`git push origin` :远程分支名
* 删除本地分支
`git branch` 分支名 -d
* 强行删除本地分支
`git branch` 分支名 -D
* 更新分支列表信息
`git fetch -p`
* TortoiseGit(乌龟git)
## Gitflow分支命名
### master
    master分支始终是最稳定的代码分支，我们每一次开发完后发布到市场的代码分支，一个项目的master分支只能有一个（只能从其他分支合并进来，严格禁止在master分支修改代码）
### develop
    develop分支是我们的主要开发分支，我们每一次的需求迭代开发都是从这个develop分支上拉一个新的feature分支来进行开发，develop分支是从master分支上拉去的（develop分支一个项目中只能有一个，也不允许直接进行代码的修改）
### feature
    feature分支就是我们每一次需求迭代开发的分支，每一个需求迭代，我们可以在develop分支上拉去多个feature分支，也可以在杯热的feature分支上拉去另一个feature分支，等feature分支开发完成后，我们需要将feature分支合到develop分支上
### release
    release分支是类似于预生产的分支，当我们的一个迭代的需求开发完成后，开发分支feature已经合并了develop分支后，我们需要拉取一个release分支，也可以理解为当我们开始提测的时候，我们来拉取release分支，在这个分支上进行修改
    注：当开发完成后，需要将release分支合回develop分支和master分支；当release分支合并到master分支上后，记得在master分支上打一个tag
### hotfix
    hotfix分支是当线上应用出现了重大的BUG，需要发布一个紧急修复版本，这时需要在master分支上拉取一个hotfix分支
    注：当开发完成后，需要将release分支合回develop分支和master分支；当release分支合并到master分支上后，记得在master分支上打一个tag
## 分支命名规范
* master：master分支就叫master分支
* develop：develop分支就叫develop分支
* feature：feature_wechat_v2.0.1（v2.0.1 表示当前迭代的版本号，wechat 表示当前迭代的名称）
* release：release 分支的名称我们直接命名为这次需求的版本号，比如：2.0.1
* hotfix: hotfix 分支的命名我们暂时可以按 hotfix_v2.0.2 这种来进行命名，v2.0.2 表示这次修复的版本的版本号