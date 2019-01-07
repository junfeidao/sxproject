# 2018/12/19 在城云开始学习vue

## 回顾一下之前零散的学习

* >>vue比jquery好，很核心的一个原因是修改网页消耗的性能比较小，因为有一个虚拟dom和内部的diff算法。v-on，v-if，v-show,v-bind这几个指令，具体干啥的记不清了。
* >>v-if和v-show都可以让一个元素消失，不过v-if是直接删除掉元素，v-show是添加display：none。
* >>单项绑定是修改moudle网页自动变化，双向绑定是修改网页moudle也会变化
  
## 属性含义

* el 选择元素  这个选择器只可以选择一个元素，css选择器可以用多种，如果选择多个元素。只会绑定第一个元素。
  
## 前端工具的使用

>> 练习的时候发现一直刷新太烦了，想起来之前被安利过的插件Browsersync，就又配置了一下。  有个问题是html文件名要改成index才会有效果。不然就一直cannot get。

* [Browsersync使用和安装教程](https://www.cnblogs.com/yesyes/p/6156102.html)
* [webpack的使用和安装教程](https://www.jianshu.com/p/42e11515c10f)
  
## vue语法

### 生命周期钩子

* created   组件创建
* mounted   组件挂载到实例
* updated   组件更新
* destoryed 组件销毁

### 2018/12/24对于vue一点新的的认识

> 前两天看了一些vue语法，本来想在这里记录一些命令的，就像上面的生命周期钩子，然后发现好像不太行，vue和git是不一样的学习方法。不像git很多命令的意思都很清楚明白，容易理解。只是单纯的看和记录，没那么容易明白。vue需要更多的写案例。然后一句一句分析。才能比较好的理解语法。

## 在vue中使用echarts

>之前在项目中有使用过简单的echarts，但是在vue中使用又是不一样的场景。
百度一下在vue中使用echarts基本都用到了vue-cli。[在vue中使用echarts](https://blog.csdn.net/mr_wuch/article/details/70225364)
到了vue-cli官网看了一会发现又是基于webpack的，所以还是再了解一下webpack。
简单按照官网的教程简单打包了一次。好多博客都是webpack123的版本，所以就官网上简单的看一下，以后再了解。

### 2018/12/25完成了第一个在vue中使用echarts

>装好了vue-cli，然后默认配置，然后对照着昨天的博客，代码粘贴进来，就好了。从这个单例来看。文件已经达到了144MB.如果做大点项目的话，应该比较好用了。写单页有点杀鸡用牛刀了。这里总结一下vue-cli里的配置项。毕竟还是想知道这个脚手架具体都干了啥。

* vue-cli 在创建文件时会自动下载webpack，所以不用再担心webpack的配置问题
* Babel  是一个转译工具，负责把es6转译成es5
* TypeScript 提供TypeScript支持
* Progressive Web App  是一系列现代Web技术的组合 [PWA入门](https://blog.csdn.net/lecepin/article/details/64906620)
* Router 官方路由管理器，但功能不止是管理路由。导航条滚动条等。可以在官网详细学习。
* Vuex  Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式  可在官网学习
* CSS Pre-processors 可以选择css预处理器
* Linter / Formatter  
  >Linter   检查代码错误的小工具  
  >Formatter   用来格式化文本，主要用在文本输出方面，比如，数字、日期、金额等。
* Unit Testing  支持单元测试
* E2E Testing支持 e2e 测试  
  >e2e 测试是一种测试方法，它用来测试一个应用从头到尾的流程是否和设计时候所想的一样。简而言之，它从一个用户的角度出发，认为整个系统都是一个黑箱，只有UI会暴露给用户。

#### 服务器的问题

在vue-cli的官网上有讲vue-cli的组件，它有三个独立的部分

* CLI
  >详情可在vue-cli查看
* CLI 服务
  >CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。  

CLI 服务是构建于 webpack 和 webpack-dev-server 之上的。它包含了：

* 加载其它 CLI 插件的核心服务；
* 一个针对绝大部分应用优化过的内部的 webpack 配置；
* 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令。
  
* cli插件
 >CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头，非常容易使用。  
 > 当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件。  
 >插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的 preset。

### vue-cli中的git

git add的时候发现报错了，发现vue-cli创建的文件夹下也有.git了，我测试的时候是在单独的文件夹里写的，然后粘贴到了自己的git仓库。发现自己的文件有点乱了，整理一下好了。
vue-cli的配置是用来做项目的，所以可以单独的连接一个git仓库
vue-cli把项目初始化为一个git仓库，但是没有连接远程仓库。
用git remote add origin git@github.com:weixingqi/vue-cliFirst.git
添加了自己新建的仓库。然后上传  

[一篇对vue-cli新建项目结构的分析](https://blog.csdn.net/calmreason/article/details/82995522)

## 把echarts中的数据放到表格中显示

没什么思路，去强少峰的github上扒下来看了先。先按照强少峰的思路走一遍。

### element-ui

这个组件库对三大框架有很好的支持。
