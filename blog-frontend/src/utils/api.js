// src/utils/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://myblog-api-one.vercel.app/api',
});

export default api;
