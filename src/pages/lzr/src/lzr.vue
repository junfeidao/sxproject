<template>
  <div class="box">
    <Lzrline :table-data="getTemperature" />
    <div>
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn type="index" width="80" />
        <ElTableColumn prop="date" label="date" width="180" />
        <ElTableColumn prop="week" label="week" width="180" />
        <ElTableColumn prop="temperature" label="温度" />
      </ElTable>
    </div>
  </div>
</template>

<script>
import lzrline from '@/components/cp-lzr/broken-line-graph/index.js'
export default {
  components: {
    lzrline // es6注册组件 line:line  "broken-line" :brokenLine
  },
  data() {
    return {
      tableData: [{
        date: '2018-10-24',
        week: 'Mon',
        temperature: 3
      }, {
        date: '2018-10-25',
        week: 'Tue',
        temperature: 2
      }, {
        date: '2018-10-26',
        week: 'Wed',
        temperature: 5
      }, {
        date: '2018-10-27',
        week: 'Thu',
        temperature: 4
      }, {
        date: '2018-10-28',
        week: 'Fri',
        temperature: 5
      }, {
        date: '2018-10-29',
        week: 'Sat',
        temperature: 2
      }, {
        date: '2018-10-30',
        week: 'Sun',
        temperature: 3
      }]
    }
  },
  computed: {
    getTemperature() {
      return this.tableData.map((item) => {
        return item.temperature
      })
    }
  },
  methods: {
    indexMethod(index) {
      return index * 2
    }

  }
}
</script>
<style>
.box{
  display: flex;
  flex-direction: row;
}
</style>
