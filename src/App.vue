<template>
  <div id="app">
    <router-link to="/" hidden>Index</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "font";
}
::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #535353;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
@font-face {
  font-family: "font";
  src: url("./assets/font.ttf") format("ttf");
}
</style>
