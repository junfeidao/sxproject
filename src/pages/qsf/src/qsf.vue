<template>
  <div class="qsf">
    <MChart :value="chartData" :chartname="chartName" />
    <div class="qsf-tab">
      <MTable :table-data="tableData" @change="handleTableChange" @deleteTabline="delTab" />
      <MInput @handleInput="handleInput" />
    </div>
  </div>
</template>

<script>
import MChart from "@/components/cp-qsf-chart/index.js"
import MTable from "@/components/cp-qsf-table/index.js"
import MInput from "@/components/cp-qsf-addinput/index.js"

export default {
  name: "Qsf",
  components: {
    MChart,
    MTable,
    MInput
  },
  data() {
    return {
      tableData: [
        {
          name: "衬衫",
          volume: "5"
        },
        {
          name: "羊毛衫",
          volume: "20"
        },
        {
          name: "雪纺衫",
          volume: "36"
        },
        {
          name: "裤子",
          volume: "10"
        },
        {
          name: "高跟鞋",
          volume: "10"
        },
        {
          name: "袜子",
          volume: "20"
        }
      ],
      change: ''
    }
  },
  computed: {
    chartData() {
      return this.tableData.map(item => {
        return item.volume
      })
    },
    chartName() {
      return this.tableData.map(item => {
        return item.name
      })
    }
  },
  methods: {
    handleTableChange(index, value) {
      this.setValue(index, value)
    },
    setValue(index, value) {
      this.tableData[index]["volume"] = value
    },
    handleInput(name, volume) {
      if (this.tableData.length < 13) {
        this.tableData.push({ 'name': name, 'volume': volume })
      }
    },
    delTab(index) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
.qsf {
  .qsf-tab {
    width: 430px;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;
  }
}

</style>
