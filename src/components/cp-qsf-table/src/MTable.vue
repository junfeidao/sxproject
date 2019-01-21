<template>
  <ElTable :data="tableData" class="cp-qsf-table">
    <ElTableColumn label="种类" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          {{ scope.row.name }}
        </span>
      </template>
    </ElTableColumn>
    <ElTableColumn label="销量" width="100">
      <template slot-scope="scope">
        <span
          v-if="!status[scope.$index].isEdit"
          class="mspan"
          style="margin-left: 10px"
        >
          {{ scope.row.volume }}
        </span>
        <input
          v-else
          v-model="status[scope.$index].value"
          class="minput"
          type="text"
          @blur="changeInput(scope.$index)"
        >
      </template>
    </ElTableColumn>
    <ElTableColumn label="操作" width="150">
      <template slot-scope="scope">
        <ElButton
          v-if="!status[scope.$index].isEdit"
          size="mini"
          type="primary"
          @click="handleClickEdit(scope.$index)"
        >
          编辑
        </ElButton>
        <ElButton
          v-else
          size="mini"
          type="success"
          @click="submitValue(scope.$index)"
        >
          确定
        </ElButton>
        <ElButton
          size="mini"
          type="danger"
          @click="delTab(scope.$index)"
        >
          删除
        </ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script>
export default {
  name: "Tab",
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
      // showInput: false
    }
  },
  watch: {
    tableData: {
      immediate: true,
      handler() {
        this.status = this.tableData.map(item => {
          return {
            isEdit: false,
            value: item.volume
          }
        })
      }
    }
  },
  methods: {
    handleClickEdit(index) {
      this.status[index].isEdit = true
    },
    submitValue(index) {
      this.status[index].isEdit = false
      this.$emit("change", index, this.status[index].value)
    },
    changeInput(index) {
      this.status[index].isEdit = false
    },
    delTab(index) {
      this.$emit('deleteTabline', index)
    }
  }
}
</script>

<style lang="less">
.cp-qsf-table {
  width: 350px;
}
</style>

