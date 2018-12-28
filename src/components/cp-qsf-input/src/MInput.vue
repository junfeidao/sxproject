<template>
<div style="margin-top: 15px;">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option v-for="(value,key) in options" :key="key" :label="value" :value="key"></el-option>
    </el-select>
    <el-input placeholder="请输入销量" v-model="input5" class="input-with-select"></el-input>
    <el-button slot="append" icon="el-icon-upload" @click="divclick">确定</el-button>
</div>
</template>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      options:[
        "衬衫",
        "羊毛衫",
        "雪纺衫",
        "裤子", 
        "高跟鞋",
        "袜子" 
      ],
      input3: '',
      input4: '',
      input5: '',
      select: 3
    }
  },
  methods: {
    divclick: function() {
      const index = this.select;
      const value = this.input5
      // console.log("select:::::::value:",{index,value})
      this.$emit('divSub', {index,value});
    }
  }
}
</script>