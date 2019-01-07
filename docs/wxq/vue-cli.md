# 这是一篇对vue-cli结构的分析

vue-cli的初始项目的目录如下图<br>
<image src="image/cliList.png"></image>

>每一个.vue文件就是一个组件，使用方法就像在页面中插入button元素那样，组件有自己的标签名。看到的页面最终是index.html,这个页面本身的内容比较少，不过无关紧要，如果打开浏览器检查元素，你会发现所有的内容都在index里的id=“app”的div里面。就像可以用JS插入标签一样，组件也可以插入。在浏览器中你能看到页面引入了app.js。