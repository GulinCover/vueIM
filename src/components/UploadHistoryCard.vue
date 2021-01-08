<template>
  <div class="upload-history-wrapper">
    <div class="title">
      <p>
        {{ topicName }}
      </p>
    </div>
    <div class="file-name">
      <p>
        {{ fileName }}
      </p>
    </div>
    <div class="time">
      <p>
        {{ time }}
      </p>
    </div>
    <div class="button-group">
      <button class="download" @click.stop="download">下载</button>
      <button class="cancel" @click.stop="cancel">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadHistoryCard",
  props: [
    "topicName",
    "fileName",
    "time",
  ],
  methods: {
    download() {
      this.$emit("download")
    },
    cancel() {
      this.$emit("cancel")
    },
  }
}
</script>

<style scoped>
p {
  font-size: 12px;
}
.upload-history-wrapper {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  background: rgba(255,255,255,.45);
  backdrop-filter: blur(9px);
}
.title {

}
.file-name p,
.title p {
  height: 48px;
  line-height: 48px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-name p {
  width: 100px;
}

.time p {
  width: 70px;
  text-align: center;
  color: grey;
}
.button-group {
  width: 152px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.button-group button {
  margin: 0 2px;
  width: 40px;
  border: 1px solid grey;
  border-radius: 4px;
  transition: all .2s;
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

</style>