const express = require("express");
const router = express.Router();

const {
  createBankAccount,
  getBankAccounts,
} = require("../controllers/bankAccounts");

router.route("/").post(createBankAccount);

module.exports = router;
