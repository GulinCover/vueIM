<template>
  <div class="access-wrapper">
    <div class="title">
      <h2>账户管理</h2>
    </div>
    <div class="nickname">
      <label for="nickname">昵称</label>
      <input id="nickname" type="text" autocomplete="off" v-model="userAbs.nickname">
      <p>昵称，网络中昵称是您在回复，私聊等时所显示的名字。每个用户都能为自己起个性化的超酷昵称，但昵称是不可以互相重复的，并且不能包含任何符号。（更改时请慎重！需要消耗一定的coin购买！）</p>
    </div>
    <div class="avatar">
      <img :src="userAbs.avatar" alt="">
      <button @click="editorAvatar">编辑</button>
      <p>头像用于您在回复，私聊等时所显示的图片。每个用户都可以拥有一个与众不同的网络形象，展示自己的个性。</p>
    </div>
    <hr>
    <div class="info">
      <div class="sex">
        <div v-if="userAbs.sex === ''">
          <label for="0">
            <i class="fa fa-genderless"></i>
            <input id="0" type="radio" name="sex" value="0">
          </label>
          <label for="1">
            <i class="fa fa-mars-double"></i>
            <input id="1" type="radio" name="sex" value="1">
          </label>
          <label for="2">
            <i class="fa fa-venus-double"></i>
            <input id="2" type="radio" name="sex" value="2">
          </label>
          <label for="3">
            <i class="fa fa-venus-mars"></i>
            <input id="3" type="radio" name="sex" value="3">
          </label>
          <label for="4">
            <i class="fa fa-mars"></i>
            <input id="4" type="radio" name="sex" value="4">
          </label>
          <label for="5">
            <i class="fa fa-venus"></i>
            <input id="5" type="radio" name="sex" value="5">
          </label>
        </div>
        <div v-else>
          <label v-if="userAbs.sex === '0'">
            <i class="fa fa-genderless"></i>
            <input type="radio" name="sex" value="0" checked>
          </label>
          <label v-if="userAbs.sex === '1'">
            <i class="fa fa-mars-double"></i>
            <input type="radio" name="sex" value="1" checked>
          </label>
          <label v-if="userAbs.sex === '2'">
            <i class="fa fa-venus-double"></i>
            <input type="radio" name="sex" value="2" checked>
          </label>
          <label v-if="userAbs.sex === '3'">
            <i class="fa fa-venus-mars"></i>
            <input type="radio" name="sex" value="3" checked>
          </label>
          <label v-if="userAbs.sex === '4'">
            <i class="fa fa-mars"></i>
            <input type="radio" name="sex" value="4" checked>
          </label>
          <label v-if="userAbs.sex === '5'">
            <i class="fa fa-venus"></i>
            <input type="radio" name="sex" value="5" checked>
          </label>
        </div>
      </div>
      <div class="age">
        <div v-if="userAbs.age === ''">
          <label for="age">
            年龄
            <input id="age" type="text" v-model="userAbs.age">
          </label>
        </div>
        <div v-else>
          <label>
            年龄
            <input type="text" v-model="userAbs.age" disabled="true">
          </label>
        </div>
      </div>
      <div class="level">
        level:{{ userAbs.level }}
      </div>
    </div>
    <hr>
    <div class="bind-email">
      <label for="email">
        Email
      </label>
      <input id="email" type="text" autocomplete="off" v-model="userAbs.email">
      <p>Email是您注册账号时所提供的依据，是不可重复的。是您登录时提供登录账号的方法之一。也是您遗忘密码后，找回密码的凭证，请妥善保管，切勿泄露。</p>
    </div>
    <div class="bind-phone">phone</div>
    <div class="password">password</div>
    <div class="desc">desc</div>
    <div class="location">location</div>
    <div class="save">
      <button>save</button>
    </div>
    <div class="issue">
      issue
    </div>
    <div class="logout">
      <button>logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessWrapper",
  data() {
    return {
      userAbs: {
        nickname: 'alex',
        avatar: '',
        sex: '1',
        age: '1',
        level: '0',
        email: '',
        phone: '',
        password: '',
        desc: '',
        location: '',
      }
    }
  },
  methods: {
    editorAvatar() {

    }
  }
}
</script>

<style scoped>
.access-wrapper {
  padding: 20px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.nickname {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.nickname input {
  height: 27px;
  margin-top: 5px;
  width: 320px;
  padding-left: 10px;
}

.avatar p,
.nickname p {
  font-size: 12px;
  color: grey;
  margin: 5px 0;
}

.avatar {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.avatar button {
  margin-top: 5px;
  margin-left: 64px;
  width: 64px;
  height: 24px;
  background: linear-gradient(to bottom, #c9c9c9, #00c400);
  border: none;
  border-radius: 4px;
  transition: all .5s;
}

.avatar button:hover {
  cursor: pointer;
  border: 1px solid #00c400;
}

.avatar img {
  width: 128px;
  height: 128px;
}

.info {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info .sex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 128px;
}

.info .sex label {
  padding: 0 10px;
  text-align: center;
}

.info .sex label input {
  margin-left: 5px;
}

.info .sex label i {
  width: 15px;
  height: 15px;
}

.info .age {
  width: 128px;
}

.info .age label input {
  width: 48px;
  margin-left: 2px;
  padding-left: 5px;
}

.info .level {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14px;
  line-height: 14px;
  width: 128px;
  color: grey;
}

.info .level:hover {
  cursor: default;
}

.info .level:before {
  content: "";
  position: absolute;
  width: 128px;
  height: 8px;
  border-radius: 4px;
  background-color: rgba(132, 197, 252, .55);
  z-index: -1;
  backdrop-filter: blur(9px);
}

.bind-email {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.bind-email label {
  margin-bottom: 5px;
}
.bind-email p {

}

</style>