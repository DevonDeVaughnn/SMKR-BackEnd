import React, { Component } from "react";

class FriendSearch extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <Nav />
          <form>
            <h3>Find a SMKR!</h3>
            <fieldset className="form-group">
              <label>SMKR's Name:</label>
              <input
                type="text"
                ref="name"
                name="name"
                className="form-control"
              />
            </fieldset>

            <fieldset className="form-group">
              <label>SMKR's Email:</label>
              <input
                type="text"
                ref="email"
                name="email"
                className="form-control"
              />
            </fieldset>
            <button className="btn btn-success" type="submit">
              Find SMKR
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendSearch;
