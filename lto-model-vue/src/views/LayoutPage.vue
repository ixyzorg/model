<template>
  <el-drawer v-model="IsOpendrawer" direction="ltr" size="20%">
    <div v-for="parent in list" :key="parent.id">
      {{parent.text}}
      <div v-for="child in parent.children" :key="child.id" @click="OnShowModel(child.text)">{{child.text}}</div>
    </div>
  </el-drawer>
  <el-icon :size="30" class="icon" color="red" v-show="!IsOpendrawer" @click="IsOpendrawer = true"><Right /></el-icon>
  <div
    class="h-screen bg-[url('/src/assets/images/main_bg.jpeg')] bg-cover bg-no-repeat bg-center overflow-hidden"
  ></div>
</template>

<script setup>
import { ref } from 'vue'
import { Right } from '@element-plus/icons-vue'
const IsOpendrawer = ref(true)

const list = [
  {
    id: '1',
    text: '标题1',
    children: [
      {
        id: '1-1',
        text: '标题1-1'
      },
      {
        id: '1-2',
        text: '标题1-2'
      }
    ]
  },
  {
    id: '2',
    text: '标题2',
    children: [
      {
        id: '2-1',
        text: '标题2-1'
      },
      {
        id: '2-2',
        text: '标题2-2'
      }
    ]
  }
]

const OnShowModel = (val) => {
  console.log(val)
}
</script>

<style>
.icon {
  position: fixed;
  top: 50px;
}
</style>
