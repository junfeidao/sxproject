<template>
  <ElTable :data="tableData" class="tab">
    <ElTableColumn label="种类" width="130">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          {{ scope.row.name }}
        </span>
      </template>
    </ElTableColumn>
    <ElTableColumn label="销量" width="130">
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
        >
      </template>
    </ElTableColumn>
    <ElTableColumn label="操作">
      <template slot-scope="scope">
        <ElButton
          v-if="!status[scope.$index].isEdit"
          size="mini"
          @click="handleClickEdit(scope.$index)"
        >
          编辑
        </ElButton>
        <ElButton
          v-else
          size="mini"
          @click="submitValue(scope.$index)"
        >
          确定
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
      status: [],
      showInput: false
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
    }
  }
}
</script>

<style>
.tab {
    width: 430px;
    height: 500px;
    position: absolute;
    top: 100px;
    right: 80px;
}
input {
  width: 30px;
}
</style>
