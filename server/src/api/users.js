const usersData = require("../data/users");

const login = (req, res) => {
  const userFound = usersData.getUserByNameAndPassword(
    req.body.userName,
    req.body.password
  );

  if (userFound) {
    res.json({
      error: false,
      userId: userFound.id,
      userName: userFound.userName,
    });
  } else {
    res.status(404).json({
      error: "user-not-found",
      message: "User not found",
    });
  }
};

const userUpdate = (req, res) => {
  const userFound = usersData.getUserUpdate(
    req.body.userNameUpdate,
    req.body.passwordUpdate,
    req.body.id
  );

  if (userFound.changes === 1) {
    res.json({
      error: false,
      message: "User update",
    });
  } else {
    res.status(404).json({
      error: "user-not-update",
      message: "User not update",
    });
  }
};

const userDelete = (req, res) => {
  const userFound = usersData.getUserDelete(req.body.id);

  if (userFound.changes === 1) {
    res.json({
      error: false,
      message: "User delete",
    });
  } else {
    res.status(404).json({
      error: "user-not-exists",
      message: "User not exists",
    });
  }
};

module.exports = {
  login: login,
  userDelete: userDelete,
  userUpdate: userUpdate,
};
