import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { ElMessage } from 'element-plus' //引入message组件
const app = createApp(App)
app.use(ElMessage) //在app上使用message组件
app.config.globalProperties.$message = ElMessage //挂载到app实例上

app.use(router).use(createPinia()).mount('#app')
