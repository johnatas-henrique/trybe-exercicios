const mySum = require('./mySum');

test('testa se a função soma com o reduce', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10)
    expect(mySum([1, -2, -3, 4])).toBe(0)
})

