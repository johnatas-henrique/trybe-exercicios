const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');
const newArr = [1, 2, 3, 4]
myRemoveWithoutCopy(newArr, 2)

test('testa receber um array e um elemento e retornar o array sem o elemento', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    expect(newArr).not.toEqual([1, 2, 3, 4])
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
