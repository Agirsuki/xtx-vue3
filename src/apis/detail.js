import request from "@/utils/http";

export const getGoodsDetail = id => request.get('/goods', {
    params: {
        id
    }
})