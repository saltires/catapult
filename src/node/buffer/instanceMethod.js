const A = Buffer.alloc(100);

A.write("This is a beautiful world!");

const B = A.slice(10)

console.log(A.toString())
console.log(B.toString())