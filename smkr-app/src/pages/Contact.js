import React, { Component, useState } from "react";

import { useHistory } from "react-router-dom";
import "../components/Form/formStyle.css";
import { Container, Form } from "../components/Grid";

class ContactUs extends Component {
  render() {
    return (
      <Container
        fluid
        style={{
          width: "100%",
          color: "black",

          flex: 1,
          flexDirection: "column",
        }}
      >
        <div className="card" style={{ width: "24rem" }}>
          <Form id="form">
            <div
              className="card-body text-center "
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              <h4>Welcome to SMKR. </h4>

              <p>Write to us.</p>
            </div>

            <div
              className="card-body text-center"
              style={{
                color: "black",
              }}
            >
              <label htmlFor="message">Message: </label>
              <input
                style={{
                  textAlign: "center",
                  marginLeft: "1em",
                  border: "green solid",
                  height: "200px",
                  width: "300px",
                }}
                type="text"
                id="message"
                name="message"
              />
            </div>

            <div
              className="card-body text-center"
              style={{
                color: "black",
              }}
            >
              <button
                className="btn btn-primary"
                type="submit"
                //onClick={}
                //disabled={parseInt(user.age) < 21 ? true : false}
                style={{
                  textAlign: "center",
                  position: "center",
                  border: "black solid",

                  fontFamily: "Playfair Display, serif",
                }}
              >
                <i className="fas fa-cannabis"></i>
              </button>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}

export default ContactUs;
