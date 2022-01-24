const lodash = require('lodash')

function square(n) {
  return n * n;
}
 
var addSquare = lodash.flowRight(square, lodash.add);
console.log(addSquare(1, 2))