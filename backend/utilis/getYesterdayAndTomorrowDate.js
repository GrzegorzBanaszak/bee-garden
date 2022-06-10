const getYesterdayAndTomorrowDate = () => {
  const date = new Date();
  const tomorrowDate = new Date(date);
  tomorrowDate.setDate(date.getDate() + 1);

  const today = new Date(
    `${date.getFullYear()},${date.getMonth() + 1},${date.getDate()}`
  );
  const tomorrow = new Date(
    `${tomorrowDate.getFullYear()},${
      tomorrowDate.getMonth() + 1
    },${tomorrowDate.getDate()}`
  );
  return { today, tomorrow };
};

module.exports = getYesterdayAndTomorrowDate;
