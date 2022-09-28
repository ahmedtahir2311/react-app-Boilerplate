export const setToken = (token) => {
  localStorage.setItem("auth-token", token);
};

export const removeToken = () => {
  localStorage.removeItem("auth-token");
};

export const getToken = () => {
  localStorage.getItem("auth-token");
};