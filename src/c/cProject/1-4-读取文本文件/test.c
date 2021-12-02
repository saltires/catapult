/*
	请尝试以只读模式打开一个 txt 文件（里面内容可以为任意一篇英文文章），并读取输出其中的内容
*/
#if 0
#include <stdio.h>
#include <stdlib.h>
#pragma warning(disable:4996) 

int main() {
	FILE* file = NULL;
	// const 在 * 前面表示 *fileName 不可修改，但是fileName可修改
	const char* fileName = "../test1.txt";
	fileName = "../test.txt";

	file = fopen(fileName, "r");

	if (!file) {
		perror("File Open failed!");
		/* 关于EXIT_FAILURE，可参考：https://zh.cppreference.com/w/c/program/EXIT_status */
		exit(EXIT_FAILURE);
	}

	int c;
	while ((c = fgetc(file)) != EOF) {
		putchar(c);
	}

	return 0;
}
#endif
