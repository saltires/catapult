/**
 * 观察如下函数，判断其是否能通过 TS 编译，如果不能，请使用 in 类型保护的方法来修改代码，使其能通过 TS 编译
 */
 type Fish = { swim: () => void };
 type Bird = { fly: () => void };
 
 function move(animal: Fish | Bird) {
     return animal.fly();
 }


 export {}

/**
 * 上述程序，TS 编译无法通过
 * animal 是一种多种类型组合成的联合类型，它有可能是 Fish 和 Bird中的任意一种
 * fly 函数是 Bird 独有的方法，但是 animal 可能是 Fish 类型，在强类型语言中，这是一种错误
 * 解决方法就是收窄 animal 的类型，因为 animal 有可能的两种类型都是对象结构，因此 in 可以很好的
 * 起到类型收窄的功能
 */

/**
function move(animal: Fish | Bird) {
  if ('fly' in animal) {
    return animal.fly();
  }
}
*/