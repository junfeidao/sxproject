<template>
  <div style="float:left;margin-top:50px;">
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="name" label="姓名" width="180" />
      <ElTableColumn prop="value" label="数量" width="180" />
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
  }
}
</script>
