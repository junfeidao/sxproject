<template>
  <div class="Inp" @click="viewInput">
    <div v-if="isEdit" class="box">
      <input ref="name" type="text" class="leftinp">
      <input ref="volume" type="text" class="rightinp">
      <ElButton
        type="primary"
        size="small"
        round
        @click="handleInput"
      >
        确定
      </ElButton>
      <ElButton type="danger" size="small" round>
        取消
      </ElButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inp',
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    viewInput() {
      this.isEdit = true
    },
    handleInput() {
      var name = this.$refs.name.value
      var volume = this.$refs.volume.value
      this.$emit('handleInput', { name, volume })
    }
  }
}
</script>

<style>
.Inp {
  width: 300px;
  height: 50px;
  border-bottom: 1px #eee;
  border-style: none none solid none;
  padding-top: 10px;
}
.leftinp {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 20px;
}
.rightinp {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 57px;
}
</style>

