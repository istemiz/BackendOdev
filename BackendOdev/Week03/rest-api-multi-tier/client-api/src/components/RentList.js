import Table from "react-bootstrap/Table";

const RentList = (props) => {
  console.log(props.rentList);
  const userRentList = props.rentList.map((movie, index) => (
    <tr key={index}>
      <td>{movie.movieId}</td>
      <td>{movie.duration}</td>
      <td>{movie.person}</td>
    </tr>
  ));
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <h2>Rent List</h2>
        <tr>
          <th>MovieId</th>
          <th>Duration</th>
          <th>Person</th>
        </tr>
      </thead>
      <tbody>{userRentList}</tbody>
    </Table>
  );
};
export default RentList;
