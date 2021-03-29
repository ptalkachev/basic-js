const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  
  let defaultNumberOfCats = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++) {

      if(matrix[i][j] === '^^') {
        defaultNumberOfCats += 1;
      }

    }
  }
  return defaultNumberOfCats;
};
