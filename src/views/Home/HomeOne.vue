<template>
  <div>
    <el-table :data="tableData" style="width: 80%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="400">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <Dialog ref="indexDailog"/> -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="付款日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货人" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货地址" :label-width="formLabelWidth">
          <!-- 下拉选择框 -->
          <!-- <el-select v-model="form.region" placeholder="请选择收货地址">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>-->
          <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <div style="width:100%;height:400px" id="echarts"></div>
  </div>
</template>
<script>
// import Dialog from "../../components/Dialog";
export default {
  components: {
    // Dialog
  },
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      //级联菜单
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            }
          ]
        }
      ],
      //dailog
      dialogFormVisible: false,
      form: {
        date: "",
        name: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {},
  mounted() {
    // 引入 ECharts 主模块
    var echarts = require("echarts/lib/echarts");
    // 引入柱状图
    require("echarts/lib/chart/bar");
    // 引入提示框和标题组件
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 66, 10, 10, 20]
        }
      ]
    });
  },
  destroyed() {},
  methods: {
    //table
    handleEdit(index, row) {
      this.$data.dialogFormVisible = true;
      console.log(row);
      this.$data.form.date = row.date;
      this.$data.form.name = row.name;
      this.$data.value = row.address;
      // this.$messagebox
      //   .confirm("此操作将更改该文件, 是否继续?", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning"
      //   })
      //   .then(() => {
      //     this.$message({
      //       type: "success",
      //       message: "更改成功!"
      //     });
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: "info",
      //       message: "已取消更改"
      //     });
      //   });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    //dailog
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang='less' scoped>
.el-table {
  display: block;
  margin: 0 auto;
}
.el-dialog__body {
  padding: 30px 20px 50px;
}
</style>