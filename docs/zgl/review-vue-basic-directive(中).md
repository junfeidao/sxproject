### 扩展了 v-bind和v-on ，新增v-model
+ v-on的修饰符（比较常用的几个）
1.  .stop 表示阻止冒泡
1.  .capture 表示侦听捕获事件
1.  .prevent 表示取消默认行为
1.  .once 表示仅执行一次
1.  .self 表示只执行自己
```javascript 
 <div id="app"><a href="wwww.baidu.com">百度</a><div id="outer" @click="outerClick">
<div id="inner" @click="innerClick" ><button @click="buutonClick">我是一个小小的按钮</button></div>
<!-- 1.当我点击button按钮时，按照事件的冒泡，依次会触发 inner和outer的点击事件-->

<!--2.当我给button按钮添加.stop时，会发现没有触发inner和outer 的事件，可以肆意取消他人默认行为-->

<!--3.当我给inner添加.capture时，意外的发现竟然没有触发outer事件，而是触发了button事件-->

<!--4.当我给button添加 .once时发现只执行了一次事件，后来无论五如何点击都没有用-->

<!--5.当我给inner添加.self时,点击button时发现inner没有触发，当outer的事件触发了，说明self只能取消自己的默认行为，而不能更改他人的默认行为-->

<!--6.当我给a标签添加.prevent时发现a标签没有发生跳转-->

<!-- 7.事件的修饰符可以串联使用-->
</div></div>
<script>
const vm=new Vue({
  el:"#app"，
   data:{
   outer:"我是外部的div"，
   inner："我是内部的div"
   text："我是button"
},
methods:{
  outerClick(){
console.log(this.outer);
},
innerClick(){
console.log(this.inner);
},
buttonClick(){
console.log(this.text);
}
}
})
</script>
```
+ v-bind(用来绑定class和css内联样式的四种方法)
```javascript
<div id="app">
<h1>哈哈哈，我来绑定样式了</h1>
</div>
<script>
const vm=new Vue({
  el:"#app"
</script>
  .color{
   color:red 
}
.font{
font-size:0.5em
}
```
1.采用数组的形式绑定class
<h1 class="['color','font']"></h1>
2.采用数组加三元表达式
<h1 class="['color','font'?true:false]"></h1>
一般不使用三元表达式可以修改为对象形式
<h1 class="['color',{'font':true}]"></h1>
3.采用对象形式
<h1 class="{color:true',font:true}"></h1>
4.采用对象形式进行修改内联样式
<h1 class="{color:bule,font-size:0.6em}"></h1>