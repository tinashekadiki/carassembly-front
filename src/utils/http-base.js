import axios from 'axios';

console.log(global)

export const http = axios.create({
    baseURL: 'http://localhost:14912/api/',
    headers: {
        Authorization: 'Bearer {token}'
    }
})
