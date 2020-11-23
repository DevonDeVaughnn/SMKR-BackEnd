const express = require("express");
const router = express.Router();

const StrainController = require("../controllers/strainController");

router.get("/", StrainController.straindex);
router.post("/show", StrainController.strain);
router.get("/:id", StrainController.strain);
router.post("/store", StrainController.store);
router.post("/update", StrainController.update);
router.post("/delete", StrainController.destroy);

module.exports = router;
