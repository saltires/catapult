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
 * 关于函数重载，具体参考 https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
 */