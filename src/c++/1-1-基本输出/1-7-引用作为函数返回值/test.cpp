#include <iostream>

using namespace std;

int& foo(int& bar);

int main() {
	int number = 50;


	// 因为foo函数返回的是引用，因此可以直接拿foo函数返回值作为左值进行赋值
	foo(number) = 1000;

	cout << number << endl; // 1000
	return 0;
}

int& foo(int& bar) {
	bar = 100;
	return bar;
}