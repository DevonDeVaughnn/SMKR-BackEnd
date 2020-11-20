const mongoose = require("mongoose");

const StrainSchema = new mongoose.Schema({
  // "Afpak": {
  //     "id": 1,
  //     "race": "hybrid",
  //     "flavors": ["Earthy", "Chemical", "Pine"],
  //     "effects": {
  //       "positive": ["Relaxed", "Hungry", "Happy", "Sleepy"],
  //       "negative": ["Dizzy"],
  //       "medical": [
  //         "Depression",
  //         "Insomnia",
  //         "Pain",
  //         "Stress",
  //         "Lack of Appetite"
  strain: String,
  race: String,
  flavors: [String],
  positiveEffects: [String],
  negativeEffects: [String],
  medical: [String],
});

module.exports = mongoose.model("Strain", StrainSchema);
