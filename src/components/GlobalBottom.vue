<template>
  <div class="global-bottom">
    <div class="bottom-content">
      <div class="bottom-content-top">
        <div v-for="(item, index) in topDataList" :key="index" class="">
          <h4 style="font-weight: 1200">{{ item.title }}</h4>
          <div>
            <div v-for="(it, i) in item.content" :key="i">
              <div v-if="it.url">
                <a :href="it.url" target="_blank" style="font-family: font;color: #FCFCFC">
                  <span>{{ it.text }}</span>
                </a>
              </div>
              <div v-else>
                <span>{{ it.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 80px;width: auto"></div>
      <div class="bottom-content-bottom">
        <span>{{ bottomDataList.top }}</span>
        <hr>
        <span>{{ bottomDataList.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalBottom",
  props: {
    topDataList: {
      type: Array,
      default() {
        return [
          {
            title: "个人信息",
            content: [
              {
                text: "GulinCover@github",
                url: ""
              },
              {
                text: "1208625327@qq.com",
                url: ""
              }
            ],
          },
          {
            title: "账户",
            content: [
              {
                text: "账户申诉",
                url: ""
              }
            ],
          },
          {
            title: "相关社区",
            content: [
              {
                text: "Github.com",
                url: "https://www.github.com",
              },
              {
                text: "gitee.com",
                url: "https://www.gitee.com"
              }
            ],
          }
        ]
      }
    },
    bottomDataList: {
      type: Object,
      default() {
        return {
          top: "Welcome to the memory of the internet",
          text: "Power By GulinCover@2020.10.21"
        }
      },
    }
  },
}
</script>

<style scoped>
.global-bottom {
  margin-top: -300px;
  height: 300px;
  width: 100%;
  background-image: linear-gradient(-45deg, #0a0a0a, #212121);
  color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
}

.global-bottom .bottom-content {
  width: var(--global-bottom-width);
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