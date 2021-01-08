<template>
  <div class="upload-history">
    <div class="mask" :class="{'is-active':isShow}"></div>
    <div class="detail-info" :class="{'is-active':isShow}">
      <input type="text" v-model="detailInfo.topicName" autocomplete="off" disabled="true">
      <input type="text" v-model="detailInfo.fileName" autocomplete="off" disabled="true">
      <p>{{ detailInfo.time }}</p>
      <div class="button-group">
        <button class="close" @click="detailClose">
          <i class="fa fa-close fa-lg"></i>
        </button>
        <button class="download">下载</button>
        <button class="cancel">取消</button>
      </div>
    </div>
    <div class="wrapper" v-for="(item,key) in fileLists" :key="key"
         @click.stop="showDetailInfo(item)"
    >
      <upload-history-card
          @download="download"
          @cancel="cancel"
          :topic-name="item.topicName"
          :file-name="item.fileName"
          :time="item.time"
      />
    </div>
  </div>
</template>

<script>
import UploadHistoryCard from "@/components/UploadHistoryCard";

export default {
  name: "UploadHistory",
  components: {
    UploadHistoryCard,
  },
  data() {
    return {
      isShow: false,
      detailInfo: {
        topicName: '',
        fileName: '',
        time: ''
      },
      fileLists: [
        {
          topicName: 'this is a topic namefsafsafasfasfsafsafasfsafasfas',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
        {
          topicName: 'this is a topic name',
          fileName: 'ok.zip',
          time: '2021/02/01 12:02'
        },
      ]
    }
  },

  methods: {
    showDetailInfo(info) {
      this.isShow = true
      this.detailInfo.topicName = info.topicName
      this.detailInfo.fileName = info.fileName
      this.detailInfo.time = info.time

      let body = document.querySelector("body")
      let top = body.getBoundingClientRect().top
      top -= 20
      let element = document.querySelector(".detail-info")
      element.style.top = `${-top}px`
    },

    detailClose() {
      this.isShow = false
      let element = document.querySelector(".detail-info")
      element.style.top = `-200px`
    },

    download() {
      console.log("download")
    },
    cancel() {
      console.log("cancel")
    },
  },
}
</script>

<style scoped>
.upload-history {
  position: relative;
  padding: 10px;
}
.upload-history input {
  text-align: center;
}
.upload-history .mask {
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  transition: all .2s;
}
.upload-history .mask.is-active {
  visibility: visible;
  backdrop-filter: blur(9px);
  background: rgba(211,211,211,.55);
  z-index: 98;
}

.upload-history .detail-info {
  position: absolute;
  top: -200px;
  left: 50%;
  margin-left: -200px;
  border-radius: 14px;
  height: 180px;
  width: 400px;
  background: whitesmoke;
  transition: all .2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
}

.detail-info.is-active {
  visibility: visible;
  backdrop-filter: blur(9px);
  background: rgba(255,255,255,.65);
  top: 20px;
  z-index: 99;
  box-shadow: 0 0 1px black;
}

.detail-info input {
  padding: 0 5px;
  width: 380px;
  height: 48px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid grey;
}

.detail-info p {
  height: 36px;
  font-size: 12px;
}

.detail-info .button-group {
  position: absolute;
  top: 0;
  right: -48px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.button-group button {
  width: 40px;
  height: 32px;
  border: 1px solid grey;
  border-radius: 4px;
  transition: all .2s;
}
.button-group .close {
  background: rgba(255,255,255,0);
  border: none;
  transition: all .2s;
}
.button-group .close:hover {
  cursor: pointer;
  transform: rotateZ(180deg);
}
.button-group .editor {
}
.button-group .editor:hover {
  cursor: pointer;
  background: grey;
  color: white;
}
.button-group .download {
  background: cornflowerblue;
}
.button-group .download:hover {
  cursor: pointer;
  background: deepskyblue;
  color: white;
}
.button-group .cancel {
  background: indianred;
}
.button-group .cancel:hover {
  cursor: pointer;
  background: red;
  color: white;
}

.upload-history .wrapper {
  transition: all .2s;
}

.upload-history .wrapper:hover {
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  border-radius: 4px;
}
</style>