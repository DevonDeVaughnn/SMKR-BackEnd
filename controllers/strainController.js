const Strain = require("../models/strainModel");
const User = require("../models/userModel");

const straindex = (req, res, next) => {
  Strain.find()

    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: "Error getting strains",
      });
    });
};

const strain = (req, res, next) => {
  let strainID = req.body.strainID;
  Strain.findById(strainID)
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: "Error getting single strain",
      });
    });
};
const store = (req, res, next) => {
  let strain = new Strain({
    name: req.body.name,
    race: req.body.race,
    flavors: req.body.flavors,
    positiveEffects: req.body.effects.positive,
    negativeEffects: req.body.effects.negative,
    medical: req.body.effects.medical,
  });
  strain
    .save()

    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: "Error saving strain",
      });
    });
};

const update = (req, res, next) => {
  let strainID = req.body.strainID;
  let updateData = {
    name: req.body.name,
    race: req.body.race,
    flavors: req.body.flavors,
    positiveEffects: req.body.effects.positive,
    negativeEffects: req.body.effects.negative,
    medical: req.body.effects.medical,
  };
  Strain.findByIdAndUpdate(strainID, { $set: updateData })
    .then(() => {
      res.json({ msg: "Added to your faves" });
    })
    .catch((error) => {
      res.json({
        message: "Error getting single strain",
      });
    });
};

const destroy = (req, res, next) => {
  let strainID = req.body.strainID;
  Strain.findByIdAndRemove(strainID)
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: "Error getting single strain",
      });
    });
};
module.exports = {
  straindex,
  strain,
  store,
  update,
  destroy,
};
