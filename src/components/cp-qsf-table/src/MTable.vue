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
        <span v-show="mspan" style="margin-left: 10px">
          {{ scope.row.volume }}
        </span>
        <!-- <input v-show="minput" type="text"> -->
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
          @click="handleDelete"
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
      minput: false,
      mspan: true
    }
  },
  methods: {
    handleInput(index) {
      console.log(index)
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
