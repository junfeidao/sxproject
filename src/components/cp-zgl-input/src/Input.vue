<template>
  <div v-show="show">
    <el-input v-model="tempValue" placeholder="请输入温度" width="20" @input="input"></el-input>
  </div>
</template>

<script>
export default {
  /*  props: {
    show: {
      type: Boolean,
      default: false
    }
  } */
  data() {
    return {
      dayValue: "",
      tempValue: "",
      row: {},
      show: true
    };
  },
  computed: {},
  methods: {
    /* comfirmInformation() {
      //this.show = false;
    } */
    input() {
      //this.show = false;
      let tempValue = this.tempValue;
      this.$emit("input", tempValue);
      //console.log("temp", tempValue);
    }
  }
};
</script>