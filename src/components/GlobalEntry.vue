<template>
  <div class="entry">
    <div v-for="(item, key) in entry" :key="key"
         class="entry-style"
         :class="{
            'entry-color1':item.level===1,
            'entry-color2':item.level===2,
            'entry-color3':item.level===3,
            'entry-color4':item.level===4,
         }"
    >
      <p>{{ item.name }}</p>
    </div>
    <div class="plus">
      +
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalEntry",
  props: {
    entry: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.entry {
  display: flex;
  justify-content: center;
  align-items: center;
}
.entry .entry-style {
  text-indent: 0;
  display: inline-block;
  padding: 0 10px;
  margin: 0 10px;
  border: 1px solid #c9c9c9;
  border-radius: 14px;
}
.entry-color1 {
  background-color: #e75454;
}
.entry-color2 {
  background-color: #9e7575;
}
.entry-color3 {
  background-color: #584f4f;
}
.entry-color4 {
  background-color: #6b73a8;
}
</style>