<template>
  <div class="loginItem">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div class="item">
          <el-tabs v-model="activeName">
            <el-tab-pane label="个人用户" name="1"></el-tab-pane>
            <el-tab-pane label="企业用户" name="2"></el-tab-pane>
          </el-tabs>
          <div v-if="activeName=='1'">
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
              <el-form-item label="验证码" prop="idCode">
                <el-input type="text" v-model="userForm.idCode"></el-input>
                <div class="verify-box" @click="refreshCode">
                  <identifyItem :identifyCode="identifyCode"></identifyItem>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="psnLogin('userForm')">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-else>
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
              <el-form-item label="验证码" prop="idCode">
                <el-input type="text" v-model="userForm.idCode"></el-input>
                <div class="verify-box" @click="refreshCode">
                  <identifyItem :identifyCode="identifyCode"></identifyItem>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="entLogin('userForm')">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Cookies from "vue-cookies";
import identifyItem from "./idfendify";
export default {
  components: {
    identifyItem
  },
  name: "loginItem",

  data() {
    var idCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.identifyCode) {
        callback(new Error("验证码不符，请重新输入!"));
      } else {
        callback();
      }
    };
    return {
      identifyCode: "",
      activeName: "1",
      userForm: {
        username: "",
        password: "",
        idCode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }, //非空验证
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" } //长度验证
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }, //非空验证
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" } //长度验证
        ],
        idCode: [
          { validator: idCode, trigger: "blur" } //非空验证
        ]
      }
    };
  },
  created() {
    Cookies.remove("entid");
    Cookies.remove("psnid");
    this.makeCode(4);
  },
  mounted() {
    if (Cookies.get("username")) {
      this.$router.push("/");
    }
  },
  watch: {
    activeName: function() {
      this.identifyCode = "";
      this.makeCode(4);
    }
  },
  methods: {
    randomNum(min, max) {
      let a = Math.floor(Math.random() * (max - min) + min);
      return a;
      // return Math.floor(Math.random() * Math.floor(max));
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCode, 4);
    },
    makeCode(l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.randomNum(0, 9);
      }
    },

    psnLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("psnLogin", {
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
                Cookies.set("psnid", data.data.msg);
                Cookies.set("username", this.userForm.username);
                this.$router.push("/");
              }
            });
        } else {
          return false;
        }
      });
    },
    entLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("entLogin", {
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
                Cookies.set("entid", data.data.msg);
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
    getPassword: function() {}
  }
};
</script>
<style scoped>
.loginItem {
  position: relative;
  height: 100vh;
  min-height: 600px;
  /* background: url("../assets/tooopen_sy_191330099764.jpg") center no-repeat
    fixed; */
  background: url("../assets/body-bg.png") center no-repeat fixed;
  background-size: cover;
}
.item {
  border-radius: 4px;
  background-color: rgba(248, 248, 249, 0.8);
  /* text-align: center; */
  margin: 50px 0px;
  padding: 50px;
  /* height: 250px; */
}
</style>
