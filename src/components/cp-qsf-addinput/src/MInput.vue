<template>
  <div class="cp-qsf-addinput">
    <div v-if="isEdit" class="addInput" @click="isEdit=false">
      <i class="el-icon-circle-plus" />
    </div>
    <div v-else class="myForm">
      <input
        v-model="name"
        type="text"
        class="leftinp"
      >
      <input
        v-model.number="volume"
        type="text"
        class="rightinp"
      >
      <ElButton
        type="primary"
        size="small"
        round
        @click.stop="handleInput(name, volume)"
      >
        确定
      </ElButton>
      <ElButton
        type="danger"
        size="small"
        round
        @click.stop="reviewInput"
      >
        取消
      </ElButton>
    </div>
    <p v-if="isPrompt">
      请输入正确格式
    </p>
  </div>
</template>

<script>
export default {
  name: 'CpQsfAddinput',
  data() {
    return {
      isEdit: true,
      isPrompt: false,
      name: '',
      volume: ''
    }
  },
  computed: {
    address() {
      var name = this.name
      var volume = this.volume
      return {
        name, volume
      }
    }
  },
  watch: {
    address() {
      if (this.name === '' || this.volume === '' || isNaN(this.volume)) {
        this.isPrompt = true
      } else {
        this.isPrompt = false
      }
    }
  },
  methods: {
    handleInput(name, volume) {
      if (name !== '' && volume !== '' && !isNaN(volume)) {
        this.$emit('handleInput', name, volume)
        this.name = ''
        this.volume = ''
        this.isEdit = true
      }
    },
    reviewInput() {
      this.name = ''
      this.volume = ''
      this.isEdit = true
      this.isPrompt = false
    }
  }
}
</script>

<style lang="less">
.cp-qsf-addinput {
  width: 350px;
  height: 50px;
  border-bottom: 1px #eee;
  border-style: none none solid none;
  position: relative;
  .addInput {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .myForm {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftinp {
      width: 50px;
      height: 30px;
    }
    .rightinp {
      width: 30px;
      height: 30px;
    }
  }
  p {
      color: red;
      font-size: 12px;
    }
}
</style>

