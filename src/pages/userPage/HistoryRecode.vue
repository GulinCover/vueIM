<template>
  <div class="history-recode">
    <div class="wrapper" v-for="(item, key) in infoLists" :key="key">
      <div class="history-card" @click="jumpHistory(item)">
        <info-notification-subscript-card
            :user-id="item.userId"
            :avatar="item.avatar"
            :name="item.userName"
            :content="item.content"
            :time="item.accessTime"
            :title="item.title"
            :topic-id="item.topicId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoNotificationSubscriptCard from "@/components/InfoNotificationSubscriptCard";

export default {
  name: "HistoryRecode",
  components: {
    InfoNotificationSubscriptCard,
  },
  data() {
    return {
      infoLists: [
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '12',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
        {
          userId: '1',
          userName: 'alex',
          avatar: 'asfa',
          accessTime: '2020/01/02 14:28',
          topicId: '11',
          content: 'testtesttesttesttesttesttesttesttesttesttesttesttest',
          title: 'this is a test topic!'
        },
      ]
    }
  },
  methods: {
    jumpHistory(item) {
      const resolve = this.$router.resolve(`/topic/page/${item.topicId}`)
      window.open(resolve.href, '_blank')
    }
  },
}
</script>

<style scoped>
.history-recode {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;
  height: 1660px;
}
.history-recode .wrapper {
  transition: all .5s;
  margin: 10px;
}

.history-recode .wrapper:hover {
  cursor: pointer;
  background: antiquewhite;
  color: grey;
}
</style>