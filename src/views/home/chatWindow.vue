<template>
  <div class="chat_all">
    <div class="top">
      <div class="username">{{ router.query.username }}</div>
      <div class="phone"><img src="@/assets/images/home/phone.png" alt="" /></div>
      <div class="open"></div>
      <div class="messageIcon"><img src="@/assets/images/home/messeage.png" alt="" /></div>
    </div>
    <div class="chat_Message">
      <ChatMessage></ChatMessage>
    </div>
    <div class="chat">
      <div class="icons">
        <div class="icon"><i class="iconfont icon-biaoqing-xue"></i></div>
        <div class="icon"><i class="iconfont icon-5jietu-1"></i></div>
        <div class="icon"><i class="iconfont icon-doudong-shake"></i></div>
        <div class="icon"><i class="iconfont icon-wenjianjia"></i></div>
        <div class="icon"><i class="iconfont icon-xingtuxuetang-chuangjianwendangcitiao-"></i></div>
        <div class="icon"><i class="iconfont icon-24gl-telephone"></i></div>
        <div class="icon"><i class="iconfont icon-shizhong"></i></div>
        <div class="icon"><i class="iconfont icon-zimudaxie"></i></div>
        <div class="icons_open"></div>
      </div>
      <div class="sendMessage">
        <textarea v-model="newMessage.messeage" @keydown.enter="sendData" />
      </div>
    </div>
  </div>
</template>
<script setup >
import SocketService from '@/utils/websocket';
import { onBeforeMount, reactive, ref,inject } from 'vue'
import { useRoute } from 'vue-router'
import {useRecordStore } from '../..//store/record.js'
import ChatMessage from './chatMessage.vue'
const recordStore = useRecordStore()
const router = useRoute()
let record = reactive([])
    const data = reactive({
      socketServe: SocketService.Instance,
    });

    let newMessage = reactive({
      receiverQq:router.query.qq,
      messeage:''
    })
    console.log(router.query.qq);
    data.socketServe.registerCallBack('callback1', data.socketServe);
    const sendData = () => {
      console.log('发送的数据为',JSON.stringify(newMessage));
      data.socketServe.send(JSON.stringify(newMessage));
    };
onBeforeMount(()=>{
  SocketService.Instance.connect();
    data.socketServe = SocketService.Instance;
})
</script>
<style lang="scss" scoped>
.chat_all {
  display: flex;
  flex-flow: column;
  width: 46.1vw;
  position: relative;
  .chat {
    height: 13.9vh;
    width: 45.8vw;
    display: flex;
    flex-direction: column;
    .sendMessage {
      margin-top: 1vh;
      height: 12.9vh;
      textarea {
        font-size: 16px;
        width: 100%;
        height: 100%;
      }
    }
    .icons {
      height: 2vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .icons_open {
        flex: 0.5;
      }
      .icon {
        i {
          font-size: 20px;
          opacity: 0.7;
        }
      }
    }
  }
  .chat_Message {
    height: 48vh;
    background-color: rgb(253, 253, 253);
    overflow: auto;
  }
  .top {
    display: flex;
    height: 5vh;
    align-items: center;
    .username {
      margin: 5px 8px;
      font-weight: bold;
    }
    .messageIcon {
      flex: 0.05;
    }
    .open {
      flex: 1;
    }
    img {
      width: 20px;
      opacity: 0.3;
    }
  }
}
</style>
