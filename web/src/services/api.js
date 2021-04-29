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
const sendUserUpdate = (userData) => {
  return fetch(`${apiBaseUrl}/update`, {
    method: "PUT",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

//Delete
const sendUserDelete = (userId) => {
  return fetch(`${apiBaseUrl}/delete`, {
    method: "POST",
    // body: JSON.stringify(userId),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const exportObj = {
  sendLogin: sendLogin,
  sendUserDelete: sendUserDelete,
  sendUserUpdate: sendUserUpdate,
};
export default exportObj;
