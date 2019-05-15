<template>
  <div class="childPageHeader">
    <header>
      <div class="top">
        <el-row :gutter="20">
          <el-col :span="6" :offset="4">
            <div class="top-left">
              <!-- <a href>思否社区</a>
              <a href>码云</a>-->
              、
              <router-link to="/">首页</router-link>
            </div>
          </el-col>
          <el-col :span="6" :offset="4">
            <div v-if="!username" class="top-right">
              <router-link to="/login">登录</router-link>
              <router-link to="/signup">注册</router-link>
            </div>
            <div v-else class="top-right">
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
            <ul v-if="entid">
              <li>
                <router-link to>首页</router-link>
              </li>
              <li>
                <router-link to>基本信息</router-link>
              </li>
              <li>
                <router-link to>职位信息</router-link>
              </li>
              <li>
                <router-link to>发布职位</router-link>
              </li>
            </ul>
            <ul v-else>
              <li>
                <router-link to>首页</router-link>
              </li>
              <li>
                <router-link to>基本信息</router-link>
              </li>
              <li>
                <router-link to>投递信息</router-link>
              </li>
              <li>
                <router-link to="resume">修改简历</router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </header>
  </div>
</template>

<script>
import Cookies from "vue-cookies";
export default {
  name: "childPageHeader",
  data() {
    return {
      entid: "",
      psnid: ""
    };
  },
  created() {
    if (Cookies.get("username")) {
      this.username = Cookies.get("username");
    }

    if (Cookies.get("entid")) {
      this.entid = Cookies.get("entid");
      this.psnid = "";
    } else if (Cookies.get("psnid")) {
      this.psnid = Cookies.get("psnid");
      this.entid = "";
    } else {
      this.$message({
        type: "danger",
        message: "身份认证已过期，请重新登陆"
      });
    }
  },
  methods: {
    handleCommand(command) {
      if (command == "a") {
        this.$router.push("/userpage");
      }
      if (command == "b") {
        this.axios.post("loginOut", {}).then(data => {
          if (data.data.status == "ok") {
            Cookies.remove("username");
            Cookies.remove("sessionid");
            if (Cookies.get("entid")) {
              Cookies.remove("entid");
            } else if (Cookies.get("psnid")) {
              Cookies.remove("psnid");
            }
            this.$router.push("/");
          }
        });
      }
    }
  },
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

  