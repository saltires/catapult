/**
 * 已知路径 A （/foo/bar）,路径B（./b/../a.html）,请将路径 A 和 B 拼接后的结果输出
 */
const path = require('path')
const { log } = console

const A = '/foo/bar'
const B = './b/../a.html'

log(path.join(A, B))

// \foo\bar\a.html