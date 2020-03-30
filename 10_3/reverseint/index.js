// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    stringN = n
    stringN = stringN.toString().split('').reverse().join('');
    stringN = parseInt(stringN);
    if (n < 0) return stringN * -1;
    return stringN;
}

module.exports = reverseInt;
