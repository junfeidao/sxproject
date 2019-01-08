<template>
  <div class="home" style="display:flex;align-items:center">
    <WxEcharts :kind="kind" :salecount="saleCount" />
    <WxTable />
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
      kind: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"], // echarts图表种类
      salecount: [1, 2, 3, 4, 5, 6] // echarts图表销量
    }
  }
}
</script>

