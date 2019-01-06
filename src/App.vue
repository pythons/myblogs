<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import headerItem from "./components/HeaderItem.vue";
import showBlogsItem from "./components/ShowBlogsItem.vue";
import footerItem from "./components/FooterItem.vue";
import loginItem from "./components/LoginItem.vue";
import signUpItem from "./components/SignUpItem.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    headerItem,
    showBlogsItem,
    footerItem,
    loginItem,
    signUpItem
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
