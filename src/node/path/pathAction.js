/**
 * 已知一个文件的绝对路径（/usr/local/admin/foo.txt），分别求出其扩展名、文件名称、目录名称
 */

const path = require('path')
const chalk = require('chalk')
const { log } = console

const FOO = '/usr/local/admin/foo.txt'

const _extname = path.extname(FOO)
const _filename = path.basename(FOO)
const _dirname = path.dirname(FOO)

log(`
扩展名: ${chalk.red(_extname)}
文件名称: ${chalk.green(_filename)}
目录名称: ${chalk.yellow(_dirname)}
`);

// 扩展名: .txt
// 文件名称: foo.txt
// 目录名称: /usr/local/admin