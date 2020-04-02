const sum = require('./sum')

test('testa soma 1+2 = 3', () => {
    expect(sum(1, 2)).toEqual(3)
})
    