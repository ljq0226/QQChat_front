import { defineStore } from 'pinia'
import { chatService } from '@/api/api.js'
import moment from 'moment'
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
                    const record = res.data.sort((a, b) => {
                        return moment(a.createdDate).valueOf() - moment(b.createdDate).valueOf()
                    })
                    record.map(item => {
                        if (item.senderQq == senderQQ) item.flag = 1
                        else item.flag = 0
                    })
                    this.recordInfo = record
                    return record
                } else {
                    ElMessage.warning('请求错误')
                }
            } catch (err) {
                console.log(err)
            }
        },
    },
})
