<template>
  <el-drawer v-model="IsOpendrawer" direction="ltr" size="20%">
    <span>Hi there!</span>
  </el-drawer> 
  <el-icon :size="30" class="icon" color="red" v-show="!IsOpendrawer" @click="IsOpendrawer=true"><Right /></el-icon>
  <div class="h-screen bg-[url('/src/assets/images/main_bg.jpeg')] bg-cover bg-no-repeat bg-center overflow-hidden">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Right } from '@element-plus/icons-vue'
const IsOpendrawer=ref(false)

</script>


<style>
.icon{
  position: fixed;
  top: 50px;
}
</style>
