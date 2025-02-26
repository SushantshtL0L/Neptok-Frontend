import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('token');
    const excludedEndpoints = ['/users/login', '/users/add'];
    
    if (token && !excludedEndpoints.some(endpoint => config.url.includes(endpoint))) {
      config.headers.Authorization = `Bearer ${token.replace('Bearer ', '')}`;
    }
    return config;
  } catch (error) {
    console.error('Interceptor error:', error);
    return config;
  }
});

export default api;