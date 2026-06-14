import { api } from "./axiosInstance";

export const getOrderById = (orderId) => api.get(`/orders/${orderId}`);
export const createOrder = (data) => api.post('/orders', data);


//ADMIN only
export const getAllOrders = () => api.get('/orders');
export const updateOrderStatus = (orderId, data) => api.put(`/orders/${orderId}/status`, data)

//Owner only
export const cancelOrder = (orderId) => api.delete(`/orders/${orderId}/cancel`)

