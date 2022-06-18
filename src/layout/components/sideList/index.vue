<template>
  <template v-for="item in friendsInfo" :key="item.qq">
    <Card :friend="item" @click="goChat(item)"></Card>
  </template>
</template>
<script setup>
import { useFriendStore } from '@/store/friend'
import { onBeforeMount, reactive, ref, unref,inject ,computed} from 'vue'
import { useRouter } from 'vue-router'
import Card from './card.vue'
import {useRecordStore } from '@/store/record.js'
const recordStore = useRecordStore()
const friendStore = useFriendStore()
const friendsInfo = computed(()=>friendStore.friendInfo)
const router = useRouter()
let record = reactive({})
let qq = computed(()=>userStore.info.qq)
const userInfo = JSON.parse(localStorage.getItem('login'))
const goChat = (item) => {
  const sth = unref(item)
  let qq = sth.qq;
  let username = sth.username
  router.push({ path: '/chatWindow', query: { qq, username } })
  //每次点击进入chatWindow时 改变状态
  recordStore.getAllRecord(qq,userInfo.qq)
}
onBeforeMount(() => {
  friendStore.getFriendList(userInfo.qq)
})
</script>
<style lang="scss" scoped></style>
