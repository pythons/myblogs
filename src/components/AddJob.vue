<template>
  <div class="addJobItem">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="10" :offset="4">
          <div class="content-left">
            <el-form ref="form" :model="entJobInfo" label-width="120px">
              <el-form-item label="职位名称">
                <el-input v-model="entJobInfo.jobName"></el-input>
              </el-form-item>
              <el-form-item label="所属部门/子公司">
                <el-input v-model="entJobInfo.jobDepart"></el-input>
              </el-form-item>
              <el-form-item label="职位类别">
                <el-input v-model="entJobInfo.jobClass"></el-input>
              </el-form-item>
              <el-form-item label="职位性质">
                <el-radio-group v-model="entJobInfo.jobType" text-color="#fff" fill="#67c23a">
                  <el-radio-button label="全职"></el-radio-button>
                  <el-radio-button label="兼职"></el-radio-button>
                  <el-radio-button label="实习"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="职位薪资">
                <el-radio-group v-model="entJobInfo.jobPay" text-color="#fff" fill="#67c23a">
                  <el-radio-button label="面议"></el-radio-button>
                  <el-radio-button label="5-8W"></el-radio-button>
                  <el-radio-button label="8-12W"></el-radio-button>
                  <el-radio-button label="14-18W"></el-radio-button>
                  <el-radio-button label="18-20W"></el-radio-button>
                  <el-radio-button label="20W以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="工作城市">
                <el-input v-model="entJobInfo.jobLocation"></el-input>
              </el-form-item>
              <el-form-item label="具体地址">
                <el-input v-model="entJobInfo.jobAddress"></el-input>
              </el-form-item>
              <el-form-item label="工作经验">
                <el-radio-group v-model="entJobInfo.workExp" text-color="#fff" fill="#67c23a">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="应届"></el-radio-button>
                  <el-radio-button label="1-3年"></el-radio-button>
                  <el-radio-button label="3-5年"></el-radio-button>
                  <el-radio-button label="5-8年"></el-radio-button>
                  <el-radio-button label="8年以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="学历要求">
                <el-radio-group v-model="entJobInfo.degree" text-color="#fff" fill="#67c23a">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="大专"></el-radio-button>
                  <el-radio-button label="本科"></el-radio-button>
                  <el-radio-button label="硕士"></el-radio-button>
                  <el-radio-button label="博士"></el-radio-button>
                  <el-radio-button label="其他"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="任职要求">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 4}"
                  placeholder="请输入岗位要求"
                  v-model="entJobInfo.jobReq"
                ></el-input>
              </el-form-item>
              <el-form-item label="投递邮箱">
                <el-input v-model="entJobInfo.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="funAddJob">立即发布</el-button>
                <el-button>
                  <router-link to="/">取消</router-link>
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cookies from "vue-cookies";
export default {
  name: "addJobItem",
  data() {
    return {
      key: "0000",
      entJobInfo: {
        jobType: "全职",
        jobPay: "面议",
        workExp: "不限",
        degree: "不限"
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    funAddJob() {
      this.axios
        .post("subEntJobInfo", {
          entid: Cookies.get("entid"),
          key: this.key,
          msg: this.entJobInfo
        })
        .then(data => {
          if (data.data.status == "ok") {
            this.$message({
              type: "success",
              message: data.data.msg
            });
          }
        });
    }
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
a {
  text-decoration: none;
  color: #303133;
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
