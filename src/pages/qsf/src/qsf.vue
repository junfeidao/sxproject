<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MChart :value="chartData" />
    <MTable :table-data="tableData" />
    <MInput @divSub="handleSubInput" />
  </div>
</template>

<script>
// @ is an alias to /src
import MChart from '@/components/cp-qsf-chart/index.js'
import MTable from '@/components/cp-qsf-table/index.js'
import MInput from '@/components/cp-qsf-input/index.js'

export default {
  name: 'Home',
  components: {
    MChart,
    MTable,
    MInput
  },
  data() {
    return {
      tableData: [{
        name: '衬衫',
        volume: '5'
      }, {
        name: '羊毛衫',
        volume: '20'
      }, {
        name: '雪纺衫',
        volume: '36'
      }, {
        name: '裤子',
        volume: '10'
      }, {
        name: '高跟鞋',
        volume: '10'
      }, {
        name: '袜子',
        volume: '20'
      }]
    }
  },
  computed: {
    chartData() {
      return this.tableData.map(item => {
        return item.volume
      })
    }
  },
  methods: {
    handleSubInput({ index, value }) {
      console.log("tab::::value:", index, value)
      this.setValue(index, value)
    },
    setValue(index, value) {
      this.tableData[index]['volume'] = value
    }
  }
}
</script>
