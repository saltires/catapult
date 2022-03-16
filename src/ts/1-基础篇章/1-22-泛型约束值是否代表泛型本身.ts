/**
 * 观察如下代码，判断其是否能通过 TS 编译，如果不能，请修改它让其通过编译
 */

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}

/**
 * 解析：函数 minimumLength 的返回值类型是泛型参数 Type，在第 12 行直接返回了一个字面量对象 { length: minimum }，
 * 但是，该字面量对象并不能代表泛型参数 Type，因此，无法通过编译
 */

/* type LEN = {
  length: number
}

function minimumLength<Type extends LEN>(
  obj: Type,
  minimum: number
): Type | LEN {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
} */