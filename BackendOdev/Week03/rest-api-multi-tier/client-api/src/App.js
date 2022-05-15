import "./App.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "./components/MovieList";
// import RentList from "./components/RentList";

function App() {
  const [movieList, setMovieList] = useState([]);
  // const [rentList, setRentList] = useState([]);
  const url = "http://localhost:3001/movies";

  const getmovieList = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMovieList(data);
    // setRentList(data.rent);
  };
  useEffect(() => {
    getmovieList();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <MovieList movieList={movieList} />
            <br />
            {/* <RentList rentList={rentList} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
