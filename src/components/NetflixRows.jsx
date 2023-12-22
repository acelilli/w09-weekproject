import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Struttura delle tre rows generiche che conterranno H4 e le row contenenti SingleMovie(che saranno col)

const NetflixRows = () => {
  return (
    <Container fluid>
      {/* Sezione Fantasy */}
      <Row>{/* HP, LOTR */}</Row>
      <Col md={12}>
        <h4 className="text-start">Fantasy</h4>
      </Col>

      {/* Sezione Horror */}
      <Row>{/* Studio Ghibli */}</Row>
      <Col md={12}>
        <h4 className="text-start">Anime</h4>
      </Col>

      {/* Sezione Supereroi TRANNE spiderman */}
      <Row>
        <Col md={12}>
          <h4 className="text-start">Super</h4>
        </Col>
        {/* Contenuto della sezione */}
      </Row>
    </Container>
  );
};

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
