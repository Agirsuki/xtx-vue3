import request from "@/utils/http";

export const getCategory = id => request.get('/category', {
    params: {
        id
    }
})