const cors = require("cors");
const express = require("express");
const apiUsers = require("./api/users");
const films = require("../db/films-data.json");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const dbPath = path.join(__dirname, "/../db/Database.db");
module.exports.db = new Database(dbPath, {
  verbose: console.log,
});

app.use(express.static("./public"));

app.post("/api/login", apiUsers.login);
app.post("/api/delete/:userId", apiUsers.userDelete);
app.post("/api/update/:userId", apiUsers.userUpdate);
