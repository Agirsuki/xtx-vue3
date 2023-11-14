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

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = data => request.post('/category/goods/temporary', data)