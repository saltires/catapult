/*
	��ʵ��һ���������ĺ꣬����������ʵ�� assert ������Ч��
*/
#ifndef Assert
#define Assert(ex) {\
	if (!(ex)) {\
		printf("���ļ�%s�ĵ�%d�з����˴���!\n", __FILE__, __LINE__);\
		exit(1);\
	}\
}
#endif // !Assert

#include <stdio.h>


int main() {
	Assert(3 > 4);
	return 0;
}