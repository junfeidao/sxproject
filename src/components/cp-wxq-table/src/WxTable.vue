<template>
  <div class="cp-wxq-table">
    <ElTable
      :data="tableData"
      class="cp-edit"
      highlight-current-row
      style="width: 100%"
    >
      <ElTableColumn label="种类" width="180px">
        <template slot-scope="scope">
          <span>
            {{ scope.row.kind }}
          </span>
        </template>
      </ElTableColumn>
      <ElTableColumn label="销量" width="180px">
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

<style lang="less">
.cp-wxq-table {
  width: 100%;
  .cp-edit {
    width: 100%;
    .el-input {
      display: none
    }
    .edit-cell {
      width: 50px
    }
    .current-row {
      .el-input {
        display: block
      }
      .el-input+span {
        display: none
      }
    }
  }
}

</style>
