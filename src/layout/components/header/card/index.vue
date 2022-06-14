<template>
  <div class="chatWindow">
    <div class="left" style="margin: 10px">
      <el-avatar
        :size="25" 
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <div class="middle" style="flex: 1; margin-top: 4px">
      <div class="username" style="font-size: 12px; font-weight: bold">{{ friend.qq }}</div>
       <div class="message" style="font-size: 8px; color: gray">{{friend.username }}</div>
    </div>
     <div @click="addFriend" class="right" style="font-size: 5px; color: gray; margin-top: 3vh">
	<i class="iconfont icon-tianjia"></i>
     </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line vue/require-default-prop
const props = defineProps({ friend: Object })
const addFriend =async () =>{
	console.log('添加好友');

}


</script>
<style lang="scss">
.chatWindow {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  .left {
    &:hover {
      cursor: pointer;
    }
  }
  .middle {
    .username {
    }
  }
}
</style>
