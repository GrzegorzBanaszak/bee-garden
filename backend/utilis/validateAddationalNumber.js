const validateAddationalNumber = (value) => {
  if (value.length === 5) {
    return value;
  }
  const table = value.split("");
  const range = 5 - table.length;
  for (let i = 0; i < range; i++) {
    table.unshift("0");
  }
  return table.join("");
};

module.exports = validateAddationalNumber;
