# 自定义指令

---

#### 简单实现

```javascript
<div id="app">
  <input type="text" v-focus=''>
</div>

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
let app = new Vue({
  el: '#app'
})
```

上述代码自定义了一个 focus 指令，进入页面时输入框会自动获取焦点。

```javascript
<div id="app">
  <input type="text" v-focus=''>
</div>

// 注册一个局部自定义指令 v-focus
let app = new Vue({
  el: '#app',
  data: {
    test: 122
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
})
```

#### 钩子函数

指令定义函数提供了几个钩子函数：

- bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。

- inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

- update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

- componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。

- unbind: 只调用一次， 指令与元素解绑时调用。

#### 钩子函数的参数

- el: 指令所绑定的元素，可以用来直接操作 DOM 。

- binding: 一个对象，包含以下属性：

    - name: 指令名，不包括 v- 前缀。

    - value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。

    - oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。

    - expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。

    - arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。

    - modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。

- vnode: Vue 编译生成的虚拟节点。

- oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

>注意： 钩子函数的参数是有顺序的。

```javascript
<div id="app">
  <p v-mybind>learn directives</p>
</div>

let app = new Vue({
  el: '#app',
  directives: {
    mybind: {
      bind: function(binding) {
        console.log(binding.name)
      }
    }
  }
})
```

上面的钩子函数接收了一个参数 binding ，但是打印结果是 undefined，如果在前面加上第一个参数 ```function(el, binding)``` ，此时打印结果为 mybind