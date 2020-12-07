<template>
  <div id="topic-page">
    <h1>topic page {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "TopicPage",
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>