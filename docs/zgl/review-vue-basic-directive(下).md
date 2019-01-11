### v-for
 + v-for 既可以用来遍历数组，也可以用来遍历对象和数字的迭代，但是在vue2.0以上需要传入一个key值否则就会报错
 使用时可以传3个参数，第一个参数为item，第二个参数为index，第三个参数为key
 1. v-for 遍历简单数组
```javascript
  <template>
 <ul v-for="(item,index) in list" :key=list.index>
  <li>{{item}}</li>
</ul>
</template>
 <script>
   export default{
list:[1,2,3,4]
}
</script>
```
2.v-for 遍历复杂数组
```Javascript
 <ul v-for="item in list3" :key=list2.id>
  <li>{{item.age}}</li>
</ul>
<scrpit>
list2:[{id:1,age:21},{id:2,age:22},{id:3,age:23}]
</scrpit>
```
3.v-for遍历对象
```javascript
<ul v-for="(item,index) in list3" :key=list3.index>
  <li>{{item}}</li>
</ul>
<scrpit>
list3:{id:1,age:21,name:'zgl'}
</scrpit>
```
4.v-for 迭代数字
```javascript
<ul v-for="count in 10" >
  <li>{{count}}</li>
</ul>
```
### v-if 和 v-show
 + v-if和v-show都是用来控制显示隐藏元素的，但是v-show只是简单的更改了display属性为none，具体可以打开chorme浏览器element进行观察，而v-if 则是真正的隐藏起来
 + v-if还可以与v-else-if ，v-elsse连用
 ### 自定义指令
 有时vue自带的内部指令满足不了我们的需求时我们可以自己制定指令，制定指令需要遵守在自定义时不需要加v-，但是在使用时时需要加-v的
  1. 全局自定义指令

  ```javascript
<script>  
 Vue.directive('focus',{
//下面的三个方法都传4个参数
/* 1.el :表示所绑定的dom元素
 2.binding是一个对象里面主要有3个属性，第一个是属性是name主要湖获取的是指令的名字，第二个属性是value主要获取进行js表达式计算后的结果，第三个参数是expression获取表达式的字符串 */
     bind:function(el，binding){
           el.style.color=binding.value;
     }//一般情况下这里主要绑定的是一些css样式不需要进行jsdom操作的
     inserted:function(el,binding){
       el.focus()
    }// 一般情况下这里主要绑定需要一些js操作的
    updated:function(){
   }
})
</script>
 ```
2. 局部自定义指令
+ vue给我们提供了一个directives对象
```javascript

<scrpit>
 directives:{
 'fontsize':{bind:function(el,binding){
   el.fontSize=`${pareInt(binding.value)}px`
}}
}
</script>