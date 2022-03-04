// type HY = {
//   (a: string): void;
//   desc: string;
// }

interface HY {
  (a: string): void;
  desc: string;
}

/**
 * 上述的两种方式都可以解决函数上有属性的问题
 */

function greeter(fn: HY) {
  fn("Hello, World" + fn.desc);
}

export {}