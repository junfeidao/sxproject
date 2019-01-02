<template>
    <div class="line" style="width: 600px;height:400px;">
    <!-- {{getTemperature}} -->
    </div>
</template>

<script>
let echarts=require('echarts');
export default {
  props:{
      tableData:{
          type:Array,
          default:function(){
              return []
          }
      }
  }
  ,
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
        data: this.tableData,
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
