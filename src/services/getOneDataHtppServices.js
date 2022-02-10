import { http } from "./httpServices";

export function getOneDataHtppServices(id) {
    return http.get(`/products/${id}`)
}