#include <iostream>

using namespace std;

int main() {
	/*
		��γ������ʹ��c������ִ�У�a��ֵҲ�����30
		������Ϊ��c�е�const���η�������һ�����������ϵġ����ɱ䡱��ͨ����ַ��Ȼ�ɸı�������
		������c++�У����޷�ͨ����ַȥ�޸�һ��const����
	*/
	const int a = 50;

	int* foo = (int *)&a;

	*foo = 30;

	cout << "a = " << a << endl << "foo = " << *foo << endl;

	return 0;
}