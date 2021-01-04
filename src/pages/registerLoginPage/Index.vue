<template>
  <div class="register-component">
    <global-top-tools class="global-top-tools">
    </global-top-tools>

    <div class="official-backdrop" :class="{'is-active':!isLogin}">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3242870650,3335518217&fm=11&gp=0.jpg" alt="">
    </div>

    <div class="single-card-component">
      <div class="backdrop">
        <img :src="backdrop" alt="">
      </div>
      <div class="mask">

        <div class="register-login-wrapper">
          <div class="title">
            <div class="login-button"
                 :class="{'is-active':isLogin}"
                 @click="switchLogin"
            >
              <h2>登录</h2>
            </div>
            <div class="register-button"
                 :class="{'is-active':!isLogin}"
                 @click="switchLogin"
            >
              <h2>注册</h2>
            </div>
          </div>
          <div class="login-wrapper" :class="{'is-active':!isLogin}">
            <login-wrapper></login-wrapper>
          </div>
          <div class="register-wrapper" :class="{'is-active':!isLogin}">
            <register-wrapper></register-wrapper>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import LoginWrapper from "@/pages/registerLoginPage/LoginWrapper";
import backdrop from "@/assets/backdrop/backdrop2.png";
import RegisterWrapper from "@/pages/registerLoginPage/RegisterWrapper";

export default {
  name: "Index",
  components: {
    RegisterWrapper,
    GlobalTopTools,
    LoginWrapper,
  },
  data() {
    return {
      backdrop:backdrop,
      isLogin: true,
    }
  },
  methods: {
    switchLogin() {

      if (this.isLogin) {
        this.isLogin = !this.isLogin
        let element = document.querySelector(".single-card-component .mask")
        element.classList.add("is-register")

        let element2 = document.querySelector(".register-login-wrapper")
        element2.classList.add("is-active")

        return
      }
      this.isLogin = !this.isLogin
      let element = document.querySelector(".single-card-component .mask")
      element.classList.remove("is-register")
      let element2 = document.querySelector(".register-login-wrapper")
      element2.classList.remove("is-active")

    }
  }
}
</script>

<style>
.register-component {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.register-component .official-backdrop {
  position: absolute;
  top: 50%;
  left: 20%;
  width: 600px;
  height: 400px;
  margin-top: -200px;
  margin-left: -100px;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  backdrop-filter: blur(9px);
  background-color: rgba(255, 255, 255, .25);
  box-shadow: 0 0 5px grey;
  z-index: 1;
  transition: all .5s;
}
.official-backdrop img {
  border-radius: 14px;
  width: 580px;
  height: 380px;
  object-fit: cover;
}
.official-backdrop.is-active {
  margin-top: -200px;
  visibility: visible;
  transform: scale(1);
  opacity: 1;
  z-index: 1;
}

.global-top-tools {
  position: fixed;
  width: 100%;
  top: 0;
}

.single-card-component {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.single-card-component .backdrop {
  width: inherit;
  height: inherit;
  position: absolute;
}

.single-card-component .backdrop:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(9px);
  background-color: rgba(211, 211, 211, .55);
}

.backdrop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.single-card-component .mask {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -300px;
  width: 600px;
  height: 480px;
  backdrop-filter: blur(9px);
  background-color: rgba(255, 255, 255, .55);
  border-radius: 14px;
  box-shadow: 0 0 8px grey;
  transition: all .5s;
}
.single-card-component .mask.is-register {
  width: 400px;
  height: 800px;
  margin-top: -400px;
  margin-left: 200px;
}

.register-login-wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-left: -200px;
  margin-top: -200px;
  transition: all .5s;
}
.register-login-wrapper.is-active {
  width: 380px;
  height: 600px;
  margin-left: -190px;
  margin-top: -380px;
}
.register-login-wrapper .register-wrapper,
.register-login-wrapper .login-wrapper {
  position: relative;
  width: inherit;
  height: 300px;
  transition: all .5s;
}
.login-wrapper {
  visibility: visible;
}
.login-wrapper.is-active {
  visibility: hidden;
  height: 0;
  opacity: 0;
}
.register-wrapper {
  visibility: hidden;
  opacity: 0;
}
.register-wrapper.is-active {
  visibility: visible;
  opacity: 1;
}

.register-login-wrapper .title {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title .login-button,
.title .register-button {
  margin: 0 20px;
  color: grey;
  transition: all .2s;
}

.title .login-button.is-active,
.title .register-button.is-active {
  color: black;
  border-bottom: 1px solid grey;
}

.title .login-button:hover,
.title .register-button:hover {
  cursor: pointer;
  color: black;
  border-bottom: 1px solid grey;
}

</style>







