# vue学习笔记day01
### 指令
---
- **v-if** 条件渲染指令
```html
<div v-if="watch">出现</div>
<--可以根据表达式watch的值的真假来 插入/移出 <div>元素-->
```
- **v-else** 可以使用 v-else 指令来表示 v-if 的 else 块
- **v-else-if** 充当 v-if 的 else-if 块
>注意：v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。
- **v-show** 和 v-if 的作用类似，也是根据条件展示元素，用法如下
```html
<h1 v-show="ok">Hello!</h1>
<--根据表达式ok的值来显示或隐藏<h1>元素-->
```
>v-if 和 v-show 的异同
>相同点：都有判断功能，可以根据表达式的值来显示或隐藏元素
>不同点：v-show 只是简单地切换元素的 CSS 属性 display，所以当隐藏元素时元素还是被渲染的，是存在于 DOM 文档中的。而 v-if 隐藏元素时是没有渲染元素，所以元素是不存在于 DOM 中的。
>注意，v-show 不支持 \<template> 元素，也不支持 v-else
- v-bind 这个指令能够接收一个“参数”，在指令名称之后以冒号表示，指令可以用于响应式地更新 HTML 特性，html 属性中的值应该用v-bind。
```html
<a v-bind:href="url">...</a>
<--下面的是它的缩写-->
<a :href="url"></a>
```
>给元素绑定href时也可以绑一个target，新窗口打开页面。
```javascript
new Vue({
  el: '#app',
  data: {
    url: 'http://www.baidu.com',
    target:'_blank'
  }
})
```
- **v-html** 用于输出html代码
- **v-on** 用于监听 DOM 事件，用法如下
```html
<a v-on:click="doSomething">
<--监听鼠标点击事件，参数是监听的事件名-->
<--下面是它的缩写-->
<a @click="doSomething"></a>
```
- **v-model** 可以用来在 input 输入框中实现双向数据绑定，v-model 指令用来在 input、select、text、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值，而且逻辑运算的值也会根据绑定元素值的改变而改变。
例如：
```javascript
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
    
<script>
    new Vue({
    el: '#app',
    data: {
        message: 'Runoob!'
    }
})
</script>
```
>运行代码，在输入框中输入的数据会同步到p标签里
- **v-for** 循环指令
```javascript
<body>
<div id="app">
	<p v-for="site in sites">{{ site.name }}</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: '太乙真人' },
      { name: '元始天尊' },
      { name: '太上老君' }
    ]
  }
})
</script>
//这段代码用循环指令打印出了数组中的name值，页面结果
/*
太乙真人
元始天尊
太上老君
*/
```
### 计算属性
- **计算属性的关键字 computed**
>计算属性用来处理一些逻辑问题很有用，例如给字符串中每个字符中间加符号 -
```javascript
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>加了字符 - 的字符串: {{ addMessage }}</p>
</div>
 
<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'goodluck!'
  },
  computed: {
    // 计算属性的 getter
    addMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').join('-')
    }
  }
})
</script>
//页面显示结果
/*
原始字符串: goodluck!
加了字符 - 的字符串: g-o-o-d-l-u-c-k-!
*/
```
- **方法** 它的关键字是 method
上述逻辑问题也可以用方法来解决
```javascript
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>加了字符 - 的字符串: {{ addMessage() }}</p>//注意这里调用的时候带了括号，因为是方法，而计算属性不带括号
</div>
 
<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'goodluck'
  },
  method: {
      addMessage: function () {
      return this.message.split('').join('-')
    }
  }
})
</script>
//页面显示结果
/*
原始字符串: goodluck!
加了字符 - 的字符串: g-o-o-d-l-u-c-k-!
*/
```
- **计算属性和方法的区别**
>计算属性是把当前结果作为一个缓存，下次运行时直接返回缓存结果，计算属性的数据是基于data数据的，如果data中数据改变了，计算属性中的结果也会发生相应改变，所以性能更好，而方法在重新渲染的时候，函数总会重新调用执行，不管data数据有没有发生变化,如果不希望缓存可以使用method