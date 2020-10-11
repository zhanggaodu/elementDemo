<template>
  <div class="my-radio">
    <div
      v-for="(item, index) in radioData"
      v-bind:key="index"
      @click="changeRadio(item)"
      class="row"
    >
      <div :class="['radio', item.status ? 'radio-active' :'radio-normal']"></div>
      <!-- 单选里边加填空 -->
      <div v-if="item.type === 2" class="input-container">
        <div class="text">其他</div>
        <div class="input">
          <Textarea
            :textareaName="index"
            :placeholder="'请输入年份'"
            :maxLength="100"
            @changeTextarea="changeTextarea"
          ></Textarea>
        </div>
      </div>
      <div v-else class="label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import Textarea from "./Textarea";
export default {
  name: "Radio",
  components: {
    Textarea
  },
  props: {
    radioData: {
      required: true
    },
    // 新加的
    radioName: {
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    changeRadio(data) {
      this.$emit("radioChange", data, this.radioName);
    },
    changeTextarea(value, name) {
      const data = this.radioData.concat([])[name];
      data.value = value;
      this.$emit("radioChange", data, this.radioName);
    }
  }
};
</script>

<style lang='less' scoped>
.my-radio {
  text-align: left;
  .row {
    margin-bottom: 38px;
    position: relative;
    float: left;
    display: inline-block;
    width: 100%;
    line-height: 38px;
    color: #976e48;
    font-size: 30px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .el-radio /deep/ .el-radio__inner {
      border-color: #976e48;
      background: #976e48;
      // background: transparent;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .el-radio /deep/ .is-checked .el-radio__inner {
      border-color: #976e48;
      background: #976e48;
      // background: transparent;
      &:after {
        transform: translate(-50%, -50%) scale(0);
      }
    }
    .el-radio /deep/.el-radio__label {
      line-height: 38px;
      color: #976e48;
      font-size: 30px;
    }
    .radio {
      margin-top: 7px;
      vertical-align: top;
      display: inline-block;
      width: 24px;
      height: 24px;
      background-size: 100%;
      background-repeat: no-repeat;

      &-active {
        background-image: url("../../assets/image/radio-active.png");
      }
      &-normal {
        background-image: url("../../assets/image/radio-normal.png");
      }
    }
    .label,
    .input-container {
      display: inline-block;
      /*margin-left: 5px;*/
      width: calc(100% - 24px - 15px);
    }
    .input-container {
      .text {
        float: left;
        /*background-color: #ff1d5e;*/
      }
      .input {
        padding: 0 0;
        margin-left: 10px;
        float: left;
        width: calc(100% - 4em);
      }
    }
  }
}
</style>