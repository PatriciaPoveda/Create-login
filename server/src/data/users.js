const usersData = require("../../db/database.json");

const getUserByEmailAndPassword = (email, password) => {
  return usersData.find(
    (user) => user.email === email && user.password === password
  );
};

module.exports = { getUserByEmailAndPassword: getUserByEmailAndPassword };
