<template>
  <div class="auction-hot-wrapper">
    <div class="name-top">
      <div>
        <div class="title">
          <h3>
            昨日昵称出售排行
          </h3>
        </div>
        <div>
          <div v-for="(item, key) in nicknameRank" :key="key">
            <auction-hot-list-card
                :content="item.nickname"
                :price="item.price"
                :purchaser="item.purchaser"
                :index="key"
                :user-id="item.userId"
            />
          </div>
        </div>
      </div>
      <div class="detail-info" @click="jumpDetail">
        -更多详细信息-
      </div>
    </div>
    <div class="topic-top">
      <div>
        <div class="title">
          <h3>
            昨日著述出售排行
          </h3>
        </div>
        <div>
          <div v-for="(item, key) in topicRank" :key="key">
            <auction-hot-list-topic-card
                :content="item.topic"
                :price="item.price"
                :purchaser="item.purchaser"
                :index="key"
                :user-id="item.userId"
                :topic-id="item.topicId"
            />
          </div>
        </div>
      </div>
      <div class="detail-info" @click="jumpDetail">
        -更多详细信息-
      </div>
    </div>
  </div>
</template>

<script>
import AuctionHotListCard from "@/components/AuctionHotListCard";
import AuctionHotListTopicCard from "@/components/AuctionHotListTopicCard";

export default {
  name: "AuctionHotList",
  components: {
    AuctionHotListCard,
    AuctionHotListTopicCard,
  },
  data() {
    return {
      nicknameRank: [
        {
          nickname: 'alexfsafas',
          userId: '11',
          price: '112312410c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex1',
          userId: '11',
          price: '11c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex2',
          userId: '11',
          price: '12c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex3',
          userId: '11',
          price: '9c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex1',
          userId: '11',
          price: '11c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex2',
          userId: '11',
          price: '12c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex3',
          userId: '11',
          price: '9c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex2',
          userId: '11',
          price: '12c',
          purchaser: 'test1',
        },
        {
          nickname: 'alex3',
          userId: '11',
          price: '9c',
          purchaser: 'test1',
        },
      ],
      topicRank: [
        {
          topic: 'this is a topicdsadasdfsafasds',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topicdsadasdfsafasds',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '1021312c',
          purchaser: 'test1',
        },
        {
          topic: 'this is a topic',
          topicId: '22',
          userId: '11',
          price: '10c',
          purchaser: 'test1',
        },
      ],
    }
  },
  methods: {
    jumpDetail() {
      window.open("/auction/top",'_blank')
    },
  },
}
</script>

<style scoped>
.auction-hot-wrapper {
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.topic-top,
.name-top {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  width: 180px;
  text-align: center;
}
.detail-info {
  text-align: center;
  color: grey;
  font-size: 12px;
}
.detail-info:hover {
  cursor: pointer;
}
</style>