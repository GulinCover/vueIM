<template>
  <div class="global-card">
    <slot></slot>
    <div class="content">
      <div class="title">
        <h2>{{ card.title }}</h2>
      </div>
      <div class="prev-content">
        <div class="prev-img">
          <div @click="imgMax" v-if="card.imgs.length !== 0" class="prev-content-img">
            <img :src="card.imgs[0]" alt="">
          </div>
          <div style="width: 5px"></div>
          <div @click="imgMax" v-if="card.imgs.length >= 2" class="prev-content-img">
            <img :src="card.imgs[1]" alt="">
          </div>
        </div>
        <div style="width: 20px"></div>
        <div class="prev-content-text">{{ card.content }}</div>
      </div>
      <div class="tags">
        <div class="tags-style" v-for="(item, index) in card.tags" :key="index">
          {{ item.name }}
          <span>|</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalCard",
  props: [
    "card",
  ],
  data() {
    return {
      url: "",
    }
  },
  methods: {
    imgMax(e) {
      e.target.parentNode.classList.add("enlarge")
      let prev = window.getComputedStyle(
          document.querySelector('.prev-img'), ':before'
      );
      prev.setProperty("visibility", "visible")
    },
  }
}
</script>

<style scoped>
.global-card .content {
  border-right: 1px solid #c9c9c9;
  border-left: 1px solid #c9c9c9;
  padding: 0 10px;
  height: 200px;
  margin: 30px;
  /*background-color: cornflowerblue;*/
}

.global-card .content .title {
  height: 50px;
  text-align: center;
}

.global-card .content .prev-content {
  height: 120px;
  padding: 5px;
  display: flex;
  justify-content: start;
}

.global-card .content .prev-content .prev-img {
  display: flex;
  justify-content: center;
}

.prev-img {
  transition: all 0.5s;
}

.prev-img::before {
  content: "";
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 18, 18, 0.25);
}

.prev-content-img {
  position: relative;
  left: 0;
  top: 0;
  transition: all .5s;
}

.prev-content-img img {
  width: inherit;
  height: inherit;
  object-fit: contain;
  object-position: center;
}

.prev-content-img.enlarge {
  left: calc(100vw / 2 - 60px);
  top: calc(100vh / 2 - 60px);
  transform: scale(2);
  z-index: 999;
}

.global-card .content .prev-img .prev-content-img {
  overflow: hidden;
  height: 120px;
  width: 120px;
  background: no-repeat center center;
  background-size: contain;
}

.prev-content .prev-content-text {
  padding: 5px;
  width: 560px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-indent: 2em;
}

.global-card .content .tags {
  height: 30px;
  /*text-align: center;*/
  overflow: hidden;
}

.tags .tags-style {
  margin: 2px;
  /*background-color: #535353;*/
  padding: 2px;
  display: inline-block;
}
</style>