import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Card, Container, Row,Col } from "react-bootstrap";
import c1 from "./photo-1631549916768-4119b2e5f926.jpg"
import c2 from "./photo-1584988299603-3ab9216625bf.jpg"
import c3 from "./photo-1522335579687-9c718c5184d7.jpg"
 const Homepage = () => {

  // if (localStorage.getItem("isLoggedIn") === "false") {
  //   return <Navigate to="/" />;
  // }

  return (
    <React.Fragment>
      <React.Fragment>
        <main className="d-flex justify-content-center align-items-center homepage">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={4}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c1} />
      <Card.Body>
        <Card.Title>Drugs</Card.Title>
        <Card.Text>
        A medication or medicine is a drug taken to cure or ameliorate any symptoms of an illness or medical condition.
        </Card.Text>
        <div className="text-center">
                      <Link to="/getalldrugs"  className="btn text-white"
                        style={{backgroundColor:"#1e40af"}}>Get Drugs</Link>
                    </div>
      </Card.Body>
    </Card>
              </Col>
               <Col md={4}>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c2} />
      <Card.Body>
        <Card.Title>Subscriptions</Card.Title>
        <Card.Text>
        A medication or medicine is a drug taken to cure or ameliorate any symptoms of an illness or medical condition.
        </Card.Text>
        <div className="text-center">
                      <Link to="/subscribe"  className="btn text-white"
                        style={{backgroundColor:"#1e40af"}}>Subscribe</Link>
                    </div>
      </Card.Body>
    </Card>
              </Col>
               <Col md={4}>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c3} />
      <Card.Body>
        <Card.Title>Refill</Card.Title>
        <Card.Text>
        A medication or medicine is a drug taken to cure or ameliorate any symptoms of an illness or medical condition.
        </Card.Text>
        <div className="text-center">
                      <Link to="/getallrefills"  className="btn text-white"
                        style={{backgroundColor:"#1e40af"}}>Refills</Link>
                    </div>
      </Card.Body>
    </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </React.Fragment>
    </React.Fragment>
  );
};
export default Homepage