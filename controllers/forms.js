const Form = require("../models/Form");

exports.createForm = async (req, res, next) => {
  try {
    const form = await Form.create(req.body);
    return res.status(200).json({
      success: true,
      data: form,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot create form",
    });
  }
};

exports.getForms = async (req, res, next) => {
  try {
    const forms = await Form.find();
    res.status(200).json({
      success: true,
      count: forms.length,
      data: forms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred during get forms",
    });
  }
};

exports.getAvgBurnoutScore = async (req, res, next) => {
  try {
    const response = await Form.aggregate([
      { $group: { _id: null, avgBurnoutScore: { $avg: "$burnoutScore" } } },
    ]);
    res.status(200).json({
      success: true,
      data: response[0].avgBurnoutScore,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred during get avgBurnoutScore",
    });
  }
};

exports.getMedForms = async (req, res, next) => {
  try {
    const forms = await Form.find({ isMedStudent: true });
    res.status(200).json({
      success: true,
      count: forms.length,
      data: forms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred during get med forms",
    });
  }
};

exports.getNonMedForms = async (req, res, next) => {
  try {
    const forms = await Form.find({ isMedStudent: false });
    res.status(200).json({
      success: true,
      count: forms.length,
      data: forms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred during get non med forms",
    });
  }
};
