module.exports = mySum;

function mySum(arr) {
    return arr.reduce((total, current) => total + current, 0);
}
