<template>
  <div class="singleBlogItem">
    <header>
      <div class="top">
        <el-row :gutter="20">
          <el-col :span="6" :offset="4">
            <div class="top-left">
              <a href>社区</a>
              <a href>详情</a>
              <a href>公告</a>
              <a href>帮助</a>
            </div>
          </el-col>
          <el-col :span="6" :offset="4">
            <div class="top-right">
              <router-link to="/login">登录</router-link>
              <router-link to="/signup">注册</router-link>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <el-row :gutter="20">
          <el-col :span="10" :offset="7">
            <ul>
              <li>
                <router-link to>预览</router-link>
              </li>
              <li>
                <router-link to>预览</router-link>
              </li>
              <li>
                <router-link to>预览</router-link>
              </li>
              <li>
                <router-link to>预览</router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </header>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8" :offset="4">
          <div class="content-left">
            <span>博客标题</span>
            <p>更新时间:</p>
            <p>标签:</p>
          </div>

          <hr>
          <article>
            岗位职责：
            1、负责公司业务线产品的开发与维护，包括流量投放、工单、CRM和教务管理等内部系统，以及直播授课、录播授课、课程中心和用户中心等对外系统；
            2、独立负责一个产品的技术研发和维护工作，定期组织代码评审，为项目团队中的其他人员提供支援；
            3、协助测试人员完成集成测试、性能测试和预发布环境测试；
            4、参与业务线中其他项目的技术攻关。
            任职要求：
            1、具有良好沟通能力，工作中必须从为团队和项目负责的角度出发思考问题；
            2、有良好的项目流程和代码规范意识，热爱编写文档，对代码有洁癖；
            3、负责过三个以上项目开发工作，所带的后端开发人员不少于3个；
            4、精通Java编程语言，熟练掌握常用数据结构与算法，具备较强对象建模能力，熟练掌握设计模式；
            5、掌握J2EE主流框架技术原理，例如MyBatis/Spring/Spring MVC/Spring Boot等；
            6、熟悉消息队列、缓存、NOSQL等开源分布式服务；
            7、在主流数据库设计与优化方面有实战经验，能够进行表结构设计和sql语句调优；
            8、有Dubbo或Spring Cloud实际项目经验，熟悉微服务框架，并且能够对框架进行定制开发；
            9、有较强多线程并发编程经验，熟练掌握HTTP、TCP等通讯协议；
            10、计算机技术相关专业毕业，至少5年实际经验。
            加分项：
            1、有在线教育、视频直播、短视频、社群和营销等行业工作经验；
            2、英语能力可以正常使用Google、github、StackOverflow和其他技术官网等网站；
            3、有高质量的个人开源项目或博客。
          </article>
        </el-col>

        <el-col :span="6" :offset="4">
          <div class="content-right">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <!-- <span>标题</span> -->
                <span>作者</span>
              </div>
              <div>
                <!-- <p>正文</p> -->
                <article>简介</article>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "singleBlogItem",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
header {
  background: #f8f8f9;
}
.top {
  background: #67c23a;
  height: 36px;
  width: 100%;
  padding-top: 12px;
}
.top-left {
  text-align: left;
}
.top-right {
  text-align: right;
}
.top-left a {
  padding: 0px 10px;
  font-size: 12px;
  text-decoration: none;
  color: #f8f8f9;
}
.top-right a {
  padding: 0px 10px;
  font-size: 12px;
  text-decoration: none;
  color: #f8f8f9;
}
.container {
  background: #f8f8f9;
  padding: 30px;
}
.container ul {
  list-style-type: none;
  padding: 0;
}
.container ul li {
  display: inline-block;
  margin: 0 30px;
}
.container ul li a {
  text-decoration: none;
  color: #303133;
  font-size: 18px;
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
h3 {
  margin: 40px 0 0;
}
</style>
