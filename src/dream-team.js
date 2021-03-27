const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  members = members.filter(n => typeof n === 'string');
  members = members.map((x) => {
    return x.toUpperCase().trim().slice(0, 1);
  });
  members = members.sort().join('');
  return members;
};