import axios from 'axios';
import config from "./global";

export const http = axios.create({
    baseURL: config.data().globalBaseUrl,
    headers: {
        Authorization: 'Bearer {token}'
    }
})
