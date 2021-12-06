#include <iostream>

using namespace std;

void test(int& a);

int main() {
	int a = 20;

	int& b = a;

	b = 30;

	test(a);

	cout << a << endl << b << endl;

	return 0;
}

void test(int & a) {
	a = 50;
}