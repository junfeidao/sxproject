    option = {
         backgroundColor:{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0, color: 'pink' // 0% 处的颜色
        },{
            offset: 1, color: 'blue' // 100% 处的颜色
        }],
        },
        title: {
            text: '垃圾清运趋势(吨)',
             textStyle:{
                color:'DeepSkyBlue',
                fontSize:25
            },
            left:50,
            top:10,
            
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['当日清理数','昨日清理数'],
            icon: "line",
            textStyle:{
                        color:'white',
                        fontSize:16
            },
            right:40,
            top:10,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data : ['3时','5.5时','6时','8.5时','9时','11.5时','12时','14.5时','15时','17.5时','18时','20.5时','21时','22.5时','24时'],
             axisLabel: {
                    interval:1,
                    textStyle: {
                        color: 'white'
                        }
                        },        
                        axisTick:{
                            show:false,
                            },
            
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: 'white'
                    }
                    },        
                    axisTick:{
                        show:false,
                        },
                        axisLine: {
                            show: false,
                            },
               min:0,
               max:12000,
               splitNumber:4,
               splitLine: {
                   lineStyle: {
                       type:'dotted',
                       color:'blue'
                       }
                       }
                       },
        series: [
            {
                name:'当日清理数',
                type:'line',
                data:[5100,3400,5900,5100,9100,6200,6100,3100,3500,4000,4500,6000,4500,4600,4800    ],
                symbol:'none',
            },
            {
                name:'昨日清理数',
                type:'line',
                data:[3200,5100,3400,6500,12000,9000,10000,3500,4500,5000,6000,3500,5800,5000,4200],
                symbol:'none',
            },
        ]
    };
