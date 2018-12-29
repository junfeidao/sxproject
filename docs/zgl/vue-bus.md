#### 非父子组件之间的通信

- vue1.x 提供了$dispatch和$braodcast 来进行通信
  - 原理：2 者分别采用了原生 js 的思想，dispatch 为委派（冒泡），broadcast 为广播
  - 使用方法: 首先在后代组件中委派一个任务，祖先组件通过 events 对象接收到来自后代组件的委派
  - broadcast 则相反
  - 缺点：这样会产生组件树，组件结构会越来越脆弱，并且不能解决兄弟组件之间的通信问题
- vue2.x 提供了中央事件总线
- 原理:首先子组件委派任务给中央事件总线，然后祖先组件通过广播（监听）到中央事件获取到子组件的委派
- 中央事件总线\$bus 提供了三个方法
  - emit 委派
  - on 广播（监听事件）
  - off 停止广播（解除监听）
  - 注意: 监听应当在 createed 和 mounted 钩子函数中进行监听

#### 代码展示

##### 子孙组件

```js
<template>
  <div><button @click="dispatchEvent">委派事件给兄弟组件</button></div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      message: "来自我的数据"
    };
  },
  methods: {
    dispatchEvent() {
      this.$bus.emit("on-message", this.message);
      console.log("tag", this.message);
    }
    /*  dispatchEvent() {
      this.$dispatch(this.message, "onMessage");
    } */
  }
};
</script>
```

#### 祖先组件

```js
<template>
  <div>
    <p>{{message}}</p>
    <children></children>
  </div>
</template>
<script>
import children from "@/components/children.vue";
import Vue from "vue";
export default {
  components: {
    children
  },
  data() {
    return {
      message: "我是自己中的数据"
    };
  },
  /*  events: {
    onMessage(message) {
      this.message = message;
    }
  } */
  mounted() {
    let that = this;
    this.$bus.on("on-message", function(msg) {
      that.message = msg;
      console.log("tag", that.msg);
    });
  }
};
//zai vue2.0时dispatch和broadcast被干掉了，如果想看效果使用vue1.x，（冒泡原理）
//这里使用了vue-bus中央事件来管理,vue-bus提供了$bus来管理，里面有三个方法，一个是on，一个emit，一个是off
</script>
```
