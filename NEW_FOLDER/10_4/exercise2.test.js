const getUserName = require('./exercise2and3');

describe('teste de promise positivo e negativo', () => {
  test('testando positivo', () => {
    return getUserName(4)
      .then((positivo) => expect(positivo).toEqual('Mark'))
      .catch((fail) => expect(fail).toEqual('User with 1 not found.'))
  })
  test('testando negativo', () => {
    return getUserName(1)
      .then((positivo) => expect(positivo).toEqual('qualquerNome'))
      .catch((fail) => expect(fail).toEqual({ 'error': 'User with 1 not found.' }))
  })
})
