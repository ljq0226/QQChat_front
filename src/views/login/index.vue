<template>
  <div class="flex">
    <div class="root" v-show="register">
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
              placeholder="账号用户名"
              v-model="registerInfo.username"
            />
          </div>
          <div class="input password">
            <input
              type="password"
              placeholder="密码"
              v-model="registerInfo.password"
            />
          </div>
          <div class="login" @click="handleRegister">
            <a class="iconfont icon-denglu" ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="root" v-show="login">
      <div class="top">
        <div class="img"><img src="../../assets/images/login/guanbi.png" /></div>
        <div class="icon"><i class="iconfont icon-erweima"></i></div>
        <div class="registerImg" @click="showRegister"><img src="../..//assets/images/login/register.png" alt=""></div>
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
import { provide, ref, unref ,computed,reactive} from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const router = useRouter()
const userStore = useUserStore()
let register = ref(false)
let login = ref(true)
//默认账号密码
const loginInfo = ref({
  qq: '111',
  password: '123',
})
const registerInfo = reactive({
  username:'',
  password: '',
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
    if(data && typeof data != 'string') {
      ElMessage.success('登录成功');
      localStorage.setItem('login', JSON.stringify(data))
      userStore.info = data
      router.push('/home')
    }else{
      ElMessage.warning(data)
    }
  } catch (error) {
    ElMessage.error('请求错误')
  }
}
//点击注册处理
async function handleRegister(){
  const {username,password} = registerInfo
  if (!username || !password) {
   ElMessage.warning('请输入账号用户名和密码完成注册')
    return
  }
  try {
    //发送register请求 获取用户信息
    const data =await userStore.registerUser(username, password)
    console.log(data);
    if(data) {
      ElMessage.success('注册成功');
      console.log(data);
      loginInfo.value.qq = data.qq;
      loginInfo.value.password = data.password;
      backToLogin()
    }else{
      ElMessage.warning(data)
    }
  } catch (error) {
    ElMessage.error('请求错误')
  }
}

const showRegister = ()=>{
  register.value = true
  login.value = false
}
const backToLogin = ()=>{
  console.log('first')
  register.value = false
  login.value = true
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
    .registerImg {
      float: right;
      margin: 8px;
      cursor: pointer;
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
