<template>
  <div class="message_all">
    <template v-for="item in record" :key="item">
      <div class="time-space">
        <div class="time">
          {{ item.updatedDate }}
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
import { ref,computed,defineProps} from 'vue'
import { useUserStore } from '../../store/user'
import {useRecordStore } from '../..//store/record.js'
const recordStore = useRecordStore()
const userStore = useUserStore()
let record = computed(()=> recordStore.recordInfo)
const p = defineProps({record:Array})

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
      color: gray;
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
