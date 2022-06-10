const asyncHandler = require("express-async-handler");
const Apiary = require("../models/apiaryModel");
const validateAddationalNumber = require("../utilis/validateAddationalNumber");
const generateApiaryNumer = require("../utilis/generateApiaryNumber");
const getYesterdayAndTomorrowDate = require("../utilis/getYesterdayAndTomorrowDate");
const getLostAutoincrementNumber = require("../utilis/getLostAutoincrementNumber");
const getAddationalNumbers = require("../utilis/getAddationalNumbers");
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
    throw new Error("Nazwa pasieki jest wymagana");
  }
  if (number.length > 5) {
    res.status(400);
    throw new Error("Numer pasieki może zawierać maksymalnie 5 cyfr");
  }
  //Check if number is null
  //If number is null increment lost apiary number and generate addational number
  if (number) {
    const apiarys = await getTodayApiarys();
    const numbersList = getAddationalNumbers(apiarys);
    const numberWithoutZeros = Number(number.toString().replace(/^0+/, ""));
    const isAddationalNumberOccupied = numbersList.some(
      (number) => number === numberWithoutZeros
    );
    if (isAddationalNumberOccupied) {
      res.status(400);
      throw new Error("Numer pasieki jest już zajęty");
    }
    addationalNumber = validateAddationalNumber(number);
  } else {
    //Get apiarys from today
    const apiarys = await getTodayApiarys();
    //Check if apiarys is empty
    if (apiarys.length > 0) {
      const numbersList = getAddationalNumbers(apiarys);

      addationalNumber = validateAddationalNumber(
        String(getLostAutoincrementNumber(numbersList))
      );
    } else {
      addationalNumber = "00001";
    }
  }

  const apiary = await Apiary.create({
    name,
    apiaryNumber: generateApiaryNumer(addationalNumber),
  });

  if (!apiary) {
    res.status(400);
    throw new Error("Wystąpił bład przy tworzeniu pasieki");
  }

  res.status(201).json(apiary);
});

const getTodayApiarys = async () => {
  const { today, tomorrow } = getYesterdayAndTomorrowDate();
  const apiarys = await Apiary.find().find({
    createdAt: {
      $gte: today,
      $lte: tomorrow,
    },
  });
  return apiarys;
};
module.exports = { getApiarys, createApiary };
