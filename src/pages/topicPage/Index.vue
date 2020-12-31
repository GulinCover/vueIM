<template>
  <div class="topic-detail-page">
    <div class="top-wrapper">
      <global-top-tools>
        <template slot="left">
          <div class="left-component">
            <top-tool-left-button :data="menuInfo" class="top-tool-button">
            </top-tool-left-button>
            <top-tool-left-button :data="menuInfo" class="top-tool-button">
            </top-tool-left-button>
            <top-tool-left-button :data="menuInfo" class="top-tool-button">
            </top-tool-left-button>
          </div>
        </template>

        <template slot="right">
          <div class="right-component">
            <div class="info" v-if="userIsLogin(loginInfo)">

              <div class="avatar">
                <img src="https://pic4.zhimg.com/v2-fdf42a3d94050a365cec00ccd31e9f1f.png" alt="">
              </div>

              <div class="button">
                <top-tool-right-button :data="logoutInfo">
                </top-tool-right-button>
              </div>
            </div>
            <div v-else>
              <top-tool-right-button :data="pleaseLoginInfo">
              </top-tool-right-button>
            </div>
          </div>
        </template>
      </global-top-tools>
    </div>

    <div class="topic-detail-page-content">
      <div class="topic-wrapper">
        <topic-wrapper>
        </topic-wrapper>
      </div>

      <div class="dividing-line"></div>

      <div class="comment-wrapper">
        <comment-wrapper>

        </comment-wrapper>
      </div>
    </div>

    <global-bottom
        class="global-bottom"
    ></global-bottom>

  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import GlobalBottom from "@/components/GlobalBottom";
import TopicWrapper from "@/pages/topicPage/TopicWrapper";
import CommentWrapper from "@/pages/topicPage/CommentWrapper";
import TopToolLeftButton from "@/components/button/TopToolLeftButton";
import TopToolRightButton from "@/components/button/TopToolRightButton";

export default {
  name: "Index",
  components: {
    TopToolLeftButton,
    TopToolRightButton,
    GlobalTopTools,
    GlobalBottom,

    TopicWrapper,
    CommentWrapper,
  },
  data() {
    return {
      loginInfo: {
        userId: '1',
        userName: "alex",
        userSex: '1',
        userLevel: '1',
        userAvatar: ""
      },
      menuInfo: {
        content: "menu"
      },
      pleaseLoginInfo: {
        content: '请登录'
      },
      logoutInfo: {
        content: "Quit"
      }
    }
  },
  methods: {
    userIsLogin() {
      if (this.loginInfo.userId === null ||
          this.loginInfo.userName === null ||
          this.loginInfo.userSex === null ||
          this.loginInfo.userLevel === null ||
          this.loginInfo.userId === '' ||
          this.loginInfo.userName === '' ||
          this.loginInfo.userSex === '' ||
          this.loginInfo.userLevel === '' ||
          this.loginInfo.userId === undefined ||
          this.loginInfo.userName === undefined ||
          this.loginInfo.userSex === undefined ||
          this.loginInfo.userLevel === undefined
      ) return false
      return true
    },
  }
}
</script>

<style scoped>
.topic-detail-page {
  padding-top: var(--global-top-height);
}

.top-wrapper {
  top: 0;
  margin: 0 auto;
  width: 100vw;
  position: fixed;
  z-index: 999;
}

.right-component {
  margin-right: 15px;
  padding-right: 15px;
  height: var(--global-top-height);
  width: 500px;
}

.right-component .top-tool-button:not(:first-child) {
  margin-left: 5px;
}

.right-component .info {
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.avatar {
  width: var(--global-top-button-height);
  height: var(--global-top-button-height);
  background-color: white;
  margin-right: 10px;
  border-radius: 50%;
  transition: all 0.5s;
}
.avatar:hover {
  color: #c9c9c9;
  cursor: pointer;
  background-color: cornflowerblue;
}

.avatar img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: top left;
}

.left-component {
  height: var(--global-top-height);
  margin-left: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.left-component .top-tool-button:not(:last-child) {
  margin-right: 5px;
}

.topic-detail-page-content {
  position: relative;
  min-height: 80vh;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.dividing-line,
.comment-wrapper,
.topic-wrapper {
  width: var(--topic-page-topic-content-width);
  margin: 0 auto;
}

.comment-wrapper {
  width: var(--topic-page-comment-content-width);
}

.dividing-line {
  width: var(--topic-page-comment-content-width);
  margin: 10px auto;
  background-color: var(--global-dividing-line-color);
  height: 2px;
  border-radius: 4px;
}


</style>