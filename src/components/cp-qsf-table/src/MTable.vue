<template>
  <div class="tab">
    <ElTable :data="tableData">
      <ElTableColumn prop="name" label="种类" width="180" />
      <ElTableColumn prop="volume" label="销量" width="180" />
    <!-- <HelloWorld :tableData="tableData3" :slot-scope="scope"></HelloWorld> -->
    </ElTable>
  </div>
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

<style>
.tab {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 40px;
    right: 200px;
}
</style>
