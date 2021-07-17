import axios from 'axios';

console.log(global)

export const http = axios.create({
    baseURL: 'http://localhost:8082/api/',
    headers: {
        Authorization: 'Bearer {token}'
    }
})
