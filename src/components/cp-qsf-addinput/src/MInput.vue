<template>
  <div class="cp-qsf-addinput">
    <div v-if="isEdit" class="qsf-addInput" @click="isEdit=false">
      <i class="el-icon-circle-plus" />
    </div>
    <ElForm
      v-else
      ref="numberValidateForm"
      :model="numberValidateForm"
      label-width="100px"
      class="qsf-ruleForm"
    >
      <ElFormItem
        class="Minput-input"
        prop="volume"
        :rules="[
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
        ]"
      >
        <ElInput
          v-model="name"
          class="MInput-leftInput"
          placeholder="请输入内容"
          clearable
        />
        <ElInput
          v-model.number="numberValidateForm.volume"
          class="MInput-rightInput"
          type="volume"
          autocomplete="off"
        />
      </ElFormItem>
      <ElFormItem class="qsf-MInput-submit">
        <ElButton
          size="mini"
          class="MInput-submit"
          type="primary"
          @click="submitForm('numberValidateForm')"
        >
          提交
        </ElButton>
        <ElButton size="mini" class="MInput-resubmit" @click="resetForm('numberValidateForm')">
          取消
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      isEdit: true,
      numberValidateForm: {
        volume: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      var name = this.name
      var volume = this.numberValidateForm.volume
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('handleInput', name, volume)
          this.$refs[formName].resetFields()
          this.name = ''
          this.isEdit = true
          // alert('submit!')
          // console.log(name, volume)
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.name = ''
      this.isEdit = true
    }
  }
}
</script>
<style lang="less">
  .cp-qsf-addinput {
    width: 350px;
    height: 50px;
    border-bottom: 1px #eee;
    border-style: none none solid none;
    position: relative;
    .qsf-addInput {
      width: 350px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .qsf-ruleForm {
      width: 350px;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      .Minput-input {
        width: 175px;
        height: 50px;
        position: relative;
        .MInput-leftInput {
          width: 90px;
          position: absolute;
          left: -100px;
        }
        .MInput-rightInput {
          width: 80px;
          position: absolute;
          right: 0;
        }
      }
      .qsf-MInput-submit {
        width: 175px;
        height: 50px;
        position: relative;
        .MInput-submit {
          position: absolute;
          left: -65px;
        }
        .MInput-resubmit {
          position: absolute;
          right: 17px;
        }
      }
    }
  }
</style>
