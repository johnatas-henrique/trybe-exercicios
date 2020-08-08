const myFizzBuzz = require('./myFizzBuzz');

test('testa se um número é divisível por um valor e retorna uma string', () => {
    expect(myFizzBuzz(60)).toBe('fizzbuzz')
    expect(myFizzBuzz(24)).toBe('fizz')
    expect(myFizzBuzz(40)).toBe('buzz')
    expect(myFizzBuzz(8)).toBe(8)
    expect(myFizzBuzz('teste')).toBe(false)
})
