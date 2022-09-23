import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.MASTER_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;