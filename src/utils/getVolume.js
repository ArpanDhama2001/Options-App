const getVolume = (optionsChain) => {
  if (!optionsChain) {
    return { call: 0, put: 0 };
  }
  const volume = optionsChain.reduce(
    (acc, option) => {
      if (option.option_type === "CE") {
        acc.call += option.volume;
      } else if (option.option_type === "PE") {
        acc.put += option.volume;
      }
      return acc;
    },
    { call: 0, put: 0 }
  );
  return volume;
};

module.exports = { getVolume };
