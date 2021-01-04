<template>
  <div class="user-component">
    <global-top-tools class="top-tools"></global-top-tools>
    <div style="height: 24px"></div>
    <div class="user-wrapper">
      <div class="user-content">
        <div class="left-wrapper">
          <div class="user-avatar"></div>

          <div class="jump-button">
            <div v-for="(item,key) in userSelections" :key="key" class="selection"
                 :class="{'is-active':key===0}"
                 @click="jumpInfo(item.id)"
            >
              {{item.content}}
            </div>
          </div>

          <div class="jump-button">
            <div v-for="(item,key) in commonSelections" :key="key" class="selection"
                 @click="jumpInfo(item.id)"
            >
              {{item.content}}
            </div>
          </div>

        </div>
        <div class="content-wrapper">
          <div class="content">
            <div class="card">
              <div class="card-wrapper">
                <access-wrapper></access-wrapper>
              </div>
              <div class="card-wrapper">
                <info-notification></info-notification>
              </div>
              <div class="card-wrapper">
                <history-recode></history-recode>
              </div>
              <div class="card-wrapper">
                <upload-history></upload-history>
              </div>
              <div class="card-wrapper">
                <policy-desc></policy-desc>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <global-bottom></global-bottom>
  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import GlobalBottom from "@/components/GlobalBottom";
import AccessWrapper from "@/pages/userPage/AccessWrapper";
import InfoNotification from "@/pages/userPage/InfoNotification";
import HistoryRecode from "@/pages/userPage/HistoryRecode";
import UploadHistory from "@/pages/userPage/UploadHistory";
import PolicyDesc from "@/pages/userPage/PolicyDesc";

export default {
  name: "Index",
  components: {
    GlobalTopTools,
    GlobalBottom,
    AccessWrapper,
    InfoNotification,
    HistoryRecode,
    UploadHistory,
    PolicyDesc,
  },
  data() {
    return {
      userSelections: [
        {
          id:'0',
          content: '账户管理'
        },
        {
          id:'1',
          content: '消息通知'
        },
        {
          id:'2',
          content: '历史记录'
        },
        {
          id:'3',
          content: '上传历史'
        },
      ],
      commonSelections: [
        {
          id:'4',
          content: '条款说明'
        }
      ],
    }
  },
  mounted() {
  },
  methods: {
    jumpInfo(id) {
      let elements = document.querySelectorAll(".selection")
      elements.forEach((e,key)=>{
        if (key.toString() === id)
          e.classList.add('is-active')
      })
      elements.forEach((e,key)=>{
        if (key.toString() !== id)
          e.classList.remove('is-active')
      })


      let element = document.querySelector(".card")
      const r = id * 880
      element.style.top = `-${r}px`
    }
  }
}
</script>

<style scoped>
.user-component {
  background-color: whitesmoke;
}
.top-tools {
  width: 100%;
  position: fixed;
}
.user-wrapper {
  position: relative;
  width: 880px;
  margin: 4px auto -300px;
  height: 1200px;
}
.user-wrapper .user-content {
  position: relative;
}
.user-wrapper .left-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 128px;
}
.left-wrapper .user-avatar {
  width: 128px;
  height: 128px;
  background: #8ec5fc;
}
.left-wrapper .jump-button {
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid grey;
  overflow: hidden;
  z-index: 999;
}
.jump-button .selection {
  width: 128px;
  height: 32px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  background: whitesmoke;
  color: black;
  transition: all .2s;
}
.selection.is-active {
  color: grey;
  background: #e2ebf0;
}
.selection:hover {
  cursor: pointer;
  color: grey;
  background: #e2ebf0;
}

.user-content .content-wrapper {
  margin-top: 20px;
  padding-left: 148px;
  width: 660px;
}

.content-wrapper .content {
  position: relative;
  overflow: hidden;
  height: 880px;
  width: 100%;
  backdrop-filter: blur(9px);
  background-color: rgba(226,235,240,.55);
  box-shadow: 0 0 1px grey;
  border-radius: 4px;
}
.content .card {
  position: relative;
  top: 0;
  height: 4400px;
  transition: all .5s;
}

.card .card-wrapper {
  height: 880px;
}

</style>