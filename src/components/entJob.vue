<template>
  <div class="entMain">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="12" :offset="5">
          <div class="content-left">
            <div class="title">
              <span>
                <b>在招职位</b>
                ({{entJobInfo.length}})
              </span>
              <router-link to="addjob">
                <el-button style="float:right;" type="success">发布职位</el-button>
              </router-link>
            </div>
            <div v-if="entJobInfo.length==0">
              <p>
                暂无数据，请先
                <router-link to="addjob">发布职位</router-link>
              </p>
            </div>
            <div v-else v-for="(item,index) in entJobInfo" :key="index">
              <p>
                <span class="job-list">
                  <b>{{item.jobName}}</b>
                  {{item.jobPay}}
                  <span>|</span>
                  {{item.degree}}
                  <span>|</span>
                  {{item.workExp}}
                </span>
                <el-button
                  style="color:#67C23A;float:right;margin-left:5px"
                  type="text"
                  @click="funDelJob(item.jobid,index)"
                >删除</el-button>
                <router-link :to="{name: 'addjob', query:{jobid: item.jobid}}">
                  <el-button style="color:#67C23A;float:right;" type="text">编辑</el-button>
                </router-link>
              </p>
              <p>{{item.updateTime}}发布</p>
              <hr>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- <hr> -->
    <!-- <hr> -->
  </div>
</template>

<script>
import Cookies from "vue-cookies";
export default {
  name: "entMain",
  data() {
    return {
      entJobInfo: []
    };
  },
  created() {
    this.axios
      .post("getEntBaseInfo", {
        entid: Cookies.get("entid"),
        key: "0000"
      })
      .then(data => {
        if (data.data.status == "ok") {
          let arr = JSON.parse(data.data.data.entJobInfo);
          for (var i in arr) {
            arr[i].fields.jobid = arr[i].pk;
            this.entJobInfo.push(arr[i].fields);
          }
        }
      });
  },
  methods: {
    funDelJob(id, index) {
      this.entJobInfo.splice(index, 1);
      this.axios
        .post("delEntJobInfo", {
          msg: id
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
  },
  computed: {}
};
</script>
<style scoped>
.content {
  padding: 60px;
  color: #303133;
}
.content-left {
  padding-bottom: 20px;
}
.content-left .title {
  font-size: 16px;
  color: #606266;
}
.content-left .el-tag {
  font-size: 12px;
  color: #606266;
}

.el-tag + .el-tag {
  margin: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.content-left p {
  font-size: 16px;
  color: #606266;
}
.content-right .box-card {
  background: #f8f8f9;
}
article {
  padding: 10px;
}
.comment {
  padding: 60px;
  /* background: #67c23a; */
  height: 36px;
  color: #303133;
  font-size: 18px;
  line-height: 36px;
}
footer {
  /* height: 250px; */
  /* width: 100vm; */
  background: #f8f8f9;
  /* margin-bottom: 0; */
}
.leftItem {
  color: #303133;
}
.rightItem {
  color: #303133;
}
.job-list {
  font-size: 14px;
  color: #606266;
}
.title {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}
</style>
