<template>
  <ElTable :data="tableData" style="width: 100%;height： 300px">
    <ElTableColumn
      prop="date"
      label="种类"
      width="180"
      height="50"
    />
    <ElTableColumn
      prop="name"
      label="销量"
      width="180"
      height="50"
    />
    <ElTableColumn
      prop="address"
      label="修改"
      height="50"
    />
  </ElTable>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普'
      }]
    }
  }
}
</script>
