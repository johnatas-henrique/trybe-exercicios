const myIndexOf = require('./myIndexOf')
const arrTest = [1, 2, 3, 4];

test('testa se retorna o array sem o segundo parametro', () => {
    expect(myIndexOf(arrTest, 3)).toBe(2)
    expect(myIndexOf(arrTest, 5)).toBe(-1)
}
)
