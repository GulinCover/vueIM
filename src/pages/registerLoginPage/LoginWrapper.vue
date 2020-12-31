<template>
  <div class="login-component">
    <div class="qrcode-login">
      <div class="input1">
        <div class="user">
          <i class="fa fa-address-book-o fa-2x"></i>
          <input type="text" placeholder="请输入账户">
        </div>
        <div class="delimiter"></div>
        <div class="pwd">
          <i class="fa fa-keyboard-o fa-2x"></i>
          <input type="password" placeholder="请输入密码">
        </div>
        <div class="button">
          <button class="callback-button" @click="callbackLogin">
            <span>返回</span>
          </button>
          <button class="submit-button">
            <span>确定</span>
          </button>
        </div>
      </div>
      <div class="input2">
        <div class="user">
          <i class="fa fa-address-book-o fa-2x"></i>
          <input type="text" placeholder="请输入账户">
        </div>
        <div class="delimiter"></div>
        <div class="pwd">
          <i class="fa fa-keyboard-o fa-2x"></i>
          <input type="password" placeholder="请输入密码">
        </div>
        <div class="button">
          <button class="submit-button">
            <span>确定</span>
          </button>
        </div>
      </div>
    </div>
    <!--    <div class="input">-->
    <!--      <div class="user">-->
    <!--        <i class="fa fa-address-book-o fa-2x"></i>-->
    <!--        <input type="text" placeholder="请输入账户">-->
    <!--      </div>-->
    <!--      <div class="delimiter"></div>-->
    <!--      <div class="pwd">-->
    <!--        <i class="fa fa-keyboard-o fa-2x"></i>-->
    <!--        <input type="password" placeholder="请输入密码">-->
    <!--      </div>-->
    <!--      <div class="button">-->
    <!--        <button class="submit-button">-->
    <!--          <span>确定</span>-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="bottom-login-method">
      <i class="fa fa-weixin fa-3x" @click="showOne" @mouseover="activeW" @mouseleave="cancel"></i>
      <i class="fa fa-github fa-3x" @click="showTwo" @mouseover="activeG" @mouseleave="cancel"></i>
      <i class="fa fa-qrcode fa-3x" @click="showThree" @mouseover="activeQ" @mouseleave="cancel"></i>
    </div>
    <div class="icon-subscript">
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginWrapper",
  data() {
    return {
      isLeft: true,
    }
  },
  mounted() {
  },
  methods: {
    activeW() {
      let classList = document.querySelector(".icon-subscript").classList;
      classList.remove("two", "three")
      classList.add("one")
    },
    activeG() {
      let classList = document.querySelector(".icon-subscript").classList;
      classList.remove("three", "one")
      classList.add("two")
    },
    activeQ() {
      let classList = document.querySelector(".icon-subscript").classList;
      classList.remove("two", "one")
      classList.add("three")
    },

    cancel() {
      let classList = document.querySelector(".icon-subscript").classList;
      classList.remove("one", "two", "three")
    },

    showOne() {
      let element = document.querySelector(".qrcode-login");
      element.classList.add("left")
      let input = document.querySelector(".input1");
      input.classList.add("is-qrcode")
    },
    showTwo() {
      let element = document.querySelector(".qrcode-login");
      element.classList.add("left")
      let input = document.querySelector(".input1");
      input.classList.remove("is-qrcode")
    },
    showThree() {
      let element = document.querySelector(".qrcode-login");
      element.classList.add("left")
      let input = document.querySelector(".input1");
      input.classList.add("is-qrcode")
    },

    callbackLogin() {
      let element = document.querySelector(".qrcode-login");
      element.classList.remove("left")
    }
  }
}
</script>

<style scoped>
.login-component {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.login-component .qrcode-login {
  width: 1120px;
  position: relative;
  left: -280px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  transition: all .5s;
}

.qrcode-login.left {
  left: 280px;
}

.qrcode-login .input2,
.qrcode-login .input1 {
  opacity: 1;
  width: 400px;
  margin: 0 80px;
  transition: all .5s;
}
.input2.is-qrcode,
.input1.is-qrcode {
  opacity: 0;
  transform: scale(1.1);
}


.qrcode-login .input2 .button,
.qrcode-login .input1 .button {
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.input2 .button .callback-button,
.input2 .button .submit-button,
.input1 .button .callback-button,
.input1 .button .submit-button {
  width: 180px;
  border-radius: 14px;
  border: 1px solid cornflowerblue;
  transition: all .2s;
}

.input2 .button .callback-button:hover,
.input2 .button .submit-button:hover,
.input1 .button .callback-button:hover,
.input1 .button .submit-button:hover {
  color: grey;
  background-color: #3b9dff;
  cursor: pointer;
}

.input2 .pwd,
.input2 .user,
.input1 .pwd,
.input1 .user {
  display: flex;
}

.input2 .pwd input,
.input2 .user input,
.input1 .pwd input,
.input1 .user input {
  width: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-size: 18px;
  padding-left: 10px;
}

.input2 .pwd i,
.input2 .user i,
.input1 .pwd i,
.input1 .user i {
  width: 35px;
  height: 35px;
  text-align: center;
}
.input2 .delimiter,
.input1 .delimiter {
  width: 380px;
  height: 2px;
  background-color: grey;
  margin: 10px;
}

.bottom-login-method {
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.bottom-login-method i {
  text-align: center;
  width: 48px;
  transition: all .2s;
}

.bottom-login-method i:hover {
  cursor: pointer;
  position: relative;
  top: 0;
  animation: iconKey 2s ease-in-out infinite;
}

@keyframes iconKey {
  from {
    top: 0;
  }
  30% {
    top: -10px;
  }
  60% {
    top: 0;
  }
  to {
    top: 0;
  }
}

.icon-subscript {
  position: absolute;
  bottom: 5px;
  left: 80px;
  width: 10px;
  height: 2px;
  border-radius: 4px;
  background: #3b9dff;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s;
}

.icon-subscript.one {
  opacity: 1;
  left: 80px;
  visibility: visible;
}

.icon-subscript.two {
  opacity: 1;
  left: 194px;
  visibility: visible;
}

.icon-subscript.three {
  opacity: 1;
  left: 306px;
  visibility: visible;
}
</style>







