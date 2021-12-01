/**
 * 已知一个文件的路径（/usr/local/admin/foo.txt），分别求出其扩展名、文件名称、目录名称，并判断该路径是否是绝对路径
 */

const path = require('path')
const chalk = require('chalk')
const { log } = console

const FOO = '/usr/local/admin/foo.txt'

// 1 第一种方式，逐个调用path模块下不同api，分别求出扩展名、文件名称、目录名称
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

// 2 第二种方式，直接使用解析路径的方法
const parsedObj = path.parse(FOO)

log(parsedObj)


// 判断FOO是否是绝对路径
log(chalk.yellow(path.isAbsolute(FOO) === true ? 'FOO是绝对路径' : 'FOO不是绝对路径'))