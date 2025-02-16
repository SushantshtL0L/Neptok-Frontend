import axios from 'axios';

// Create an instance of axios with a base URL for your API
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Base URL for your API
  headers: {
    'Content-Type': 'application/json', // Optional: set headers if needed
  },
});

// Example GET request function
export const getData = async () => {
  try {
    const response = await api.get('/data'); // Replace '/data' with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example POST request function
export const postData = async (data) => {
  try {
    const response = await api.post('/data', data); // Replace '/data' with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example PUT request function
export const updateData = async (id, data) => {
  try {
    const response = await api.put(`/data/${id}`, data); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example DELETE request function
export const deleteData = async (id) => {
  try {
    const response = await api.delete(`/data/${id}`); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
