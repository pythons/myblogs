<template>
  <div class="signUpItem">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div class="item">
          <el-tabs v-model="activeName">
            <el-tab-pane label="个人注册" name="1"></el-tab-pane>
            <el-tab-pane label="企业注册" name="2"></el-tab-pane>
          </el-tabs>
          <div v-if="activeName=='1'">
            <el-form label-width="75px" :model="psnAccountInfo" :rules="rules" ref="psnAccountInfo">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="psnAccountInfo.username" placeholder="请输入用户名" clearable></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="psnAccountInfo.email" placeholder="请输入邮箱" clearable></el-input>
              </el-form-item>
              <el-form-item label="联系方式" prop="tel">
                <el-input v-model="psnAccountInfo.tel" placeholder="请输入联系方式" clearable></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="password"
                  v-model="psnAccountInfo.password"
                  placeholder="请输入密码"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="psnRepassword">
                <el-input type="password" v-model="psnRepassword" placeholder="请确认密码" clearable></el-input>
              </el-form-item>
              <el-form-item label="密保问题">
                <el-select v-model="psnAccountInfo.question" placeholder="请选择">
                  <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="答案">
                <el-input v-model="psnAccountInfo.answer" placeholder="请输入答案" clearable></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="psnSubmit('psnAccountInfo')">提交</el-button>
                <el-button @click="back">返回</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-else>
            <el-steps :active="active">
              <el-step title="账号信息"></el-step>
              <el-step title="企业信息"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
            <br>
            <div v-show="active==1">
              <el-form
                label-width="70px"
                :model="entAccountInfo"
                ref="entAccountInfo"
                :rules="rules"
              >
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="entAccountInfo.username" placeholder="建议使用公司简称" clearable></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="entAccountInfo.email" placeholder="请输入邮箱" clearable></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="tel">
                  <el-input v-model="entAccountInfo.tel" placeholder="请输入联系方式" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="entAccountInfo.password"
                    placeholder="请输入密码"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="entRepassword">
                  <el-input type="password" v-model="entRepassword" placeholder="请确认密码" clearable></el-input>
                </el-form-item>
                <el-form-item label="密保问题">
                  <el-select v-model="entAccountInfo.question" placeholder="请选择">
                    <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="答案">
                  <el-input v-model="entAccountInfo.answer" placeholder="请输入答案" clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="entSubmit('entAccountInfo')">下一步</el-button>
                  <el-button @click="back">返回</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-show="active==2">
              <el-form label-width="70px">
                <el-form-item label="企业名称">
                  <el-input clearable></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                  <el-input clearable></el-input>
                </el-form-item>
                <el-form-item label="营业执照">
                  <el-input clearable></el-input>
                </el-form-item>
                <el-form-item label="企业性质">
                  <el-input clearable></el-input>
                </el-form-item>
                <el-form-item label="规模">
                  <el-input clearable></el-input>
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
    var telValidate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入联系方式"));
      } else {
        if (!/^1[34578]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的联系方式"));
        } else {
          callback();
        }
      }
    };

    var psnRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.$refs.psnAccountInfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var entRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.$refs.entAccountInfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "1",
      active: 1,
      psnAccountInfo: {
        username: "",
        password: "",
        question: "",
        answer: "",
        email: "",
        tel: ""
      },
      entAccountInfo: {
        username: "",
        password: "",
        question: "",
        answer: "",
        email: "",
        tel: ""
      },
      psnRepassword: "",
      entRepassword: "",
      options: [
        "你的第一所小学的名称",
        "你的第一所中学的名称",
        "你的第一所大学的名称",
        "你父亲的名字",
        "你母亲的名字"
      ],
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }, //非空验证
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" } //长度验证
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" }, //非空验证
          {
            type: "email",
            message: "请输入正确的邮箱",
            trigger: ["blur", "change"]
          }
        ],
        tel: [
          { validator: telValidate, trigger: "blur" } //非空验证
        ],
        psnRepassword: [
          { validator: psnRepassword, trigger: "blur" } //非空验证
        ],
        entRepassword: [
          { validator: entRepassword, trigger: "blur" } //非空验证
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }, //非空验证
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" } //长度验证
        ]
      }
    };
  },
  methods: {
    psnSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://127.0.0.1:8000/apis/psnSubmitUser", {
              username: this.psnAccountInfo.username,
              password: this.psnAccountInfo.password,
              question: this.psnAccountInfo.question,
              answer: this.psnAccountInfo.answer,
              email: this.psnAccountInfo.email,
              tel: this.psnAccountInfo.tel
            })
            .then(data => {
              if (data.data.status == "ok") {
                if (Cookies.get("entid")) {
                  Cookies.remove("entid");
                }
                Cookies.set("psnid", data.data.msg);
                Cookies.set("username", this.psnAccountInfo.username);
                this.$router.push("/");
              } else {
                this.$message({
                  type: "error",
                  message: data.data.msg
                });
              }
            });
        } else {
          return false;
        }
      });
    },
    entSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://127.0.0.1:8000/apis/entSubmitUser", {
              username: this.entAccountInfo.username,
              password: this.entAccountInfo.password,
              question: this.entAccountInfo.question,
              answer: this.entAccountInfo.answer,
              email: this.entAccountInfo.email,
              tel: this.entAccountInfo.tel
            })
            .then(data => {
              if (data.data.status == "ok") {
                if (Cookies.get("psnid")) {
                  Cookies.remove("psnid");
                }
                Cookies.set("entid", data.data.msg);
                Cookies.set("username", this.entAccountInfo.username);
                // this.$router.push("/");
                this.active = 2;
              } else {
                this.$message({
                  type: "error",
                  message: data.data.msg
                });
              }
            });
        } else {
          return false;
        }
      });
    },

    back: function() {},
    check: function() {}
  }
};
</script>
<style scoped>
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
