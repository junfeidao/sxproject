# vue 插槽

- 一个 slot 标签就是一个插槽，如果没有内容传入，则显示 slot 标签原有的内容，如果有内容插入，则显示插入的内容。

- **匿名插槽（slot 不带 name 属性）**，看下面例子：

```html
<!-- html部分 -->
<body>
    <div id="app">
        <my_slot></my_slot>
    </div>

    <template id="test">
        <div>
            <header>我是头部</header>
            <slot>我是中间</slot>
            <footer>我是尾部</footer>
        </div>
    </template>
</body>
```

```javascript
// js 部分
Vue.component('my_slot', {
    template: '#test'
})

new Vue({
    el: '#app',
})
```

上面代码注册了一个组件，然后在 div 里渲染这个组件，页面显示如下：

>我是头部
>我是中间
>我是尾部

现在修改 html 代码，渲染组件的时候传入一个 p 标签，代码如下：

```html
<div id="app">
    <my_slot>
        <p>我是插入进来的</p>
    </my_slot>
</div>
```

现在页面显示如下：

>我是头部
>我是插入进来的
>我是尾部

上面传入到组价的 p 标签替换了组件原有的 slot 标签，slot 就像一个事先预留的位置，任何渲染时传入的内容都可以插入到这个位置，所以形象的叫它插槽。不光可以插标签，还可以插图片等等。

>注意：不带 name 属性的 slot 插槽都是匿名插槽，如果有多个插槽，则传入的值会替换所有插槽。

看例子：

```html
<template id="test">
    <div>
        <header>我是头部</header>
        <slot>我是中间</slot>
        <slot>我是中间</slot>
        <slot>我是中间</slot>
        <footer>我是尾部</footer>
    </div>
</template>
```

上面代码在原来的基础上添加了两个插槽，这时候页面显示如下：

>我是头部
>我是插入进来的
>我是插入进来的
>我是插入进来的
>我是尾部

- **具名插槽**
上面传入的值会插入所有的匿名插槽里面，如果只想让值插入某一个插槽，就要使用具名插槽。例如我想

```html
<!-- html部分 -->

<div id="app">
    <my_slot>
        <span slot="one">我是插入进来的</span>
    </my_slot>
</div>

<template id="test">
    <div>
        <header>我是头部</header>
        <slot name="one">我是one</slot>
        <slot name="two">我是two</slot>
        <slot name="three">我是three</slot>
        <footer>我是尾部</footer>
    </div>
</template>
```

这时候页面显示如下：

>我是头部
>我是插入进来的 我是two 我是three
>我是尾部

这就是具名插槽，可以插入指定的插槽。

- **作用域插槽**

>我要吐槽一下：这一块官方文档讲的太模糊，语言很凝练，代码也不全，看的人云里雾里，菜鸟教程的 vue 倒适合新手入门，代码很全，但是内容不全，你们就不能互相学习一下吗。

进入正题：如果想把子组件的数据渲染出来，但又不想给父组件传值，则可以在子组件的 slot 标签上绑定数据，然后通过父组件渲染。例如我想让子组件的数组渲染出来，则用下面代码：

>注意：下面操作是在基于 vue-cli 搭建的 vue 项目中进行的，不懂的点这里[使用 vue-lic3 创建 vue 项目](https://blog.csdn.net/qq_37140632/article/details/85005857)

```html
// 子组件部分 son.vue（要是官方文档能写的和我的一样认真就好了）

<template>
    <div>
        <slot :todo="todo"></slot>
    </div>
</template>

<script>

export default {
    data() {
        return {
            todo: [10,20,30,40,50,60,70]
        }
    },
    components: {

    }
}
</script>
```

```html
// 父组件部分 father.vue

<template>
    <div>
        <son>
            <template slot-scope="todo">
                <ul>
                    <li v-for="item in todo">{{ item }}</li>
                </ul>
            </template>
        </son>
    </div>
</template>

<script>
import son from './son.vue'
export default {
    components: {
        son
    }
}
</script>
```

在父组件创建 template 标签，然后使用 slot-scope 特性从子组件获取数据。

页面显示结果如下：

```[ 10, 20, 30, 40, 50, 60, 70 ]```

- **总结**

>为什么这种绑定数据的插槽叫作用域插槽，因为虽然数据看起来在父组件渲染了，其实并不是，父组件只是告诉子组件如何渲染而已，最终数据还是在子组件作用域渲染的，因为数据在 son 标签里面。在父组件无法拿到并使用这个数据，这也证明了数据是在子组件作用域的。
