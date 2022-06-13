<template>
  <template v-for="item in friendStore.friendInfo" :key="item.qq">
    <Card :friend="item" @click="goChat(item)"></Card>
  </template>
</template>
<script setup>
import { useFriendStore } from '@/store/friend'
import { onBeforeMount, reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import Card from './card.vue'

const friendStore = useFriendStore()
const friendsInfo = reactive(friendStore.friendInfo)
const router = useRouter()
onBeforeMount(() => {
  friendStore.getFriendList('111')
  
})
const goChat = (item) => {
  console.log('点击进入')
  const { qq, username } = unref(item)
  router.push({ path: '/chatWindow', query: { qq, username } })
}
</script>
<style lang="scss" scoped></style>
