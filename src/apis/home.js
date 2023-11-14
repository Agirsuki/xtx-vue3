import request from '@/utils/http.js'

export const getBannerList = distributionSite => request.get('/home/banner', {
    params: {
        distributionSite
    }
})

export const getNew = limit => request.get('/home/new', {
    params: {
        limit
    }
})

export const getHot = () => request.get('/home/hot')

export const getGoods = () => request.get('/home/goods')