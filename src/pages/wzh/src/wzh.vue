<template>
  <div class="home">
    <MeEcharts :table-data="tableData" msg="Welcome to Your Vue.js App" />
    <MeTable :table-data="tableData" @inputtable="handclick" />
    <MeForm @divSub="handleSubInput" />
  </div>
</template>

<script>
// @ is an alias to /src
import MeEcharts from "@/components/cp-wzh-Echarts/index.js"
import MeTable from "@/components/cp-wzh-Table/index.js"
import MeForm from "@/components/cp-wzh-form/index.js"

export default {
  name: "Home",
  components: {
    MeEcharts,
    MeTable,
    MeForm
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
    tab() {
      return this.tableData.map(item => {
        return item.value
      })
    }
  },

  methods: {
    handleSubInput({ ind, val }) {
      console.log("zhi", ind)
      this.setValue(ind, val)
    },
    setValue(ind, val) {
      this.tableData.push({
        name: ind,
        value: val
      })
    },
    handclick(index, value) {
      this.tableData[index].value = value
    }
  }
}
</script>
