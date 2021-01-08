<template>
  <div class="access-wrapper">
    <div class="title">
      <h2>账户管理</h2>
    </div>
    <div class="nickname">
      <label for="nickname">昵称</label>
      <input id="nickname" type="text" autocomplete="off" v-model="userAbs.nickname" disabled="true">
      <p>昵称，网络中昵称是您在回复，私聊等时所显示的名字。每个用户都能为自己起个性化的超酷昵称，但昵称是不可以互相重复的，并且不能包含任何符号。（#更改时请慎重！需要消耗一定的coin购买！）</p>
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
      <div>
        <input id="email" type="text" autocomplete="off" v-model="userAbs.email" disabled="true">
        <button>编辑</button>
      </div>
      <p>Email是您注册账号时所提供的依据，是不可重复的。是您登录时提供登录账号的方法之一。也是您遗忘密码后，找回密码的凭证，请妥善保管，切勿泄露。</p>
    </div>
    <div class="bind-phone">
      <label for="phone">
        Phone
      </label>
      <div>
        <input id="phone" type="text" autocomplete="off" v-model="userAbs.phone" disabled="true">
        <button>编辑</button>
      </div>
      <p>Phone是您注册账号时所提供的依据，是不可重复的。是您登录时提供登录账号的方法之一。也是您遗忘密码后，找回密码的凭证，请妥善保管，切勿泄露。</p>
    </div>
    <div class="password">
      <label for="password">
        密码
      </label>
      <div>
        <input id="password" type="password" autocomplete="off" v-model="userAbs.password" disabled="true">
        <button>编辑</button>
      </div>
      <p>密码是您登录账号时所提供的依据，请妥善保管，切勿泄露。</p>
    </div>
    <div class="desc">
      <label>个性简介</label>
      <div>
        <textarea v-model="userAbs.desc" rows="10">
        </textarea>
      </div>
    </div>
    <div class="location">
      <label>位置</label>
      <div class="location-wrapper">
        <div>
          <select v-model="userAbs.defaultSelectLocation.defaultSelectCountry" @change="selectCountry($event)">
            <option v-for="(item ,key) in userAbs.location.Location.CountryRegion" :key="key" :value ="item.Name">{{ item.Name }}</option>
          </select>
          <p>{{userAbs.defaultSelectLocation.defaultSelectCountry}}</p>
        </div>
        <div>
          <select v-model="userAbs.defaultSelectLocation.defaultSelectState" @change="selectState($event)">
            <option v-for="(item ,key) in userAbs.canSelectLocation.canSelectState" :key="key" :value ="item.Name">{{ item.Name }}</option>
          </select>
          <p>{{userAbs.defaultSelectLocation.defaultSelectState}}</p>
        </div>
        <div>
          <select v-model="userAbs.defaultSelectLocation.defaultSelectCity">
            <option v-for="(item ,key) in userAbs.canSelectLocation.canSelectCity" :key="key" :value ="item.Name">{{ item.Name }}</option>
          </select>
          <p>{{userAbs.defaultSelectLocation.defaultSelectCity}}</p>
        </div>

      </div>
    </div>
    <div class="save">
      <button>保存改动</button>
    </div>
    <hr>
    <div class="issue">
      <label>意见&建议</label>
      <div>
        <textarea v-model="userAbs.issue" rows="10">
        </textarea>
        <button>提交</button>
      </div>
    </div>
    <hr>
    <div class="logout">
      <button>注销登出</button>
      <p>注销是清除当前登录的用户信息，清除后即可使用其他用户来登录。（#注销后将需要重新输入账号和密码来登录服务，请谨慎考虑!）</p>
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
        location: require("@/assets/location.json"),
        defaultSelectLocation: {
          defaultSelectCountry: '中国',
          defaultSelectState: '北京',
          defaultSelectCity: '东城',
        },
        canSelectLocation: {
          canSelectState: null,
          canSelectCity: null,
        },
        issue: '',
      }
    }
  },
  methods: {
    editorAvatar() {
    },

    selectCountry(e) {
      const index = e.target.selectedIndex
      let event = {
        target: {
          selectedIndex: 0
        }
      }
      const state = this.userAbs.location.Location.CountryRegion[index].State
      if (Array.isArray(state) && state !== null && state !== undefined) {
        this.userAbs.canSelectLocation.canSelectState = state
        this.userAbs.defaultSelectLocation.defaultSelectState = this.userAbs.canSelectLocation.canSelectState[0].Name
        this.selectState(event)
        return
      } else if ((state instanceof Object)) {
        this.userAbs.canSelectLocation.canSelectState = state.City
        this.userAbs.defaultSelectLocation.defaultSelectState = this.userAbs.canSelectLocation.canSelectState[0].Name
        this.selectState(event)
        return
      }
      this.userAbs.canSelectLocation.canSelectState = [{"Name":"空"}]
      this.userAbs.defaultSelectLocation.defaultSelectState = this.userAbs.canSelectLocation.canSelectState[0].Name
      this.selectState(event)
    },
    selectState(e) {
      const index = e.target.selectedIndex;
      if (this.userAbs.canSelectLocation.canSelectState.length <= 1) {
        this.userAbs.canSelectLocation.canSelectCity = [{"Name":"空"}]
        this.userAbs.defaultSelectLocation.defaultSelectCity = this.userAbs.canSelectLocation.canSelectCity[0].Name
        return
      }
      let city = this.userAbs.canSelectLocation.canSelectState[index].City
      if (city !== undefined && city !== null && Array.isArray(city)) {
        this.userAbs.canSelectLocation.canSelectCity = city
        this.userAbs.defaultSelectLocation.defaultSelectCity = this.userAbs.canSelectLocation.canSelectCity[0].Name
        return
      }
      this.userAbs.canSelectLocation.canSelectCity = [{"Name":"空"}]
      this.userAbs.defaultSelectLocation.defaultSelectCity = this.userAbs.canSelectLocation.canSelectCity[0].Name
    },
  },
  mounted() {
    this.userAbs.canSelectLocation.canSelectState = this.userAbs.location.Location.CountryRegion[0].State
    this.userAbs.canSelectLocation.canSelectCity = this.userAbs.location.Location.CountryRegion[0].State[0].City
  },
}
</script>

<style scoped>
hr {
  margin: 20px 0;
}
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

.password input,
.bind-phone input,
.bind-email input,
.nickname input {
  height: 27px;
  margin-top: 5px;
  width: 320px;
  padding-left: 10px;
}

.logout p,
.password p,
.bind-phone p,
.bind-email p,
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

.issue div button,
.save button,
.password div button,
.bind-phone div button,
.bind-email div button,
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

.issue div button:hover,
.save button:hover,
.password div button:hover,
.bind-phone div button:hover,
.bind-email div button:hover,
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

.bind-phone,
.bind-email {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.bind-phone label,
.bind-email label {
  margin-bottom: 5px;
}

.location-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.location-wrapper div {
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.issue,
.desc {
  margin-top: 10px;
}
.issue textarea,
.desc textarea {
  padding-top: 10px;
  margin-top: 5px;
  width: 320px;
  padding-left: 10px;
}
.issue div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.issue div button {
  margin-right: 20px;
}

.location {
  margin-top: 10px;
}

.logout,
.save {
  margin-top: 10px;
}

.save button {
  width: 128px;
}

.logout {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.logout button {
  border: none;
  border-radius: 4px;
  height: 27px;
  width: 128px;
  background: linear-gradient(to bottom, #c9c9c9, #ff1f1f);
  transition: all .2s;
  text-align: center;
}
.logout button:hover {
  cursor: pointer;
  border: 1px solid #ff1f1f;
  color: grey;
  width: 196px;
}

</style>