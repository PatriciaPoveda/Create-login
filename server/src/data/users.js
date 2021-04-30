const usersData = require("../../db/database.json");
const data = require("../index");

const getUserByNameAndPassword = (userName, password) => {
  // return usersData.find(
  //   (user) => user.userName === userName && user.password === password
  // );
  const query = data.db.prepare(
    `SELECT * FROM users WHERE userName = ? AND password = ?`
  );
  const user = query.get(userName, password);
  return user;
};
const getUserDelete = (id) => {
  // return usersData.find((user) => user.Id === id);
  const query = data.db.prepare(`DELETE FROM users WHERE id = ?`);
  const user = query.run(id);
  return user;
};
module.exports = {
  getUserByNameAndPassword: getUserByNameAndPassword,
  getUserDelete: getUserDelete,
};
