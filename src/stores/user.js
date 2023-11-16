import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { login } from '@/apis/user.js'
import { useCartStore } from "./cart";

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    const userInfo = ref({})
    const getUserInfo = async(user) => {
        const { result } = await login(user)
        userInfo.value = result
    }
    const token = computed(() => userInfo.value.token)
    const nickname = computed(() => userInfo.value.nickname)
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }
    return {
        nickname,
        token,
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true
})