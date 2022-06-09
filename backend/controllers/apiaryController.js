const asyncHandler = require("express-async-handler");
const Apiary = require("../models/apiaryModel");

// @route   GET api/apiary/
// @desc    Get all apiaries
// @access  Public
const getApiarys = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all apiaries" });
});

// @route   POST api/apiary/
// @desc    Create a apiary
// @access  Public
const createApiary = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Create apiarie" });
});

module.exports = { getApiarys, createApiary };
