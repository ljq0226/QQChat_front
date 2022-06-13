<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { userService } from "../api/api.js";
import { Avatar, Edit, Delete,Loading } from '@element-plus/icons-vue'
defineProps({
  msg: String,
});
const count = ref(0);


const user = useUserStore();
const addAge = () => user.getUserInfo();
const register = () => user.registerUser('111','123');

</script>

<template>
  <el-container>
    <el-main>
      <el-icon><avatar /></el-icon>
      <el-icon><edit /></el-icon>
      <el-icon><delete /></el-icon>
      <el-icon class="is-loading"><loading /></el-icon>
      <h1>{{ msg }}</h1>
      <div>姓名：{{ user.name }}</div>
      <div>年龄：{{ user.age }}</div>
      <div>国籍：{{ user.nation }}</div>
      <div>歌曲数量：{{ count }}</div>
      <el-button type="primary" @click="addAge">+age</el-button>
      <el-button type="primary" @click="register">+register</el-button>
    </el-main>
    <el-aside width="300px">Aside</el-aside>
  </el-container>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
