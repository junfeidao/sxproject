# 这是一篇对vue-cli结构的分析

vue-cli的初始项目的目录如下图<br>
<image src="image/cliList.png"></image>

>每一个.vue文件就是一个组件，使用方法就像在页面中插入button元素那样，组件有自己的标签名。看到的页面最终是index.html,这个页面本身的内容比较少，不过无关紧要，如果打开浏览器检查元素，你会发现所有的内容都在index里的id=“app”的div里面。就像可以用JS插入标签一样，组件也可以插入。在浏览器中你能看到页面引入了app.js。

+ main.js是入口文件，可以逐层理清楚文件执行顺序。在这个文件里注册了App.vue组件（```render: h => h(App)```），并挂载到#app（index.html里的div）。在App.vue有两个路由路由到了Home.vue和About.vue.路由在router.js设置。这里有默认显示组件和导航到的组件设置。既然App.vue默认显示Home.vue就可以继续看Home.vue,可以看到引入了HelloWorld.vue,并且HelloWord有一个属性“msg”。在HelloWorld.vue中，props里可以看到msg。在上方也有{{ msg }}。

> 2019/1/7 项目虽小但是却也是使用了vue全家桶。不过好像页面内容没怎么涉及vuex.有些地方并没有理解透彻比如```render: h => h(App)```.不过简单的分析一下还是能让代码写起来更得心应手。