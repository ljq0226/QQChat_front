import { get, post } from './axios'

export const userService = {
    getUserInfo(qq) {
        return get(`user/info?qq=${qq}`)
    },
    registerUser(username, password) {
        return post(`user/register?username=${111}&password=${1234}`)
    },
    login(qq, password) {
        return post(`user/login?qq=${qq}&password=${password}`)
    },
}
export const friendService = {
    //获取用户好友列表
    selectAllFriend(qq) {
        return get(`friend/selectAllFriend?selfQQ=${qq}`)
    },
    //查找好友
    selectByContent(content) {
        return get(`friend/selectByContent?content=${content}`)
    },
    //添加好友
    addFriend(selfQQ, friendQQ) {
        return post(`friend/addFriend?selfQQ=${selfQQ}&friendQQQQ=${friendQQ}`)
    },
}
export const chatService = {
    //获取聊天信息
    getRecorde(senderQQ, receiverQQ) {
        return get(`chat/selectAllRecords?senderQQ=${senderQQ}&receiverQQ=${receiverQQ}`)
    },
}
