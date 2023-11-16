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