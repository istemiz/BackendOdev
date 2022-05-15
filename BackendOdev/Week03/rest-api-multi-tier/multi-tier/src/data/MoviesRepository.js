import db from "../commons/database.js";

const getMoviesList = async () => {
  const rows = await db.query("SELECT * FROM movies");
  return rows;
};

const createMovies = (pMovies) => {
  let sql = `INSERT INTO movies (name) VALUES ('${pMovies.name}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Movies added!");
  });
  return pMovies;
};

const updateMovies = (pId, pMovies) => {
  let sql = `UPDATE movies SET name = '${pMovies.name}' WHERE id = '${pId}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Movies updated!");
  });
  return pMovies;
};

const deleteMovies = (pId) => {
  let sql = `DELETE FROM movies WHERE id = '${pId}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Movies deleted!");
  });
};

export default {
  getMoviesList,
  createMovies,
  updateMovies,
  deleteMovies,
};
