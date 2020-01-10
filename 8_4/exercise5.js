const assert = require('assert')

// escreva aqui o seu código
class Dog {
    constructor(name) {
        this.name = name;
        this.bark = function () {
            return `${this.name} is barking`;
        };
    }
}

let dog1 = new Dog("Apolo")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog1 instanceof Dog)
assert.equal(dog1.name, "Apolo")
assert.equal(dog1.bark(), "Apolo is barking")

let dog2 = new Dog("Arcos")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog2 instanceof Dog)
assert.equal(dog2.name, "Arcos")
assert.equal(dog2.bark(), "Arcos is barking")
