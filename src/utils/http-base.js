import axios from 'axios';

export const http = axios.create({
    // baseURL: 'http://localhost:8082/api/',
    baseURL: 'http://134.209.28.32:8082/api/',
    // 'https://fierce-hollows-65415.herokuapp.com/api/',
    headers: {
        Authorization: 'Bearer '+localStorage.getItem('token')
    }
})

export const httpNoAuth = axios.create({
    // baseURL: 'http://localhost:8082/api/',
    baseURL: 'http://134.209.28.32:8082/api/',
    // 'https://fierce-hollows-65415.herokuapp.com/api/',
})
