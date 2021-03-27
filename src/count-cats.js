const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let num = 0;
  matrix.forEach(elem => {
    elem.forEach(element => {
      if (element === '^^') {
        num++;
      }
    });
  });
  return num;
};
