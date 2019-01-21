## 指令
### v-text
* 详细：
更新元素的`textContent`。如果要更新部分的`textContent`,需要使用`{{Mustache}}`插值。
* 示例：
```
<span v-text="msg"></span>
<!-- 和下面一样 -->
<span>{{msg}}</span>
```
### v-html
* 详细:
更新元素的innerHTML。注意：内容按普通HTML插入-不会作为Vue模板进行编译。如果试图使用v-html组合模板，可以重新考虑是否通过使用组件来代替。
### v-show
* 用法：
根据表达式的真假值，切换元素的`display`CSS属性。当条件变化时该指令触发过度效果。
### v-if
* 用法：
根据表达式的值得真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是`<template>`，将提出它的内容作为条件块。
### v-else
* 用法：
v-else是搭配v-if使用的，它必须紧跟在v-if或者v-else-if后面，否则不起作用。
* 示例：
```
<a v-if="ok">yes</a>
<a v-else>no</a>
```
### v-else-if
* 用法：
v-else-if充当v-if的else-if块，可以链式的使用多次。可以更加方便的实现switch语句。
* 示例：
```
<div v-if="type==='A'">
    A
</div>
<div v-if="type==='B'">
    B
</div>
<div v-if="type==='C'">
    C
</div>
<div v-else>
    Not A,B,C
</div>
```
