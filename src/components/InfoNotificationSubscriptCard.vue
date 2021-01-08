<template>
  <div class="subscript-card-wrapper">
    <div class="wrapper">
      <div class="title">
        <h3>
          {{title}}
        </h3>
      </div>
      <div class="content">
        <p>
          {{content}}
        </p>
      </div>
      <div class="info">
        <div class="user">
          <img :src="avatar" alt="">
          <label>{{name}}</label>
        </div>
        <div class="time">
          {{time}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoNotificationSubscriptCard",
  props: [
    "name",
    "avatar",
    "time",
    "content",
    "title",
    "topicId",
    "userId",
  ],
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.subscript-card-wrapper {
  border-radius: 14px;
  padding: 5px;
  width: 340px;
  height: 128px;
  background: rgba(255,255,255,.45);
  backdrop-filter: blur(9px);
  box-shadow: 0 0 1px grey;
}
.subscript-card-wrapper .wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.wrapper .title {
  padding: 0 5px;
  width: 330px;
  flex: 1;
}
.wrapper .title h3 {
  color: #212121;
}
.wrapper .content {
  padding: 0 5px;
  width: 330px;
  flex: 3;
  height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 23px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.content p {
  text-align: justify;
  text-justify: newspaper;
  word-break: break-all;
}
.wrapper .info {
  padding: 0 5px;
  width: 330px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
}
.wrapper .info .time {
  color: grey;
  font-size: 12px;
  object-fit: cover;
}
.wrapper .info .user {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper .info .user img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
</style>