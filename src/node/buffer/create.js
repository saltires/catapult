// 01 安全的分配方式
const foo = Buffer.alloc(10);

foo.fill(1);

// 02 不安全的分配方式
const bar = Buffer.allocUnsafe(10);

bar.fill(2);

// 03 使用字符串初始化一块Buffer
const foobar = Buffer.from('knight')

console.log(foo)
console.log(bar)
console.log(foobar)