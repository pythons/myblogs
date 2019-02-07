<template>
  <div id="homepage">
    <header-item/>
    <jobList/>
    <footer-item/>
  </div>
</template>

<script>
import headerItem from "./HeaderItem.vue";
import jobList from "./JobList.vue";
import footerItem from "./FooterItem.vue";
export default {
  name: "homepage",
  components: {
    headerItem,
    jobList,
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
