<template>
  <ElTable :data="tableData" class="tab">
    <ElTableColumn label="种类" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          {{ scope.row.name }}
        </span>
      </template>
    </ElTableColumn>
    <ElTableColumn label="销量" width="180">
      <template slot-scope="scope">
        <span class="mspan" style="margin-left: 10px">
          {{ scope.row.volume }}
        </span>
        <input v-show="showInput" class="minput" type="text">
      </template>
    </ElTableColumn>
    <ElTableColumn label="操作">
      <template slot-scope="scope">
        <ElButton
          size="mini"
          @click="handleInput(scope.$index)"
        >
          编辑
        </ElButton>
        <ElButton
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index)"
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
      showInput: false
    }
  },
  methods: {
    handleInput(index) {
      var span = document.getElementsByClassName("mspan")
      var input = document.getElementsByClassName("minput")
      span[index].style.display = 'none'
      input[index].style.display = 'block'
    },
    handleDelete(index) {
      var span = document.getElementsByClassName("mspan")
      var input = document.getElementsByClassName("minput")
      span[index].style.display = 'block'
      input[index].style.display = 'none'
      this.$emit("inputValue", index, input[index].value)
    }
  }
}
</script>

<style>
.tab {
    width: 100%;
    height: 500px;
}
input {
  width: 30px;
}
</style>
