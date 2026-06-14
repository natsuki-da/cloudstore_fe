import { api } from "./axiosInstance";

export const getProducts = () => api.get('/products')