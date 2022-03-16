// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig((config) => {
		config.baseURL = 'http://ts.lagou.uieee.com/api/v2'
		config.dataType = "json"
		config.showLoading = true
		config.loadingText = "请求中..."
		config.loadingTime = 800
		config.originalData = true
		config.loadingMask = true
		config.header = {
			"content-type": "application/json;charset=UTF-8",
		}

		return config
	});

	Vue.prototype.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		const token = uni.getStorageSync("token");
		config.header = {
			...config.header,
			Authorization: "Bearer " + token,
			Accept: "application/json"
		}
		// 演示custom 用处
		// if (config.custom.auth) {
		//   config.header.token = 'token'
		// }
		// if (config.custom.loading) {
		//  uni.showLoading()
		// }
		// 演示
		// if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
		// 	return Promise.reject(config)
		// }
		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptors.response.use((res) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		// if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
		//    	return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
		// if (response.config.custom.verification) { // 演示自定义参数的作用
		//   	return response.data
		// }
		if (res.code == 401) {
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			vm.$u.toast("当前接口访问失败");
			return false;
		} else {
			// res为服务端返回值，可能有code，result等字段
			// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return res;
		}
		console.log(res)
		return res
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		console.log(response)
		return Promise.reject(response)
	})
};

export default {
	install,
};
