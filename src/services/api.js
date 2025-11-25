import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_BASE_URL_API;
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT, 10) || 10000;

// instance axios
const api = axios.create({
    baseURL: API_BASE_URL, // sesuaikan dengan Url Backend
    timeout: API_TIMEOUT, // waktu maksimal menunggu respon (50 detik)
    headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use( 
  (response) => {

    //tambahkanlogika sebelum mengembalikan respons

    return response;
  },
  (error) => {
    //tangani kesalahan response
    if (error.response && error.response.status === 401) {
      // Misalnya, jika status 401, lakukan logout atau arahkan ke halaman login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);


export default api;

