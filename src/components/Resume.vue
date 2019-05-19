<template>
  <div class="resumeItem">
    <div class="content">
      <el-row :gutter="20">
        <!-- 基本资料卡片 -->
        <el-col :span="14" :offset="5">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>个人信息</span>
              <el-button
                v-if="!openEditBaseInfo"
                style="float: right; padding: 3px 0;color:#67c23a"
                type="text"
                icon="el-icon-edit"
                @click="openEditBaseInfo = true"
              ></el-button>
              <el-button
                v-else
                style="float: right; padding: 3px 0;color:#67c23a"
                type="text"
                icon="el-icon-close"
                @click="openEditBaseInfo = false"
              ></el-button>
            </div>
            <div v-show="!openEditBaseInfo">
              <div style="font-size:15px">
                <strong>{{psnBaseInfo.name}}</strong>
              </div>
              <div class="base-info-item">
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
                class="base-info-item"
              >基本信息：{{psnBaseInfo.age}} / {{psnBaseInfo.sex}} / {{psnBaseInfo.location}}/{{psnBaseInfo.workExp}}</div>
              <div class="base-info-item">
                求职意向：{{psnBaseInfo.jobName}} / {{psnBaseInfo.jobPay}} /
                {{psnBaseInfo.jobType}} / {{psnBaseInfo.jobAdd}}
              </div>
              <div class="base-info-item">手机：{{psnBaseInfo.tel}}</div>
              <div class="base-info-item">邮箱：{{psnBaseInfo.email}}</div>
            </div>
            <div v-show="openEditBaseInfo">
              <el-form :model="psnBaseInfo" label-width="80px">
                <el-form-item label="姓名">
                  <el-input v-model="psnBaseInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                  <el-input v-model="psnBaseInfo.age" type="number" max="100" min="10"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio-group v-model="psnBaseInfo.sex" text-color="#fff" fill="#67c23a">
                    <el-radio-button label="男"></el-radio-button>
                    <el-radio-button label="女"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="所在地">
                  <!-- <input type="text" class="search"> -->
                  <!-- <locationSelect></locationSelect> -->
                  <el-input v-model="psnBaseInfo.location" class="search"></el-input>
                </el-form-item>
                <el-form-item label="工作经验">
                  <!-- <input type="text" class="search"> -->
                  <!-- <locationSelect></locationSelect> -->
                  <el-radio-group v-model="psnBaseInfo.workExp" text-color="#fff" fill="#67c23a">
                    <el-radio-button label="应届毕业生"></el-radio-button>
                    <el-radio-button label="1-3年"></el-radio-button>
                    <el-radio-button label="3-5年"></el-radio-button>
                    <el-radio-button label="5-8年"></el-radio-button>
                    <el-radio-button label="80年以上"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="意向职位">
                  <el-input v-model="psnBaseInfo.jobName"></el-input>
                </el-form-item>
                <el-form-item label="期望薪资">
                  <el-radio-group v-model="psnBaseInfo.jobPay" text-color="#fff" fill="#67c23a">
                    <el-radio-button label="5W以下"></el-radio-button>
                    <el-radio-button label="5-8W"></el-radio-button>
                    <el-radio-button label="8-12W"></el-radio-button>
                    <el-radio-button label="14-18W"></el-radio-button>
                    <el-radio-button label="18-20W"></el-radio-button>
                    <el-radio-button label="20W以上"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="工作类型">
                  <el-radio-group v-model="psnBaseInfo.jobType" text-color="#fff" fill="#67c23a">
                    <el-radio-button label="全职"></el-radio-button>
                    <el-radio-button label="兼职"></el-radio-button>
                    <el-radio-button label="实习"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="工作地点">
                  <el-input v-model="psnBaseInfo.jobAdd"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                  <el-input v-model="psnBaseInfo.tel"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="psnBaseInfo.email"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="success" plain @click="funSubBaseInfo">确认</el-button>
                  <el-button type="info" plain @click="openEditBaseInfo=false">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>项目经历</span>
              <el-button
                v-if="editProject=='show'"
                style="float: right; padding: 3px 0 ;color:#67c23a"
                type="text"
                icon="el-icon-plus"
                @click="editProject='add'"
              ></el-button>
            </div>
            <div v-if="editProject=='show'">
              <div v-for="item in psnProjectInfo" :key="item.pk" class="for-info">
                <div class="for-item">
                  <p>{{item.fields.startTime}}/{{item.fields.endTime}}</p>
                  <div class="for-info-item" style="color:#67c23a">{{item.fields.orgName}}</div>
                </div>
                <div class="for-item">
                  <p>{{item.fields.projectName}}</p>
                  <div class="for-info-item">{{item.fields.jobName}}</div>
                  <div class="for-info-item">相关技术：{{item.fields.tecName}}</div>
                  <div class="for-info-item">项目描述：{{item.fields.projectDisp}}</div>
                </div>
                <div class="for-item">
                  <div style="margin:20px">
                    <el-button
                      style="float: right; padding: 3px  ;color:#67c23a"
                      type="text"
                      icon="el-icon-edit"
                      @click="funProjectEdit(item)"
                    ></el-button>
                    <el-button
                      style="float: right; padding: 3px  ;color:#67c23a"
                      type="text"
                      icon="el-icon-delete"
                      @click="funProjectDel(item.pk)"
                    ></el-button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <el-form :model="projectItem" label-width="80px">
                <el-form-item label="项目名称">
                  <el-input v-model="projectItem.fields.projectName"></el-input>
                </el-form-item>
                <el-form-item label="项目职位">
                  <el-input v-model="projectItem.fields.jobName"></el-input>
                </el-form-item>
                <el-form-item label="所属组织">
                  <el-input v-model="projectItem.fields.orgName"></el-input>
                </el-form-item>
                <el-form-item label="项目时间">
                  <el-date-picker
                    v-model="projectTime"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="相关技术">
                  <el-input v-model="projectItem.fields.tecName"></el-input>
                </el-form-item>
                <el-form-item label="项目描述">
                  <el-input type="textarea" v-model="projectItem.fields.projectDisp"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="success" plain @click="funSubInfo(projectItem.pk,'project')">确认</el-button>
                  <el-button type="info" plain @click="editProject='show'">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>工作经历</span>
              <el-button
                v-if="editWork=='show'"
                style="float: right; padding: 3px 0 ;color:#67c23a"
                type="text"
                icon="el-icon-plus"
                @click="editWork='add'"
              ></el-button>
            </div>
            <div v-if="editWork=='show'">
              <div v-for="item in psnWorkInfo" :key="item.pk" class="for-info">
                <div class="for-item">
                  <p>{{item.fields.startTime}}/{{item.fields.endTime}}</p>
                  <div class="for-info-item" style="color:#67c23a">{{item.fields.companyName}}</div>
                </div>
                <div class="for-item">
                  <p>{{item.fields.jobName}}</p>
                  <div class="for-info-item">工作描述：{{item.fields.workDisp}}</div>
                </div>
                <div class="for-item">
                  <div style="margin:20px">
                    <el-button
                      style="float: right; padding: 3px  ;color:#67c23a"
                      type="text"
                      icon="el-icon-edit"
                      @click="funWorkEdit(item)"
                    ></el-button>
                    <el-button
                      style="float: right; padding: 3px  ;color:#67c23a"
                      type="text"
                      icon="el-icon-delete"
                      @click="funWorkDel(item)"
                    ></el-button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <el-form :model="workItem" label-width="80px">
                <el-form-item label="公司名称">
                  <el-input v-model="workItem.fields.companyName"></el-input>
                </el-form-item>
                <el-form-item label="担任职位">
                  <el-input v-model="workItem.fields.jobName"></el-input>
                </el-form-item>
                <el-form-item label="任职时间">
                  <el-date-picker
                    v-model="workTime"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="工作描述">
                  <el-input type="textarea" v-model="workItem.fields.workDisp"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="success" plain @click="funSubInfo(workItem.pk,'work')">确认</el-button>
                  <el-button type="info" plain @click="editWork='show'">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>教育经历</span>
              <el-button
                v-if="editEdu=='show'"
                style="float: right; padding: 3px 0 ;color:#67c23a"
                type="text"
                icon="el-icon-plus"
                @click="editEdu='add'"
              ></el-button>
            </div>

            <div v-if="editEdu=='show'">
              <div v-for="item in psnEduInfo" :key="item.pk" class="for-info">
                <div class="for-item">
                  <p>{{item.fields.schoolName}}({{item.fields.degree}})</p>
                </div>
                <div class="for-item">
                  <div class="for-info-item" style="color:#67c23a">{{item.fields.majorName}}</div>
                  <div class="for-info-item">{{item.fields.gradTime}}届毕业生</div>
                </div>
                <div class="for-item">
                  <div style="margin:20px">
                    <el-button
                      style="float: right; padding: 3px  ;color:#67c23a"
                      type="text"
                      icon="el-icon-edit"
                      @click="funEduEdit(item)"
                    ></el-button>
                    <el-button
                      style="float: right; padding: 3px  ;color:#67c23a"
                      type="text"
                      icon="el-icon-delete"
                      @click="funEduDel(item)"
                    ></el-button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <el-form :model="eduItem" label-width="80px">
                <el-form-item label="毕业院校">
                  <el-input v-model="eduItem.fields.schoolName"></el-input>
                </el-form-item>
                <el-form-item label="主修专业">
                  <el-input v-model="eduItem.fields.majorName"></el-input>
                </el-form-item>
                <el-form-item label="毕业时间">
                  <el-date-picker v-model="eduTime" type="year" placeholder="选择毕业年份"></el-date-picker>
                </el-form-item>
                <el-form-item label="学历">
                  <el-radio-group v-model="eduItem.fields.degree" text-color="#fff" fill="#67c23a">
                    <el-radio-button label="大专"></el-radio-button>
                    <el-radio-button label="本科"></el-radio-button>
                    <el-radio-button label="硕士"></el-radio-button>
                    <el-radio-button label="博士"></el-radio-button>
                    <el-radio-button label="其他"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="success" plain @click="funSubInfo(eduItem.pk,'edu')">确认</el-button>
                  <el-button type="info" plain @click="editWork='show'">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>自我描述</span>
              <el-button
                v-if="!openEditInfo"
                style="float: right; padding: 3px 0 ;color:#67c23a"
                type="text"
                icon="el-icon-edit"
                @click="openEditInfo = !openEditInfo"
              ></el-button>
            </div>
            <div v-if="!openEditInfo">
              <article style="font-size:14px">{{psnBaseInfo.selfDisp}}</article>
            </div>
            <div v-else>
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4}"
                placeholder="请输入内容"
                v-model="psnBaseInfo.selfDisp"
                @blur="funSubBaseInfo"
              ></el-input>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cookies from "vue-cookies";
// import locationSelect from "./locationSelect";
export default {
  components: {
    // locationSelect
  },
  name: "resumeItem",
  data() {
    return {
      openEditBaseInfo: false,
      openEditInfo: false,
      editProject: "show",
      editWork: "show",
      editEdu: "show",
      psnBaseInfo: {},
      psnProjectInfo: [],
      projectItem: { pk: "", fields: {} },
      projectTime: [],
      workItem: { pk: "", fields: {} },
      workTime: [],
      psnWorkInfo: {},
      psnEduInfo: {},
      eduItem: { pk: "", fields: {} },
      eduTime: "",
      showGradTime: "",
      showNowStatus: "请选择求职状态",
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
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  computed: {},
  created() {
    this.axios
      .post("getPsnResumeInfo", {
        psnid: Cookies.get("psnid")
      })
      .then(data => {
        if (data.data.status == "ok") {
          this.psnBaseInfo = JSON.parse(data.data.data.psnBaseInfo)[0].fields;
          this.psnProjectInfo = JSON.parse(data.data.data.psnProjectInfo);
          this.psnWorkInfo = JSON.parse(data.data.data.psnWorkInfo);
          this.psnEduInfo = JSON.parse(data.data.data.psnEduInfo);
        }
      });
  },
  watch: {
    "psnBaseInfo.nowStatus": function(n, o) {
      if (n != o) {
        if (o) {
          this.funSubBaseInfo();
        }
        for (var i in this.nowStatusList) {
          if (n == this.nowStatusList[i].key) {
            this.showNowStatus = this.nowStatusList[i].value;
            break;
          }
        }
      }
    },
    projectTime: function() {
      if (this.projectTime.length) {
        this.projectItem.fields.startTime = this.projectTime[0].Format(
          "yyyy-MM-dd"
        );
        this.projectItem.fields.endTime = this.projectTime[1].Format(
          "yyyy-MM-dd"
        );
      }
    },
    workTime: function() {
      if (this.workTime.length) {
        this.workItem.fields.startTime = this.workTime[0].Format("yyyy-MM-dd");
        this.workItem.fields.endTime = this.workTime[1].Format("yyyy-MM-dd");
      }
    },
    eduTime: function() {
      this.eduItem.fields.gradTime = this.eduTime.Format("yyyy");
    }
  },
  methods: {
    handleCommand(command) {
      this.psnBaseInfo.nowStatus = command.key;
      // this.showNowStatus = command.value;
    },
    /**基本信息上传 */
    funSubBaseInfo() {
      this.axios
        .post("subPsnBaseInfo", {
          psnid: Cookies.get("psnid"),
          msg: this.psnBaseInfo
        })
        .then(data => {
          if (data.data.status == "ok") {
            this.openEditBaseInfo = false;
            this.openEditInfo = false;
            this.$message({
              type: "success",
              message: data.data.msg
            });
          }
        });
    },
    /**项目经历上传 */
    funSubInfo(e, type) {
      if (!e) {
        e = "0000";
      }
      var msg = "";
      var url = "";
      switch (type) {
        case "project":
          url = "subPsnProjectInfo";
          msg = this.projectItem.fields;
          break;
        case "work":
          url = "subPsnWorkInfo";
          msg = this.workItem.fields;
          break;
        case "edu":
          url = "subPsnEduInfo";
          // this.eduItem.fields.gradTime = parseInt(
          //   this.eduItem.fields.gradTime.getFullYear()
          // );
          msg = this.eduItem.fields;
          break;
      }
      this.axios
        .post(url, {
          psnid: Cookies.get("psnid"),
          key: e,
          msg: msg,
          type: type
        })
        .then(data => {
          if (data.data.status == "ok") {
            switch (type) {
              case "project":
                this.editProject = "show";
                this.psnProjectInfo = JSON.parse(data.data.data);
                this.projectItem = { pk: "", fields: {} };
                this.projectTime = [];
                break;
              case "work":
                this.editWork = "show";
                this.psnWorkInfo = JSON.parse(data.data.data);
                this.workItem = { pk: "", fields: {} };
                this.workTime = [];
                break;
              case "edu":
                this.editEdu = "show";
                this.psnEduInfo = JSON.parse(data.data.data);
                this.eduItem = { pk: "", fields: {} };
                this.eduTime = "";
                break;
            }
            this.$message({
              type: "success",
              message: "保存成功"
            });
          }
        });
    },
    funProjectEdit(e) {
      this.projectItem = e;
      this.projectItem.fields.startTime = e.fields.startTime;
      this.projectItem.fields.endTime = e.fields.endTime;
      this.projectTime[0] = e.fields.startTime;
      this.projectTime[1] = e.fields.endTime;
      this.editProject = "edit";
    },
    funWorkEdit(e) {
      this.workItem = e;
      this.workItem.fields.startTime = e.fields.startTime;
      this.workItem.fields.endTime = e.fields.endTime;
      this.workTime[0] = e.fields.startTime;
      this.workTime[1] = e.fields.endTime;
      this.editWork = "edit";
    },
    funEduEdit(e) {
      this.eduItem = e;
      this.workItem.fields.gradTime = e.fields.gradTime;
      this.eduTime = new Date(String(e.fields.gradTime));
      this.editEdu = "edit";
    },
    funProjectDel(e) {
      this.psnProjectInfo.splice(this.psnProjectInfo.indexOf(e), 1);
      this.axios
        .post("delPsnProjectInfo", {
          msg: e.pk
        })
        .then(data => {
          if (data.data.status == "ok") {
            this.$message({
              type: "success",
              message: data.data.msg
            });
          }
        });
    },
    funWorkDel(e) {
      this.psnWorkInfo.splice(this.psnWorkInfo.indexOf(e), 1);
      this.axios
        .post("delPsnWorkInfo", {
          msg: e.pk
        })
        .then(data => {
          if (data.data.status == "ok") {
            this.$message({
              type: "success",
              message: data.data.msg
            });
          }
        });
    },
    funEduDel(e) {
      this.psnEduInfo.splice(this.psnEduInfo.indexOf(e), 1);
      this.axios
        .post("delPsnEduInfo", {
          msg: e.pk
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

.base-info-item {
  font-size: 14px;
  margin: 10px 0;
}
.for-info {
  border-bottom: 1px solid #ddd;
  display: flex;
}
.for-item {
  width: 33%;
  font-size: 14px;
  margin: 10px;
  margin-right: 80px;
}
.for-info-item {
  font-size: 14px;
  margin: 10px 0;
}
</style>