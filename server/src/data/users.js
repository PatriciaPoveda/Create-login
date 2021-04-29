const usersData = require("../../db/database.json");

const getUserByNameAndPassword = (userName, password) => {
  return usersData.find(
    (user) => user.userName === userName && user.password === password
  );
};
const getUserDelete = (userId) => {
  return usersData.find((user) => user.Id === userId);
};
module.exports = {
  getUserByNameAndPassword: getUserByNameAndPassword,
  getUserDelete: getUserDelete,
};
