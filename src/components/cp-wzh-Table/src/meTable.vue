<template>
  <div style="float:left;margin-top:50px;width:800px;">
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="name" label="姓名" width="180" />
      <ElTableColumn label="改变数量" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
          <ElInput v-if="show" v-model="tableData[scope.$index].value" :display="show" />
        </template>
      </ElTableColumn>
      <ElTableColumn label="确认修改" width="180">
        <template slot-scope="scope">
          <ElButton
            v-if="!show"
            :display="show"
            class="button-one"
            type="primary"
            @click="showout(scope.$index)"
          >
            点击修改
          </ElButton>
          <ElButton
            v-else
            class="button-one"
            :display="show"
            type="primary"
            @click="showdown(scope.$index)"
          >
            确认修改
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
      index: ""
    }
  },
  methods: {
    showout(index) {
      if (this.show === true) {
        this.show = false
      } else {
        this.show = true
      }
      // this.index = index
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
