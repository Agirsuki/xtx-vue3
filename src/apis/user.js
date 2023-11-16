import request from "@/utils/http";

export const login = (user) => request.post('/login', {
    ...user
})

export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}