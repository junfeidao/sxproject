 <template>
  <div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="city" label="城市" width="180"></el-table-column>
        <el-table-column prop="day" label="星期几" width="180"></el-table-column>
        <el-table-column prop="temp" label="温度" width="180" v-if="number==1"></el-table-column>
        <el-table-column prop="temp" label="温度" width="180" v-else-if="number==2">
          <template slot-scope="scope">
            <zglInput type="text" placeholder="请输入温度" @input="changeInformation"></zglInput>
          </template>
        </el-table-column>

        <el-table-column label="编辑" width="180">
          <template slot-scope="scope">
            <el-button type="primary" @click="Click(scope.row,scope.$index)">{{text}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <BrokenLineGraph :tableData="arr"></BrokenLineGraph>
    </div>
  </div>
</template>
  <script>
import BrokenLineGraph from "@/components/cp-zgl/BrokenLineGraph.vue";
import zglInput from "@/components/cp-zgl/Input.vue";

export default {
  components: {
    BrokenLineGraph,
    zglInput
  },
  data() {
    return {
      number: 1,
      text: "修改温度",
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
    };
  },
  computed: {
    arr() {
      return this.tableData.map(item => {
        return item.temp;
      });
    }
  },
  methods: {
    changeInformation(tempValue) {
      // console.log("changeInformation", tempValue);
      //*这是来自input输入框的数据
      this.tempV = tempValue;
      console.log("00", this.tempV);
    },
    //怎么把这2个数据给关联起来？怎么把changeInformation的数据传给handleClick？
    //*获取每一行所对应的数据
    Click(row, index) {
      this.number = 2;
      this.text = "确认修改";
      this.tableData[index].temp = this.tempV;
    }
  }
};
</script> 
