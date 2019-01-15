<template>
  <div class="thq box">
    <MyEcharts :data-number="chartData" :data-name="chartName" />
    <div>
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn type="index" label="序号" width="50" />
        <ElTableColumn prop="name" label="种类" width="90" />
        <ElTableColumn prop="number" label="销量" width="100">
          <template slot-scope="scope">
            <ElInput v-model="scope.row.number" class="thq-input" />
          </template>
        </ElTableColumn>
      </ElTable>
      <ThqForm :table-data="tableData" />
    </div>
  </div>
</template>
<script>
import MyEcharts from '@/components/cp-thq-table/index.js'
import ThqForm from '@/components/cp-thq-form/index.js'
export default {
  components: {
    MyEcharts,
    ThqForm
  },
  data() {
    return {
      tableData: [
        {
          name: '衬衫',
          number: '5'
        },
        {
          name: '羊毛衫',
          number: '20'
        },
        {
          name: '雪纺衫',
          number: '36'
        },
        {
          name: '裤子',
          number: '10'
        },
        {
          name: '高跟鞋',
          number: '10'
        },
        {
          name: '袜子',
          number: '20'
        }
      ]
    }
  },
  computed: {
    chartData() {
      return this.tableData.map(item => {
        return item.number
      })
    },
    chartName() {
      return this.tableData.map(item => {
        return item.name
      })
    }
  }
}
</script>
<style lang="less">
.thq{
    display: flex;
    flex-direction:row;
    .thq-input {
      .el-input__inner {
        border: 0 none;
        height:30px ;
      }
    }
    .Add{
     height: 45px;
     color: #606266;
     border-bottom: 1px solid #ebeef5;
     font-size: 25px;
     line-height: 45px;
     cursor: pointer;
   }
 }
</style>
