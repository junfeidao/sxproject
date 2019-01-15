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
      >
        <ElFormItem label="种类" prop="kind">
          <ElInput
            v-model="ruleForm.kind"
            size="mini"
          />
        </ElFormItem>
        <ElFormItem label="销量" prop="saleCount">
          <ElInput
            v-model.number="ruleForm.saleCount"
            size="mini"
          />
        </ElFormItem>
      </ElForm>
      <span slot="footer" class="dialog-footer">
        <ElButton @click="cancel()">
          取 消
        </ElButton>
        <ElButton type="primary" @click="handleSubmit()">
          确 定
        </ElButton>
      </span>
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
    handleSubmit() {
      if (this.ruleForm.kind !== '' && this.ruleForm.saleCount !== '') {
        this.tableData.push({ kind: this.ruleForm.kind, saleCount: this.ruleForm.saleCount })
      }
      this.ruleForm.kind = ''
      this.ruleForm.saleCount = ''
      this.show = false
    },
    cancel() {
      this.show = false
      this.ruleForm.kind = ''
      this.ruleForm.saleCount = ''
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
    float: left;
  }
</style>
