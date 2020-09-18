<template>
  <div>
    <div id="head" class="menu">
      <img src="../../assets/image/logo.png" alt>
      <ul>
        <li>
          <router-link to="/">页面一</router-link>
        </li>
        <li>
          <router-link to="/about">页面二</router-link>
        </li>
        <li>
          <router-link to="/">页面三</router-link>
        </li>
        <li>
          <router-link to="/">页面四</router-link>
        </li>
      </ul>
      <p>登录</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  // 生命周期-实例创建完成后调用
  created() {},
  // 生命周期-实例挂载后调用
  mounted() {},
  // 生命周期-实例销毁离开后调用
  destroyed() {},
  methods: {}
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