/**
 * 问题描述：在创建 Vue 组件时，如果同时传递了 template 选项和 render 函数选项，
 * 那么最后渲染组件使用的是 template 里的内容还是 render 函数中的内容
 * 
 * vue 源文件【src\platforms\web\entry-runtime-with-compiler.js】 的 $mount 函数中，对上述情况做了处理
 * 
 * 其中有一段是这样处理的：
 * 
 * if (!options.render) { 
 *  // 将 options中的template 选项转为render函数存到 options.render 上 
 * }
 * 
 * 也就是说，如果同时传递了 template 模板 和 render 函数，那么上面的 if 代码块中的处理 template 模板的代码压根不会执行
 * 那么答案显而易见，肯定是渲染 render 函数中的内容
 */