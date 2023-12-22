import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    let movie = this.props.movie;

    return (
      <Card className="h-100 border-0 m-1">
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="h-75" />
        <Card.Body className="bg-dark text-white">
          <Card.Title alt={movie.Title}>
            <small>{movie.Title}</small>
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleMovie;
