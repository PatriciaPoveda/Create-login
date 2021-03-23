const cors = require("cors");
const express = require("express");
const apiUsers = require("./api/users");

const app = express();
app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.use(express.static("./public"));

app.post("/api/login", apiUsers.login);
