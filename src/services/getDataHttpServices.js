import { http } from "./httpServices";

export function getDataHttpServices(url = "") {
    return http.get(`/products/${url}`)
}