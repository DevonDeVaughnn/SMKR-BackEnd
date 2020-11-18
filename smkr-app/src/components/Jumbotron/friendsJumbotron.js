import React, { Component } from "react";
import "../Jumbotron/jumbotron.css";
import Factoid from "../Factoid";

class FriendJumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h1 class="display-4">SMKR</h1>
          <h2 class="lead">
            <Factoid />
          </h2>
        </div>
      </div>
    );
  }
}
export default FriendJumbotron;
