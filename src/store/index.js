import { defineStore } from 'pinia'
import { userService } from '@/api/api.js'
export const useStore = defineStore('main', {
    state() {
        return {
            name: '张三',
            age: 18,
        }
    },
    getters: {},
    actions: {
        getUserInfo() {
            userService.getUserInfo('111').then(
                res => {
                    if (res.code === 200) {
                        console.log(res.data)
                        return res.data
                    }
                },
                err => {
                    console.log(err)
                }
            )
            console.log()
        },
    },
})
