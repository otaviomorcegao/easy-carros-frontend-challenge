import axios from 'axios';

import { getToken } from '../auth';

const api = axios.create({
  baseURL: 'http://localhost:8181',
});

api.interceptors.request.use(async (response) => {
  const token = getToken();
  if (token) {
    response.headers.Authorization = `Bearer ${token}`;
  }
  return response;
});

export default api;
