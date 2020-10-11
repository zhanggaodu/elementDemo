<template>
  <div class="infobox">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass"></el-input>
      </el-form-item>

      <el-form-item label="记住密码" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Storages from "../../utils/Storage.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        name: "",
        pass: "",
        delivery: false
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  // 生命周期-实例创建完成后调用
  created() {},
  // 生命周期-实例挂载后调用
  mounted() {},
  // 生命周期-实例销毁离开后调用
  destroyed() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Storages.setItem("user", JSON.stringify(this.$data.ruleForm));
          this.$store.state.name = this.$data.ruleForm.name;
          this.$store.state.isLogin = true;
          this.$router.push({ path: "/" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='less' scoped>
body,
html {
  overflow: hidden;
}
.infobox {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>