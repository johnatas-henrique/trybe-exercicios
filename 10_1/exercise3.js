const assert = require('assert');

function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

// implemente seus testes aqui
assert.equal(mySum([1, 2, 3, 4]), 10);
assert.equal(mySum([1, -2, -3, 4]), 0);
