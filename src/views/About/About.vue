<template>
  <div>
    <div class="contain">about</div>
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
    let allheight = document.documentElement.clientHeight;
    document.getElementsByClassName("contain")[0].style.height =
      allheight - 140 + "px";
  },
  // 生命周期-实例销毁离开后调用
  destroyed() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.contain {
  text-align: left;
}
</style>
