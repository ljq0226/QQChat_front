<template>
  <div class="flex">
    <div class="root">
      <div class="top">
        <div class="img"><img src="../../assets/images/login/guanbi.png" /></div>
        <div class="icon"><i class="iconfont icon-erweima"></i></div>
      </div>
      <div class="middle">
        <div><img src="@/assets/images/login/qq.jpeg" alt="" /></div>
      </div>
      <div class="bottom">
        <div>
          <div class="input username">
            <input
              autofocus
              type="text"
              placeholder="QQNumber"
              v-model="loginInfo.qq"
            />
          </div>
          <div class="input password">
            <input
              type="password"
              placeholder="password"
              v-model="loginInfo.password"
            />
          </div>
          <div class="login" @click="handleLogin">
            <a class="iconfont icon-denglu" ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const router = useRouter()
const userStore = useUserStore()
//默认账号密码
const loginInfo = ref({
  qq: '111',
  password: '123',
})
//点击登录处理
async function handleLogin() {
  const { qq, password } = loginInfo.value
  
  if (!qq || !password) {
   ElMessage.warning('请输入QQ号和密码')
    return
  }
  try {
    //发送login请求 获取用户信息
    const data =await userStore.login(qq, password)
    console.log(data);
    if(data && typeof data != 'string') {
      ElMessage.success('登录成功');
      localStorage.setItem('login', JSON.stringify(data))
      router.push('/home')
    }else{
      ElMessage.warning(data)
    }
  } catch (error) {
    ElMessage.error('请求错误')
  }
}
</script>

<style lang="scss" scoped>
.root {
  background-color: #fff;
  width: 15vw;
  height: 40vh;
  border-radius: 10px;
  .bottom {
    display: flex;
    justify-content: center;

    .input {
      font-size: 18px;
      border-bottom: 1px solid rgb(217, 220, 222);
      line-height: 5vh;
    }
    .login {
      display: flex;
      justify-content: center;
      a {
        font-size: 2em;
      }
    }

    // .password {
    //   padding-right: 20px;
    //   background: url('@/assets/images/login/jinru.png') no-repeat scroll right center transparent;
    // }
  }

  .middle {
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;
    img {
      width: 5vw;
      border-radius: 50px;
    }
  }

  .top {
    margin-bottom: 6vh;
    .img {
      float: left;
      margin: 8px;
    }
    img {
      width: 1vw;
    }
    .icon {
      float: right;
      margin: 8px;
    }
    i {
      width: 1vw;
    }
  }
}
.flex {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/login_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
