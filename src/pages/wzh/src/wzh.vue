<template>
  <div class="home">
    <MeEchart :array="array" msg="Welcome to Your Vue.js App" />
    <MeTable :table-data="tableData" />
  </div>
</template>

<script>
// @ is an alias to /src
import MeEchart from "@/components/cp-wzh-echart/index.js"
import MeTable from "@/components/cp-wzh-table/index.js"

export default {
  name: "Home",
  components: {
    MeEchart,
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
