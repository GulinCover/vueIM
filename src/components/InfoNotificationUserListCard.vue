<template>
  <div class="user-list-card-wrapper">
    <div class="show-name">{{ name }}</div>
    <div class="show-time"><p>
      {{ time }}
    </p></div>
  </div>
</template>

<script>
export default {
  name: "InfoNotificationUserListCard",
  props: [
    "name",
    "time",
  ],
}
</script>

<style scoped>
.user-list-card-wrapper {
  overflow: hidden;
  width: 128px;
  height: 64px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .2s;
  border-left: 0 solid white;
}

.user-list-card-wrapper.is-active {
  border-left: 2px solid #3b9dff;
  backdrop-filter: blur(9px);
  background-color: rgba(255, 255, 255, .65);
  background-image: linear-gradient(to right, white, whitesmoke);
}

.user-list-card-wrapper:hover {
  cursor: pointer;
  border-left: 2px solid #3b9dff;
}

.show-name {
  line-height: 42px;
  width: 100%;
  flex: 2;
}

.show-time {
  width: 100%;
  flex: 1;
}

.show-time p {
  font-size: 12px;
  color: grey;
}
</style>