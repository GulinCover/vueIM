<template>
  <div class="home-index">
    <global-top-tools class="top-tools">
      <template slot="left">
        <div class="left-button-group">
          <button @click="switchShow(0)" :class="{'is-active':buttonsActive[0]}">菜单</button>
          <button @click="switchShow(1)" :class="{'is-active':buttonsActive[1]}">市场</button>
          <button @click="switchShow(2)" :class="{'is-active':buttonsActive[2]}">服务</button>
          <div class="show-info" :class="{'is-active':menuActive}">
            <transition-group appear tag="ul">
              <li v-for="(item, key) in menuContent.name" :key="key">
                {{ item }}
              </li>
            </transition-group>
          </div>
        </div>
      </template>
      <template slot="right">
        <div class="right-button-group">
          <button @mouseenter="switchRightShow(0)"
                  :class="{'is-active':rightButtonsActive[0]}">消息通知
          </button>
          <button @mouseenter="switchRightShow(1)"
                  :class="{'is-active':rightButtonsActive[1]}">个人信息
          </button>
          <div @mouseleave="switchRightHiden" class="right-show-info" :class="{'is-active':rightMenuActive}">
            <transition-group appear tag="ul">
              <li v-for="(item, key) in rightMenuContent.name" :key="key">
                {{ item }}
              </li>
            </transition-group>
          </div>
        </div>
      </template>
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
import "vue-animate/dist/vue-animate.min.css"

export default {
  name: "index",
  data() {
    return {
      buttonsActive: [false, false, false],
      menuActive: false,
      currentMenu: -1,
      menuDetailContent: [
        {
          name: [
            "主页", "个人信息", "词条信息"
          ]
        },
        {
          name: [
            "昵称排行榜", "著述排行榜", "交易额排行榜", "账单查询", "购买物品", "拍卖物品"
          ]
        },
        {
          name: [
            "暂无"
          ]
        }
      ],
      menuContent: {
        name: []
      },

      rightButtonsActive: [false, false],
      rightMenuActive: false,
      rightMenuDetailContent: [
        {
          name: [
            "@关注人发布", "@关注人私信", "@评论回复", "@陌生人私信", "系统通知"
          ]
        },
        {
          name: [
            "个人主页", "更改信息", "钱包", "个人账单查询", "注销"
          ]
        },
      ],
      rightMenuContent: {
        name: []
      },

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
  methods: {
    switchRightShow(index) {
      let element = document.querySelector(".right-show-info")
      element.style.left = `${index * 96}px`
      element.style.height = `${this.rightMenuDetailContent[index].name.length * 20 + 40}px`
      this.rightMenuContent = this.rightMenuDetailContent[index]
      this.rightMenuActive = true
    },
    switchRightHiden() {
      this.rightMenuActive = false
    },

    switchShow(index) {
      let element = document.querySelector(".show-info")
      element.style.left = `${index * 96 + 48}px`
      element.style.height = `${this.menuDetailContent[index].name.length * 20 + 40}px`
      if (index === this.currentMenu && this.menuActive) {
        this.buttonsActive[index] = false
        this.menuActive = false
        this.currentMenu = -1
        if (index !== -1) {
          this.menuContent = this.menuDetailContent[index]
        }
        return
      }
      if (index !== this.currentMenu) {
        for (var i = 0; i < this.buttonsActive.length; i++) {
          this.buttonsActive[i] = false
        }
        this.buttonsActive[index] = true
        if (index !== -1) {
          this.menuContent = this.menuDetailContent[index]
        }
        this.menuActive = true
        this.currentMenu = index
      }
    },
  }
}
</script>

<style>
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all 0.2s ease;
}

.v-move {
  transition: all 0.2s ease;
}

.v-leave-active {
  position: absolute;
}

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

.top-tools .right-button-group,
.top-tools .left-button-group {
  position: relative;
  height: 28px;
}

.top-tools .right-button-group > button,
.top-tools .left-button-group > button {
  border-radius: 8px;
  border: none;
  width: 80px;
  height: 18px;
  margin: 5px 8px 0;
  transition: all .5s;
}

.top-tools .right-button-group > button:nth-last-child(2) {
  margin-right: 96px;
}

.top-tools .left-button-group > button:first-child {
  margin-left: 48px;
}

.top-tools .left-button-group > button.is-active {
  border-radius: 4px;
  color: whitesmoke;
  background: #8ec5fc;
}

.top-tools .left-button-group > button.is-active:first-child {
  margin-left: 48px;
}

.top-tools .right-button-group > button:hover,
.top-tools .left-button-group > button:hover {
  border-radius: 4px;
  color: whitesmoke;
  background: #8ec5fc;
}

.top-tools .right-button-group .right-show-info {
  overflow: hidden;
  width: 160px;
  position: relative;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  transform: translateY(-10px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: all .5s;
  padding: 20px 10px;
  backdrop-filter: blur(9px);
  background: rgba(211, 211, 211, .95);
  box-shadow: 0 0 5px black;
}

.top-tools .right-button-group .right-show-info.is-active {
  visibility: visible;
  opacity: 1;
  left: 48px;
  z-index: 998;
  transform: translateY(6px);
}

.top-tools .left-button-group .show-info {
  overflow: hidden;
  width: 160px;
  position: relative;
  visibility: hidden;
  opacity: 0;
  left: 48px;
  top: 0;
  z-index: -1;
  transform: translateY(-10px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: all .5s;
  padding: 20px 10px;
  backdrop-filter: blur(9px);
  background: rgba(211, 211, 211, .95);
  box-shadow: 0 0 5px black;
}

.top-tools .left-button-group .show-info.is-active {
  visibility: visible;
  opacity: 1;
  left: 48px;
  z-index: 998;
  transform: translateY(6px);
}

.right-button-group .right-show-info > ul,
.left-button-group .show-info > ul {
  width: 160px;
  margin-left: 20px;
}

.right-button-group .right-show-info > ul > li,
.left-button-group .show-info > ul > li {
  width: 160px;
  height: 20px;
  background: rgba(211, 211, 211, .95);
}

.right-show-info > ul > li,
.show-info > ul > li {
  transition: all .2s;
}

.right-show-info > ul > li:hover,
.show-info > ul > li:hover {
  cursor: pointer;
  color: #8ec5fc;
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