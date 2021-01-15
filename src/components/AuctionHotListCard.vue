<template>
  <div class="auction-hot-list-wrapper">
    <div class="auction-hot-list-card-wrapper" @click.prevent="detailInfo(index)">
      <div class="show-info">
        <div :title="content">
          昵称:
          <span>{{content}}</span>
        </div>
        <div :title="price">
          成交价:
          <span>{{price}}</span>
        </div>
      </div>
      <div class="purchaser">
        <div class="prefix">售卖人:</div>
        <div class="name" @click.prevent="jumpUserPage(userId)">{{purchaser}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AuctionHotListCard",
  props: [
    'content',
    'price',
    'purchaser',
      'index',
      'userId',
  ],
  methods: {
    detailInfo(index) {
      let elements = document.querySelectorAll(".auction-hot-list-card-wrapper");
      elements.forEach(ele=> {
        ele.getElementsByClassName("purchaser")[0].classList.remove('is-active')
        ele.classList.remove("is-active")
      })
      elements.forEach((ele, key)=> {
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
  },
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
.auction-hot-list-card-wrapper {
  height: 22px;
  transition: all .5s;
}
.auction-hot-list-card-wrapper.is-active {
  height: 42px;
}
.show-info {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  font-size: 12px;
}
.show-info div {
  width: 90px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.show-info div span {
  width: 38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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