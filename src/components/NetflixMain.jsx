import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";

const NetflixMain = () => {
  return (
    <Container fluid className="px-4">
      {/* Row che contiene i tool*/}
      <Row className="justify-content-between">
        <Col className="d-flex" md={11}>
          <h2 className="mb-4">Movies</h2>
          <div className="btn-group" role="group">
            <div className="ms-4 mt-1">
              <DropdownButton
                title="Genres"
                variant="dark"
                size="sm"
                className="ms-4 mt-1 rounded-0"
                style={{ background: "#221f1f", border: "solid 1px" }}
              >
                <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#">Anime</Dropdown.Item>
                <Dropdown.Item href="#">Super</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Col>
        {/* Col delle icone */}
        <Col md={1}>
          <Grid size="1rem" style={{ marginLeft: "6vmin", marginRight: "2vmin" }} />
          <List size="1rem" />
        </Col>
      </Row>
      {/* NetflixRows */}
    </Container>
  );
};

export default NetflixMain;
