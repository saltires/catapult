/*
��֪ int ���ͱ��� A �ͱ��� B������ A �� B ��ֵ��Ϊ���ֵ����Ƚ� A �� B �Ĵ�С�������н�С�Ǹ�������ֵ��ֵΪ 50��Ҫ��ʹ�� c++ ����ǿ����Ŀ��������
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