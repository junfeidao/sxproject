<template>
  <div id="inbox" style="margin-top: 15px;">
    <ElSelect slot="prepend" v-model="select" placeholder="请选择"
class="inp">
      <ElOption v-for="(value,key) in options" :key="key" :label="value"
:value="key" />
    </ElSelect>
    <ElInput v-model="input5" placeholder="请输入销量" class="input-with-select" />
    <ElButton slot="append" class="btn" icon="el-icon-upload"
@click="divclick">
确定
</ElButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      input3: "",
      input4: "",
      input5: "",
      select: 3
    }
  },
  methods: {
    divclick: function() {
      const index = this.select
      const value = this.input5
      // console.log("select:::::::value:",{index,value})
      this.$emit("divSub", { index, value })
    }
  }
}
</script>

<style>
#inbox {
  width: 900px;
  height: 50px;
  position: absolute;
  left: 200px;
  display: flex;
  justify-content: flex-end;
}
.inp {
  width: 100%;
  height: 100%;
}
.btn {
  height: 40px;
}
</style>
