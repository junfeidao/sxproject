<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="种类" width="180"></el-table-column>
        <el-table-column prop="volume" label="销量" width="180"></el-table-column>
        <!-- <HelloWorld :tableData="tableData3" :slot-scope="scope"></HelloWorld> -->
    </el-table>
</template>

<script>
    export default {
        name:"tab",
        props:{
            tableData:{
                type: Array
            }
        }
        
    }
</script>