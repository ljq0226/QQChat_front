<template>
  <div class="message_all" ref="content">
    <template v-for="item in record" :key="item">
      <div class="time-space">
        <div class="time">
          {{ item.updatedDate }}
        </div>
      </div>
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
import { ref,computed,defineProps,nextTick, onUpdated, onMounted} from 'vue'
import { useUserStore } from '../../store/user'
import {useRecordStore } from '../..//store/record.js'
const recordStore = useRecordStore()
const userStore = useUserStore()
let content = ref(null)
nextTick((record)=>{
  console.log(content.value.scrollHeight);
  console.log(content.value.scrollTop);
  content.value.scrollTop = content.value.scrollHeight;
})
let record = computed(()=> recordStore.recordInfo)
const p = defineProps({record:Array})
 const handleScroll=()=> {
      console.log(content.value.scrollTop, '到头部的距离-------------------')
      console.log(content.value.scrollHeight, '滚动条的总高度-------------------')
    }

onMounted(()=>{  
 window.addEventListener('scroll',handleScroll, true);  // 监听（绑定）滚轮滚动事件

})

// onUpdated(()=>{
//   setTimeout(()=>{  content.value.scrollTop = content.value.scrollHeight}, 100)
// })

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
