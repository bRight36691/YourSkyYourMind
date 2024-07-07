const express = require("express");
const router = express.Router();

const {
  createForm,
  getForms,
  getAvgBurnoutScore,
  getMedForms,
  getNonMedForms,
} = require("../controllers/forms");

router.route("/").get(getForms).post(createForm);
router.route("/burnout").get(getAvgBurnoutScore);
router.route("/med").get(getMedForms);
router.route("/nonmed").get(getNonMedForms);

module.exports = router;
