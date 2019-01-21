<template>
  <div style="width: 800px;height:400px;" />
</template>

<script >
const echarts = require("echarts")
export default {
  props: {
    dataNumber: {
      type: Array,
      default() {
        return []
      }
    },
    dataName: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    dataNumber() {
      this.drawLine()
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$el)
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例

      // 绘制图表
      this.myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: this.dataName
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.dataNumber
        }]
      })
    }
  }
}
</script>
