/*
-It will have a navbar
-user picture in middle(future dev)
-Under the nav bar will be three boxes with random weeds and their positive 
    -tell axios to grab three random strains from the db and put them in an array
    - for each in the array create a card 
-Directly under that, will be a stream of users input
-on the right side of the page will be random memes
-on the left side will be random movie quotes
-possible spotify on bottom middle
*/
import React from "react";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";

import "../components/Profiles/style.css";
import { Col, Row, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Col className="columns spotify-widget">Spotify widget</Col>
        </Row>
        <Row className="rows">
          <Col className="columns profile-picture" lg={12}>
            <img src="https://picsum.photos/200"></img>
            <h4>User Name</h4>
          </Col>
        </Row>
        <Row>
          <Col className="columns" lg={6}>
            Cards with liked recipes and strains
          </Col>
          <Col className="columns">Shops</Col>
          <Col className="columns">Food</Col>
        </Row>
        <Row>
          <Col className="columns liked-row" lg={12}>
            Three cards of previously liked recipes/strains
          </Col>
        </Row>
        <Row>
          <Col className="columns movie-column-button">
            <button className="btn btn-primary display-movie-btn">
              Button that grabs poster and places it inside the row below
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="columns movie-column">
            <div className="jumbotron jumbotron-fluid movie-jumbotron">
              <div class="container-fluid">
                image that takes up width of col displays movies
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Profile;
