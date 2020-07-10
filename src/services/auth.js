import api from './api';

export const auth = async (credentials) => {
  return await api.post(`/auth`, credentials);
};
