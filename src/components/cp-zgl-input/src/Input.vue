<template>
  <div v-show="show">
    <ElInput
      v-model="array"
      placeholder="请输入温度"
      width="20"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  /* props: {
    array: {
      type: Number,
      default: Infinity
    }
  }, */
  data() {
    return {
      dayValue: "",
      tempValue: "",
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
      const tempValue = this.array
      this.$emit("input", tempValue)
    }
  }
}
</script>
