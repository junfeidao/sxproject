<template>
  <div style="float:left;margin-top:50px;width:800px;">
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="name" label="姓名" width="180" />
      <ElTableColumn prop="value" label="数量" width="180" />
      <ElTableColumn label="改变数量" width="180">
        <template slot-scope="scope">
          <input class="input-one">
        </template>
      </ElTableColumn>
      <ElTableColumn label="确认修改" width="180">
        <template slot-scope="scope">
          <ElButton class="button-one" type="primary" @click="showout(scope.$index)">
点击修改
</ElButton>
        </template>
      </ElTableColumn>
      <ElTableColumn label="提交" width="180">
        <template slot-scope="scope">
          <ElButton type="primary" @click="showdown(scope.$index)">
提交
</ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>
<script>
var Input1 = document.getElementsByClassName("input-one")
var Button1 = document.getElementsByClassName("button-one")
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showout(index) {
      if (Input1[index].style.display === "block") {
        Input1[index].style.display = "none"
        Button1[index].innerHTML = "点击修改"
      } else {
        Input1[index].style.display = "block"
        Button1[index].innerHTML = "确认修改"
      }
    },
    showdown(index) {
      var value = Input1[index].value
      this.$emit("inputtable", index, value)
    }
  }
}
</script>
<style>
.input-one {
  display: none;
  width: 100px;
  height: 35px;
  border-radius: 6px;
}
</style>
