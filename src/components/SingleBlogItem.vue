<template>
  <header class="singleBlogItem">
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="6" :offset="4">
          <div class="top-left">
            <a href>社区</a>
            <a href>详情</a>
            <a href>公告</a>
            <a href>帮助</a>
          </div>
        </el-col>
        <el-col :span="6" :offset="4">
          <div class="top-right">
            <router-link to="/login">登录</router-link>
            <router-link to="/signup">注册</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="10" :offset="7">
          <ul>
            <li>
              <router-link to>预览</router-link>
            </li>
            <li>
              <router-link to>预览</router-link>
            </li>
            <li>
              <router-link to>预览</router-link>
            </li>
            <li>
              <router-link to>预览</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "singleBlogItem",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
header {
  background: #f8f8f9;
}
.top {
  background: #67c23a;
  height: 36px;
  width: 100%;
  padding-top: 12px;
}
.top-left {
  text-align: left;
}
.top-right {
  text-align: right;
}
.top-left a {
  padding: 0px 10px;
  font-size: 12px;
  text-decoration: none;
  color: #f8f8f9;
}
.top-right a {
  padding: 0px 10px;
  font-size: 12px;
  text-decoration: none;
  color: #f8f8f9;
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
.container {
  background: #f8f8f9;
}
.container ul {
  list-style-type: none;
  padding: 0;
}
.container ul li {
  display: inline-block;
  margin: 0 30px;
}
.container ul li a {
  text-decoration: none;
  color: #303133;
  font-size: 18px;
}
h3 {
  margin: 40px 0 0;
}
</style>
