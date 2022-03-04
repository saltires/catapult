function toFixed(x?: number) {
  if (typeof x === 'number') {
    return 3.14;
  } else {
    return 3
  }
}

/**
 * 在只有一个可选参数的情形下，可选参数非常容易理解
 * 上面的程序，x 便是一个可选参数，调用 toFixed 函数时，可传可不传
 * 也因此，函数内部，x 的值就变为了 number | undefined
 * 此时，在函数内部便可以使用类型收窄去解决，如上面的 typeof 类型保护
 */