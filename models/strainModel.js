const mongoose = require("mongoose");

const StrainSchema = new mongoose.Schema({
  name: String,
  race: String,
  flavors: String,
  positiveEffects: String,
  negativeEffects: String,
  medical: String,
});

const Strain = mongoose.model("Strain", StrainSchema);

module.exports = Strain;
