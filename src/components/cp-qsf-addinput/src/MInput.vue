<template>
  <div class="Inp" @click="isEdit=false">
    <i v-if="isEdit" class="el-icon-circle-plus" />
    <div v-else class="box">
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
      <ElButton
        type="danger"
        size="small"
        round
        @click.stop="isEdit=true"
      >
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
      isEdit: true
    }
  },
  methods: {
    handleInput(event) {
      event.stopPropagation()
      var name = this.$refs.name.value
      var volume = this.$refs.volume.value
      if (name !== '' && volume !== '') {
        this.$emit('handleInput', { name, volume })
        this.isEdit = true
      }
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
  position: relative;
}
.leftinp {
  width: 50px;
  height: 30px;
  float: left;
  margin-left: 20px;
}
.rightinp {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 40px;
  margin-right: 30px;
}
.el-icon-circle-plus {
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}
</style>

