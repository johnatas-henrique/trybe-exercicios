const assert = require('assert');

function myRemove(arr, item) {
  return arr.filter((elem) => elem !== item);
}

// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const arrQuatro = [1, 2, 3, 4];
// item 3 ;

assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
