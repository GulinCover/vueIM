<template>
  <div class="subscript-wrapper">
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
  name: "InfoNotificationSubscriptShow",
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
  }
}
</script>

<style scoped>
.subscript-wrapper {
  width: 380px;
  height: 1560px;
  padding: 10px 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;
}
.subscript-wrapper .wrapper {
  margin-bottom: 15px;
}
.history-card {
  border-radius: 14px;
  transition: all .5s;
}
.history-card:hover {
  background: antiquewhite;
  cursor: pointer;
  color: grey;
}

</style>