import axios from 'axios';

const api = axios.create({
    baseURL:
        process.env.REACT_APP_API_URL ||
        (process.env.NODE_ENV === "production"
            ? "https://productcatalog-3-m2rz.onrender.com/api" // ✅ your Render backend URL
            : "http://localhost:5000/api"),
});

export default api;
