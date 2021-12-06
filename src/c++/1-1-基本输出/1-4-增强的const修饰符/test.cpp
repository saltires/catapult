#include <iostream>

using namespace std;

int main() {
	/*
		这段程序如果使用c编译器执行，a的值也将输出30
		这是因为，c中的const修饰符并不是一种真正意义上的“不可变”，通过地址依然可改变其内容
		但是在c++中，是无法通过地址去修改一个const常量
	*/
	const int a = 50;

	int* foo = (int *)&a;

	*foo = 30;

	cout << "a = " << a << endl << "foo = " << *foo << endl;

	return 0;
}