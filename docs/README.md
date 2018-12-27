## 学习笔记

每人创建自己的目录
###GitFlow 总结归纳
一些相关概念
develop 分支：develop 是我们进行开发时所用的分支，一般来说 develop 分支主要用于开发。
2．Feature 分支：主要进行新功能的开发，是从 develop 分支上拉出来的一个分支，主要用于产品功能的创建和修改，当新功能完成后会合并 develop 上
3.release 分支：主要用于产品的测试和 bug 一些文档的处理，是从 develop 分支上拉出来的一个分支，当测试或者修改 bug 完成后合并到 master 分支和 develop 分支上
4.hotfix 分支：故名思议热更新，当发现新 bug 时会进入 release 分支。 5.要理解 git 常用一些命令 比如 什么是暂存区等一些相关概念及一些常见的命令操作
如 git add 和 git commit git diff git head git log git relog 等
演示操作流程

### 下面为演示流程，以远程库 github 为例 1.创建一个 develop 分支

1).首先先创建一个本地仓库 git init
2).在 maste 分支上创建一个名为 develop 的分支 git checkout –b develop(创建一个名为 develop 的分支，并定位到该分支
3).建立与远程仓库 github 的联系 git remate add origin url(意味远程仓库的所在地址)
4).本地仓库与远程仓库进行通信 git push -u origin develop 2.当需要进行 feture 新功能开发时
1).创建一个名为 feature 的分支，为了方便记忆区分，一般通常命名为 feature+其他一些名字 git checkout -b feature/ zgl
2).与远程仓库建立连接，push 到远程仓库 git push –u origin feature/zgl
当功能开发完成后
3). git add zglTest.txt git commit –m”zgl”
4).与远程库做一下比较是否有冲突 git pull origin feature/zgl
5).当确定没有冲突以后，切换到 develop 分支 git checkout develop
6).合并 feature 分支 git merge --no-ff feature
7).push 到远程仓库 git push –u orgin develop
8).删除 feature 分支和远程的 feature 分支 git branch –D feature/zgl 和 git branch –delete feature/zgl 3.当需要创建一个 release 分支时
1).创建一个 release 分支(通常 release 分支需要用版本号命名) git checkout –b release-1.0.1 develop
2).创建一个远程的 release git push –u release-1.0.1
比如当测试完后后
3).首先切换到 master 分支和 master 进行合并 git checkout master 和 git merge –no-ff release-1.0.1
4).push 到远程的 master git push
5).切换到 develop 分支进行和 develop 进行合并 git checkout develop 和 git merge –no-ff release-1.0.1
6).删除合并完的 release 分支和远程仓库的 release 分支
7).打印一下版本号 git tag –a v1.0.1 master 和 git –tags
3.hotfix 分支的使用与 release 分支的使用非常相似，只不过 hotfix 是从 master 分支上拉出来的，完成 hotfix 后会进入 release 分支，步骤与 release 分支步骤基本无差

### git commitizen ##为什么使用 git commitizen？

## git commitizen 有什么好处？

##git commitizen 怎么用？ ###git commitizen 配置及安装 - 安装 nodejs - 安装 git commitizen（以 windows 系统为例） npm install -g commitizen

- 安装 cz-conventional-changelog
  npm install cz-conventional-changelog
- 配置 cz-conventional-changelog（windows 系统这里必须要在 git 命令下执行）
- \$echo：'{"path":"cz-conventional-changelog"}'>~/.czrc

### git commitizen 主要包括了 commit message 和 changelog

- commit message 的作用 1.提供更多的历史信息，方便快速浏览 2.可以过滤某些 commit（比如文档改动），便于快速查找信息 3.可以直接从 commit 生成 Change log
- commit message 的格式（必须包括 header，body，footer，header 是必须的不可以省略）
  <type>(<scope>): <subject>// 空一行<body>// 空一行<footer>
  其中 type 是必须的，scope 是可选的。subject 是必须的
  1.type 用于说明 commit 的类别，只允许使用下面 7 个标识。
- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
  - style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
  - test：增加测试
- chore：构建过程或辅助工具的变动
  2.scope：用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同
  3.subject：对本次目的剪短描述，主要采用动词 ，一般为一般时态

- body:Provide a longer description of the change,一般为项目的具体描述
- footer： Are there any breaking changes? 是否作出重大改变，默认为 N

  Does this change affect any open issues? 一般需要一个 issuse 所对应的编号
  ###changlog 的配置及安装

- 安装 changelog npm install -b conventional-changelog
- 配置 changelog （这里我弄了好久，一直显示 conventional-changelog 不是内部命令）
  解决方法：我用 npm ls -g -depth=0 明明打印出了 conventional-changelog，但是就是配置不成功，最后在最后在 Git 提交记录和分支模型中发现 Commitizen 是依据 conventional message，创建起一个生态：
  conventional-changelog-cli：通过提交记录生成 CHANGELOG.md
  conventional-github-releaser：通过提交记录生成 github release 中的变更描述
  conventional-recommended-bump：根据提交记录判断需要升级 Semantic Versioning 哪一位版本号，所以 windows 系统并不能采用 conventional-changelog -p angular -i CHANGELOG.md -s -r 0，而是需要使用 conventional-changelog 脚手架工具 npm install -g conventional-changelog-cli 进行安装

### vue 学习

vue
vue-basic
vue-lifecycle
created
在 vue 实例加载之后，但未挂载到 dom 元素上，此时$el不可见
			mounted
				在vue实例挂载到dom元素上以后，此时$el 可以查询到该属性
beforeDestroy
在 vue 实例销毁之前，对一些事件监听进行解绑
vue-self-prototype
data
代理了一些比较简单的数据，如 object，array，string，number
comptued
计算属性，代理了 vue 的一些相关属性，通常里面用 function
filter
过滤器，通常用来过滤比较的简单数据，如文本等
methods
代理了 vue 的 function，与 comptued 相似，唯一不同的是 methods 不能加载缓存
vue-instruct
v-bind
v-bind 主要用于 html 标签的绑定，比如 a 的 href 属性，img 的 src 属性，class 属性等
v-cloak
v-cloak 主要用于 html 元素的移除，通常与 css 的 display 为 none 进行配合使用，但在 webpack 工程化开发中基本废除
v-once
v-once 主要用来提升性能，vue 只会渲染一次，尽管以后数据发生改变 vue 叶不会渲染数据
v-if v-else-if v-else
主要用于判断 html 元素是否显示，显示哪个 html 元素
v-show
主要用于 html 元素是否显示，但不同的 v-show 只是对 diaplay 属性进行改变，一般 vue 只能渲染一次，消耗的开销比较小
v-for
用于循环,经常与列表，表格使用
v-for in 适合用于循环对象，v-for of 适合于非对象
v-modle
主要用于表单与文本框，单选框，多选框，下拉框的使用，有时候和 v-bind 配合动态更新数据
vue-array
push，unshift
push 是在数组的尾部插入一个元素，unshift 是在数组的头部插入一个元素，返回的都是新数组的长度
pop，shift
pop 是删除数组的尾部元素，shift 是删除头部的元素，返回的都是删除的该元素
slice
功能比 pop，shift 更加强大，删除的是第 start 元素起，到后面的第 end 个元素，比如 slice（1,2）表示的是从 index 为 1 的元素起，到删除后面的 index 元素，并不包括元素本身，返回的是一个新数组（删除的数组）
splice
功能比 slice 更加强大，当参数传入为 2 个时，删除的是从第 start 起，后面的 2 个元素，包括元素本身，当传入的参数为 3 个时，前面都一样，第三个参数为在第 start 插入一个新的元素，返回值为一个删除的心数组
sort
排序，通常配合函数使用，比如 sort（a,b)如果 a>b,就是升序排列，返回的是一个大于 0 的数，如果 a<b 就是降序排列，返回的是一个小于 0 的数，如果 a==b 返回的是 0
filter
过滤，通常与函数配合使用或者正则表达式使用，返回的是已经过滤好的元素
map
遍历数组的每一项，然后创建新的数组
vue-component
组件的创建与使用
全局注册组件
Vue.component（“name”，{组件内容}
局部注册组件
conts component={}
组件的通信
props
首先将要传递的属性绑定到付组件上，然后通过 props 读取父组件的属性，再把数据传输到子组件，props 可以传一个数组也可以是一个对象
$emit
					s首先子组件通过$emit 来控制自己的变化，然后父组件通过子组件的自定义事件然后父组件去调用回调函数
中央事件 bus
首先将要委派的事件通过$on，派发给bus，然后通过$emit 接受从 bus 里派发出来的事件
dispatch
事件的委派，下级向上级委派任务，目前不怎么使用
bordercast
事件广播，上级想下级广播任务
$parent
					用来访问父组件
				$refs
给子组件指定一个 refs，有点类似 id 来访问子组件
slot
slot 插槽，主要是将父组件的内容插到子组件里面
template 模板，会将模板以类的东西插到父组件里面
name
slot-scope（scope）
用来挂载在 template，然后来读取子组件的内容
带有 name 属性的 slot 与匿名 slot 可以共存，给父组件指定一个 slot 属性，给 slot 指定一个 name 属性
component-advance
给组件指定一个 name，递归调用组件，必须要指定步长和出口，否则会死循环
is 用来挂载不同的组件，通过\$mount 来进行挂载
组件里面叶可以有 el 属性，是用来将把其他组件渲染到当前组件上
vue-directive
自定义指令的注册和使用与组件的注册使用基本无差别
自定义指令里面可以传 4 个参数。第一个为 el，第二个为 binding，第三个为 vNode，第四个为 oldvNode，el 为 dom 元素，binding 为对象，里面有 name，value，exprssion，modeify
vue-advance
render
render 函数与 template 的区别，render 函数通过虚拟 dom 产生
vNode
vue 为了减少对 dom 操作，采用了 vNode，这样可以减少性能的损耗
createElement
第一个参数可以为 string|object|function，必须填，第二个为可选参数，表示数据对象，第三个参数为子节点，可选参数
render 改写 v-for
使用了 render 函数。vue 自带的一些指令是无法使用的
render 简单改写 v-model
v-model 是 props：value 和@input 的语法糖
webpack
