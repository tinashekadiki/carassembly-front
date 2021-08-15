import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://fierce-hollows-65415.herokuapp.com/api/',
    headers: {
        Authorization: 'Bearer '+localStorage.getItem('token')
    }
})

export const httpNoAuth = axios.create({
    baseURL: 'https://fierce-hollows-65415.herokuapp.com/api/',
})
