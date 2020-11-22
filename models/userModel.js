const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true, maxlength: 15 },
  password: { type: String, required: true, minlength: 6 },
  age: { type: Number, required: true },
  favStrains: [String],
});

var User = mongoose.model("user", UserSchema);

module.exports = mongoose.model("user", UserSchema);
