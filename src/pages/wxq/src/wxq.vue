<template>
  <div class="home" style="display:flex;align-items:center">
    <WxEcharts :sale-count="saleCount" :kind="kind" />
    <div class="wrap">
      <WxTable :table-data="tableData" />
      <WxDialog :table-data="tableData" />
    </div>
  </div>
</template>

<script>
import WxEcharts from '@/components/cp-wxq-echart/index.js'
import WxTable from '@/components/cp-wxq-table/index.js'
import WxDialog from '@/components/cp-wxq-dialog/index.js'

export default {
  components: {
    WxEcharts,
    WxTable,
    WxDialog
  },
  data() {
    return {
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
    }
  },
  computed: {
    saleCount() {
      return this.tableData.map(item => item.saleCount)
    },
    kind() {
      return this.tableData.map(item => item.kind)
    }
  }
}
</script>

<style>
  .wrap {
    display: flex;
    flex-direction: column
  }
</style>
