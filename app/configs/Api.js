import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RECIPE
})

Api.interceptors.request.use(function (config) {

    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default Api