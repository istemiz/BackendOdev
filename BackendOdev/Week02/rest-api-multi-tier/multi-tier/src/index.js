import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import moviesRoute from "./routers/MoviesRoute.js";
import data from "./data/data.js";

const server = express();
const PORT = 5001;

// parse serverlication/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

// parse serverlication/json

server.use("/movies", moviesRoute);

server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
  console.log(data);
});

export default server;
