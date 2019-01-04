<template>
  <div v-show="show">
    <ElInput
      v-model="tempValue"
      placeholder="请输入温度"
      width="20"
      @input="input"
    />
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
    }
  },
  computed: {},
  methods: {
    /* comfirmInformation() {
      //this.show = false;
    } */
    input() {
      // this.show = false;
      const tempValue = this.tempValue
      this.$emit("input", tempValue)
    }
  }
}
</script>
