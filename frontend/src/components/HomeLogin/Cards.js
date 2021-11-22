import React from "react";
import { BrowserRouter as  Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import baner1 from './Assets/Img/baner1.png'
import baner2 from './Assets/Img/baner2.png'


function Cards() {

  return (
    <Container>
       <> <Row>
         <Col lg>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={baner1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-secondary">
                Jugar
              </button>
            </Card.Body>
          </Card>
        </Col><Col lg={{ order: 6 }}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={baner2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Link to="/NeoMartin"><button type="button" class="btn btn-outline-secondary">Jugar</button></Link>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row>
        <Col lg>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={baner1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-secondary">
                Secondary
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={{ order: 6 }}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={baner2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-secondary">
                Secondary
              </button>
            </Card.Body>
          </Card>
        </Col> 
      </Row></> 
    </Container>
  );
}
export default Cards;