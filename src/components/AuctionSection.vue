<template>
  <div class="auction-section-wrapper">
    <div class="title">
      <div class="name" :class="{'is-active':titleISActive}" @click="switchTitleNick">昵称</div>
      <div class="topic" :class="{'is-active':!titleISActive}" @click="switchTitleTopic">著述</div>
      <div class="underline1"></div>
      <div class="underline2 no-show"></div>
    </div>
    <div class="content-wrapper">
      <div class="content"
           :class="{'is-active':!titleISActive}"
      >
        <div class="search-wrapper">
          <div class="name">
            <i class="fa fa-at"></i>
            <input type="text">
          </div>
          <div class="user">
            <i class="fa fa-user"></i>
            <input type="text">
          </div>
          <div class="price">
            <i class="fa fa-money"></i>
            <input type="text">
          </div>
          <div class="upload-time">
            <i class="fa fa-calendar"></i>
            <input type="date">
            至
            <i class="fa fa-calendar"></i>
            <input type="date">
          </div>
          <div class="button">
            <button>确认</button>
            <button @click="switchSort">{{ sort }}</button>
          </div>
        </div>
        <div class="delimiter"></div>
        <div class="head-wrapper">
          <div class="nickname">售卖昵称</div>
          <div class="user">用户</div>
          <div class="upload-time">时间</div>
          <div class="price">最高竞拍价格</div>
          <div class="button">
            <button>上架</button>
          </div>
        </div>
        <div class="delimiter"></div>
        <div class="buy-wrapper">
          <div class="buy-card" v-for="(item, key) in showData" :key="key">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="user-name">{{ item.userName }}</div>
            <div class="upload-time">{{ item.uploadTime }}</div>
            <div class="price">
              {{item.price}}
            </div>
            <div class="button">
              <button>竞拍</button>
            </div>
          </div>
        </div>
        <div class="delimiter"></div>
        <div class="bottom-page">
          <ul>
            <li v-for="key of (startAndEnd[1]-startAndEnd[0])" :key="key"
                @click="jumpPage(key+startAndEnd[0])"
                :class="`li${(key+startAndEnd[0]).toString()}`"
            >
              {{ key + startAndEnd[0] }}
            </li>
          </ul>
        </div>
      </div>


      <div class="content">
        <div class="search-wrapper">
          <div class="name">
            <i class="fa fa-at"></i>
            <input type="text">
          </div>
          <div class="user">
            <i class="fa fa-user"></i>
            <input type="text">
          </div>
          <div class="price">
            <i class="fa fa-money"></i>
            <input type="text">
          </div>
          <div class="upload-time">
            <i class="fa fa-calendar"></i>
            <input type="date">
            至
            <i class="fa fa-calendar"></i>
            <input type="date">
          </div>
          <div class="button">
            <button>确认</button>
            <button @click="switchSort">{{ sort }}</button>
          </div>
        </div>
        <div class="delimiter"></div>
        <div class="head-wrapper">
          <div class="nickname">售卖著述</div>
          <div class="user">用户</div>
          <div class="upload-time">时间</div>
          <div class="price">最高竞拍价格</div>
          <div class="button">
            <button>上架</button>
          </div>
        </div>
        <div class="delimiter"></div>
        <div class="buy-wrapper">
          <div class="buy-card" v-for="(item, key) in showData" :key="key">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="user-name">{{ item.userName }}</div>
            <div class="upload-time">{{ item.uploadTime }}</div>
            <div class="price">
              {{item.price}}
            </div>
            <div class="button">
              <button>竞拍</button>
            </div>
          </div>
        </div>
        <div class="delimiter"></div>
        <div class="bottom-page">
          <ul>
            <li v-for="key of (startAndEnd[1]-startAndEnd[0])" :key="key"
                @click="jumpPage(key+startAndEnd[0])"
                :class="`li${(key+startAndEnd[0]).toString()}`"
            >
              {{ key + startAndEnd[0] }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionSection",
  data() {
    return {
      titleISActive: true,
      sort: "默认",
      startAndEnd: [0, 10],
      pageMax: 10,
      showData: [
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },
        {
          userId: '21312',
          nickname: "he",
          userName: 'alex',
          uploadTime: '2021/12/02 12:20',
          price: '1100c'
        },

      ]
    }
  },
  methods: {
    switchTitleNick() {
      if (this.titleISActive) return
      this.titleISActive = !this.titleISActive
      let element = document.querySelector(".title .underline1")
      setTimeout(() => {
        element.classList.remove('no-show')
      }, 400)
      element.classList.remove('is-active')

      let element1 = document.querySelector(".title .underline2")
      element1.classList.add('is-active')
      setTimeout(() => {
        element1.classList.add('no-show')
      }, 400)

    },
    switchTitleTopic() {
      if (!this.titleISActive) return
      this.titleISActive = !this.titleISActive
      let element = document.querySelector(".title .underline1")
      element.classList.remove('no-show')
      element.classList.add('is-active')
      setTimeout(() => {
        element.classList.add('no-show')
      }, 400)

      let element1 = document.querySelector(".title .underline2")
      element1.classList.remove('is-active')
      setTimeout(() => {
        element1.classList.remove('no-show')
      }, 400)
    },

    switchSort() {
      if (this.sort === '正序') {
        this.sort = "倒序"
      } else if (this.sort === '倒序') {
        this.sort = '默认'
      } else {
        this.sort = "正序"
      }
    },

    jumpPage(index) {

      if (index.toString() === this.$route.query.page) return

      this.$router.push(`/auction?page=${index}`)

      let elements = document.querySelectorAll(".bottom-page ul li")

      elements.forEach(item => {
        item.classList.remove("is-active")
      })
      const clazz = `.bottom-page ul li.li${index.toString()}`
      let ele = document.querySelector(clazz)
      ele.classList.add('is-active')
    },

    showPrice(e) {
      e.target.parentNode.classList.add("is-active")
    },
  },
  mounted() {
    const fullPath = this.$route.fullPath;
    let page = 1
    fullPath.replace(/page=(.*)?&?/i, (_, param) => {
      const ret = Number.parseInt(param)
      if (typeof ret === 'number' && !isNaN(ret)) {
        if (ret !== 0 && ret <= this.pageMax)
          page = ret
        else
          page = 1
      } else {
        page = 1
      }
    })

    let elements = document.querySelectorAll(".bottom-page ul li")

    elements.forEach(item => {
      item.classList.remove("is-active")
    })
    elements.forEach((item, key) => {
      if ((key + this.startAndEnd[0]) === (page - 1))
        item.classList.add("is-active")
    })
  }
}
</script>

<style scoped>
.auction-section-wrapper {
  height: 100%;
  margin-left: 10px;
  padding-left: 10px;
}

.auction-section-wrapper .title {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  position: relative;
}

.title .underline1 {
  position: absolute;
  left: 315px;
  bottom: 0;
  width: 24px;
  height: 3px;
  border-radius: 4px;
  backdrop-filter: blur(9px);
  background: rgba(200, 200, 200, .75);
}

.title .underline2 {
  position: absolute;
  bottom: 0;
  width: 24px;
  height: 3px;
  border-radius: 4px;
  backdrop-filter: blur(9px);
  background: rgba(200, 200, 200, .75);
  visibility: visible;
  opacity: 1;
  left: 658px;
}

.underline1.is-active {
  animation: underlinekey .5s ease-in-out forwards;
}

.underline2.no-show,
.underline1.no-show {
  visibility: hidden;
  opacity: 0;
}

.underline2.is-active {
  animation: dunderlinekey .5s ease-in-out forwards;
}

@keyframes underlinekey {
  0% {
    width: 24px;
    left: 315px;
  }
  50% {
    width: 368px;
    left: 315px;
  }
  100% {
    width: 24px;
    left: 658px;
    opacity: 1;
  }
}

@keyframes dunderlinekey {
  0% {
    width: 24px;
    left: 658px;
  }
  50% {
    width: 368px;
    left: 315px;
  }
  100% {
    width: 24px;
    left: 315px;
  }
}

.title .topic,
.title .name {
  font-size: 24px;
  transition: all .2s;
  color: grey;
}

.title .topic.is-active,
.title .name.is-active {
  color: black;
}

.title .topic:hover,
.title .name:hover {
  color: black;
  cursor: pointer;
}

.auction-section-wrapper .content-wrapper {
  height: 829px;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
}

.content-wrapper .content {
  width: 1000px;
  height: inherit;
  display: flex;
  flex-direction: column;
  transition: all .5s;
  visibility: visible;
  opacity: 1;
}
.content-wrapper .content.is-active {
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
}

.content .search-wrapper {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.content .head-wrapper {
  flex: 1;
}

.content .buy-wrapper {
  flex: 10;
}

.content .bottom-page {
  flex: 1;
}

.delimiter {
  height: 3px;
  width: 900px;
  margin-left: 50px;
  background: rgba(200, 200, 200, .75);
  border-radius: 4px;
}

.search-wrapper .price,
.search-wrapper .user,
.search-wrapper .name {
  width: 128px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.search-wrapper .price i,
.search-wrapper .user i,
.search-wrapper .name i {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper .price input,
.search-wrapper .user input,
.search-wrapper .name input {
  width: 92px;
}

.head-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.head-wrapper div{
  width: 200px;
  text-align: center;
}

.buy-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.buy-wrapper .buy-card {
  z-index: 2;
  margin: 5px 0;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  backdrop-filter: blur(9px);
  background: whitesmoke;
  transition: all .2s;
}
.buy-card:nth-child(odd) {
  border-radius: 8px;
  backdrop-filter: blur(9px);
  background: rgba(200,200,200,.55);
}
.buy-card:hover {
  cursor: pointer;
  background: #b2d7ff;
}

.buy-card div {
  width: 200px;
  text-align: center;
}

.buy-card .nickname {
}

.buy-card .upload-time,
.buy-card .user-name {
  color: grey;
  font-size: 12px;
}
.buy-card .price {
  height: 16px;
  position: relative;
}

.bottom-page {
  display: flex;
  justify-content: center;
  align-items: start;
}

.bottom-page ul {
  width: 256px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.bottom-page ul li {
  min-width: 36px;
  min-height: 24px;
  color: grey;
  transition: all .2s;
  background: whitesmoke;
  text-align: center;
  border-radius: 6px;
  margin: 0 4px;
}

.bottom-page ul li.is-active {
  background: grey;
  color: black;
  font-size: 18px;
}

.bottom-page ul li:hover {
  cursor: pointer;
  background: grey;
  color: black;
  font-size: 18px;
}

</style>