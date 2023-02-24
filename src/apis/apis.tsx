import axios from 'axios';
import { store } from '../redux';

const api = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

api.interceptors.request.use((config) => {
    const token = store.getState().authentication.profile?.token

    if (token) {
        config.headers.Authorization = `Bearer ${token}`

    }

    return config
})

export default api;