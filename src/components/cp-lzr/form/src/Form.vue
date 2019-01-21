<template>
  <div style="width: 400px;height:100px">
    <ElForm
      ref="numberValidateForm"
<<<<<<< HEAD
=======
      :model="numberValidateForm"
>>>>>>> b69229e5dc7a06ae2a250659658434ba630402d0
      status-icon
      label-width="100px"
      :model="numberValidateForm"
    >
      <ElFormItem label="date">
        <ElInput v-model="date" />
      </ElFormItem>
      <ElFormItem label="week">
        <ElInput v-model="week" />
      </ElFormItem>
      <ElFormItem
<<<<<<< HEAD
        label="年龄"
        prop="temperature"
        :rules="[
          { required: true, message: '温度不能为空'},
          { type: 'number', message: '温度必须为数字值'}
        ]"
      >
        <ElInput v-model.number="numberValidateForm.temperature" type="temperature" autocomplete="off" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submitForm('numberValidateForm')">
=======
        label="温度"
        prop="temperature"
      >
        <ElInput v-model.number="temperature" />
      </ElFormItem>
      <ElFormItem>
        <ElButton @click="submitForm(temperature)">
>>>>>>> b69229e5dc7a06ae2a250659658434ba630402d0
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
      numberValidateForm: {
        temperature: ''
      },
      date: '',
<<<<<<< HEAD
      week: ''
=======
      week: '',
      temperature: ''
>>>>>>> b69229e5dc7a06ae2a250659658434ba630402d0
    }
  },
  methods: {
    submitForm(formName) {
<<<<<<< HEAD
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const date = this.date
          const week = this.week
          const temperature = this.numberValidateForm.temperature

          this.$emit('obj', date, week, temperature)
          this.date = ""
          this.week = ""
          this.numberValidateForm.temperature = ""
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      this.$emit('sub')
=======
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
>>>>>>> b69229e5dc7a06ae2a250659658434ba630402d0
    },
    // submitForm() {
    //   this.tableData.push({
    //     date: this.date,
    //     week: this.week,
    //     temperature: this.temperature
    //   })
    //
    // },
    resetForm() {
      this.$emit('reset')
    }
  }
}
</script>
