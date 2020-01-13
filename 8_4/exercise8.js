const assert = require('assert')

function A(name) {
  this.name = name
  this.color = "red"
}

A.prototype.describe = function() {
  return `${this.name} - ${this.color}`
}

A.info = function() {
  return "This is a class"
}

// escreva aqui o seu código
class B{
    constructor(name) {
    this.name = name
    this.color = "red"
  }
  
  describe () {
    return `${this.name} - ${this.color}`
  }
  
  static info (){
    return "This is a class"
  }
}

let a = new A("Bastian")

assert.equal(typeof A.prototype, "object")
assert.ok(a instanceof A)
assert.equal(a.name, "Bastian")
assert.equal(a.color, "red")
assert.equal(a.describe(), "Bastian - red")
a.color = "yellow"
assert.equal(a.color, "yellow")
assert.equal(A.info(), "This is a class")

let b = new B("Bastian")

assert.equal(typeof B.prototype, "object")
assert.ok(b instanceof B)
assert.equal(b.name, "Bastian")
assert.equal(b.color, "red")
assert.equal(b.describe(), "Bastian - red")
b.color = "yellow"
assert.equal(b.color, "yellow")
assert.equal(B.info(), "This is a class")
