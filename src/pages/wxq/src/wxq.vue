<template>
  <div class="home" style="display:flex;align-items:center">
    <WxEcharts :kind="kinds" :salecount="saleCounts" />
    <WxTable :table-data="tableData" />
  </div>
</template>

<script>
import WxEcharts from '@/components/cp-wxq-echart/index.js'
import WxTable from '@/components/cp-wxq-table/index.js'

export default {
  components: {
    WxEcharts,
    WxTable
  },
  data() {
    return {
      kinds: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"], // echarts图表种类
      saleCounts: [1, 2, 3, 4, 5, 6], // echarts图表销量
      tableData: [{
        kind: '衬衫',
        saleCount: '5'
      }, {
        kind: '羊毛衫',
        saleCount: '20'
      }, {
        kind: '雪纺衫',
        saleCount: '36'
      }, {
        kind: '裤子',
        saleCount: '10'
      }, {
        kind: '高跟鞋',
        saleCount: '10'
      }, {
        kind: '袜子',
        saleCount: '20'
      }]
      // tableData: [{  尝试这种但是会有错误，上方的信息有些重复
      //   kind: this.kinds[0],
      //   saleCount: this.saleCounts[0]
      // }, {
      //   kind: this.kinds[1],
      //   saleCount: this.saleCounts[1]
      // }, {
      //   kind: this.kinds[2],
      //   saleCount: this.saleCounts[2]
      // }, {
      //   kind: this.kinds[3],
      //   saleCount: this.saleCounts[3]
      // }, {
      //   kind: this.kinds[4],
      //   saleCount: this.saleCounts[4]
      // }, {
      //   kind: this.kinds[5],
      //   saleCount: this.saleCounts[5]
      // }]
    }
  }
}
</script>

