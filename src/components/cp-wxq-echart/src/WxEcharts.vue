<template>
  <div style="width: 600px;height:400px;" />
</template>
<script >
var echarts = require("echarts")
export default {
  props: {
    saleCount: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: { // computed触发后需要重新渲染图表,这里的监听会在编辑时就触发，不太好，编辑结束以后再触发更好
    saleCount() {
      this.draw()
      console.log("监听事件")
    }
  },
  mounted() {
    this.initChart()
    this.draw()
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$el) // 初始化并绑定容器，之前时用JS绑定id，
      // 但是用this.$el,组件的复用性更好,$el是vue实例使用的根DOM元素
    },
    draw() {
      var options = {
        title: {
          text: '几种衣物的销量图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          name: '种类'
        },
        yAxis: {
          name: '销量'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: this.saleCount
        }]
      }
      this.myChart.setOption(options)
    }
  }
}
</script>
