import request from "@/utils/http";

export const login = (user) => request.post('/login', {
    ...user
})