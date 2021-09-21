import { NotImplementedError } from '../extensions/index.js';

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
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if (!domains.length) return {};
  let arr = domains.map(i => i.split('.').reverse());
  let dns = [];
  let map = new Map();
  for (let i of arr) {
    let str = '';
    for (let a = 0; a < i.length; a++) {
      str += '.' + i[a];
      if (a < i.length) dns.push(str);
    }
  }
  for (let i of dns) {
    let count = 0;
    for (let a of dns) {
      i === a ? count++ : count;
    }
    map.set(i, count);
  }
  const object = Object.fromEntries(map);
  return object;
}
