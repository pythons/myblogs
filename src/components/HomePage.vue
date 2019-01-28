<template>
  <div id="homepage">
    <test/>
    <header-item/>
    <show-blogs-item/>
    <footer-item/>
  </div>
</template>

<script>
import test from "./1111";
import headerItem from "./HeaderItem.vue";
import showBlogsItem from "./ShowBlogsItem.vue";
import footerItem from "./FooterItem.vue";
export default {
  name: "homepage",
  components: {
    test,
    headerItem,
    showBlogsItem,
    footerItem
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #2c3e50;
}
</style>
