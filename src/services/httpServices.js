import axios from 'axios';

axios.defaults.baseURL = "https://fakestoreapi.com"

export const http = {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete
}