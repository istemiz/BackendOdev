import express from "express";
import moviesService from "../services/MoviesService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const moviesList = await moviesService.getMoviesList();
  console.log("router", moviesList);
  res.status(200).send(moviesList);
});

router.post("/", (req, res) => {
  const movies = moviesService.createMovies(req.body);
  res.status(201).send(movies);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movies = req.body;
  const updatedMovies = moviesService.updateMovies(id, movies);
  res.status(200).send(updatedMovies);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  moviesService.deleteMovies(id);
  res.status(200).send("Deleted!");
});

export default router;
