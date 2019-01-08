<template>
  <div style="float:left;margin-top:50px;width:800px;">
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="name" label="姓名" width="180" />
      <ElTableColumn prop="value" label="数量" width="180" />
      <ElTableColumn label="改变数量" width="180">
        <template slot-scope="scope">
          <ElInput v-if="show" v-model="tableData[scope.$index].value" />
        </template>
      </ElTableColumn>
      <ElTableColumn label="确认修改" width="180">
        <template slot-scope="scope">
          <ElButton
            v-if="!show"
            ref="btn"
            class="button-one"
            type="primary"
            @click="showout(scope.$index)"
          >
{{ text }}
</ElButton>
          <ElButton
            v-else
            ref="btn2"
            class="button-one"
            type="primary"
            @click="showdown(scope.$index)"
          >
{{ text2 }}
</ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
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
      text: "点击修改",
      text2: "确认修改"
    }
  },
  methods: {
    showout(index) {
      this.$refs.btn.show = "true"
      if (this.show === true) {
        this.show = false
      } else {
        this.show = true
      }
    },
    showdown(index) {
      if (this.show === true) {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
}
</script>
<style>
.input-one {
  display: none;
  width: 100px;
  height: 35px;
  border-radius: 6px;
}
</style>
