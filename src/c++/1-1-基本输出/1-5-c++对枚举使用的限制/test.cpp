/*
	c 语言中枚举即是 int 类型，给枚举变量赋值时，使用枚举关键词和 int 完全是相同效果，而 c++ 中的枚举加强了这一规范，请举例说明
*/
#include <iostream>

using namespace std;

int main() {
	enum Season {
		wed,
		foo,
		bar
	};

	enum Season x = wed;
	// 下面这段被注释的代码可在c中运行，但是在c++中被认为是非法,在c++中，枚举变量x只能使用wed、foo、bar这三个枚举值进行赋值，
	// 虽然实际上他们的值确实是unsigned int类型，但是语法上就是不允许使用整型值对枚举变量赋值，这非常恰当，完善了c枚举语法的不合理性
	// x = 1;

	cout << x << endl;

	return 0;
}