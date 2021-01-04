<template>
  <div class="home-index">
    <global-top-tools class="top-tools">
    </global-top-tools>

    <div style="height: 24px"></div>
    <div class="home-content">
      <div class="home-content-left"></div>
      <div class="home-content-middle">
        <global-card v-for="(item, index) in cards" :key="index"
                     :card="item"
        ></global-card>

      </div>
      <div class="home-content-right"></div>
    </div>

    <global-bottom
    ></global-bottom>

  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
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
          id: '123',
          name: "alex",
          avatar: "",
          sex: "2",
          level: "1",
          title: "this is a title",
          topicId: '125',
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
          id: '1233',
          name: "test",
          avatar: "",
          sex: "3",
          level: "2",
          title: "this is a title",
          topicId: '1242145',
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
          id: '1231',
          name: "qwe",
          avatar: "",
          sex: "4",
          level: "4",
          title: "this is a title",
          topicId: '12412425',
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
          id: '122313',
          name: "tyew",
          avatar: "",
          sex: "5",
          level: "1",
          title: "this is a title",
          topicId: '4235235',
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
          id: '123',
          name: "alex",
          avatar: "",
          sex: "2",
          level: "1",
          title: "this is a title",
          topicId: '5325235',
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
          id: '123213',
          name: "alex",
          avatar: "",
          sex: "2",
          level: "1",
          title: "this is a title",
          topicId: '45151235412',
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
  }
}
</script>

<style>
.home-index {
  min-height: 100%;
  position: relative;
}
.home-index .middle span {
  font-size: 8px;
}

.home-index .top-tools {
  width: 100vw;
  position: fixed;
  z-index: 999;
}

.home-index .home-content {
  margin-top: 10px;
  display: flex;
  margin-bottom: 300px;
  /*height: 800px;*/
}

.home-content .home-content-left {
  flex: 2;
  /*background-color: #535353;*/
}

.home-content .home-content-middle {
  /*background-color: beige;*/
}

.home-content .home-content-right {
  flex: 2;
  /*background-color: aqua;*/
}
</style>