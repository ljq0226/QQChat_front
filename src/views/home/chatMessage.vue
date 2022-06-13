<template>
  <div class="message_all">
    <template v-for="item in p.params.record" :key="item">
      <div class="time-space">
        <div class="time">
          {{ item.createdDate }}
        </div>
      </div>
      <!-- 本人发送的消息 -->
      <div v-if="item.flag" class="sendMsg">
        <div class="s-space"></div>
        <div class="s-msg">{{ item.chatContent }}</div>
        <div class="s-img" @click="showUserInfo">
          <el-avatar
            :size="35"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
      </div>
      <!-- 接受到的消息 -->
      <div v-else class="receiveMsg">
        <div class="s-img" @click="showInfo">
          <el-avatar
            :size="35"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
        <div class="s-msg">{{ item.chatContent }}</div>

        <div class="s-space"></div>
      </div>
    </template>
   
  </div>
</template>
<script setup>
import moment from 'moment'
import { ref, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../../store/user'
// import { Socket } from 'socket.io-client'
// const socket = inject('socket') as Socket
// eslint-disable-next-line vue/require-default-prop
const p = defineProps({ params: Object })
const showModel = ref(false)
const userStore = useUserStore()
// const info: any = userStore.getUserInfo('111')
// console.log(info)
onMounted(() => {
  // socket.connect() //连接socket服务器
})
// const send = () => {
//   console.log('')
//   socket.emit('socketTest', { test: '测试数据' }, (data: any) => {
//     console.log(data)
//   })
// }
const showUserInfo = () => {
  console.log('click me ')
  showModel.value = true
}
const showInfo = () => {
  console.log('click me ')
  showModel.value = true
}
</script>
<style lang="scss" scoped>
.message_all {
  display: flex;
  flex-direction: column;

  overflow: auto;

  .time-space {
    display: flex;
    justify-content: center;
    .time {
      font-size: 10px;
      font-color: gray;
      opacity: 0.6;
    }
  }
  .receiveMsg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .s-space {
      flex: 0.95;
    }
    .s-msg {
      font-size: 12px;
      padding: 10px;
      border-radius: 10px;
      background-color: rgb(243, 243, 243);
    }
    .s-img {
      margin-left: 10px;
    }
  }
  .sendMsg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .s-space {
      flex: 0.95;
    }
    .s-msg {
      font-size: 12px;
      padding: 10px;
      border-radius: 10px;
      background-color: rgb(217, 244, 254);
    }
    .s-img {
      margin-right: 10px;
    }
  }
}
</style>
