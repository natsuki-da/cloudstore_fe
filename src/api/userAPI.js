import { api } from "./axiosInstance";

//available for USER and ADMIN 
export const getUserById = (userId) => api.get(`/user/${userId}`);
export const updateUser = (userId, data) => api.put(`/user/${userId}`, data)

//ADMIN-only
export const getAllUsers = () => api.get('/user');

//Auth
export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data)