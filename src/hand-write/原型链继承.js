function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child (name, age) {

  Parent.call(this, name);
  
  this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child = new Child('dasda', 20)

for (let x in child) {
  console.log(x)
}

console.log(Object.keys(child))