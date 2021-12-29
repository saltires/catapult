/**
 * 请分别使用函数声明和函数表达式定义一个接收两个参数（A 和 B）的求和函数，而且 A 的默认值是 10，B 的默认值是 20
 * @see https://ts.xcatliu.com/basics/type-of-function.html
 */

// 1 函数表达式
const fun1: (param1: number, param2: number) => number = (param1: number = 10, param2: number = 20) => {
  return param1 + param2
} 

// 2 函数声明
function func2(param1: number = 10, param2: number = 20) {
  return param1 + param2
}