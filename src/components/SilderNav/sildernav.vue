<template>
  <div class="silder">
    <ul>
      <li>
        <router-link to="/">页面1-1</router-link>
      </li>
      <li>
        <router-link to="/">页面1-2</router-link>
      </li>
      <li>
        <router-link to="/">页面1-3</router-link>
      </li>
    </ul>
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
.silder {
  width: 120px;
  float: left;
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  ul {
    overflow: hidden;
    float: left;
    li {
      padding: 15px 0;
      display: block;
      text-align: center;
    }
  }
}
</style>