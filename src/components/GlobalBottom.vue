<template>
  <div class="global-bottom">
    <div class="bottom-content">
      <div class="bottom-content-top">
        <div v-for="item in topDataList" :key="item.title" class="">
          <h4 style="font-weight: 1200">{{item.title}}</h4>
          <div>
            <div v-for="it in item.content" :key="it">
              <div v-if="it.url">
                <a :href="it.url" target="_blank" style="font-family: font;color: #FCFCFC">
                  <span>{{it.text}}</span>
                </a>
              </div>
              <div v-else>
                <span>{{it.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 80px;width: auto"></div>
      <div class="bottom-content-bottom">
        <span>{{bottomDataList.top}}</span>
        <hr>
        <span>{{bottomDataList.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalBottom",
  props: [
    "topDataList",
    "bottomDataList",
  ]
}
</script>

<style scoped>
.global-bottom {
  height: 300px;
  width: auto;
  background-color: #1A1A1A;
  color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
}

.global-bottom .bottom-content {
  width: 1000px;
  position: relative;
}
.global-bottom .bottom-content .bottom-content-top {
  display: flex;
  justify-content: space-around;
  align-items: start;
  font-size: 12px;
}
.global-bottom .bottom-content .bottom-content-bottom {
  text-align: center;
}
</style>