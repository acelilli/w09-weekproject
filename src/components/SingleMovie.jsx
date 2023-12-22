import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="h-100 border-0 m-1">
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="h-75" />
      </Card>
    );
  }
}

export default SingleMovie;
