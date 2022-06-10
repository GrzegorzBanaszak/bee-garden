const getAddationalNumbers = (apiarys) => {
  const numbersList = apiarys.reduce((acc, curr) => {
    acc.push(
      Number(curr.apiaryNumber.toString().slice(8, 13).replace(/^0+/, ""))
    );
    return acc;
  }, []);
  return numbersList;
};

module.exports = getAddationalNumbers;
