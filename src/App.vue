<template>
  <el-config-provider :locale="locale">
     <router-view></router-view>
  </el-config-provider>
</template>
<script setup>
import locale from 'element-plus/lib/locale/lang/zh-cn'

</script>
<style >
html,body,#app {
  height: 100%;
  overflow: hidden;
  margin: 0;
}
</style>
