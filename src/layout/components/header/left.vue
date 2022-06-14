<template>
  <div class="left_all">
    <div class="left_all_left">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
    </div>
    <div class="left_all_middle">
      <div class="input">
        <input type="text" placeholder="搜索" v-model='searchContent'
         @keydown.enter="search(searchContent)"
         @keydown.capture="handleKeydown(searchContent)"
         @focus="getFocus"
         @blur="loseBlur"
         />
      </div>
      <div class="searchList" v-if="showList">
  <template v-for="item in searchFriendList" :key="item.qq">
    <Card :friend="item" ></Card>
  </template>
      </div>
    </div>
    <div class="left_all_right">
      <img src="@/assets/images/home/add.png" />
    </div>
  </div>

</template>
<script setup>
import { ref,reactive,computed} from 'vue'
import { useFriendStore } from '@/store/friend'
import Card from './card/index.vue'
let friendStore = useFriendStore()
let searchContent = ref('')
let showList = ref(false)
let searchFriendList = computed(()=>friendStore.searchFriendList)
const search =async (content) =>{
  await friendStore.getSearchFriendList(content)
  searchContent=''
}
const handleKeydown =async (content) =>{
  if(!searchFriendList){
    showList = false;
  }
   setTimeout(async()=>{
  if(content){
 await friendStore.getSearchFriendList(content)
 showList = true
  }
  },1000)
}
const getFocus = ()=>{
  console.log(1)
  showList = true
}
const loseBlur = () =>{
  searchContent=''
  //showList = false;
}



</script>
<style lang="scss" scoped>
.left_all {
  display: flex;
  align-items: center;
  justify-content: center;
  .left_all_left {
    flex: 0.25;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    .circle {
      width: 12px;
      height: 12px;
      background-color: $primaryColor;
      border-radius: 12px;
      margin: 3px;
    }
    .c1 {
      background-color: rgb(255, 95, 87);
    }
    .c2 {
      background-color: rgb(255, 190, 47);
    }
    .c3 {
      background-color: rgb(39, 198, 63);
    }
  }
  .left_all_middle {
    flex: 0.6;
    display: flex;
    .input {
      justify-content: center;
      align-items: center;
      margin: 5px;
      position:relative;
      input {
        width: 100%;
        font-size: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
    }
    .searchList{
      position: absolute;
      margin-top:3.4vh;
      height:30vh;
      width: 10.4vw;
      background-color: rgb(225,226, 228);
      overflow: auto;
      // display:none;
    }
  }
  .left_all_right {
    flex: 0.15;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 45%;
      border: 1px solid #ccc;
      border-radius: 50px;
    }
  }
}
</style>
