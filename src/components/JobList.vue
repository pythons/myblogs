<template>
  <div class="showBlogsItem">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <div class="title">热门招聘</div>
        </el-col>
      </el-row>
      <div v-for="blog in blogs" :key="blog.title" class="singleItem">
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <!-- <span>标题</span> -->
                <router-link :to="'/job/'+blog.id">
                  <span>{{blog.title}}</span>
                </router-link>
              </div>
              <div>
                <!-- <p>正文</p> -->
                <article>{{blog.body}}</article>
              </div>
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
    return {
      blogs: {
        title: "",
        body: "",
        id: 0
      }
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      var arr = [];
      for (let key in data.data) {
        arr[key] = data.data[key];
      }
      this.blogs = arr;
    });
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
