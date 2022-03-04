/**
 * 对泛型进行约束
 */
 function longest<T>(a: T, b: T): T {
  if (a.length > b.length) {
      return a
  } else {
      return b
  }
}

/**
 * 如上代码，tS 编译是肯定无法通过的，因为 T 不一定包含 length 属性，此时需要对
 * T 进行约束，约束它一定包含 length 属性,具体约束规则如下
 */

/**
 function longest<T extends { length: number }>(a: T, b: T): T {
  if (a.length > b.length) {
    return a
  } else {
      return b
  }
} 
 */