const getUserName = require('./exercise2and3');

describe('teste no async e await T/F', () => {
    test('verdadeira', async () => {
        const verdadeira = await getUserName(4);
        expect(verdadeira).toEqual('Mark');
    })
})
