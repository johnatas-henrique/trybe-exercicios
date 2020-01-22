const assert = require('assert');

function myIndexOf(arr, item) {
  return arr.findIndex((element) => element === item);
}

// implemente seus testes aqui
assert.equal(myIndexOf([1, 2, 3, 4], 3), 2)
assert.equal(myIndexOf([1, 2, 3, 4], 5), -1)
