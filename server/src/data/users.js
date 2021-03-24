const usersData = require("../../db/database.json");

const getUserByEmailAndPassword = (userName, password) => {
  return usersData.find(
    (user) => user.userName === userName && user.password === password
  );
};

module.exports = { getUserByEmailAndPassword: getUserByEmailAndPassword };
