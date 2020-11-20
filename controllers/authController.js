const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      username: req.body.username,
      password: hashedPass,
      email: req.body.email,
      age: req.body.age,
    });
    user
      .save()
      .then((user) => {
        res.json({ message: "User Saved" });
      })
      .catch((error) => {
        res.json({
          message: "Error occured",
        });
      });
  });
};

const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log({ username: req.body.username });
  User.findOne({ username: req.body.username })
    .then((dbUser) => {
      console.log(dbUser);
      if (dbUser) {
        bcrypt.compare(req.body.password, dbUser.password, function (
          err,
          results
        ) {
          if (err) {
            console.log("handle error");
          }
          if (results) {
            let token = jwt.sign(
              { username: dbUser.username },
              process.env.JWT_SECRET,
              {
                expiresIn: "1h",
              }
            );
            console.log("We have found results");
            res.json({
              message: "Login Successful SMKR we made it",
              token: token,
              success: true,
            });
            console.log(token);
          } else {
            res.json({ success: false, message: "passwords do not match" });
          }
        });
      }
    })
    .catch((err) => {
      console.log("We didnt get anything");
    });
};

module.exports = { signUp, login };
