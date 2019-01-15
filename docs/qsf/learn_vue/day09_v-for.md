### 条件渲染

- 如果想用 v-if 切换多个元素可以将这些元素包裹起来。

```html
<!-- html 部分 -->

<body>
    <div id="app">
        <template v-if="ok">
            <h1 v-else>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
    </div>
</body>
```

```javascript
// js 部分

new Vue({
    el: '#app',
    data: {
        ok: true
    }
})
```

上面代码在 template 标签里面包裹了三个标签（用 div 标签包裹也可以），用 v-else 控制显示哪个

渲染结果如下：

>Paragraph 1
>Paragraph 2

### 列表渲染

- 如同 v-if 一样，v-for 也可以同时渲染多个元素。

```html
<!-- html 部分 -->

<div id="app">
  <ul>
    <template v-for="site in sites">
      <li>{{ site.name }}</li>
      <li>--------------</li>
    </template>
  </ul>
</div>
```

```javascript
// js 部分

new Vue({
  el: '#app',
  data: {
    sites: [
      { name: '元始天尊' },
      { name: '太乙真人' },
      { name: '太上老君' }
    ]
  }
})
```

上面代码证中 template 标签包裹了两个元素，则这两个元素会被同时渲染。
渲染结果：

>元始天尊
>\--------------
>太乙真人
>\--------------
>太上老君
>\--------------

```
如果将 v-for="site in sites" 中的数组 sites 换成数字，则数字就是渲染的次数.
```

### 数组变动

由于 JavaScript 的限制， Vue 不能检测以下变动的数组：

> 1. 当你直接设置一个项的索引时，例如： ```vm.items[indexOfItem] = newValue```

> 2. 当你修改数组的长度时，例如： ```vm.items.length = newLength```

为了避免第一种情况，以下两种方式将达到像 vm.items[indexOfItem] = newValue 的效果， 同时也将触发状态更新：

```Vue.set(example1.items, indexOfItem, newValue)```

```example1.items.splice(indexOfItem, 1, newValue)```

避免第二种情况，使用 splice：

```example1.items.splice(newLength)```

