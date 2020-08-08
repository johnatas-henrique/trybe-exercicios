function addNumbers(numbers) {
    const somaReduce = numbers.reduce((acum, now) => acum + now);
    return somaReduce;
}
module.exports = addNumbers;
