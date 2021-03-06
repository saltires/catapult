/**
 * Vue 作为一个优秀的 SPA 应用前端框架，它为开发者提供了多个生成版本 Vue
 * 这样，不同版本的 Vue 能适应不同的运行环境，而且不同版本的 Vue 的运行时效率也是不同的。
 * 
 * 那么主要有哪些版本呢？
 * 
 * 区分这些不同生产版本 Vue 主要从如下两个方面：模块化方式以及是否包含编译器
 * 
 * 1 根据不同的模块化方式，存在如下格式的生产版本  Vue 文件： 【‘vue.common.js’，‘vue.esm.js’， ‘vue.js’】，这三种分别对应着 commonjs、es6module、umd 
 * 
 * 2 根据是否包含编译器，则又可以分为：【'vue.runtime.js', 'vue.js'】，文件名中间包含 runtime 标识符的也就意味着，该版本只包含运行时代码，不包含编译器，这个版本的运行效率最高
 * 
 * 为什么运行时版本的运行效率最高呢？因为包含编译器的完整版，其多出了3000多行的编译器代码，虽然这样版本的 Vue 支持解析用户创建 Vue 实例时传递过来的 template 选项，
 * 
 * 并将其转为 render 函数，但是这样根本没有什么实际意义，因为 Vue 推荐使用单文件组件的组件化开发方式，也就是说，开发者绝大多数时刻都在编写单文件组件代码，而单文件组件
 * 
 * 中，是支持 template 模板标签的。单文件组件里面的内容会在项目运行前，项目构建之时被编译为 render 函数。
 * 
 * 说回正题，运行时版本Vue和完整版Vue的区别在哪呢？
 * 
 * 就是是否包含可以解析 template 选项的编译器，不包含编译器的运行时版本，其代码更少，运行效率更高，如通过 VueCLi 创建的项目，其默认使用的就是运行时版本的 Vue，并且是
 * 
 * ESMdolue版本的 Vue，也就是 vue.runtime.esm.js 
 */