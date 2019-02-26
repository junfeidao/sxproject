###  实现百度搜索框功能
  - 技术栈：axios,百度搜索接口：https://www.baidu.com/?wd=s
  - 功能分析
    1. 当输入要搜索的关键字时下面会产生一个ul，可以在ul中进行选择
    1. 当选择好搜索的内容是时回车，将发送请求
  - 用到的vue技术: v-bind,v-for,v-model,v-on和$evnet相关事件如键盘事件和取消默认行为
  - 代码实现部分
  ```html
    <template>
     <div>
     <input type="text" @keydown.down="changeDown"  @keydown="getList" @keyup.up="changeUp" v-model="data">
     <ul v-for="(item,index)in items" :key="index"><li :class="{gray:index==nowIndex}" @click.enter.prevent="open">{{item}}
     
</li ></ul>
 <p v-show="list.length.trim()==0"></p>
</div>
</template>
```
```javascript
    export default{
      data(){
return {
     list:[],
      nowIndex:-1,
       query:'',
        data:""
  }
    },
methods:{
     getList(){
      axios.get("https://www.baidu.com",{
      query:query}).then(reusult=>{
       this.list=this.axios.data
     })
    }
    //实现按键盘上的下，当到最后一个时返回到第一个
    changeDown(){
    this.nowIndex++
 this.data=this.list[nowIndex]
   if(this.nowIndex>this.list.length){
    nowIndex=0;
      },
//实现按键盘上的下，当到第一个时返回到最后一个
 changeUp(){
    this.nowIndex--
      this.data=this.list[nowIndex]
   if(this.nowIndex<0){
    nowIndex=this.list;
        nowIndex=this.list.length
      },
 },
//点击或者回车时跳到一个网址
  open(){
    window.open("https://www.baidu.com/?wd=s")
   }
}
 }
```
```style
  .gray{
color:gray}
 ```