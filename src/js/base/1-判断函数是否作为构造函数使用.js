function Foo() {
  if (!(this instanceof Foo)) {
    console.log('你并没有把Foo当做构造函数使用')
  } else {
    console.log('Foo被当做构造函数使用')
  }
}

// new Foo()
Foo()