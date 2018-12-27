<template>
    <div style="width: 600px;height:400px;"></div>
</template>
<script>
let echarts=require('echarts');
export default {
  data(){

  },
  methods:{
      drawLine(){
      this.myChart.setOption({

        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [3, 2, 5, 4, 5, 2, 3],
        type: 'line',
        areaStyle: {}
    }]

})
      }
  },
  mounted(){
     this.myChart=echarts.init(this.$el);//初始化
     this.drawLine()
  }
}
</script>
