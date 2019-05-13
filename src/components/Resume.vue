<template>
  <div class="singleBlogItem">
    <div class="content">
      <el-row :gutter="20">
        <!-- 基本资料卡片 -->
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>个人信息</span>
              <el-button
                style="float: right; padding: 3px 0;color:#67c23a"
                type="text"
                icon="el-icon-edit"
              ></el-button>
            </div>
            <div>
              <div style="font-size:15px">
                <strong>{{psnBaseInfo.name}}</strong>
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    {{showNowStatus}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="item in nowStatusList"
                      :key="item.key"
                      :command="item"
                    >{{item.value}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div
                style="font-size:14px"
              >基本信息：{{psnBaseInfo.age}} / {{psnBaseInfo.sex}} / {{psnBaseInfo.location}}</div>
              <div
                style="font-size:14px"
              >求职意向：{{psnBaseInfo.jobName}} / {{psnBaseInfo.pay}} / {{psnBaseInfo.jobType}} / {{psnBaseInfo.jobAddress}}</div>
              <div style="font-size:14px">手机：{{psnBaseInfo.tel}}</div>
              <div style="font-size:14px">邮箱：{{psnBaseInfo.email}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>项目经历</span>
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
            </div>
            <div>
              <div style="font-size:14px">项目职位：{{psnBaseInfo.name}}</div>
              <div style="font-size:14px">{{psnBaseInfo.org}}</div>
              <div style="font-size:14px">{{psnBaseInfo.start}}/{{psnBaseInfo.end}}</div>
              <div style="font-size:14px">相关技术：{{psnBaseInfo.tec}}</div>
              <div style="font-size:14px">项目描述：{{psnBaseInfo.disp}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>工作经历</span>
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
            </div>
            <div>
              <div style="font-size:14px">职位：{{psnBaseInfo.jobname}}</div>
              <div style="font-size:14px">{{psnBaseInfo.company}}</div>
              <div style="font-size:14px">{{psnBaseInfo.start}}/{{psnBaseInfo.end}}</div>
              <div style="font-size:14px">工作描述：{{psnBaseInfo.job}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>教育经历</span>
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
            </div>
            <div>
              <div style="font-size:14px">专业：{{psnBaseInfo.jobname}}</div>
              <div style="font-size:14px">学校：{{psnBaseInfo.company}}</div>
              <div style="font-size:14px">毕业时间：{{psnBaseInfo.grad}}</div>
              <div style="font-size:14px">学历：{{psnBaseInfo.job}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>自我描述</span>
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
            </div>
            <div>
              <article style="font-size:14px">{{psnBaseInfo.jobname}}</article>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cookies from "vue-cookies";
export default {
  name: "singleBlogItem",
  data() {
    return {
      psnBaseInfo: {},
      resume: {},
      showNowStatus: "",
      nowStatusList: [
        {
          key: "0",
          value: "请选择求职状态"
        },
        {
          key: "1",
          value: "我是学生"
        },
        {
          key: "2",
          value: "我目前在职，观望机会"
        },
        {
          key: "3",
          value: "我已经离职，正在找工作"
        },
        {
          key: "4",
          value: "我暂时不想找新工作"
        }
      ]
    };
  },
  methods: {
    handleCommand(command) {
      this.psnBaseInfo.nowStatus = command.key;
      this.showNowStatus = command.value;
    }
  },
  computed: {
  },
  created() {
    this.axios
      .post("getPsnResumeInfo", {
        psnid: Cookies.get("psnid")
      })
      .then(data => {
        if (data.data.status == "ok") {
          this.psnBaseInfo = JSON.parse(data.data.msg)[0].fields;
        }
      });
  }
};
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #67c23a;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #ecf5ff;
  color: #67c23a;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
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
</style>
