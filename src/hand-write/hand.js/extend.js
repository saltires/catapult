function Parent(name) {
  this.name = name
}

Parent.prototype.say = function() {
  console.log(1)
}

function Child(name, age) {
  Parent.call(name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child