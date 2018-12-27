# vue学习笔记 day02
- **监听属性** 监听属性关键字是 watch ，我们可以通过 watch 来响应数据的变化
>这个实例通过 watch 监听输入框数据的变化
```javascript
<body>
    <div id="box">
        <input type="text" v-model = "num">
        <p id="info"></p>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#box',
        data: {
            num: 0
        },
        // 这里是监听属性
        watch: {
            num: function(val) {
                this.num = val
            }
        }
    })
    // $watch 是一个实例方法
    vm.$watch('num', function(nVal, oVal) {
        // 这个回调函数接收两个参数，第一个为绑定元素变化后的数据，第二个参数是绑定元素变化前的数据，这个回调函数在绑定元素变化后调用
        document.getElementById('info').innerHTML = '修改前的值为：' + oVal + '修改后的值为：' + nVal;
    })
</script>
```
>计算属性和监听属性都可以检测某个数据的变化，当一个数据属性在它所依赖的属性发生变化时，也要发生变化的这种情况下，最好使用计算属性，因为计算属性有getter方法，无论数据所依赖的属性如何变化，它都可以通过getter方法得到它所检测的数据，而不用去管数据所依赖的属性，所以这种情况使用计算属性性能更好，代码更简洁。监听属性适用于当数据发生变化时，执行异步操作或较大开销操作的情况，而且它能在数据变化后执行回调函数，得到变化前和变化后的数据进行相应操作
- **class属性绑定** class 与 style 是 HTML 元素的属性，用于设置元素的样式，可以用 v-bind 来设置样式属性。

1.为 v-bind:class 设置一个对象，从而动态的切换 class:
```javascript
<div v-bind:class="{ red: isRed }"></div>
// 如果 isRed 为 true ,则<div class="red"></div>
```
2.可以在对象中传入多个属性来动态设置多个值
```javascript
<div v-bind:class="{ red: isRed, blue: isBlue }
// 如果 isRed 和 isBlue 的值都为 true ，则后者会覆盖前者
```
3.直接绑定数据里的一个对象
```javascript
<div v-bind:class="col"></div>
<script>
    var vm = new Vue({
        el: '#box',
        data: {
            col: {
                isred: false,
                blue: true
            }
        }
    })
</script>
```
4.用数组绑定class
```javascript
<div v-bind:class="[isRed, isBlue]"></div>
// 在 data 里可以让 isRed 和 isBlue 作为属性，分别设置相应的class
```
5.可以用三目运算符绑定class
```javascript
<div v-bind:class="isRed? red : blue"></div>
```
- **绑定style** 绑定style与绑定class类似
- **修饰符**
- **事件修饰符**
>.stop 阻止单击事件冒泡
>.prevent 提交事件不再重载页面
>.capture 添加事件侦听器时使用事件捕获模式
>.self 只当事件在该元素本身触发时触发回调
>.once click 事件只能点击一次 
- **按键修饰符** 在监听键盘事件时添加按键修饰符
>记住所有的 keyCode 比较困难，所以 vue 为常用的 keyCode 提供了别名
>.enter .tab .delete (捕获 "删除" 和 "退格" 键) .esc .space .up .meta
>.down .left .right .ctrl .alt .shift