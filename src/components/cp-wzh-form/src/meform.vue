<template>
  <div id="meform">
    <ElInput v-model="select" placeholder="请输入姓名" />
    <ElInput v-model="input5" placeholder="请输入数量" />
    <ElButton
      id="el-button-from"
      slot="append"
      icon="el-icon-upload"
      @click="divclick"
    >
      确定
    </ElButton>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input5: "",
      select: ""
    }
  },
  methods: {
    divclick: function() {
      const index = this.select
      const val = this.input5
      this.$emit("divSub", { index, val })
    }
  }
}
</script>
<style>
#meform {
  width: 400px;
  height: 600px;
  margin-left: 100px;
}
</style>

