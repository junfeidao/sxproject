<template>
  <div>
    <ElButton
      v-if="show"
      icon="el-icon-plus"
      type="info"
      plain
      style="width:90%;float:left"
      @click="showup"
    />
    <ElForm v-else>
      <ElInput v-model="formInline.user" placeholder="姓名" style="width:170px; float:left" />

      <ElInput v-model="formInline.region" placeholder="数量" style="width:170px; float:left" />

      <ElButton type="primary" style="float:left" @click="onSubmit">
        确认
      </ElButton>
      <ElButton type="primary" style="float:left" @click="onnum">
        取消
      </ElButton>
    </ElForm>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      show: true,
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    showup() {
      this.show = false
    },
    onSubmit() {
      var name = this.formInline.user
      var value = this.formInline.region
      this.tableData.push({
        name: name,
        value: value
      })
      this.formInline.user = ""
      this.formInline.region = ""
      this.show = true
    },
    onnum() {
      this.show = true
      this.formInline.user = ""
      this.formInline.region = ""
    }
  }
}
</script>
