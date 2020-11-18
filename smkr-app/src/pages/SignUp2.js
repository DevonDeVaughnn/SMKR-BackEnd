import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import "../components/Form/formStyle.css";
import { Container, Form } from "../components/Grid";

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function addElement() {
  const element = document.getElementById("root");
  element.classList.add("wrapper");
}

const SignUp2 = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [age, setAge] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  console.log(setUserData);
  console.log("Made it this far");

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { username, password, email, age };
    console.log(newUser);
    console.log("This is from new user.");
    try {
      axios
        .post("http://localhost:5000/users/register", newUser)
        .then((response) => {
          console.log(response);
          console.log("This part works");
          // const loginRes = axios.post("http://localhost:5000/users/login", {
          //   username,
          //   password,
          //   age,
          //   email,
          // });
          // setUserData({
          //   token: loginRes.data.token,
          //   user: loginRes.data.user,
          // });
          // localStorage.setItem("auth-token", loginRes.data.token);
          history.push("/home");
        })
        .catch((err) => {
          console.log("I am in the top catch");
          console.log(err);
        });
    } catch (e) {
      console.log("I am in catch");
      console.log(e);
    }
  };

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
            <p>Sign-up here.</p>

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
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className="card-body text-center"
                style={{
                  color: "white",
                }}
              >
                <label htmlFor="email">E-Mail: </label>
                <input
                  style={{
                    textAlign: "left",
                    marginLeft: "1em",
                    border: "none",
                  }}
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                className="card-body text-center"
                style={{
                  color: "white",
                }}
              >
                <label htmlFor="age">Age: </label>
                <input
                  style={{
                    textAlign: "center",
                    marginLeft: "1em",
                    border: "none",
                  }}
                  type="text"
                  id="age"
                  name="age"
                  onChange={(e) => setAge(e.target.value)}
                />
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
};
export default SignUp2;
