<template>
  <div>
    <!-- 头部 -->
    <Header/>
    <!-- 内容 -->
    <router-view/>
    <Footer/>
    <!-- 尾部 -->
  </div>
</template>

<script>
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
export default {
  // 可用组件的哈希表
  components: {
    Header,
    Footer
  },
  // 接收传值
  props: {},
  // 数据对象
  data() {
    return {};
  },
  // 事件处理器
  methods: {},
  // 生命周期-实例创建完成后调用
  created() {},
  // 生命周期-实例挂载后调用
  mounted() {},
  // 生命周期-实例销毁离开后调用
  destroyed() {},
  // 计算属性监听
  computed: {},
  // 自定义的侦听器
  watch: {}
};
</script>

<style lang="less" scoped>
</style>
