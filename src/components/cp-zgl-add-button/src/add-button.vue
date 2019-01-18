<template>
  <div>
    <ElButton v-if="show" @click="getshow">
      新增
    </ElButton>
    <ElForm
      v-else
      ref="numberValidateForm"
      :model="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
      :inline="true"
    >
      <ElFormItem
        label="城市"
      >
        <ElInput v-model="city" placeholder="请输入城市" />
      </ElFormItem>
      <ElFormItem
        label="星期几"
      >
        <ElInput v-model="day" placeholder="请输入星期几" />
      </ElFormItem>
      <ElFormItem
        label="温度"
        prop="temp"
        :rules="[
          { required: true, message: '温度不能为空'},
          { type: 'number', message: '温度必须为数字值'}
        ]"
      >
        <ElInput
          v-model.number="numberValidateForm.temp"
          type="temp"
          autocomplete="off"
        />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submitForm('numberValidateForm')">
          提交
        </ElButton>
        <ElButton @click="resetForm('numberValidateForm')">
          重置
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberValidateForm: {
        temp: ''
      },
      city: '',
      day: '',
      show: true

    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const city = this.city
          const day = this.day
          const temp = this.numberValidateForm.temp

          this.$emit('obj', city, day, temp)
          this.city = ""
          this.day = ""
          this.numberValidateForm.temp = ""
          this.show = !this.show
          // alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.city = ""
      this.day = ""
      this.numberValidateForm.temp = ""
      this.show = !this.show
    },
    getshow() {
      this.show = !this.show
    }
  }
}
</script>
