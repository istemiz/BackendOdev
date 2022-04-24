const data = require("./data");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

server.listen(5001, () => {
  console.log("http://localhost:5001 adresine gelen istekler dinleniyor");
});

server.get("/movies", (req, res) => {
  res.status(200).send(data);
});
server.get("/rent", (req, res) => {
  res.status(200).send(data);
});

server.post("/movies", (req, res) => {
  const person = req.body;
  res.status(201).send(person.movies);
});

// const data = require("./data");
// const express = require("express");
// const cors = require("cors");
// // const calculate = require("calculate.js");
// const bodyParser = require("body-parser");

// const server = express();

// server.use(cors);
// // server.use(calculate);
// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json());

// server.get("/movies", (req, res) => {
//   res.status(200).json(data);
// });

// server.post("/movies", (req, res) => {
//   const person = req.body;
//   res.status(201).send(person.movies);
// });

// server.listen(5000, () => {
//   console.log("http://localhost:5000 adresine gelen istekler dinleniyor");
// });
