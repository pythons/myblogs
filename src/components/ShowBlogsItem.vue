<template>
  <div class="showBlogsItem">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <div class="title">BLOGS</div>
        </el-col>
      </el-row>
      <div v-for="o in 4" :key="o.item" class="singleItem">
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>标题</span>
              </div>
              <div>
                <p>正文</p>
              </div>
              <el-button style="float: right; padding: 3px 0" type="text">READ</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="btn">
            <el-button type="success" round>更多</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "showBlogsItem",
  data() {
    return {};
  }
};
</script>
<style scoped>
.showBlogsItem {
  background: #f8f8f9;
}
.content {
  padding: 60px;
  color: #303133;
}
.content .title {
  color: #303133;
  text-align: center;
  font-size: 18px;
  text-decoration: #303133;
  text-decoration-line: underline;
}
.singleItem {
  margin: 30px 0;
}
p {
  font-size: 14px;
}
.btn {
  text-align: right;
}
</style>
