<template>
  <div class="signUpItem">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div class="item">
          <el-tabs v-model="activeName">
            <el-tab-pane label="个人注册" name="1"></el-tab-pane>
            <el-tab-pane label="企业注册" name="2"></el-tab-pane>
          </el-tabs>
          <div v-show="activeName=='1'">
            <el-form label-width="70px" :model="user">
              <el-form-item label="用户名">
                <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="user.email" placeholder="请输入邮箱" clearable></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="user.password" placeholder="请输入密码" clearable></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input type="password" v-model="repassword" placeholder="请确认密码" clearable></el-input>
              </el-form-item>
              <el-form-item label="密保问题">
                <el-select v-model="user.question" placeholder="请选择">
                  <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="答案">
                <el-input v-model="user.answer" placeholder="请输入答案" clearable></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="psnSubmit">提交</el-button>
                <el-button @click="back">返回</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-show="activeName=='2'">
            <el-steps :active="active">
              <el-step title="账号信息"></el-step>
              <el-step title="企业信息"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
            <br>
            <div v-show="active=='1'">
              <el-form label-width="70px" :model="user">
                <el-form-item label="用户名">
                  <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="user.email" placeholder="请输入邮箱" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" v-model="user.password" placeholder="请输入密码" clearable></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                  <el-input type="password" v-model="repassword" placeholder="请确认密码" clearable></el-input>
                </el-form-item>
                <el-form-item label="密保问题">
                  <el-select v-model="user.question" placeholder="请选择">
                    <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="答案">
                  <el-input v-model="user.answer" placeholder="请输入答案" clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="entSubmit">提交</el-button>
                  <el-button @click="back">返回</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- </el-col>
          </el-row>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  name: "signUpItem",
  data() {
    return {
      activeName: "1",
      active: "1",
      user: {
        username: "",
        password: "",
        question: "",
        answer: "",
        email: ""
      },
      repassword: "",
      options: [
        "你的第一所小学的名称",
        "你的第一所中学的名称",
        "你的第一所大学的名称",
        "你父亲的名字",
        "你母亲的名字"
      ]
    };
  },
  methods: {
    psnSubmit() {
      axios
        .post("http://127.0.0.1:8000/apis/psnSubmitUser", {
          username: this.user.username,
          password: this.user.password,
          question: this.user.question,
          answer: this.user.answer,
          email: this.user.email
        })
        .then(data => {
          if (data.data.status == "ok") {
            Cookies.set("psnid", data.data.msg);
            Cookies.set("username", this.user.username);
            this.$router.push("/");
          } else {
            this.$message({
              type: "error",
              message: data.data.msg
            });
          }
        });
    },
    entSubmit() {
      axios
        .post("http://127.0.0.1:8000/apis/entSubmitUser", {
          username: this.user.username,
          password: this.user.password,
          question: this.user.question,
          answer: this.user.answer,
          email: this.user.email
        })
        .then(data => {
          if (data.data.status == "ok") {
            Cookies.set("psnid", data.data.msg);
            Cookies.set("username", this.user.username);
            this.$router.push("/");
          } else {
            this.$message({
              type: "error",
              message: data.data.msg
            });
          }
        });
    },

    back: function() {},
    check: function() {}
  }
};
</script>
<style scoped>
* {
  overflow: hidden;
}
.signUpItem {
  position: relative;
  height: 120vh;
  min-height: 600px;
  background: url("../assets/tooopen_sy_191330099764.jpg") center no-repeat
    fixed;
  background-size: cover;
}
.item {
  border-radius: 4px;
  background-color: rgba(248, 248, 249, 0.5);
  /* text-align: center; */
  margin: 50px 0px;
  padding: 50px;
  /* height: 250px; */
}
</style>
