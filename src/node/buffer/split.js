/**
 * 实现 Buffer 的 split 方法
 */
const split = function (buffer, seq) {
  const seqlen = Buffer.from(seq).length
  let start = 0
  let offset = 0
  const ret = []

  while ((offset = buffer.indexOf(seq, start)) !== -1) {
    ret.push(buffer.slice(start, offset))
    start = offset + seqlen
  }

  ret.push(buffer.slice(start))

  return ret
}

const foo = Buffer.from('abcdce')

const bar = split(foo, 'c')

bar.forEach(item => {
  console.log(item.toString())
})