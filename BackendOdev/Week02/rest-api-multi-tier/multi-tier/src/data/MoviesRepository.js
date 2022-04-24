import data from "./data.js";

const getMoviesList = () => {
  return data;
};

const updateMovies = (pId, pCompany) => {
  let movies = data.find((movies) => movies.id === pId);
  movies.name = pCompany.name;
  return movies;
};

export default { getMoviesList, updateMovies };
