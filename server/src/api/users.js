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
const userDelete = (req, res) => {
  const userFound = usersData.getUserDelete(req.body.id);

  if (userFound) {
    res.json({
      error: false,
      userId: userFound.id,
    });
  } else {
    res.status(404).json({
      error: "user-not-found",
      message: "User not found",
    });
  }
};

module.exports = { login: login, userDelete: userDelete };
