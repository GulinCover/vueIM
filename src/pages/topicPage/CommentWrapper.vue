<template>
  <div class="comment-content">
    <div class="comment1-head">
      <div class="square-head">
        <h1>正方</h1>
      </div>
      <div class="neutral-head">
        <h1>中立</h1>
      </div>
      <div class="opposition-head">
        <h1>反方</h1>
      </div>
    </div>
    <div class="comment1-content"
         v-for="(item, key) in comment1s.userComments" :key="key"
         :class="{'square':item.intention === 0,'neutral':item.intention === 1,'opposition':item.intention === 2}"
    >
      <div class="comment1">
        <div>
          <div class="user">
            <div>{{ item.userName }}</div>
            <div>{{ item.userLevel }}</div>
            <div>{{ item.userAvatar }}</div>
            <div>{{ item.userSex }}</div>
          </div>

          <div class="entrys">
            <global-entry :entry="item.entryList"></global-entry>
          </div>
        </div>

        <div class="content">{{ item.commentContent }}</div>
        <div class="more-component">
          <div class="more" @click="unfoldMore($event, item.commentId)">
            <p>more</p>
          </div>
          <div class="unfold">
            <comment2-wrapper :comment2s="comment2s"></comment2-wrapper>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-dividing-line">
      <div class="dividing-line-text">到底了</div>
    </div>
  </div>
</template>

<script>
import GlobalEntry from "@/components/GlobalEntry";
import Comment2Wrapper from "@/pages/topicPage/Comment2Wrapper";

export default {
  name: "CommentWrapper",
  components: {
    Comment2Wrapper,
    GlobalEntry,
  },
  props: {
    comment1s: {
      type: Object,
      default() {
        return {
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
              intention: 0,
              entryList: [
                {
                  entryId: "1",
                  name: "nb",
                  level: 1,
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
              commentId: "12",
              commentContent: "this is a comment",
              intention: 0,
              entryList: [
                {
                  entryId: "1",
                  name: "nb",
                  level: 2,
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
              commentId: "13",
              commentContent: "this is a comment",
              intention: 1,
              entryList: [
                {
                  entryId: "1",
                  name: "nb",
                  level: 2,
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
              commentId: "14",
              commentContent: "this is a comment",
              intention: 2,
              entryList: [
                {
                  entryId: "1",
                  name: "nb",
                  level: 3,
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
              commentId: "15",
              commentContent: "this is a comment",
              intention: 2,
              entryList: [
                {
                  entryId: "1",
                  name: "nb",
                  level: 4,
                  entryLikeNumber: "123"
                }
              ]
            }
          ],
        }
      }
    },
    comment2s: {
      type: Object,
      default() {
        return {
          commentId: "1",
          userComments: [
            {
              userId: "1",
              userName: "Alex1",
              userSex: "man",
              userAvatar: "",
              userLevel: "1",
              commentId: "11",
              commentUserId: "",
              commentUserName: "",
              commentLevel: "2",
              commentContent: "this is a 2 comment",
            },
            {
              userId: "1",
              userName: "Alex2",
              userSex: "man",
              userAvatar: "",
              userLevel: "1",
              commentId: "12",
              commentUserId: "",
              commentUserName: "",
              commentLevel: "2",
              commentContent: "this is a 2 comment",
            },
            {
              userId: "1",
              userName: "Alex3",
              userSex: "man",
              userAvatar: "",
              userLevel: "1",
              commentId: "13",
              commentUserId: "",
              commentUserName: "",
              commentLevel: "2",
              commentContent: "this is a 2 comment",
            },
            {
              userId: "1",
              userName: "Alex4",
              userSex: "man",
              userAvatar: "",
              userLevel: "1",
              commentId: "14",
              commentUserId: "",
              commentUserName: "",
              commentLevel: "2",
              commentContent: "this is a 2 comment",
            },
            {
              userId: "1",
              userName: "Alex5",
              userSex: "man",
              userAvatar: "",
              userLevel: "1",
              commentId: "15",
              commentUserId: "11",
              commentUserName: "Alex1",
              commentLevel: "3",
              commentContent: "this is a 2 comment",
            }
          ],
        }
      }
    }
  },
  data() {
    return {
      more: {
        isShow: false,
      }
    }
  },
  methods: {
    unfoldMore(e, id) {
      if (id !== this.comment2s.commentId) {
        e.target.textContent = "no more"
        return
      }
      if (!this.more.isShow) {

        this.more.isShow = true
        e.target.textContent = "收起"
        e.target.parentNode.nextSibling.classList.add('unfold-content');

      } else {
        e.target.parentNode.nextSibling.classList.remove('unfold-content')
        this.more.isShow = false
        e.target.textContent = "more"
      }
    }
  }
}
</script>

<style scoped>
.comment-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.comment-content .comment1-head {
  width: var(--topic-page-comment-content-width);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
}

.comment-content .comment1-content {
  width: var(--topic-page-comment-content-width);
}

.comment1-content.square {
  display: flex;
  justify-content: start;
  align-items: start;
}

.comment1-content.opposition {
  display: flex;
  justify-content: flex-end;
  align-items: start;
}

.comment1-content.neutral {
  display: flex;
  justify-content: center;
  align-items: start;
}

.comment1 {
  width: calc(var(--topic-page-comment-content-width) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border: 1px solid black;
  margin-bottom: 10px;
}
.more-component {
  overflow: hidden;
  width: inherit;
}
.more {
  overflow: hidden;
  position: relative;
  width: inherit;
  padding: 0 10px;
}

.more p:hover {
  cursor: pointer;
  color: red;
  transition: all .5s;
}

.unfold {
  padding-left: 10px;
  position: relative;
  opacity: 0;
  max-height: 0;
  top: -100px;
  visibility: hidden;
  transition: all .5s ease-in-out;
}

.unfold.unfold-content {
  margin-bottom: 10px;
  top: 0;
  opacity: 1;
  visibility: visible;
  max-height: 10000px;
}

.bottom-dividing-line {
  width: var(--topic-page-comment-content-width);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.bottom-dividing-line::before {
  content: "";
  border-radius: 4px;
  background-color: var(--global-dividing-line-color);
  width: calc(var(--topic-page-comment-content-width) / 2);
  height: 2px;
}

.bottom-dividing-line::after {
  content: "";
  border-radius: 4px;
  background-color: var(--global-dividing-line-color);
  width: calc(var(--topic-page-comment-content-width) / 2);
  height: 2px;
}

.dividing-line-text {
  min-width: 50px;
  margin: 0 10px;
}

</style>