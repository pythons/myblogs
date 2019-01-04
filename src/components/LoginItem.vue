<template>
  <div class="loginItem">
    <div class="item">
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
  </div>
</template>
<script>
export default {
  name: "loginItem",
  data() {
    return {};
  }
};
</script>
<style scoped>
*{
    
  overflow: hidden;
}
.loginItem {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background: url("../assets/d821ed05984a8ebda0b39c73ead89f8d.png") center
    no-repeat fixed;
  background-size: cover;
}
.item {
  text-align: center;
}
</style>
