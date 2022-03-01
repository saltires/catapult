function liveDangerously(x?: number | null) {
  // 这里如果直接调用 x.toFixed 方法时，编译是不会通过的，因为x是可选属性，这就意味着用户调用liveDangerously函数时，可以不传递任何参数
  // 那么x就是undefined。而且其值类型是一个包含null的联合类型，即使x有值，也有可能是null
  // 因此只有在确定x不是null和undefined的时候，x才能调用toFixed方法
  // 解决这个问题的方法有多种，这里给出几种
  console.log(x.toFixed());

  // 1 if (x !== undefined && x !== null) { console.log(x.toFixed()); }

  // 2 console.log((x as number).toFixed());

  // 3 console.log(x!.toFixed());

  // 这里特别需要关注的是第三种方法，在这里，感叹号作为一个非空断言运算符出现，他的作用是什么呢？ 当然是断言其非空
  // 那么，ts是如何实现的呢。我认为是这样实现的, 在上面的原始场景下，x的值很明显有三种，用户没传，此时是undefined，如果用户传了null，那就是null，
  // 如果用户传了数字,那就是 number。此时非空断言!起到的作用便是从 x 可能的三种类型中删除 null 和 undefined，那么这时，x只剩下了 number这一种类型，
  // 自然也就编译通过了
}

/**
 * 思考题: 类似于上面的代码，但是有稍稍改动，请思考如下代码是否能通过编译,如果能，请说出原因，如果不能，请说出为什么
 * 
  function liveDangerously(x?: number | null | string) {
    console.log(x!.toFixed());
  }
 */

export {}