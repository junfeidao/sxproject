<template>
    <el-table :data="tableData" style="width: 100%">
     <el-table-column  type="index" label="序号" width="50"></el-table-column>
     <el-table-column prop="name" label="种类" width="90"></el-table-column>
     <el-table-column prop="number" label="销量" width="70"></el-table-column> 
    </el-table>
</template>

<script>
    export default {
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
                    },
                ]
            }
        },
        
    }
</script>
<style>
 
</style>