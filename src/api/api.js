import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://productcatalog-3-m2rz.onrender.com/api'
});

export default api;
