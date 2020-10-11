<template>
  <div>
    <div id="head" class="menu">
      <img src="../../assets/image/logo.png" alt>
      <ul>
        <li>
          <router-link to="/">图表</router-link>
        </li>
        <li>
          <router-link to="/about">题库</router-link>
        </li>
        <li>
          <router-link to="/">页面三</router-link>
        </li>
        <li>
          <router-link to="/">页面四</router-link>
        </li>
      </ul>
      <p class="info">
        <span>
          欢迎
          <em ref="name"></em> 登录
        </span>
        <span @click="out">退出</span>
      </p>
    </div>
  </div>
</template>
<script>
import Storages from "../../utils/Storage.js";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    out() {
      Storages.clearItem();
      this.$store.state.isLogin = false;
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang='less' scoped>
.menu {
  height: 80px;
  line-height: 80px;
  background: #000000;
  min-width: 1200px;
  padding: 0 6%;
  box-sizing: border-box;
  margin: 0 auto;
  .info {
    span {
      cursor: pointer;
    }
  }
  img {
    display: block;
    width: 80px;
    float: left;
  }
  ul {
    float: left;
    margin-left: 4%;
    li {
      display: block;
      float: left;
      margin-left: 30px;
      a {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
  p {
    float: right;
    font-size: 16px;
    color: #ffffff;
  }
}
</style>