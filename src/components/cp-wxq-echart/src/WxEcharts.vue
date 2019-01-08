<template>
  <div style="width: 600px;height:400px;">
    <div>{{ kind }}</div>
    <div>{{ salecount }}</div>
  </div>
</template>
<script >
var echarts = require("echarts")
export default {
  props: {
    kind: Array,
    salecount: Array
  },
  mounted() {
    this.initChart()
    this.draw()
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$el) // 初始化并绑定容器之前时用JS绑定id，
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
          data: this.kind,
          name: '种类'
        },
        yAxis: {
          name: '销量'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: this.salecount
        }]
      }
      this.myChart.setOption(options)
      console.log(this.kind)
    }
  }
}
</script>
