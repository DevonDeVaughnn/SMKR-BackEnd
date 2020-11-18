import React, { useState } from "react";
import "../Form/formStyle.css";

function Form() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    age: "",
    email: "",
    password: "",
    //favStrain
    //favRecipes
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userName && user.email && user.age && user.password) {
      const newUser = { ...user, id: new Date().getTime.toString() };
      setUsers([...user, newUser]);
      setUser({ userName: "", email: "", age: "", password: "" });
    }
  };
  function addElement() {
    const element = document.getElementById("root");
    element.classList.add("wrapper");
  }

  return (
    addElement(),
    (
      <div
        className="card text-center"
        style={{
          width: "24rem",
          color: "white",

          flex: 1,
          flexDirection: "column",
        }}
      >
        <form className="card-header" id="form">
          <div>
            <div className="myImage"></div>
            <br></br>
          </div>
          <h4>Welcome to SMKR. </h4>
          <p>Sign-up here.</p>

          <div
            className="card-body text-left "
            style={{
              color: "white",
            }}
          >
            <label htmlFor="userName">Username: </label>
            <input
              style={{
                marginLeft: "1em",
                border: "none",
              }}
              type="text"
              id="userName"
              name="userName"
              //value={user.userName}
              //onChange={handleChange}
            />
          </div>
          <div
            className="card-body text-left"
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
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div
            className="card-body text-left"
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
              value={user.age}
              onChange={handleChange}
            />
          </div>
          <div
            className="card-body text-left"
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
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
            disabled={parseInt(user.age) < 21 ? true : false}
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
    )
  );
}
export default Form;
