<template>
  <div class="root">
    <div class="view">
      <div class="header">
        <Header></Header>
      </div>

      <div class="bottom">
        <div class="sideList">
          <SideList></SideList>
        </div>
        <div class="mainView">
          <MainView></MainView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/header/index.vue'
import MainView from './components/mainView/index.vue'
import SideList from './components/sideList/index.vue'
import { provide } from 'vue'

const info = JSON.parse(localStorage.getItem('login'))
provide('userInfo',{qq:info.qq,username:info.username})
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  background-color: rgb(2, 121, 91);
  display: flex;
  justify-content: center;
  align-items: center;
  .view {
    background-color: #fff;
    height: 75vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    border-radius: 1vw;
    .header {
      height: 8%;
      background-color: rgba(223, 223, 224, 0.5);
      opacity: 0.9;
      border-bottom: 1px solid rgba(18, 17, 17, 0.8);
    }

    .bottom {
      display: flex;
      height: 90%;
      .sideList {
        background-color: rgba(253, 253, 253, 0.5);
        display: flex;
        flex-flow: column;
        border-right: 1px solid rgba(91, 84, 84, 0.5);
        width: 30%;
        height: 100%;
        overflow: auto;
      }
      .mainView {
        background-image: url('@/assets/images/home/qqbc.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: rgba(253, 253, 253, 0.5);
        display: flex;
      }
    }
  }
}
</style>
