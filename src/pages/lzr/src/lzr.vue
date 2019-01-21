<template>
  <div class="box">
    <MLine :table-data="getTemperature" :week="getWeek" class="box-left" />
    <div>
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn type="index" width="80" />
        <ElTableColumn prop="date" label="date" width="180" />
        <ElTableColumn prop="week" label="week" width="150" />
        <ElTableColumn prop="temperature" label="温度">
          <template slot-scope="cope">
            <ElInput v-model="cope.row.temperature" class="lzrinput" />
          </template>
        </ElTableColumn>
      </ElTable>
      <ElButton v-if="isView" style="width:150px" @click="toAdd">
        +
      </ElButton>
      <MForm
        v-else
        :table-data="tableData"
        @sub="submitform"
        @reset="resetform"
      />
    </div>
  </div>
</template>

<script>
import MLine from "@/components/cp-lzr-echart/index.js"
import MForm from "@/components/cp-lzr-form/index.js"

export default {
  components: {
    MLine, // es6注册组件 line:line  "broken-line" :brokenLine
    MForm
  },

  data() {
    return {
      tableData: [{
        date: '2018-10-24',
        week: 'Mon',
        temperature: 3
      }, {
        date: '2018-10-25',
        week: 'Tue',
        temperature: 2
      }, {
        date: '2018-10-26',
        week: 'Wed',
        temperature: 5
      }, {
        date: '2018-10-27',
        week: 'Thu',
        temperature: 4
      }, {
        date: '2018-10-28',
        week: 'Fri',
        temperature: 5
      }, {
        date: '2018-10-29',
        week: 'Sat',
        temperature: 2
      }, {
        date: '2018-10-30',
        week: 'Sun',
        temperature: 3
      }],
      isView: true
    }
  },
  computed: {
    getTemperature() {
      return this.tableData.map((item) => {
        return item.temperature
      })
    },
    getWeek() {
      return this.tableData.map((item) => {
        return item.week
      })
    }
  },
  methods: {
    indexMethod(index) {
      return index * 2
    },
    toAdd() {
      this.isView = false
    },
    submitform() {
      this.isView = true
    },
    resetform() {
      this.isView = true
    }
  }
}
</script>
<style>
.box{
  display: flex;
  flex-direction: row;
}
.lzrinput .el-input__inner{
  border:0 none;
}
</style>
