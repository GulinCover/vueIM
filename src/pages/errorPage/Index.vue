<template>
  <div class="error-component">
    <div class="top-tools">
      <global-top-tools>
      </global-top-tools>
    </div>
    <single-card-component class="single-card-component">
      <template slot="content">
        <div class="content">
          <div class="title">
            <h1>{{dataInfo.title}}</h1>
          </div>
          <div class="throw-backdrop">
            <i class="bi bi-upc-scan fa-5x"></i>
          </div>
          <div class="code">
            {{dataInfo.code}}
          </div>
          <div class="desc">
            <p>
              {{dataInfo.desc}}
            </p>
          </div>
          <div class="return">
            <a :href="dataInfo.returnUrl">
              {{dataInfo.returnDesc}}
            </a>
          </div>
        </div>
      </template>
    </single-card-component>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css"
import GlobalTopTools from "@/components/GlobalTopTools";
import SingleCardComponent from "@/components/SingleCardComponent";
export default {
  name: "Index",
  components: {
    GlobalTopTools,
    SingleCardComponent,
  },
  props: {},
  data() {
    return {
      dataInfo: {
        title: '请求出现问题',
        code: '404',
        desc: '访问的页面不存在',
        returnDesc: "返回主页",
        returnUrl: "/"
      }
    }
  },
  mounted() {
  },
  methods: {

  }

}
</script>

<style scoped>
.top-tools {
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 999;
}

.single-card-component .content {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.content .title {
  position: relative;
  margin-bottom: 30px;
}

.content .throw-backdrop {
  width: 100px;
  height: 100px;
  text-align: center;
  margin-bottom: 30px;
}
.content .code {
  margin-bottom: 30px;
}
.content .desc {
  color: #57a8ff;
}
.content .return {
  position: absolute;
  bottom: 10px;
}
.content .return a {
  color: black;
  transition: all .2s;
}
.content .return a:hover {
  color: grey;
}
</style>