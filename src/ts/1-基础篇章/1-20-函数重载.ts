function makeDate(a: number): Date
function makeDate(a: number, b: number, c: number): Date
function makeDate(a: number, b?:number, c?:number): Date | undefined {
  if (a) {
      if (b && c) {
          return new Date(a, b, c)
      } else {
          return new Date(a)
      }
  }
  
  return undefined
}

makeDate(1, 2)
makeDate(1)
makeDate(1, 2, 3)

/**
 * 前两个 makeDate 是函数签名 并没有函数具体的实现
 * 最后一个 makeDate 则是对函数具体的实现，里面需要对不同参数情形做判断和处理
 */

/**
 * 关于函数重载，具体参考 https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
 */