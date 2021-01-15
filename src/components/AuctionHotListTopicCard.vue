<template>
  <div class="auction-hot-list-wrapper">
    <div class="auction-hot-list-topic-card-wrapper" @click="detailInfo(index)">
      <div class="show-info">
        <div :title="content" class="text"
             @click="jumpTopicPage(topicId)"
        >{{ content }}
        </div>
        <div :title="price" class="price">成交价:
          <span>{{ price }}</span>
        </div>
      </div>
      <div class="purchaser">
        <div class="prefix">售卖人:</div>
        <div :title="purchaser" class="name" @click.prevent="jumpUserPage(userId)">{{ purchaser }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AuctionHotListTopicCard",
  props: [
    'content',
    'price',
    'purchaser',
    'index',
    'userId',
    'topicId',
  ],
  methods: {
    detailInfo(index) {
      let elements = document.querySelectorAll(".auction-hot-list-topic-card-wrapper");
      elements.forEach(ele => {
        ele.getElementsByClassName("purchaser")[0].classList.remove('is-active')
        ele.classList.remove("is-active")
      })
      elements.forEach((ele, key) => {
        if (key.toString() === index.toString()) {
          ele.getElementsByClassName("purchaser")[0].classList.add('is-active')
          ele.classList.add("is-active")
        }
      })
    },

    jumpUserPage(id) {
      const resolve = this.$router.resolve(`/user/page/${id}`)
      window.open(resolve.href, '_blank')
    },

    jumpTopicPage(id) {
      const resolve = this.$router.resolve(`/topic/page/${id}`);
      window.open(resolve.href, '_blank')
    },

  },
  mounted() {
  }
}
</script>

<style scoped>
.auction-hot-list-wrapper {
  width: 180px;
  padding: 5px;
  border-radius: 8px;
  backdrop-filter: blur(9px);
  background: rgba(201, 201, 201, 0.65);
  margin: 5px 0;
  transition: all .2s;
}

.auction-hot-list-wrapper:hover {
  cursor: pointer;
}

.auction-hot-list-topic-card-wrapper {
  height: 22px;
  transition: all .5s;
}

.auction-hot-list-topic-card-wrapper.is-active {
  height: 42px;
}

.show-info {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  font-size: 12px;
}
.show-info .price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
}
.price span {
  width: 38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.show-info .text {
  width: 88px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 1;
  border-radius: 4px;
  transition: all 1s;
  background: rgba(255,255,255,0);
}

.show-info .text:hover {
  background: rgba(255,255,255,.65);
}

.purchaser {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-20px);
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  color: grey;
  transition: all .5s;
}

.purchaser.is-active {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}
</style>