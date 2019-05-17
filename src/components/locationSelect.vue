<template>
  <div>
    <div class="circle">
      <input
        class="siteInput"
        id="siteInput"
        type="text"
        v-model="site"
        placeholder="请输入目的地"
        @click.stop="isShow=!isShow"
      >
      <!-- -->
      <div class="siteBox" id="siteBox" v-if="isShow">
        <header>
          <ul class="classify">
            <li
              :class="{active:isClassify===key}"
              v-for="(arr,key,index) in this.locationName"
              :key="index"
              @click="isClassify=key"
            >
              <a class="classify-a" href="#">{{key}}</a>
            </li>
          </ul>
        </header>
        <main class="site-name">
          <dl v-for="value of isClassify" :key="value">
            <dt>{{value}}</dt>
            <div class="list-dd">
              <dd
                v-for="(val,index) in locationName[isClassify][value]"
                :key="index"
                @click="site=val;isShow=false"
              >
                <a class="list-a" href="#">{{val}}</a>
              </dd>
            </div>
          </dl>
        </main>
      </div>
    </div>

    <!--遮罩层，实现点击其他地方收起-->
    <div class="overlay" @click="isShow=false"></div>
  </div>
</template>

<script>
import { areaData } from "../assets/areaData.js";
export default {
  name: "location-select",
  created() {
    this.getData();
  },
  data() {
    return {
      site: "深圳",
      locationName: {
        ABCDE: {},
        FGHJ: {},
        KLMNP: {},
        QRSTW: {},
        XYZ: {}
      },
      isClassify: "ABCDE",
      isShow: false
    };
  },
  methods: {
    getData() {
      // let xhr = new XMLHttpRequest();
      // xhr.open("get", "../assets/areaData.json");
      // xhr.send();
      // xhr.onreadystatechange = () => {
      // if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(JSON.parse(areaData))
      let locationN = areaData;
      for (let key of Object.keys(locationN)) {
        for (let key2 of Object.keys(this.locationName)) {
          let pattern = new RegExp("[" + key2.toString() + "]");
          if (pattern.test(key)) {
            if (Array.isArray(this.locationName[key2][key.charAt(0)])) {
              this.locationName[key2][key.charAt(0)].push(locationN[key]);
            } else {
              this.$set(this.locationName[key2], key.charAt(0), []);
              this.locationName[key2][key.charAt(0)].push(locationN[key]);
            }
            break;
          }
        }
        // }
        // }
      }
    }
  }
};
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.classify-a {
  color: #ce028e;
  text-decoration: none;
}
.circle {
  position: relative;
  width: 220px;
  z-index: 1211;
}
.siteInput {
  /* height: 40px;
  width: 100%; */
  
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.siteBox {
  width: 420px;
  border: 1px solid #000;
}
.classify {
  height: 60px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.classify li {
  position: relative;
  padding: 10px 5px;
}
.classify li a {
  display: block;
  height: 100%;
  width: 100%;
}
.classify li::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #d95b59;
  z-index: 1111;
  transform: scaleX(0);
  transition: all 0.3s;
}
.classify li:hover::before {
  transform: scaleX(1);
}
.active::after {
  content: "";
  position: absolute;
  bottom: -0.5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #d95b59;
}
.site-name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.site-name dl {
  width: 100%;
  display: flex;
  margin: 6px 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
}
.site-name dl dt {
  width: 10px;
  line-height: 30px;
  color: #b11505;
  font-weight: bold;
}
.list-dd {
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.list-dd dd {
  margin: 0 12px 0 0;
  line-height: 30px;
}
.list-a {
  color: #999;
  font-size: 14px;
  text-decoration: none;
}
.list-a:hover {
  color: #b11505;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
}
</style>