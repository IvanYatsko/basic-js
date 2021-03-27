const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let num = 0;
    let numMax = 0;
    if (Array.isArray(arr)) {
      numMax = num = 1;
      arr.forEach((element) => {
        num += this.calculateDepth(element);
        if (num > numMax) {
          numMax = num;
        }
        num = 1;
      });
    }
    return numMax;
  }
};