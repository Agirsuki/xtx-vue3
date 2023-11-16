import request from "@/utils/http";

export const addCartApi = ({ skuId, count }) => request.post('/member/cart', {
    skuId,
    count
})

export const getCartApi = () => request.get('/member/cart')