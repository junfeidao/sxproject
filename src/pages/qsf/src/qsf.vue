<template>
  <div class="home">
    <MChart :value="chartData" />
    <MTable :table-data="tableData" @change="handleTableChange" />
  </div>
</template>

<script>
import MChart from "@/components/cp-qsf-chart/index.js"
import MTable from "@/components/cp-qsf-table/index.js"

export default {
  name: "Home",
  components: {
    MChart,
    MTable
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
      ]
    }
  },
  computed: {
    chartData() {
      return this.tableData.map(item => {
        return item.volume
      })
    }
  },
  methods: {
    handleTableChange(index, value) {
      this.setValue(index, value)
    },
    setValue(index, value) {
      this.tableData[index]["volume"] = value
    }
  }
}
</script>
