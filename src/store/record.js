import { defineStore } from 'pinia'
import { chatService } from '@/api/api.js'
export const useRecordStore = defineStore('record', {
    state: () => ({
        recordInfo: [],
    }),
    getters: {},
    actions: {
        async getAllRecord(senderQQ, receiverQQ) {
            const res = await chatService.getRecorde(senderQQ, receiverQQ)
            try {
                if (res.code === 200) {
                    this.recordInfo = res.data
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
