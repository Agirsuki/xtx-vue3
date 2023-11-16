import request from "@/utils/http";

export const getOrderApi = id => request.get(`/member/order/${id}`)