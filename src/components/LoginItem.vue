<template>
  <div class="loginItem">
    <div class="item">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <el-form label-width="80px" :model="user">
            <el-form-item label="用户名">
              <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" class="labelItem">
              <el-input v-model="user.password" placeholder="请输入密码" clearable></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="success" @click="signIn">登录</el-button>
              <el-button type="primary" @click="signUp">注册</el-button>
              <el-button type="text" @click="getPassword">忘记密码？</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginItem",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      axios
        .post("http://127.0.0.1:8000/polls/login", {
          username: this.user.username,
          password: this.user.password
        })
        .then(data => {
          if (data.status != 200) {
            this.$notify.error({
              title: "用户名或密码错误",
              message: "请重新输入"
            });
          } else {
            this.$notify.success({
              title: "登录成功",
              message: "跳转至之前界面"
            });
          }
        });
    },
    signUp() {
      this.$router.push("/signup");
    },
    getPassword: function() {}
  }
};
</script>
<style scoped>
* {
  overflow: hidden;
}
.loginItem {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background: url("../assets/tooopen_sy_191330099764.jpg") center no-repeat
    fixed;
  background-size: cover;
}
.item {
  /* text-align: center; */
  margin: 250px 0px;
  /* height: 250px; */
}
.labelItem {
  color: #f8f8f9;
}
</style>
