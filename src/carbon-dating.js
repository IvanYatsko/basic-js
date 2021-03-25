const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
if (!sampleActivity || typeof sampleActivity != "string") {
 return false;
}
let t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD);
if (isNaN(t) || t <= 0 || t == Infinity) {
  return false;
};
return Math.ceil(t);
};
