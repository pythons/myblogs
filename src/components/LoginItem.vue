<template>
  <div class="loginItem">
    <div class="item">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <!-- <el-form label-width="80px" :model="userForm" :rules="rules" ref="userForm">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userForm.username" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" class="labelItem" prop="password">
              <el-input type="password" v-model="userForm.password" placeholder="请输入密码" clearable></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="success" @click="submitForm('userForm')">登录</el-button>
            </el-form-item>
          </el-form>-->
          <el-form
            :model="userForm"
            status-icon
            :rules="rules"
            ref="userForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="userForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          axios
            .post("http://127.0.0.1:8000/polls/login", {
              username: this.userForm.username,
              password: this.userForm.password
            })
            .then(data => {
              if (data.data.message == 2) {
                this.$notify.error({
                  title: "用户名错误",
                  message: "请重新输入"
                });
              } else if (data.data.message == 0) {
                this.$notify.error({
                  title: "密码错误",
                  message: "请重新输入"
                });
              } else if (data.data.message == 1) {
                this.$notify.success({
                  title: "登录成功",
                  message: "跳转至之前页面"
                });
              }
            });
        } else {
          return false;
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
