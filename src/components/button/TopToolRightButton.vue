<template>
  <div class="top-tool-right-button">
    <span>{{ data.content }}</span>
  </div>
</template>

<script>
export default {
  name: "TopToolRightButton",
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.top-tool-right-button {
  height: var(--global-top-button-height);
  color: var(--global-white-font-color);
  background: #DC143C;
  border-radius: 16px;
  padding: 0 16px;
  transition: all 0.5s;
}
.top-tool-right-button:hover {
  color: var(--global-black-font-color);
  background: red;
  cursor: pointer;
}
</style>