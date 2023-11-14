import request from '@/utils/http.js'

export const getBannerList = (params = { distributionSite: '1' }) => request.get('/home/banner', {
    params: {
        ...params
    }
})

export const getNew = limit => request.get('/home/new', {
    params: {
        limit
    }
})

export const getHot = () => request.get('/home/hot')

export const getGoods = () => request.get('/home/goods')