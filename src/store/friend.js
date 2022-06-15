import { defineStore } from 'pinia'
import { friendService } from '@/api/api.js'
export const useFriendStore = defineStore('friend', {
    state: () => ({
        friendInfo: [],
        searchFriendList: [],
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
        async getSearchFriendList(content) {
            const res = await friendService.selectByContent(content)
            try {
                if (res.code === 200) {
                    this.searchFriendList = res.data
                    return res.data
                } else {
                    ElMessage.warning('请求错误')
                }
            } catch (err) {
                console.log(err)
            }
        },
        async addFriend(selfQQ, friendQQ) {
            console.log(selfQQ, friendQQ)
            const res = await friendService.addFriend(selfQQ, friendQQ)
            try {
                if (res.code === 200) {
                    this.getFriendList(selfQQ)
                    ElMessage.success('添加好友成功!')
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
