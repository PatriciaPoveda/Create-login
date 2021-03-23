const usersData = require("../data/users");

const login = (req, res) => {
  const userFound = usersData.getUserByEmailAndPassword(
    req.body.email,
    req.body.password
  );

  if (userFound) {
    res.json({
      error: false,
      userId: userFound.id,
      userEmail: userFound.email,
    });
  } else {
    res.status(404).json({
      error: "user-not-found",
      message: "User not found",
    });
  }
};

module.exports = { login: login };
