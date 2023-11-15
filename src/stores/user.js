import { defineStore } from "pinia";
import { ref } from 'vue'
import { login } from '@/apis/user.js'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async(user) => {
        const { result } = await login(user)
        userInfo.value = result
    }

    return {
        userInfo,
        getUserInfo
    }
})