<template>
  <div class="showBlogsItem">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <div class="title">开放招聘周</div>
        </el-col>
      </el-row>
      <div class="singleItem">
        <el-row :gutter="20">
          <el-col :span="6" :offset="6">
            <el-card class="box-card">
                <p>三月 2019</p>
            </el-card>
          </el-col>
          <el-col :span="6" >
            <el-card class="box-card">
                <el-card>
                    
                </el-card>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showBlogsItem",
  data() {
    return {
    
    };
  },
  created() {

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
}
.singleItem {
  margin: 30px 0;
}
.singleItem a {
  color: #303133;
  text-decoration: none;
}
p {
  font-size: 14px;
}
.btn {
  text-align: right;
}
</style>
