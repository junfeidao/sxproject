<template>
  <div>
    <ElButton
      class="addbtn"
      type="primary"
      icon="el-icon-circle-plus-outline"
      @click="show = true"
    />
    <ElDialog
      title="提示"
      :visible.sync="show"
      width="30%"
      :before-close="handleClose"
    >
      <ElForm
        ref="ruleForm"
        :inline="true"
        :model="ruleForm"
        :rules="rules"
        status-icon
      >
        <ElFormItem label="种类" prop="kind">
          <ElInput
            v-model.number="ruleForm.kind"
            size="mini"
          />
        </ElFormItem>
        <ElFormItem label="销量" prop="saleCount">
          <ElInput
            v-model.number="ruleForm.saleCount"
            size="mini"
          />
        </ElFormItem>
        <ElFormItem>
          <ElButton @click="resetForm('ruleForm')">
            取 消
          </ElButton>
          <ElButton type="primary" @click="submitForm('ruleForm')">
            确 定
          </ElButton>
        </ElFormItem>
      </ElForm>
<<<<<<< HEAD
      <span slot="footer" class="dialog-footer">
        <ElButton @click="cancel()">
          取 消
        </ElButton>
        <ElButton type="primary" @click="handleSubmit()">
          确 定
        </ElButton>
      </span>
=======
>>>>>>> feature/wxq
    </ElDialog>
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
      show: false,
      ruleForm: {
        kind: '',
        saleCount: ''
      },
      rules: {
        kind: [
          { required: true, message: '请输入种类', trigger: 'blur' },
          { type: 'string', message: '请输入文字', trigger: 'blur' }
        ],
        saleCount: [
          { required: true, message: '请输入销量', trigger: 'blur' },
          { type: 'number', message: '请输入整数', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tableData.push({ kind: this.ruleForm.kind, saleCount: this.ruleForm.saleCount })
          this.show = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.show = false
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.ruleForm.kind = ''
          this.ruleForm.saleCount = ''
        })
        .catch(_ => {})
    }
  }
}
</script>
<style>
    .addbtn {
    width: 360px;
    height: 50px;
  }
</style>
