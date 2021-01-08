<template>
  <div class="dialog-box-wrapper">
    <div class="show-box">
      <div class="show-box-wrapper">
        <info-notification-dialog-card
            v-for="(item,key) in test" :key="key"
            :content="item.content" :avatar="item.avatar" :direction="item.direction"
        />
      </div>
    </div>
    <div class="editor-box">
      <div class="menubar">
        <div class="bar">
          <div>
            <i class="fa fa-meh-o fa-lg"></i>
          </div>
          <div>
            <i class="fa fa-picture-o fa-lg"></i>
          </div>
        </div>
      </div>
      <textarea class="content" v-model="userInfoAbs.sendData" @input="isEmpty"></textarea>
      <div class="bottom-bar">
        <button :class="{'is-active':isActive}"
                @click="sendData"
        >发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import InfoNotificationDialogCard from "@/components/InfoNotificationDialogCard";

export default {
  name: "InfoNotificationDialogBox",
  components: {
    InfoNotificationDialogCard,
  },
  data() {
    return {
      test: [
        {
          content:'test',
          avatar: 'avatar',
          direction:'left',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'left',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'left',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'testasfffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaffff',
          avatar: 'avatar',
          direction:'left',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'testfasfassfas',
          avatar: 'avatar',
          direction:'right',
        },
        {
          content:'test',
          avatar: 'avatar',
          direction:'left',
        },
        {
          content:'testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsaf',
          avatar: 'avatar',
          direction:'right',
        },
      ],
      isActive: false,
      userInfoAbs: {
        sendData: '',
      }
    }
  },
  methods: {
    isEmpty() {
      if (this.userInfoAbs.sendData === '') {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },

    sendData() {
      if (this.isActive && this.userInfoAbs.sendData !== '') {
        let data = {
          content:this.userInfoAbs.sendData,
          avatar: 'asfs',
          direction: '',
        }
        this.test.push(data)
        this.userInfoAbs.sendData = ''
        this.$nextTick(()=>this.scrollBottom())
      }
    },

    scrollBottom() {
      let element = document.querySelector(".show-box-wrapper");
      element.scrollTo(0, element.scrollHeight)
    }
  },

  mounted() {
    this.scrollBottom()
  },
}
</script>

<style scoped>
.dialog-box-wrapper {
  width: 100%;
  height: 718px;
  overflow: hidden;
}

.dialog-box-wrapper .show-box {
  height: 500px;
  margin: 8px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid grey;
  backdrop-filter: blur(9px);
  background: rgba(255, 255, 255, .55);
}

.show-box .show-box-wrapper {
  overflow: scroll;
  overflow-x: hidden;
  background: rgba(225, 225, 225, .55);
  height: 490px;
  border-radius: 4px;
  padding: 5px;
}

.dialog-box-wrapper .editor-box {
  height: 200px;
  margin: 8px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.editor-box .menubar {
  backdrop-filter: blur(9px);
  background: rgba(255,255,255,.45);
  border-radius: 4px;
  width: 100%;
  flex: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5px;
}
.menubar .bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menubar .bar div {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 4px;
  transition: all .2s;
}

.menubar .bar div:hover {
  backdrop-filter: blur(9px);
  background: rgba(123, 123, 123, 0.45);
}
.menubar .bar div i {
  transition: all .2s;
}
.menubar .bar div:hover i {
  cursor: pointer;
  color: whitesmoke;
}

.editor-box .content {
  border-radius: 4px;
  border: 1px solid grey;
  min-width: 354px;
  max-width: 354px;
  padding: 5px;
  flex: 5;
}

.editor-box .bottom-bar {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.bottom-bar button {
  font-size: 12px;
  width: 48px;
  margin-top: 5px;
  color: grey;
  background: #9cc9ff;
  border: none;
  border-radius: 4px;
  transition: all .2s;
}
.bottom-bar button.is-active {
  background: #3b9dff;
  color: black;
}
.bottom-bar button.is-active:hover {
  cursor: pointer;
  background: #007dff;
}
</style>