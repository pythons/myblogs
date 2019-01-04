<template>
  <footer class="footerItem">
    <el-row>
      <el-col :span="6" :offset="4">
        <div class="leftItem">
          <h3>LINKS</h3>
          <!-- <font-awesome-icon icon="fab fa-github"/> -->
          <i class="fab fa-github"></i>
          <a>GitHub</a>
          <br>
          <i class="fab fa-weibo"></i>
          <a>Weibo</a>
        </div>
      </el-col>
      <el-col :span="6" :offset="4">
        <div class="rightItem">
          <h3>联系我</h3>
          <p>
            Tel:
            +86 1375 555 5555
          </p>
          <p>
            Email:
            qiulangcheng@gmail.com
          </p>
          <p>
            Loc:
            Earth
          </p>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>

<script>
export default {
  name: "footerItem",
  data() {
    return {};
  }
};
</script>
<style scoped>
footer {
  height: 200px;
  width: 100vm;
  background: #303133;
}
.leftItem {
  color: #f8f8f9;
}
.rightItem {
  color: #f8f8f9;
}
</style>
