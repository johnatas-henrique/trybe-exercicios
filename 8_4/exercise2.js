const assert = require('assert')

// escreva aqui o seu código
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
let person = new Person("Diana", 34)

assert.equal(typeof Person.prototype, "object")
assert.ok(person instanceof Person)
assert.equal(person.name, "Diana")
assert.equal(person.age, 34)
