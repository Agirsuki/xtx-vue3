import request from "@/utils/http";

export const getCategory = id => request.get('/category', {
    params: {
        id
    }
})

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => request.get('/category/sub/filter', {
    params: {
        id
    }
})