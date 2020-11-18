import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">SMKR</div>
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
              <Link to="#" class="nav-link">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/profile" class="nav-link">
                My Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/friends" class="nav-link">
                Friends
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/home" class="nav-link">
                Messages (Not Functioning)
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                to="#"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Straindex
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/straindex" class="dropdown-item">
                  Strain Library
                </Link>
                <Link to="/home" class="dropdown-item">
                  Reccomend (No page yet)
                </Link>
                <Link to="/home" class="dropdown-item">
                  Account Settings (No page yet)
                </Link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
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
