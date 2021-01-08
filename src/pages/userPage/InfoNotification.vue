<template>
  <div class="info-notification">
    <div class="title">
      <h2>消息&通知</h2>
    </div>
    <div class="content">
      <div class="user-list">
        <info-notification-user-list-card
            class="is-active"
            :name="topInfo.name" :time="topInfo.time"
            @click.native="clicked(-1)"
        />
        <info-notification-user-list-card
            v-for="(item, key) in userListAbs.userList" :key="key"
            :name="item.name" :time="item.time"
            @click.native="clicked(key)"
        />
      </div>
      <div class="delimiter"></div>
      <div class="dialog">
        <div class="card">
          <div class="subscript">
            <info-notification-subscript-show/>
          </div>
          <div v-for="(item, key) in userListAbs.userList" :key="key">
            <info-notification-dialog-box/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoNotificationUserListCard from "@/components/InfoNotificationUserListCard";
import InfoNotificationDialogBox from "@/components/InfoNotificationDialogBox";
import InfoNotificationSubscriptShow from "@/components/InfoNotificationSubscriptShow";

export default {
  name: "InfoNotification",
  components: {
    InfoNotificationUserListCard,
    InfoNotificationDialogBox,
    InfoNotificationSubscriptShow,
  },
  data() {
    return {
      topInfo: {
        id: '0',
        name: "最新订阅",
        time: '2021/01/02 19:02',
      },
      userListAbs: {
        userList:[
          {
            id: '1',
            name: "test1",
            time: "2021/01/04 12:54"
          },
          {
            id: '2',
            name: "test2",
            time: "2021/01/02 16:53"
          },
          {
            id: '3',
            name: "test3",
            time: "2021/01/03 11:14"
          }
        ]
      }
    }
  },
  methods: {
    clicked(index) {
      index++
      let card = document.querySelector(".dialog .card")
      let element = document.querySelector(".user-list")
      element.childNodes.forEach(ele=>{
        ele.classList.remove("is-active")
      })
      element.childNodes.forEach((ele,key)=>{
        if (key.toString() === index.toString())
          ele.classList.add("is-active")
      })
      card.style.left = `${index * (-382)}px`
    },

  }
}
</script>

<style scoped>
.info-notification {
  height: 1700px;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.content .delimiter {
  margin-top: 20px;
  height: 1500px;
  width: 4px;
  backdrop-filter: blur(9px);
  background: rgba(211,211,211,.55);
  box-shadow: 0 0 1px grey;
  border-radius: 14px;
}
.content .user-list {
  overflow: scroll;
  overflow-x: hidden;
  width: 128px;
  height: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.content .dialog {
  position: relative;
  overflow: hidden;
  width: 380px;
}
.dialog .card {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: auto;
  position: relative;
  top: 0;
  left: 0;
  transition: all .5s;
}
.card .subscript {
  width: 380px;
}

</style>