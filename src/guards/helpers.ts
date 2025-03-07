export const isUserAuthenticated = () => {
  const token = localStorage.getItem("token");

  console.log({ token });

  if (!token) {
    return false;
  }

  return true;
};
