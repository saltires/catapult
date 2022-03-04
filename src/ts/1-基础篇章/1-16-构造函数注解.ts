/**
 * 观察 A、B、C 函数，给他们补足类型声明，使其能通过 TS 编译
 */

// A 模拟的是 Symbol 函数
function foo(fn: A) {
  return fn('x');
}

// B 模拟的是 Promise 函数
function foo1(fn: B) {
  return new fn('x');
}

// C 模拟的是 Date 函数
function foo2(fn: C) {
  fn('x');
  return new fn('x');
}

// 观察上述 A、B、C 结构可以发现，A 是作为普通函数调用，B 是作为构造函数调用，C 是既作为普通函数调用也可以作为构造函数调用
// 因此补足的类型声明如下：

/**
  type A = {
    (a: string): void;
  }

  type B = {
    new (a: string): void;
  }

  type C = {
    new (a: string): void;
    (a: string): void;
  }
*/

export {}