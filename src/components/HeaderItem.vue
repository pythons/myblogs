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
      <el-col :span="8" :offset="8">
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
}
</style>
