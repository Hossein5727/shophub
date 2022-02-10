import { http } from "./httpServices";

export function getDataHttpServices() {
    return http.get("/products")
}