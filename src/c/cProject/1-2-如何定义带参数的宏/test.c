/*
	请实现一个带参数的宏，它可以用来实现 assert 函数的效果
*/
#ifndef Assert
#define Assert(ex) {\
	if (!(ex)) {\
		printf("在文件%s的第%d行发生了错误!\n", __FILE__, __LINE__);\
		exit(1);\
	}\
}
#endif // !Assert

#include <stdio.h>


int main() {
	Assert(3 > 4);
	return 0;
}