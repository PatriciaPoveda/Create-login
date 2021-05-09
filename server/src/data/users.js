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
//UPDATE
const getUserUpdate = (userNameUpdate, passwordUpdate, id) => {
  const query = data.db.prepare(
    `UPDATE users SET userName = ?, password = ? WHERE id = ?`
  );
  const user = query.run(userNameUpdate, passwordUpdate, id);
  return user;
};
//DELETE
const getUserDelete = (id) => {
  // return usersData.find((user) => user.Id === id);
  const query = data.db.prepare(`DELETE FROM users WHERE id = ?`);
  const user = query.run(id);
  return user;
};
module.exports = {
  getUserByNameAndPassword: getUserByNameAndPassword,
  getUserDelete: getUserDelete,
  getUserUpdate: getUserUpdate,
};
