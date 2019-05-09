<template>
  <div class="loginItem">
    <div class="item">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <el-form
            :model="userForm"
            :rules="rules"
            ref="userForm"
            label-width="100px"
            class="userForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="userForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="userForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  name: "loginItem",
  data() {
    return {
      userForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }, //非空验证
          { min: 3, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" } //长度验证
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }, //非空验证
          { min: 6, max: 18, message: "长度在 3 到 5 个字符", trigger: "blur" } //长度验证
        ]
      }
    };
  },
  mounted() {
    if (Cookies.get("username")) {
      this.$router.push("/");
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://127.0.0.1:8000/apis/login", {
              username: this.userForm.username,
              password: this.userForm.password
            })
            .then(data => {
              if (data.data.status == 2) {
                this.$message({
                  message: "该用户不存在",
                  type: "warning"
                });
              } else if (data.data.status == 0) {
                this.$message({
                  message: "密码错误",
                  type: "error"
                });
              } else if (data.data.status == 1) {
                this.$message({
                  message: "登录成功",
                  type: "success"
                });
                Cookies.set("username", this.userForm.username);
                this.$router.push("/");
              }
            });
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.userForm.password = "";
      this.userForm.username = "";
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
.userForm {
  /* background: #f8f8f9; */
}
</style>
