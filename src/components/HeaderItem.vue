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
          <el-input
            size="large"
            placeholder="请输入"
            suffix-icon="el-icon-search"
            v-model="searchInput"
          ></el-input>
          <p style="font-size:12px">TAGS:</p>
          <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type">{{tag.name}}</el-tag>
        </div>
      </el-col>
    </el-row>

    <nav>
      <el-row :gutter="20">
        <el-col :span="8" :offset="7">
          <div class="container">
            <ul>
              <li>
                <!-- <router-link to>全部分类</router-link> -->
                <el-dropdown>
                  <span class="el-dropdown-link">
                    全部
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
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
                <router-link to>书签</router-link>
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
    return {
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
  }
};
</script>
<style scoped>
header{
  background: #f8f8f9;
}
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
  background: #67c23a;
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
