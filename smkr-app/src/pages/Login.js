import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import "../components/Form/formStyle.css";
import { Container, Form } from "../components/Grid";

//import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  console.log(setUserData);
  console.log("Made it this far");

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = { username, password };
    console.log(loginUser);
    console.log("Logging in.");
    try {
      axios
        .post("http://localhost:5000/users/login", loginUser)
        .then((response) => {
          console.log(response);
          console.log("This part works");
          const loginRes = axios.post("http://localhost:5000/users/home", {
            username,
            password,
          });
          setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
          });
          localStorage.setItem("auth-token", loginRes.data.token);
          history.push("/home");
        });
    } catch (e) {
      console.log(e);
    }
  };

  function addElement() {
    const element = document.getElementById("root");
    element.classList.add("wrapper");
  }
  return (
    addElement(),
    (
      <Container
        fluid
        style={{
          width: "100%",
          color: "white",

          flex: 1,
          flexDirection: "column",
        }}
      >
        <div className="card" style={{ width: "24rem" }}>
          <Form id="form">
            <div>
              <div className="card-img-top myImage"></div>
              <br></br>
            </div>
            <h4>Welcome to SMKR. </h4>
            <p>Sign-in here.</p>
            <a href="http://localhost:5000/users/register">Not a member</a>

            <div
              className="card-body text-center "
              style={{
                color: "white",
              }}
            >
              <label htmlFor="username">Username: </label>
              <input
                style={{
                  marginLeft: "1em",
                  border: "none",
                }}
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />

              <div
                className="card-body text-center"
                style={{
                  color: "white",
                }}
              >
                <label htmlFor="password">Password: </label>
                <input
                  style={{
                    textAlign: "center",
                    marginLeft: "1em",
                    border: "none",
                  }}
                  type="password"
                  required
                  id="password"
                  name="password"
                  value="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  btn
                  btn-danger
                  className="btn btn-primary"
                  type="submit"
                  //onClick={}
                  //disabled={parseInt(user.age) < 21 ? true : false}
                  style={{
                    textAlign: "center",
                    position: "center",
                    border: "none",

                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Join SMKR
                </button>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                onClick={submit}
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
            </div>
          </Form>
        </div>
      </Container>
    )
  );
}
