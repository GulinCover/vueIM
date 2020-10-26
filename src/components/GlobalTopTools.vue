<template>
  <div class="global-top-tools">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="middle">
      <slot name="middle"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalTopTools"
}
</script>

<style>
.global-top-tools {
  width: auto;
  height: 24px;
  background-color: #e3e3e3;
  display: flex;
  justify-content: space-between;
}

.global-top-tools .left {
  background-color: beige;
  width: 50px;
  height: 24px;
}

.global-top-tools .middle {
}

.global-top-tools .right {
  background-color: beige;
  width: 50px;
  height: 24px;
}

</style>