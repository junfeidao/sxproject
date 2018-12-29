<template>
  <div style="width:600px;height:400px;"></div>
</template>
<script >
const echarts = require("echarts");

//初始化echarts
export default {
  props: {
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    //指定图表的配置项和数据
    draw() {
      this.myChart.setOption({
        title: { text: "杭州未来一个星期天气走势" },
        tooltip: {},
        xAxis: {
          name: "星期几",
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期天"
          ]
        }, //xAxis表示x轴
        yAxis: {
          name: "气温",
          type: "value"
        }, //xAxis表示y轴
        //
        series: [
          {
            type: "line",
            smooth: true,
            data: this.tableData
          }
        ]
      });
    }
  },
  watch: {
    tableData() {
      this.draw();
    }
  },
  //在vue渲染到都没元素时启用回调函数
  mounted() {
    //在渲染的时候，绘图和挂载根节点
    this.myChart = echarts.init(this.$el);
    console.log("tag", this.$el);
    this.draw();
  }
};
</script>
