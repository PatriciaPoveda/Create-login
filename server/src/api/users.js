const usersData = require("../data/users");

const login = (req, res) => {
  const userFound = usersData.getUserByEmailAndPassword(
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

module.exports = { login: login };
