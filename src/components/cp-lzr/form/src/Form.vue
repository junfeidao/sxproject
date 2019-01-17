<template>
  <div style="width: 400px;height:100px">
    <ElForm
      ref="ruleForm2"
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <ElFormItem label="date">
        <ElInput v-model="date" />
      </ElFormItem>
      <ElFormItem label="week">
        <ElInput v-model="week" />
      </ElFormItem>
      <ElFormItem label="温度">
        <ElInput v-model="temperature" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submitForm">
          提交
        </ElButton>
        <ElButton @click="resetForm">
          取消
        </ElButton>
      </ElFormItem>
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
      date: '',
      week: '',
      temperature: ''
    }
  },
  methods: {
    submitForm() {
      this.tableData.push({
        date: this.date,
        week: this.week,
        temperature: this.temperature
      })
      this.$emit('submit')
    },
    resetForm() {
      this.$emit('reset')
    }
  }
}
</script>
