getLostAutoincrementNumber = (numberList) => {
  const sortArray = numberList.sort((a, b) => a - b);
  let lostNumber;
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i + 1] - sortArray[i] > 1) {
      lostNumber = sortArray[i] + 1;
      break;
    }
  }
  if (lostNumber === undefined) {
    return sortArray[sortArray.length - 1] + 1;
  }

  return lostNumber;
};

module.exports = getLostAutoincrementNumber;
