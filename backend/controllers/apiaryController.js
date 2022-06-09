const asyncHandler = require("express-async-handler");
const Apiary = require("../models/apiaryModel");
const validateAddationalNumber = require("../utilis/validateAddationalNumber");
const generateApiaryNumer = require("../utilis/generateApiaryNumber");
// @route   GET api/apiary/
// @desc    Get all apiaries
// @access  Public
const getApiarys = asyncHandler(async (req, res) => {
  const apiarys = await Apiary.find();
  res.status(200).json(apiarys);
});

// @route   POST api/apiary/
// @desc    Create a apiary
// @access  Public
const createApiary = asyncHandler(async (req, res) => {
  const { name, number } = req.body;
  let addationalNumber = "";
  if (!name) {
    res.status(400);
    throw new Error("Name is required");
  }

  //Check if number is null
  //If number is null increment lost apiary number and generate addational number
  if (number) {
    addationalNumber = validateAddationalNumber(number);
  } else {
    const apiarys = await Apiary.find().sort({ createdAt: -1 });
    if (apiarys.length > 0) {
      const increaseApiaryNumber = Number(
        apiarys[0].apiaryNumber.toString().slice(8, 13).replace(/^0+/, "")
      );
      addationalNumber = validateAddationalNumber(
        String(increaseApiaryNumber + 1)
      );
    } else {
      res.status(400);
      throw new Error("There is no apiary");
    }
  }

  const apiary = await Apiary.create({
    name,
    apiaryNumber: generateApiaryNumer(addationalNumber),
  });

  if (!apiary) {
    res.status(400);
    throw new Error("Apiary is not created");
  }

  res.status(201).json(apiary);
});

module.exports = { getApiarys, createApiary };
