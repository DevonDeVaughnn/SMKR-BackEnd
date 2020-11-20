const express = require("express");
const router = express.Router();

const StrainController = require("../controllers/strainController");
// const upload = require("../middleware/upload");
// const authenticate = require("../middleware/authenticate");
router.get("/straindex", StrainController.index);
router.post("/straindex/show", StrainController.show);

module.exports = router;
