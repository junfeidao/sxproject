<template>
  <div class="cp-thq-form">
    <div class="Add" @click="toAdd">
      +
    </div>
    <ElDialog width="20%" :visible.sync="visible" title="添加栏">
      <ElForm label-width="50px">
        <ElFormItem label="种类">
          <ElInput v-model="name" />
        </ElFormItem>
        <ElFormItem label="销量">
          <ElInput v-model="number" />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" @click="submitForm">
            确定
          </ElButton>
          <ElButton @click="resetForm">
            取消
          </ElButton>
        </ElFormItem>
      </ElForm>
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
      visible: false,
      name: '',
      number: ''
    }
  },
  watch: {
    visible() {
      this.name = ''
      this.number = ''
    }
  },
  methods: {
    submitForm() {
      if (this.name === "") {
        alert('请输入名称')
      } else if (this.number === "") { // 销量不能为空
        alert('请输入销量')
      } else if (!/^\d+$/.test(this.number)) { // 销量只能是数字
        alert('销量框只能输入数字')
      } else {
        this.tableData.push({
          name: this.name,
          number: this.number
        })
        this.resetForm()
      }
    },
    resetForm() {
      this.visible = false
    },
    toAdd() {
      this.visible = true
    }
  }
}
</script>
<style>
.cp-thq-form .Add{
     height: 45px;
     color: #606266;
     border-bottom: 1px solid #ebeef5;
     font-size: 25px;
     line-height: 45px;
     cursor: pointer;
   }
</style>

