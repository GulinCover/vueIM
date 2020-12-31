<template>
  <div class="submit-page">
    <global-top-tools class="top-tool">
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

    <div class="editor-wrapper">
      <div class="editor-front-cover">
        <i class="fa fa-picture-o fa-3x" aria-hidden="true"></i>
        <h3>{{submitPageFrontCoverPrompt}}</h3>
      </div>
      <div class="editor-title">
        <input type="text" placeholder="请输入标题" v-model="topicTitle">
      </div>
      <div class="editor-comment">
        <rich-text-editor></rich-text-editor>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools"
import {timeTools} from "@/utils/timeTools";
import RichTextEditor from "@/pages/submitPage/RichTextEditor";
import {submitPageFrontCoverPrompt} from "@/globalApi/GlobalApi";
import TopToolLeftButton from "@/components/button/TopToolLeftButton";
import TopToolRightButton from "@/components/button/TopToolRightButton";
export default {
  name: "Index",
  components: {
    GlobalTopTools,
    RichTextEditor,

    TopToolLeftButton,
    TopToolRightButton,
  },
  data() {
    return {
      topicTitle: '',
      submitPageFrontCoverPrompt: submitPageFrontCoverPrompt,
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
  },
  mounted() {

  },
  created() {
    this.date = timeTools(new Date())
    setInterval(() => {
      this.date = timeTools(new Date())
    }, 1000)
  }
}
</script>

<style scoped>
.submit-page .top-tool {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.submit-page {
  margin-top: 28px;
}

.submit-page .editor-wrapper {
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-component {
  padding-right: 5px;
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

.editor-wrapper .editor-front-cover {
  margin-top: 20px;
  width: inherit;
  height: 200px;
  position: relative;
  background-color: #cfd9df;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all .5s ease-in-out;
}
.editor-wrapper .editor-front-cover h3 {
  transform: translateY(10px);
  visibility: hidden;
  color: grey;
  opacity: 0;
  transition: all .5s;
}

.editor-wrapper .editor-front-cover:hover {
  cursor: pointer;
  backdrop-filter: blur(9px);
  background-color: rgba(222,222,222,.25);
  border-radius: 14px;
}
.editor-wrapper .editor-front-cover:hover h3 {
  visibility: visible;
  opacity: 1;
  color: black;
  transform: translateY(0px);
}
.editor-wrapper .editor-front-cover i {
  color: #e2ebf0;
  transition: all .2s;
}
.editor-wrapper .editor-front-cover:hover i {
  color: #535353;
}

.editor-title {
  align-self: start;
  width: inherit;
}
.editor-title input {
  width: inherit;
  height: 50px;
  border: 0;
  font-size: 24px;
}

.editor-comment {
  width: inherit;
}


</style>