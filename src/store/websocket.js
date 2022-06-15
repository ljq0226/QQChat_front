import { defineStore } from 'pinia'
import SocketService from '@/utils/websocket.js'
export const useWebsocketStore = defineStore('websocket', {
    state: () => ({
        instance: null,
        // 和服务端连接的socket对象
        ws: null,
        // 存储回调函数
        callBackMapping: {},
        // 标识是否连接成功
        connected: false,
        // 记录重试的次数
        sendRetryCount: 0,
        // 重新连接尝试的次数
        connectRetryCount: 0,
        //返回的数据
        msg: '',
    }),
    getters: {
        Instance() {
            if (!this.instance) {
                this.instance = new useWebsocketStore()
            }
            return this.instance
        },
    },
    actions: {
        connect() {
            // 连接服务器
            if (!window.WebSocket) {
                return console.log('您的浏览器不支持WebSocket')
            }
            let { qq } = JSON.parse(localStorage.getItem('login'))
            this.ws = new WebSocket(`ws://localhost:8080/myQQ/chat/${qq}`)
            // 连接成功的事件
            this.ws.onopen = () => {
                console.log('连接服务端成功了')
                this.connected = true
                // 重置重新连接的次数
                this.connectRetryCount = 0
            }
            // 1.连接服务端失败
            // 2.当连接成功之后, 服务器关闭的情况
            this.ws.onclose = () => {
                console.log('连接服务端失败')
                this.connected = false
                this.connectRetryCount++
                setTimeout(() => {
                    this.connect()
                }, 500 * this.connectRetryCount)
            }
            // 得到服务端发送过来的数据
            this.ws.onmessage = msg => {
                this.msg = msg.data
                console.log('从服务端获取到了数据', msg.data)
                console.log(msg)
                return msg.data
            }
        },
        // 发送数据的方法
        send(data) {
            // 判断此时此刻有没有连接成功
            if (this.connected) {
                this.sendRetryCount = 0
                try {
                    this.ws.send(JSON.stringify(data))
                } catch (e) {
                    this.ws.send(data)
                }
            } else {
                this.sendRetryCount++
                setTimeout(() => {
                    this.send(data)
                }, this.sendRetryCount * 500)
            }
        },
    },
})
