#include <iostream>

using namespace std;

int& foo(int& bar);

int main() {
	int number = 50;


	// ��Ϊfoo�������ص������ã���˿���ֱ����foo��������ֵ��Ϊ��ֵ���и�ֵ
	foo(number) = 1000;

	cout << number << endl; // 1000
	return 0;
}

int& foo(int& bar) {
	bar = 100;
	return bar;
}