const Strain = require("../models/strainModel");

//List strains
const index = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};

//show single strain
const show = (req, res, next) => {
  let strainId = req.body.Strain;
  Strain.findById(strainId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};
const storeStrain = (req, res, next) => {
  let strain = new Strain({
    strain: req.body.strain,
    race: req.body.race,
    flavors: req.body.flavors,
    positiveEffects: [req.body.positiveEffects],
    negativeEffects: [req.body.negativeEffects],
    medical: [req.body.medical],
  });
  strain
    .save()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured storing strain",
      });
    });
};

//update user info
const update = (req, res, next) => {
  let userID = req.body.userID;
  let updateInfo = {
    strain: req.body.strain,
    race: req.body.race,
    flavors: req.body.flavors,
    positiveEffects: [req.body.positiveEffects],
    negativeEffects: [req.body.negativeEffects],
    medical: [req.body.medical],
  };
  User.findByIdAndUpdate(userID, { $set: updateInfo })
    .then((response) => {
      res.json({
        message: "Updated successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured updating",
      });
    });
};
const remove = (req, res, next) => {
  let userID = req.body.userID;

  User.findByIdAndRemove(userID)

    .then((response) => {
      res.json({
        message: "Account deleted :(",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error deleting account",
      });
    });
};
module.exports = { index, show, update, storeStrain, remove };
