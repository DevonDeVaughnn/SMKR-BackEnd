import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          SMKR
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Friends
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Messages
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Straindex
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Strain Library
                </a>
                <a class="dropdown-item" tag={Link} to="/straindex">
                  Reccomend
                </a>
                <a class="dropdown-item" tag={Link} to="/straindex">
                  Account Settings
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <i
                    className="fa fa-cannabis"
                    style={{
                      color: "#ea0a8e",
                    }}
                  >
                    {" "}
                    D A N K M O D E
                  </i>{" "}
                  <i
                    className="fa fa-cannabis"
                    style={{
                      color: "#ea0a8e",
                    }}
                  ></i>
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-primary"
              type="submit"
              //disabled={parseInt(user.age) < 21 ? true : false}
              style={{
                textAlign: "center",
                position: "center",
                border: "none",

                fontFamily: "Playfair Display, serif",
              }}
            >
              <i className="fas fa-cannabis"></i>
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
export default Nav;
