<template>
  <div>
    <div id="foot" class="thelast">版权所有@</div>
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
  mounted() {
    // let allheight = document.documentElement.clientHeight;
    // // let foo = document.getElementById("foot").scrollTop;
    // // foo = allheight - 140;
    // console.log(allheight);
    // console.log(foo);
  },
  // 生命周期-实例销毁离开后调用
  destroyed() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.thelast {
  height: 60px;
  line-height: 60px;
  background: #000000;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  min-width: 1200px;
  padding: 0 6%;
  box-sizing: border-box;
  margin: 0 auto;
}
</style>