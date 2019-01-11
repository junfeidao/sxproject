<template>
  <div class="home">
    <MeEcharts :array="array" msg="Welcome to Your Vue.js App" />
    <MeTable :table-data="tableData" />
  </div>
</template>

<script>
// @ is an alias to /src
import MeEcharts from "@/components/cp-wzh-Echarts/index.js"
import MeTable from "@/components/cp-wzh-Table/index.js"

export default {
  name: "Home",
  components: {
    MeEcharts,
    MeTable
  },
  data() {
    return {
      tableData: [
        { name: "A", value: "20000" },
        { name: "B", value: "11111" },
        { name: "C", value: "20000" },
        { name: "D", value: "20000" }
      ]
    }
  },
  computed: {
    array() {
      return this.tableData.map(item => {
        return {
          name: item.name,
          value: item.value
        }
      })
    }
  }
}
</script>
