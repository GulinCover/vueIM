<template>
  <div class="register-component">
    <global-top-tools class="global-top-tools">
    </global-top-tools>

    <single-card-component>
      <template slot="content">
        <div class="register-login-wrapper">
          <div class="title">
            <div>
              <h2>登录</h2>
            </div>
            <div>
              <h2>注册</h2>
            </div>
          </div>
          <div class="login-wrapper">
            <login-wrapper>
            </login-wrapper>
          </div>
        </div>
      </template>
    </single-card-component>
  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import SingleCardComponent from "@/components/SingleCardComponent";
import LoginWrapper from "@/pages/registerLoginPage/LoginWrapper";

export default {
  name: "Index",
  components: {
    GlobalTopTools,
    SingleCardComponent,
    LoginWrapper,
  },
}
</script>

<style scoped>
.global-top-tools {
  position: fixed;
  width: 100%;
  top: 0;
}
.register-login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-left: -200px;
  margin-top: -200px;
}
.register-login-wrapper .login-wrapper {
  position: relative;
  width: inherit;
  height: 300px;
}
.register-login-wrapper .title {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>







