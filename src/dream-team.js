const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  
  let defaultMembers = '';
  if(members){
    for(let i = 0; i < members.length; i++) {
      if(typeof(members[i]) === 'string') {
        for(let j = 0; j < members[i].length; j++) {
          
          if(typeof(members[i][j]) === 'string' && members[i][j] !== ' ') {
            defaultMembers += members[i][j].toString().toUpperCase();
            break;
          }
          
        }
      } 
    }
  }else{
    return false;
  }

  defaultMembers = defaultMembers.split('');
  defaultMembers.sort();
  return defaultMembers.join('');
};
