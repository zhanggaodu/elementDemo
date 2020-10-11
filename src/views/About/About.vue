<template>
  <div>
    <Header/>
    <div class="contain">
      <div class="hello">
        <div v-for="(item, index) in questionData" v-bind:key="index" class="question">
          <div class="num">{{ index + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.title }}</div>
            <!-- 单选框 -->
            <template v-if="item.type === 'radio'">
              <Radio :radioData="item.data" :radioName="index" @radioChange="radioChange"></Radio>
            </template>
            <!-- 多选框 -->
            <template v-else-if="item.type === 'checkbox'">
              <Checkbox
                :checkboxData="item.data"
                :checkboxName="index"
                @checkboxChange="checkboxChange"
              ></Checkbox>
            </template>
            <!-- 填空 -->
            <template v-else-if="item.type === 'textarea'">
              <Textarea
                :textareaName="index"
                style="margin-bottom: 38px;"
                @changeTextarea="changeTextarea"
              ></Textarea>
            </template>
          </div>
        </div>
        <button @click="handleSubmit" class="btn">点击提交</button>
        <Footer/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
export default {
  components: {
    Header,
    Radio,
    Checkbox,
    Textarea,
    Footer
  },
  props: {},
  data() {
    return {
      questionData: [
        {
          id: 1,
          title: "单选题：今年是哪一年？",
          type: "radio",
          data: [
            {
              type: 1,
              label: "2017年",
              value: "a",
              status: false
            },
            {
              type: 1,
              label: "2018年",
              value: "b",
              status: false
            },
            {
              type: 1,
              label: "2019年",
              value: "c",
              status: false
            },
            {
              type: 1,
              label: "2020年",
              value: "d",
              status: false
            },
            {
              type: 2,
              label: "其他",
              value: "",
              status: false
            }
          ]
        },
        {
          id: 2,
          title: "单选题：广东省的冬天会下雪吗？",
          type: "radio",
          data: [
            {
              type: 1,
              label: "会",
              value: "a",
              status: false
            },
            {
              type: 1,
              label: "不会",
              value: "b",
              status: false
            }
          ]
        },
        {
          id: 3,
          title: "多选题：你喜欢的季节有？",
          type: "checkbox",
          data: [
            {
              type: 1,
              label: "春天",
              value: "a",
              status: false
            },
            {
              type: 1,
              label: "夏天",
              value: "b",
              status: false
            },
            {
              type: 1,
              label: "秋天",
              value: "c",
              status: false
            },
            {
              type: 1,
              label: "冬天",
              value: "d",
              status: false
            }
          ]
        },
        {
          id: 4,
          title: "填空题：请问还有什么疑问吗？",
          type: "textarea",
          data: ""
        },
        {
          id: 5,
          title: "多选题：你喜欢的水果有？",
          type: "checkbox",
          data: [
            {
              type: 1,
              label: "苹果",
              value: "a",
              status: false
            },
            {
              type: 1,
              label: "香蕉",
              value: "b",
              status: false
            },
            {
              type: 1,
              label: "桃子",
              value: "c",
              status: false
            },
            {
              type: 1,
              label: "李子",
              value: "d",
              status: false
            },
            {
              type: 2,
              label: "其他",
              value: "",
              status: false
            }
          ]
        }
      ],
      answer: [],
      radioName: 0
    };
  },
  created() {},
  mounted() {
    //完善css
    // let allheight = document.documentElement.clientHeight;
    // document.getElementsByClassName("contain")[0].style.height =
    //   allheight - 140 + "px";
    //&return_data=0&page=1&perpage=10
    // this.$api
    //   .getNewsList({ return_data: 1, page: 1, perpage: 10 })
    //   .then(res => {
    //     console.log(res);
    //   });
    // this.$api.getAll({ return_data: 1 }).then(res => {
    //   console.log(res);
    // });
  },
  // 生命周期-实例销毁离开后调用
  destroyed() {},
  methods: {
    // 单选框
    radioChange(data, name) {
      const question = this.$data.questionData[name];
      for (let item of question.data) {
        //循环数组
        // 如果值相等，即为点击的数据，状态为active，其他normal
        // item.status = data.value === item.value;
        if (data.value === item.value) {
          item.status = true; //把任意题目选中的选项的状态改为true
        } else {
          item.status = false;
        }
      }
    },
    //多选框
    checkboxChange(data, name) {
      const question = this.$data.questionData[name];
      const index = question.data.findIndex(item => item.value === data.value); //findindex 返回适合条件的下标
      question.data[index].status = !question.data[index].status; //状态取反
    },
    //填空
    changeTextarea(data, name) {
      const question = this.questionData[name];
      question.data = data;
    },
    //点击提交
    handleSubmit() {
      const data = this.questionData;
      const params = {};
      for (let question of data) {
        if (question.type === "radio") {
          const index = question.data.findIndex(item => item.status);
          if (index !== -1) {
            params[question.id] = question.data[index].value;
          } else {
            params[question.id] = "";
          }
        } else if (question.type === "checkbox") {
          const arr = [];
          for (let item of question.data) {
            if (item.status) {
              arr.push(item.value);
            }
          }
          params[question.id] = arr;
        } else if (question.type === "textarea") {
          params[question.id] = question.data;
        }
      }
      console.log(params);
    }
  }
};
</script>

<style lang='less' scoped>
.contain {
  text-align: left;
  .question {
    margin-bottom: 38px;
    position: relative;
    // display: inline-block;
    width: 680px;
    height: auto;
    background-color: #fffcf0;
    border-radius: 20px;
    z-index: 0;
    .num {
      position: absolute;
      left: 20px;
      top: 0;
      text-align: center;
      width: 47px;
      height: 46px;
      line-height: 46px;
      font-size: 30px;
      color: #fff;
      background-color: #fcb882;
    }
    .content {
      margin-left: 20px;
      margin-top: 38px;
      display: inline-block;
      width: 520px;
      .title {
        margin-bottom: 38px;
        line-height: 1.5em;
        color: #976e48;
        font-weight: bold;
        font-size: 30px;
        text-align: left;
      }
      /*background: #ff1d5e;*/
    }
  }
}
</style>
