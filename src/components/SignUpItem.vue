<template>
  <div class="signUpItem">
    <div class="item">
      <!-- <el-row :gutter="20">
      <el-col :span="8" :offset="8">-->
      <el-form label-width="120px" :model="user">
        <el-form-item label="请输入用户名">
          <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email" placeholder="请输入邮箱" clearable></el-input>
        </el-form-item>
        <el-form-item label="请输入密码">
          <el-input type="password" v-model="user.password" placeholder="请输入密码" clearable></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="repassword" placeholder="请确认密码" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码保护问题">
          <!-- <el-input v-model="user.question" placeholder="请输入密码" clearable></el-input> -->
          <el-select v-model="user.question" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="答案">
          <el-input v-model="user.answer" placeholder="请输入答案" clearable></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="submit">提交</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
      <!-- </el-col>
      </el-row>-->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  name: "signUpItem",
  data() {
    return {
      user: {
        username: "",
        password: "",
        question: "",
        answer: "",
        email: ""
      },
      repassword: "",
      options: [
        {
          value: "1",
          label: "你的第一所小学的名称"
        },
        {
          value: "2",
          label: "你的第一所中学的名称"
        },
        {
          value: "3",
          label: "你的第一所大学的名称"
        },
        {
          value: "4",
          label: "你父亲的名字"
        },
        {
          value: "5",
          label: "你母亲的名字"
        }
      ]
    };
  },
  methods: {
    submit() {
      axios
        .post("http://127.0.0.1:8000/polls/submitUser", {
          username: this.user.username,
          password: this.user.password,
          question: this.user.question,
          answer: this.user.answer,
          email: this.user.email
        })
        .then(data => {
          if (data.data.status == "ok") {
            Cookies.set("username", this.user.username);
            this.$router.push("/");
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
  height: 100vh;
  min-height: 600px;
  background: url("../assets/tooopen_sy_191330099764.jpg") center no-repeat
    fixed;
  background-size: cover;
}
.item {
  border-radius: 4px;
  background-color: rgba(248, 248, 249, 0.5);
  /* text-align: center; */
  margin: 50px 500px;
  padding: 50px 180px;
  /* height: 250px; */
}
</style>
