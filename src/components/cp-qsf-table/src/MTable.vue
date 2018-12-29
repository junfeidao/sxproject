<template>
<div class="tab">
    <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="name" label="种类" width="180"></el-table-column>
        <el-table-column prop="volume" label="销量" width="180"></el-table-column>
        <!-- <HelloWorld :tableData="tableData3" :slot-scope="scope"></HelloWorld> -->
    </el-table>
</div>
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

<style>
.tab {
    width: 400px;
    height: 407px;
    position: absolute;
    top: 100px;
    right: 200px;
}
</style>