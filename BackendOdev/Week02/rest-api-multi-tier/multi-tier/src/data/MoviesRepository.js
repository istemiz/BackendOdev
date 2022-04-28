import mysql from "mysql";
// import data from "./data.js";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "testdb",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

con.query(
  "SELECT * FROM task where task_id=1",
  function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  }
);

const getMoviesList = () => {
  return data;
};

const updateMovies = (pId, pCompany) => {
  let movies = data.find((movies) => movies.id === pId);
  movies.name = pCompany.name;
  return movies;
};

export default { getMoviesList, updateMovies };
