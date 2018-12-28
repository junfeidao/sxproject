### 组件之间的通信

### 父组件与字组件的通信

- 先把子组件注册到父组件中
  - 先导入子组件
  - 使用子组件
  - 把数据绑定到子组件上
- 然后通过 props 把子组件的数据传递给父组件
  - props 可以传一个数组也可以传一个对象（用于数据校验）
  - 通常在父组件中把接受到的数据保存起来或者直接在方法里面进行调用，但是不太建议这么做
  - 一般都会通过父组件的 computed 计算属性将父组件的数据保存起来再传到子组件里
- 子组件接收到了来自父亲的数据

---

### 子组件与父组件的通信

- 通过\$emit 将子组件的数据委派到父组件
- 父组件通过自定义事件接受到来自子组件的委派

---

### 代码演示

```bash
父组件
<template>
  <div>
    <p>{{count}}</p>
    <button @click="increase" :v-bind="getCount">+1</button>
    <div>
      <inputCount :count="count" @getValue="getValue"></inputCount>
    </div>
  </div>
</template>
<script>
import inputCount from "@/components/inputCount.vue";
export default {
  components: {
    inputCount
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    increase() {
      this.count++;
      return count;
    },
    getValue(value) {
      this.count = value;
    }
  }
};
</script>
```

```bash
子组件
template>
  <input type="text" placeholder="请输入数字" :value="count" @input="input">
</template>
<script>
export default {
  props: ["count"],
  methods: {
    input(event) {
      let value = event.target.value;
      console.log("tag", value);
      this.$emit("getValue", value);
    }
  }
};
</script>
```
