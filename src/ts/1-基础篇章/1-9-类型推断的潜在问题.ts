declare function handleRequest(url: string, method: "GET" | "POST"): void;

// ---cut---
// Change 1:
const req = { url: "https://example.com", method: "GET"};

// Change 2
handleRequest(req.url, req.method); // 这句无法通过ts的编译，原因在于req对象在被初始化赋值时，其内部的method属性被推断为了 string 类型，而
// handleRequest 方法内部，接收的method参数则要求是两个字面量的联合类型 "GET" | "POST"，string 和 "GET" | "POST" 这个联合类型是不兼容的，
// 因此在调用handleRequest方法时，无法通过编译，这个问题产生的根本原因便是由于TS在对 req对象进行类型推断时，将其内部的两个属性都推断为了 string类型
// 解决这个问题的方法有好几种，如下：

// 1 const req = { url: "https://example.com", method: "GET" as "GET" | "POST"};

// 2 handleRequest(req.url, req.method as "GET" as "GET");

// 3 const req = { url: "https://example.com", method: "GET"} as const;

// 这里有必要解释第三种方法，默认情况下 const req = { url: "https://example.com", method: "GET"}，req 会被推断为一种对象结构，其内部有属性 url 和 method，
// 而且都是string类型。那么如第三种方式在后面加上as const后，req会被推断为一个对象结构，其内部有属性 url 和 method，而且 url 和 method的值都是唯一确定的值，
// 分别是字符串 "https://example.com" 和 字符串 "GET"，这两个属性变成了唯一确定的不可变的字面量，也就是常量字符串, 而常量字符串 “GET”是 联合类型 "GET" | "POST" 
// 的向下兼容类型，自然也就通过了编译，如果 req 对象申明初始化后，其内部属性不会再修改，那么加上 as const 是很合适的

export {}