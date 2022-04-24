import Table from "react-bootstrap/Table";

const RentList = (props) => {
  console.log(props.movieList);
  const userNewList = props.movieList.map((movie, index) => (
    <tr key={index}>
      <td>{movie.name}</td>
      <td>{movie.year}</td>
      <td>{movie.genre}</td>
      <td>{movie.income}</td>
    </tr>
  ));
  return (
    <Table responsive="sm">
      <thead>
        <h2>Movie List</h2>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>{userNewList}</tbody>
    </Table>
  );
};
export default RentList;
