import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import moviesRoute from "./routes/MoviesRoute.js";

const app = express();
const port = 3001;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/movies", moviesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port port`);
});
