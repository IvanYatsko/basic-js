const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var result = 0,
        n_digits = [];
    while (n) {
        n_digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    for (var index_n = 0; index_n < n_digits.length; index_n++) {
        var n = 0;
        for (var i = n_digits.length - 1; i >= 0; i--) {
            if (i !== index_n) {
                n = n * 10 + n_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

module.exports = {
  deleteDigit
};
