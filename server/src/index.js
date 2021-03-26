const cors = require("cors");
const express = require("express");
const apiUsers = require("./api/users");
const films = require("../db/films-data.json");

const app = express();
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.use(express.static("./public"));

app.post("/api/login", apiUsers.login);

app.get("/intranet/:filmId.html", (req, res) => {
  // get film data
  const filmData = films.find((film) => film.id === req.params.filmId);
  console.log("film data", filmData);

  // response with rendered template
  if (filmData) {
    // ensure data
    filmData.title = filmData.title || "";
    filmData.year = filmData.year || "";
    filmData.director = filmData.director || "";
    filmData.country = filmData.country || "";
    filmData.awards = filmData.awards || [];
    res.render("pages/film", filmData);
  } else {
    res.render("pages/film-not-found");
  }
});
