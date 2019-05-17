<template>
  <div class="singleBlogItem">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="4">
          <div class="content-left">
            <span></span>
            <p>更新时间:</p>
            <p>标签:</p>
          </div>

          <hr>
          <article></article>
          <!-- <div class="comment"></div> -->
        </el-col>

        <el-col :span="6" :offset="4">
          <div class="content-right">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <!-- <span>标题</span> -->
                <span>公司简介</span>
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
  name: "singleBlogItem",
  data() {
    return {};
  },
  methods: {},
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
