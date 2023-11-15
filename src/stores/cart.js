import { defineStore } from "pinia";
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 购物车
    const cartList = ref([])
        // 添加购物车
    const addCart = (goods) => {
        const item = cartList.value.find(e => e.id === goods.id && e.skuId === goods.skuId)
        if (item) {
            item.count += goods.count
        } else {
            cartList.value.push(goods)
        }
    }

    return {
        cartList,
        addCart
    }
})