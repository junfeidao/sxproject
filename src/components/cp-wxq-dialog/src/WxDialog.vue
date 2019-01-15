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
      <ElForm :inline="true">
        <ElFormItem label="种类">
          <ElInput
            v-model="kind"
            size="mini"
          />
        </ElFormItem>
        <ElFormItem label="销量">
          <ElInput
            v-model="saleCount"
            size="mini"
          />
        </ElFormItem>
      </ElForm>
      <span slot="footer" class="dialog-footer">
        <ElButton @click="show = false">
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
      kind: '',
      saleCount: ''
    }
  },
  methods: {
    handleSubmit() {
      this.validation()
      if (this.kind !== '' && this.saleCount !== '') {
        this.tableData.push({ kind: this.kind, saleCount: this.saleCount })
        this.show = false
      }
      this.kind = ''
      this.saleCount = ''
    },
    cancel() {
      this.show = false
      this.kind = ''
      this.saleCount = ''
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.kind = ''
          this.saleCount = ''
        })
        .catch(_ => {})
    },
    validation() {
      if (this.kind === '') {
        alert('种类不能为空')
      }
      if (this.saleCount === '') {
        alert('销量不能为空')
      }
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
