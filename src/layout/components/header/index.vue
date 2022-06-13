<template>
  <div class="all">
    <div class="all_left"><LeftView></LeftView></div>
    <div class="all_middle"><MiddleView></MiddleView></div>
    <div class="all_right"><RightView></RightView></div>
  </div>
</template>
<script setup>
import LeftView from './left.vue'
import MiddleView from './middle.vue'
import RightView from './right.vue'
</script>
<style lang="scss" scoped>
.all {
  display: flex;
  height: 100%;

  .all_left {
    flex: 0.23;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .all_middle {
    flex: 0.66;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all_right {
    flex: 0.1;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
