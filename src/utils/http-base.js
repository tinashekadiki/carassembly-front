import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        Authorization: 'Bearer '+localStorage.getItem('token')
    }
})

export const httpNoAuth = axios.create({
    baseURL: 'http://localhost:8080/api/',
})
