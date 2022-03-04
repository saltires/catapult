/**
 * 观察如下函数，判断其是否能通过 TS 编译，如果不能，请使用 typeof 类型保护的方法来修改代码，使其能通过 TS 编译
 */
function padLeft(padding: number | string, input: string) {
  return " ".repeat(padding) + input;
}

/**
 * 上述程序，TS 编译无法通过
 * 原因在于，padding 是一种多种类型组合成的联合类型，它有可能是 number、string 中的任意一种
 * repeat 函数接收的 number 类型的值，如果 padding 是string类型，在强类型语言中，这是一种错误
 * 解决方法就是收窄padding的类型，因为 padding 有可能的两种类型都是基本类型，因此 typeof 可以很好的
 * 起到类型收窄的功能
 */

/**
 function padLeft(padding: number | string, input: string) {
    if (typeof padding === 'number') {
      return " ".repeat(padding) + input;
    }
  }
*/