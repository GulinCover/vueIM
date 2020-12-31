<template>
  <div class="comment-component">
    <div v-for="(item, key) in comment2s.userComments" :key="key"
         class="comment"
    >
      <div class="user">
        <div class="avatar">
          <img :src="item.userAvatar" alt="avatar">
        </div>
        <div class="name">
          {{item.userName}}
        </div>
        <div class="sex">
          {{item.userSex}}
        </div>
        <div class="level">
          {{item.userLevel}}
        </div>
      </div>
      <div class="content">
        <div
            @click="jumpUser"
            class="prefix" v-if="item.commentLevel === '3'"
        >
          @{{item.commentUserName}}
        </div>
        <div class="suffix">
          {{item.commentContent}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment2Wrapper",
  props: {
    comment2s: {
      type: Object,
      default() {
        return {
          commentId: "1",
          userComments: [],
        }
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    jumpUser() {

    }
  },
}
</script>

<style scoped>
.comment-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.comment-component .comment {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.content {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 2px solid #7d7b7b;
  align-self: center;
  display: flex;
  justify-content: start;
}
.content .prefix {
  color: red;
}
.content .prefix:hover {
  cursor: pointer;
}
</style>