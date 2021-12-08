const foo = 1
const bar = Buffer.from('1')

console.log(Buffer.isBuffer(foo)) // false
console.log(Buffer.isBuffer(bar)) // true

const A = Buffer.from("维权")
const B = Buffer.from("骑士")

const C = Buffer.concat([A, B]);

console.log(C.toString())