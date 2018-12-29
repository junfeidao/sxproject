<template>
  <ElTable
    :data="tableData"
    style="width: 100%"
  >
    <ElTableColumn
      prop="name"
      label="种类"
      width="180"
    />
    <ElTableColumn
      prop="volume"
      label="销量"
      width="180"
    />
    <!-- <HelloWorld :tableData="tableData3" :slot-scope="scope"></HelloWorld> -->
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
  }

}
</script>
