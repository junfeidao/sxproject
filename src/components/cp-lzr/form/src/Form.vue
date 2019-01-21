<template>
  <div style="width: 400px;height:100px">
    <ElForm
      ref="numberValidateForm"
      :model="numberValidateForm"
      status-icon
      label-width="100px"
    >
      <ElFormItem label="date">
        <ElInput v-model="date" />
      </ElFormItem>
      <ElFormItem label="week">
        <ElInput v-model="week" />
      </ElFormItem>
      <ElFormItem
        label="温度"
        prop="temperature"
      >
        <ElInput v-model.number="temperature" />
      </ElFormItem>
      <ElFormItem>
        <ElButton @click="submitForm(temperature)">
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
    submitForm(formName) {
      var date = this.date
      var week = this.week
      var temperature = this.temperature
      if (!isNaN(formName)) {
        this.tableData.push({
          'date': date,
          'week': week,
          'temperature': temperature
        })
        this.$emit('sub')
      }
    },
    resetForm() {
      this.$emit('reset')
    }
  }
}
</script>
