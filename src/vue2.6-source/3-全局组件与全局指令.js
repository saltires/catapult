/**
 * 问题描述：Vue 框架提供了 Vue.component、Vue.directive、Vue.filter 这三个 API 以供用户注册全局组件、全局指令和全局过滤器，那么 Vue-2.6 的源码中，全局存储的组件、指令、过滤器被存放在什么位置呢？
 * 
 * Vue.component、Vue.directive、Vue.filter 这三个API都属于Vue构造函数的静态方法
 * 
 * 并且这三个静态方法都是与平台无关的API，因此，它被挂载到 Vue 构造函数的位置必然是在 src/core 文件夹下
 * 
 * 路径就是在 vue\src\core\global-api\index.js 中，在这个文件中，Vue 源代码调用了 initAssetRegisters（Vue）方法
 * 
 * 向Vue构造函数上挂载了这三个全局API，并且用户在使用这三个API时，所注册的全局组件、全局指令以及全局过滤器都被存放到了 Vue.options 对象下
 * 
 * 具体参考 vue\src\core\global-api\assets.js
 * 
 * 关键代码如下：this.options[type + 's'][id] = definition，这里的this就是Vue构造函数,因为用户调用时是这样调用的：
 * 
 * Vue.component(xx, yyy)
 * 
 */