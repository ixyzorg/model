<template>
  <vue-particles id="tsparticles" :options="options" />
  <div
    class="flex justify-center items-center h-screen bg-[url('/src/assets/images/login_bg.jpeg')] bg-cover bg-no-repeat bg-center overflow-hidden"
  >
    <div class="w-80 p-4 rounded-xl bg-white/30 shadow-sm backdrop-blur-md">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" :prefix-icon="Lock" show-password />
        </el-form-item>
        <el-button type="primary" @click="onLogin" class="w-full" plain>登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import {userLoginService} from '@/api/login'
import   { useUserStore } from '@/stores' 
import router from '@/router';
const options = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.9,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.9,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 80
    },
    opacity: {
      value: 0.9
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}
//登陆
const formRef = ref()
const form = ref({
  username: '',
  password: ''
})
const rules = {
  username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}
const onLogin = async () => {
  await formRef.value.validate()
 const res = await userLoginService(form.value)
 const userStore = useUserStore()
 userStore.setUserInfo(res)
 ElMessage({
  type: 'success',
  message: '登录成功'
 })
 router.push('/')
}
</script>
