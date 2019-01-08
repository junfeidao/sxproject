<template>
  <div style="float:left;margin-top:50px;width:800px;">
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="name" label="姓名" width="180" />
      <ElTableColumn label="数量" width="180">
        <template slot-scope="scope">
          <span v-if="!status[scope.$index].isEdit">
            {{ scope.row.value }}
          </span>
          <ElInput v-else v-model="status[scope.$index].value" />
        </template>
      </ElTableColumn>
      <ElTableColumn label="确认修改" width="180">
        <template slot-scope="scope">
          <ElButton
            v-if="!status[scope.$index].isEdit"
            class="button-one"
            type="primary"
            @click="showout(scope.$index)"
          >
            点击修改
          </ElButton>
          <ElButton
            v-else
            class="button-one"
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
      status: []
    }
  },
  watch: {
    tableData: {
      immediate: true,
      handler() {
        this.status = this.tableData.map(item => {
          return {
            isEdit: false,
            value: item.value
          }
        })
      }
    }
  },
  methods: {
    showout(index) {
      this.status[index].isEdit = true
    },
    showdown(index) {
      this.status[index].isEdit = false
      this.tableData[index].value = this.status[index].value

      this.$emit('change', index, this.status[index].value)
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
