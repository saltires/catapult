"use strict";
/**
 * 请定义如下函数，接收不定长参数，其第一个参数是一个数组（any[]），后面的参数未知，该函数会把从第二个参数开始的后面所有参数值 push 到第一个参数中
 * @see https://ts.xcatliu.com/basics/type-of-function.html
 */
function func1(arr, ...rest) {
    return arr.concat(rest);
}
