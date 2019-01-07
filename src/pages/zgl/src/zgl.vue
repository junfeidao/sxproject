<template>
  <div>
    <div>
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn prop="city" label="城市" width="180" />
        <ElTableColumn prop="day" label="星期几" width="180" />
        <ElTableColumn
          prop="temp"
          label="温度"
          width="180"
        >
          <template slot-scope="scope">
            <!-- <p>{{ status[scope.$index] }}</p> -->
            <span v-if="!status[scope.$index].isEdit">
              {{ status[scope.$index].value }}
            </span>
            <ElInput
              v-else
              v-model="status[scope.$index].value"
              placeholder="请输入温度"
              width="20"
            />
          </template>
        </ElTableColumn>

        <ElTableColumn label="编辑" width="180">
          <template slot-scope="scope">
            <ElButton v-if="!status[scope.$index].isEdit" type="primary" @click="revampClick(scope.row,scope.$index)">
              编辑
            </ElButton>
            <ElButton v-else type="primary" @click="affirmClick(scope.row,scope.$index)">
              确定
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <LineGraph :table-data="arr" />
    </div>
  </div>
</template>
<script>
import LineGraph from '@/components/cp-line-graph/index.js'
export default {
  components: {
    LineGraph
  },
  data() {
    return {
      status: [],
      // show: false,
      tableData: [
        {
          city: "杭州",
          day: "星期一",
          temp: 8
        },
        {
          city: "杭州",
          day: "星期二",
          temp: 15
        },
        {
          city: "杭州",
          day: "星期三",
          temp: 10
        },
        {
          city: "杭州",
          day: "星期四",
          temp: 23
        },
        {
          city: "杭州",
          day: "星期五",
          temp: 20
        },
        {
          city: "杭州",
          day: "星期六",
          temp: 27
        },
        {
          city: "杭州",
          day: "星期日",
          temp: 30
        }
      ]
    }
  },
  computed: {
    arr() {
      return this.tableData.map(item => {
        return item.temp
      })
    }
  },
  created() {
    this.status = this.tableData.map(item => {
      return {
        isEdit: false,
        value: item.temp
      }
    })
  },
  methods: {
    //* 获取每一行所对应的数据
    revampClick(row, index) {
      this.status[index].isEdit = true
    },
    affirmClick(row, index) {
      this.status[index].isEdit = false
      this.tableData[index].temp = this.status[index].value
    }
  }
}
</script>
