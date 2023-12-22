import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class NetflixRows extends Component {
  state = {
    movies: [],
    isLoading: false, // Caricamento
  };

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    }); // Toggle dello state
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=43b92655&movie&s=${this.props.Title}`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data });
      } else {
        console.log("error while fetching");
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { movies, isLoaded } = this.state; // Destructuring della state per migliorare la leggibilità

    if (!isLoaded) {
      return <p>Loading...</p>; // Aggiunto messaggio di caricamento durante il fetch dei dati
    }

    return (
      <Container fluid>
        {/* Sezione Fantasy */}
        <Row>
          <Col md={12}>
            <h4 className="text-start">Fantasy</h4>
          </Col>
          <Col>
            {this.state.isLoaded ? (
              this.state.movies.map((movie, index) => {
                return index < 6 && <SingleMovie key={movie.imdbID} movie={movie} />;
              })
            ) : (
              <p>Errore</p>
            )}
          </Col>
        </Row>
        {/* Sezione Anime */}
        <Row>
          <Col md={12}>
            <h4 className="text-start">Horror</h4>
          </Col>
          <Col>
            {this.state.isLoaded ? (
              this.state.movies.map((movie, index) => {
                return index < 6 && <SingleMovie key={movie.imdbID} movie={movie} />;
              })
            ) : (
              <p>Errore</p>
            )}
          </Col>
        </Row>
        {/* Sezione Supereroi TRANNE Spiderman */}
        <Row>
          <Col md={12}>
            <h4 className="text-start">Super</h4>
          </Col>
          <Col>
            {this.state.isLoaded ? (
              this.state.movies.map((movie, index) => {
                return index < 6 && <SingleMovie key={movie.imdbID} movie={movie} />;
              })
            ) : (
              <p>Errore</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NetflixRows;
