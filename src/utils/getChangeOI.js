const getChangeOI = (optionsChain) => {
  if (!optionsChain) {
    return { call: 0, put: 0 };
  }
  const changeOI = optionsChain.reduce(
    (acc, option) => {
      if (option.option_type === "CE") {
        acc.call += option.oich;
      } else if (option.option_type === "PE") {
        acc.put += option.oich;
      }
      return acc;
    },
    { call: 0, put: 0 }
  );
  return changeOI;
};

module.exports = { getChangeOI };
