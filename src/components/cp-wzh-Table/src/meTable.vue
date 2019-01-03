<template>
  <ElTable :data="tableData" style="width: 100%">
    <ElTableColumn prop="name" label="日期" width="180" />
    <ElTableColumn prop="value" label="姓名" width="180" />
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
  }
}
</script>
