<template>
  <header class="headerItem">
    <el-row :gutter="20">
      <div class="top">
        <el-col :span="6" :offset="4">
          <div class="top-left">
            <a href="https://segmentfault.com/">思否社区</a>
            <a href="https://gitee.com/">码云</a>
            <a href>帮助</a>
          </div>
        </el-col>
        <el-col :span="6" :offset="4">
          <div v-if="!checkLogin" class="top-right">
            <router-link to="/login">登录</router-link>
            <router-link to="/signup">注册</router-link>
          </div>
          <div v-else-if="checkLogin" class="top-right">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{username}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人主页</el-dropdown-item>
                <el-dropdown-item divided command="b">注销</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </div>
    </el-row>

    <div class="container">
      <el-row :gutter="20">
        <el-col :span="10" :offset="7">
          <ul>
            <li>
              <router-link to>全职</router-link>
            </li>
            <li>
              <router-link to>实习</router-link>
            </li>
            <li>
              <router-link to>我的简历</router-link>
            </li>
            <li>
              <router-link to>发布职位</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="searchItem">
      <hr>
      <el-row :gutter="20">
        <el-col :span="10" :offset="7">
          <div class="search">
            <el-input size="large" suffix-icon="el-icon-search" v-model="searchInput"></el-input>
          </div>
        </el-col>
      </el-row>

      <hr>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "headerItem",
  data() {
    return {
      username: "",
      tags: [
        { name: "Java", type: "" },
        { name: "Python", type: "success" },
        { name: "React.js", type: "info" },
        { name: "Vue.js", type: "warning" },
        { name: ".NET", type: "danger" }
      ],
      searchInput: ""
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "a") {
        this.$router.push("/userpage");
      }
      if (command == "b") {
        this.$store.commit("userStatus", false);
        this.$store.commit("usernameStatus", "");
        //刷新
        //新建一个空页面
        let NewPage = "_empty" + "?time=" + new Date().getTime() / 1000;
        this.$router.push(NewPage);
        this.$router.go(-1);
      }
    }
  },
  computed: {
    checkLogin() {
      this.username = this.$store.getters.username;

      var a = this.$store.getters.isLogin;

      // this.$store.commit("userStatus", true);
      // this.$store.commit("usernameStatus", sessionStorage.getItem());
      return a;
    }
  }
};
</script>
<style scoped>
header {
  background: #f8f8f9;
}
.top {
  height: 24px;
  width: 100%;
  padding-top: 8px;
}
.top-left {
  text-align: left;
}
.top-right {
  text-align: right;
}
.top-left a {
  padding: 0px 15px;
  font-size: 12px;
  text-decoration: none;
  color: #303133;
}
.top-right a {
  padding: 0px 10px;
  font-size: 12px;
  text-decoration: none;
  color: #303133;
}
.searchItem {
  background: url("../assets/tooopen_sy_191330099764.jpg") center no-repeat
    fixed;
  background-size: cover;
}
.search {
  padding: 60px;
}
nav {
  width: 100%;
  height: 60px;
  /* background: #67c23a; */
}
.container ul {
  list-style-type: none;
  padding: 0;
}
.container ul li {
  display: inline-block;
  margin: 0 10px;
}
.container ul li span {
  color: #f8f8f9;
  font-size: 16px;
}
.container ul li a {
  text-decoration: none;
  color: #f8f8f9;
  font-size: 16px;
}
h3 {
  margin: 40px 0 0;
}
</style>
