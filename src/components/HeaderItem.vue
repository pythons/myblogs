<template>
  <header class="headerItem">
    <el-row :gutter="20">
      <div class="top">
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
            <a href>登录</a>
            <a href>注册</a>
          </div>
        </el-col>
      </div>
    </el-row>
    <hr>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <div class="search">
          <el-input size="large" placeholder="请输入" suffix-icon="el-icon-search" v-model="input2"></el-input>
          <p style="font-size:12px">TAGS:</p>
          <el-tag>Java</el-tag>
          <el-tag type="success">Python</el-tag>
          <el-tag type="info">React</el-tag>
          <el-tag type="warning">Vue</el-tag>
          <el-tag type="danger">.NET</el-tag>
        </div>
      </el-col>
    </el-row>

    <nav>
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <div class="container">
            <ul>
              <li>
                <router-link to>首页</router-link>
              </li>
              <li>
                <router-link to>预览</router-link>
              </li>
              <li>
                <router-link to>发布</router-link>
              </li>
              <li>
                <router-link to>翻译</router-link>
              </li>
              <li>
                <router-link to>轮播</router-link>
              </li>
              <li>
                <router-link to>书签</router-link>
              </li>
              <li>
                <router-link to>登录</router-link>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </nav>
  </header>
</template>

<script>
export default {
  name: "headerItem",
  data() {
    return {};
  }
};
</script>
<style scoped>
.top {
  height: 24px;
  width: 100%;
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
  color: #303133;
}
.top-right a {
  padding: 0px 10px;
  font-size: 12px;
  text-decoration: none;
  color: #303133;
}
.search {
  margin: 60px;
}
nav {
  width: 100%;
  height: 60px;
  background: #409EFF;
}
.container ul {
  list-style-type: none;
  padding: 0;
}
.container ul li {
  display: inline-block;
  margin: 0 10px;
}
.container ul li a {
  text-decoration: none;
  color: #f8f8f9;
  font-size: 14px;
}
h3 {
  margin: 40px 0 0;
}
</style>
