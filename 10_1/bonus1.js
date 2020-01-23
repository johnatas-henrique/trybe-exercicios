const assert = require('assert');

function getChange(payable, paid) {
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    const change = [];
    const { length } = coins;
    let remaining = paid - payable;
  
    // escreva seu código aqui...
    if (remaining < 0) throw new Error('paid value is not enough');
    
    while(remaining >= 200){
        remaining -= 200;
        change.push(200);
    }
    while(remaining >= 100){
        remaining -= 100;
        change.push(100);
    }
    while(remaining >= 50){
        remaining -= 50;
        change.push(50);
    }
    while(remaining >= 20){
        remaining -= 20;
        change.push(20);
    }
    while(remaining >= 10){
        remaining -= 10;
        change.push(10);
    }
    while(remaining >= 5){
        remaining -= 5;
        change.push(5);
    }
    while(remaining >= 2){
        remaining -= 2;
        change.push(2);
    }
    while(remaining >= 1){
        remaining -= 1;
        change.push(1);
    }

    return change;
  }

  let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

