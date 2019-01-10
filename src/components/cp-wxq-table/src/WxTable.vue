<template>
  <ElTable
    :data="tableData"
    class="tb-edit"
    highlight-current-row
    style="width: 100%"
  >
    <ElTableColumn label="种类" width="180">
      <template slot-scope="scope">
        <span>
          {{ scope.row.kind }}
        </span>
      </template>
    </ElTableColumn>
    <ElTableColumn label="销量" width="180">
      <template slot-scope="scope">
        <ElInput
          v-model="scope.row.saleCount"
          class="edit-cell"
          size="small"
          @change="handleEdit(scope.$index,scope.row)"
        /> <span style="margin-left: 10px">
          {{ scope.row.saleCount }}
        </span>
      </template>
    </ElTableColumn>
  </ElTable>
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
      fromData: this.tableData,
      status: []
    }
  },
  methods: {
    handleEdit(index, row) {
      this.tableData[index]["saleCount"] = row.saleCount
    }
  }
}
</script>

<style>
  .edit-cell {
    width: 50px
  }
  .tb-edit .el-input {
    display: none
  }
  .tb-edit .current-row .el-input {
    display: block
  }
  .tb-edit .current-row .el-input+span {
    display: none
  }
</style>
