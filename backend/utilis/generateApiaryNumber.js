/**
 * @description Get genereted apiary number
 * @param {String}  Additional number
 * @returns Apiary number
 */
const generateApiaryNumer = (number) => {
  const currentDate = getCurrentFormatedDate();
  const controlNumber = getControlNumber(`${currentDate}${number}`);

  return Number(`${currentDate}${number}${controlNumber}`);
};

/**
 * @description: get current date in format yyyy-mm-dd
 * @return: string
 */
const getCurrentFormatedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${month < 10 ? "0" + month : month}${
    day < 10 ? "0" + day : day
  }`;
};

/**
 * @description Generet lost 3 number for apiary number
 * @param {String} number Date in format yyyy-mm-dd and additional number
 * @returns {String} control number
 */
const getControlNumber = (number) => {
  const controllNumber = number
    .split("")
    .filter((item) => item !== "0")
    .reduce((acc, curr) => {
      return acc * Number(curr);
    }, Number(number))
    .toString()
    .split("");

  return `${controllNumber[1]}${controllNumber[6]}${
    controllNumber[controllNumber.length - 1]
  }`;
};

module.exports = generateApiaryNumer;
