const verify = require('./password-verification');
const assert = require('assert');

assert.equal(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));
// Password should not be null
assert(!verify(null));
// Password should have one uppercase letter at least
assert(!verify('gandalfthegray'));
// Password should have one lowercase letter at least
assert(!verify('YOUSHALLNOTPASS'));
// Correct password
assert(verify('G4nd4lfTh3Wh1t3'));
