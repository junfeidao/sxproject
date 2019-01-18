<template>
  <div class="cp-qsf-addinput" @click="isEdit=false">
    <i v-if="isEdit" class="el-icon-circle-plus" />
    <div v-else class="box">
      <input
        v-model="name"
        type="text"
        class="leftinp"
      >
      <input
        v-model="volume"
        type="text"
        class="rightinp"
      >
      <ElButton
        type="primary"
        size="small"
        round
        @click.stop="handleInput"
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
      <p v-if="isPrompt">
        请输入正确格式
      </p>
    </div>
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
      if (this.name === '' || this.volume === '' || !/^\d+$/.test(this.volume)) {
        this.isPrompt = true
      } else {
        this.isPrompt = false
      }
    }
  },
  methods: {
    handleInput() {
      if (this.name !== '' && this.volume !== '' && /^\d+$/.test(this.volume)) {
        this.$emit('handleInput', this.name, this.volume)
        this.name = ''
        this.volume = ''
        this.isEdit = true
      }
    },
    reviewInput() {
      this.name = ''
      this.volume = ''
      this.isEdit = true
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
  padding-top: 10px;
  position: relative;
  .el-icon-circle-plus {
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
  }
  .box {
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
      margin-right: 45px;
    }
    p {
      color: red;
      font-size: 12px;
    }
  }
}
</style>

