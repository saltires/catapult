/*
	@see https://segmentfault.com/a/1190000015887453
*/
#include <iostream>

using namespace std;

void foo(int& bar);

int& bar();

int main() {
	int zoo = 3;
	int& zooLi = zoo;

	foo(zooLi);

	cout << zoo << endl;

	cout << bar() << endl;

	return 0;
}

void foo(int& bar) {
	bar = 100;
}

int& bar() {
	int* c = (int*)malloc(sizeof(int));

	int& number = *c = 100;

	free(c);

	return number;
}