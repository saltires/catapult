/**
 * 请编写一个接口用来约束这样的函数，它具有参数 A 和参数 B，其类型都为字符串，返回值为布尔类型
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let search: SearchFunc

search = function(source: string, subString: string) {
  return false
}