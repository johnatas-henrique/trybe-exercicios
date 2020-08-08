const myRemove = require('./myRemove');
const arrayNew = [1, 2, 3, 4, 5];
myRemove(arrayNew, 3)
test('recebe um array e retorna uma cópia do array sem o item passado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    expect(arrayNew).toEqual([1, 2, 3, 4, 5])
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
