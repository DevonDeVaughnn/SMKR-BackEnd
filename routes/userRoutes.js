const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res, next) => {
  User.find()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  let user = new User({
    _id: new mongoose.Types.ObjectId(),
    userName: req.body.userName,
    password: req.body.password,
    age: req.body.age,
    favStrains: req.body.favStrains,
    favRecipes: req.body.favRecipes,
    strandsToTry: req.body.strandsToTry,
    recipesToTry: req.body.recipesToTry,
    friends: [],
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: error,
      });
      res.status(201).json({
        message: "Handling POST requests to /users",
        createdUser: result,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then((doc) => {
      console.log("From Database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message:
            "Woah slow down SMKR, this person doesn't exist. . . . in our database",
        });
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  User.update({ _id: id }, { $set: updateOps })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  User.remove({
    _id: id,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
