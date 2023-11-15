import { defineStore } from "pinia";
import { ref, computed } from 'vue'

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
        // 删除购物车中商品
    const remove = (goodsId, skuId) => cartList.value = cartList.value.filter(item => item.id !== goodsId || item.skuId !== skuId)

    // 获取购物车总数
    const cartCount = computed(() => cartList.value.reduce((prev, current) => current.count + prev, 0))

    // 获取购物车总价
    const totalPrice = computed(() => cartList.value.reduce((prev, current) => +current.price * current.count + prev, 0))
    return {
        remove,
        totalPrice,
        cartCount,
        cartList,
        addCart
    }
}, {
    persist: true
})