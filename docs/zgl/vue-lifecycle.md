### vue的生命周期
+ 先理解vue的mvvm机制是什么意思
 vue作为vm层(中间层)通过model层的改变而改变view层
1. vue的生命周期
   - beforeCreated
   -vue实例（组件）完成初始化以后，其实是没有访问到data，methods里面的方法的，只是初始化了一些Vue自带的一些属性和方法
   - created
     - vue实例完成了对data和methods等一些对象的初始化，此时只能在model层访问到，但是并未挂载到view层
   - beforeMount
     - 此时 vue会去寻找template为渲染到view层做准备，如果找不到template会把div当成template来对待
   - mounted
     - 此时在view层是是能访问到数据的
    - beforeUpdate
      - 只有当数据发生改变时，才会执行beforeUpdate，但是此时只是更新了model层中的数据，视图层的数据还是原来的数据
    - updated
      - 此时视图层的数据发生改变和modle层数据保持一致
    - beforeDstroy
      - 此时model和view层的数据还是没有被销毁的，此时只是可以用来解除事件
     -  destroy
        -  此时是访问不到date和methods包括一些其他对象，vue的实例真正被销毁
   2. 代码演示
 
```Javascript
<div id="app">{{msg}}
        <button @click="getmsg"></button>
    </div>
    <script>
        const vm=new Vue({
            el:'#app',
            data:{
                msg:"我是数据"
            },
            methods: {
                getmsg(){
                    console.log(this.msg)
                    this.msg="我不是数据"
                }
            },
            beforeCreate() {
           console.log('tag', this.msg+this.getmsg)
            },
            created() {
           console.log('tag', this.msg+this.getmsg)
            },
            beforeMount() {
           console,log(document.getElementById('app').innerHTML)
            },
            mounted() {
           console,log(document.getElementById('app').innerHTML)
            },
            beforeUpdate(){
           console.log(this.msg)
            },
            updated() {
           console.log(this.msg)
            },
            beforeDestroy(){
           console.log('tag', this.msg+this.getmsg)
            },
            destroyed() {
           console.log('tag', this.msg+this.getmsg)
            },
        })
    </script>
</body>
```