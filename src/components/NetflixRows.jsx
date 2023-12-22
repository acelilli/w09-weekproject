import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class NetflixRows extends Component {
  state = {
    movies: [],
  };

  getMovies = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=43b92655`);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        console.log("Chiamata errata");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <Container fluid>
        {/* Sezione Fantasy */}
        <Row>
          {/* HP, LOTR */}
          <Col md={12}>
            <h4 className="text-start">Fantasy</h4>
          </Col>
          <Col>
            {this.state.movies.map((movie) => {
              return <SingleMovie movie={movie} key={movie.imdbID} />;
            })}
          </Col>
        </Row>
        {/* Sezione Anime */}
        <Row>
          {/* Studio Ghibli e che ne so */}
          <Col md={12}>
            <h4 className="text-start">Anime</h4>
          </Col>
          <Col>
            {this.state.movies.map((movie) => {
              return <SingleMovie movie={movie} key={movie.imdbID} />;
            })}
          </Col>
        </Row>
        {/* Sezione Supereroi TRANNE spiderman */}
        <Row>
          <Col md={12}>
            <h4 className="text-start">Super</h4>
          </Col>
          <Col>
            {this.state.movies.map((movie) => {
              return <SingleMovie movie={movie} key={movie.imdbID} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NetflixRows;

//   {/* Sezione Fantasy */}
//   <h4>Fantasy</h4>
//   <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">{/* HP, LOTR */}</Row>

//   {/* Sezione Horror */}
//   <h4>Anime</h4>
//   <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">{/* Studio Ghibli */}</Row>

//   {/* Sezione Supereroi TRANNE spiderman */}
//   <h4>Super</h4>
//   <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
//     {/* Contenuto della sezione */}
//   </Row>
