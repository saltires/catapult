/**
 * 观察如下函数，判断其是否能通过 TS 编译，如果不能，请使用 instanceof 类型保护的方法来修改代码，使其能通过 TS 编译
 */
// function logValue(x: Date | string) {
//   console.log(x.toUpperCase());
// }

 export {}

/**
 * 上述程序，TS 编译无法通过
 * x 是一种多种类型组合成的联合类型，它有可能是 Date 和 string 中的任意一种
 * toUpperCase 函数是 string  类型独有的方法，但是 x 可能是 Date 类型，在强类型语言中，这是一种错误
 * 解决方法就是收窄 x 的类型，因为 x 有可能的两种类型都具有特有的原型（一个是 Date 一个是 String），因此 instanceof 可以很好的
 * 起到类型收窄的功能
 */

/**
function logValue(x: Date | string) {
  if (x instanceof String) {
    console.log(x.toUpperCase());
  }
}
*/