import { defineStore } from 'pinia'
import { friendService } from '@/api/api.js'
export const useFriendStore = defineStore('friend', {
    state: () => ({
        friendInfo: [],
    }),
    getters: {},
    actions: {
        async getFriendList(qq) {
            const res = await friendService.selectAllFriend(qq)
            try {
                if (res.code === 200) {
                    this.friendInfo = res.data
                    return res.data
                } else {
                    ElMessage.warning('请求错误')
                }
            } catch (err) {
                console.log(err)
            }
        },
    },
})
