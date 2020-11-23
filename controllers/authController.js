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
      .then((dbUser) => {
        res.json({ success: true, message: "User Saved" });
      })
      .catch((error) => {
        res.json({
          message: "Error occured",
        });
      });
  });
};

const login = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((dbUser) => {
      if (dbUser) {
        bcrypt.compare(
          req.body.password,
          dbUser.password,
          function (err, results) {
            if (err) {
              console.log("handle error");
            }
            if (results) {
              let token = jwt.sign(
                { usernname: dbUser.username },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1h",
                }
              );

              res.json({
                message: "Login Successful SMKR we made it",
                token: token,
                data: dbUser,
                success: true,
              });
            } else {
              res.json({ success: false, message: "passwords do not match" });
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const home = async (req, res) => {
  const user = await User.findById(user._id);
  console.log(user);
  res.json(user);
};
const deleteUser = (req, res) => {
  const id = req.params._id;
  User.findByIdAndDelete(id, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted", user);
    }
  });
};

const tokenValid = async (req, res) => {
  const token = req.header("x-auth-token");
  if (!token) return res.json(false);

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (!verified) return res.json(false);

  const user = await User.findById(verified.id);
  if (!user) return res.json(false);
  return res.json(true);
};

module.exports = { signUp, login, deleteUser, home, tokenValid };
