import { defineStore } from 'pinia'
import { chatService } from '@/api/api.js'
import moment from 'moment'
moment.locale('cn'); 
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
                    let record = res.data.sort((a, b) => {
                        return moment(a.createdDate).valueOf() - moment(b.createdDate).valueOf()
                    })
                    record = record.reverse()
                    let timeDiffrence = 0
                    let timeFromNow = 0
                    for (let i = 0; i < record.length - 1; i++) {
                        timeDiffrence = moment(record[i].createdDate).valueOf() - moment(record[i + 1].createdDate).valueOf()
                        timeFromNow = moment(Date.now()).valueOf() - moment(record[i].createdDate).valueOf()
                        if (timeFromNow < 180000) {
                            record[i].updatedDate = ''
                        }else{
                            record[i].updatedDate = moment(record[i].createdDate).calendar(null, {
                                sameDay: 'HH:mm',
                                lastDay: '[昨天]  HH:mm',
                                lastWeek: '[last] dddd HH:mm',
                                sameElse: 'MM[月]DD[日]  HH:mm',
                            })
                        }
                        // 设置3分钟之内就不显示时间戳 3*60*1000
                        if (timeDiffrence < 180000) {
                            record[i].updatedDate = ''
                        }
                    }
                    record.map(item => {
                        //设置flag判别是自己还是好友
                        if (item.senderQq == senderQQ) item.flag = 0
                        else item.flag = 1
                        //格式化时间cuo
                    })
                    record = record.reverse()
                    this.recordInfo = record
                    console.log(record)
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
