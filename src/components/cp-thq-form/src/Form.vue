<template>
  <div>
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
      if (this.name === '') {
        alert('请输入商品名称')
      } else {
        this.tableData.push({
          name: this.name,
          number: this.number
        })
        this.visible = false
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
