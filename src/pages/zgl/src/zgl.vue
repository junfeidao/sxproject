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
      <AddButton @obj="getObj" />
      <LineGraph :table-data="arr" :day="day" />
    </div>
  </div>
</template>
<script>
import LineGraph from '@/components/cp-line-graph/index.js'
import AddButton from '@/components/cp-zgl-add-button/index.js'
export default {
  components: {
    LineGraph,
    AddButton
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
    },
    day() {
      return this.tableData.map(item => {
        return item.day
      })
    }

  },
  /* watch: {
    tableData(newVal, oldVal) {
      console.log(newVal)
      console.log('tag', oldVal)
    }
  }, */
  mounted() {
    this.status = this.tableData.map(item => {
      // console.log('tag', this.status)
      return {
        isEdit: false,
        value: item.temp

      }
    })
  },
  updated() {

  },
  methods: {
    //* 获取每一行所对应的数据
    revampClick(row, index) {
      this.status[index].isEdit = true
    },
    affirmClick(row, index) {
      this.status[index].isEdit = false
      this.tableData[index].temp = this.status[index].value
    },
    getObj(city, day, temp) {
      console.log('city', city)
      console.log('day', day)
      console.log('temp', temp)

      const obj = {
        city: city,
        day: day,
        temp: temp
      }
      this.tableData.push(obj)
      this.status = this.tableData.map(item => {
      // console.log('tag', this.status)
        return {
          isEdit: false,
          value: item.temp

        }
      })
      // console.log('tag', this.tableData)
      return this.tableData
    }
  }
}
</script>
