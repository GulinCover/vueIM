<template>
  <div class="register-component">
    <div class="input">
      <div class="switch-input">
        <h3 :class="{'is-active':isSwitch}"
            @click="switchRegister"
        >邮箱</h3>
        <h3 :class="{'is-active':!isSwitch}"
            @click="switchRegister"
        >手机</h3>
      </div>
      <div class="email-input">
        <input type="text" v-model="emailData">
      </div>
      <div class="phone-input">
        <input type="text" v-model="phoneData">
      </div>
    </div>
    <div class="input">
      <label>用户名</label>
      <input type="text" v-model="nameData">
    </div>
    <div class="input">
      <label>密码</label>
      <input type="password" v-model="passwordData">
    </div>
    <div class="input">
      <label style="color: red">再一次密码</label>
      <input type="password" v-model="passwordAgainData">
    </div>
    <div class="input-button">
      <button
          @click="clearData"
      >重新填写</button>
      <button
          @click="submitData"
      >确认</button>
    </div>
    <div class="check-box">
      <input type="checkbox" :name="isAgree" v-model="isAgreeProtocolData">
      <p
          @click="jumpProtocol"
      >{{ webProtocol.info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterWrapper",
  props: {
    webProtocol: {
      type: Object,
      default() {
        return {
          site: 'https://www.baidu.com',
          info: "this is a web site protocol, please agree it!"
        }
      }
    },
  },
  data() {
    return {
      isSwitch: true,
      isAgree: true,

      emailData: '',
      phoneData: '',
      nameData: '',
      passwordData: '',
      passwordAgainData: '',
      isAgreeProtocolData: '',
    }
  },
  methods: {
    switchRegister() {
      if (this.isSwitch) {
        this.isSwitch = !this.isSwitch
        let email = document.querySelector(".input .email-input")
        email.classList.add("is-active")

        let phone = document.querySelector(".input .phone-input")
        phone.classList.add("is-active")
        return
      }
      this.isSwitch = !this.isSwitch
      let email = document.querySelector(".input .email-input")
      email.classList.remove("is-active")

      let phone = document.querySelector(".input .phone-input")
      phone.classList.remove("is-active")
    },

    clearData() {
      this.emailData = ''
      this.phoneData = ''
      this.nameData = ''
      this.passwordData = ''
      this.passwordAgainData = ''
      this.isAgreeProtocolData = ''
    },
    submitData() {
      if ((this.emailData === '' && this.phoneData === '') ||
          this.nameData === '' ||
          this.passwordAgainData === '' ||
          this.passwordData === ''
      ) {
        alert("不能有空!")
        return
      }

      if (this.isAgreeProtocolData === '') {
        alert("请同意网站协议!")
        return
      }

      if (this.passwordData !== this.passwordAgainData) {
        alert("密码填写不统一!")
        this.passwordAgainData = ''
        return
      }

      /*
      网络提交
      1.判断邮箱或手机是否注册过
       */
    },

    jumpProtocol() {
      window.open(this.webProtocol.site)
    }
  }
}
</script>

<style scoped>
.register-component {
  position: relative;
  width: 380px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.register-component .input {
  width: 380px;
  height: 50px;
  padding: 0 20px;
}

.input input {
  border: none;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: whitesmoke;
}

.input .switch-input {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input .switch-input h3 {
  transition: all .2s;
  color: whitesmoke;
}

.input .switch-input h3.is-active {
  color: black;
}

.input .switch-input h3:hover {
  cursor: pointer;
  color: black;
}

.input .email-input {
  width: 340px;
  position: absolute;
  visibility: visible;
  opacity: 1;
  transition: all .2s;
  z-index: 99;
}

.input .email-input.is-active {
  visibility: hidden;
  opacity: 0;
  z-index: -1;
}

.input .phone-input {
  width: 340px;
  position: absolute;
  visibility: hidden;
  transition: all .2s;
  opacity: 0;
  z-index: -1;
}

.input .phone-input.is-active {
  visibility: visible;
  opacity: 1;
  z-index: 99;
}

.input-button {
  width: 380px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.input-button button {
  width: 120px;
  height: 32px;
  margin-top: 18px;
  border-radius: 14px;
  border: 1px solid cornflowerblue;
  transition: all .2s;
}

.input-button button:hover {
  cursor: pointer;
  background-color: cornflowerblue;
  color: whitesmoke;
}

.check-box {
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.check-box input {
  margin-right: 10px;
}

.check-box p {
  color: grey;
  transition: all .2s;
}

.check-box p:hover {
  cursor: pointer;
  color: whitesmoke;
}
</style>