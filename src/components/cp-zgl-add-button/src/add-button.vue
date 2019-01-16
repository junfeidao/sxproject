<template>
  <div>
    <ElButton
      v-if="show"
      size="medium"
      type="primary"
      @click="getShow"
    >
      增加
    </ElButton>

    <ElForm
      v-else
      :inline="true"
      width="180"
    >
      <ElFormItem>
        <ElInput v-model="writeCity" placeholder="请输入城市" width="20" />
      </ElFormItem>
      <ElFormItem>
        <ElInput v-model="writeDay" placeholder="请输入星期几" />
      </ElFormItem>
      <ElFormItem>
        <ElInput v-model="writeTemp" placeholder="请输入温度" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="success" @click="postForm">
          提交
        </ElButton>
        <ElButton @click="cancle">
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
      show: true,
      writeCity: "",
      writeDay: "",
      writeTemp: ""

    }
  },
  methods: {
    postForm() {
      this.show = !this.show
      this.$emit('obj', this.writeCity, this.writeDay, this.writeTemp)
      this.writeCity = ""
      this.writeDay = ""
      this.writeTemp = ""
    },
    getShow() {
      this.show = !this.show
    },
    cancle() {
      this.writeCity = ""
      this.writeDay = ""
      this.writeTemp = ""
      this.show = !this.show
    }
  }
}
</script>
