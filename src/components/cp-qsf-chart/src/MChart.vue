<template>
  <div class="cp-qsf-chart" />
</template>
<script >
// 引入echarts
var echarts = require("echarts")
// 初始化echart
export default {
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    chartname: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    value() {
      this.draw()
    }
  },
  // 在vue渲染到都没元素时启用回调函数
  mounted() {
    this.initChart()
    this.draw()
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$el)
    },
    draw() {
      // 指定图表的配置项和数据
      var options = {
        title: {
          text: '几种衣物的销量图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          name: '种类',
          data: this.chartname
        },
        yAxis: {
          name: '销量'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: this.value
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(options)
    }
  }
}
</script>

<style lang="less">
  .cp-qsf-chart {
    width: 800px;
    height: 400px;
    position: relative;
    left: 0;
    top: 50px;
  }
</style>
