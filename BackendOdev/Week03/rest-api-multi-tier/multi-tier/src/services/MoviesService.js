import moviesRepository from "../data/MoviesRepository.js";

const getMoviesList = async () => {
  const moviesList = await moviesRepository.getMoviesList();
  return moviesList;
};

const createMovies = (pMovies) => {
  return moviesRepository.createMovies(pMovies);
};

const updateMovies = (pId, pMovies) => {
  return moviesRepository.updateMovies(pId, pMovies);
};

const deleteMovies = (pId) => {
  moviesRepository.deleteMovies(pId);
};

export default {
  getMoviesList,
  createMovies,
  updateMovies,
  deleteMovies,
};
