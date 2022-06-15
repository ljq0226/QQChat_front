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
import SocketService from '@/utils/websocket';
import {reactive,onBeforeMount,provide,computed} from 'vue'
import { useUserStore } from '@/store/user'
import {useWebsocketStore} from '@/store/websocket'
const userStore = useUserStore()
const websocketStore = useWebsocketStore()
let userInfo = computed(()=>userStore.info)
provide('userInfo', userInfo.value)
//     const data = reactive({
//       socketServe: SocketService.Instance,
//     });
//     SocketService.Instance.connect();
//     SocketService.Instance.onmessage();
//     data.socketServe = SocketService.Instance;
// provide('socket',data.socketServe)
 const data = reactive({
      socketServe: websocketStore.Instance,
    });
    websocketStore.Instance.connect();
    data.socketServe = websocketStore.Instance;
provide('socket',data.socketServe)
onBeforeMount(()=>{
 
})

</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/images/home/bcc.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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
        background-image: url('../assets/images/login_bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
      }
    }
  }
}
</style>
