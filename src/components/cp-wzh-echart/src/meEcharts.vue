<template>
  <div style="width: 400px;height:400px;float:left;" />
</template>

<script>
// 导入echar依赖，在node_modules里面，这里说一下import和require的区别，import需要具体到相对地址，而require则不用，会自动安装
var echarts = require("echarts")
export default {
  props: {
    array: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    array: function() {
      this.draw()
    }
  },
  // 在vue渲染到都没元素时启用回调函数
  mounted() {
    this.draw()
  },
  methods: {
    // 指定图表的配置项和数据
    draw() {
      var myChart = echarts.init(this.$el)// 修改的地方:修改者:朱广龙
      myChart.setOption({
        title: {},
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        }, // 提示框
        series: [
          {
            name: "pie",
            type: "pie",
            data: this.array
          }
        ]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

