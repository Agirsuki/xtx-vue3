import request from "@/utils/http";

export const testApi = () => {
    return request({
        url: 'home/category/head',
        method: 'GET'
    })
}