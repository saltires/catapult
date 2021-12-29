/**
 * 请编写一个接口用来约束具有以下特点的对象：
  - 一定具有 name 属性，其类型为字符串，并且该属性只读
  - 可能具有 age 属性，如果有，其类型为数字
  - 除上面两个属性以外，可能还具有名称未知、数量未知的属性，而且值类型也是未知
 */
interface Foo {
  name: string
  age?: number
  [prop: string]: any
}

const foo: Foo = {
  name: 'qishi',
  age: 20,
  qishi: 'hhh'
}