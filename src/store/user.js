import { defineStore } from 'pinia'
import { userService } from '@/api/api.js'
export const useUserStore = defineStore('user', {
    state: () => ({
        info: {},
    }),
    actions: {
        errHandler(err) {
            console.log(err)
        },
        // getUserInfo() {
        //     userService.getUserInfo('111').then(res => {
        //         if (res.code === 200) {
        //             console.log(res)
        //             this.state = res.data
        //             return res
        //         } else {
        //         }
        //     }, this.errHandler)
        // },
        async registerUser(username, password) {
            const res = await userService.registerUser(username, password)
            console.log(res)
            if (res.code === 200) {
                const { qq, passwords, username } = res.data
                localStorage.setItem('login', JSON.stringify(res.data))
                return res.data
            } else if (res.code === 500) {
                return res.msg
            } else {
                return '请求失败'
            }
        },
        async login(qq, password) {
            const res = await userService.login(qq, password)
            if (res.code === 200) {
                this.info = res.data
                return res.data
            } else if (res.code === 500) {
                return res.msg
            } else {
                return '请求失败'
            }
        },
    },
})
