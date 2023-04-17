const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The resaultult should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resault = {};
  domains.forEach(item => {
    let name = ''
    item.split('.').reverse().forEach(x => {
      name += `.${x}`
      if (name in resault) resault[name]++
      else resault[name] = 1
    })
  })
  return resault
}

module.exports = {
  getDNSStats
};
