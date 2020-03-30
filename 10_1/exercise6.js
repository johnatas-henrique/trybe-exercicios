const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(typeof myFizzBuzz, 'function');

let actual = 3*5;
let expected = 'fizzbuzz';
assert.strictEqual(myFizzBuzz(actual), expected);

actual = 33;
expected = 'fizz';
assert.strictEqual(myFizzBuzz(actual), expected);

actual = 55;
expected = 'buzz';
assert.strictEqual(myFizzBuzz(actual), expected);

actual = 29;
expected = 29;
assert.strictEqual(myFizzBuzz(actual), expected);

actual = '55';
expected = false;
assert.strictEqual(myFizzBuzz(actual), expected);
