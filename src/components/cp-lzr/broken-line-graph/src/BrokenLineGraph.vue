<template>
  <div class="line" style="width: 600px;height:400px;">
    <!-- {{getTemperature}} -->
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    }, week: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  watch: {
    tableData() {
      this.drawLine()
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$el)// 初始化
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.myChart.setOption({

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.week
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.tableData,
          type: 'line',
          areaStyle: {}
        }]

      })
    }
  }
}
</script>
