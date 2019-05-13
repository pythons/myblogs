<template>
  <div class="signUpItem">
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <div class="item">
          <el-tabs v-model="activeName">
            <el-tab-pane label="个人注册" name="1"></el-tab-pane>
            <el-tab-pane label="企业注册" name="2"></el-tab-pane>
          </el-tabs>
          <div v-if="activeName=='1'">
            <el-form label-width="80px" :model="psnAccountInfo" :rules="rules" ref="psnAccountInfo">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="psnAccountInfo.username" placeholder="请输入用户名" clearable></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="psnAccountInfo.email" placeholder="请输入邮箱" clearable></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="tel">
                <el-input v-model="psnAccountInfo.tel" placeholder="请输入手机号码" clearable></el-input>
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
              <!-- <el-step title="完成注册"></el-step> -->
            </el-steps>
            <br>
            <div v-show="active==1">
              <el-form
                label-width="80px"
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
                <el-form-item label="手机" prop="tel">
                  <el-input v-model="entAccountInfo.tel" placeholder="请输入手机号码" clearable></el-input>
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
              <el-form label-width="100px" :model="entBaseInfo" ref="entBaseInfo" :rules="rules">
                <el-form-item label="企业名称" prop="entName">
                  <el-input clearable v-model="entBaseInfo.entName" placeholder="请输入完整的企业名称"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="entContectName">
                  <el-input clearable v-model="entBaseInfo.entContectName" placeholder="请输入企业联系人"></el-input>
                </el-form-item>
                <el-form-item label="企业地址" prop="entAddress">
                  <el-input clearable v-model="entBaseInfo.entAddress" placeholder="请输入企业地址"></el-input>
                </el-form-item>
                <el-form-item label="营业执照" prop="entCertId">
                  <el-input clearable v-model="entBaseInfo.entCertId" placeholder="请输入营业执照号码"></el-input>
                </el-form-item>
                <el-form-item label="企业性质">
                  <el-select v-model="entBaseInfo.entClass" placeholder="请选择企业性质">
                    <el-option value="外资企业">外资企业</el-option>
                    <el-option value="合资企业">合资企业</el-option>
                    <el-option value="国有企业">国有企业</el-option>
                    <el-option value="上市企业">上市企业</el-option>
                    <el-option value="私营企业">私营企业</el-option>
                    <el-option value="非盈利机构">非盈利机构</el-option>
                    <el-option value="其他">其他</el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="企业规模">
                  <el-select v-model="entBaseInfo.entScale" placeholder="请选择企业规模">
                    <el-option value="1-49人">1-49人</el-option>
                    <el-option value="50-99人">50-149人</el-option>
                    <el-option value="100-499人">150-499人</el-option>
                    <el-option value="500-999人">500-999人</el-option>
                    <el-option value="1000-2000人">1000-2000人</el-option>
                    <el-option value="2000-5000人">2000-5000人</el-option>
                    <el-option value="5000-10000人">5000-10000人</el-option>
                    <el-option value="10000人以上">10000人以上</el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="企业简介">
                  <el-input type="textarea" v-model="entBaseInfo.entSummary"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="entBaseInfoSub('entBaseInfo')">下一步</el-button>
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
// import axios from "axios";
// axios.defaults.withCredentials = true;
import Cookies from "vue-cookies";
export default {
  name: "signUpItem",
  watch: {
    activeName: function() {
      if (Cookies.get("entid")) {
        this.activeName = "2";
      }
    },
    active: function() {
      if (Cookies.get("entid")) {
        this.active = 2;
      }
    }
  },
  data() {
    /**
     * 手机号验证
     */
    var telValidate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else {
        if (!/^1[34578]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号码"));
        } else {
          callback();
        }
      }
    };
    /**
     * 确认密码验证
     */
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
    /**
     * 营业执照号码验证
     */
    var entCertId = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入企业营业执照号码"));
      } else {
        if (
          !/^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/.test(
            value
          )
        ) {
          callback(new Error("请输入正确的营业执照号码"));
        } else {
          callback();
        }
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
      entBaseInfo: {
        entName: "",
        entContectName: "",
        entAddress: "",
        entCertId: "",
        entClass: "",
        entScale: "",
        entSummary: ""
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
            trigger: "blur"
          }
        ],
        tel: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
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
        ],
        entName: [
          { required: true, message: "请输入完整的企业名称", trigger: "blur" }, //非空验证
          { min: 4, max: 18, message: "长度在 4 到 18 个字符", trigger: "blur" } //长度验证
        ],
        entContectName: [
          { required: true, message: "请输入企业联系人", trigger: "blur" }, //非空验证
          { min: 2, max: 18, message: "长度在 2 到 18 个字符", trigger: "blur" } //长度验证
        ],
        entAddress: [
          { required: true, message: "请输入企业地址", trigger: "blur" } //非空验证
        ],
        entCertId: [
          {
            required: true,
            message: "请输入企业营业执照号码",
            trigger: "blur"
          }, //非空验证
          {
            validator: entCertId,
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    if (Cookies.get("entid")) {
      this.activeName = "2";
      this.active = 2;
    }
  },
  methods: {
    psnSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // axios.defaults.withCredentials = true;
          this.axios
            .post("psnSubmitUser", {
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
          // axios.defaults.withCredentials = true;
          this.axios
            .post("entSubmitUser", {
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
    entBaseInfoSub(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // axios.defaults.withCredentials = true;
          this.axios
            .post("entBaseInfoSub", {
              // entid: Cookies.get("entid"),
              entName: this.entBaseInfo.entName,
              entContectName: this.entBaseInfo.entContectName,
              entAddress: this.entBaseInfo.entAddress,
              entCertId: this.entBaseInfo.entCertId,
              entClass: this.entBaseInfo.entClass,
              entScale: this.entBaseInfo.entScale,
              entSummary: this.entBaseInfo.entSummary
            })
            .then(data => {
              if (data.data.status == "ok") {
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
