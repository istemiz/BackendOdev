import moviesRepository from "../data/MoviesRepository.js";

const getMoviesList = () => {
  return moviesRepository.getMoviesList();
};

const updateMovies = (pId, pCompany) => {
  return moviesRepository.updateMovies(pId, pCompany);
};

export default { getMoviesList, updateMovies };
