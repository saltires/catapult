exports.foo = done => {
  console.log('hello gulp');
  done();
}

/**
 * 使用 gulp 创建构建任务
 * gulp 作为最主流的构建系统，已经迭代了多个版本
 * 其在4.0以前，gulp 创建任务需要在gulpfile中引入gulp，并使用gulp.task创建任务
 * 4.0以后，使用gulp创建某个任务，只需导出个函数，如上面代码中
 * 导出了一个名为foo的成员，其为一个函数，它即是gulp的一个任务，其中参数 done 为任务结束的标志
 * gulp的每一个任务都默认是异步任务，要么在任务（函数）中返回一个promise，要么通过调用gulp提供的donw参数来标志任务（异步任务）的结束
 * 否则gulp会认为任务没有正常结束，会给出错误提示
 */