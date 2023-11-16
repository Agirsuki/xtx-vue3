import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { useUserStore } from "./user";
import { addCartApi, getCartApi } from "@/apis/cart";

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
        // 购物车
    const cartList = ref([])
        // 添加购物车
    const addCart = async(goods) => {
            if (userStore.token) {
                await addCartApi(goods)
                const { result } = await getCartApi()
                cartList.value = result
            } else {
                const item = cartList.value.find(e => e.id === goods.id && e.skuId === goods.skuId)
                if (item) {
                    item.count += goods.count
                } else {
                    cartList.value.push(goods)
                }
            }
        }
        // 删除购物车中商品
    const remove = (goodsId, skuId) => cartList.value = cartList.value.filter(item => item.id !== goodsId || item.skuId !== skuId)

    // 获取购物车总数
    const cartCount = computed(() => cartList.value.reduce((prev, current) => current.count + prev, 0))

    // 获取购物车总价
    const totalPrice = computed(() => cartList.value.reduce((prev, current) => +current.price * current.count + prev, 0))

    // 已选中的个数
    const selectedCount = computed(() => cartList.value.reduce((prev, current) => prev + (current.selected ? current.count : 0), 0))

    // 已选中商品的总金额
    const selectedPrice = computed(() => cartList.value.reduce((prev, current) => prev + (current.selected ? current.count * current.price : 0), 0))

    // 商品单选
    const singleCheck = (selected, skuId) => {
        cartList.value.find(goods => goods.skuId === skuId).selected = selected
    }

    // 是否全选
    const isCheckedAll = computed(() => cartList.value.every(goods => goods.selected))

    const allCheck = (selected) => cartList.value.forEach(goods => goods.selected = selected)
    return {
        allCheck,
        singleCheck,
        isCheckedAll,
        selectedPrice,
        selectedCount,
        remove,
        totalPrice,
        cartCount,
        cartList,
        addCart
    }
}, {
    persist: true
})