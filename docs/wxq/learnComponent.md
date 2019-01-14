# 这里记录组件的使用知识

## 对props的理解

props给组件注册一些自定义属性，这个使用在vue-cli的初始项目中有体现，helloworld组件的msg就是。这个属性和html元素标签的属性差不多,都可以设置自己的值。
在组件中插入props的格式如下：

```javascript
props: {
  tableData: {
    type: Array,
    default() {
      return []
    }
  }
}
```

这是最新的官方格式，必须指定类型，以及返回值。

### props的命名

html的属性对大小写是不敏感的，所以如果设置的props的名字是驼峰式的使用时就要用等价的短横线分割命名。比如例子中的tableData，在引用组件时，用到tableData属性就要写table-data。

### props的类型

在最近的使用中，都是用了Array类型。还有String类型，Number类型，Boolean类型，以及Object类型。

## 插槽

就像```<p></p>```里面可以写点东西一样。vue的组件也可以插进去,这依赖于组件提供的slot。有了slot，组件标签之间可以插入文本、html代码、或者另外的组件。

### 具名插槽

如果只是一个单纯的slot，那么你在组件内添加的所有内容都将显示在这个slot上，而且只有一个。具名插槽更加详细。
通过给组件的slot中添加name属性并赋值，使用组件时在插入的html元素上添加slot=“name的值”，就可以一个组件拥有多个插槽。

### 作用域插槽

作用域插槽可以从子组件获取数据，组件设计时插入slot，并用v-bind绑定对象。使用时在插槽内部元素上用slot-scope定义插槽的名字。在table组件中，scope中的数据就是组件获取到的子组件数据。父组件封装在了element-ui中，绑定的数据对象为tableData。