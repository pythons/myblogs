<template>
  <div class="userPage">
    <childPageHeader></childPageHeader>
    <router-view></router-view>
    <!-- <div class="content"> -->
    <!-- <el-row :gutter="20">
        <el-col :span="8" :offset="4">
          <div class="content-left">
            <span>{{blog.title}}</span>
            <p>更新时间:</p>
            <p>标签:</p>
          </div>

          <hr>
          <article>{{blog.body}}</article>
          <div class="comment"></div>
        </el-col>

        <el-col :span="6" :offset="4">
          <div class="content-right">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>公司名称</span>
              </div>
              <div>
                <article>简介</article>
              </div>
            </el-card>
          </div>
        </el-col>
    </el-row>-->
    <!-- </div> -->
    <childPageFooter></childPageFooter>
  </div>
</template>

<script>
// import axios from "axios";
import childPageHeader from "./childPageHeader";
import childPageFooter from "./childPageFooter";
import Cookies from "vue-cookies";
export default {
  name: "userPage",
  components: {
    childPageHeader,
    childPageFooter
  },
  data() {
    return {
      id: "",
      blog: {
        title: "",
        body: ""
      }
    };
  },
  created() {},
  methods: {},
  computed: {}
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

.top-right span {
  padding: 0px 10px;
  font-size: 14px;
  text-decoration: none;
  color: #f8f8f9;
}

.container {
  background: #f8f8f9;
  padding: 30px;
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
.content {
  padding: 60px;
  color: #303133;
}
.content-left {
  padding-bottom: 20px;
}
.content-left span {
  font-size: 18px;
  color: #606266;
}
.content-left p {
  font-size: 14px;
  color: #909399;
}
.content-right .box-card {
  background: #f8f8f9;
}
article {
  padding: 10px;
}
footer {
  height: 200px;
  width: 100vm;
  background: #f8f8f9;
}
.leftItem {
  color: #303133;
}
.rightItem {
  color: #303133;
}
</style>
