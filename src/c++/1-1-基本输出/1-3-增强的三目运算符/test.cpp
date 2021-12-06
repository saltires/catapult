/*
已知 int 类型变量 A 和变量 B，变量 A 和 B 的值皆为随机值，请比较 A 和 B 的大小，将其中较小那个变量的值赋值为 50，要求使用 c++ 中增强的三目运算符完成
*/
#include <iostream>
#include <stdlib.h>

using namespace std;

int main() {
	srand((unsigned)time(NULL));

	int A = rand();
	int B = rand();

	(A > B ? A : B) = 50;

	cout << A << endl << B << endl;

	return 0;
}