import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null)
    const setUserInfo = (val) => {
      userInfo.value = val
    }
    const clearUserinfo = () => {
      userInfo.value = null
    }
    return {
      userInfo,
      setUserInfo,
      clearUserinfo
    }
  },
  {
    persist: true
  }
)
