const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController");
const authenticate = require("../middleware/authenticate");

router.post("/signup", AuthController.signUp);
router.post("/login", AuthController.login);
router.get("/home", authenticate, AuthController.home);
router.post("/tokenValid", AuthController.tokenValid);
router.delete("/deleteUser", AuthController.deleteUser);

module.exports = router;
