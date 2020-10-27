<template>
  <div class="global-card">
    <slot></slot>
    <div class="content">
      <div class="title">
        <h2>{{ card.title }}</h2>
      </div>
      <div class="prev-content">
        <div class="prev-img">
          <div @click="imgMax" v-if="card.imgs.length !== 0" class="prev-content-img" :style="{backgroundImage: `url(${card.imgs[0]})`}"></div>
          <div style="width: 5px"></div>
          <div @click="imgMax" v-if="card.imgs.length >= 2" class="prev-content-img" :style="{backgroundImage: `url(${card.imgs[1]})`}"></div>
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
      let style = e.target.style;
      style.position = "relative";
      if (style.left === null|| style.left === "" || style.left === undefined || style.left === "0%") {
        style.left = '50%';
        style.top = '50%';
      } else {
        style.left = '0%';
        style.top = '0%';
      }
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
  text-overflow:ellipsis;
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