<template>
  <div class="box">
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn type="index" label="序号" width="50" />
      <ElTableColumn prop="name" label="种类" width="90" />
      <ElTableColumn prop="number" label="销量" width="100">
        <template slot-scope="scope">
        <el-input class="login-form-input"  v-model="scope.row.number"></el-input> 
      </template>
      </ElTableColumn>
    </ElTable>
    <Table :value="chartData" />
  </div>
</template>
<script>
import Table from '@/components/cp-thq-table/src/Table.vue'
export default {
  components: {
    Table
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
  computed:{
          chartData(){
            return this.tableData.map(item =>{
              return item.number
            })
          }
        }
    }
</script>
<style>
 .box{
     display: flex;
     flex-direction:row-reverse;
 }
.login-form-input .el-input__inner {
     border: 0 none;  
     height:30px ;
    }
</style>
