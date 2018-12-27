<template>
  <div style="width: 600px;height:400px;">
  </div>
</template>
<script >
  //引入echarts
  var echarts = require("echarts");
  //初始化echart
  export default {
    //在vue渲染到都没元素时启用回调函数
    mounted() {
      this.draw();
    },
    props:{
      value:{
        // type: Array,
        // default(){
        //   return []
        // }
      }
    },
    methods: {
      initChart(){
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(this.$el);
      },
      draw() {
        // 指定图表的配置项和数据
        var options = {
            title: {
              text: '几种衣物的销量图'
            },
            tooltip: {},
            legend: {
              data:['销量']
            },
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
              name: '种类'
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
        this.myChart.setOption(options);
      }
    },
    watch: {
      value() {
        this.draw()
      }
    },
    mounted(){
      this.initChart()
      this.draw()
    }
  };
</script>
