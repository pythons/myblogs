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
