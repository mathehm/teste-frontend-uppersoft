import axios from 'axios';

// --- Config

// Common
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

// --- Instances

// InPeace API
const usersAPI = axios.create({
  baseURL: process.env.VUE_APP_API_V1,
  // timeout: 30000,
});

// --- Export
export {
  usersAPI,
  // realtimeAPI,
};