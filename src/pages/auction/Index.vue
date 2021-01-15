<template>
  <div class="auction-wrapper">
    <global-top-tools class="top-bar"></global-top-tools>
    <div style="width: 100%;height: 28px"></div>

    <div class="content">
      <div class="left">
        <auction-hot-list/>
      </div>
      <div class="right">
        <auction-section/>
      </div>
    </div>

    <global-bottom></global-bottom>
  </div>
</template>

<script>
import GlobalTopTools from "@/components/GlobalTopTools";
import GlobalBottom from "@/components/GlobalBottom";
import AuctionHotList from "@/components/AuctionHotList";
import AuctionSection from "@/components/AuctionSection";

export default {
  name: "Index",
  components: {
    GlobalTopTools,
    GlobalBottom,
    AuctionHotList,
    AuctionSection,
  }
}
</script>

<style scoped>
.auction-wrapper {
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}
.top-bar {
  width: 100%;
  position: fixed;
  top: 0;
}
.content {
  margin: 0 auto 300px;
  width: 1200px;
  min-height: 880px;
  display: flex;
  justify-content: center;
  align-items: start;
}
.content .left {
  width: 180px;
  height: 880px;
}
.content .right {
  width: 1020px;
  height: 880px;
}
</style>