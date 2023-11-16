import request from "@/utils/http";

export const addCartApi = ({ skuId, count }) => request.post('/member/cart', {
    skuId,
    count
})

export const getCartApi = () => request.get('/member/cart')

export const removeCartApi = ids => request({
    method: 'DELETE',
    url: '/member/cart',
    data: {
        ids
    }
})

export const mergeCartApi = goodsList => request.post('/member/cart/merge', goodsList)

export const createOrderApi = data => request.post('/member/order', data)