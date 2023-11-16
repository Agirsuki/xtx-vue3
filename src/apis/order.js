import request from "@/utils/http";

/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/


export const getUserOrder = (params) => request({
    url: '/member/order',
    method: 'GET',
    params
})