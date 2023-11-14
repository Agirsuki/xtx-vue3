import request from '@/utils/http.js'

export const getBannerList = distributionSite => request.get('/home/banner', {
    query: {
        distributionSite
    }
})

export const getNew = limit => request.get('/home/new', {
    query: {
        limit
    }
})

export const getHot = () => request.get('/home/hot')

export const getGoods = () => request.get('/home/goods')