/**
 * 请使用两种类型断言的方式实现将联合类型 string | number 断言为 string
 * @see https://ts.xcatliu.com/basics/type-assertion.html
 */
type aliNumber = string | number

const number1: aliNumber = '34'

console.log((number1 as string).length)
console.log((<string>number1).length)