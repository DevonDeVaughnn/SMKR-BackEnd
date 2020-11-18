const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../../SMKR-BackEnd/auth");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    password: user.password,
    age: user.age,
    email: user.emai,
    id: user._id,
  });
});

router.post("/register", async (req, res) => {
  console.log("I am inside register");
  try {
    const { username, password, email, age } = req.body;

    //validation
    if (!username || !password || !email || !age) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Please enter at least 6 characters" });
    }

    if (age < 21) {
      return res.status(400).json({
        msg: "It seems you are too young to enter",
      });
    }
    //Finding existing users
    const existingUser = await User.findOne({ email: email });
    const existingUsername = await User.findOne({ username: username });

    console.log(existingUser);
    console.log("existingUser");
    if (existingUser || existingUsername)
      return res.status(400).json({
        msg: "This user already exists in the database",
      });

    //Hashing out password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Creating new user
    const newUser = new User({
      username,
      password: passwordHash,
      email,
      age,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Creating login router
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    //validate
    if (!username || !password)
      return res.status(400).json({ msg: "Please enter all fields" });

    //find users profile
    const user = await User.findOne({
      username: username,
    });
    if (!user)
      return res.status(400).json({ msg: "This account doen't exist" });

    //matching passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        msg: "You have entered an inaccurate password please try again",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("I have the token");
    console.log(token);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete user
router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/tokenValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/tokenIsValid");

module.exports = router;
