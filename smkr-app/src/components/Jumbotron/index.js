import React, { Component } from "react";
import "../Jumbotron/jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h1 class="display-4">Hey User</h1>
          <h2 class="lead">SMKR, welcome to the clouds</h2>
        </div>
      </div>
    );
  }
}
export default Jumbotron;
