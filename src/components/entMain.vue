<template>
  <div class="entMain">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="4">
          <div class="content-left">
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
              :key="tag"
              v-for="tag in dynamicTags"
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

          <hr>

          <div class="content-left">
            <span class="title">
              <b>企业介绍</b>
            </span>
            <p class="ent-disp">{{entBaseInfo.entSummary}}</p>
          </div>
          <hr>

          <div class="content-left">
            <span class="title">
              <b>企业地址</b>
            </span>
            <p class="ent-disp">{{entBaseInfo.entSummary}}</p>
          </div>
        </el-col>

        <el-col :span="8" :offset="4">
          <div class="content-right">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>在招职位</span>
              </div>
            </el-card>
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
      inputVisible: false,
      inputValue: "",
      dynamicTags: ["五险一金", "绩效奖金", "年终分红"],
      entBaseInfo: {
        entName: "杭州智道网络科技有限公司",
        entClass: "私营企业",
        entScale: "1-49人",
        tel: "13756053551",
        email: "example@example.com",
        entContectName: "HR"
      }
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  computed: {},
  created() {}
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
  margin-left: 10px;
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
  color: #909399;
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
</style>
