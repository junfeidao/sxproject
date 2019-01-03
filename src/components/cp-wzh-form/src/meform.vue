<template>
  <div style="margin-top: 15px;">
    <ElInput
      v-model="select"
      placeholder="请输入销量"
    />
    <ElInput
      v-model="input5"
      placeholder="请输入销量"
    />
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

