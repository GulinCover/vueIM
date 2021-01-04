<template>
  <div class="global-card">
    <div class="content">
      <div class="tags">
        <div class="tags-style" v-for="(item, index) in card.tags" :key="index">
          {{ item.name }}
        </div>
      </div>
      <div class="user-info">
        <div class="avatar" @click="jumpUserPage(card.id)">
          <img :src="card.avatar" alt="">
        </div>
        <div class="info">
          <span>{{card.name}}</span>
          <span>
            <i v-if="card.sex === '1'" class="fa fa-mars"></i>
            <i v-else-if="card.sex === '2'" class="fa fa-venus"></i>
            <i v-else-if="card.sex === '3'" class="fa fa-genderless"></i>
            <i v-else-if="card.sex === '4'" class="fa fa-transgender"></i>
            <i v-else-if="card.sex === '5'" class="fa fa-mars-double"></i>
            <i v-else-if="card.sex === '6'" class="fa fa-venus-double"></i>
            <i v-else-if="card.sex === '7'" class="fa fa-venus-mars"></i>
          </span>
        </div>
        <div class="level">
          level:{{card.level}}
        </div>
      </div>
      <div class="prev">
        <div class="title">
          <h2>{{ card.title }}</h2>
        </div>
        <div style="height: 120px"></div>
        <div class="prev-img">
          <div @click="imgMax" v-if="card.imgs.length !== 0" class="prev-content-img">
            <img :src="card.imgs[0]" alt="">
          </div>
          <div style="width: 10px"></div>
          <div @click="imgMax" v-if="card.imgs.length >= 2" class="prev-content-img">
            <img :src="card.imgs[1]" alt="">
          </div>
        </div>
      </div>
      <div class="prev-content">
        <div class="prev-content-text" @click="jumpTopicPage(card.topicId)">{{ card.content }}</div>
      </div>
    </div>
    <hr>
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
      let b = e.target.parentNode.classList.contains("enlarge")
      if (b) {
        e.target.parentNode.classList.remove("enlarge")
        e.target.parentNode.parentNode.parentNode.parentNode.classList.remove("enlarge")
        return
      }
      e.target.parentNode.classList.add("enlarge")
      e.target.parentNode.parentNode.parentNode.parentNode.classList.add("enlarge")

    },

    jumpTopicPage(id) {
      const {href} = this.$router.resolve({path:`/topic/page/${id}`});
      window.open(href,'_blank')
    },

    jumpUserPage(id) {
      const {href} = this.$router.resolve({path:`/user/page/${id}`});
      window.open(href,'_blank')
      console.log(123)
    },
  }
}
</script>

<style scoped>
.global-card .content {
  position: relative;
  padding: 0 10px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(9px);
  background: rgba(255,255,255,.25);
  transition: all .5s;
}
.content.enlarge {
  height: 520px;
}

.content .user-info {
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-info .avatar {
  width: 48px;
  height: 48px;
}
.avatar:hover {
  cursor: pointer;
}
.avatar img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  object-position: top left;
}
.user-info .info span {
  margin: 5px;
}
.user-info .level {
  width: 128px;
  height: 17px;
  line-height: 17px;
  background: #c6c6c6;
  border-radius: 8px;
  text-align: center;
}
.content .prev {
  width: 320px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.content .prev .title {
  height: 50px;
  text-align: center;
}
.prev .prev-img {
  width: 320px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -160px;
  transition: all 0.5s;
}

.prev-content-img {
  position: relative;
  left: 0;
  top: 0;
  transition: all .5s;
  z-index: 1;
}

.prev-content-img img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-position: center;
}

.prev-content-img.enlarge {
  left: 55%;
  transform: scale(4);
  z-index: 2;
}

.global-card .content .prev-img .prev-content-img {
  overflow: hidden;
  height: 120px;
  width: 120px;
  background: no-repeat center center;
  background-size: contain;
}

.content .prev-content-text {
  height: 160px;
  line-height: 22px;
  padding: 5px;
  width: 320px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-indent: 2em;
}
.prev-content-text:hover {
  cursor: pointer;
}

.global-card .content .tags {
  position: absolute;
  top: 25%;
  left: -64px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.tags .tags-style {
  backdrop-filter: blur(9px);
  background-color: rgba(255,255,255,.25);
  box-shadow: 0 0 2px grey;
  display: inline-block;
  margin: 2px;
  padding: 2px;
  border-radius: 12px;
  border: 1px solid grey;
  text-align: center;
  transition: all .2s;
}
.tags-style:hover {
  cursor: pointer;
  box-shadow: 0 1px 2px black;
}
</style>