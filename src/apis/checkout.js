import request from "@/utils/http";

export const getCheckoutApi = () => request.get('/member/order/pre')