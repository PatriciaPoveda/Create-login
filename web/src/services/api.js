const apiBaseUrl = "//localhost:3000/api";

const sendLogin = (userData) => {
  return fetch(`${apiBaseUrl}/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const exportObj = {
  sendLogin: sendLogin,
};
export default exportObj;
