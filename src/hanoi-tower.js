const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  let result = {turns: 2**disksNumber-1,
                seconds: Math.floor(3600/turnsSpeed*(2**disksNumber-1))};
  return result;
};
