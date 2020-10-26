<template>
  <div class="home-index">
    <global-top-tools class="top-tools">
      <template slot="middle" class="middle">
        <span>{{ date }}</span>
      </template>
    </global-top-tools>

    <div style="height: 24px"></div>
    <div class="home-content">
      <div class="home-content-left"></div>
      <div class="home-content-middle"></div>
      <div class="home-content-right"></div>
    </div>

    <global-bottom :top-data-list="topDataList"
                   :bottom-data-list="bottomDataList"
    ></global-bottom>

  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import {timeTools} from "@/utils/timeTools"
import GlobalBottom from "@/components/GlobalBottom";

export default {
  name: "index",
  data() {
    return {
      date: '',
      topDataList: [
        {
          title: "个人信息",
          content: [
            {
              text: "GulinCover@github",
              url: ""
            },
            {
              text: "1208625327@qq.com",
              url: ""
            }
          ],
        },
        {
          title: "账户",
          content: [
            {
              text: "账户申诉",
              url: ""
            }
          ],
        },
        {
          title: "相关社区",
          content: [
            {
              text: "Github.com",
              url: "https://www.github.com",
            },
            {
              text: "gitee.com",
              url: "https://www.gitee.com"
            }
          ],
        }
      ],
      bottomDataList: {
        top: "Welcome to the memory of the internet",
        text: "Power By GulinCover@2020.10.21"
      }
    }
  },
  components: {
    GlobalBottom,
    GlobalTopTools
  },
  created() {
    this.date = timeTools(new Date())
    setInterval(() => {
      this.date = timeTools(new Date())
    }, 1000)
  }
}
</script>

<style>
.home-index .middle span {
  font-size: 8px;
}

.home-index .top-tools {
  width: 100vw;
  position: fixed;
  z-index: 999;
}

.home-index .home-content {
  display: flex;
  height: 800px;
}

.home-content .home-content-left {
  flex: 1;
  background-color: #535353;
}

.home-content .home-content-middle {
  flex: 8;
  background-color: beige;
}

.home-content .home-content-right {
  flex: 3;
  background-color: aqua;
}
</style>