const assert = require('assert');

arrayY = [2, 4, 16, 19, 77, 53 ];
arrayN = [4, 8, 16, 29, 32, 52 ];
multiplos = [3, 5, 7, 11];

const testarMultiplos = (arr) => {
    return arr.some(number => {
    if (number % multiplos[0] === 0) return true;
    if (number % multiplos[1] === 0) return true;
    if (number % multiplos[2] === 0) return true;
    if (number % multiplos[3] === 0) return true;
    return false;
    })
}

assert.strictEqual(typeof testarMultiplos, 'function');
assert.strictEqual(testarMultiplos(arrayY), true);
assert.strictEqual(testarMultiplos(arrayN), false);

