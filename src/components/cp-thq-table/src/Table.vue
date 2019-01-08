<template>
  <div id="myChart" style="width: 800px;height:400px;" />
</template>

<script >
const echarts = require("echarts")
export default {
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
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
