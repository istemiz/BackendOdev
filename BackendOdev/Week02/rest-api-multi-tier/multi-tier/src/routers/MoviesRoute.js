import express from "express";
import moviesService from "../service/MoviesService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const moviesList = moviesService.getMoviesList();
  res.status(200).send(moviesList);
});

router.post("/", (req, res) => {
  // get params
  const movie = req.body;
  // business Logic
  const newMovies = moviesService.employPerson(movie);
  // return result
  res.status(201).send(newMovies);
});

router.put("/:id", (req, res) => {
  // params
  const personId = req.params.id;
  const movies = req.body;
  // business Logic
  const updatedMovies = moviesService.updateMovies(personId, movies);
  // return result
  res.status(200).send(updatedMovies);
});

router.delete("/:id", (req, res) => {
  // get params
  const movieId = req.params.id;
  // no logic
  moviesService.deleteMovies(movieId);
  // retrun result to the client
  res.status(200);
});
export default router;
