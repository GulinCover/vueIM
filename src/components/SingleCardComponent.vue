<template>
  <div class="single-card-component">
    <div class="backdrop">
      <img :src="backdrop" alt="">
    </div>
    <div class="mask"></div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import backdrop from "@/assets/backdrop/backdrop2.png";

export default {
  name: "SingleCardPage",
  data() {
    return {
      backdrop:backdrop,
    }
  },
}
</script>

<style scoped>
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
  background-color: rgba(211,211,211,.55);
}
.backdrop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.single-card-component .mask {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -300px;
  width: 600px;
  height: 480px;
  backdrop-filter: blur(9px);
  background-color: rgba(255,255,255,.55);
  border-radius: 14px;
  box-shadow: 0 0 8px grey;
}
</style>