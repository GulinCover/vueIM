<template>
  <div class="dialog-card-wrapper">
    <div class="left" v-if="direction === 'left'">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="content">
        <p>
          {{content}}
        </p>
      </div>
    </div>
    <div class="right" v-else-if="direction === 'right'">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="content">
        <p>
          {{content}}
        </p>
      </div>
    </div>
    <div class="middle" v-else>
      <p>
        {{content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoNotificationDialogCard",
  props: [
    'content',
    'direction',
    'avatar',
  ],
}
</script>

<style scoped>
.dialog-card-wrapper {
  width: 100%;
}

.left {
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
}
.left .avatar {
  margin-right: 10px;
}
.avatar img {
  width: 24px;
  height: 24px;
  object-fit: cover;
}
.content {
  max-width: 240px;
  padding: 0 5px 5px;
  background: white;
  border-radius: 8px;
}

.content p {
  text-align: justify;
  text-justify: newspaper;
  word-break: break-all;
}
.right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: start;
  margin-top: 5px;
}
.right .avatar {
  margin-left: 10px;
}
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.middle p {
  color: grey;
  font-size: 12px;
}

</style>