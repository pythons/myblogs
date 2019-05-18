<template>
  <div class="entMain">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="10" :offset="7">
          <div class="content-left">
            <el-button
              v-show="!editBaseInfo"
              style="color:#67C23A;float:right;padding:0"
              type="text"
              icon="el-icon-edit"
              @click="editBaseInfo = true"
            ></el-button>

            <div v-if="!editBaseInfo">
              <span class="title">{{entBaseInfo.entName}}</span>
              <p>
                {{entBaseInfo.entClass}}
                <span>|</span>
                {{entBaseInfo.entScale}}
              </p>
              <p>
                {{entBaseInfo.entContectName}}
                <span>|</span>
                {{entBaseInfo.tel}}
                <span>|</span>
                {{entBaseInfo.email}}
              </p>
              <el-tag
                :key="index"
                v-for="(tag,index) in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
                type="success"
              >{{tag}}</el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              ></el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>
            </div>
            <div v-else>
              <el-form
                style="padding-top:20px"
                label-width="100px"
                :model="entBaseInfo"
                ref="entBaseInfo"
                :rules="rules"
              >
                <el-form-item label="企业名称" prop="entName">
                  <el-input clearable v-model="entBaseInfo.entName" placeholder="请输入完整的企业名称"></el-input>
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

                <el-form-item label="联系人" prop="entContectName">
                  <el-input clearable v-model="entBaseInfo.entContectName" placeholder="请输入企业联系人"></el-input>
                </el-form-item>
                <el-form-item label="联系邮箱" prop="entContectName">
                  <el-input clearable v-model="entBaseInfo.email" placeholder="请输入企业联系人"></el-input>
                </el-form-item>
                <el-form-item label="联系号码" prop="entContectName">
                  <el-input clearable v-model="entBaseInfo.tel" placeholder="请输入企业联系人"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="success" plain @click="funSub('entBaseInfo')">确认</el-button>
                  <el-button type="info" plain @click="editBaseInfo = false">返回</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>

          <hr>

          <div class="content-left">
            <span class="title">
              <b>企业介绍</b>
            </span>
            <el-button
              v-if="!editSummary"
              style="color:#67C23A;float:right;padding:0"
              type="text"
              icon="el-icon-edit"
              @click="editSummary=true"
            ></el-button>
            <el-button
              v-else
              style="color:#67C23A;float:right;padding:0"
              type="text"
              icon="el-icon-close"
              @click="editSummary=false"
            ></el-button>
            <p v-if="!editSummary" class="ent-disp">{{entBaseInfo.entSummary}}</p>
            <el-input
              style="padding-top:20px"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              v-else
              class="ent-disp"
              v-model="entBaseInfo.entSummary"
              @blur="funSubOnBlur"
            ></el-input>
          </div>
          <hr>

          <div class="content-left">
            <span class="title">
              <b>交通介绍</b>
            </span>
            <el-button
              v-if="!edit"
              style="color:#67C23A;float:right;padding:0"
              type="text"
              icon="el-icon-edit"
              @click="edit=true"
            ></el-button>
            <el-button
              v-else
              style="color:#67C23A;float:right;padding:0"
              type="text"
              icon="el-icon-close"
              @click="edit=false"
            ></el-button>
            <div v-if="!edit">
              <p class="ent-disp">{{entBaseInfo.entAddress}}</p>
            </div>
            <el-input
              style="padding-top:20px"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              v-else
              class="ent-disp"
              v-model="entBaseInfo.entAddress"
              @blur="funSubOnBlur"
            ></el-input>
          </div>
          <hr>

          <div class="content-left">
            <span class="title">
              <b>在招职位</b>
            </span>
            <router-link to="addjob">
              <el-button
                style="color:#67C23A;float:right;padding:0"
                type="text"
                icon="el-icon-plus"
                @click="editSummary=true"
              ></el-button>
            </router-link>

            <div>
              <p v-for="(item,index) in entJobInfo" :key="index">
                <span class="job-list">
                  {{item.jobName}}
                  <span>|</span>
                  {{item.jobPay}}
                  <span>|</span>
                  {{item.degree}}
                </span>
                <router-link :to="{name: 'addjob', query:{jobid: item.jobid}}">
                  <el-button
                    style="color:#67C23A;float:right;padding:0"
                    type="text"
                    icon="el-icon-edit"
                  ></el-button>
                </router-link>
              </p>
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
      editBaseInfo: false,
      inputVisible: false,
      editSummary: false,
      edit: false,
      inputValue: "",
      dynamicTags: ["五险一金", "绩效奖金", "年终分红"],
      entBaseInfo: {
        entName: "杭州智道网络科技有限公司",
        entClass: "私营企业",
        entScale: "1-49人",
        tel: "13756053551",
        email: "example@example.com",
        entContectName: "HR",
        entTag: ["五险一金", "绩效奖金", "年终分红"]
      },
      entJobInfo: [],
      rules: {
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
    this.axios
      .post("getEntBaseInfo", {
        entid: Cookies.get("entid"),
        key: "0000"
      })
      .then(data => {
        if (data.data.status == "ok") {
          this.entBaseInfo = JSON.parse(data.data.data.entBaseInfo)[0].fields;
          this.entBaseInfo.tel = JSON.parse(
            data.data.data.entAccountInfo
          )[0].fields.tel;
          this.entBaseInfo.email = JSON.parse(
            data.data.data.entAccountInfo
          )[0].fields.email;
          this.dynamicTags = this.entBaseInfo.entTag.split(",");
          let arr = JSON.parse(data.data.data.entJobInfo);
          for (var i in arr) {
            arr[i].fields.jobid = arr[i].pk;
            this.entJobInfo.push(arr[i].fields);
          }
          if (this.entJobInfo.length > 5) {
            this.entJobInfo = this.entJobInfo.slice(0, 5);
          }
        }
      });
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.entBaseInfo.entTag = String(this.dynamicTags);
      this.axios.post("updateEntBaseInfo", {
        entid: Cookies.get("entid"),
        msg: this.entBaseInfo
      });
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
        this.entBaseInfo.entTag = String(this.dynamicTags);
        this.axios.post("updateEntBaseInfo", {
          entid: Cookies.get("entid"),
          msg: this.entBaseInfo
        });
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    funSubOnBlur() {
      this.edit = false;
      this.editSummary = false;
      this.axios
        .post("updateEntBaseInfo", {
          entid: Cookies.get("entid"),
          msg: this.entBaseInfo
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
    funSub(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.editBaseInfo = false;
          this.axios
            .post("updateEntBaseInfo", {
              entid: Cookies.get("entid"),
              msg: this.entBaseInfo
            })
            .then(data => {
              if (data.data.status == "ok") {
                this.$message({
                  type: "success",
                  message: data.data.msg
                });
              }
            });
        } else {
          return false;
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
  font-size: 14px;
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
</style>
