const BankAccount = require("../models/BankAccount");

exports.createBankAccount = async (req, res, next) => {
  try {
    const bankAccount = await BankAccount.create(req.body);
    return res.status(200).json({
      success: true,
      data: bankAccount,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot create bankAccount",
    });
  }
};

exports.getBankAccounts = async (req, res, next) => {
  try {
    const bankAccounts = await BankAccount.find();
    res.status(200).json({
      success: true,
      count: bankAccounts.length,
      data: bankAccounts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred during get bankAccounts",
    });
  }
};
