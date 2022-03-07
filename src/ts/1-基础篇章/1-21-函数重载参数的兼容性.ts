function fn(x: boolean): void;
function fn(x: string): void;
function fn(x: boolean) {
  console.log(x)
}

/**
 * 上面函数是无法通过 TS 编译的，因为实际实现 fn 函数的参数与上面两个签名不兼容，正确的代码如下
 */
/**
  function fn(x: boolean): void;
  function fn(x: string): void;
  function fn(x: boolean | string): void {
    console.log(x)
  } 
*/

