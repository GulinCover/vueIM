<template>
  <div class="global-top-tools">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="middle">
      <div>{{date}}</div>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import {timeTools} from "@/utils/timeTools";

export default {
  name: "GlobalTopTools",
  data() {
    return {
      date: ''
    }
  },
  created() {
    this.date = timeTools(new Date())
    setInterval(() => {
      this.date = timeTools(new Date())
    }, 1000)
  }
}
</script>

<style>
.global-top-tools {
  position: relative;
  width: auto;
  height: var(--global-top-height);
  background-image: linear-gradient(45deg, #cfd9df 0%, #e2ebf0 100%);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 8px slategrey;
}

.global-top-tools .left {

}

.global-top-tools .middle {
  width: 66px;
  height: var(--global-top-height);
  position: absolute;
  left: 50%;
  top: 0;
  margin-top: calc(0 - var(--global-top-height) / 2);
  margin-left: -33px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.global-top-tools .middle:hover {
  cursor: pointer;
}

.global-top-tools .right {

}

</style>