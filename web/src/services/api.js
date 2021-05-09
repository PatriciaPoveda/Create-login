const apiBaseUrl = "//localhost:3000/api";

//Sign In
const sendLogin = (userData) => {
  return fetch(`${apiBaseUrl}/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

//Update
const sendUserUpdate = (data, userId) => {
  return fetch(`${apiBaseUrl}/update/${userId}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

//Delete

const sendUserDelete = (userId) => {
  return fetch(`${apiBaseUrl}/delete/${userId}`, {
    method: "POST",
  }).then((res) => res.json());
};

const exportObj = {
  sendLogin: sendLogin,
  sendUserDelete: sendUserDelete,
  sendUserUpdate: sendUserUpdate,
};
export default exportObj;
