import express from "express";
import moviesService from "../service/MoviesService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const moviesList = moviesService.getMoviesList();
  res.status(200).send(moviesList);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movies = req.body;
  const updatedMovies = moviesService.updateCompany(id, movies);
  res.status(200).send(updatedMovies);
});

export default router;
