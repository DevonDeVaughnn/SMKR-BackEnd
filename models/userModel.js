const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true, maxlength: 15 },
  password: { type: String, required: true, minlength: 6 },
  age: { type: Number, required: true },
  favStrains: [String],
  favRecipes: [String],
  strandsToTry: [String],
  recipesToTry: [String],
  friends: [String],
});

module.exports = mongoose.model("User", userSchema);
