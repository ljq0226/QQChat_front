<template>
  <template v-for="item in friendStore.friendInfo" :key="item.qq">
    <Card :friend="item" @click="goChat(item)"></Card>
  </template>
</template>
<script setup>
import { useFriendStore } from '@/store/friend'
import { onBeforeMount, reactive, ref, unref,inject } from 'vue'
import { useRouter } from 'vue-router'
import Card from './card.vue'
import {useRecordStore } from '@/store/record.js'
const recordStore = useRecordStore()
const friendStore = useFriendStore()
const friendsInfo = reactive(friendStore.friendInfo)
const router = useRouter()
let record = reactive({})
onBeforeMount(() => {
  friendStore.getFriendList('111')
})
const goChat = (item) => {
  console.log('点击进入')
  const sth = unref(item)
  let qq = sth.qq;
  let username = sth.username
  router.push({ path: '/chatWindow', query: { qq, username } })
  //每次点击进入chatWindow时 改变状态
  const userInfo = JSON.parse(localStorage.getItem('login'))
  recordStore.getAllRecord(qq,userInfo.qq)
}

</script>
<style lang="scss" scoped></style>
