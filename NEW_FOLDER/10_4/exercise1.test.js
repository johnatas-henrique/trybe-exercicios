const uppercase = require('./exercise1');

test('teste callback', (done) => {
  uppercase('qualquer valor', (str) => {
    expect(str).toBe('QUALQUER VALOR');
    done();
  });
});
