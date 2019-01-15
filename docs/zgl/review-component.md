vue-components复习

内置组件(transtion,transitionGroup)

transition的三种使用方式

第一种方式通过transition组件(元素)使用
v-enter:当过渡开始时
v-enter-to: 当过渡进入时
v-leave:当过渡离开时
v-leave-to:当过渡离开时
v-enter-active:过渡进入持续的状态（如时间，进入方式）
v-leave-active:过渡离开持续的状态（如时间，进入方式）
使用方法如下:
     <style>
       .v-enter,.v-leave-to{
       /*配合transform一起使用，如起始或者结束的位置*/
        transform:translateX(200px)
                }
       .v-enter-to,v-leave{}
       .v-enter-active,.v-leave-active{
       /*主要配合transition使用，如transition-prototype，
         transition-duration ，transition-timing-funcition，
         transition-delay*/
        transition :width 0.5s ease 
                }
</style>
2.第二种方式通过与第三方库（animate.css)使用

具体使用查看官方文档 3.第三种方式使用transition的钩子函数
v-on:before-enter="beforeEnter"
v-on:enter="enter"
v-on:after-enter="afterEnter"
v-on:before-leave="beforeLeave"
v-on:leave="leave"
v-on:after-leave="afterLeave"
v-on:leave-cancelled="leaveCancelled"
其中enter和leave钩子函数必须使用done()
以上所有的钩子函数必须传参数el
理解transition中的tag 和appear，mode和name

tag:主要是为了符合w3c的规定，行内元素不能包含块级元素
appear:是否在初始渲染时使用过渡。默认为 false
mode:指定过渡模式如out-in
name:主要是为了让过渡可以使用自己的字，如name="zgl"，就必须zgl-enter
自定义组件

全局组件的创建

使用Vue.extend和Vue.component
let com1= Vue.extend({
 template：'<h1>我是通过extend创建的组件</h1>'
})
Vue.component(('componentName',com1)
仅使用compone创建组件
Vue.component('componentName',{
  template：'<h1>我是仅通过component创建的组件</h1>'
})
  3.使用template创建组件
<template id="#template"></template>
Vue.component('componentName',{
  template:templateId
})
局部注册组件

 component：{
  componentName:{
   template：'<h1>我是仅通过component创建的组件</h1>'
  }
}
组件也是有data和methods等对象

1.组件中的data必须是一个函数，并且return出一个对象，这样是为了防止当需要组件的复用，他们共用的数据是同一组数据

 data(){
 return {
 }
}
组件可以通过 :is="'componetName'"进行手动挂载的