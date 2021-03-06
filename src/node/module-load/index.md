# Nodejs 模块加载机制

## 概述

讨论 Nodejs 的模块加载机制之前，我们必须清楚 Nodejs 中可能被加载的模块有三种：
- Nodejs 核心模块，如 fs、http、vm 等等
- 第三方 npm 模块
- 用户自己开发的模块

这里我们首先不去讨论 Nodejs 核心模块的加载，而是把它放到最后去说，第一步，让我们分析用户自己开发的模块是如何被加载的

## 用户模块如何被加载
在 Nodejs 中，require 函数被用于加载一个模块，当我们使用 require 加载一个用户模块时，它可能遇到的模块名是如下几种格式：
- 文件，相对路径，不含扩展名
- 文件，绝对路径，不含扩展名
- 文件，相对路径，包含扩展名
- 文件，绝对路径，包含扩展名
- 目录

对于 Nodejs 来说，加载模块必然需要读取模块内的内容，因此，一个包含扩展名的绝对路径是必须的

在 require 函数内部，会有如下几个重要的步骤：
- 路径分析
- 文件定位
- 编译执行

如上的步骤中，路径分析和文件定位的最终目的都是为了获取模块文件的绝对路径

那么 require 函数如何实现路径分析和文件定位的呢，比如，我们调用了 `require('./cash/cash')` 去尝试读取本地的一个模块，那么 require 函数内部会先使用 path 模块将我们传入的路径解析为一个绝对路径，然后判断这个绝对路径对应的模块是否存在。

很显然，上面的路径都不含扩展名，明显是不存在这样的文件的，那么 require 此时会尝试给这个绝对路径后面补足扩展名，扩展名的补足顺序分别是 `.js`、`.json`、`.node`，如果按照这三个扩展名依次尝试补足后，还是不存在这样的模块文件，那么 require 函数会认为我们传入的地址是一个目录，它会去尝试读取目录中 package.json 文件中的 main 字段，并去分析 main 字段指定的文件是否存在，如果还不存在，还会去尝试寻找该目录下的 index 文件，并依次补足扩展名尝试。如果依旧不能找到或者压根就不存在 package.json，nodejs 会尝试读取 node_modules 目录，而且是一级一级向上，直到磁盘根目录为止，当在磁盘根目录的 node_modules 目录中还是找不到这个模块时，node 便会抛出一个文件不能发现的错误

上面所描述的部分其实就是路径分析和文件定位的工作，其最终目的就是找到我们想要加载的模块文件的绝对路径，拿到模块文件的绝对路径后，便是尝试从缓存中读取内容了

在 Nodejs 中，模块加载有一个缓存优先的原则，对于已经加载过的模块，二次加载时是不会重新对这个模块进行内容读取和编译执行的，而是直接从缓存中读取第一次加载这个模块时通过编译执行后得到的模块对外输出对象，并返回

如果缓存中没有这个模块的记录，便会去读取模块文件的内容，并对它的头部和尾部进行一层自执行函数的包装，并给这个自执行函数传入一些提前定义的参数，如 module、require、exports、__filename、__dirname 等等，这也是为什么我们在模块内部天然就可以使用这些变量的原因

给模块内容加上一层自执行函数的封装后，node 会使用其核心模块 vm 在一层沙箱内部去执行这个自执行函数，之后，把 module.exports 对象的内容返回，require 函数也就完成工作了

当然，上面的 module 对象也是在 require 函数内部创建的，每个被加载的模块都会有一个单独的 module 对象，这个 module 对象也会被缓存起来

## 核心模块的加载
上面所阐述的模块加载机制其实并不适用于 nodejs 核心模块的加载，因为 nodejs 核心模块是作为二进制文件存储在内存中的，而且，nodejs 内部维护着一张表，这张表包含着核心模块名和模块地址的映射，因此对于核心模块来说，路径分析和文件定位这些步骤都是没有的，除此之外，核心模块被加载后，其缓存的位置和用户模块也是不一样的