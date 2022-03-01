/**
 * 问题描述：在一个常规化的 Vue 项目中，通常包含着 Vuex、VueRouter 等插件，那么如何判断项目中是否已安装某个插件呢？
 * 
 * Vue 的强大离不开它丰富的插件系统，例如 VueRouter、Vuex等
 * 
 * 那么这些插件是如何安装的呢？
 * 
 * Vue 提供了 Vue.use 方法以供用户注册插件，用户可以提供一个具有instal方法的对象或者是直接提供一个函数，在这个函数中，Vue 
 * 
 * 会把 Vue 构造函数作为首个参数传入，用户可以在这个函数中书写注册插件的代码
 * 
 * 在这里，我们不展开讨论插件是如何编写的，而是看看 Vue 内部如何管理被注册的插件
 * 
 * 在 vue\src\core\global-api\use.js 文件中，是 Vue.use 这个API的全部逻辑
 * 
 * 其中有两句代码可以看出 Vue 内部是如何管理和存储这些插件的
 * 
 * const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
 * installedPlugins.push(plugin)
 * 
 * 上面代码中的 this 指的是 Vue 构造函数本身
 * 
 * 那么显而易见，Vue._installedPlugins 数组中存储了所有的已安装插件，通过遍历这个数组，便可以判断出所有的已安装插件
 * 
 * 但是，_installedPlugins是以下划线开头的标识符，很明显，Vue内部并不推荐用户直接使用这个数组
 * 
 * 那么还有其他方法来判断是否安装某个插件吗？
 * 
 * 很简单，因为大多数插件在安装过程中，都会在 beforeCreate 钩子中把插件实例对象挂载到 Vue.prototype 原型对象上，以方便用户
 * 
 * 在组件实例中直接使用类似 this.$router(这是获取VueRouter插件实例) 来获取插件提供的功能
 * 
 * 那么只需在组件实例上判断是否包含此插件实例就可以判断该项目中是否安装此插件
 */
