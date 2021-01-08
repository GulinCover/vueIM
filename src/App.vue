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
@import "globalApi/GlobalVar.css";
@import "~font-awesome/css/font-awesome.min.css";
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
}
body {
  background-color: rgba(18,18,18,0);
}
::-webkit-scrollbar {
  width: 3px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: linear-gradient(60deg, #535353, #7a7a7a);
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/*@font-face {*/
/*  font-family: "font";*/
/*  src: url("./assets/font.ttf") format("ttf");*/
/*}*/

</style>
