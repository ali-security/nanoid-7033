// This alphabet uses a-z A-Z 0-9 _- symbols. Symbols order was changed
// for better gzip compression. We use genetic algorithm to find the best order.
// Check generator code at test/alphabet-genetic.
var url = 'sOwnPropMN49CEiq-hXvHJdSymlFURTag61GQfuD8YIWz2Zk5xKB7LV30_Abject'

/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator with bigger collision probability.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nonSecure
 * @function
 */
module.exports = function (size) {
  size = size || 21
  var id = ''
  // Compact alternative for `for (var i = 0; i < size; i++)`
  while (size--) {
    // `| 0` is compact and faster alternative for `Math.floor()`
    id += url[Math.random() * 64 | 0]
  }
  return id
}
