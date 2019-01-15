###  vue 比较常见的6种指令
+ v-cloak(主要用来解决vue加载时由于网速过慢，会导致屏幕闪动)
一般都与css中的display：none一起使用
```javascript
<div id="app"><p v-cloak></p></div>
const mv=new Vue({
el:"#app",//表示Vue实例所控制的区域
data:{
message2:"哈哈哈，我来复习vue了".
}
})
```
```css
[v-cloak]{

display:none}
```
+ {{}}(插值，模板字符串，和ejs，art-template里面的前端模板类似)
```javascript
<div id="app"><p>{{message1}}</p></div>
const mv=new Vue({
el:"#app",//表示Vue实例所控制的区域
data:{
message1:"哈哈哈，我来复习vue了"
}
})
```
+ v-text(用来绑定文本元素的)
```javascript
<div id="app"><p v-text="message2"></p></div>
const mv=new Vue({
el:"#app",//表示Vue实例所控制的区域
data:{
message2:"哈哈哈，我来复习vue了"
}
})
```
+ 两者都是用来绑定文笨，{{}}更适合绑定需要在后面拼接字符串,v-text则更适合于加载速度比较快的，而且后面不能拼接字符串
+ 区别说明
```javascript
//使用{{}}
<div id="app"><p>{{message1+'11111111111111'}}</p></div>
//显示的值为哈哈哈，我来复习vue了1111111111111111111111111
const mv=new Vue({
el:"#app",
data:{
message1:"哈哈哈，我来复习vue了"
}
})
```
```javascript
//使用v-text
<div id="app"><p v-text="message2+'1111'"></p></div>
//显示的值为哈哈哈，我来复习vue了
const mv=new Vue({
el:"#app",
data:{
message1:"哈哈哈，我来复习vue了"
}
})
```
+ v-html(主要用来渲染html元素的)
```javascript
<div id="app"><p v-html="message3"></p></div>
//若不使用v-html得到的将是"<h1>哈哈哈，我来复习vue了</h1>"
const mv=new Vue({
el:"#app",
data:{
message3:"<h1>哈哈哈，我来复习vue了</h1>"
}
})
```
+ v-on(用于绑定事件可以是event事件也可以是自定义事件)
```javascript
<div id="app"><button v-on:click="fuxi"></button></div>
//这里绑定的必须为方法（函数）
const mv=new Vue({
el:"#app",
data:{
},
methods:{
fuxi(){
alert("我又来了")
}
}
})
```
+ v-bind(用于绑定元素的属性可以是元素本身的属性可以是自定义的属性)
```javascript
<div id="app"><button v-bind:title="mytitle"></button></div>
//这里绑定的可以是方法也可以是属性，也可以是简短的js语法
const mv=new Vue({
el:"#app",
data:{
mytitle:'我在复习vue'
}

}
})