export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token;
};

export const getRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role;
};