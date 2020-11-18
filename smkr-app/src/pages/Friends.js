import React from "react";
import Nav from "../components/Nav/index";
import FriendJumbotron from "../components/Jumbotron/friendsJumbotron";

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
          <FriendJumbotron />
        </Row>
        <Row>
          <Col className="columns spotify-widget">Spotify widget</Col>
        </Row>
        <Row className="rows">
          <Col className="columns profile-picture" lg={12}>
            <img src="https://picsum.photos/200"></img>
            <h4>Friend's Name</h4>
          </Col>
        </Row>
        <Row>
          <Col className="columns" lg={6}>
            Cards with their liked recipes and strains
          </Col>
          <Col className="columns">Shops</Col>
          <Col className="columns">Food</Col>
        </Row>
        <Row>
          <Col className="columns liked-row" lg={12}>
            Three cards of their previously liked recipes/strains
          </Col>
        </Row>
        <Row>
          <Col className="columns movie-column-button">
            <button className="btn btn-primary display-movie-btn">
              Press this button to show your friends your recommendations
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="columns movie-column">
            <div className="jumbotron jumbotron-fluid movie-jumbotron">
              <div class="container-fluid">
                Something will go here but we will figure it out
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Profile;
