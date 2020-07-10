const TOKEN_KEY = 'TOKEN_KEY';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const loggedIn = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
