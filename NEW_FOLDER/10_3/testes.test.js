const calcs = require('./calcs')

test('soma 1 e 2 para dar 3', () => {
   expect(calcs(1, 2)).toEqual(3)
})
