<template>
  <ElTable :data="tableData" style="width: 100%;height： 300px">
    <ElTableColumn
      prop="kind"
      label="种类"
      width="180"
      height="50"
    />
    <ElTableColumn
      prop="saleCount"
      label="销量"
      width="180"
      height="50"
    />
    <!-- <ElTableColumn
      prop="address"
      label="修改"
      height="50"
    /> -->
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
      fromData: this.tableData
    }
  }
}
</script>
