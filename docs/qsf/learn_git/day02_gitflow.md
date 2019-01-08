# git-flow学习笔记
>git-flow模式会预设两个主分支在仓库中，所有的开发工作都围绕着这两个分支进行，这两个分支也被称为长期分支，它们会存活在整个项目的生命周期中。
### git-flow工作流程
![gitflow工作流程](https://img-blog.csdnimg.cn/20181211092922356.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTQwNjMy,size_16,color_FFFFFF,t_70)
### 历史分支
- **master** 这个分支是用来发布最终产品的，我们不能在master上工作，也不能直接提交修改到master分支上
- **develop** 这个分支是进行新功能开发的基础分支，也汇集了所有已经完成的功能
### 功能分支
>功能分支是使用develop分支作为父分支，每个新功能位于一个自己的分支，当功能开发完成后合并到develop分支,所以新功能的提交从来不会与master交互，所有已经完成的功能都汇集在develop分支上
### 发布分支
>当develop分支上的功能需要发布时，就从develop分支上fork一个发布分支，此时，新功能不可再加到develop分支上，这个分支只能用来bug修复，文档生成和其他面向发布的工作。一旦对外发布的工作都完成了，发布分支就会合并到master分支并分配一个版本号打好Tag。而且从新建发布分支以来的做的所有修改都要合并回develop分支。
### 维护分支或热修复（hotfix）
>这是唯一可以直接从master分支fork出来的分支,这个分支主要用来做bug修复，一旦修复完成，马上合并到master和develop，并且要用新的版本号给master分支打好tag
### 常用分支
- **master 分支** 不能直接修改，只能有其他分支合并到master，它始终保持最新的代码。
- **develop 分支** 主开发分支，包含着所有要发布下一个release的代码,主要与feature特性分支合并。
- **feature 分支** 特性分支，主要是开发一个功能，开发完成后，合并到develop分支。
- **release 分支** 可以在Release分⽀上测试，修改Bug等，发布Release分⽀后分别归并release分支代码到master(合并后需要打一个release版本号)，develop，staging。
- **hotfix 分支** 修复紧急bug，开发完后需要合并回Master和Develop分⽀，同时在Master上打⼀个tag
