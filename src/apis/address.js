import request from "@/utils/http";

export const updateAddressApi = address => request.put(`/member/address/${address.id}`, address)