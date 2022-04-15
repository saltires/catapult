/**
 * 去除字符串头尾空格的思路是：
 * 匹配到头部或尾部的那一连串空格，并将之替换为空字符串
 */

function Trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g, '')
}

const str = 'front end nodejs nodejs end front   '

console.log(Trim(str) === 'front end nodejs nodejs end front');