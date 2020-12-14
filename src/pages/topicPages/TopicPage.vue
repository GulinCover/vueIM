<template>
  <div id="topic-page">
    <global-top-tools>
      <template slot="middle" class="middle">
        <span>{{date}}</span>
      </template>
    </global-top-tools>

    <div class="topic-page">
      <div class="topic-page-topic-title">
        <h1>topic page {{ id }}</h1>
      </div>
      <div class="topic-page-topic-content">
        <h2>{{topicContentAbs.topicName}}</h2>
        <div style="white-space: pre-wrap">{{topicContentAbs.topicContent}}</div>
      </div>
      <div class="topic-page-comment-list">
        <div v-for="(item, key) in userCommentAbs.userComments" :key="key" class="topic-page-comment-content">
          {{item.commentContent}}
          <div v-for="(it, key) in item.entryList" :key="key" class="comment-entry-list">
            {{it.entryContent}}--{{it.entryLikeNumber}}
          </div>
        </div>
      </div>
    </div>



    <global-bottom :top-data-list="topDataList"
                   :bottom-data-list="bottomDataList"
                   class="global-bottom"
    ></global-bottom>

  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import {timeTools} from "@/utils/timeTools";
import GlobalBottom from "@/components/GlobalBottom";

export default {
  name: "TopicPage",
  components: {
    GlobalBottom,
    GlobalTopTools
  },
  data() {
    return {
      date: "",
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

      id: this.$route.params.id,
      topicContentAbs: {
        userId: "1",
        userName: "Alex",
        userSex: "man",
        userAvatar: "",
        userLevel: "1",
        userDesc: "hello world",
        topicId: "1",
        topicName: "my once topic",
        topicContent: "this is a test topic this is a test topic" +
            "this is a test topicthis is a test topicthis is a test topic" +
            "this is a test topicthis is a test topicthis is a test topicthis is a test topic" +
            "this is a test topicthis is a test topicthis is a test topicthis is a test topic" +
            "this is a test topicthis is a test topicthis is a test topicthis is a test topic" +
            "this is a test topicthis is a test topicthis is a test topicthis is a test topic" +
            "this is a test topicthis is a test topicthis is a test topicthis is a test topic" +
            "this is a test topicthis is a test topicthis is a test topicthis is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic" +
            "\n" +
            "this is a test topic",
      },
      userCommentAbs: {
        topicId: "1",
        userComments: [
          {
            userId: "1",
            userName: "Alex",
            userSex: "man",
            userAvatar: "",
            userLevel: "1",
            commentId: "1",
            commentContent: "this is a comment",
            entryList: [
              {
                entryId: "1",
                entryContent: "nb",
                entryLikeNumber: "123"
              }
            ]
          },
          {
            userId: "1",
            userName: "Alex",
            userSex: "man",
            userAvatar: "",
            userLevel: "1",
            commentId: "1",
            commentContent: "this is a comment",
            entryList: [
              {
                entryId: "1",
                entryContent: "nb",
                entryLikeNumber: "123"
              }
            ]
          },
          {
            userId: "1",
            userName: "Alex",
            userSex: "man",
            userAvatar: "",
            userLevel: "1",
            commentId: "1",
            commentContent: "this is a comment",
            entryList: [
              {
                entryId: "1",
                entryContent: "nb",
                entryLikeNumber: "123"
              }
            ]
          },
          {
            userId: "1",
            userName: "Alex",
            userSex: "man",
            userAvatar: "",
            userLevel: "1",
            commentId: "1",
            commentContent: "this is a comment",
            entryList: [
              {
                entryId: "1",
                entryContent: "nb",
                entryLikeNumber: "123"
              }
            ]
          },
          {
            userId: "1",
            userName: "Alex",
            userSex: "man",
            userAvatar: "",
            userLevel: "1",
            commentId: "1",
            commentContent: "this is a comment",
            entryList: [
              {
                entryId: "1",
                entryContent: "nb",
                entryLikeNumber: "123"
              }
            ]
          }
        ],
      }
    }
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
  .topic-page {
    min-height: 100%;
    position: relative;
    padding-bottom: 300px;
  }
</style>