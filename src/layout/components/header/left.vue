<template>
  <div class="left_all">
    <div class="left_all_left">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
    </div>
    <div class="left_all_middle">
      <div class="input">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
    <div class="left_all_right">
      <img src="@/assets/images/home/add.png" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.left_all {
  display: flex;
  align-items: center;
  justify-content: center;
  .left_all_left {
    flex: 0.25;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    .circle {
      width: 12px;
      height: 12px;
      background-color: $primaryColor;
      border-radius: 12px;
      margin: 3px;
    }
    .c1 {
      background-color: rgb(255, 95, 87);
    }
    .c2 {
      background-color: rgb(255, 190, 47);
    }
    .c3 {
      background-color: rgb(39, 198, 63);
    }
  }
  .left_all_middle {
    flex: 0.6;
    display: flex;
    .input {
      justify-content: center;
      align-items: center;
      margin: 5px;
      input {
        width: 100%;
        font-size: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
    }
  }
  .left_all_right {
    flex: 0.15;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 45%;
      border: 1px solid #ccc;
      border-radius: 50px;
    }
  }
}
</style>
