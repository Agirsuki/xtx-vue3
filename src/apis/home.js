import request from '@/utils/http.js'

export const getBannerList = distributionSite => request.get('/home/banner', {
    query: {
        distributionSite
    }
})