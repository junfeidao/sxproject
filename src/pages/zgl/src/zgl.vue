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
        />
        <ElTableColumn
          prop="temp"
          label="修改的温度"
          width="180"
        >
          <template slot-scope="scope">
            <ZglInput
              v-show="scope.$index===number"
              type="text"
              placeholder="请输入温度"
              @input="changeInformation"
            />
          </template>
        </ElTableColumn>

        <ElTableColumn label="编辑" width="180">
          <template slot-scope="scope">
            <ElButton type="primary" @click="revampClick(scope.row,scope.$index)">
              {{ text1 }}
            </ElButton>
          </template>
        </ElTableColumn>
        <ElTableColumn label="确认修改" width="180">
          <template slot-scope="scope">
            <ElButton type="primary" @click="affirmClick(scope.row,scope.$index)">
              {{ text2 }}
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
import ZglInput from "@/components/cp-zgl-input/index.js"
export default {
  components: {
    LineGraph,
    ZglInput
  },
  data() {
    return {
      number: "",
      text1: "修改温度",
      text2: "确认修改",
      tempV: "",
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
  methods: {
    changeInformation(tempValue) {
      //* 这是来自input输入框的数据
      this.tempV = tempValue
      // console.log("00", this.tempV)
    },
    //* 获取每一行所对应的数据
    revampClick(row, index) {
      this.number = index
      // this.number = 2
      // console.log('tag', this.tableData[index].temp)
    },
    affirmClick(row, index) {
      this.number = ""
      // this.number = 2
      if (this.tempV) {
        this.tableData[index].temp = this.tempV
      }
    }
  }
}
</script>
