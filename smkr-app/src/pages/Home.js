import React from "react";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";
import InfoCards from "../components/Card";
import Factoid from "../components/Factoid";
import "../App.css";
import { Col, Row, Container } from "../components/Grid";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12" className="column">
            <Nav />
            <Jumbotron />
            <InfoCards />
            <Factoid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
