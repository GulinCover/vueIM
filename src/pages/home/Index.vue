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
      <div class="home-content-middle">
        <global-card v-for="(item, index) in cards" :key="index"
                     :card="item"
        ><hr></global-card>

      </div>
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
import GlobalCard from "@/components/GlobalCard";

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
      },

      cards: [
        {
          title: "this is a title",
          imgs: [
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
          ],
          content: "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content" +
              "this is a prev-contentthis is a prev-contentthis is a prev-content",
          tags: [
            {
              name: "ok",
              tag: ""
            },
            {
              name: "no ok",
              tag: ""
            },
            {
              name: "bad",
              tag: ""
            },
          ],
        },
        {
          title: "this is a title",
          content: "this is a prev-content",
          imgs: [
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
          ],
          tags: [
            {
              name: "ok",
              tag: ""
            },
            {
              name: "no ok",
              tag: ""
            },
            {
              name: "bad",
              tag: ""
            },
          ],
        },
        {
          title: "this is a title",
          content: "this is a prev-content",
          imgs: [
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1011150365,2195457257&fm=26&gp=0.jpg",
          ],
          tags: [
            {
              name: "ok",
              tag: ""
            },
            {
              name: "no ok",
              tag: ""
            },
            {
              name: "bad",
              tag: ""
            },
          ],
        },
        {
          title: "this is a title",
          content: "this is a prev-content",
          imgs: [],
          tags: [
            {
              name: "ok",
              tag: ""
            },
            {
              name: "no ok",
              tag: ""
            },
            {
              name: "bad",
              tag: ""
            },
          ],
        },
        {
          title: "this is a title",
          content: "this is a prev-content",
          imgs: [],
          tags: [
            {
              name: "ok",
              tag: ""
            },
            {
              name: "no ok",
              tag: ""
            },
            {
              name: "bad",
              tag: ""
            },
          ],
        },
        {
          title: "this is a title",
          content: "this is a prev-content",
          imgs: [],
          tags: [
            {
              name: "ok",
              tag: ""
            },
            {
              name: "no ok",
              tag: ""
            },
            {
              name: "bad",
              tag: ""
            },
          ],
        },
      ],
    }
  },
  components: {
    GlobalCard,
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
  /*height: 800px;*/
}

.home-content .home-content-left {
  flex: 2;
  /*background-color: #535353;*/
}

.home-content .home-content-middle {
  width: 1000px;
  background-color: beige;
}

.home-content .home-content-right {
  flex: 2;
  /*background-color: aqua;*/
}
</style>