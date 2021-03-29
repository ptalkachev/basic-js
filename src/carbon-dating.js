const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  if(sampleActivity && parseInt(sampleActivity) > 0 && typeof(sampleActivity) === 'string' && parseInt(sampleActivity) < 15){
    sampleActivity = parseFloat(sampleActivity);
    let log = MODERN_ACTIVITY / sampleActivity;
    let k = 0.693 / HALF_LIFE_PERIOD;
    let result = Math.log(log) / k;    
    return Math.ceil(result);
  }else{
    return false;
  }
};
