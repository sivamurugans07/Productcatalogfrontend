import axios from 'axios';

const api = axios.create({
    baseURL: 'https://productcatalog-3-m2rz.onrender.com/api'
});

export default api;
