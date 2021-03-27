const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str != "string") {
    str = String(str);
  };
  if (options.addition === undefined) {
    options.addition = '';
  } else if (options.addition != "string") {
    options.addition = String(options.addition);
  };
  if (options.separator == undefined) {
    options.separator = '+';
  } else if (options.separator != "string") {
    options.separator = String(options.separator);
  };
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  } else if (options.additionSeparator != "string") {
    options.additionSeparator = String(options.additionSeparator);
  };
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  } else if (options.repeatTimes != "string") {
    options.repeatTimes = +options.repeatTimes;
  };
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  } else if (options.additionRepeatTimes != "string") {
    options.additionRepeatTimes = +options.additionRepeatTimes;
  };

  let addString = '';
  let strString = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addString += options.addition + options.additionSeparator;
  }
  addString = addString.slice(0, -(options.additionSeparator.length));

  for (let i = 0; i < options.repeatTimes; i++) {
    strString += str + addString + options.separator;
  }
  strString = strString.slice(0, -(options.separator.length));

  return strString;
};