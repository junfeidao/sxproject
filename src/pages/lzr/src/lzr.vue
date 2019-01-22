<template>
  <div class="pages-lzr">
    <MLine :table-data="getTemperature" :week="getWeek" />
    <div>
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn type="index" width="50" />
        <ElTableColumn prop="date" label="date" width="150" />
        <ElTableColumn prop="week" label="week" width="120" />
        <ElTableColumn
          prop="temperature"
          label="温度"
          width="100"
        >
          <template slot-scope="scope">
            <ElInput
              v-if="isShow"
              v-model="scope.row.temperature"
              size="mini"
              class="lzrinput"
              @blur="isShow=false"
              @change="handleEdit(scope.$index,scope.row)"
            />
            <span
              v-else
              width="15px"
              height="55px"
              @click.self="isinput"
            >
              {{ scope.row.temperature }}
            </span>
          </template>
        </ElTableColumn>
      </ElTable>
      <ElButton
        v-if="isView"
        style="width:150px"
        @click="toAdd"
      >
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
      isView: true,
      isShow: false
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
    handleEdit(index) {
      this.tableData[index]["temperature"] = index.temperature
    },
    isinput() {
      this.isShow = !this.isShow
    },
    toAdd() {
      this.isView = !this.isView
    },
    submitform() {
      this.isView = !this.isView
    },
    resetform() {
      this.isView = true
    }
  }
}
</script>
<style>
.pages-lzr{
  display: flex;
  flex-direction: row;
}
.lzrinput .el-input__inner{
  border:0 none;
  margin: 0 none;
}
</style>
