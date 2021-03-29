const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  let season = '';
  if(date){
    let newDate = new Date(date);
    let season = newDate.getSeason();
    return season;
  }else{
    return 'Unable to determine the time of year!';
  }
};
