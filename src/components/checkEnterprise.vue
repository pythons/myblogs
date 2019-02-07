<template>
  <div class="singleBlogItem">
    <header>
      <div class="top">
        <el-row :gutter="20">
          <el-col :span="6" :offset="4">
            <div class="top-left">
              <a href>思否社区</a>
              <a href>码云</a>
              <a href>帮助</a>
            </div>
          </el-col>
          <el-col :span="6" :offset="4">
            <!-- <div class="top-right">
              <router-link to="/login">登录</router-link>
              <router-link to="/signup">注册</router-link>
            </div>-->
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
        </el-row>
      </div>
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
    </header>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="4">
          <div class="content-left">
            <el-form>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-button></el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <footer class="footerItem">
      <hr>
      <el-row>
        <el-col :span="6" :offset="4">
          <div class="leftItem">
            <h3>LINKS</h3>
            <!-- <font-awesome-icon icon="fab fa-github"/> -->
            <i class="fab fa-github"></i>
            <a>GitHub</a>
            <br>
            <i class="fab fa-weibo"></i>
            <a>Weibo</a>
          </div>
        </el-col>
        <el-col :span="6" :offset="4">
          <div class="rightItem">
            <h3>联系我</h3>
            <p>
              Tel:
              +86 1375 555 5555
            </p>
            <p>
              Email:
              qiulangcheng@gmail.com
            </p>
            <p>
              Loc:
              Earth
            </p>
          </div>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "singleBlogItem",
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "b") {
        this.$store.commit("userStatus", false);
        this.$store.commit("usernameStatus", "");
        //刷新
        //新建一个空页面
        this.$router.push("/");
      }
    }
  },
  computed: {
    checkLogin() {
      this.username = this.$store.getters.username;
      return this.$store.getters.isLogin;
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(data => {
        this.blog = data.data;
      });
  }
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
