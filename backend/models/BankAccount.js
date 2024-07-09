const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema(
  {
    accountNo: {
      type: String,
    },
    bank: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("BankAccount", BankAccountSchema);
